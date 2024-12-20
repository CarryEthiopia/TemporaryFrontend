import React from "react";
import teamMember1 from "../assets/teamMember1.jpg"; // Replace with actual image
import teamMember2 from "../assets/teamMember2.jpg"; // Replace with actual image
import teamMember3 from "../assets/teamMember3.jpg"; // Replace with actual image
import { useState, useEffect } from "react";

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const teamMembers = [
    {
      img: teamMember1,
      name: "John Doe",
      role: "CEO & Founder",
    },
    {
      img: teamMember2,
      name: "Jane Smith",
      role: "Marketing Director",
    },
    {
      img: teamMember3,
      name: "Samuel Green",
      role: "Lead Developer",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <div className="py-12 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Meet Our Team
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          The talented people behind Carry Ethiopia
        </p>

        {/* Team Members Section */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-2 lg:gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group w-[280px] h-[550px] mx-auto rounded-lg overflow-hidden"
            >
              <img
                src={member.img}
                alt={`Team Member ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-4 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for Small Screens */}
        <div className="sm:hidden relative w-full h-[550px] mx-auto rounded-lg overflow-hidden">
          <img
            src={teamMembers[currentSlide].img}
            alt={`Team Member ${currentSlide + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-4 text-center">
            <h3 className="text-xl font-semibold">
              {teamMembers[currentSlide].name}
            </h3>
            <p className="text-sm">{teamMembers[currentSlide].role}</p>
          </div>
          {/* Backward Button */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black/60 to-transparent rounded-r-lg flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="bg-white text-gray-800 rounded-full p-2 shadow-md focus:outline-none"
            >
              &lt;
            </button>
          </div>
          {/* Forward Button */}
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black/60 to-transparent rounded-l-lg flex items-center justify-center">
            <button
              onClick={handleNext}
              className="bg-white text-gray-800 rounded-full p-2 shadow-md focus:outline-none"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
