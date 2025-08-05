import React from 'react';
import { CheckCircle2, Award, Users, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ceoImg from '../assets/ceo.png';
import consultantImg from '../assets/consultant.png';
const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100">
              STELLAR CONSULTING is a premier cybersecurity and IT project management firm 
              dedicated to protecting and optimizing businesses in an increasingly digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-teal-400">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                To provide exceptional cybersecurity and IT project management services that protect 
                our clients' digital assets, optimize their operations, and enable them to focus on 
                their core business objectives with confidence.
              </p>
              <ul className="space-y-3">
                {[
                  'Protect businesses from evolving cyber threats',
                  'Deliver IT projects efficiently and effectively',
                  'Build long-term partnerships with our clients',
                  'Stay at the forefront of security innovation',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-900">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 mb-6">
                To be the most trusted partner for cybersecurity and IT project management, recognized 
                for our expertise, integrity, and commitment to client success in an increasingly 
                complex digital landscape.
              </p>
              <ul className="space-y-3">
                {[
                  'Set the standard for excellence in cybersecurity consulting',
                  'Empower organizations with secure digital transformation',
                  'Cultivate a global network of security professionals',
                  'Drive innovation in security solutions and methodologies',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & CEO */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010 by I. SAKHO, STELLAR CONSULTING began as a small cybersecurity consultancy 
                in Dakar, Senegal. After spending several years working with leading organizations in France, 
                I. SAKHO recognized the growing need for expert cybersecurity services in Africa and beyond.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a one-person operation has grown into a team of dedicated security professionals 
                and IT project managers serving clients across multiple industries and countries. Our growth has 
                been driven by our unwavering commitment to excellence and our ability to deliver measurable results.
              </p>
              <p className="text-gray-700 mb-8">
                Today, STELLAR CONSULTING is recognized as a leader in cybersecurity and IT project management, 
                known for our deep expertise, client-focused approach, and ability to navigate the complex 
                challenges of the digital age.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="px-6 py-3 bg-blue-900 text-white font-medium rounded-md inline-flex items-center gap-2 hover:bg-blue-800 transition-colors"
                >
                  Our Services
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-transparent border-2 border-blue-900 text-blue-900 font-medium rounded-md hover:bg-blue-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-teal-400 rounded-lg"></div>
                <img 
                  src={ceoImg} 
                  alt="CEO" 
                  className="rounded-lg relative z-10"
                />
                <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-20">
                  <p className="font-bold text-blue-900">I. SAKHO</p>
                  <p className="text-gray-600 text-sm">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and represent the foundation of our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from the solutions we deliver to the way we interact with our clients.',
              },
              {
                icon: Users,
                title: 'Integrity',
                description: 'We operate with the highest level of integrity, always doing what\'s right for our clients, even when it\'s difficult.',
              },
              {
                icon: GraduationCap,
                title: 'Innovation',
                description: 'We constantly seek innovative approaches to solve complex security challenges and deliver exceptional results.',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-blue-900"
                  style={{ 
                    animationDelay: `${index * 150}ms`, 
                    animationFillMode: 'both',
                    animationName: 'fadeInUp',
                    animationDuration: '1s' 
                  }}
                >
                  <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-6">
                    <Icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who make STELLAR CONSULTING a leader in cybersecurity 
              and IT project management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'I. SAKHO',
                role: 'Founder & CEO',
                image: ceoImg,
                description: 'With over 15 years of experience in cybersecurity, I. SAKHO leads our team with vision and expertise.',
              },
              {
                name: 'Mamadou KA',
                role: 'IT Consultant',
                image: consultantImg,
                description: 'Mamadou specializes in IT consulting, helping clients implement secure and efficient technology solutions across industries.',
              },
              {
                name: 'Ousmane Ndiaye',
                role: 'IT Project Director',
                image: 'https://images.pexels.com/photos/3777955/pexels-photo-3777955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                description: 'Ousmane\'s methodical approach ensures our projects are delivered on time and within budget.',
              },
              {
                name: 'Sophie Mensah',
                role: 'Security Analyst Lead',
                image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                description: 'Sophie leads our security analysis team with her in-depth knowledge of threat intelligence.',
              },
            ].map((member, index) => (
              <div 
                key={index} 
                className="relative group"
                style={{ 
                  animationDelay: `${index * 150}ms`, 
                  animationFillMode: 'both',
                  animationName: 'fadeIn',
                  animationDuration: '1s' 
                }}
              >
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg relative -mt-10 mx-4 z-10 group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                  <p className="text-teal-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Join Forces With Us</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to work with a team that's passionate about protecting your business and optimizing your IT operations?
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-blue-900 text-white font-bold rounded-md inline-block hover:bg-blue-800 transition-colors text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;