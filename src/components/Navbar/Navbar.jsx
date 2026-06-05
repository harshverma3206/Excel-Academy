import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { schoolConfig } from '../../data/config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Academics', to: 'academics' },
    { name: 'Facilities', to: 'facilities' },
    { name: 'Faculty', to: 'faculty' },
    { name: 'Student Life', to: 'student-life' },
    { name: 'Admissions', to: 'admissions' },
    { name: 'News', to: 'news' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">EA</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">{schoolConfig.name}</h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{schoolConfig.motto.substring(0, 30)}...</p>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary cursor-pointer transition-colors font-medium"
                  activeClass="text-secondary"
                  spy={true}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:scale-105 transition-transform"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <Link to="admissions" smooth={true} duration={500}>
                <button className="btn-primary text-sm px-4 py-2">
                  Apply Now
                </button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <button className="btn-secondary text-sm px-4 py-2">
                  Contact
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t dark:border-gray-700">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-700 dark:text-gray-300 hover:text-secondary cursor-pointer transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-4 mt-4 pt-4 border-t dark:border-gray-700">
                <button
                  onClick={toggleTheme}
                  className="flex-1 p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                >
                  {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
                <Link to="admissions" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="flex-1">
                  <button className="btn-primary w-full text-sm">Apply Now</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;