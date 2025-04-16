import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Skeleton Components
const SkeletonBox = ({ className }) => (
  <div className={`bg-gray-300/50 rounded animate-pulse ${className}`} />
);

const SkeletonUserCard = () => (
  <div className="w-full h-full bg-[#138fc6] text-white p-6 rounded-xl flex flex-col space-y-4">
    <div className="flex items-center space-x-6">
      <SkeletonBox className="w-24 h-24 rounded-lg" />
      <div className="flex flex-col space-y-2">
        <SkeletonBox className="w-48 h-6" />
        <SkeletonBox className="w-64 h-4" />
        <SkeletonBox className="w-32 h-4" />
      </div>
    </div>
    <SkeletonBox className="w-full h-20 mt-4" />
    <SkeletonBox className="w-full h-20" />
  </div>
);

const SkeletonHistoryRating = () => (
  <div className="mt-10">
    <SkeletonBox className="w-40 h-6 mb-4" />
    <div className="grid grid-cols-2 gap-6">
      {[1, 2].map((_, i) => (
        <div key={i} className="bg-white/80 p-4 rounded-lg shadow-md flex justify-between animate-pulse">
          <div className="flex items-center space-x-3">
            <SkeletonBox className="w-8 h-8 rounded-full" />
            <SkeletonBox className="w-24 h-4" />
          </div>
          <SkeletonBox className="w-12 h-4" />
        </div>
      ))}
    </div>
  </div>
);

const SkeletonArticleCard = () => (
  <div className="bg-white/80 rounded-lg shadow-md w-[500px] animate-pulse">
    <div className="flex h-full">
      <SkeletonBox className="w-1/3 min-h-[200px] rounded-l-lg" />
      <div className="flex-grow p-6 flex flex-col justify-between">
        <SkeletonBox className="w-40 h-6 mb-2" />
        <SkeletonBox className="w-full h-16 mb-2" />
        <SkeletonBox className="w-24 h-4 self-end" />
      </div>
    </div>
  </div>
);

// Real Components
const ArticleCard = ({ name, title, date, thumbnail }) => (
  <div className="bg-white/80 rounded-lg shadow-md w-[500px]">
    <div className="flex items-stretch h-full">
      <div className="w-1/3 min-h-[200px]">
        <img
          src={"http://127.0.0.1:8000/storage/" + thumbnail}
          alt={thumbnail}
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      <div className="flex-grow p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">{title}</p>
        </div>
        <div className="text-sm text-gray-500 text-right">{date}</div>
      </div>
    </div>
  </div>
);

const HistoryRatings = ({ historyRatings }) => (
  <div className="mt-10">
    <p className="text-xl font-semibold mb-4">History Ratings :</p>
    {historyRatings.length > 0 ? (
      <div className="grid grid-cols-2 gap-6">
        {historyRatings.map((item, index) => (
          <div
            key={index}
            className="bg-white/80 p-4 rounded-lg shadow-md text-black flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src={"http://127.0.0.1:8000/storage/" + item.thumbnail} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">{item.name}</p>
            </div>
            <div className="flex items-center space-x-1 text-yellow-400 font-semibold">
              <span>★</span>
              <span>{item.rating}/5</span>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-500 italic">No Ratings</p>
    )}
  </div>
);

const UserCard = ({ name, email, accountType, status, createdAt, articles, ratings }) => (
  <div className="w-full h-full bg-[#138fc6] text-white p-6 rounded-xl flex flex-col space-y-4">
    <div className="flex items-center space-x-6">
      <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="gray">
          <path d="M12 12c2.7 0 4.5-1.8 4.5-4.5S14.7 3 12 3S7.5 4.8 7.5 7.5S9.3 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" />
        </svg>
      </div>
      <div className="flex flex-col">
        <p className="text-3xl font-semibold">{name}</p>
        <p className="text-xl text-white/90">{email}</p>
        <p className="text-xl text-white/90 capitalize">{accountType.toLowerCase()}</p>
      </div>
    </div>
    <div className="bg-white/20 p-4 rounded-lg text-sm mt-4">
      <div className="flex items-center mb-2">
        <span className="flex items-center text-white/80 w-36">Status</span>
        <span className="mr-2">:</span>
        <span className="font-medium text-white">{status}</span>
      </div>
      <div className="flex items-center">
        <span className="flex items-center text-white/80 w-36">Created At</span>
        <span className="mr-2">:</span>
        <span className="font-medium text-white">{createdAt}</span>
      </div>
    </div>
    <div className="bg-white/20 p-4 rounded-lg text-sm mt-4">
      <p className="text-white/90 font-semibold mb-3">About :</p>
      <div className="flex items-center mb-2">
        <span className="w-36 text-white/80">Article</span>
        <span className="mr-2">:</span>
        <span className="font-medium text-white">{articles} Article</span>
      </div>
      <div className="flex items-center">
        <span className="w-36 text-white/80">Ratings</span>
        <span className="mr-2">:</span>
        <span className="font-medium text-white">{ratings} Ratings</span>
      </div>
    </div>
  </div>
);

// Main Component
const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/profile', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUser(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="pt-52 px-52 bg-[#E0E4E9] min-h-screen pb-56">
        <div className="bg-white drop-shadow-sm rounded-2xl pt-10 px-36 pb-10 space-y-10">
          <SkeletonUserCard />
          <SkeletonHistoryRating />
          <div className="w-full px-6 py-10 mt-20">
            <SkeletonBox className="w-80 h-6 mb-4" />
            <div className="mt-10 flex justify-evenly flex-wrap gap-4 w-full">
              {[1, 2].map((_, i) => (
                <SkeletonArticleCard key={i} />
              ))}
            </div>
            <SkeletonBox className="w-52 h-10 mt-10 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data</div>;

  return (
    <div className="pt-52 px-52 bg-[#E0E4E9] min-h-screen pb-56">
      <div className="bg-white drop-shadow-sm rounded-2xl pt-10 px-36 pb-10">
        <UserCard
          name={user.name}
          email={user.email}
          accountType={user.role}
          status="Member"
          createdAt={new Date(user.created_at).toLocaleDateString()}
          articles={user.articles.length}
          ratings={user.ratings.length}
        />
        <HistoryRatings
          historyRatings={user.ratings.map((rating) => ({
            name: rating.destination.name,
            rating: rating.score,
            thumbnail: rating.destination.thumbnail
          }))}
        />
        <div className="w-full px-6 py-10 mt-20">
          <p className="text-xl font-semibold mb-4">
            Want to share your travel story? Write an article!
          </p>
          {user.articles.length > 0 ? (
            <div className="mt-10 flex justify-evenly flex-wrap gap-4 w-full">
              {user.articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  name={article.title}
                  title={article.description}
                  thumbnail={article.thumbnail}
                  date={new Date(article.created_at).toLocaleDateString()}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic mt-10">No Article Uploaded</p>
          )}
          <Link
            to="/addarticle"
            className="py-3 px-10 bg-[#26E300] flex justify-center text-white rounded-xl mt-10"
          >
            Add New Article +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
