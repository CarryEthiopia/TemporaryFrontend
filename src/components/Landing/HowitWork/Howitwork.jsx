import { motion } from "framer-motion";
import { Package, Users, Map } from "lucide-react";
import { useEffect, useState } from "react";
import triangleIcon from "../../../assets/icongoogle.png";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Submit Your Delivery Request",
      description: "Tell us what you need to deliver and where it needs to go. It's quick and easy!",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Match With a Traveler",
      description: "We'll connect you with a verified traveler heading in the right direction. Safe and secure!",
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Track & Receive Items",
      description: "Follow your delivery in real-time and receive it with peace of mind. Simple as that!",
    }
  ];

  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const nodeCount = 15;
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60 + 20,
      size: Math.random() * 8 + 4,
    }));

    const newConnections = [];
    newNodes.forEach((node, i) => {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = (i + j + 1) % nodeCount;
        newConnections.push({
          id: `${i}-${targetIndex}`,
          start: node,
          end: newNodes[targetIndex],
        });
      }
    });

    setNodes(newNodes);
    setConnections(connections);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="how-it-works"
      className="relative bg-gradient-to-b from-orange-50 to-white py-24 px-6 min-h-screen overflow-hidden"
    >
      {/* Background Network Animation */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(251, 146, 60, 0.2)" />
              <stop offset="100%" stopColor="rgba(251, 146, 60, 0.05)" />
            </linearGradient>
          </defs>
          {connections.map((connection) => (
            <motion.line
              key={connection.id}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 0.3,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              x1={`${connection.start.x}%`}
              y1={`${connection.start.y}%`}
              x2={`${connection.end.x}%`}
              y2={`${connection.end.y}%`}
              stroke="url(#gradient)"
              strokeWidth="1"
            />
          ))}
          {nodes.map((node) => (
            <motion.circle
              key={node.id}
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="rgba(251, 146, 60, 0.2)"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            How It <span className="text-orange-600">Works</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-orange-600 mx-auto mt-6"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {index < 2 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-orange-200">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-orange-400 origin-left"
                  />
                </div>
              )}

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 relative z-10"
              >
                <div className="bg-orange-600 text-white p-4 rounded-2xl inline-flex items-center justify-center mb-6">
                  {step.icon}
                </div>

                <span className="absolute top-6 right-6 text-2xl font-bold text-orange-100">
                  0{index + 1}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* App Store Buttons */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center mt-16 gap-6"
        >
          <motion.a
            variants={itemVariants}
            href="#"
            className="bg-black text-white rounded-xl px-8 py-3 flex items-center gap-3 hover:bg-gray-900 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Get it on Google Play"
          >
            <img src={triangleIcon} alt="Google Play" loading="lazy" width="3000" height="3000" style={{height: 30, width:30}} />
            <div className="flex flex-col">
              <span className="text-xs">GET IT ON</span>
              <span className="text-xl font-semibold">Google Play</span>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="#"
            className="bg-black text-white rounded-xl px-8 py-3 flex items-center gap-3 hover:bg-gray-900 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-xs">Download on the</span>
              <span className="text-xl font-semibold">App Store</span>
            </div>
          </motion.a>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/4 w-12 h-12 bg-orange-500/10 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-1/4 w-8 h-8 bg-orange-500/10 rounded-full"
        />
      </div>
    </section>
  );
};

export default HowItWorks;