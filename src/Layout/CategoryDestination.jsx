import React from 'react';
import { Link } from 'react-router-dom';
import categoriesData from '../Data/Categories.json';

const CategoryCard = ({ title, desc, image, categories = [], linkTo }) => {
  return (
    <Link to={linkTo} className="text-left w-full bg-white rounded-xl overflow-hidden block ">
      <img src={image} alt={title} className="w-full h-96 object-cover rounded-xl" />
      <div className="p-4">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="text-xl text-gray-600 mt-1">{desc}</p>
        <div className="flex gap-2 flex-wrap mt-3">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="font-semibold bg-gray-200 text-lg px-5 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const CategoryDestinations = () => {
  const categories = categoriesData.map(category => ({
    title: category.name,
    desc: category.description,
    image: category.thumbnail,
    categories: category.categories,
    linkTo: `/categories/${category.slug}`
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-16">
      {categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </div>
  );
};

export default CategoryDestinations;
