import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Mountain, Indonesia',
    desc: 'Destinasi Hiking Terbaik di Indonesia',
    image: '/ImageData/Bromo.svg',
    categories: ['Mount', 'Destination'],
    linkTo: '/categories/mountain',
  },
  {
    title: 'Beach, Indonesia',
    desc: 'Destinasi Pantai Terbaik Di Indonesia',
    image: '/ImageData/Kuta.svg',
    categories: ['Beach', 'Destination'],
    linkTo: '/categories/beach',
  },
  {
    title: 'Culture, Indonesia',
    desc: 'Destinasi Kebudayaan Terbaik Di Indonesia',
    image: '/ImageData/Borobudur.svg',
    categories: ['Culture', 'Destination'],
    linkTo: '/categories/culture',
  },  {
    title: 'Culture, Indonesia',
    desc: 'Destinasi Kebudayaan Terbaik Di Indonesia',
    image: '/ImageData/Borobudur.svg',
    categories: ['Culture', 'Destination'],
    linkTo: '/categories/culture',
  }
];
const CategoryCard = ({ title, desc, image, categories = [], linkTo }) => {
  return (
    <div className="text-left w-full bg-white rounded-xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-96 object-cover rounded-xl" />
      <div className="p-4">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="text-xl text-gray-600 mt-1">{desc}</p>
        <div className="flex gap-2 flex-wrap mt-3">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="font-semibold bg-gray-200 text-lg px-3 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
        <Link
          to={linkTo}
          className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
        >
        </Link>
      </div>
    </div>
  );
};

const CategoryDestination = () => {
  return (
    <div>
      <div className="text-center mt-48">
        <p className="text-5xl font-light">
          <b>W</b>hat's <b>Y</b>our <b>N</b>ext <b>A</b>dventure?
        </p>
        <p className="text-3xl mt-5 ">Pick a category and start exploring</p>
        <div className="p-4 ">
          <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((item, idx) => (
              <CategoryCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDestination;
