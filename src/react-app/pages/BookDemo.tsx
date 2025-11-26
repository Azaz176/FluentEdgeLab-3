import { useState } from 'react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function BookDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    exam: '',
    timePreference: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Demo class booked! We will contact you soon to confirm the timing.');
    setFormData({ name: '', email: '', phone: '', exam: '', timePreference: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-white mb-4">Book a Demo Class</h1>
          <p className="text-xl text-blue-900 dark:text-slate-300 mb-6">
            Experience our teaching style and see how we can help you achieve your target score
          </p>
          <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-6 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">What to Expect in Your Demo</h2>
            <ul className="text-left max-w-2xl mx-auto space-y-2 text-blue-900 dark:text-slate-300">
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span>30-minute personalized session</span>
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-blue-900 dark:text-white font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-blue-900 dark:text-white"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-blue-900 dark:text-white"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-blue-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-blue-900 dark:text-white font-semibold mb-2">Preferred Exam *</label>
                <select
                  name="exam"
                  value={formData.exam}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-blue-900 dark:text-white"
                >
                  <option value="">Select Exam</option>
                  <option value="ielts">IELTS</option>
                  <option value="toefl">TOEFL</option>
                  <option value="pte">PTE</option>
                  <option value="celpip">CELPIP</option>
                  <option value="gre">GRE</option>
                </select>
              </div>
              <div>
                <label className="block text-blue-900 dark:text-white font-semibold mb-2">Time Preference</label>
                <select
                  name="timePreference"
                  value={formData.timePreference}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-blue-900 dark:text-white"
                >
                  <option value="">Select Time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 9 PM)</option>
                  <option value="weekend">Weekend</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 dark:bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 dark:hover:bg-blue-500 transition"
              >
                Book Demo
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-4">Why Book a Demo?</h3>
              <ul className="space-y-3 text-blue-900 dark:text-slate-300">
                <li>• See our teaching methodology</li>
                <li>• Get personalized feedback</li>
                <li>• Understand your preparation needs</li>
                <li>• Ask questions about the test</li>
                <li>• No commitment required</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-4">Quick Contact</h3>
              <a
                href="https://whatsapp.com/channel/0029VbCBj9L30LKOl3Ocbd2e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center w-full justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
              >
                <span className="mr-2">💬</span>
                Join my WhatsApp Channel
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
