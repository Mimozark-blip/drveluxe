import React, { useState } from 'react';
import { cars, carCategories } from '../utils/data';
import { Users, Fuel, Calendar, Sliders } from 'lucide-react';

const CarListing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(200);

  const filteredCars = cars.filter(car => {
    return (
      (selectedCategory === "All" || car.category === selectedCategory) &&
      car.price <= priceRange
    );
  });

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Fleet
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of vehicles to suit every need and budget. From economy to luxury, we have the perfect car for you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mb-12">
          <div className="md:w-1/4 mb-6 md:mb-0 md:pr-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Sliders className="mr-2 h-5 w-5 text-red-500" />
                Filters
              </h3>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
                <div className="space-y-2">
                  {carCategories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block px-4 py-2 rounded-md text-sm transition-colors w-full text-left ${
                        selectedCategory === category
                          ? 'bg-red-500 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                <div className="mb-2 flex justify-between text-sm text-gray-600">
                  <span>$50</span>
                  <span>${priceRange}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="300"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                      ${car.price}/day
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                      <span className="text-sm font-medium text-gray-500">{car.category}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        {car.seats} Seats
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Fuel className="h-4 w-4 mr-2 text-gray-400" />
                        {car.fuelType}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7 13.5L10 16.5L17 9.5L15.59 8.09L10 13.67L8.41 12.09L7 13.5Z" fill="currentColor"/>
                        </svg>
                        {car.transmission}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        {car.year}
                      </div>
                    </div>
                    
                    <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition duration-300 ease-in-out font-medium">
                      Rent Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No cars found</h3>
                <p className="text-gray-500">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarListing;