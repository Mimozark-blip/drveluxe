import React from 'react';
import { PhoneCall, Mail, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience the Drive of Your Life?
            </h2>
            <p className="text-gray-600 mb-8">
              Join thousands of satisfied customers who have discovered the joy of hassle-free car rentals. Our team is ready to help you find the perfect vehicle for your needs.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-500">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone Support</h3>
                  <p className="mt-1 text-gray-600">Our friendly team is here to help 24/7</p>
                  <a href="tel:+1234567890" className="mt-1 block text-red-500 font-medium">+1 (234) 567-890</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email Support</h3>
                  <p className="mt-1 text-gray-600">Get in touch with our customer service team</p>
                  <a href="mailto:support@driveluxe.com" className="mt-1 block text-red-500 font-medium">support@driveluxe.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Callback</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="+1 (234) 567-890"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Tell us what you're looking for..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
              >
                Send Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;