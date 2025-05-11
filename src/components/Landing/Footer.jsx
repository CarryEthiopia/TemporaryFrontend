import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      const mailtoLink = `mailto:support@damadash.com?subject=Newsletter Subscription&body=I would like to subscribe to the newsletter with my email: ${email}`;
      window.location.href = mailtoLink;
      setEmail("");
    }
  };

  const quickLinks = [
    { text: "Home", href: "#home" },
    { text: "About Us", href: "#about" },
    { text: "How it Works", href: "#how-it-works" },
    { text: "FAQS", href: "#faqs" },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, text: "Addis Ababa, Ethiopia" },
    { icon: <Mail className="w-5 h-5" />, text: "support@damadash.com" },
    { icon: <Phone className="w-5 h-5" />, text: "+2517 779 42138" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/damadash_p2p" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/damadash/about/?viewAsMember=true" },
    { icon: <Send className="w-5 h-5" />, href: "https://t.me/DamaDashP2P" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Dama<span className="text-orange-500">Dash</span>
            </h2>
            <p className="text-sm leading-relaxed opacity-75">
              Connecting travelers and businesses in Ethiopia for seamless
              delivery experiences. We are committed to providing efficient,
              safe, and reliable services across the country.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-orange-500 transition-colors duration-200 block py-1"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-orange-500">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4 opacity-75">
              Subscribe to our newsletter for updates and offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-75">
              © 2024 DamaDash. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
