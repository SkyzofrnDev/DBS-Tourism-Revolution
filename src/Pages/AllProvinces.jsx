import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProvinceAll = () => {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/provinces');
        setProvinces(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      {' '}
      <p className="px-16 text-5xl pt-52 leading-relaxed">
        Explore the provinces where history, culture, and nature converge
      </p>
      <div className="mt-44">
        <div className="w-full">
          {provinces.map((province, index) => (
            <Link
              to={`/province/${province.slug}`}
              key={province.id}
              className={`flex justify-between items-start px-16 py-10 
            border-t-2 border-black/50 hover:bg-gray-50 transition
            ${index === provinces.length - 1 ? 'border-b-2' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {/* Left content */}
              <div className="flex gap-4">
                <img
                  src={`http://127.0.0.1:8000/storage/${province.thumbnail}`}
                  alt={province.name}
                  className="w-40 mr-10 object-cover rounded-lg aspect-square"
                />
                <div>
                  <p className="font-semibold text-3xl">{province.name}</p>
                  <div className="bg-transparent px-5 py-2 border-2 border-black/20 rounded-lg mt-5">
                    <p className="text-lg font-semibold">
                      {province.destinations_count} Destinations
                    </p>
                  </div>
                  <div className="flex gap-2 mt-2"></div>
                </div>
              </div>

              {/* Right content */}
              <p className="text-lg text-left max-w-md">
                {province.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProvinceAll;
