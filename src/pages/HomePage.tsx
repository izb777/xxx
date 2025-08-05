import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import Stats from '../components/Stats';
import { Shield, Server, Search, FileCode, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
const HomePage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive security solutions to protect your digital assets from evolving threats.',
      delay: 0,
    },
    {
      icon: Server,
      title: 'IT Project Management',
      description: 'Expert planning and execution of IT projects to ensure on-time and on-budget delivery.',
      delay: 150,
    },
    {
      icon: Search,
      title: 'Security Audits & Assessments',
      description: 'Thorough evaluation of your security posture to identify and mitigate vulnerabilities.',
      delay: 300,
    },
    {
      icon: FileCode,
      title: 'Digital Transformation',
      description: 'Strategic guidance to help your business embrace digital technologies securely.',
      delay: 450,
    },
  ];

  const testimonials = [
    {
      quote: "STELLAR CONSULTING transformed our cybersecurity infrastructure. Their expertise helped us prevent potential breaches and strengthen our overall security posture.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechInnovate Solutions",
      delay: 0,
    },
    {
      quote: "Working with I. SAKHO and his team was a game-changer for our IT operations. Their project management expertise helped us complete our digital transformation ahead of schedule.",
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Enterprises",
      delay: 150,
    },
    {
      quote: "After STELLAR's security audit, we implemented their recommendations and saw immediate improvements in our security metrics. Highly recommend their services.",
      name: "Amina Diallo",
      role: "CISO",
      company: "FinSecure Banking",
      delay: 300,
    },
  ];

  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Expert Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive cybersecurity and IT project management solutions 
              tailored to protect and optimize your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                icon={service.icon} 
                title={service.title} 
                description={service.description}
                delay={service.delay}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Expert Cybersecurity & IT Project Management
              </h2>
              <p className="text-gray-600 mb-6">
                Led by I. SAKHO, STELLAR CONSULTING brings years of experience from working with 
                leading organizations in France and across Europe. Our team of experts combines deep 
                technical knowledge with strategic insight to deliver exceptional results.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Certified cybersecurity professionals',
                  'Experienced IT project managers',
                  'Industry-leading methodologies',
                  'Client-focused approach',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="px-6 py-3 bg-blue-900 text-white font-medium rounded-md inline-flex items-center gap-2 hover:bg-blue-800 transition-colors"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white p-4 rounded-lg shadow-lg relative">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team meeting" 
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute top-8 right-8 bg-teal-400 text-blue-900 font-bold px-4 py-2 rounded-full">
                  Est. 2010
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We take pride in delivering exceptional service and results for our clients.
              Here's what some of them have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                quote={testimonial.quote} 
                name={testimonial.name} 
                role={testimonial.role} 
                company={testimonial.company}
                delay={testimonial.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Secure Your Digital Future?
                </h2>
                <p className="text-blue-100 mb-6">
                  Contact us today to schedule a consultation and discover how STELLAR CONSULTING
                  can help protect and enhance your business operations.
                </p>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-teal-400 text-blue-900 font-medium rounded-md inline-flex items-center gap-2 hover:bg-teal-300 transition-colors"
                >
                  Get Started
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team collaboration" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;