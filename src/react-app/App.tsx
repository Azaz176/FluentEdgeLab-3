import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import ContactPage from "@/react-app/pages/Contact";
import CoursesPage from "@/react-app/pages/Courses";
import CourseDetailPage from "@/react-app/pages/CourseDetail";
import TestimonialsPage from "@/react-app/pages/Testimonials";
import FreeResourcesPage from "@/react-app/pages/FreeResources";
import BookDemoPage from "@/react-app/pages/BookDemo";
import BlogPage from "@/react-app/pages/Blog";
import BlogPostPage from "@/react-app/pages/BlogPost";
import FAQPage from "@/react-app/pages/FAQ";
import PoliciesPage from "@/react-app/pages/Policies";
import ScrollToTop from "@/react-app/components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseName" element={<CourseDetailPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/free-resources" element={<FreeResourcesPage />} />
        <Route path="/book-demo" element={<BookDemoPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/policies/:policyType" element={<PoliciesPage />} />
      </Routes>
    </Router>
  );
}
