import React from 'react';
import { Link } from 'react-router-dom'; // <--- Tambahkan ini

const spots = [
  {
    id: 1,
    name: 'Name Spot',
    location: 'Location',
    rating: 4.5,
    description: 'Description',
    image: '/ImageData/KepulauanSeribu.svg',
  },
  {
    id: 2,
    name: 'Beach Paradise',
    location: 'Bali, Indonesia',
    rating: 4.7,
    description: 'Beautiful white sands and crystal clear water',
    image: '/ImageData/Borobudur.svg',
  },
  {
    id: 3,
    name: 'Mountain Peak',
    location: 'Java, Indonesia',
    rating: 4.8,
    description: 'Best hiking destination',
    image: '/ImageData/Bromo.svg',
  },
];


const RegionCard = () => {
  return (
    <div className="w-full">
      {spots.map((spot, index) => (
        <Link
          to={`/spot/${spot.id}`} // <-- Path tujuan
          key={spot.id}
          className={`flex justify-between items-start px-16 py-10 
            border-t-2 border-black/50 hover:bg-gray-50 transition
            ${index === spots.length - 1 ? 'border-b-2' : ''}`}
        >
          {/* Left content */}
          <div className="flex gap-4">
            <img
              src={spot.image}
              alt={spot.name}
              className="w-40 mr-10 object-cover rounded-lg"
            />
            <div>
              <p className="font-semibold text-3xl">{spot.name}</p>
              <p className="text-lg mt-5">{spot.location}</p>
              <div className="flex items-center gap-1 mt-10">
                <span className="text-yellow-400 text-lg">★</span>
                <p className="text-lg font-semibold">{spot.rating}/5</p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <p className="text-lg text-left max-w-md">{spot.description}</p>
        </Link>
      ))}
    </div>
  );
};

const Region = () => {

  return (
    <div className="">
      <p className="px-16 text-5xl pt-52 leading-relaxed">
        Discover the Best Destinations in <br /> Bali
      </p>
      <div className="mt-44">
        <RegionCard />
      </div>
    </div>
  );
};

export default Region;
