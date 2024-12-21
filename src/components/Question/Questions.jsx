import React from "react";
import Explanation from "./Explanation";

const Question = () => {
  return (
    <div
      id="faqs"
      className="flex flex-col items-center justify-center py-8 px-4"
    >
      {/* Frequently Asked and Questions */}
      <h1
        className="text-4xl  font-bold"
        style={{
          background: "linear-gradient(45deg, #2B2B2B 30%, #F66F1E 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Frequently Asked Questions
      </h1>

      {/* Subtitle */}
      <p className="text-gray-700 text-center mt-4">
        Find answers to common questions about Carry Ethiopia and features
      </p>

      {/* Horizontal underline */}
      <hr className="border-t-2 border-blue-600 w-1/4 my-4" />

      {/* Explanation section */}
      <Explanation />
    </div>
  );
};

export default Question;
