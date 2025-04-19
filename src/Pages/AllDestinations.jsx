import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SkeletonDestinationCard = ({ className }) => {
  return (
    <div
      className={`flex justify-between items-start px-16 py-10 border-t-2 border-black/50 ${className}`}
    >
      <div className="flex gap-4">
        <div className="w-40 h-40 mr-10 bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="flex flex-col gap-3">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-64 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mt-5"></div>
        </div>
      </div>

      <div className="flex flex-col gap-3 max-w-md">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};
const AllDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/api/destinations',
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        );
        setDestinations(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading)
    return (
      <div className="">
        <p className="px-16 text-5xl pt-52 leading-relaxed">
          Discover the Best Destinations  <br /> 
        </p>
        <div className="mt-44">
          <div className="w-full">
            {[1, 2, 3, 4].map((_, index) => (
              <SkeletonDestinationCard
                key={index}
                className={index === 3 ? 'border-b-2' : ''}
              />
            ))}
          </div>
        </div>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="">
      <p className="px-16 text-5xl pt-52 leading-relaxed">
        Discover the Best Destinations <br /> 
      </p>
      <div className="mt-44">
        <div className="w-full">
          {destinations.map((destination, index) => (
            <Link
              to={`/destinations/${destination.slug}`}
              key={destination.id}
              className={`flex justify-between items-start px-16 py-10 
                border-t-2 border-black/50 hover:bg-gray-50 transition
                ${index === destinations.length - 1 ? 'border-b-2' : ''}`}
            >
              {/* Left content */}
              <div className="flex gap-4">
                <img
                  src={`http://127.0.0.1:8000/storage/${destination.thumbnail}`}
                  alt={destination.name}
                  className="w-40 mr-10 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold text-3xl">{destination.name}</p>
                  <p className="text-lg mt-5">{destination.address}</p>
                  <div className="flex items-center gap-1 mt-10">
                    <span className="text-yellow-400 text-lg">★</span>
                    <p className="text-lg font-semibold">
                      {destination.rating_avg > 0
                        ? `${parseFloat(destination.rating_avg).toFixed(1)}/5`
                        : 'No ratings'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <p className="text-lg text-left max-w-md">
                {destination.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDestinations;
