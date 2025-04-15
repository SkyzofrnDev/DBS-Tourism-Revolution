import React from 'react';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className="p-3 z-0">
      <div className=" relative text-white rounded-3xl bg-[url('/Image/HeroSection.svg')] w-full h-screen bg-cover ">
        <div className="absolute bottom-14 w-full px-14">
          <p className="text-7xl ">
            Discover Indonesia’s Best <br />
            Travel Spots
          </p>
          <div className="w-full flex justify-between items-center">
            <p className="text-xl mt-16">
              Find top rated destinations and real reviews from fellow
              travelers.
            </p>
            <Link
              className="text-black bg-white rounded-full px-12 py-5"
              to="/"
            >
              Explore Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
