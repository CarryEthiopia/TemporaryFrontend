import React from "react";
import { motion } from "framer-motion";
import { FiPackage, FiUsers, FiMap } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const HowItWorks = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white py-24 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            How it <span className="text-orange-600">Works</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to start using our platform and get your
            deliveries managed in no time!
          </p>
        </motion.div>

        {/* Steps Section */}
        <StepsTimeline />
      </div>
    </motion.div>
  );
};

const StepsTimeline = () => {
  const steps = [
    {
      icon: <FiPackage className="w-8 h-8" />,
      title: "Submit Your Delivery Request",
      description:
        "Provide details about your delivery needs and submit your request to get started.",
      color: "bg-orange-500",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Match With a Traveler",
      description:
        "We will connect you with a traveler who will carry your items securely to the destination.",
      color: "bg-orange-600",
    },
    {
      icon: <FiMap className="w-8 h-8" />,
      title: "Track & Receive Items",
      description:
        "Track your items in real-time and receive them at your location with complete peace of mind.",
      color: "bg-orange-700",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      {steps.map((step, index) => (
        <StepCard key={index} {...step} index={index} />
      ))}
    </div>
  );
};

const StepCard = ({ icon, title, description, color, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative flex flex-col items-center"
    >
      {/* Connecting Line */}
      {index < 2 && (
        <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-full ${color} origin-left`}
          />
        </div>
      )}

      {/* Card Content */}
      <motion.div
        whileHover={{ y: -5 }}
        className="relative w-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className={`${color} text-white p-4 rounded-full inline-block mb-6`}>
          {icon}
        </div>
        <span className="absolute top-6 right-6 text-3xl font-bold text-gray-200">
          {index + 1}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default HowItWorks;