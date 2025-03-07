import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  FileText,
  Users,
  Eye,
  Key,
  Server,
  Clock,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndPrivacy = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("privacy");
  const [expandedItem, setExpandedItem] = useState(null);

  const privacyContent = [
    {
      id: 1,
      icon: <Shield className="w-6 h-6" />,
      title: "Data Collection",
      content:
        "We collect personal information that you voluntarily provide when using DamaDash, including but not limited to name, email, phone number, and delivery details.",
    },
    {
      id: 2,
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content:
        "Your data is protected using industry-standard encryption and security measures. We regularly update our security protocols to ensure maximum protection.",
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6" />,
      title: "Information Sharing",
      content:
        "We share your information only with verified travelers and partners necessary for completing delivery services. We never sell your personal data to third parties.",
    },
    {
      id: 4,
      icon: <Eye className="w-6 h-6" />,
      title: "Data Transparency",
      content:
        "You have the right to access, modify, or delete your personal information at any time through your account settings.",
    },
  ];

  const termsContent = [
    {
      id: 5,
      icon: <FileText className="w-6 h-6" />,
      title: "User Agreement",
      content:
        "By using DamaDash, you agree to comply with our terms of service, including proper use of the platform and respect for other users.",
    },
    {
      id: 6,
      icon: <Key className="w-6 h-6" />,
      title: "Account Responsibility",
      content:
        "Users are responsible for maintaining their account security and must notify us immediately of any unauthorized access.",
    },
    {
      id: 7,
      icon: <Server className="w-6 h-6" />,
      title: "Service Usage",
      content:
        "Our services must be used in accordance with local laws and regulations. Any misuse may result in account suspension.",
    },
    {
      id: 8,
      icon: <Clock className="w-6 h-6" />,
      title: "Dispute Resolution",
      content:
        "Any disputes will be resolved through our formal resolution process, with both parties agreeing to cooperate in good faith.",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Navigation */}
        <motion.button
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Privacy
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trust is important to us. Learn about how we protect your
            privacy and our terms of service.
          </p>
        </motion.div>

        {/* Section Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {["privacy", "terms"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeSection === section
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid gap-6">
          {(activeSection === "privacy" ? privacyContent : termsContent).map(
            (item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="text-orange-500 mr-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  {expandedItem === item.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedItem === item.id && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )
          )}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-gray-500"
        >
          <p>Last updated: March 2025</p>
          <p className="mt-2">
            For any questions about our terms or privacy policy, please{" "}
            <button
              onClick={() => navigate("/contact")}
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              contact us
            </button>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsAndPrivacy;
