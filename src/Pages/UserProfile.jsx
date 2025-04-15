import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  {
    name: 'John Doe',
    email: 'exampleemail@mail.com',
    accountType: 'User Account',
    status: 'Member',
    createdAt: 'N/A',
    articles: 18,
    ratings: 18,
    historyRatings: [
      { name: 'Jane Smith', rating: 4.5 },
      { name: 'Michael Lee', rating: 4.5 },
      { name: 'Sarah Connor', rating: 4.5 },
      { name: 'David Kim', rating: 4.5 },
    ],
  },
];
const articleList = [
  { name: 'Judul', title: 'Desc Article', date: '22/07/24' },
  { name: 'Judul', title: 'Desc Article', date: '26/08/25' },
  { name: 'Judul', title: 'Desc Article', date: '26/08/25' },
  { name: 'Judul', title: 'Desc Article', date: '26/08/25' },
];

const ArticleCard = ({ name, title, date }) => {
  return (
    <div className="relative bg-white/80 rounded-lg p-4 shadow-md w-full">
      {/* Date top right */}
      <div className="absolute top-2 right-3 text-sm text-black/70">{date}</div>

      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="gray"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 4.5-1.8 4.5-4.5S14.7 3 12 3S7.5 4.8 7.5 7.5S9.3 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" />
          </svg>
        </div>
        {/* Text */}
        <div className="flex flex-col">
          <span className="font-medium">{name}</span>
          <span className="text-sm text-black/70">{title}</span>
        </div>
      </div>
    </div>
  );
};
const HistoryRatings = ({ historyRatings }) => {
  return (
    <div className="mt-10">
      <p className="text-xl font-semibold mb-4">History Ratings :</p>
      <div className="grid grid-cols-2 gap-6">
        {historyRatings.map((item, index) => (
          <div
            key={index}
            className="bbg-white/80 p-4 rounded-lg shadow-md text-black flex items-center justify-between "
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path d="M12 12c2.7 0 4.5-1.8 4.5-4.5S14.7 3 12 3S7.5 4.8 7.5 7.5S9.3 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" />
                </svg>
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
    </div>
  );
};

const UserCard = ({
  name,
  email,
  accountType,
  status,
  createdAt,
  articles,
  ratings,
}) => {
  return (
    <div className="w-full h-full bg-[#138fc6] text-white p-6 rounded-xl flex flex-col space-y-4">
      {/* Avatar & Info */}
      <div className="flex items-center space-x-6">
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="gray"
          >
            <path d="M12 12c2.7 0 4.5-1.8 4.5-4.5S14.7 3 12 3S7.5 4.8 7.5 7.5S9.3 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <p className="text-3xl font-semibold">{name}</p>
          <p className="text-xl text-white/90">{email}</p>
          <p className="text-xl text-white/90">{accountType}</p>
        </div>
      </div>

      {/* Status Info */}
      <div className="bg-white/20 p-4 rounded-lg text-sm mt-4">
        <div className="flex items-center mb-2">
          <span className="flex items-center text-white/80 w-36">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="..." />
            </svg>
            Status
          </span>
          <span className="mr-2">:</span>
          <span className="font-medium text-white">{status}</span>
        </div>
        <div className="flex items-center">
          <span className="flex items-center text-white/80 w-36">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="..." />
            </svg>
            Created At
          </span>
          <span className="mr-2">:</span>
          <span className="font-medium text-white">{createdAt}</span>
        </div>
      </div>

      {/* About Section */}
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
};

const UserProfile = () => {
  const user = users[0]; // ambil hanya satu user

  return (
    <div className="pt-52 px-52 bg-[#E0E4E9] min-h-screen pb-56">
      <div className="bg-white drop-shadow-sm rounded-2xl pt-10 px-36 pb-10">
        <UserCard
          name={user.name}
          email={user.email}
          accountType={user.accountType}
          status={user.status}
          createdAt={user.createdAt}
          articles={user.articles}
          ratings={user.ratings}
        />
        <HistoryRatings historyRatings={user.historyRatings} />
        <div className="w-full px-6 py-10 mt-20">
          <p className="text-xl font-semibold mb-4">
            Want to share your travel story? Write an article!
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {articleList.map((article, index) => (
              <ArticleCard
                key={index}
                name={article.name}
                title={article.title}
                date={article.date}
              />
            ))}
          </div>
          <Link to="/create-article" className='py-3 px-10 bg-[#26E300] flex justify-center text-white rounded-xl mt-10'>Add New Article +</Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
