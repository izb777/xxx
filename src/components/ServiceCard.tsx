import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0 
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border-t-4 border-teal-400"
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'both',
        animationName: 'fadeInUp',
        animationDuration: '1s' 
      }}
    >
      <div className="mb-4 p-3 bg-blue-50 rounded-full inline-block">
        <Icon className="h-8 w-8 text-blue-800" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;