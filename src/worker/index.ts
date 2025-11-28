import { Hono } from "hono";
import { cors } from "hono/cors";

interface Env {
  RAZORPAY_KEY_ID: string;
  RAZORPAY_KEY_SECRET: string;
}

const app = new Hono<{ Bindings: Env }>();

// Enable CORS for frontend requests
app.use("/api/*", cors());

// Create Razorpay Order with Auto-Capture
app.post("/api/create-razorpay-order", async (c) => {
  try {
    const { amount, currency = "INR", receipt, notes } = await c.req.json();

    // Validate amount
    if (!amount || amount < 100) {
      return c.json({ error: "Invalid amount. Minimum is 100 paise (₹1)" }, 400);
    }

    const RAZORPAY_KEY_ID = c.env.RAZORPAY_KEY_ID;
    const RAZORPAY_KEY_SECRET = c.env.RAZORPAY_KEY_SECRET;

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      console.error("Missing Razorpay credentials");
      return c.json({ error: "Payment system not configured" }, 500);
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

    const auth = btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Razorpay API Error:", errorText);
      return c.json({ error: "Failed to create order" }, 500);
    }

    const order = await response.json();

    return c.json({
      success: true,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Create order error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

export default app;
