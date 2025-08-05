import React from 'react';
import { Shield, Server, Search, FileCode, Database, Users, BarChart, Cpu } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive security solutions to protect your digital assets from evolving threats. We provide expert guidance on security strategy, implementation, and ongoing maintenance.',
      delay: 0,
    },
    {
      icon: Server,
      title: 'IT Project Management',
      description: 'Expert planning and execution of IT projects to ensure on-time and on-budget delivery. Our certified project managers bring structure and efficiency to complex initiatives.',
      delay: 150,
    },
    {
      icon: Search,
      title: 'Security Audits & Assessments',
      description: 'Thorough evaluation of your security posture to identify and mitigate vulnerabilities. Our detailed reports provide actionable insights for immediate security improvements.',
      delay: 300,
    },
    {
      icon: FileCode,
      title: 'Digital Transformation',
      description: 'Strategic guidance to help your business embrace digital technologies securely. We ensure your transition to digital processes maintains robust security throughout.',
      delay: 450,
    },
    {
      icon: Database,
      title: 'Data Protection & GDPR Compliance',
      description: 'Ensure your organization complies with data protection regulations like GDPR. We implement comprehensive data protection measures and help you maintain compliance.',
      delay: 600,
    },
    {
      icon: Users,
      title: 'Security Awareness Training',
      description: 'Empower your employees to be the first line of defense against cyber threats. Our training programs build a security-conscious culture within your organization.',
      delay: 750,
    },
    {
      icon: BarChart,
      title: 'Risk Management',
      description: 'Identify, assess, and prioritize risks to your digital infrastructure. We develop tailored risk management strategies to protect your most valuable assets.',
      delay: 900,
    },
    {
      icon: Cpu,
      title: 'IT Infrastructure Optimization',
      description: 'Enhance the performance, security, and efficiency of your IT infrastructure. Our experts analyze your current setup and recommend strategic improvements.',
      delay: 1050,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive cybersecurity and IT project management solutions designed to protect 
              and optimize your business operations in an increasingly digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured methodology to ensure we deliver exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Assess',
                description: 'We begin with a comprehensive assessment of your current situation, identifying strengths, weaknesses, and opportunities.',
              },
              {
                number: '02',
                title: 'Plan',
                description: 'Based on our assessment, we develop a tailored strategy and detailed implementation plan to address your specific needs.',
              },
              {
                number: '03',
                title: 'Implement',
                description: 'Our expert team executes the plan with precision, ensuring minimal disruption to your ongoing operations.',
              },
              {
                number: '04',
                title: 'Optimize',
                description: 'We continuously monitor and refine our solutions to adapt to changing threats and business requirements.',
              },
            ].map((step, index) => (
              <div 
                key={index} 
                className="relative"
                style={{ 
                  animationDelay: `${index * 150}ms`, 
                  animationFillMode: 'both',
                  animationName: 'fadeInUp',
                  animationDuration: '1s' 
                }}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 relative z-10 h-full">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-1 bg-blue-100 z-0 transform translate-x-1/2">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have extensive experience across various industries, each with its unique security challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Financial Services',
                description: 'Protecting sensitive financial data and ensuring regulatory compliance.',
                image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                title: 'Healthcare',
                description: 'Securing patient data and ensuring HIPAA compliance for medical institutions.',
                image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                title: 'Manufacturing',
                description: 'Protecting intellectual property and securing operational technology.',
                image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                title: 'Government',
                description: 'Implementing robust security measures for sensitive government data.',
                image: 'https://images.pexels.com/photos/139303/pexels-photo-139303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                title: 'Retail',
                description: 'Securing customer data and protecting e-commerce platforms.',
                image: 'https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                title: 'Education',
                description: 'Protecting student information and securing educational institutions.',
                image: 'https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
            ].map((industry, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg h-64"
                style={{ 
                  animationDelay: `${index * 100}ms`, 
                  animationFillMode: 'both',
                  animationName: 'fadeIn',
                  animationDuration: '1s' 
                }}
              >
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                  <p className="text-blue-100 transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 overflow-hidden">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and learn how STELLAR CONSULTING
            can help protect and optimize your business operations.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 bg-teal-400 text-blue-900 font-bold rounded-md inline-block hover:bg-teal-300 transition-colors text-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;