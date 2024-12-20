import React from "react";
import Explanation from "./Explanation";

const Question = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      {/* Frequently Asked and Questions */}
      <h1 className="text-2xl font-bold text-orange-500">Frequently Asked</h1>
      <h2 className="text-xl font-semibold text-blue-600">Questions</h2>

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
