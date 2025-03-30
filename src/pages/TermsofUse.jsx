import { motion } from "framer-motion";
import { FileText, ShieldAlert, UserX, Scale, Power, RefreshCw, Mail, AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const TermsOfUse = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-orange-600" />,
      title: "1. Acceptance of Terms",
      content: `By accessing or using DamaDash's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our services.

Key points of acceptance include:
• Agreement to all terms and conditions
• Acknowledgment of privacy policy
• Consent to data collection practices
• Agreement to receive service updates`
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
      title: "2. User Responsibilities",
      content: `As a user of DamaDash, you are responsible for:
• Maintaining accurate and up-to-date account information
• Protecting your account credentials
• Ensuring all submitted information is truthful
• Following local laws and regulations
• Respecting other users' privacy and rights
• Reporting any suspicious activities
• Maintaining appropriate security measures
• Using the service as intended`
    },
    {
      icon: <UserX className="w-6 h-6 text-orange-600" />,
      title: "3. Prohibited Activities",
      content: `The following activities are strictly prohibited:
• Creating false or misleading information
• Harassment or abuse of other users
• Unauthorized access attempts
• Interference with service operations
• Commercial use without authorization
• Identity theft or impersonation
• Spam or unsolicited communications`
    },
    {
      icon: <Scale className="w-6 h-6 text-orange-600" />,
      title: "4. Limitation of Liability",
      content: `DamaDash's liability is limited in the following ways:
• We are not responsible for user-generated content
• Service interruptions may occur without notice
• Third-party services are not our responsibility
• We don't guarantee specific results
• Technical issues may affect service availability
• Market conditions may impact service quality
• We are not responsible for any lost items`
    },
    {
      icon: <Power className="w-6 h-6 text-orange-600" />,
      title: "5. Account Termination",
      content: `DamaDash reserves the right to terminate accounts for:
• Violation of these terms
• Fraudulent activities
• Extended periods of inactivity
• User request for account deletion
• Legal requirements or court orders
• Multiple account violations
• Payment disputes or chargebacks
• Suspicious or harmful behavior`
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-orange-600" />,
      title: "6. Modifications to Terms",
      content: `We may modify these terms:
• With prior notice when possible
• To reflect service changes
• For legal compliance
• To improve user experience
• To address security concerns
• Changes become effective immediately
• Continued use implies acceptance
• Major changes will be notified directly`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4 lg:px-16">
      <Helmet>
        <title>Terms of Use | DamaDash</title>
        <meta
          name="description"
          content="Read our terms of use to understand the conditions of using DamaDash's services."
        />
        <link rel="canonical" href="https://www.damadash.com/terms-of-use" />
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
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Terms of Use</h1>
            <p className="text-gray-600">Last Updated: March 28, 2025</p>
          </motion.div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-b border-orange-100 last:border-0 pb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
                </div>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 bg-orange-50 rounded-xl border border-orange-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
            </div>
            <p className="text-gray-700">
              For any questions about these terms or our services, please contact us:
              <br /><br />
              General Support: <span className="text-orange-600 font-semibold">support@damadash.com</span><br />
              Business Hours: Monday to Friday, 9:00 AM - 6:00 PM EST
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500"
          >
            <AlertCircle className="w-4 h-4" />
            <p>These terms are binding and constitute a legal agreement between you and DamaDash</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsOfUse;