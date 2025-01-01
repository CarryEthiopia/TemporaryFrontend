import React, { useState } from "react";
import { Message, ExpandMore, ExpandLess } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";


const Explanation = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const navigate = useNavigate();

  // Simulated user authentication check
  const isUserSignedIn = () => {
    // Replace this with real authentication logic in the future
    const userSignedIn = false; // Simulate user not signed in
    return userSignedIn;
  };

  const handleContactSupport = () => {
    if (isUserSignedIn()) {
      console.log("User is signed in, navigating to Contact Support page.");
      navigate("/ask-questions");
    } else {
      console.log("User not signed in, redirecting to Sign In page.");
      navigate("/signin");
    }
  };
const handleToggle = (id) => {
  setOpenQuestion((prev) => (prev === id ? null : id));
};
  const sections = [
    {
      title: "General",
      questions: [
        {
          id: 1,
          question: "What is Carry Ethiopia?",
          answer:
            "Carry Ethiopia is a platform that connects senders with travelers to ensure safe and reliable delivery of items.",
        },
        {
          id: 2,
          question: "How can I send a Package?",
          answer:
            "You can send a package by posting your delivery needs on our platform, and a traveler will accept your request.",
        },
        {
          id: 3,
          question: "What happens if my package gets lost?",
          answer:
            "Carry Ethiopia has protocols in place to address lost packages, ensuring compensation or resolution.",
        },
      ],
    },
    {
      title: "For Travelers",
      questions: [
        {
          id: 4,
          question: "How do I earn while traveling?",
          answer:
            "Travelers earn by delivering packages for senders based on agreed-upon rates.",
        },
        {
          id: 5,
          question: "How do I become a verified traveler?",
          answer:
            "You can become a verified traveler by completing our verification process, which includes ID checks.",
        },
      ],
    },
    {
      title: "Safety & Security",
      questions: [
        {
          id: 6,
          question: "Is my package safe with the traveler?",
          answer:
            "Yes, we verify all travelers to ensure the safety and security of your packages.",
        },
        {
          id: 7,
          question: "What destinations can I send packages to?",
          answer:
            "You can send packages to any destination supported by our travelers' routes.",
        },
      ],
    },
    {
      title: "Pricing & Payments",
      questions: [
        {
          id: 8,
          question: "How much does it cost to send a package?",
          answer:
            "The cost of sending a package varies based on its size, weight, and destination.",
        },
        {
          id: 9,
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods, including credit cards and mobile payments.",
        },
        {
          id: 10,
          question: "Are there size or weight restrictions for packages?",
          answer:
            "Yes, size and weight restrictions depend on the traveler's capacity and route.",
        },
      ],
    },
  ];

  return (
    <div
      id="faqs"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-4 max-w-5xl mx-auto"
    >
      {sections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center mb-4">
            <Message className="text-orange-600" />
            <h3 className="ml-2 text-lg font-bold text-gray-800">
              {section.title}
            </h3>
          </div>

          {section.questions.map((q) => (
            <div key={q.id} className="mb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleToggle(q.id)}
              >
                <p
                  className={`text-gray-800 font-semibold hover:text-orange-600 transition-colors duration-200 ${
                    openQuestion === q.id ? "text-orange-600" : ""
                  }`}
                >
                  {q.question}
                </p>
                {openQuestion === q.id ? (
                  <ExpandLess className="text-orange-600" />
                ) : (
                  <ExpandMore className="text-gray-800" />
                )}
              </div>
              {openQuestion === q.id && (
                <div className="mt-2 text-gray-600">
                  <p>{q.answer}</p>
                </div>
              )}
              <hr className="mt-4 border-t border-gray-300" />
            </div>
          ))}
        </div>
      ))}

      {/* CTA Section */}
      <div className="col-span-1 flex flex-col items-center mt-12">
        <p className="text-lg text-gray-800 mb-4">
          Still have questions? We're here to help.
        </p>
        <button
          onClick={handleContactSupport}
          className="flex items-center justify-center mx-auto px-6 py-3 text-white bg-[#08094b] rounded-full shadow-md hover:bg-[#060741] transition-all duration-300"
        >
          <Message className="mr-3" />
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Explanation;
