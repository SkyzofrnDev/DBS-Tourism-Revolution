import React, { useState } from 'react';
import { motion } from 'framer-motion';
import provincesData from '../Data/Provinces.json';

const category = [{ name: 'Tourism' }, { name: 'Best' }, { name: 'Travel' }];

// Convert provinces data to match our component needs
const destinations = provincesData.map(province => ({
  title: province.name,
  label: 'Explore Destinations', // Default label since provinces.json doesn't have destination count
  image: province.thumbnail,
  link: `/province/${province.slug}`,
  description: province.description
}));

const Category = ({ name }) => (
  <div className="mt-20">
    <div className="bg-[#cfcdcd8f] border-2 rounded-full border-[#0000002f] w-fit px-10 py-4">
      <p className="text-lg">{name}</p>
    </div>
  </div>
);

const DestinationCard = ({ title, label, image, link, description }) => {
  const handleClick = () => {
    console.log(`Navigating to: ${link}`);
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden min-w-[400px] max-w-[500px] h-[420px] cursor-pointer border-2 border-white shadow-md"
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-white/60 px-6 py-2 rounded-full text-xl border-1 border-white border font-medium">
        {label}
      </div>
      <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
        {title}
      </div>

    </div>
  );
};

const CategoryRegion = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const cardWidth = 520; // card + gap

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
  style={{ maxWidth: `${cardWidth * 3 + 40}px` }} // 40px buat padding
>
  <motion.div
    className="flex gap-5"
    animate={{ x: -startIndex * (cardWidth + 20) }} // tambahkan gap jika perlu
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
