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
      name: 'Sarah Johnson',
      course: 'IELTS Band 8.0',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      course: 'TOEFL 110',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      course: 'PTE 85',
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 4,
      name: 'Michael Chen',
      course: 'GRE 328',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 5,
      name: 'Maria Garcia',
      course: 'IELTS Band 7.5',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 6,
      name: 'David Kim',
      course: 'CELPIP 9',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 7,
      name: 'Emma Thompson',
      course: 'IELTS Band 8.5',
      thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      videoId: 'dQw4w9WgXcQ'
    },
    {
      id: 8,
      name: 'Raj Patel',
      course: 'GRE 325',
      thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      videoId: 'dQw4w9WgXcQ'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'Canada',
      course: 'IELTS',
      text: 'Improved my IELTS score from 6.5 to 8.0 in just 3 months! The personalized coaching made all the difference.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'
    },
    {
      name: 'Ahmed Hassan',
      country: 'Egypt',
      course: 'TOEFL',
      text: 'Best TOEFL preparation. Flexible timings worked perfectly for me. Scored 110!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
    },
    {
      name: 'Priya Sharma',
      country: 'India',
      course: 'PTE',
      text: 'PTE coaching helped me achieve my target score. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200'
    },
    {
      name: 'Michael Chen',
      country: 'China',
      course: 'GRE',
      text: 'GRE Verbal training was exceptional. Clear explanations and great support.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200'
    },
    {
      name: 'Maria Garcia',
      country: 'Spain',
      course: 'IELTS',
      text: 'From 6.0 to 7.5! The writing feedback was incredibly helpful.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200'
    },
    {
      name: 'David Kim',
      country: 'South Korea',
      course: 'CELPIP',
      text: 'Perfect for Canadian immigration. Scored 9 in all sections!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200'
    },
    {
      name: 'Emma Thompson',
      country: 'Australia',
      course: 'IELTS',
      text: 'The speaking practice sessions transformed my confidence. Went from 6.5 to 8.5 in speaking alone! The mock tests were exactly like the real exam.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200'
    },
    {
      name: 'Raj Patel',
      country: 'India',
      course: 'GRE',
      text: 'Scored 328 on my GRE! The vocabulary strategies and quant shortcuts were game-changers. Worth every penny invested.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200'
    },
    {
      name: 'Fatima Al-Rashid',
      country: 'UAE',
      course: 'IELTS',
      text: 'As a working professional, the flexible scheduling was perfect. Achieved band 8 while managing my job. The online resources are excellent!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200'
    },
    {
      name: 'James Wilson',
      country: 'UK',
      course: 'TOEFL',
      text: 'Needed TOEFL for my US university application. Got 115! The integrated writing section tips were incredibly useful.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200'
    },
    {
      name: 'Yuki Tanaka',
      country: 'Japan',
      course: 'PTE',
      text: 'PTE Academic was challenging for me, but the structured approach and constant feedback helped me score 85. Thank you FluentEdgeLab!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200'
    },
    {
      name: 'Carlos Rodriguez',
      country: 'Mexico',
      course: 'Duolingo',
      text: 'Duolingo English Test prep was fantastic! Scored 135 and got into my dream university. The practice tests were very accurate.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200'
    },
    {
      name: 'Anna Petrova',
      country: 'Russia',
      course: 'IELTS',
      text: 'From band 5.5 to 7.5 in just 8 weeks! The one-on-one sessions addressed my specific weaknesses. Highly professional trainers.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200'
    },
    {
      name: 'Daniel Okonkwo',
      country: 'Nigeria',
      course: 'TOEFL',
      text: 'Best decision I made for my study abroad dreams. TOEFL score of 108 opened doors to top universities. The support team is amazing!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507152927160-d3c2086a8e7d?w=200'
    },
    {
      name: 'Sophie Martin',
      country: 'France',
      course: 'CELPIP',
      text: 'Moved to Canada with CLB 10 thanks to FluentEdgeLab! The Canadian accent training and real-life scenario practice were invaluable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200'
    },
    {
      name: 'Hassan Ali',
      country: 'Pakistan',
      course: 'PTE',
      text: 'Achieved 79+ in all sections of PTE! The AI-based practice tools and detailed feedback on pronunciation really helped me improve.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200'
    },
    {
      name: 'Lisa Zhang',
      country: 'Taiwan',
      course: 'GRE',
      text: 'Verbal score jumped from 145 to 162! The reading comprehension strategies and vocabulary building techniques are excellent.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200'
    },
    {
      name: 'Mohammed Al-Farsi',
      country: 'Oman',
      course: 'IELTS',
      text: 'Needed band 7 for UK visa. Got 7.5! The task 2 essay templates and speaking cue card strategies were extremely helpful.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=200'
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
