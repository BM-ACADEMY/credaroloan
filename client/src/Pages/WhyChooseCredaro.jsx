import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Puzzle, 
  MessageSquareText, 
  CheckCircle2 
} from "lucide-react";

// --- Data Configuration ---
const features = [
  {
    id: 1,
    title: "Faster decisions",
    highlight: "Faster",
    description: "Files are prepared properly and presented in the lender’s language, drastically reducing processing time and back-and-forth queries.",
    icon: Zap,
  },
  {
    id: 2,
    title: "Better product fit",
    highlight: "Better fit",
    description: "We analyze your needs (working capital, machinery, expansion, LAP) to find the perfect match instead of one-size-fits-all selling.",
    icon: Puzzle,
  },
  {
    id: 3,
    title: "Transparent communication",
    highlight: "Transparent",
    description: "Clear updates on eligibility, likely approval amounts, and timelines so you can plan your business moves with zero surprises.",
    icon: MessageSquareText,
  },
];

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- Sub-Component: Feature Card ---
const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="group relative h-full"
    >
      <div className="relative h-full bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,62,72,0.08)] overflow-hidden">
        
        {/* Hover Gradient Effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#003E48] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Background Blob */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#003E48]/5 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-150" />

        {/* Icon */}
        <div className="relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 text-[#003E48] group-hover:bg-[#003E48] group-hover:text-white transition-all duration-300 shadow-sm">
          <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#003E48] transition-colors duration-300">
             {/* Splitting title to highlight the first word/phrase if needed, or just rendering text */}
             {feature.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-base">
            {feature.description}
          </p>
        </div>

        {/* Bottom stylized checkmark decoration */}
        <div className="absolute bottom-6 right-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
          <CheckCircle2 className="w-6 h-6 text-[#003E48]/40" />
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const WhyChooseCredaro = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor Elements */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Left Side Decoration */}
         <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply" />
         {/* Right Side Decoration */}
         <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[30rem] h-[30rem] bg-teal-100/40 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-[#003E48] uppercase bg-[#003E48]/10 rounded-full"
          >
            The Credaro Advantage
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Why SMEs choose <span className="text-[#003E48]">Credaro</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            We don't just process loans; we engineer the right financial path for your business growth.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseCredaro;