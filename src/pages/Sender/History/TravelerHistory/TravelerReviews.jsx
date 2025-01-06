// src/components/History/TravelerHistory/TravelerReviews.jsx
const TravelerReviews = () => {
  const reviews = [
    {
      id: 1,
      sender: "Mike Wilson",
      rating: 5,
      date: "Jan 5, 2024",
      comment:
        "Very professional and punctual. Delivered my package safely and on time.",
      avatar: null,
    },
    // Add more reviews
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Recent Reviews</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {reviews.map((review) => (
          <div key={review.id} className="p-4">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0">
                {/* Avatar placeholder */}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{review.sender}</h4>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <div className="text-yellow-500 my-1">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-gray-600 text-sm">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelerReviews;
