// src/components/History/shared/Testimonials.jsx
import { Star } from "@mui/icons-material";

const Testimonials = ({ userType }) => {
  // Sample testimonial data - in a real app, this would come from your API
  const testimonials = {
    sender: [
      {
        id: 1,
        author: "Alice Johnson",
        avatar: null,
        rating: 5,
        date: "Jan 15, 2024",
        comment:
          "Great sender! Very clear with package details and prompt with payments.",
        location: "New York, USA",
        packageType: "Electronics",
      },
      {
        id: 2,
        author: "Mark Williams",
        avatar: null,
        rating: 4,
        date: "Jan 10, 2024",
        comment: "Professional communication and well-packaged items.",
        location: "London, UK",
        packageType: "Clothing",
      },
    ],
    traveler: [
      {
        id: 1,
        author: "John Smith",
        avatar: null,
        rating: 5,
        date: "Jan 12, 2024",
        comment:
          "Excellent traveler! Delivered on time and kept me updated throughout.",
        route: "London → Paris",
        deliveryDate: "Jan 10, 2024",
      },
      {
        id: 2,
        author: "Sarah Davis",
        avatar: null,
        rating: 5,
        date: "Jan 8, 2024",
        comment:
          "Very responsible and professional. Would definitely use again!",
        route: "New York → London",
        deliveryDate: "Jan 5, 2024",
      },
    ],
  };

  const selectedTestimonials = testimonials[userType] || [];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">
          {userType === "sender"
            ? "Traveler Testimonials"
            : "Sender Testimonials"}
        </h3>
      </div>

      <div className="divide-y divide-gray-200">
        {selectedTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0">
                {/* Avatar placeholder */}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`w-4 h-4 ${
                            index < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {testimonial.date}
                  </span>
                </div>

                <p className="mt-2 text-gray-600">{testimonial.comment}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {userType === "sender" ? (
                    <>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                        📍 {testimonial.location}
                      </span>
                      <span className="px-2 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                        📦 {testimonial.packageType}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="px-2 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                        ✈️ {testimonial.route}
                      </span>
                      <span className="px-2 py-1 bg-orange-50 text-orange-700 text-sm rounded-full">
                        📅 {testimonial.deliveryDate}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedTestimonials.length === 0 && (
        <div className="p-6 text-center text-gray-500">
          No testimonials available yet.
        </div>
      )}
    </div>
  );
};

export default Testimonials;
