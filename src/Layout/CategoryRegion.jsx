import React from 'react';

const category = [{ name: 'Tourism' }, { name: 'Best' }, { name: 'Travel' }];

const Category = ({ name }) => {
  return (
    <div className="mt-20">
      <div className="bg-[#cfcdcd8f] border-2  rounded-full border-[#0000002f] w-fit px-10 py-4 ">
        <p className="text-lg">{name}</p>
      </div>
    </div>
  );
};

const CategoryRegion = () => {
  return (
    <div>
      <div className="flex gap-5">
        {category.map((item, index) => (
          <Category key={index} name={item.name} />
        ))}
      </div>
      <div className="flex items-start mt-10 w-full justify-between">
        <p className="text-4xl font-light">
          <b>Your</b> next <b>favorite</b> place <br /> awaits
        </p>
        <p className='text-2xl font-light'>The most talked about <br /> places among travelers</p>
        <div></div>
      </div>
    </div>
  );
};

export default CategoryRegion;
