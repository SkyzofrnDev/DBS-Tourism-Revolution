import React from 'react';
import {
  CategoryDestination,
  CategoryRegion,
  DestinasionGrid,
  Explore,
  HeroSection,
  Qoute,
  Trending,
} from '../Layout';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="px-16">
        <Trending />
        <DestinasionGrid />
        <CategoryRegion />
        <CategoryDestination />
      </div>
      <Explore />
      <Qoute/>

    </div>
  );
};

export default LandingPage;
