import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "GRE Verbal training was exceptional. Clear explanations and great support.",
      name: "Michael Chen",
      location: "China",
      rating: 5
    },
    {
      id: 2,
      text: "The course helped me improve my score significantly. Highly recommended!",
      name: "Sarah Johnson",
      location: "USA",
      rating: 5
    },
    {
      id: 3,
      text: "Outstanding teaching methods and comprehensive study materials.",
      name: "Priya Sharma",
      location: "India",
      rating: 5
    },
    {
      id: 4,
      text: "Best investment I made for my GRE preparation. Thank you FluentEdgeLab!",
      name: "Alex Martinez",
      location: "Spain",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-blue-900 dark:text-white mb-16">
          What Students Say
        </h2>

        <div className="relative">
          <div
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 md:px-8"
                >
                  <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-blue-700 dark:text-blue-300 text-center italic mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <div className="text-center">
                      <p className="text-lg font-semibold text-blue-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-blue-700 dark:text-slate-400">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-blue-800 dark:text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-blue-800 dark:text-white" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-900 dark:bg-blue-500 w-8'
                  : 'bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/testimonials"
            className="inline-block bg-blue-900 dark:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 dark:hover:bg-blue-500 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            View All Testimonials
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
