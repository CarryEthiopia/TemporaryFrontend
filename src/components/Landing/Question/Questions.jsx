import React from "react";
import Explanation from "./Explanation";

const Question = () => {
  return (
    <div
      id="faqs"
      className="flex flex-col items-center justify-center py-8 px-4"
    >
      {/* Frequently Asked and Questions */}
      <h1 className="text-4xl font-bold">
  <span style={{ color: "#000" }}>Frequently Asked </span>
  <span style={{ color: "#F66F1E" }}>Questions</span>
</h1>


      {/* Subtitle */}
      <p className="text-gray-700 text-center mt-4">
        Find answers to common questions about Carry Ethiopia and features
      </p>

      {/* Horizontal underline */}
      <hr className="border-t-2 border-orange-600 w-1/4 my-4" />

      {/* Explanation section */}
      <Explanation />
    </div>
  );
};

export default Question;
