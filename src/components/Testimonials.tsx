import React from 'react';
import { testimonials } from '../utils/data';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with DriveLuxe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-md p-8 relative transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'fill-current' : 'stroke-current text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
              
              <div className="absolute -top-3 -left-3 text-red-500 opacity-10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9999 14.1093L9.56359 11.673C9.22382 11.3332 8.77618 11.3332 8.43641 11.673L3.51615 16.5932C3.17637 16.933 3.17637 17.3806 3.51615 17.7204L5.95245 20.1567C6.29222 20.4965 6.73986 20.4965 7.07963 20.1567L11.9999 15.2365C12.3396 14.8967 12.3396 14.4491 11.9999 14.1093ZM20.4838 16.5932L15.5635 11.673C15.2238 11.3332 14.7761 11.3332 14.4364 11.673L9.51613 16.5932C9.17636 16.933 9.17636 17.3806 9.51613 17.7204L11.9524 20.1567C12.2922 20.4965 12.7399 20.4965 13.0796 20.1567L17.9999 15.2365C18.3396 14.8967 18.3396 14.4491 17.9999 14.1093L15.5636 11.673C15.2238 11.3332 14.7762 11.3332 14.4364 11.673L11.9999 14.1093"></path>
                  <path d="M15.5635 4.82699L11.9999 8.39055L8.43641 4.82699C8.09664 4.48722 7.649 4.48722 7.30923 4.82699L3.51615 8.62007C3.17637 8.95984 3.17637 9.40748 3.51615 9.74725L5.95245 12.1836C6.29222 12.5233 6.73986 12.5233 7.07963 12.1836L9.51593 9.74725C9.8557 9.40748 10.3033 9.40748 10.6431 9.74725L13.0794 12.1836C13.4192 12.5233 13.8668 12.5233 14.2066 12.1836L16.6429 9.74725C16.9827 9.40748 17.4303 9.40748 17.7701 9.74725L20.2064 12.1836C20.5461 12.5233 20.9938 12.5233 21.3336 12.1836L23.7699 9.74725C24.1096 9.40748 24.1096 8.95984 23.7699 8.62007L19.9768 4.82699C19.637 4.48722 19.1894 4.48722 18.8496 4.82699L15.5635 4.82699Z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white text-red-500 border border-red-500 rounded-full font-medium hover:bg-red-50 transition duration-300 ease-in-out">
            View More Testimonials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;