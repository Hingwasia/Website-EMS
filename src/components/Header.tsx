import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoIcon from '../assets/logo-icon.svg';

// Sparkling AI Icon Component
const SparkleIcon: React.FC = () => {
  return (
    <div className="relative inline-flex items-center">
      <svg 
        className="w-4 h-4 text-purple-500 animate-pulse" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
      </svg>
      <svg 
        className="w-2 h-2 text-blue-400 absolute -top-1 -right-1 animate-ping" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        style={{ animationDelay: '0.5s' }}
      >
        <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
      </svg>
      <svg 
        className="w-1.5 h-1.5 text-pink-400 absolute -bottom-1 -left-1 animate-pulse" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        style={{ animationDelay: '1s' }}
      >
        <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
      </svg>
    </div>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Home', href: isHomePage ? '#home' : '/', isInternal: !isHomePage },
    { name: 'AI Solutions', href: '/ai', isInternal: true, hasSparkle: true },
    { name: 'Packages', href: '/ai-packages', isInternal: true },
    { name: 'About Us', href: '/about', isInternal: true },
    { name: 'Contact', href: '/contact', isInternal: true }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoIcon} alt="EaseMySaaS Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-900">EaseMySaaS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isInternal ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 transition-colors duration-200 hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-900'
                  } ${location.pathname === item.href ? 'text-blue-600 font-semibold' : ''}`}
                >
                  {item.hasSparkle && <SparkleIcon />}
                  <span>{item.name}</span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-900'
                  }`}
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Free Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                item.isInternal ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
                      location.pathname === item.href ? 'text-blue-600 font-semibold' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.hasSparkle && <SparkleIcon />}
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <Link
                to="/contact"
                className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Audit
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 