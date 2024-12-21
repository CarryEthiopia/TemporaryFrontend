import React from "react";
import Our from "./Our";
import { Link } from "react-router-dom"; // Import Link for navigation

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gray-900">About </span>
            <span className="text-blue-600">Us</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto my-6"></div>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Transforming global logistics through innovation and reliability.
            We're committed to creating seamless shipping experiences that
            connect businesses and people worldwide.
          </p>
        </div>

        {/* Our Component */}
        <div className="mb-60 mt-60">
          <Our />
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex rounded-md shadow">
            <Link to="/get-in-touch">
              <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Get in Touch
                <svg
                  className="ml-3 -mr-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
