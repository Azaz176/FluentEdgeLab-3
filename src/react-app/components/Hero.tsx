import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-blue-900 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Master IELTS, TOEFL, PTE, CELPIP & GRE With Expert Guidance
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Online training for students and professionals across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
              >
                Book Demo
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition"
              >
                Explore Courses
              </Link>
            </div>
          </div>
          <div className="relative h-96 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
              alt="Test preparation"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}