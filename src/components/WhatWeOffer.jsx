import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiShield, FiDollarSign, FiGlobe } from "react-icons/fi";

const WhatWeOffer = () => {
  const offers = [
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Secure Deliveries",
      description:
        "Verified travelers and encrypted payments ensure your items' safety",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: "Transparent Pricing",
      description: "Clear quotes and weight-based costs with zero hidden fees",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Global Coverage",
      description: "Connect with trusted travelers from around the world",
      color: "from-blue-400 to-blue-600",
    },
  ];

  const stats = [
    { finalValue: 10, label: "Active Users", suffix: "K+" },
    { finalValue: 50, label: "Countries", suffix: "+" },
    { finalValue: 99, label: "Success Rate", suffix: "%" },
    { finalValue: 24, label: "Support (Hours)" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We <span className="text-orange-600">Offer</span>
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience seamless global deliveries with our comprehensive suite
            of services
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative group">
                {/* Card */}
                <div className="relative z-10 h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${offer.color} text-white flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {offer.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/[0.07] to-gray-900/[0.03] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Background Decoration */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${offer.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-lg"
        >
          {stats.map((stat, index) => (
            <CountUpStat
              key={index}
              finalValue={stat.finalValue}
              label={stat.label}
              suffix={stat.suffix || ""}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CountUpStat = ({ finalValue, label, suffix }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let currentValue = 0;
    const increment = Math.ceil(finalValue / 100); // Adjust for smoother counting
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= finalValue) {
        currentValue = finalValue;
        clearInterval(interval);
      }
      setValue(currentValue);
    }, 30); // Speed of counting (adjust as needed)
    return () => clearInterval(interval);
  }, [finalValue]);

  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 #F66F1E  mb-2">
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default WhatWeOffer;
