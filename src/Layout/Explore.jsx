import React from 'react';

const Explore = () => {
  return (
    <div className="p-4 text-white mt-28">
      <div className=" flex flex-col justify-center items-center rounded-3xl bg-[url('/Image/Explore.svg')] w-full h-screen bg-cover">
        <div className="">
          <p className=" text-7xl text-center">
            Let’s Explore <br />
            Heaven Together
          </p>
        </div>
        <div className="relative w-full max-w-xl mx-auto mt-10 ">

        </div>
        <div className="flex gap-10 mt-10 text-lg">
          <p>Popular :</p>
          <div className=' flex gap-10'>
          <p className='underline-offset-1 hover:underline transition-all duration-150'>Jakarta</p>
          <p className='underline-offset-1 hover:underline transition-all duration-150'>Bali</p>
          <p className='underline-offset-1 hover:underline transition-all duration-150'>Kepulauan Seribu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
