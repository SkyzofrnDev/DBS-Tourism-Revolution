import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [authError, setAuthError] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/destinations/${slug}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setDestination(data.destination);
      } catch (error) {
        console.error('Error fetching destination:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [slug]);

  const handleRatingClick = (star) => {
    const token = localStorage.getItem('token');
    if (!token) {
      setAuthError(true);
      return;
    }
    setRating(star);
    setAuthError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      setAuthError(true);
      return alert('Please login to rate this destination');
    }
    
    if (!rating) return alert('Please select a rating first');
    
    setSubmitting(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/ratings', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          destination_id: destination.id,
          score: rating
        })
      });

      if (!response.ok) throw new Error('Failed to submit rating');
      
      // Refresh destination data to show updated rating
      const fetchResponse = await fetch(`http://127.0.0.1:8000/api/destinations/${slug}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await fetchResponse.json();
      setDestination(data.destination);
      setRating(0);
    } catch (error) {
      console.error('Error submitting rating:', error);
      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!destination) return <div>Destination not found</div>;

  return (
    <div>
      <div className="flex px-5 lg:px-20 gap-10 w-full pt-56">
        {/* Left - Sticky Image */}
        <div className="w-1/2 sticky top-24 self-start">
          <img
            src={`http://127.0.0.1:8000/storage/${destination.thumbnail}`}
            alt={destination.name}
            className="rounded-2xl w-full h-auto object-cover"
          />
          <div className="mt-4 bg-white rounded-xl shadow p-4">
            <p className="flex items-center gap-2 font-medium">
              <span>📍</span> {destination.address}
            </p>
            <p className="flex items-center gap-2 text-yellow-500 mt-2 font-semibold">
              ⭐ {destination.rating_avg ? `${parseFloat(destination.rating_avg).toFixed(1)}/5` : 'No ratings'}

            </p>
          </div>
        </div>

        {/* Right - Scrollable Content */}
        <div className="w-1/2 flex flex-col gap-8 text-lg">
          <h1 className="text-3xl font-bold">{destination.name}</h1>
          <p>{destination.description}</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-2xl max-w-3xl mx-36 flex flex-col gap-6 mt-20"
      >
        <div className="flex items-center justify-between">
          <label className="text-lg font-semibold">Rate this destination</label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  filled={star <= rating}
                  onClick={() => handleRatingClick(star)}
                />
              ))}
            </div>
            {authError && (
              <p className="text-red-500 text-sm">
                Please login to rate this destination
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className={`w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-full ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {submitting ? 'SUBMITTING...' : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
};

export default Destinations;