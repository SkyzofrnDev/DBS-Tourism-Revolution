import React from 'react';

const destinations = [
  {
    name: 'Kepulauan Seribu',
    location: 'Kepulauan Seribu, Indonesia',
    rating: '4.5/5',
    image: '/ImageData/KepulauanSeribu.svg',
  },
  {
    name: 'Borobudur',
    location: 'Magelang, Jawa Tengah',
    rating: '4.5/5',
    image: '/ImageData/Borobudur.svg',
  },
  {
    name: 'Bromo Mountain',
    location: 'Jogja, Jawa Timur, Indonesia',
    rating: '4.5/5',
    image: '/ImageData/Bromo.svg',
  },
  {
    name: 'Pantai Kuta',
    location: 'Kuta, Bali, Indonesia',
    rating: '4.5/5',
    image: '/ImageData/Kuta.svg',
  },
  {
    name: 'Raja Ampat',
    location: 'Semenanjung Kepala Burung, Pulau Papua',
    rating: '4.5/5',
    image: '/ImageData/RajaAmpat.svg',
  },
  {
    name: 'Danau Toba',
    location: 'Sumatera Utara, Indonesia',
    rating: '4.6/5',
    image: '/Image/danau-toba.jpg',
  },
];

const DestinationCard = ({ item }) => (
  <div
    className="relative h-60 rounded-xl overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: `url(${item.image})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end text-white">
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-sm">{item.location}</p>
      <p className="text-sm text-yellow-400 mt-1">{item.rating}</p>
    </div>
  </div>
);

const DestinationGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-10 mt-20">
      {/* Row 1: 2 cards on the left (40%) */}
      <div className="lg:col-span-4 space-y-4">
        <DestinationCard item={destinations[0]} />
      </div>

      {/* Row 1 right side (60%) */}
      <div className="lg:col-span-6">
        <DestinationCard item={destinations[1]} />
      </div>

      {/* Middle full width row */}
      <div className="lg:col-span-10">
        <DestinationCard item={destinations[2]} />
      </div>

      {/* Bottom row: left 60%, right 40% */}
      <div className="lg:col-span-6">
        <DestinationCard item={destinations[3]} />
      </div>
      <div className="lg:col-span-4">
        <DestinationCard item={destinations[4]} />
      </div>
    </div>
  );
};

export default DestinationGrid;
