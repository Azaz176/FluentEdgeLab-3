import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-900 text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div>
            <Link to="/" className="text-lg mb-4 block cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-semibold text-blue-400">Fluent</span>
              <span className="font-extrabold text-white">Edge</span>
              <span className="font-normal text-red-400">Lab</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Expert IELTS, TOEFL, PTE, CELPIP & GRE training for students and professionals worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition text-sm">Courses</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition text-sm">About</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition text-sm">Testimonials</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition text-sm">Blog</Link></li>
              <li><Link to="/free-resources" className="text-gray-400 hover:text-white transition text-sm">Free Resources</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition text-sm">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wider">COURSES</h3>
            <ul className="space-y-2">
              <li><Link to="/courses/ielts" className="text-gray-400 hover:text-white transition text-sm">IELTS Training</Link></li>
              <li><Link to="/courses/toefl" className="text-gray-400 hover:text-white transition text-sm">TOEFL Training</Link></li>
              <li><Link to="/courses/pte" className="text-gray-400 hover:text-white transition text-sm">PTE Training</Link></li>
              <li><Link to="/courses/celpip" className="text-gray-400 hover:text-white transition text-sm">CELPIP Training</Link></li>
              <li><Link to="/courses/gre" className="text-gray-400 hover:text-white transition text-sm">GRE Verbal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 tracking-wider">CONTACT</h3>
            <p className="text-gray-400 text-sm mb-2">Email: info@fluentedge.com</p>
            <p className="text-gray-400 text-sm mb-4">Phone: +1 (234) 567-890</p>
            <Link
              to="/book-demo"
              className="inline-block px-4 py-2 bg-blue-900 dark:bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-800 dark:hover:bg-blue-500 transition"
            >
              Book Demo
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© 2025 FLUENTEDGELAB. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <Link to="/policies/privacy" className="text-sm text-gray-400 hover:text-white transition">Privacy Policy</Link>
            <Link to="/policies/refund" className="text-sm text-gray-400 hover:text-white transition">Refund Policy</Link>
            <Link to="/policies/terms" className="text-sm text-gray-400 hover:text-white transition">Terms & Conditions</Link>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
