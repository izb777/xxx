import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-teal-400" />
              <span className="font-serif text-xl font-bold text-white">STELLAR</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Providing expert cybersecurity and IT project management services to protect and enhance your business operations.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-white hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-teal-400 transition-colors">
                Cybersecurity Consulting
              </li>
              <li className="text-gray-300 hover:text-teal-400 transition-colors">
                IT Project Management
              </li>
              <li className="text-gray-300 hover:text-teal-400 transition-colors">
                Security Audits & Assessments
              </li>
              <li className="text-gray-300 hover:text-teal-400 transition-colors">
                Digital Transformation
              </li>
              <li className="text-gray-300 hover:text-teal-400 transition-colors">
                GDPR Compliance
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <span>ismaila.sakho@stellar-consulting.tech</span>
              </li>
                <li className="flex items-start gap-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <span>
                  <div>+221 77 887 22 05</div>
                  <div>+33 77 344 34 40</div>
                </span>
                </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <span>Dakar - Paris</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} STELLAR CONSULTING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;