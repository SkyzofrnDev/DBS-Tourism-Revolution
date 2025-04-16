import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllDestinations = () => {
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
        setDestinations(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="">
      <p className="px-16 text-5xl pt-52 leading-relaxed">
        Discover the Best Destinations in <br /> Bali
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
                      {destination.rating_avg > 0 ? 
                        `${parseFloat(destination.rating_avg).toFixed(1)}/5` : 
                        'No ratings'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <p className="text-lg text-left max-w-md">{destination.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDestinations;
