import { motion } from "framer-motion";
import { FiPackage, FiUsers, FiMap } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative min-h-screen py-24 px-6 lg:px-16"
    >
      {/* Subtle Background Overlay (Optional - Can be removed if not desired) */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            How it <span className="text-orange-500">Works</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="w-24 h-0.5 bg-orange-500 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* Steps Section */}
        <StepsTimeline />
      </div>
    </motion.section>
  );
};

const StepsTimeline = () => {
  const steps = [
    {
      icon: <FiPackage className="w-6 h-6" />,
      title: "Submit Your Delivery Request",
      description:
        "Tell us what you need to deliver and where it needs to go. It's quick and easy!",
      color: "bg-orange-500",
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Match With a Traveler",
      description:
        "We'll connect you with a verified traveler heading in the right direction. Safe and secure!",
      color: "bg-blue-500",
    },
    {
      icon: <FiMap className="w-6 h-6" />,
      title: "Track & Receive Items",
      description:
        "Follow your delivery in real-time and receive it with peace of mind. Simple as that!",
      color: "bg-green-500",
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

  StepCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative flex flex-col items-center"
    >
      {/* Connecting Line */}
      {index < 2 && (
        <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-100">
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
        className="relative w-full bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        {/* Icon Background - Adjusted for cleaner look */}
        <div className={`${color} text-white p-3 rounded-full inline-block mb-6`}>
          {icon}
        </div>

        {/* Step Number */}
        <span className="absolute top-4 right-4 text-xl font-semibold text-gray-200">
          0{index + 1}
        </span>

        {/* Step Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>

        {/* Step Description */}
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default HowItWorks;