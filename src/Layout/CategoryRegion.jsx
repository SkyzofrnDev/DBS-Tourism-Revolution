import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const category = [{ name: 'Tourism' }, { name: 'Best' }, { name: 'Travel' }];

const Category = ({ name }) => (
  <div className="mt-20">
    <div className="bg-[#cfcdcd8f] border-2 rounded-full border-[#0000002f] w-fit px-10 py-4">
      <p className="text-lg">{name}</p>
    </div>
  </div>
);

const DestinationCard = ({ title, label, image, link, description }) => {
  return (
    <Link to={link} className="block">
      <div className="relative rounded-2xl overflow-hidden min-w-[400px] max-w-[500px] h-[420px] cursor-pointer border-2 border-white shadow-md hover:shadow-lg transition-shadow">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-white/60 px-6 py-2 rounded-full text-xl border-1 border-white border font-medium">
          {label}
        </div>
        <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
          {title}
        </div>
      </div>
    </Link>
  );
};

const SkeletonCard = () => (
  <div className="relative rounded-2xl overflow-hidden min-w-[400px] max-w-[500px] h-[420px] bg-gray-200 animate-pulse">
    <div className="absolute top-4 left-4 bg-white/60 px-6 py-2 rounded-full w-40 h-8"></div>
    <div className="absolute bottom-4 left-4 w-3/4 h-6 bg-gray-300 rounded"></div>
  </div>
);

const CategoryRegion = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const visibleCount = 3;
  const cardWidth = 520;

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/provinces', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setDestinations(data.map(province => ({
          title: province.name,
          label: province.destinations_count + " Destinations",
          image: `http://127.0.0.1:8000/storage/${province.thumbnail}`,
          link: `/provinces/${province.slug}`,
          description: province.description
        })));
      } catch (error) {
        console.error('Error fetching provinces:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProvinces();
  }, []);

  const maxIndex = destinations.length - visibleCount;

  const handleNext = () => {
    if (startIndex < maxIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  if (loading) return (
    <div className="p-6 overflow-hidden w-full">
      {/* Categories Skeleton */}
      <div className="flex gap-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="mt-20">
            <div className="bg-gray-200 border-2 rounded-full border-gray-300 w-32 h-12 animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Heading & Controls Skeleton */}
      <div className="flex items-start mt-10 w-full justify-between">
        <div className="w-1/3 h-12 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-1/4 h-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="flex gap-5">
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Carousel Skeleton */}
      <div className="mt-10 overflow-hidden mx-auto px-4" style={{ maxWidth: `${cardWidth * 3 + 40}px` }}>
        <div className="flex gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-shrink-0" style={{ width: `${cardWidth}px` }}>
              <SkeletonCard />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Skeleton */}
      <div className="flex justify-center mt-6 gap-2">
        {[1, 2, 3].map((i) => (
          <span key={i} className="w-3 h-3 rounded-full bg-gray-300 animate-pulse"></span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 overflow-hidden w-full">
      {/* Categories */}
      <div className="flex gap-5">
        {category.map((item, index) => (
          <Category key={index} name={item.name} />
        ))}
      </div>

      {/* Heading & Controls */}
      <div className="flex items-start mt-10 w-full justify-between">
        <p className="text-4xl font-light">
          <b>Your</b> next <b>favorite</b> place <br /> awaits
        </p>
        <p className="text-2xl font-light">
          The most talked about <br /> places among travelers
        </p>
        <div className="flex gap-5">
          <button onClick={handlePrev}>
            <img src="/Icon/ButtonLeft.svg" alt="prev" />
          </button>
          <button onClick={handleNext}>
            <img src="/Icon/ButtonRight.svg" alt="next" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="mt-10 overflow-hidden mx-auto px-4"
        style={{ maxWidth: `${cardWidth * 3 + 40}px` }}
      >
        <motion.div
          className="flex gap-5"
          animate={{ x: -startIndex * (cardWidth + 20) }}
          transition={{ type: 'spring', stiffness: 500, damping: 50 }}
        >
          {destinations.map((item, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: `${cardWidth}px` }}>
              <DestinationCard {...item} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: destinations.length - visibleCount + 1 }).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === startIndex ? 'bg-black' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CategoryRegion;
