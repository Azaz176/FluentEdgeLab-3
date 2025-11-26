import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import WhyChoose from '@/react-app/components/WhyChoose';
import CoursesSnapshot from '@/react-app/components/CoursesSnapshot';
import TestimonialsPreview from '@/react-app/components/TestimonialsPreview';
import GlobalPresence from '@/react-app/components/GlobalPresence';
import CertifiedBy from '@/react-app/components/CertifiedBy';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <CoursesSnapshot />
        <TestimonialsPreview />
        <GlobalPresence />
        <CertifiedBy />
      </main>
      <Footer />
    </div>
  );
}
