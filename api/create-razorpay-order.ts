import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { amount, currency = 'INR', receipt, notes } = req.body;

    // Validate amount
    if (!amount || amount < 100) {
      return res.status(400).json({ error: 'Invalid amount. Minimum is 100 paise (₹1)' });
    }

    const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
    const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      console.error('Missing Razorpay credentials');
      return res.status(500).json({ error: 'Payment system not configured' });
    }

    // Create order with Razorpay API
    // payment_capture: 1 means AUTO-CAPTURE immediately
    const orderData = {
      amount: amount,
      currency: currency,
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1, // THIS IS THE KEY - Auto capture!
      notes: notes || {},
    };

    const auth = Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64');

    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Razorpay API Error:', errorText);
      return res.status(500).json({ error: 'Failed to create order' });
    }

    const order = await response.json();

    return res.status(200).json({
      success: true,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error('Create order error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

