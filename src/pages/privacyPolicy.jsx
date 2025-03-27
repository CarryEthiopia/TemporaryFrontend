
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-50 py-12 px-6 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">Last Updated: [Date]</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">1. Information We Collect</h2>
        <p className="text-gray-700">We collect personal and non-personal information to improve our services.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">2. How We Use Your Information</h2>
        <p className="text-gray-700">Your information is used to provide better experiences and improve our platform.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">3. Data Security</h2>
        <p className="text-gray-700">We implement industry-standard security measures to protect your data.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">4. Third-Party Services</h2>
        <p className="text-gray-700">We may use third-party services to enhance functionality, but we ensure your data remains secure.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">5. Your Rights</h2>
        <p className="text-gray-700">You have the right to access, update, or delete your personal information.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">6. Changes to This Policy</h2>
        <p className="text-gray-700">We may update this policy, and any changes will be reflected here.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">7. Contact Us</h2>
        <p className="text-gray-700">If you have any questions, reach out to us at <span className="text-orange-600 font-semibold">support@habeantech.com</span>.</p>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
