import { useState } from 'react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: 'FluentEdgeLab Lab Website',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', country: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-blue-900 dark:text-white mb-4">Contact Us</h1>
        <p className="text-xl text-center text-blue-900 dark:text-slate-300 mb-12">
          Get in touch for inquiries or support
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-6">Contact Information</h2>
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-semibold text-blue-900 dark:text-white mb-1">Email</p>
                <a href="mailto:info@fluentedge.com" className="text-blue-900 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                  info@fluentedge.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-blue-900 dark:text-white mb-1">Phone</p>
                <a href="tel:+1234567890" className="text-blue-900 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="mb-8">
              <a
                href="https://whatsapp.com/channel/0029VbCBj9L30LKOl3Ocbd2e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
              >
                <span className="mr-2">💬</span>
                Join my WhatsApp Channel
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-blue-900 dark:text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-900 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Facebook</a>
                <a href="#" className="text-blue-900 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Instagram</a>
                <a href="#" className="text-blue-900 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">LinkedIn</a>
                <a href="#" className="text-blue-900 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">YouTube</a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-blue-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-blue-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-400"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-blue-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-400"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-blue-900 dark:text-white"
              >
                <option value="">Select Country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="in">India</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-blue-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-400"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 dark:bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 dark:hover:bg-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-lg text-center">
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 rounded-lg text-center">
                  ❌ Something went wrong. Please try again or contact us directly via email.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
