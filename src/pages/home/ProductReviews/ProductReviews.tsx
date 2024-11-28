import React, { useState } from "react";

export default function ProductReviews() {
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      rating: 4,
      comment:
        "Great product! Highly recommend it for anyone serious about sports.",
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment:
        "Amazing quality and durability. Best purchase I made this year.",
    },
    {
      name: "Mark Lee",
      rating: 3,
      comment: "Good product, but it could use some improvements in design.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 1,
    comment: "",
  });

  const handleReviewSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: "", rating: 1, comment: "" });
  };

  // Change the return type of calculateAverageRating to a number
  const calculateAverageRating = () => {
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / reviews.length; // Return a number instead of a string
  };

  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            See what others are saying about this product.
          </p>
        </div>

        {/* Average Rating */}
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-indigo-600">
              {calculateAverageRating().toFixed(1)}{" "}
              {/* Convert to string with one decimal place */}
            </div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={
                    index < calculateAverageRating() ? "currentColor" : "none"
                  }
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-8 h-8 ${
                    index < calculateAverageRating()
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 17.618l6.164 3.242-1.176-7.036L21 8.26l-7.19-1.042L12 2 9.19 7.218 2 8.26l3.012 5.564-1.176 7.036L12 17.618z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-gray-500 text-lg mt-2">
              {reviews.length} Reviews
            </p>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-lg font-semibold text-gray-800">
                  {review.name}
                </div>
                <div className="flex ml-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < review.rating ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-6 h-6 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 17.618l6.164 3.242-1.176-7.036L21 8.26l-7.19-1.042L12 2 9.19 7.218 2 8.26l3.012 5.564-1.176 7.036L12 17.618z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Add Review Form */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Add a Review
          </h3>
          <form onSubmit={handleReviewSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < newReview.rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-8 h-8 cursor-pointer ${
                      i < newReview.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() =>
                      setNewReview({ ...newReview, rating: i + 1 })
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.618l6.164 3.242-1.176-7.036L21 8.26l-7.19-1.042L12 2 9.19 7.218 2 8.26l3.012 5.564-1.176 7.036L12 17.618z"
                    />
                  </svg>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Your Review
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={4}
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 focus:outline-none"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
