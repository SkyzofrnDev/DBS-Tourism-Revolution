import React from 'react';
import destinationsData from '../Data/Destination.json';

const DestinationCard = ({ item }) => (
  <div
    className="relative h-60 rounded-xl overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: `url(${item.thumbnail})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end text-white">
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-sm">{item.address}</p>
      <div className='flex'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffae00"
            d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
          />
        </svg>
        <p className="text-sm text-[#ffae00] mt-1">
          {item.rating_avg ? `${parseFloat(item.rating_avg).toFixed(1)}/5` : 'No ratings'}
        </p>
      </div>
    </div>
  </div>
);

const DestinationGrid = () => {
  // Filter destinations that have ratings and ensure we have at least 5 items
  const ratedDestinations = destinationsData
    .filter(dest => dest.rating_avg !== null)
    .concat(destinationsData.filter(dest => dest.rating_avg === null))
    .slice(0, 5);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-10 mt-20">
      {/* Row 1: 2 cards on the left (40%) */}
      <div className="lg:col-span-4 space-y-4">
        {ratedDestinations[0] && <DestinationCard item={ratedDestinations[0]} />}
      </div>

      {/* Row 1 right side (60%) */}
      <div className="lg:col-span-6">
        {ratedDestinations[1] && <DestinationCard item={ratedDestinations[1]} />}
      </div>

      {/* Middle full width row */}
      <div className="lg:col-span-10">
        {ratedDestinations[2] && <DestinationCard item={ratedDestinations[2]} />}
      </div>

      {/* Bottom row: left 60%, right 40% */}
      <div className="lg:col-span-6">
        {ratedDestinations[3] && <DestinationCard item={ratedDestinations[3]} />}
      </div>
      <div className="lg:col-span-4">
        {ratedDestinations[4] && <DestinationCard item={ratedDestinations[4]} />}
      </div>
    </div>
  );
};

export default DestinationGrid;
