import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  ArrowRightLeft, 
  HandHeart, 
  ArrowRight
} from "lucide-react";

// --- Configuration (Simplified - No separate colors) ---
const processSteps = [
  {
    id: 1,
    title: "Understand",
    description:
      "We dive deep into your business model, cash flows, and existing obligations before suggesting any loan product.",
    icon: Search,
  },
  {
    id: 2,
    title: "Match you",
    description:
      "We evaluate multiple lender options (NBFCs/banks) and recommend the most suitable one based on ticket size and tenure.",
    icon: ArrowRightLeft,
  },
  {
    id: 3,
    title: "Handhold you",
    description:
      "We guide you through documentation, application, queries, and disbursal so that you can focus solely on your business.",
    icon: HandHeart,
  },
];

// --- Animation ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

// --- Sub-Component: The Unified Card ---
const ProcessCard = ({ step, index }) => {
  const Icon = step.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="relative flex flex-col h-full group select-none"
    >
      {/* Main Card Container 
         - Unified Hover Border: group-hover:border-[#003E48]/30
         - Unified Hover Shadow: hover:shadow-[0_20px_40px_rgba(0,62,72,0.1)]
      */}
      <div 
        className="relative z-10 flex flex-col flex-grow h-full bg-gradient-to-b from-white to-slate-50 border-2 border-transparent group-hover:border-[#003E48]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,62,72,0.1)] rounded-[2rem] overflow-hidden transition-all duration-500 ease-out"
      >
        
        {/* Decorative ambient light (Unified Teal Glow) */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#003E48]/10 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

        {/* --- Content Area --- */}
        <div className="relative p-8 pb-32 flex flex-col h-full">
          
          {/* Header: Icon & Number */}
          <div className="flex justify-between items-start mb-8">
            {/* Animated Icon Container - Unified Colors */}
            <div className="relative p-4 rounded-2xl bg-slate-100 group-hover:bg-[#003E48]/5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
              <Icon className="w-8 h-8 text-slate-400 group-hover:text-[#003E48] transition-colors duration-300" strokeWidth={1.5} />
            </div>
            
            {/* Stylized Number */}
            <span className="text-6xl font-black text-slate-100 group-hover:text-[#003E48]/10 transition-colors duration-500 font-sans tracking-tighter">
              0{index + 1}
            </span>
          </div>

          {/* Typography */}
          <div className="space-y-4 relative z-10">
            <h3 className="text-2xl font-bold text-slate-800 group-hover:text-[#003E48] tracking-tight transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-slate-500 leading-relaxed text-[15px] group-hover:text-slate-600 transition-colors">
              {step.description}
            </p>
          </div>
        </div>

        {/* --- The "Seamless Notch" Section --- */}
        <div className="absolute bottom-0 right-0 z-20">
          
          {/* Vertical Connector */}
          <div className="absolute bottom-[80px] right-0 w-10 h-10 pointer-events-none">
             {/* Uses a very light slate shadow to blend with the card bottom gradient */}
             <div className="w-full h-full bg-transparent rounded-br-[24px] shadow-[10px_10px_0_0_#f8fafc]"></div>
          </div>
          
           {/* Horizontal Connector */}
          <div className="absolute bottom-0 right-[96px] w-10 h-10 pointer-events-none">
             <div className="w-full h-full bg-transparent rounded-br-[24px] shadow-[10px_10px_0_0_#f8fafc]"></div>
          </div>

          {/* The Interactive Button - Unified Color */}
          <button className="flex items-center justify-center w-24 h-20 bg-[#003E48] hover:bg-[#002d36] text-white rounded-tl-[32px] transition-all duration-300 cursor-pointer group/btn overflow-hidden relative">
             
             {/* Hover shine effect */}
             <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 rounded-tl-[32px]"></div>
             
             <ArrowRight className="w-7 h-7 relative z-10 transition-all duration-300 group-hover/btn:-rotate-45 group-hover/btn:scale-110" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Section ---
const BusinessProcess = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-[#003E48]/5 rounded-full blur-[80px] mix-blend-multiply animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] bg-teal-100/40 rounded-full blur-[80px] mix-blend-multiply animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Simplified <span className="text-[#003E48]">Financial Growth</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
               We simplify the complex world of business finance so you can focus on what matters most—expanding your empire.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {processSteps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessProcess;