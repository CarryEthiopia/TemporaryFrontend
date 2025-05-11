import { motion } from "framer-motion";
import { Package, Users, Map } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import triangleIcon from "../../../assets/icongoogle.png";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Submit Your Delivery Request",
      description: "Add what you need to deliver in the app and where it needs to go. It's quick and easy!",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Match With a Traveler",
      description: "We'll match you with a verified traveler heading in the right direction. Safe and secure!",
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Receive Items",
      description: "Follow your delivery in by direct contact and receive it with peace of mind. Simple as that!",
    }
  ];

  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const nodeCount = 25;
    // Create nodes with fixed positions (no movement)
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60 + 20,
      size: Math.random() * 3 + 2,
    }));

    setNodes(newNodes);

    // Function to generate connections
    const generateConnections = () => {
      const newConnections = [];
      const maxDistance = 30; // Maximum distance for nodes to connect
      
      newNodes.forEach((node, i) => {
        newNodes.forEach((targetNode, j) => {
          if (i !== j) {
            const dx = node.x - targetNode.x;
            const dy = node.y - targetNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
              // Only create some connections, not all possible ones
              if (Math.random() > 0.7) {
                newConnections.push({
                  id: `${i}-${j}`,
                  start: node,
                  end: targetNode,
                  delay: Math.random() * 5
                });
              }
            }
          }
        });
      });
      
      return newConnections;
    };

    // Generate initial connections
    setConnections(generateConnections());

    // Recreate connections periodically to simulate the blockchain-like animation
    const interval = setInterval(() => {
      setConnections(generateConnections());
    }, 8000);

    return () => {
      clearInterval(interval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
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
              <stop offset="0%" stopColor="rgba(251, 146, 60, 0.5)" />
              <stop offset="100%" stopColor="rgba(251, 146, 60, 0.2)" />
            </linearGradient>
          </defs>
          
          {/* Static nodes */}
          {nodes.map((node) => (
            <circle
              key={node.id}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="rgba(251, 146, 60, 0.3)"
            />
          ))}
          
          {/* Animated connections */}
          {connections.map((connection) => (
            <motion.line
              key={connection.id}
              x1={`${connection.start.x}%`}
              y1={`${connection.start.y}%`}
              x2={`${connection.end.x}%`}
              y2={`${connection.end.y}%`}
              stroke="url(#gradient)"
              strokeWidth="1.5"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ 
                opacity: [0, 0.7, 0],
                pathLength: [0, 1, 1],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.4, 1],
                delay: connection.delay,
              }}
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
            How It <span className="text-orange-500">Works</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-orange-500 mx-auto mt-6"
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
                <div className="bg-orange-500 text-white p-4 rounded-2xl inline-flex items-center justify-center mb-6">
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
            href="https://play.google.com/store/apps/details?id=com.baslaelw.damadash"
            className="bg-black text-white rounded-xl px-8 py-3 flex items-center gap-3 hover:bg-gray-900 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Get it on Google Play"
          >
            <img src={triangleIcon} alt="Google Play" loading="lazy" width="30" height="30" style={{height: 30, width:30}} />
            <div className="flex flex-col">
              <span className="text-xs">GET IT ON</span>
              <span className="text-xl font-semibold">Google Play</span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;