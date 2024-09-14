import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    text: 'Amazing product! Highly recommend it.',
    img: 'https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=175&h=183&c=7&r=0&o=5&pid=1.7', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    text: 'Very good quality, but a bit expensive.',
    img: 'https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=175&h=183&c=7&r=0&o=5&pid=1.7', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Alice Johnson',
    rating: 3,
    text: 'Average product, not what I expected.',
    img: 'https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=175&h=183&c=7&r=0&o=5&pid=1.7', // Replace with actual image URL
  },
  // Add more reviews as needed
];

const ReviewSection = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-4 shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex items-center">
                {[...Array(5)].map((star, index) => (
                  <svg
                    key={index}
                    fill={index < review.rating ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-yellow-500 mr-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
