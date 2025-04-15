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
          <input
            type="text"
            placeholder="Search Destination"
            className="w-full h-16 pl-6 pr-16 rounded-full text-gray-700 text-lg placeholder-gray-400 focus:outline-none shadow-md"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
          >
            <img src="/Icon/Search.svg" alt="" className='text-white'/>
          </button>
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
