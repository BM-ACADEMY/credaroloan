import React from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const blobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // 1. Defined the links array for cleaner mapping
  const footerLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Who We Are", path: "#whoweare" },
    { name: "Why SMEs", path: "#whysmes" },
  ];

  return (
    <footer className="relative w-full bg-[#192d51] overflow-hidden pt-20 pb-10 text-white" id="contact">
      
      {/* --- Animated Vector Backgrounds --- */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-[#bdd6ee] rounded-full mix-blend-overlay filter blur-[100px] pointer-events-none"
      />
      
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-[-100px] left-[-100px] w-80 h-80 bg-[#bdd6ee] rounded-full mix-blend-overlay filter blur-[80px] pointer-events-none"
      />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(189,214,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(189,214,238,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Content Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[#bdd6ee]/20 pb-12 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Column 1: Brand Info */}
          <motion.div variants={itemVariants} className="flex flex-col items-start">
            <img src={Logo} alt="Loan Guru Logo" className="w-32 bg-white object-contain mb-6" />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              We simplify loan applications with expert, bank-ready documentation
              for PMEGP, MUDRA, MSME, and Business Loans. Trusted for
              transparency and results.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.facebook.com/share/1a6WLYmDTD/">
                <FaFacebookF size={18} />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/loanguru2025/#">
                <FaInstagram size={18} />
              </SocialLink>
            </div>
          </motion.div>

          {/* Column 2: Quick Links (UPDATED) */}
          <motion.div variants={itemVariants}>
            <AnimatedHeading text="Quick Links" />
            <ul className="space-y-3 text-sm text-gray-300">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.path}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Working Hours */}
          <motion.div variants={itemVariants}>
            <AnimatedHeading text="Working Hours" />
            <div className="text-sm text-gray-300 space-y-3">
              <div className="flex justify-between max-w-[220px] border-b border-gray-700 pb-2">
                <span>Mon - Sat:</span>
                <span className="text-white font-medium">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between max-w-[220px] pt-1">
                <span>Sunday:</span>
                <span className="text-red-400 font-medium">Closed</span>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={itemVariants}>
            <AnimatedHeading text="Get in Touch" />
            <div className="space-y-4 text-sm text-gray-300">
              <ContactItem icon={<FaPhoneAlt />} text="+91 9791663671" />
              <ContactItem icon={<FaEnvelope />} text="info@loanguru4u.com" />
              <ContactItem 
                icon={<FaMapMarkerAlt />} 
                text="LOKESH TOWER Old Door No.110/2, then Door No.18, Now New Door No.37, Kodambakkam High Road, Nungambakkam, Chennai – 600 034, Tamilnadu, India" 
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center items-center text-xs md:text-sm text-gray-400"
        >
          <p className="text-center">
            © {currentYear}{" "}
            <a 
              href="https://bmtechx.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#bdd6ee] hover:text-white transition-colors font-medium"
            >
              BMTechx.in
            </a>
            . All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

// --- Helper Components ---

const AnimatedHeading = ({ text }) => (
  <div className="mb-6">
    <h3 className="text-[#bdd6ee] font-bold text-lg uppercase tracking-wider">
      {text}
    </h3>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "40px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="h-1 bg-[#bdd6ee] mt-2 rounded-full"
    />
  </div>
);

const SocialLink = ({ href, children }) => (
  <motion.a
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#bdd6ee]/10 text-[#bdd6ee] hover:bg-[#bdd6ee] hover:text-[#192d51] transition-colors duration-300"
  >
    {children}
  </motion.a>
);

const FooterLink = ({ href, children }) => (
  <a href={href} className="hover:text-[#bdd6ee] hover:pl-2 transition-all duration-300 inline-block">
    {children}
  </a>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-start gap-3 group">
    <div className="text-[#bdd6ee] mt-1 shrink-0 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <p className="leading-relaxed group-hover:text-white transition-colors">{text}</p>
  </div>
);