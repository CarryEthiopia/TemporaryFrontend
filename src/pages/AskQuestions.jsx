import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack, Search, Send } from "@mui/icons-material";

const AskQuestions = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [questions, setQuestions] = useState([
    // Example data
    {
      question: "What is Carry Ethiopia?",
      answer:
        "Carry Ethiopia is a platform that connects senders with travelers to ensure safe and reliable delivery of items.",
    },
    {
      question: "How do I send a package?",
      answer:
        "You can send a package by posting your delivery needs on our platform, and a traveler will accept your request.",
    },
  ]);

  const [email, setEmail] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = questions.filter((q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSubmit = () => {
    if (email && userQuestion) {
      // Here you'd typically send the data to the backend
      alert(
        "Your question has been submitted. You’ll receive a response via email."
      );
      setEmail("");
      setUserQuestion("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Back Button */}
        <div
          className="flex items-center cursor-pointer text-gray-700 hover:text-blue-600 mb-6"
          onClick={() => navigate("/")}
        >
          <ArrowBack className="mr-2" />
          <span>Back to Landing Page</span>
        </div>

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Ask a Question
        </h1>

        {/* Search Bar */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Search for answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
            onClick={handleSearch}
          >
            <Search />
          </button>
        </div>

        {/* Search Results */}
        <div className="mb-6">
          {searchResults.length > 0
            ? searchResults.map((result, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold text-gray-800">
                    {result.question}
                  </p>
                  <p className="text-gray-600">{result.answer}</p>
                  <hr className="mt-4 border-gray-300" />
                </div>
              ))
            : searchTerm && <p className="text-gray-600">No results found.</p>}
        </div>

        {/* Question Submission Form */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Submit a New Question
          </h2>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Write your question here..."
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="4"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
          />
          <button
            className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all"
            onClick={handleSubmit}
          >
            <Send className="mr-2" />
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskQuestions;
