import React from 'react';

const Footer = () => {
  return (
    <div className="relative items-center text-center flex flex-col text-white mt-36 w-full bg-[url('/Image/Footer.svg')] h-[130vh] bg-cover">
      <div className='mt-28'>
        <p className="text-7xl font-light">
          Find the perfect trip for you and discover extraordinary adventures
          with us!
        </p>
        <p className="mt-5 text-2xl">
          Find the perfect trip for you and discover extraordinary adventures
          with us!
        </p>
      </div>
      <div className='absolute bottom-5'>
        <p className='italic font-semibold text-[16rem]'>VISTANUSA</p>
        <div className='flex justify-between'>
        <p className='font-semibold text-3xl'>VISTANUSA</p>
        <div className="flex gap-10 underline-offset-1 underline text-xl">
        <p>Source Code Github</p>
        <p>About Us</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
