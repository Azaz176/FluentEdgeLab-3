import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What courses do you offer?',
      answer: 'We offer comprehensive training for IELTS, TOEFL, PTE, CELPIP, and GRE Verbal. Each course includes personalized study plans, expert instruction, practice tests, and one-on-one coaching sessions.'
    },
    {
      question: 'How long does it take to prepare for IELTS?',
      answer: 'Typically 2-3 months with regular practice, but it depends on your current English level and target score. We assess your level during the free demo class and create a customized timeline for you.'
    },
    {
      question: 'Is the demo class really free?',
      answer: 'Yes, the demo class is completely free with no obligation to enroll. During the 30-minute session, you\'ll get an assessment of your current level, experience our teaching methodology, and receive a personalized study plan.'
    },
    {
      question: 'What score do I need for IELTS/TOEFL?',
      answer: 'Score requirements vary by institution and purpose. For IELTS, most universities require 6.5-7.5 overall. For TOEFL, scores typically range from 80-100+. We help you determine your target score based on your goals.'
    },
    {
      question: 'Do you offer online classes?',
      answer: 'Yes! We offer both online and offline classes. Our online sessions are conducted via Zoom with interactive features, screen sharing, and recorded sessions for revision. You get the same quality instruction from anywhere in the world.'
    },
    {
      question: 'What makes FluentEdgeLab different from other coaching centers?',
      answer: 'We provide personalized attention with small batch sizes, experienced faculty who are certified trainers, comprehensive study materials, unlimited doubt-clearing sessions, and a proven track record of high scores.'
    },
    {
      question: 'How are the classes conducted?',
      answer: 'Classes are interactive with a mix of concept teaching, practice exercises, mock tests, and feedback sessions. We focus on all four skills - Listening, Reading, Writing, and Speaking with equal emphasis.'
    },
    {
      question: 'Do you provide study materials?',
      answer: 'Yes, we provide comprehensive study materials including practice books, online resources, mock tests, and access to our exclusive question bank. All materials are regularly updated to match the latest exam patterns.'
    },
    {
      question: 'What payment options are available?',
      answer: 'We offer flexible payment options including one-time payment, EMI plans, and installment options. We also provide early bird discounts and referral bonuses. Contact us for current offers and pricing.'
    },
    {
      question: 'How can I track my progress?',
      answer: 'We conduct regular mock tests and assessments to track your progress. You\'ll receive detailed feedback on each test with areas of improvement. Our student portal also shows your performance analytics.'
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 py-20 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about our courses and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/10'
                  : 'border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-slate-600'
              }`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors duration-300 ${
                  openIndex === index
                    ? 'bg-blue-50 dark:bg-slate-800'
                    : 'bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <span className={`font-semibold text-lg transition-colors duration-300 ${
                  openIndex === index
                    ? 'text-blue-900 dark:text-blue-400'
                    : 'text-gray-800 dark:text-white'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-blue-600 dark:bg-blue-500 rotate-180'
                    : 'bg-gray-100 dark:bg-slate-700'
                }`}>
                  <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                    openIndex === index
                      ? 'text-white'
                      : 'text-gray-600 dark:text-slate-400'
                  }`} />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-5 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
                  <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 dark:from-blue-800 dark:to-indigo-800 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                Book Free Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

