import React from "react";
import teamMember1 from "../assets/teamMember1.jpg"; // Replace with actual image
import teamMember2 from "../assets/teamMember2.jpg"; // Replace with actual image
import teamMember3 from "../assets/teamMember3.jpg"; // Replace with actual image

const Team = () => {
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
        <div className="flex justify-center gap-8">
          {/* Team Member 1 */}
          <div className="relative group">
            <img
              src={teamMember1}
              alt="Team Member 1"
              className="w-80 h-80 object-cover rounded-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-4 text-center rounded-full">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-sm">CEO & Founder</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="relative group">
            <img
              src={teamMember2}
              alt="Team Member 2"
              className="w-80 h-80 object-cover rounded-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-4 text-center rounded-full">
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-sm">Marketing Director</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="relative group">
            <img
              src={teamMember3}
              alt="Team Member 3"
              className="w-80 h-80 object-cover rounded-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-4 text-center rounded-full">
              <h3 className="text-xl font-semibold">Samuel Green</h3>
              <p className="text-sm">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
