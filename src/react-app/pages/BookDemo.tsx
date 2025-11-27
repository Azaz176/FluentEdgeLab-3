import { useState, useEffect } from 'react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

// Configuration from environment variables
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || '';
const DEMO_PRICE_INR = Number(import.meta.env.VITE_DEMO_PRICE_INR) || 49900;
const DEMO_PRICE_DISPLAY = import.meta.env.VITE_DEMO_PRICE_DISPLAY || '₹499';
const CAL_BOOKING_LINK = import.meta.env.VITE_CAL_BOOKING_LINK || 'https://cal.com/fluentedge-lab-6gdbwa/60min';

// Razorpay type declaration
declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  handler: (response: RazorpayResponse) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

interface RazorpayInstance {
  open: () => void;
  close: () => void;
}

export default function BookDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Redirect to Cal.com after successful payment
  useEffect(() => {
    if (paymentSuccess) {
      const timer = setTimeout(() => {
        window.location.href = CAL_BOOKING_LINK;
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [paymentSuccess]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!window.Razorpay) {
      alert('Payment system is loading. Please try again.');
      return;
    }

    setIsLoading(true);

    const options: RazorpayOptions = {
      key: RAZORPAY_KEY_ID,
      amount: DEMO_PRICE_INR,
      currency: 'INR',
      name: 'FluentEdge Lab',
      description: 'Demo Class Booking Fee',
      handler: function (response: RazorpayResponse) {
        // Payment successful
        console.log('Payment ID:', response.razorpay_payment_id);
        setPaymentSuccess(true);
        setIsLoading(false);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: '#1e3a8a', // Blue-900
      },
      modal: {
        ondismiss: function () {
          setIsLoading(false);
        },
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  // Success screen - redirecting to Cal.com
  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">Payment Successful! 🎉</h2>
          <p className="text-lg text-blue-900 dark:text-slate-300 mb-6">
            Redirecting you to schedule your demo class...
          </p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900 dark:border-blue-400 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-white mb-4">Book a Demo Class</h1>
          <p className="text-xl text-blue-900 dark:text-slate-300 mb-6">
            Experience our teaching style and see how we can help you achieve your target score
          </p>
          
          {/* Price Badge */}
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-6 py-3 rounded-full text-lg font-semibold mb-8">
            <span className="mr-2">💰</span>
            Demo Fee: {DEMO_PRICE_DISPLAY}
          </div>

          <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-4">What to Expect in Your Demo</h2>
            <ul className="text-left max-w-2xl mx-auto space-y-2 text-blue-900 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>60-minute personalized session</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Assessment of your current level</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Customized study plan discussion</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>Q&A about the test and preparation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-6">Enter Your Details</h3>
              <form onSubmit={handlePayment} className="space-y-4">
                <div>
                  <label className="block text-blue-900 dark:text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-blue-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-blue-900 dark:text-white font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-blue-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-blue-900 dark:text-white font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-blue-900 dark:text-white"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-900 dark:bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 dark:hover:bg-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Pay {DEMO_PRICE_DISPLAY} & Book Demo
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-slate-400">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Secure Payment
                </span>
                <span>Powered by Razorpay</span>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-4">How It Works</h3>
              <ol className="space-y-4 text-blue-900 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-900 dark:bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                  <span>Fill in your details and pay the demo fee</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-900 dark:bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                  <span>Choose a convenient time slot on the calendar</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-900 dark:bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                  <span>Receive confirmation with meeting details</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-900 dark:bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                  <span>Join the demo class at scheduled time</span>
                </li>
              </ol>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-4">Payment Methods</h3>
              <ul className="space-y-2 text-blue-900 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="mr-2">💳</span> Credit / Debit Cards
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📱</span> UPI (GPay, PhonePe, Paytm)
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🏦</span> Net Banking
                </li>
                <li className="flex items-center">
                  <span className="mr-2">💰</span> Wallets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
