import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Reach out to our team of experts to discuss your cybersecurity needs 
              and IT project requirements. We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Get In Touch</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Information</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-t-4 border-teal-400">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      <Mail className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-900 mb-1">Email</p>
                      <a 
                        href="mailto:ismaila.sakho@stellar-consulting.tech" 
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        ismaila.sakho@stellar-consulting.tech
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      <Phone className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-900 mb-1">Phone</p>
                      <a 
                        href="tel:+221778872205" 
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        +221 77 887 2205
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-900 mb-1">Location</p>
                      <p className="text-gray-600">
                        Dakar - Paris
                      </p>
                        <p className="text-gray-600">Paris, France</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Connect With Us</h3>
              <div className="flex gap-4 mb-8">
                <a 
                  href="https://linkedin.com" 
                  className="p-3 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-blue-800" />
                </a>
                <a 
                  href="https://twitter.com" 
                  className="p-3 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-6 w-6 text-blue-800" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Office Hours</h3>
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-900">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're conveniently located in the heart of Dakar. Feel free to visit us during our office hours.
            </p>
          </div>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            {/* Embed a map here */}
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <p className="text-gray-600">Interactive Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and how we work.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'What industries do you specialize in?',
                answer: 'We have expertise across multiple industries including finance, healthcare, manufacturing, government, retail, and education. Our team has experience addressing the unique security challenges of each sector.',
              },
              {
                question: 'How long does a typical security assessment take?',
                answer: 'The duration of a security assessment varies depending on the size and complexity of your organization. A basic assessment can take 1-2 weeks, while a comprehensive assessment may take 4-6 weeks or more.',
              },
              {
                question: 'Do you offer ongoing security monitoring?',
                answer: 'Yes, we offer continuous security monitoring services to ensure your systems remain protected. Our monitoring services include threat detection, vulnerability scanning, and security incident response.',
              },
              {
                question: 'How do you ensure the confidentiality of our data?',
                answer: 'We take data confidentiality extremely seriously. All our consultants sign strict NDAs, we use encrypted communication channels, and follow industry best practices for handling sensitive information.',
              },
              {
                question: 'What certifications do your security professionals hold?',
                answer: 'Our team includes professionals with certifications such as CISSP, CEH, CISM, PMP, OSCP, and many others. We continuously invest in training to keep our team\'s skills up to date.',
              },
            ].map((faq, index) => (
              <div 
                key={index} 
                className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
                style={{ 
                  animationDelay: `${index * 100}ms`, 
                  animationFillMode: 'both',
                  animationName: 'fadeInUp',
                  animationDuration: '0.5s' 
                }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h3 className="text-lg font-medium text-blue-900">{faq.question}</h3>
                    <span className="ml-2 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;