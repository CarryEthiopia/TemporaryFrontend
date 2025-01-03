import { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  IoAirplaneOutline,
  IoGlobeOutline,
  IoWalletOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { FiUsers, FiNavigation, FiDollarSign, FiShield } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import sendAnimation from "../../assets/send.json";
import sendAnimation2 from "../../assets/send.json";
import travelAnimation from "../../assets/plane.json";
import moneyAnimation from "../../assets/money.json";
import PropTypes from "prop-types";


const Hero = () => {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const lottieAnimations = [
    sendAnimation,
    travelAnimation,
    sendAnimation2,
    moneyAnimation,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % lottieAnimations.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Send Items Worldwide Via Trusted Travelers",
      subtitle: "Discover a secure way to send your items globally.",
      features: [
        { icon: <IoAirplaneOutline />, text: "Easy Item Pickup" },
        { icon: <IoTimeOutline />, text: "Flexible Scheduling" },
        { icon: <IoWalletOutline />, text: "Affordable Rates" },
        { icon: <IoGlobeOutline />, text: "Real-Time Tracking" },
      ],
      cta: "Start Sending",
    },
    {
      title: "Travel and Help People Send Items Worldwide",
      subtitle: "Earn rewards and help others while traveling.",
      features: [
        { icon: <FiDollarSign />, text: "Earn Extra Income" },
        { icon: <FiUsers />, text: "Meet New People" },
        { icon: <FiNavigation />, text: "Flexible Routes" },
        { icon: <FiShield />, text: "Trusted by Millions" },
      ],
      cta: "Become a Traveler",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    dotsClass: "slick-dots custom-dots",
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-orange-500 opacity-50 hover:opacity-100 transition-opacity" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const FeatureCard = ({ icon, text }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-2 sm:gap-4"
    >
      <div className="text-xl sm:text-2xl text-orange-500 bg-orange-50 p-2 sm:p-3 rounded-lg">
        {icon}
      </div>
      <h3 className="font-medium text-gray-800 text-sm sm:text-base">{text}</h3>
    </motion.div>
  );

  // Prop validation
  FeatureCard.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };
  return (
    <div
      id="hero"
      className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50 pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Trust Badges */}
      <div className="max-w-lg mx-auto mb-8 sm:mb-12 bg-white rounded-b-3xl px-4 sm:px-6 py-4 sm:py-3 shadow-sm flex items-center justify-center gap-2 sm:gap-4">
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-1.5 sm:h-2 w-1.5 sm:w-2 bg-orange-500 rounded-full"
        />
        <span className="font-medium text-gray-700 text-sm sm:text-base">
          Simple
        </span>
        <span className="h-1.5 sm:h-2 w-1.5 sm:w-2 bg-orange-500 rounded-full" />
        <span className="font-medium text-gray-700 text-sm sm:text-base">
          Secure
        </span>
        <span className="h-1.5 sm:h-2 w-1.5 sm:w-2 bg-orange-500 rounded-full" />
        <span className="font-medium text-gray-700 text-sm sm:text-base">
          Swift
        </span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content side */}
        <div className="w-full order-2 lg:order-1">
          <Slider {...sliderSettings}>
            {slides.map((slide, index) => (
              <div key={index} className="outline-none">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-3 sm:space-y-4">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-base sm:text-lg text-gray-600"
                    >
                      {slide.subtitle}
                    </motion.p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {slide.features.map((feature, idx) => (
                      <FeatureCard
                        key={idx}
                        icon={feature.icon}
                        text={feature.text}
                      />
                    ))}
                  </div>
                  <Link to="signin">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto mt-6 sm:mt-8 bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium shadow-lg hover:bg-orange-600 transition-colors text-sm sm:text-base"
                    >
                      {slide.cta} →
                    </motion.button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Animation side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md lg:max-w-none mx-auto order-last lg:order-2 lg:order-last"
        >
          <div className="relative aspect-square sm:aspect-video rounded-2xl overflow-hidden">
            <Lottie
              animationData={lottieAnimations[currentAnimation]}
              loop={false}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
