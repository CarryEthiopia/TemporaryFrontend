// src/components/About/Our.jsx

import React, { useState, useEffect } from "react";

const Our = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    {
      title: "Our Mission",
      content:
        "Our mission is to provide a fast, secure, and affordable way to send items worldwide. We believe in making connections and helping people around the globe.",
    },
    {
      title: "Our Values",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Integrity and trust in every transaction.</li>
          <li>Customer-centric solutions tailored to your needs.</li>
          <li>Innovation and continuous improvement.</li>
        </ul>
      ),
    },
    {
      title: "Our Vision",
      content:
        "Our vision is to become a global leader in delivering fast, secure, and innovative solutions to our customers. We aim to foster sustainable connections across the world.",
    },
  ];

  // Handle carousel change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`transition-all duration-1000 transform p-6 bg-white rounded-lg shadow-xl space-y-4
            ${
              index === currentSection
                ? `opacity-100 translate-x-0 animate-slideInFrom${
                    ["Top", "Right", "Bottom", "Left"][index % 4]
                  }`
                : `opacity-0 translate-x-full`
            }
          `}
          style={{
            animationDuration: "1s",
            animationFillMode: "forwards",
          }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            {section.title}
          </h3>
          <p className="text-gray-600">{section.content}</p>
        </div>
      ))}

      <style jsx>{`
        @keyframes slideInFromTop {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromBottom {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Our;
