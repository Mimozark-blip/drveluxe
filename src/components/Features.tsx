import React from 'react';
import { Shield, Car, Clock, CreditCard } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-3 bg-red-50 rounded-full inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Car className="h-6 w-6 text-red-500" />,
      title: "Wide Range of Vehicles",
      description: "From economy to luxury, choose from our extensive fleet of well-maintained vehicles to suit your needs."
    },
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: "Fully Insured",
      description: "Peace of mind with comprehensive insurance coverage included in all our rental plans."
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: "24/7 Support",
      description: "Our customer service team is available round the clock to assist you with any questions or concerns."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-red-500" />,
      title: "No Hidden Charges",
      description: "Transparent pricing with no surprise fees. What you see is what you pay."
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose DriveLuxe</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer premium car rental services with exceptional customer care, ensuring you have the best driving experience possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;