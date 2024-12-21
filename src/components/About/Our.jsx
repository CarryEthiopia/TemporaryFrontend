import React, { useState, useEffect } from "react";

const Our = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    // Set 1 of 3 cards
    [
      {
        title: "Our Mission",
        icon: (
          <svg
            className="w-12 h-12 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
        content:
          "To revolutionize global logistics by providing innovative, reliable, and sustainable shipping solutions that empower businesses and individuals worldwide.",
      },
      {
        title: "Our Values",
        icon: (
          <svg
            className="w-12 h-12 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
        content: (
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="mr-2">•</span> Unwavering commitment to integrity
              and trust
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Customer-centric innovation
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Sustainable and responsible
              operations
            </li>
          </ul>
        ),
      },
      {
        title: "Our Vision",
        icon: (
          <svg
            className="w-12 h-12 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ),
        content:
          "To be the global benchmark for logistics excellence, connecting communities and driving economic growth through innovative shipping solutions.",
      },
    ],
    // Set 2 of 3 cards
    [
      {
        title: "Our Approach",
        icon: (
          <svg
            className="w-12 h-12 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7l7-7 7 7M4 20h16M12 4v16"
            />
          </svg>
        ),
        content:
          "Our approach is rooted in collaboration, transparency, and delivering value through efficiency and precision.",
      },
      {
        title: "Our Team",
        icon: (
          <svg
            className="w-12 h-12 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 21v-2a4 4 0 10-8 0v2M12 16c-3.313 0-6 1.343-6 3v1h12v-1c0-1.657-2.687-3-6-3z"
            />
          </svg>
        ),
        content:
          "Our team is composed of industry experts who are passionate about innovation and committed to excellence.",
      },
      {
        title: "Our Impact",
        icon: (
          <svg
            className="w-12 h-12 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 11c0-2.5-2-4.5-4.5-4.5S12 8.5 12 11c0 2.5 2 4.5 4.5 4.5S21 13.5 21 11z"
            />
          </svg>
        ),
        content:
          "We are committed to making a measurable positive impact on communities and industries through sustainable logistics.",
      },
    ],
  ];

  // Update the current section every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) =>
        prevSection === sections.length - 1 ? 0 : prevSection + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center p-8">
      <div className="flex flex-wrap justify-center gap-8">
        {sections[currentSection].map((section, index) => (
          <div
            key={index}
            className="w-80 p-8 bg-white rounded-xl shadow-lg transition-transform duration-1000 ease-in-out transform"
          >
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              <div className="w-16 h-1 bg-blue-600 mb-6" />
              <div className="text-gray-600 leading-relaxed text-center">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Our;
