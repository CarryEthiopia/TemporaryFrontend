import { motion } from "framer-motion";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-6 lg:px-16">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Use</h1>
        <p className="text-gray-700 mb-4">Last Updated: [Date]</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">1. Acceptance of Terms</h2>
        <p className="text-gray-700">By using our services, you agree to be bound by these terms.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">2. User Responsibilities</h2>
        <p className="text-gray-700">Users must comply with all applicable laws and use our services responsibly.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">3. Prohibited Activities</h2>
        <p className="text-gray-700">Any fraudulent, abusive, or illegal activities are strictly prohibited.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">4. Limitation of Liability</h2>
        <p className="text-gray-700">We are not liable for any indirect or consequential damages arising from service use.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">5. Termination</h2>
        <p className="text-gray-700">We reserve the right to suspend or terminate accounts that violate our policies.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">6. Changes to Terms</h2>
        <p className="text-gray-700">We may update these terms, and continued use of our services implies acceptance.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">7. Contact Us</h2>
        <p className="text-gray-700">For inquiries, reach out to <span className="text-indigo-600 font-semibold">support@habeantech.com</span>.</p>
      </motion.div>
    </div>
  );
};

export default TermsOfUse;
