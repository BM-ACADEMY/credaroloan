import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Puzzle, 
  MessageSquareText, 
  ArrowRight
} from "lucide-react";

// --- Data Configuration ---
const features = [
  {
    id: 1,
    title: "Faster decisions",
    description: "files are prepared properly and presented in the lender’s language.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "group-hover:border-amber-400/50"
  },
  {
    id: 2,
    title: "Better product fit",
    description: "We analyze your needs (working capital, machinery, expansion, LAP, etc.) instead of one-size-fits-all selling.",
    icon: Puzzle,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "group-hover:border-cyan-400/50"
  },
  {
    id: 3,
    title: "Transparent updates",
    description: "Clear updates on eligibility, likely approval amount, and timelines so there are no surprises.",
    icon: MessageSquareText,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "group-hover:border-emerald-400/50"
  },
];

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Sub-Component: Feature Card ---
const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="group relative h-full"
    >
      {/* Card Background & Border */}
      <div className={`relative h-full flex flex-col justify-between bg-slate-900 border border-slate-800 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 ${feature.border} border-t-0 border-x-0 border-b-4 rounded-xl overflow-hidden`}>
        
        {/* Subtle Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div>
          {/* Icon Header */}
          <div className="flex items-center justify-between mb-8">
            <div className={`p-3 rounded-lg ${feature.bg} ${feature.color} ring-1 ring-white/5`}>
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-slate-500 text-xs font-mono tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
              0{feature.id}
            </span>
          </div>

          {/* Text Content */}
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
            {feature.title}
          </h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            {feature.description}
          </p>
        </div>
        
        
        {/* Learn More Link (Visual Only) */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center text-sm font-medium text-slate-500 group-hover:text-white transition-colors">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const WhyChooseCredaro = () => {
  return (
    <section className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{
             backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
      ></div>

      {/* Radial Gradient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-8 bg-cyan-500"></div>
              <span className="text-cyan-500 font-semibold tracking-wider text-sm uppercase">The Advantage</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white tracking-tight"
            >
              Why SMEs trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Credaro</span>
            </motion.h2>
          </div>

          
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
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