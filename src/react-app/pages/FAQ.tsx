import { useState, useRef, useEffect } from 'react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function FAQ() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [sectionHeights, setSectionHeights] = useState<Record<string, number>>({});
  const [questionHeights, setQuestionHeights] = useState<Record<string, number>>({});
  
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const faqs = {
    ielts: [
      { q: 'What is the IELTS test format?', a: 'IELTS has 4 modules: Listening (30 min), Reading (60 min), Writing (60 min), and Speaking (11-14 min).' },
      { q: 'How long does it take to prepare for IELTS?', a: 'Typically 2-3 months with regular practice, but it depends on your current level and target score.' },
      { q: 'What score do I need?', a: 'Score requirements vary by institution. Most universities require 6.5-7.5 overall.' }
    ],
    toefl: [
      { q: 'What is the TOEFL test format?', a: 'TOEFL iBT has 4 sections: Reading (54-72 min), Listening (41-57 min), Speaking (17 min), and Writing (50 min).' },
      { q: 'How is TOEFL scored?', a: 'TOEFL is scored out of 120 points, with each section worth 30 points.' },
      { q: 'How long is TOEFL valid?', a: 'TOEFL scores are valid for 2 years from the test date.' }
    ],
    pte: [
      { q: 'What is PTE?', a: 'PTE (Pearson Test of English) is a computer-based English proficiency test accepted worldwide.' },
      { q: 'How long does PTE take?', a: 'The test takes approximately 3 hours including breaks.' },
      { q: 'What is a good PTE score?', a: 'Scores range from 10-90. Most universities require 58-65.' }
    ],
    celpip: [
      { q: 'What is CELPIP?', a: 'CELPIP is designed for Canadian immigration and citizenship applications.' },
      { q: 'How long is CELPIP valid?', a: 'CELPIP scores are valid for 2 years.' },
      { q: 'What score do I need for Canadian immigration?', a: 'CLB 7 (Canadian Language Benchmark) is typically required, which is 7 in each section.' }
    ],
    gre: [
      { q: 'What is GRE Verbal?', a: 'GRE Verbal Reasoning tests vocabulary, reading comprehension, and analytical writing skills.' },
      { q: 'What is a good GRE Verbal score?', a: 'Scores range from 130-170. A score of 155+ is considered good.' },
      { q: 'How long should I prepare for GRE?', a: 'Most students need 2-4 months of dedicated preparation.' }
    ],
    demo: [
      { q: 'Is the demo class really free?', a: 'Yes, the demo class is completely free with no obligation to enroll.' },
      { q: 'How long is the demo class?', a: 'The demo class is 30 minutes long.' },
      { q: 'What will I learn in the demo?', a: 'You will get an assessment, see our teaching style, and discuss a customized study plan.' }
    ],
    pricing: [
      { q: 'What are your course fees?', a: 'Fees vary by course and package. Contact us for detailed pricing information.' },
      { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible payment plans. Discuss options during your demo class.' },
      { q: 'Are there any discounts available?', a: 'We offer early bird discounts and package deals. Contact us for current offers.' }
    ]
  };

  // Measure heights on mount and when content changes
  useEffect(() => {
    const newSectionHeights: Record<string, number> = {};
    const newQuestionHeights: Record<string, number> = {};
    
    Object.keys(faqs).forEach(section => {
      if (sectionRefs.current[section]) {
        newSectionHeights[section] = sectionRefs.current[section]!.scrollHeight;
      }
    });
    
    Object.keys(questionRefs.current).forEach(key => {
      if (questionRefs.current[key]) {
        newQuestionHeights[key] = questionRefs.current[key]!.scrollHeight;
      }
    });
    
    setSectionHeights(newSectionHeights);
    setQuestionHeights(newQuestionHeights);
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
    setOpenQuestion(null);
  };

  const toggleQuestion = (questionKey: string) => {
    setOpenQuestion(openQuestion === questionKey ? null : questionKey);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-blue-900 dark:text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-center text-blue-900 dark:text-slate-300 mb-12">
          Find answers to common questions about our courses and services
        </p>

        {Object.entries(faqs).map(([section, questions]) => (
          <div key={section} className="mb-3">
            <button
              onClick={() => toggleSection(section)}
              className="w-full text-left bg-blue-900 dark:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold flex justify-between items-center hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors"
            >
              <span className="uppercase">{section}</span>
              <span className={`transform transition-transform duration-300 ${
                openSection === section ? 'rotate-180' : ''
              }`}>
                {openSection === section ? '−' : '+'}
              </span>
            </button>
            
            <div 
              style={{
                maxHeight: openSection === section ? `${sectionHeights[section] || 2000}px` : '0px',
                transition: 'max-height 0.3s ease-in-out'
              }}
              className="overflow-hidden"
            >
              <div 
                ref={el => sectionRefs.current[section] = el}
                className="mt-4 space-y-2"
              >
                {questions.map((faq, index) => {
                  const questionKey = `${section}-${index}`;
                  return (
                    <div key={index} className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleQuestion(questionKey)}
                        className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-slate-900"
                      >
                        <span className="font-semibold text-blue-900 dark:text-white">{faq.q}</span>
                        <span className={`text-blue-900 dark:text-white transform transition-transform duration-300 ${
                          openQuestion === questionKey ? 'rotate-180' : ''
                        }`}>
                          {openQuestion === questionKey ? '−' : '+'}
                        </span>
                      </button>
                      <div 
                        style={{
                          maxHeight: openQuestion === questionKey ? `${questionHeights[questionKey] || 500}px` : '0px',
                          transition: 'max-height 0.3s ease-in-out'
                        }}
                        className="overflow-hidden"
                      >
                        <div 
                          ref={el => questionRefs.current[questionKey] = el}
                          className="px-6 py-4 bg-gray-50 dark:bg-slate-800 text-blue-900 dark:text-slate-300"
                        >
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        <div className="mt-12 text-center">
          <p className="text-blue-900 dark:text-slate-300 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-900 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-500 transition"
          >
            Contact Us
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
