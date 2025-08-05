import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Shield 
            className={`h-8 w-8 transition-colors ${
              scrolled ? 'text-blue-900' : 'text-white'
            }`} 
          />
          <span 
            className={`font-serif text-xl font-bold transition-colors ${
              scrolled ? 'text-blue-900' : 'text-white'
            }`}
          >
            STELLAR CONSULTING
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors ${
                isActive(link.path)
                  ? scrolled 
                    ? 'text-blue-600' 
                    : 'text-teal-300'
                  : scrolled 
                    ? 'text-gray-800 hover:text-blue-600' 
                    : 'text-white hover:text-teal-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              scrolled 
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'bg-teal-400 text-blue-900 hover:bg-teal-300'
            }`}
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 px-4 font-medium ${
                  isActive(link.path) 
                    ? 'text-blue-600' 
                    : 'text-gray-800 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-2 px-4 py-2 bg-blue-900 text-white font-medium rounded-md text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;