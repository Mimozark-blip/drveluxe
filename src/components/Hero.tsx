import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{ minHeight: '100vh' }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
        backgroundImage: "url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920')"
      }}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="md:pr-12">
              <h1 className="text-white font-semibold text-5xl animate-fade-in-down">
                Premium Car Rental at Unbeatable Prices
              </h1>
              <p className="mt-4 text-lg text-gray-200 animate-fade-in-up">
                Discover the perfect car for your journey. From luxury sedans to 
                rugged SUVs, we have the ideal vehicle for any adventure.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="bg-white rounded-lg shadow-xl p-6 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Find Your Perfect Ride</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pick-up Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <select className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                  <option>Miami</option>
                </select>
              </div>
            </div>
            
            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pick-up Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="date" 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            
            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Return Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="date" 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            
            <div className="col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2 opacity-0">
                Search
              </label>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center">
                Find Cars
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="animate-bounce absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-1">Scroll Down</span>
          <div className="w-5 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-1 animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;