import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DestinationCard = ({ item }) => (
  <Link to={`/destinations/${item.slug}`} className="block h-full">
    <div
      className="relative h-60 rounded-xl overflow-hidden bg-cover bg-center hover:opacity-90 transition-opacity"
      style={{ backgroundImage: `url(http://127.0.0.1:8000/storage/${item.thumbnail})` }}
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
  </Link>
);

const SkeletonCard = () => (
  <div className="relative h-60 rounded-xl overflow-hidden bg-gray-200 animate-pulse">
    <div className="absolute inset-0 p-4 flex flex-col justify-end">
      <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-1/2 bg-gray-300 rounded mb-3"></div>
      <div className="flex items-center">
        <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
        <div className="h-4 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
);

const DestinationGrid = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/destinations', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        
        // Filter destinations that have ratings first, then others
        const ratedDestinations = response.data
          .filter(dest => dest.rating_avg > 0)
          .concat(response.data.filter(dest => dest.rating_avg === 0 || !dest.rating_avg))
          .slice(0, 5);

        setDestinations(ratedDestinations);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-10 mt-20">
      {/* Row 1: 2 cards on the left (40%) */}
      <div className="lg:col-span-4 space-y-4">
        <SkeletonCard />
      </div>

      {/* Row 1 right side (60%) */}
      <div className="lg:col-span-6">
        <SkeletonCard />
      </div>

      {/* Middle full width row */}
      <div className="lg:col-span-10">
        <SkeletonCard />
      </div>

      {/* Bottom row: left 60%, right 40% */}
      <div className="lg:col-span-6">
        <SkeletonCard />
      </div>
      <div className="lg:col-span-4">
        <SkeletonCard />
      </div>
    </div>
  );

  if (error) return <div>Error loading destinations: {error}</div>;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-10 mt-20">
      {/* Row 1: 2 cards on the left (40%) */}
      <div className="lg:col-span-4 space-y-4">
        {destinations[0] && <DestinationCard item={destinations[0]} />}
      </div>

      {/* Row 1 right side (60%) */}
      <div className="lg:col-span-6">
        {destinations[1] && <DestinationCard item={destinations[1]} />}
      </div>

      {/* Middle full width row */}
      <div className="lg:col-span-10">
        {destinations[2] && <DestinationCard item={destinations[2]} />}
      </div>

      {/* Bottom row: left 60%, right 40% */}
      <div className="lg:col-span-6">
        {destinations[3] && <DestinationCard item={destinations[3]} />}
      </div>
      <div className="lg:col-span-4">
        {destinations[4] && <DestinationCard item={destinations[4]} />}
      </div>
    </div>
  );
};

export default DestinationGrid;
