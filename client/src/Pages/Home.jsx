import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
// 1. Import the Enquiry Form
import EnquiryForm from "./EnquiryForm"; 

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  // 2. Add state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 3 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Background images
  const slideImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Strategic planning meeting"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Corporate growth and finance"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Successful business negotiation"
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  // Decorative wave SVG component
  const WavePattern = () => (
    <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 opacity-20 pointer-events-none overflow-hidden z-20">
      <svg viewBox="0 0 200 200" className="w-full h-full text-cyan-400 fill-none stroke-current">
        <path d="M -50 50 Q 50 0 100 50 T 250 50" strokeWidth="0.5" />
        <path d="M -50 70 Q 50 20 100 70 T 250 70" strokeWidth="0.5" />
        <path d="M -50 90 Q 50 40 100 90 T 250 90" strokeWidth="0.5" />
        <path d="M -50 110 Q 50 60 100 110 T 250 110" strokeWidth="0.5" />
        <path d="M -50 130 Q 50 80 100 130 T 250 130" strokeWidth="0.5" />
        <circle cx="20" cy="80" r="2" fill="currentColor" />
        <circle cx="40" cy="120" r="4" stroke="currentColor" />
      </svg>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen bg-[#1a1f3c] overflow-hidden font-sans text-white selection:bg-cyan-400 selection:text-slate-900" id='home'>
      
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode='wait'>
            {slideImages.map((image) => (
            image.id === activeSlide && (
                <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                    opacity: 1,
                    scale: 1
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
                >
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                />
                </motion.div>
            )
            ))}
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f3c] via-[#1a1f3c]/90 to-[#2d325a]/70 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3c] via-transparent to-transparent z-10 lg:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111428] via-[#1a1f3c]/80 to-transparent z-10"></div>
      </div>

      {/* Decorative Top Left Waves */}
      <WavePattern />

      {/* Left Side Indicators */}
      <div className="hidden lg:flex flex-col gap-6 mr-12 text-xs font-semibold tracking-widest text-gray-500 absolute left-8 top-1/2 transform -translate-y-1/2 z-30">
        {[1, 2, 3].map((num) => (
          <div 
            key={num} 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => setActiveSlide(num)}
          >
            <div 
              className={`transition-all duration-300 ${
                activeSlide === num ? 'w-8 bg-cyan-400' : 'w-2 bg-gray-600 group-hover:bg-cyan-400'
              } h-[2px]`} 
            />
            <span className={`transition-colors duration-300 ${activeSlide === num ? 'text-white' : ''}`}>
              0{num}
            </span>
          </div>
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        
        {/* Main Content Area */}
        <motion.div 
          className="flex-1 w-full lg:pl-28 flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left py-12 lg:py-0"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Sub-headline / Tagline */}
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
            <div className="flex gap-1">
              <div className="w-6 h-1 bg-cyan-400 rounded-full"></div>
              <div className="w-2 h-1 bg-cyan-400/50 rounded-full"></div>
            </div>
            <span className="text-cyan-400 font-bold uppercase tracking-wider text-xs sm:text-sm md:text-base">
              Evaluate → Improve → Approve
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6"
          >
            India’s First <br />
            <span className="text-white">Business Financial</span> <br />
            <span className="text-cyan-400">Upgrade Program</span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl mb-8 md:mb-10 leading-relaxed border-l-0 lg:border-l-4 border-cyan-400/20 pl-0 lg:pl-6"
          >
            We prepare your company like a <strong className="text-white">CA</strong>, 
            submit like a <strong className="text-white">DSA</strong>, 
            and negotiate like a <strong className="text-white">CFO</strong>.
          </motion.p>

          {/* 3. Action Buttons with onClick Handler */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto group px-8 py-4 border border-cyan-400/30 text-white font-bold uppercase tracking-wide hover:bg-cyan-400/10 transition-colors active:scale-95 flex items-center justify-center gap-2"
            >
              Get Started
              <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center ml-2 group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:text-slate-900 transition-all">
                <ChevronRight className="w-3 h-3" />
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Empty/Spacious */}
        <div className="hidden lg:block w-1/3 h-full relative pointer-events-none">
            <div className="absolute right-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-cyan-400/5 to-transparent"></div>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1a1f3c] to-transparent pointer-events-none z-20"></div>

      {/* 4. Render the Enquiry Form when state is true */}
      {isModalOpen && <EnquiryForm onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Home;