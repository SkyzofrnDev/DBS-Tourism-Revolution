import React, { useState } from 'react';
const Star = ({ filled, onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    className="cursor-pointer transition hover:scale-110 text-yellow-500"
    fill="currentColor"
  >
    {filled ? (
      <path d="m12 16.102l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064z" />
    ) : (
      <path d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15-.723l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064zm0-3.852" />
    )}
  </svg>
);
const Destinations = () => {
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Rating submitted: ${rating} star(s)`);
  };
  return (
    <div>
      <div className="flex px-5 lg:px-20 gap-10 w-full pt-56">
        {/* Left - Sticky Image */}
        <div></div>
        <div className="w-1/2 sticky top-24 self-start">
          <img
            src="/ImageData/Bromo.svg" // ganti path ke gambar yang kamu pakai
            alt="Island"
            className="rounded-2xl w-full h-auto object-cover"
          />
          <div className="mt-4 bg-white rounded-xl shadow p-4">
            <p className="flex items-center gap-2 font-medium">
              <span>📍</span> Kepulauan Seribu, Riau, Sumatra Timur
            </p>
            <p className="flex items-center gap-2 text-yellow-500 mt-2 font-semibold">
              ⭐ 4.5/5
            </p>
          </div>
        </div>

        {/* Right - Scrollable Content */}
        <div className="w-1/2 flex flex-col gap-8 text-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-2xl max-w-3xl  mx-36 flex flex-col gap-6 mt-20"
      >
        <div className="flex items-center justify-between">
          <label className="text-lg font-semibold">Rate this destination</label>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                filled={star <= rating}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-full"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Destinations;
