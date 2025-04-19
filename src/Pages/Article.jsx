import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SkeletonBox = ({ className }) => (
  <div className={`bg-gray-300/50 rounded animate-pulse ${className}`} />
);

const SkeletonArticlePage = () => (
  <div className="pt-48 flex flex-col justify-center items-center gap-10 px-4 md:px-64">
    <SkeletonBox className="w-3/4 h-10 mb-4" />
    <SkeletonBox className="w-1/2 h-8 mb-10" />
    <SkeletonBox className="w-full h-[400px] rounded-2xl mb-10" />
    <div className="flex justify-between w-full text-lg mb-10">
      <SkeletonBox className="w-32 h-6" />
      <SkeletonBox className="w-24 h-6" />
    </div>
    <div className="flex gap-5 w-full mb-10">
      {[1, 2, 3].map((_, i) => (
        <SkeletonBox key={i} className="w-24 h-8" />
      ))}
    </div>
    <SkeletonBox className="w-full h-40 mb-10" />
    <SkeletonBox className="w-2/3 h-10 mt-36 mb-10" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
      {[1, 2, 3].map((_, i) => (
        <SkeletonArticleCard key={i} />
      ))}
    </div>
  </div>
);

const SkeletonArticleCard = () => (
  <div className="w-full animate-pulse">
    <SkeletonBox className="w-full h-96 rounded-md mb-4" />
    <SkeletonBox className="w-3/4 h-6 mb-2" />
    <SkeletonBox className="w-full h-4 mb-2" />
    <div className="flex gap-2">
      {[1, 2, 3].map((_, i) => (
        <SkeletonBox key={i} className="w-16 h-6" />
      ))}
    </div>
  </div>
);

const Article = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articleResponse = await axios.get(
          `http://127.0.0.1:8000/api/articles/${slug}`,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        );
        setArticle(articleResponse.data);

        const relatedResponse = await axios.get(
          'http://127.0.0.1:8000/api/articles',
          {
            params: {
              limit: 3,
              exclude: articleResponse.data.id,
            },
          }
        );
        setRelatedArticles(relatedResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on article change
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <SkeletonArticlePage />;
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>Article not found</div>;

  const tags = JSON.parse(article.tags);

  return (
    <div className="pt-48 flex flex-col justify-center items-center gap-10">
      <div className="px-4 md:px-64">
        <h1 className="text-5xl font-semibold text-center">{article.title}</h1>
        <p className="text-2xl font-light italic mt-10 text-center">
          {article.description}
        </p>

        <img
          src={`http://127.0.0.1:8000/storage/${article.thumbnail}`}
          alt={article.title}
          className="w-full h-auto rounded-2xl mt-36 aspect-[4/2] object-cover"
        />

        <div className="flex text-black/50 text-lg w-full justify-between mt-10">
          <a
            href={article.location}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View Location
          </a>
          <p>
            {new Date(article.created_at).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>

        <div className="flex gap-5 mt-10">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="text-[#00000081] border-2 border-black/20 px-4 py-2 rounded-lg"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="prose max-w-none mt-36">
          <p className="text-xl">{article.content}</p>
        </div>
      </div>

      <p className="text-5xl font-light mt-64">See More Articles</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full px-36">
        {relatedArticles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            tags={JSON.parse(article.tags)}
            slug={article.slug}
            thumbnail={article.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

const ArticleCard = ({ title, description, tags, slug, thumbnail }) => {
  return (
    <Link
      to={`/articles/${slug}`}
      className="w-full block group"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div className="w-full">
        <div className="relative w-full h-96 rounded-md mb-4 overflow-hidden group-hover:brightness-90 transition">
          <img
            src={`http://127.0.0.1:8000/storage/${thumbnail}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-lg text-gray-600 mb-2 line-clamp-2">{description}</p>
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

export default Article;
