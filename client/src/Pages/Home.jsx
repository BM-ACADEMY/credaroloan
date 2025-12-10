import React, { useState } from "react";
import { motion } from "framer-motion";
import Banners from "../assets/img/banner1.jpg"; // Ensure this path is correct
import Enquiryform from "../Pages/Enquiryform";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      id="home"
      // Added bg-black to the base container
      className="relative w-full min-h-screen flex flex-col justify-start lg:justify-center items-center overflow-hidden pt-48 pb-12 lg:pt-20 bg-black"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Banners})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* UPDATED: Changed from slate-900 to pure black for a darker background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center mt-4"
      >
        {/* Top Tagline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 sm:mb-8"
        >
          India’s First <br className="hidden md:block" />
          <span className="text-[#8dc4f8]">
            Business Financial Upgrade Program
          </span>
        </motion.h1>

        {/* Visual Process Steps (Evaluate -> Improve -> Approve) */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-8 sm:mb-10"
        >
          {["Evaluate", "Improve", "Approve"].map((step, index) => (
            <React.Fragment key={step}>
              <motion.div
                variants={stepVariants}
                className="flex items-center justify-center w-28 h-10 sm:w-32 sm:h-12 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md shadow-lg"
              >
                <span className="text-white font-bold tracking-wide text-sm sm:text-base">
                  {step}
                </span>
              </motion.div>
              {index < 2 && (
                <motion.div
                  variants={stepVariants}
                  className="hidden md:block text-gray-400 text-lg sm:text-xl"
                >
                  <FaArrowRight />
                </motion.div>
              )}
              {/* Mobile Arrow (Down) */}
              {index < 2 && (
                <motion.div
                  variants={stepVariants}
                  className="md:hidden text-gray-400 text-sm rotate-90"
                >
                  <FaArrowRight />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-xl md:max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light px-2"
        >
          We prepare your company like a{" "}
          <strong className="text-white font-semibold">CA</strong>, submit like
          a <strong className="text-white font-semibold">DSA</strong>, and
          negotiate like a
          <strong className="text-white font-semibold"> CFO</strong>.
        </motion.p>

        {/* Single Primary Action Button (Commented out as per previous code) */}
        {/* <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="group relative px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-full shadow-xl overflow-hidden"
        >
          <span className="relative z-10 text-white font-bold text-base sm:text-lg tracking-wide group-hover:tracking-wider transition-all duration-300">
            Start Your Upgrade Now
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out blur-md"></div>
        </motion.button> */}
      </motion.div>

      {/* Modal */}
      {isModalOpen && <Enquiryform onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Home;