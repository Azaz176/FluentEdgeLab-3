import { Link } from 'react-router-dom';

export default function CoursesSnapshot() {
  const courses = [
    { name: 'IELTS', path: '/courses/ielts', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400' },
    { name: 'TOEFL', path: '/courses/toefl', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400' },
    { name: 'PTE', path: '/courses/pte', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400' },
    { name: 'CELPIP', path: '/courses/celpip', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400' },
    { name: 'GRE', path: '/courses/gre', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400' },
    { name: 'Duolingo', path: '/courses/duolingo', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400' }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-blue-900 dark:text-white mb-16">Courses Snapshot</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
          {courses.map((course, index) => (
            <Link
              key={index}
              to={course.path}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800
                shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]
                hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)]
                hover:-translate-y-3
                transition-all duration-300 ease-out"
            >
              <div className="aspect-[4/5]">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                  <span className="text-sm font-medium opacity-90 group-hover:opacity-100 transition">Learn More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
