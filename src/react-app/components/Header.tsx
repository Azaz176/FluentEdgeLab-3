import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/react-app/context/ThemeContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl">
              <span className="font-semibold text-blue-500 dark:text-blue-400">Fluent</span>
              <span className="font-extrabold text-blue-900 dark:text-white">Edge</span>
              <span className="font-normal text-red-500 dark:text-red-400">Lab</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/courses" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 transition">
              Courses
            </Link>
            <Link to="/about" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 transition">
              About
            </Link>
            <Link to="/testimonials" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 transition">
              Testimonials
            </Link>
            <Link to="/blog" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 transition">
              Blog
            </Link>
            <Link to="/free-resources" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 transition">
              Resources
            </Link>
            <Link to="/faq" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 transition">
              FAQ
            </Link>
            <Link to="/contact" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 transition">
              Contact
            </Link>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-slate-700" />
              ) : (
                <Sun size={20} className="text-amber-400" />
              )}
            </button>
            
            <Link to="/book-demo" className="px-4 py-2 bg-blue-900 dark:bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-500 transition">
              Book Demo
            </Link>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-slate-700" />
              ) : (
                <Sun size={20} className="text-amber-400" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-blue-900 dark:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 py-2">
                Home
              </Link>
              <Link to="/courses" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 py-2">
                Courses
              </Link>
              <Link to="/about" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 py-2">
                About
              </Link>
              <Link to="/testimonials" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 py-2">
                Testimonials
              </Link>
              <Link to="/blog" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 py-2">
                Blog
              </Link>
              <Link to="/free-resources" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 py-2">
                Resources
              </Link>
              <Link to="/faq" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 py-2">
                FAQ
              </Link>
              <Link to="/contact" className="text-sm font-medium text-blue-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 py-2">
                Contact
              </Link>
              <Link to="/book-demo" className="text-sm font-medium text-white bg-blue-900 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-500 py-2 px-4 rounded-lg text-center">
                Book Demo
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
