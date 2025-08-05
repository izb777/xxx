import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  role, 
  company,
  delay = 0 
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col"
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'both',
        animationName: 'fadeIn',
        animationDuration: '1s' 
      }}
    >
      <div className="text-5xl text-gold-500 mb-4">"</div>
      <p className="text-gray-700 mb-6 flex-grow italic">{quote}</p>
      <div>
        <p className="font-bold text-blue-900">{name}</p>
        <p className="text-gray-500 text-sm">{role} at {company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;