import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, Quote } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      text: "The teachers and staff gave me the attention and guidance needed to ace the IELTS and also planned out an effective study schedule for me. The study schedule was tailored for the less amount of time I had in hand. I am glad that I chose FluentEdgeLab for my IELTS preparation.",
      name: "Maheema Aggarwal",
      exam: "IELTS",
      score: "8",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      text: "FluentEdgeLab's TOEFL training was exceptional. The practice tests and personalized feedback helped me understand my weaknesses. The instructors were always available for doubt clearing sessions. I achieved my target score on my first attempt!",
      name: "Rahul Verma",
      exam: "TOEFL",
      score: "110",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      text: "I was struggling with the PTE speaking module, but the expert coaching at FluentEdgeLab transformed my approach. The AI-based practice tools and mock tests were incredibly helpful. Highly recommend for anyone preparing for PTE!",
      name: "Priya Sharma",
      exam: "PTE",
      score: "85",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      text: "The GRE Verbal training exceeded my expectations. The vocabulary building techniques and reading comprehension strategies were game-changers. Thanks to FluentEdgeLab, I scored well above my target!",
      name: "Alex Chen",
      exam: "GRE",
      score: "328",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

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

  // Auto-slide with proper cleanup
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 py-20 px-4 transition-colors duration-300 overflow-hidden relative">
      {/* Background decorative elements - simplified */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent">
            What Students Say
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </div>

        <div 
          className="relative flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 text-blue-900 dark:text-white transition-all duration-200 border border-white/50 dark:border-slate-700/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full max-w-4xl mx-auto px-16 md:px-24 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 py-8"
                >
                  {/* 3D Card Container */}
                  <div className="relative group">
                    {/* Glowing border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    
                    {/* Main Card */}
                    <div className="relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-white/50 dark:border-slate-700/50 transform transition-transform duration-300 group-hover:-translate-y-2">
                      {/* Quote Icon - Floating */}
                      <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Quote className="w-6 h-6 text-white" fill="white" />
                      </div>

                      {/* Score Badge - Floating top right */}
                      <div className="absolute -top-4 -right-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg">
                        <span className="text-white font-bold text-lg">{testimonial.exam} {testimonial.score}</span>
                      </div>

                      {/* Profile Section */}
                      <div className="flex items-center gap-4 mb-6 mt-4">
                        {/* Profile Image with ring effect */}
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-70"></div>
                          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        {/* Name */}
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">Verified Student</p>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8 pl-4 border-l-4 border-blue-500/30">
                        {testimonial.text}
                      </p>

                      {/* Book a Demo Button */}
                      <div className="flex justify-center">
                        <Link
                          to="/book-demo"
                          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                          <MapPin className="w-5 h-5" />
                          Book a Demo
                        </Link>
                      </div>

                      {/* Decorative dots */}
                      <div className="absolute bottom-4 right-4 flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400/30"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500/40"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-600/50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 text-blue-900 dark:text-white transition-all duration-200 border border-white/50 dark:border-slate-700/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-10 bg-gradient-to-r from-blue-600 to-indigo-600'
                  : 'w-3 bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/testimonials"
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold text-lg hover:text-blue-900 dark:hover:text-blue-300 transition-colors duration-200 group"
          >
            View All Success Stories
            <span className="transform group-hover:translate-x-2 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
