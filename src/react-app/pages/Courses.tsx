import { Link } from 'react-router-dom';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Courses() {
  const courses = [
    {
      name: 'IELTS Training',
      path: '/courses/ielts',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600',
      benefits: [
        'Comprehensive 4-module training',
        'Real exam practice tests',
        'Personalized feedback'
      ]
    },
    {
      name: 'TOEFL Training',
      path: '/courses/toefl',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
      benefits: [
        'All 4 sections covered',
        'Score improvement guarantee',
        'Flexible scheduling'
      ]
    },
    {
      name: 'PTE Training',
      path: '/courses/pte',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600',
      benefits: [
        'Computer-based test prep',
        'Speaking & writing focus',
        'Quick results strategy'
      ]
    },
    {
      name: 'CELPIP Training',
      path: '/courses/celpip',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
      benefits: [
        'Canadian immigration focus',
        'Practical communication skills',
        'Expert guidance'
      ]
    },
    {
      name: 'GRE Verbal Training',
      path: '/courses/gre',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
      benefits: [
        'Vocabulary building',
        'Reading comprehension',
        'Analytical writing'
      ]
    },
    {
      name: 'Duolingo English Test',
      path: '/courses/duolingo',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600',
      benefits: [
        'Fast & affordable test prep',
        'Adaptive test strategies',
        'Quick results in 48 hours'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-blue-900 dark:text-white mb-4">Our Courses</h1>
        <p className="text-xl text-center text-blue-900 dark:text-slate-300 mb-12">
          Comprehensive training for all major English proficiency tests
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">{course.name}</h3>
                <ul className="space-y-2 mb-6">
                  {course.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                      <span className="text-blue-900 dark:text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={course.path}
                  className="block w-full text-center px-6 py-3 bg-blue-900 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-500 transition"
                >
                  View Full Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
