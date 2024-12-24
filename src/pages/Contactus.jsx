import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section
      id="get-in-touch"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gray-900">Get </span>
            <span className="text-blue-600">in Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto my-6"></div>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We’re here to assist you. Contact us through any of the following
            methods or send us a message using the form below.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Back to About Button */}
        <div className="mt-16 text-center">
          <Link to="/">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-all duration-300">
              Back to About
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
