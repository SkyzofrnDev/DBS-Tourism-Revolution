import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, desc, image, categories = [], linkTo }) => {
  return (
    <Link
      to={linkTo}
      className="text-left w-full bg-white rounded-xl overflow-hidden block"
    >
      <img
        src={`http://127.0.0.1:8000/storage/${image}`}
        alt={title}
        className="w-full h-96 object-cover rounded-xl"
      />
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

const SkeletonCard = () => (
  <div className="text-left w-full bg-white rounded-xl overflow-hidden block">
    <div className="w-full h-96 bg-gray-200 rounded-xl animate-pulse"></div>
    <div className="p-4">
      <div className="h-8 w-3/4 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 w-full bg-gray-200 rounded mb-3"></div>
      <div className="flex gap-2 flex-wrap mt-3">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className="font-semibold bg-gray-200 text-lg px-5 py-1 rounded-full"
          ></span>
        ))}
      </div>
    </div>
  </div>
);

const CategoryDestinations = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/categories', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return (
    <div className='text-center mt-36'>
      <div className="h-12 w-1/2 mx-auto bg-gray-200 rounded mb-5 animate-pulse"></div>
      <div className="h-8 w-1/3 mx-auto bg-gray-200 rounded mb-16 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-16">
        {[1, 2, 3].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );

  return (
    <div className='text-center mt-36'>
      <p className="text-5xl font-light">
        <b>W</b>hat's <b>Y</b>our <b>N</b>ext <b>A</b>dventure?
      </p>
      <p className="text-3xl mt-5">Pick a category and start exploring</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-16">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            desc={category.description}
            image={category.thumbnail}
            categories={category.tags}
            linkTo={`/categories/${category.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryDestinations;
