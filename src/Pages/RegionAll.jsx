import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegionAll = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/api/destinations'
        );
        setArticles(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading)
    return (
      <div className="p-6 w-full">
        <div className="h-12 w-1/2 bg-gray-200 rounded mb-5 animate-pulse"></div>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex justify-between items-start px-16 py-10 border-t-2 border-black/50"
          >
            <div className="flex gap-4">
              <div className="w-40 h-40 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-64">
                <div className="h-8 w-full bg-gray-200 rounded mb-4 animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <p className="px-16 text-5xl pt-52 leading-relaxed">
        Discover Destinations by Region
      </p>
      <div className="mt-44">
        <div className="w-full">
          {articles.map((article, index) => (
            <Link
              to={`/articles/${article.slug}`}
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
                      year: 'numeric',
                    })}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {(article.tags ? JSON.parse(article.tags) : []).map(
                      (tag, i) => (
                        <div
                          key={i}
                          className="px-2 py-1 text-sm border rounded text-black/60 border-black/30"
                        >
                          {tag}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Right content */}
              <p className="text-lg text-left max-w-md">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionAll;
