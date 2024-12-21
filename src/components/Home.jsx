import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { IoAirplaneOutline, IoGlobeOutline, IoWalletOutline, IoTimeOutline } from "react-icons/io5";
import { FiUsers, FiNavigation, FiDollarSign, FiShield } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const slides = [
    {
      title: "Send Items Worldwide Via Trusted Travelers",
      subtitle: "Discover a secure way to send your items globally.",
      features: [
        { icon: <IoAirplaneOutline />, text: "Easy Item Pickup" },
        { icon: <IoTimeOutline />, text: "Flexible Scheduling" },
        { icon: <IoWalletOutline />, text: "Affordable Rates" },
        { icon: <IoGlobeOutline />, text: "Real-Time Tracking" }
      ],
      cta: "Start Sending",
      videoId: "H7kLcUM1ln0"
    },
    {
      title: "Travel and Help People Send Items Worldwide",
      subtitle: "Earn rewards and help others while traveling.",
      features: [
        { icon: <FiDollarSign />, text: "Earn Extra Income" },
        { icon: <FiUsers />, text: "Meet New People" },
        { icon: <FiNavigation />, text: "Flexible Routes" },
        { icon: <FiShield />, text: "Trusted by Millions" }
      ],
      cta: "Become a Traveler",
      videoId: "H7kLcUM1ln0"
    }
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
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-full bg-orange-500 opacity-50 hover:opacity-100 transition-opacity" />
    )
  };

  const FeatureCard = ({ icon, text }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
    >
      <div className="text-2xl text-orange-500 bg-orange-50 p-3 rounded-lg">
        {icon}
      </div>
      <h3 className="font-medium text-gray-800">{text}</h3>
    </motion.div>
  );

  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50 pt-16 px-4 sm:px-6 lg:px-8">
      {/* Trust Badges */}
      <div className="max-w-lg mx-auto mb-12 bg-white rounded-full px-6 py-3 shadow-sm flex items-center justify-center gap-4">
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-2 w-2 bg-orange-500 rounded-full"
        />
        <span className="font-medium text-gray-700">Simple</span>
        <span className="h-2 w-2 bg-orange-500 rounded-full" />
        <span className="font-medium text-gray-700">Secure</span>
        <span className="h-2 w-2 bg-orange-500 rounded-full" />
        <span className="font-medium text-gray-700">Swift</span>
      </div>

      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="outline-none">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-gray-900 leading-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg text-gray-600"
                  >
                    {slide.subtitle}
                  </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {slide.features.map((feature, idx) => (
                    <FeatureCard 
                      key={idx}
                      icon={feature.icon}
                      text={feature.text}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-orange-600 transition-colors"
                >
                  {slide.cta} →
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
              >
                <iframe
                  className="absolute w-full h-full"
                  src={`https://www.youtube.com/embed/${slide.videoId}?autoplay=0&mute=1`}
                  title="Promotional video"
                  allowFullScreen
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;