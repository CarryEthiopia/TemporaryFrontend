import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Heart, Compass } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-32">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <motion.div 
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gray-900">About </span>
            <span className="text-orange-500">Us</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-orange-500 mx-auto my-8"
          />
          <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Transforming global logistics through innovation and reliability.
            We're committed to creating seamless shipping experiences that
            connect businesses and people worldwide.
          </p>
        </motion.div>

        {/* Our Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform" />
              <div className="relative p-8 bg-white rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  {section.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* CTA Section */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:support@damadash.com"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-500 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

const sections = [
  {
    title: "Our Mission",
    content: "Revolutionizing global logistics with innovative and sustainable shipping solutions that exceed expectations and protect our environment.",
    icon: <Target className="h-8 w-8 text-orange-500" />,
  },
  {
    title: "Our Values",
    content: "Built on integrity, innovation, and sustainability. We create positive impact through meaningful partnerships and community engagement.",
    icon: <Heart className="h-8 w-8 text-orange-500" />,
  },
  {
    title: "Our Vision",
    content: "Setting the global benchmark for logistics excellence, inspiring industry-wide change for a more connected and responsible future.",
    icon: <Compass className="h-8 w-8 text-orange-500" />,
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Team Members" },
  { value: "50k+", label: "Deliveries" },
  { value: "99%", label: "Success Rate" },
];

export default About;