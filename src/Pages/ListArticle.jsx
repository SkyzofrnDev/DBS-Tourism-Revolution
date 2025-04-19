import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SkeletonBox = ({ className }) => (
  <div className={`bg-gray-200 rounded animate-pulse ${className}`} />
);

const SkeletonArticleCard = () => (
  <Link to="#" className="flex justify-between items-start px-16 py-10 border-t-2 border-black/50">
    <div className="flex gap-4">
      <SkeletonBox className="w-40 h-40 mr-10 rounded-lg" />
      <div>
        <SkeletonBox className="h-8 w-3/4 mb-2" />
        <SkeletonBox className="h-6 w-1/2 mb-2" />
        <SkeletonBox className="h-4 w-1/3" />
      </div>
    </div>

    <SkeletonBox className="h-6 w-1/4" />
  </Link>
);

const ListArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/articles');
        setArticles(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return (
    <div className="">
      <p className="px-16 text-5xl pt-52 leading-relaxed">
        Discover the community Article
      </p>
      <div className="mt-44">
        <div className="w-full">
          {[1, 2, 3, 4].map((_, index) => (
            <SkeletonArticleCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="">
      <p className="px-16 text-5xl pt-52 leading-relaxed">
        Discover the community Article
      </p>
      <div className="mt-44">
        <div className="w-full">
          {articles.map((article, index) => (
            <Link
              to={`/article/${article.slug}`}
              key={article.id}
              className={`flex justify-between items-start px-16 py-10 
                border-t-2 border-black/50 hover:bg-gray-50 transition
                ${index === articles.length - 1 ? 'border-b-2' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {/* Left content */}
              <div className="flex gap-4">
                <img
                  src={`http://127.0.0.1:8000/storage/${article.thumbnail}`}
                  alt={article.title}
                  className="w-40 mr-10 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold text-3xl">{article.title}</p>
                  <p className="text-lg mt-5">
                    {new Date(article.created_at).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {JSON.parse(article.tags).map((tag, i) => (
                      <div
                        key={i}
                        className="px-2 py-1 text-sm border rounded text-black/60 border-black/30"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right content */}
              <p className="text-lg text-left max-w-md">
                {article.description.split(' ').slice(0, 15).join(' ') + (article.description.split(' ').length > 15 ? '...' : '')}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListArticle;
