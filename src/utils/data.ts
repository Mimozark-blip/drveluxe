export interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  seats: number;
  transmission: string;
  fuelType: string;
  year: number;
  available: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Tesla Model 3",
    category: "Electric",
    price: 120,
    image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Electric",
    year: 2023,
    available: true
  },
  {
    id: 2,
    name: "BMW 5 Series",
    category: "Luxury",
    price: 150,
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    year: 2022,
    available: true
  },
  {
    id: 3,
    name: "Audi Q7",
    category: "SUV",
    price: 180,
    image: "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    year: 2023,
    available: true
  },
  {
    id: 4,
    name: "Mercedes C-Class",
    category: "Luxury",
    price: 140,
    image: "https://images.pexels.com/photos/193997/pexels-photo-193997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Hybrid",
    year: 2022,
    available: true
  },
  {
    id: 5,
    name: "Toyota Corolla",
    category: "Economy",
    price: 80,
    image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    year: 2022,
    available: true
  },
  {
    id: 6,
    name: "Range Rover Sport",
    category: "SUV",
    price: 200,
    image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Diesel",
    year: 2023,
    available: true
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Davidson",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    role: "Business Traveler",
    content: "DriveLuxe made my business trip so much easier. The car was impeccably clean and the service was top-notch. I'll definitely be using them again!",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Wilson",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    role: "Tourist",
    content: "We rented an SUV for our family vacation and it was perfect. The booking process was simple and the staff was incredibly helpful.",
    rating: 4
  },
  {
    id: 3,
    name: "Michael Chen",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    role: "Local Customer",
    content: "I've tried several car rental services, but DriveLuxe stands out for their exceptional customer service and well-maintained vehicles.",
    rating: 5
  }
];

export const carCategories = [
  "All",
  "Electric",
  "Luxury",
  "SUV",
  "Economy",
  "Sports"
];