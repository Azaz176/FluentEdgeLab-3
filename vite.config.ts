import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { mochaPlugins } from "@getmocha/vite-plugins";
import { fileURLToPath } from "url";
import type { Plugin } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isDev = process.env.NODE_ENV !== 'production' && !process.argv.includes('build');

// Development API handler for Razorpay order creation
function devApiPlugin(): Plugin {
  return {
    name: 'dev-api-handler',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/create-razorpay-order' && req.method === 'POST') {
          // Load environment variables
          const env = loadEnv('development', process.cwd(), '');
          
          const RAZORPAY_KEY_ID = env.RAZORPAY_KEY_ID;
          const RAZORPAY_KEY_SECRET = env.RAZORPAY_KEY_SECRET;

          // Read request body
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const { amount, currency = 'INR', receipt, notes } = JSON.parse(body);

              if (!amount || amount < 100) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Invalid amount. Minimum is 100 paise (₹1)' }));
                return;
              }

              if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
                console.error('Missing Razorpay credentials in .env file');
                console.error('Required: RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET');
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Payment system not configured. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to .env file' }));
                return;
              }

              // Create order with Razorpay API
              const orderData = {
                amount: amount,
                currency: currency,
                receipt: receipt || `receipt_${Date.now()}`,
                payment_capture: 1, // Auto capture!
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
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Failed to create order' }));
                return;
              }

              const order = await response.json();

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: true,
                order_id: order.id,
                amount: order.amount,
                currency: order.currency,
              }));
            } catch (error) {
              console.error('Create order error:', error);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Internal server error' }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [
    ...(isDev ? [devApiPlugin()] : mochaPlugins(process.env as any)), 
    react()
  ],
  server: {
    allowedHosts: true,
    port: 5173,
    strictPort: false,
  },
  build: {
    chunkSizeWarningLimit: 5000,
    copyPublicDir: true,
  },
  publicDir: 'public',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
