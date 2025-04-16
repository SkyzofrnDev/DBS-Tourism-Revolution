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
      <Explore />
        <CategoryDestination />
      </div>
      <Qoute/>

    </div>
  );
};

export default LandingPage;
