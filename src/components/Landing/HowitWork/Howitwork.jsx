import { motion } from "framer-motion";
import { Package, Users, Map } from "lucide-react";
import { useEffect, useState } from "react";

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
    // Generate random nodes
    const nodeCount = 15;
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60 + 20, // Start from 20% to avoid overlapping with cards
      size: Math.random() * 8 + 4,
    }));

    // Generate connections between nodes
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
    setConnections(newConnections);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-orange-50 to-white py-24 px-6 min-h-screen overflow-hidden">
      {/* Blockchain Network Background */}
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
                ease: "linear"
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
                delay: Math.random() * 2
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