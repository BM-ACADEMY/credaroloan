import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Briefcase } from 'lucide-react';

const CredaroAboutSection = () => {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-gray-50 flex items-center justify-center overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: Image Composition */}
        <div className="relative pl-4 pr-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Background Decorative Border */}
            <div className="absolute top-[-15px] left-[-15px] w-full h-full border-2 border-[#00C4CC] z-0 hidden md:block"></div>

            {/* Main Image */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Business Consultant" 
              className="relative w-full h-[500px] object-cover shadow-lg z-10"
            />

            {/* "15+ Years" Overlay Box */}
            <div className="absolute bottom-8 -left-4 md:-left-8 bg-[#00C4CC] text-white p-6 md:p-8 z-20 shadow-lg min-w-[180px] text-center">
                <h3 className="text-4xl font-extrabold">10+</h3>
                <p className="text-sm font-medium mt-1">Year Of Experience</p>
            </div>

            {/* Inset Image */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -top-10 -right-4 md:-right-12 w-40 md:w-56 border-[6px] border-white shadow-xl z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Financial Calculation" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Text Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Subtitle */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#00C4CC] font-bold tracking-widest text-sm uppercase">
                -- About Credaro
              </span>
            </div>

            {/* Main Headline */}
            {/* Adjusted size to text-3xl/4xl to accommodate the longer text length nicely */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2A2A5A] leading-tight mb-6">
              Credaro is a specialised financial transformation company built for MSMEs and growing businesses in India.
            </h2>

            {/* Highlight Box */}
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#2A2A5A] p-4 rounded-sm flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-white" />
                </div>
                <p className="text-[#00C4CC] font-bold text-lg leading-snug">
                   We don’t just apply for loans.
                </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-gray-500 text-lg leading-relaxed mb-8 border-b border-gray-200 pb-8">
              We engineer your company’s financials to make you eligible for the best loans in the market.
            </p>  
            {/* Button */}
            <button className="bg-[#00C4CC] hover:bg-[#00b0b8] text-white px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-colors duration-300 w-fit">
                Know About Us 
                <span className="border-l border-white/30 pl-2 ml-1">
                    <ArrowRight className="w-4 h-4" />
                </span>
            </button>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CredaroAboutSection;