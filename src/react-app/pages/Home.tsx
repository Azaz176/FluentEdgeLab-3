import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import WhyChoose from '@/react-app/components/WhyChoose';
import CoursesSnapshot from '@/react-app/components/CoursesSnapshot';
import TestimonialsPreview from '@/react-app/components/TestimonialsPreview';
import GlobalPresence from '@/react-app/components/GlobalPresence';
import CertifiedBy from '@/react-app/components/CertifiedBy';
import FAQSection from '@/react-app/components/FAQSection';
import Footer from '@/react-app/components/Footer';
import SEO from '@/react-app/components/SEO';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <SEO 
        title="FluentEdgeLab - Best IELTS, TOEFL, PTE, CELPIP & GRE Training Institute"
        description="Expert IELTS, TOEFL, PTE, CELPIP & GRE coaching with personalized training, experienced faculty, and proven results. Book your FREE demo class today!"
        keywords="IELTS coaching, TOEFL training, PTE preparation, CELPIP classes, GRE verbal, English proficiency test, best IELTS coaching, online IELTS classes"
        canonicalUrl="https://fluentedgelab.com"
      />
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <CoursesSnapshot />
        <TestimonialsPreview />
        <GlobalPresence />
        <CertifiedBy />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
