# Testing International Payments Guide

This guide will help you test whether international payments (USD) are working correctly on your Book Demo page.

## Quick Testing Methods

### Method 1: URL Parameter Override (Easiest)

You can manually override the location detection by adding a URL parameter:

**Test as International Customer:**
```
https://your-domain.com/book-demo?location=international
```
This will show **$10 USD** pricing.

**Test as Indian Customer:**
```
https://your-domain.com/book-demo?location=india
```
This will show **₹199 INR** pricing.

### Method 2: Browser Console Debugging

1. Open your Book Demo page
2. Open Browser Developer Tools (F12 or Right-click → Inspect)
3. Go to the **Console** tab
4. Look for these debug messages:

**For Indian customers, you should see:**
```
🌍 Location Detection: {country: "IN", countryName: "India", isIndia: true, currency: "INR", price: "₹199"}
💳 Payment Configuration: {location: "India", amount: 19900, currency: "INR", display: "₹199", ...}
```

**For International customers, you should see:**
```
🌍 Location Detection: {country: "US", countryName: "United States", isIndia: false, currency: "USD", price: "$10"}
💳 Payment Configuration: {location: "International", amount: 1000, currency: "USD", display: "$10", ...}
```

### Method 3: VPN Testing

1. Install a VPN extension (e.g., Windscribe, TunnelBear, or any VPN service)
2. Connect to a server outside India (e.g., USA, UK, Canada)
3. Visit your Book Demo page
4. You should see **$10 USD** pricing
5. Check the browser console for location detection logs

### Method 4: Network Tab Inspection

1. Open Developer Tools → **Network** tab
2. Visit the Book Demo page
3. Look for the API call to `/api/create-razorpay-order`
4. Click on it and check the **Request Payload**:
   - Should show `"currency": "USD"` and `"amount": 1000` for international
   - Should show `"currency": "INR"` and `"amount": 19900` for India

## Testing the Payment Flow

### Step 1: Verify Location Detection

1. Open the Book Demo page
2. Check the price badge - it should show the correct currency
3. Check browser console for location detection logs

### Step 2: Test Order Creation

1. Fill in the form with test data
2. Click "Pay & Book Demo"
3. Check browser console for:
   ```
   💳 Payment Configuration: {...}
   ✅ Order created successfully: order_xxxxx
   ```

### Step 3: Test Razorpay Checkout

1. The Razorpay payment modal should open
2. **Check the amount displayed in the modal:**
   - Should show **₹199.00** for Indian customers
   - Should show **$10.00** for international customers
3. **Check the currency symbol** in the Razorpay modal

### Step 4: Test with Test Cards

**For INR (Indian) Payments:**
- Use Razorpay test cards: https://razorpay.com/docs/payments/test-cards/
- Example: Card Number: `4111 1111 1111 1111`, CVV: `123`, Expiry: Any future date

**For USD (International) Payments:**
- Use international test cards
- Example: Card Number: `4242 4242 4242 4242`, CVV: `123`, Expiry: Any future date
- **Note:** Make sure your Razorpay account supports USD payments

## Razorpay Configuration Checklist

Before testing international payments, ensure:

### ✅ 1. Razorpay Account Setup
- [ ] Your Razorpay account is activated
- [ ] International payments (USD) are enabled in your Razorpay dashboard
- [ ] You have the correct API keys (Key ID and Key Secret)

### ✅ 2. Enable International Payments in Razorpay

1. Log in to your Razorpay Dashboard: https://dashboard.razorpay.com
2. Go to **Settings** → **Payment Methods**
3. Enable **International Cards** if not already enabled
4. Check if USD currency is enabled for your account

### ✅ 3. API Key Configuration

Make sure your `.env` file has:
```
VITE_RAZORPAY_KEY_ID=your_key_id_here
RAZORPAY_KEY_ID=your_key_id_here
RAZORPAY_KEY_SECRET=your_key_secret_here
```

## Common Issues & Solutions

### Issue 1: Always Shows ₹199 (India Price)

**Possible Causes:**
- Location detection is failing
- IP geolocation API is blocked
- Defaulting to India

**Solution:**
- Use URL parameter: `?location=international`
- Check browser console for errors
- Verify IP geolocation API is accessible

### Issue 2: Razorpay Shows Error for USD

**Possible Causes:**
- USD not enabled in Razorpay account
- Wrong API keys
- Account doesn't support international payments

**Solution:**
- Check Razorpay dashboard for international payment settings
- Contact Razorpay support to enable USD
- Verify API keys are correct

### Issue 3: Order Creation Fails

**Check:**
- API endpoint is accessible
- Server-side environment variables are set
- Check server logs for errors
- Verify amount validation (should be ≥ 100 for both currencies)

## Testing Checklist

- [ ] Location detection works (check console logs)
- [ ] Price displays correctly (₹199 for India, $10 for International)
- [ ] Order creation API works for both currencies
- [ ] Razorpay modal shows correct currency and amount
- [ ] Payment can be completed with test cards
- [ ] Payment success redirects to Cal.com

## Debug Commands

Open browser console and run:

```javascript
// Check current location detection
console.log('Current location:', window.location.search);

// Manually test location override
// Add ?location=international to URL and reload
```

## Support

If you encounter issues:
1. Check browser console for error messages
2. Check server logs for API errors
3. Verify Razorpay dashboard settings
4. Test with URL parameter override first
5. Contact Razorpay support if payment issues persist

---

**Note:** This testing guide helps you verify that international payments are working correctly. Always test in a staging environment before going live.

