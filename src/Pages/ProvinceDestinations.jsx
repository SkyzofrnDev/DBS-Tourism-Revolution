import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const SkeletonDestinationCard = () => (
  <div className={`flex justify-between items-start px-16 py-10 border-t-2 border-black/50`}>
    {/* Left content skeleton */}
    <div className="flex gap-4">
      <div className="w-40 h-40 mr-10 bg-gray-200 rounded-lg animate-pulse"></div>
      <div>
        <div className="h-8 w-48 bg-gray-200 rounded mb-4 animate-pulse"></div>
        <div className="h-4 w-64 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="flex items-center gap-1 mt-10">
          <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
    
    {/* Right content skeleton */}
    <div className="h-4 w-96 bg-gray-200 rounded animate-pulse"></div>
  </div>
);

const ProvinceDestinations = () => {
  const [province, setProvince] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchProvinceDestinations = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/provinces/${slug}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        setProvince(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProvinceDestinations();
  }, [slug]);

  if (loading) return (
    <div className="">
      <div className="px-16 pt-52">
        <div className="h-12 w-1/3 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 w-2/3 bg-gray-200 rounded mt-4 animate-pulse"></div>
      </div>
      <div className="mt-20">
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
  if (!province) return <div>Province not found</div>;

  return (
    <div className="">
      <div className="px-16 pt-52">
        <h1 className="text-5xl leading-relaxed">Explore {province.name}</h1>
        <p className="text-xl text-gray-600 mt-4">{province.description}</p>
      </div>
      <div className="mt-20">
        <div className="w-full">
          {province.destinations.map((destination, index) => (
            <Link
              to={`/destinations/${destination.slug}`}
              key={destination.id}
              className={`flex justify-between items-start px-16 py-10 
                border-t-2 border-black/50 hover:bg-gray-50 transition
                ${index === province.destinations.length - 1 ? 'border-b-2' : ''}`}
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

export default ProvinceDestinations; 