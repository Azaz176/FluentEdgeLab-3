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
      image: "/testimonials/shinchan.jpg"
    },
    {
      id: 2,
      text: "FluentEdgeLab's TOEFL training was exceptional. The practice tests and personalized feedback helped me understand my weaknesses. The instructors were always available for doubt clearing sessions. I achieved my target score on my first attempt!",
      name: "Rahul Verma",
      exam: "TOEFL",
      score: "110",
      image:  "/testimonials/shinchan.jpg"
    },
    {
      id: 3,
      text: "I was struggling with the PTE speaking module, but the expert coaching at FluentEdgeLab transformed my approach. The AI-based practice tools and mock tests were incredibly helpful. Highly recommend for anyone preparing for PTE!",
      name: "Priya Sharma",
      exam: "PTE",
      score: "85",
      image:  "/testimonials/shinchan.jpg"
    },
    {
      id: 4,
      text: "The GRE Verbal training exceeded my expectations. The vocabulary building techniques and reading comprehension strategies were game-changers. Thanks to FluentEdgeLab, I scored well above my target!",
      name: "Alex Chen",
      exam: "GRE",
      score: "328",
      image:  "/testimonials/shinchan.jpg"
    },
    {
      id: 5,
      text: "FluentEdgeLab helped me crack CELPIP with flying colors! The Canadian-focused training and mock tests were exactly what I needed for my immigration process. The faculty understood my requirements and customized the course accordingly.",
      name: "Anjali Mehta",
      exam: "CELPIP",
      score: "10",
      image:  "/testimonials/shinchan.jpg"
    },
    {
      id: 6,
      text: "I joined FluentEdgeLab for IELTS preparation just 3 weeks before my exam. Despite the short time, the intensive coaching and strategic tips helped me achieve Band 7.5. The speaking practice sessions were particularly helpful!",
      name: "Vikram Singh",
      exam: "IELTS",
      score: "7.5",
      image:  "/testimonials/shinchan.jpg"
    },
    {
      id: 7,
      text: "The Duolingo English Test preparation at FluentEdgeLab was quick and effective. The adaptive test strategies and timed practice sessions prepared me well. I got my results in 48 hours and scored above my target!",
      name: "Sneha Patel",
      exam: "Duolingo",
      score: "130",
      image:  "/testimonials/shinchan.jpg"
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

  // Auto-slide with proper cleanup - faster speed (2500 seconds)
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 2500);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 py-12 md:py-20 px-4 transition-colors duration-300 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent">
            What Students Say
          </h2>
          <div className="mt-3 md:mt-4 flex justify-center">
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
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
            className="absolute left-0 md:-left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 text-blue-900 dark:text-white transition-all duration-200 border border-white/50 dark:border-slate-700/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>

          {/* Cards Container - Wider on larger screens */}
          <div className="relative w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-12 sm:px-16 md:px-20 lg:px-24 overflow-hidden">
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
                  className="w-full flex-shrink-0 px-2 sm:px-4 py-6 md:py-8"
                >
                  {/* 3D Card Container */}
                  <div className="relative group">
                    {/* Glowing border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-2xl md:rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    
                    {/* Main Card */}
                    <div className="relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl border border-white/50 dark:border-slate-700/50 transform transition-transform duration-300 group-hover:-translate-y-2">
                      {/* Quote Icon - Floating */}
                      <div className="absolute -top-4 md:-top-6 left-4 md:left-8 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                        <Quote className="w-4 h-4 md:w-6 md:h-6 text-white" fill="white" />
                      </div>

                      {/* Score Badge - Floating top right */}
                      <div className="absolute -top-3 md:-top-4 -right-2 md:-right-4 px-3 md:px-5 py-1 md:py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg">
                        <span className="text-white font-bold text-sm md:text-lg">{testimonial.exam} {testimonial.score}</span>
                      </div>

                      {/* Profile Section - Responsive layout */}
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4 md:mb-6 mt-3 md:mt-4">
                        {/* Profile Image with ring effect */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-70"></div>
                          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 md:border-4 border-white dark:border-slate-700 shadow-lg">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        {/* Name */}
                        <div className="text-center sm:text-left">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base">Verified Student</p>
                        </div>
                      </div>

                      {/* Testimonial Text - Responsive with line clamp on mobile */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-5 md:mb-8 pl-3 md:pl-4 border-l-3 md:border-l-4 border-blue-500/30 line-clamp-4 sm:line-clamp-none">
                        {testimonial.text}
                      </p>

                      {/* Book a Demo Button */}
                      <div className="flex justify-center">
                        <Link
                          to="/book-demo"
                          className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                          <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                          Book a Demo
                        </Link>
                      </div>

                      {/* Decorative dots - hidden on mobile */}
                      <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 hidden sm:flex gap-1">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400/30"></div>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500/40"></div>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600/50"></div>
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
            className="absolute right-0 md:-right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 text-blue-900 dark:text-white transition-all duration-200 border border-white/50 dark:border-slate-700/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-6 md:w-10 bg-gradient-to-r from-blue-600 to-indigo-600'
                  : 'w-2 md:w-3 bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8 md:mt-12">
          <Link 
            to="/testimonials"
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold text-base md:text-lg hover:text-blue-900 dark:hover:text-blue-300 transition-colors duration-200 group"
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
