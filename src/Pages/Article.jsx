import React from 'react';
import { Link } from 'react-router-dom';

const datTag = [{ tag: 'Adventure' }, { tag: 'Beach' }, { tag: 'Other' }];

const articles = [
  {
    title: 'Other Article',
    description: 'Destinasi Kebudayaan Terbaik Di Indonesia',
    tags: datTag.map((tag) => tag.tag),
    slug: 'article-1',
  },
  {
    title: 'Other Article',
    description: 'Destinasi Kebudayaan Terbaik Di Indonesia',
    tags: datTag.map((tag) => tag.tag),
    slug: 'article-2',
  },
  {
    title: 'Other Article',
    description: 'Destinasi Kebudayaan Terbaik Di Indonesia',
    tags: datTag.map((tag) => tag.tag),
    slug: 'article-3',
  },
];

const Tag = ({ tag }) => {
  return (
    <div className="text-[#00000081] border-2 border-black/20 px-4 py-2 rounded-lg">
      {tag}
    </div>
  );
};

const ArticleCard = ({ title, description, tags, slug }) => {
  return (
    <Link to={`/article/${slug}`} className="w-full block group">
      <div className="w-full">
        <div className="bg-gray-300 w-full h-96 rounded-md mb-4 group-hover:brightness-90 transition" />
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-lg text-gray-600 mb-2">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="px-2 py-1 text-sm border rounded text-black/60 border-black/30"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

const Article = () => {
  return (
    <div className="pt-48 flex flex-col justify-center items-center gap-10">
      <div className="flex gap-5">
        {datTag.map((item, index) => (
          <Tag key={index} tag={item.tag} />
        ))}
      </div>
      <div className="px-4 md:px-64">
        <p className="text-5xl font-semibold text-center">
          Title Title Title Title Title Title Title Title Title Title Title
          Title Title Title
        </p>
        <p className="text-2xl font-light italic mt-10 text-center">
          Description Description Description Description Description
          Description Description Description Description Description
        </p>
        <img
          src="/ImageData/Bromo.svg"
          alt=""
          className="w-full h-auto rounded-2xl mt-36 aspect-[4/2] object-cover"
        />
        <div className="flex text-black/50 text-lg w-full justify-between mt-10">
          <p>Location</p>
          <p>Dirga Hardeka Agustiantara, 28 Maret 2025</p>
        </div>
        <p className="text-xl mt-36">
          {/* Lorem content tetap */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>
      <p className="text-5xl font-light mt-64">See More Articles</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full px-36">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            tags={article.tags}
            slug={article.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Article;
