import { useParams, Link } from 'react-router-dom';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function CourseDetail() {
  const { courseName } = useParams<{ courseName: string }>();
  
  const courseData: Record<string, any> = {
    ielts: {
      title: 'IELTS Training',
      overview: 'The International English Language Testing System (IELTS) is the world\'s most popular English language proficiency test. Our comprehensive coaching helps you master all four modules: Listening, Reading, Writing, and Speaking.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800',
      learnPoints: [
        'Master all 4 IELTS modules (Listening, Reading, Writing, Speaking)',
        'Understand question types and strategies for each section',
        'Improve time management skills',
        'Learn effective writing templates and structures',
        'Practice speaking with confidence',
        'Take full-length mock tests with detailed feedback'
      ],
      features: [
        'Live online classes with interactive sessions',
        'Personal evaluation and feedback on all tasks',
        'Regular mock tests with band score prediction',
        'Flexible timings to suit your schedule',
        'Access to comprehensive study materials',
        'WhatsApp support for quick queries'
      ],
      improvement: 'Average score improvement: 1.5-2 bands in 3 months'
    },
    toefl: {
      title: 'TOEFL Training',
      overview: 'The Test of English as a Foreign Language (TOEFL) is widely accepted by universities and institutions worldwide. Our training focuses on all four sections: Reading, Listening, Speaking, and Writing.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
      learnPoints: [
        'Excel in all 4 TOEFL sections',
        'Develop note-taking strategies',
        'Master integrated tasks',
        'Improve academic vocabulary',
        'Practice with real TOEFL questions',
        'Build confidence in speaking'
      ],
      features: [
        'Live online classes with experienced trainer',
        'Personal evaluation of speaking and writing',
        'Full-length practice tests',
        'Flexible scheduling options',
        'Comprehensive study resources',
        'Score improvement guarantee'
      ],
      improvement: 'Average score improvement: 15-20 points in 2-3 months'
    },
    pte: {
      title: 'PTE Training',
      overview: 'Pearson Test of English (PTE) is a computer-based English test. Our coaching helps you master the unique format and scoring system to achieve your target score.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
      learnPoints: [
        'Master all PTE question types',
        'Understand computer-based scoring',
        'Improve speaking fluency and pronunciation',
        'Excel in writing tasks',
        'Develop listening strategies',
        'Practice with PTE software'
      ],
      features: [
        'Live online sessions with screen sharing',
        'Personal feedback on all tasks',
        'Mock tests with detailed analysis',
        'Flexible class timings',
        'PTE-specific strategies and tips',
        'Quick results preparation'
      ],
      improvement: 'Average score improvement: 10-15 points in 6-8 weeks'
    },
    celpip: {
      title: 'CELPIP Training',
      overview: 'Canadian English Language Proficiency Index Program (CELPIP) is designed for Canadian immigration. Our training focuses on practical communication skills needed for Canadian life.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      learnPoints: [
        'Master all 4 CELPIP components',
        'Focus on Canadian English',
        'Improve practical communication',
        'Understand immigration requirements',
        'Practice with CELPIP materials',
        'Build confidence for test day'
      ],
      features: [
        'Live online coaching sessions',
        'Personal evaluation and feedback',
        'CELPIP-specific practice tests',
        'Flexible scheduling',
        'Immigration-focused guidance',
        'Comprehensive study materials'
      ],
      improvement: 'Average score improvement: 1-2 levels in 2-3 months'
    },
    gre: {
      title: 'GRE Verbal Training',
      overview: 'Graduate Record Examination (GRE) Verbal section tests your vocabulary, reading comprehension, and analytical writing. Our training helps you master these skills.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      learnPoints: [
        'Build advanced vocabulary',
        'Master reading comprehension',
        'Excel in text completion and sentence equivalence',
        'Improve analytical writing',
        'Learn time management strategies',
        'Practice with real GRE questions'
      ],
      features: [
        'Live online classes',
        'Personal vocabulary building plan',
        'Writing evaluation and feedback',
        'Full-length practice tests',
        'Flexible timings',
        'Score improvement strategies'
      ],
      improvement: 'Average score improvement: 5-8 points in 2-3 months'
    },
    duolingo: {
      title: 'Duolingo English Test Training',
      overview: 'The Duolingo English Test (DET) is a modern, computer-adaptive test accepted by thousands of institutions worldwide. Our training helps you master the unique format and achieve your target score quickly.',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800',
      learnPoints: [
        'Master the adaptive test format',
        'Excel in Literacy, Comprehension, Conversation, and Production subscores',
        'Improve typing speed and accuracy',
        'Practice interactive reading and writing tasks',
        'Develop speaking fluency for video responses',
        'Learn strategies for the unique question types'
      ],
      features: [
        'Live online coaching sessions',
        'Personal evaluation and feedback',
        'Mock tests simulating real DET experience',
        'Flexible scheduling options',
        'Quick preparation timeline (2-4 weeks)',
        'Score improvement strategies'
      ],
      improvement: 'Average score improvement: 15-25 points in 2-4 weeks'
    }
  };

  const course = courseData[courseName || 'ielts'] || courseData.ielts;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-blue-100">{course.overview}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img src={course.image} alt={course.title} className="w-full rounded-lg shadow-lg" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-6">What You Will Learn</h2>
                <ul className="space-y-3">
                  {course.learnPoints.map((point: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✓</span>
                      <span className="text-lg text-blue-900 dark:text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-6">Course Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {course.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                    <span className="text-blue-900 dark:text-blue-400 mr-3 text-xl">•</span>
                    <span className="text-blue-900 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Score Improvement Results</h3>
              <p className="text-lg text-blue-900 dark:text-slate-300">{course.improvement}</p>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-6">Student Testimonials</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                  <p className="text-blue-900 dark:text-slate-300 mb-4 italic">"Excellent coaching! Improved my score significantly."</p>
                  <p className="font-semibold text-blue-900 dark:text-white">- Student Review</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                  <p className="text-blue-900 dark:text-slate-300 mb-4 italic">"Best investment for my test preparation. Highly recommended!"</p>
                  <p className="font-semibold text-blue-900 dark:text-white">- Student Review</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-xl mb-6">Book a demo class or enroll now</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-demo"
                  className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
                >
                  Book Demo
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
