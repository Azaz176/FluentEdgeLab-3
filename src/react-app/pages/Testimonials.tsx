import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const videoTestimonials = [
    {
      id: 1,
      name: 'Dr. Monika Dhankhar',
      course: 'IELTS Band 8.0',
      thumbnail: '/testimonials/shinchan.jpg',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 2,
      name: 'Hemant Adhikari',
      course: 'IELTS Band 7.5',
      thumbnail: '/testimonials/shinchan.jpg',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 3,
      name: 'Azaz Ali',
      course: 'IELTS Band 8.5',
      thumbnail: '/testimonials/shinchan.jpg',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 4,
      name: 'Mohit Sorout',
      course: 'IELTS Band 7.5',
      thumbnail: '/testimonials/shinchan.jpg',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 5,
      name: 'Sumit Vedwan',
      course: 'IELTS Band 8.0',
      thumbnail: '/testimonials/shinchan.jpg',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 6,
      name: 'Dhruv Thukral',
      course: 'IELTS Band 8.0',
      thumbnail: '/testimonials/shinchan.jpg',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 7,
      name: 'Chirag Khurana',
      course: 'GRE 325 & IELTS 8',
      thumbnail: '/testimonials/shinchan.jpg',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 8,
      name: 'Janvi Tiwari',
      course: 'PTE 85',
      thumbnail: '/testimonials/shinchan.jpg',
      videoId: 'dQw4w9WgXcQ'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Monika Dhankhar',
      country: 'India',
      course: 'IELTS Band 8.0',
      text: 'The teachers and staff gave me the attention and guidance needed to ace the IELTS and also planned out an effective study schedule for me. The study schedule was tailored for the less amount of time I had in hand. I am glad that I chose FluentEdgeLab for my IELTS preparation.',
      rating: 5,
      image: '/testimonials/shinchan.jpg'
    },
    {
      name: 'Hemant Adhikari',
      country: 'India',
      course: 'IELTS Band 7.5',
      text: 'FluentEdgeLab\'s IELTS training was exceptional. The practice tests and personalized feedback helped me understand my weaknesses. The instructors were always available for doubt clearing sessions. I achieved my target score on my first attempt!',
      rating: 5,
      image: '/testimonials/shinchan.jpg'
    },
    {
      name: 'Azaz Ali',
      country: 'India',
      course: 'IELTS Band 8.5',
      text: 'I was struggling with the IELTS speaking module, but the expert coaching at FluentEdgeLab transformed my approach. The AI-based practice tools and mock tests were incredibly helpful. Highly recommend for anyone preparing for IELTS!',
      rating: 5,
      image: '/testimonials/shinchan.jpg'
    },
    {
      name: 'Mohit Sorout',
      country: 'India',
      course: 'IELTS Band 7.5',
      text: 'The IELTS preparation at FluentEdgeLab exceeded my expectations. The vocabulary building techniques and reading comprehension strategies were game-changers. Thanks to FluentEdgeLab, I scored well above my target!',
      rating: 5,
      image: '/testimonials/shinchan.jpg'
    },
    {
      name: 'Sumit Vedwan',
      country: 'India',
      course: 'IELTS Band 8.0',
      text: 'FluentEdgeLab helped me crack IELTS with flying colors! The comprehensive training and mock tests were exactly what I needed. The faculty understood my requirements and customized the course accordingly.',
      rating: 5,
      image: '/testimonials/shinchan.jpg'
    },
    {
      name: 'Dhruv Thukral',
      country: 'India',
      course: 'IELTS Band 8.0',
      text: 'I joined FluentEdgeLab for IELTS preparation just 3 weeks before my exam. Despite the short time, the intensive coaching and strategic tips helped me achieve my target band. The speaking practice sessions were particularly helpful!',
      rating: 5,
      image: '/testimonials/shinchan.jpg'
    },
    {
      name: 'Chirag Khurana',
      country: 'India',
      course: 'GRE 325 & IELTS 8',
      text: 'The GRE and IELTS preparation at FluentEdgeLab was comprehensive and effective. The adaptive test strategies and timed practice sessions prepared me well for both exams. I scored above my target in both!',
      rating: 5,
      image: '/testimonials/shinchan.jpg'
    },
    {
      name: 'Janvi Tiwari',
      country: 'India',
      course: 'PTE 85',
      text: 'I was struggling with the PTE speaking module, but the expert coaching at FluentEdgeLab transformed my approach. The AI-based practice tools and mock tests were incredibly helpful. Highly recommend for anyone preparing for PTE!',
      rating: 5,
      image: '/testimonials/shinchan.jpg'
    },
    {
      name: 'Aanya Goel',
      country: 'India',
      course: 'PTE 82',
      text: 'FluentEdgeLab\'s PTE training was exceptional. The practice tests and personalized feedback helped me understand my weaknesses. The instructors were always available for doubt clearing sessions. I achieved my target score on my first attempt!',
      rating: 5,
      image: '/testimonials/shinchan.jpg'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 280;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (direction === 'right') {
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (container.scrollLeft <= 10) {
          container.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-blue-900 dark:text-white mb-4">Student Testimonials</h1>
        <p className="text-xl text-center text-blue-900 dark:text-slate-300 mb-12">
          Real stories from students who achieved their target scores
        </p>

        {/* Video Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-8">Video Testimonials</h2>
          
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-blue-900 dark:text-white" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {videoTestimonials.map((video) => (
                <div
                  key={video.id}
                  className="flex-shrink-0 w-[250px] cursor-pointer group perspective-1000"
                  onClick={() => setActiveVideo(video.videoId)}
                >
                  <div 
                    className="relative rounded-2xl overflow-hidden transition-all duration-500 ease-out
                      shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4),0_10px_20px_-10px_rgba(0,0,0,0.2)]
                      hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5),0_15px_30px_-10px_rgba(0,0,0,0.3)]
                      group-hover:-translate-y-4 group-hover:rotate-x-2
                      border border-white/20 dark:border-slate-700"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="aspect-[3/4] relative">
                      <img
                        src={video.thumbnail}
                        alt={video.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-18 h-18 bg-white/95 dark:bg-slate-200 rounded-full flex items-center justify-center 
                          group-hover:scale-110 transition-all duration-300 
                          shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                          group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]
                          backdrop-blur-sm">
                          <Play className="w-9 h-9 text-blue-900 ml-1 drop-shadow-md" fill="currentColor" />
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold text-lg drop-shadow-lg">{video.name}</h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow-md">{video.course}</p>
                      </div>
                    </div>
                    
                    <div className="h-2 bg-gradient-to-b from-gray-200 to-gray-400 dark:from-slate-600 dark:to-slate-800" />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-blue-900 dark:text-white" />
            </button>
          </div>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div 
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close video"
              >
                <X className="w-8 h-8" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video Testimonial"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Written Testimonials Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-8">Written Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-blue-100 dark:ring-slate-600"
                  />
                  <div>
                    <p className="font-bold text-blue-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-slate-400">{testimonial.country}</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{testimonial.course}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-slate-300 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
