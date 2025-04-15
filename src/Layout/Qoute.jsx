import React from 'react';

const Qoute = () => {
  return (
    <div className="w-full px-36 bg-[#F4F4F4] mt-36 py-10">
      <p className="text-5xl leading-snug font-light">
        Travel isn’t about souvenirs or photos{' '}
        <img
          src="/Image/HeroSection.svg"
          alt="icon"
          className="inline-block w-52 h-10 rounded-full object-cover mx-1"
        />
        it’s about the moments{' '}
        <img
          src="/Image/Explore.svg"
          alt="icon"
          className="inline-block w-28 h-10 rounded-full object-cover mx-1"
        />
        that stay with you long after the trip ends. Collect stories,
        friendships, and memories you can carry forever.
      </p>
    </div>
  );
};

export default Qoute;
