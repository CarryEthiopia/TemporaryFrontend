import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send, Globe, Clock, Wallet, Users, Navigation, DollarSign, Shield
} from 'lucide-react';
import image1 from '../../assets/screenshot.jpg';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Send Items Worldwide Via Trusted Travelers",
      subtitle: "Connect with verified travelers for secure, affordable item delivery across the globe.",
      features: [
        { icon: <Send className="w-5 h-5" />, text: "Easy Item Pickup" },
        { icon: <Clock className="w-5 h-5" />, text: "Flexible Scheduling" },
        { icon: <Wallet className="w-5 h-5" />, text: "Affordable Rates" },
        { icon: <Globe className="w-5 h-5" />, text: "Real-Time Tracking" },
      ],
      cta: "Start Sending",
      bgColor: "from-orange-50 to-rose-50"
    },
    {
      title: "Travel & Earn While Helping Others",
      subtitle: "Turn your travel journey into opportunities. Earn rewards by helping people send items.",
      features: [
        { icon: <DollarSign className="w-5 h-5" />, text: "Earn Extra Income" },
        { icon: <Users className="w-5 h-5" />, text: "Meet New People" },
        { icon: <Navigation className="w-5 h-5" />, text: "Flexible Routes" },
        { icon: <Shield className="w-5 h-5" />, text: "Trusted Platform" },
      ],
      cta: "Become a Traveler",
      bgColor: "from-blue-50 to-indigo-50"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const FeatureCard = ({ icon, text }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 border border-white/20"
    >
      <div className="text-orange-500 bg-orange-50 p-3 rounded-lg">
        {icon}
      </div>
      <p className="font-medium text-gray-700">{text}</p>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden" id="home">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[activeSlide].bgColor}`}
        />
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-lg mx-auto mb-12 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg flex items-center justify-center gap-6"
        >
           <div className="w-1.5 h-1.5 bg-orange-500 rounded-full -mr-3" />
          {["Secure", "Swift", "Simple"].map((badge, index) => (
            <div key={badge} className="flex items-center gap-2">
              {index > 0 && <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />}
              <span className="font-semibold text-gray-800">{badge}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {slides[activeSlide].title}
                </h1>
                <p className="text-xl text-gray-600">
                  {slides[activeSlide].subtitle}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {slides[activeSlide].features.map((feature, idx) => (
                  <FeatureCard key={idx} {...feature} />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.baslaelw.damadash", "_blank")}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {slides[activeSlide].cta} →
              </motion.button>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center items-center"
          >
            {/* Custom Mobile Mockup */}
            <div className="relative w-[260px] h-[520px] md:w-[320px] md:h-[640px] bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-200 flex items-center justify-center overflow-hidden">
              {/* Speaker/Camera Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-2 bg-gray-300 rounded-full opacity-70 z-10" />
              {/* App Screenshot */}
              <img
                src={image1}
                alt="App Screenshot"
                loading="lazy"
                className="w-[90%] h-[94%] object-cover rounded-[2rem] shadow-inner border border-gray-100"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === activeSlide ? 'w-8 bg-orange-500' : 'bg-orange-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;