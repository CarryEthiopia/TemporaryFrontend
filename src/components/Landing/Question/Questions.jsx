import { useState } from "react";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const sections = [
    {
      title: "General",
      icon: "💡",
      questions: [
        {
          id: 1,
          question: "What is DamaDash?",
          answer:
            "DamaDash is a platform that connects senders with travelers to ensure safe and reliable delivery of items.",
        },
        {
          id: 2,
          question: "How can I send a Package?",
          answer:
            "You can send a package by posting your delivery needs on our platform, and a traveler will accept your request.",
        },
        {
          id: 3,
          question: "What happens if my package gets lost?",
          answer:
            "DamaDash has protocols in place to address lost packages, ensuring compensation or resolution.",
        },
      ],
    },
    {
      title: "For Travelers",
      icon: "✈️",
      questions: [
        {
          id: 4,
          question: "How do I earn while traveling?",
          answer:
            "Travelers earn by delivering packages for senders based on agreed-upon rates.",
        },
        {
          id: 5,
          question: "How do I become a verified traveler?",
          answer:
            "You can become a verified traveler by completing our verification process, which includes ID checks.",
        },
      ],
    },
    {
      title: "Safety & Security",
      icon: "🛡️",
      questions: [
        {
          id: 6,
          question: "Is my package safe with the traveler?",
          answer:
            "Yes, we verify all travelers to ensure the safety and security of your packages.",
        },
        {
          id: 7,
          question: "What destinations can I send packages to?",
          answer:
            "You can send packages to any destination supported by our travelers' routes.",
        },
      ],
    },
    {
      title: "Pricing & Payments",
      icon: "💰",
      questions: [
        {
          id: 8,
          question: "How much does it cost to send a package?",
          answer:
            "The cost of sending a package varies based on its size, weight, and destination.",
        },
        {
          id: 9,
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods, including credit cards and mobile payments.",
        },
        {
          id: 10,
          question: "Are there size or weight restrictions for packages?",
          answer:
            "Yes, size and weight restrictions depend on the traveler's capacity and route.",
        },
      ],
    },
  ];

  return (
    <section
      id="faqs"
      className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Frequently Asked <span className="text-orange-600">Questions</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about DamaDash and its features
        </p>
        <div className="w-24 h-1 bg-orange-600 mx-auto mt-6" />
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {sections.map((section, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={section.title}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{section.icon}</span>
              <h3 className="text-xl font-bold text-gray-900">
                {section.title}
              </h3>
            </div>

            <div className="space-y-4">
              {section.questions.map((q) => (
                <div
                  key={q.id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <button
                    onClick={() =>
                      setOpenQuestion(openQuestion === q.id ? null : q.id)
                    }
                    className="w-full flex items-center justify-between py-4 text-left hover:text-orange-600 transition-colors"
                  >
                    <span className="font-medium pr-8">{q.question}</span>
                    {openQuestion === q.id ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openQuestion === q.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 text-gray-600">{q.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 mb-6">
          Still have questions? We're here to help!
        </p>
        <a
          href="mailto:support@damadash.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Contact Support
        </a>
      </motion.div>
    </section>
  );
};

export default FAQ;
