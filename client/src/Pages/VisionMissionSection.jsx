import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  FileText, 
  ShieldCheck, 
  Briefcase,
  ArrowRight
} from 'lucide-react';

const VisionMissionSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const missionPoints = [
    {
      id: 1,
      text: "Fix financial weaknesses that stop companies from growing",
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
    },
    {
      id: 2,
      text: "Bring transparency and structure to MSME lending",
      icon: <Briefcase className="w-6 h-6 text-yellow-400" />,
    },
    {
      id: 3,
      text: "Offer CA-level documentation with CFO-level strategy",
      icon: <FileText className="w-6 h-6 text-yellow-400" />,
    },
    {
      id: 4,
      text: "Secure the right loan from the right bank with right justification",
      icon: <ShieldCheck className="w-6 h-6 text-yellow-400" />,
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* --- Background Elements (Glow Effects) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Left Side: Vision (Sticky Feel) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-yellow-400 text-sm font-semibold tracking-wide uppercase mb-6">
              <Target className="w-4 h-4" />
              Our Vision
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Growth made <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
                predictable & scalable.
              </span>
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed mb-8 border-l-2 border-yellow-500/50 pl-6">
              "To empower every Indian business with world-class financial documentation and credit planning — so growth becomes predictable, scalable, and stress-free."
            </p>

            <motion.div 
              whileHover={{ x: 10 }}
              className="hidden lg:flex items-center gap-2 text-white font-medium cursor-pointer"
            >
              See how we do it <ArrowRight className="w-5 h-5 text-yellow-400" />
            </motion.div>
          </motion.div>

          {/* --- Right Side: Mission Grid --- */}
          <div className="relative">
             {/* Decorative line connecting cards (visual only) */}
             <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-slate-800 hidden md:block lg:hidden" />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="sm:col-span-2 mb-4">
                 <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                   Our Mission
                   <div className="h-px bg-slate-800 flex-grow"></div>
                 </h3>
              </div>

              {missionPoints.map((point) => (
                <motion.div
                  key={point.id}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-yellow-500/50 hover:bg-slate-900 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-yellow-500/10 transition-colors">
                    {point.icon}
                  </div>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;