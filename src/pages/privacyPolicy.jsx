import { Hls } from "@mui/icons-material";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  Server,
  Bell,
  Settings,
  Trash,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = [
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Information We Collect",
      content: `We collect and process the following personal information:
      • Full Name: For identification and personalization
      • Profile Picture: To enhance user experience and verification
      • Phone Number: For account security and communication
      • Location Data: To provide location-based services
      • Government ID: For identity verification purposes
      
      All collected data is encrypted using industry-standard AES-256 encryption protocols and stored securely on our protected servers.`,
    },
    {
      icon: <Lock className="w-6 h-6 text-orange-500" />,
      title: "Data Security",
      content: `Your security is our top priority. We implement multiple layers of protection:
      • End-to-end encryption for all personal data
      • Regular security audits and penetration testing
      • Multi-factor authentication protocols
      • Secure data centers with 24/7 monitoring
      • Regular backup systems with encrypted storage
      • Compliance with international data protection standards`,
    },
    {
      icon: <Eye className="w-6 h-6 text-orange-500" />,
      title: "How We Use Your Information",
      content: `We use your information responsibly and transparently:
      • Identity verification and fraud prevention
      • Service personalization and improvement
      • Communication about service updates
      • Customer support enhancement
      • Analytics to improve user experience
      • Legal compliance and verification processes`,
    },
    {
      icon: <UserCheck className="w-6 h-6 text-orange-500" />,
      title: "Your Rights & Control",
      content: `You have complete control over your personal data:
      • Access your personal information anytime
      • Request data modification or updates
      • Download your data in a portable format
      • Delete your account and associated data
      • Opt-out of non-essential data collection
      • Request data processing limitations`,
    },
    {
      icon: <Server className="w-6 h-6 text-orange-500" />,
      title: "Data Storage & Retention",
      content: `We maintain strict data retention policies:
      • Data is stored only for the necessary duration
      • Regular data cleanup and optimization
      • Automated data purging systems
      • Option for immediate data deletion
      • Secure data disposal protocols
      • Regular storage audit processes`,
    },
    {
      icon: <Bell className="w-6 h-6 text-orange-500" />,
      title: "Updates & Notifications",
      content: `We keep you informed about your data:
      • Regular privacy policy updates
      • Notification of significant changes
      • Security incident alerts if applicable
      • New feature announcements
      • Privacy setting recommendations`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4 lg:px-16">
      <Helmet>
        <title>Privacy Policy | DamaDash</title>
        <meta
          name="description"
          content="Privacy rights are for everyone. At DamaDash, account deletion, or information about our policies can be accessed anytime."
        />
        <link rel="canonical" href="https://www.damadash.com/privacy-policy" />
      </Helmet>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-orange-100"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">Last Updated: March 28, 2025</p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-b border-orange-100 last:border-0 pb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-700 whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 bg-orange-50 rounded-xl border border-orange-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Contact & Support
              </h2>
            </div>
            <p className="text-gray-700">
              For any questions about our privacy policy or to exercise your
              data rights, please contact us:
              <br />
              <br />
              Support:{" "}
              <span className="text-orange-500 font-semibold">
                support@damadash.com
              </span>
              <br />
              Hours: Monday to Friday, 9:00 AM - 6:00 PM EST
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500"
          >
            <Trash className="w-4 h-4" />
            <p>
              You can request account deletion at any time through your account
              settings
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
