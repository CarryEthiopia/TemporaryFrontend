import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiSearch,
  FiSend,
  FiMessageCircle,
  FiHelpCircle,
} from "react-icons/fi";

const AskQuestions = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const [questions] = useState([
    {
      id: 1,
      category: "general",
      question: "What is DamaDash?",
      answer:
        "DamaDash is a platform that connects senders with travelers to ensure safe and reliable delivery of items.",
    },
    {
      id: 2,
      category: "delivery",
      question: "How do I send a package?",
      answer:
        "You can send a package by posting your delivery needs on our platform, and a traveler will accept your request.",
    },
    {
      id: 3,
      category: "payment",
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including bank transfer and mobile money.",
    },
  ]);

  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "general", name: "General" },
    { id: "delivery", name: "Delivery" },
    { id: "payment", name: "Payment" },
  ];

  useEffect(() => {
    const filtered = questions.filter(
      (q) =>
        (activeCategory === "all" || q.category === activeCategory) &&
        (q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredQuestions(filtered);
  }, [searchTerm, activeCategory, questions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !userQuestion) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
      setUserQuestion("");
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div initial={{ y: -20 }} animate={{ y: 0 }} className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <FiArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-800 mt-6 mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Find answers to common questions or ask your own
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Questions List */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 mb-12"
        >
          <AnimatePresence>
            {filteredQuestions.map((q) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  <FiMessageCircle className="inline-block mr-2 text-blue-600" />
                  {q.question}
                </h3>
                <p className="text-gray-600 ml-8">{q.answer}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Ask Question Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center mb-6">
            <FiHelpCircle className="text-blue-600 text-2xl mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">
              Ask Your Question
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            <div>
              <textarea
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                placeholder="Write your question here..."
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transform hover:-translate-y-1"
                }`}
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Submit Question
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Success Message */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              Question submitted successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AskQuestions;
