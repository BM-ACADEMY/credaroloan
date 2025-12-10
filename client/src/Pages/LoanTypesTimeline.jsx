import React from "react";
import { motion } from "framer-motion";
import { 
  Landmark, 
  Banknote, 
  Factory, 
  Briefcase, 
  Sprout, 
  Building2, 
  Vote,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

// --- Data Configuration ---
const loanTypes = [
  {
    id: 1,
    title: "Term Loans",
    description: "Fixed capital for long-term growth.",
    details: "Best for: Factory expansion, new offices, or large scale infrastructure projects.",
    icon: Landmark,
    accent: "text-blue-400",
    border: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-blue-500/20"
  },
  {
    id: 2,
    title: "Working Capital",
    description: "Operational fuel for daily needs.",
    details: "Best for: Inventory restocking, payroll management, and bridging cash flow gaps.",
    icon: Banknote,
    accent: "text-emerald-400",
    border: "group-hover:border-emerald-500/50",
    shadow: "group-hover:shadow-emerald-500/20"
  },
  {
    id: 3,
    title: "Machinery Loans",
    description: "Tech upgrades & equipment.",
    details: "Best for: Upgrading outdated machinery or purchasing new production lines.",
    icon: Factory,
    accent: "text-amber-400",
    border: "group-hover:border-amber-500/50",
    shadow: "group-hover:shadow-amber-500/20"
  },
  {
    id: 4,
    title: "SME Business Loans",
    description: "Collateral-free flexibility.",
    details: "Best for: Quick infusion of funds for marketing, hiring, or small renovations.",
    icon: Briefcase,
    accent: "text-violet-400",
    border: "group-hover:border-violet-500/50",
    shadow: "group-hover:shadow-violet-500/20"
  },
  {
    id: 5,
    title: "MUDRA Loans",
    description: "Govt. backed micro-credit.",
    details: "Stages: Shishu (up to ₹50k), Kishore (₹50k-5L), Tarun (₹5L-10L).",
    icon: Sprout,
    accent: "text-pink-400",
    border: "group-hover:border-pink-500/50",
    shadow: "group-hover:shadow-pink-500/20"
  },
  {
    id: 6,
    title: "Loan Against Property",
    description: "High value, low interest.",
    details: "Best for: Large funding needs where you leverage real estate assets.",
    icon: Building2,
    accent: "text-cyan-400",
    border: "group-hover:border-cyan-500/50",
    shadow: "group-hover:shadow-cyan-500/20"
  },
  {
    id: 7,
    title: "Govt. Schemes",
    description: "Subsidies & special support.",
    details: "Includes: CGTMSE, Stand-Up India, and other sector-specific subsidies.",
    icon: Vote,
    accent: "text-indigo-400",
    border: "group-hover:border-indigo-500/50",
    shadow: "group-hover:shadow-indigo-500/20"
  }
];

// --- Sub-Component: Timeline Item ---
const TimelineItem = ({ data, index, isLast }) => {
  const Icon = data.icon;

  return (
    <div className="relative flex gap-6 md:gap-10">
      
      {/* 1. Left Column: The Timeline Spine */}
      <div className="flex flex-col items-center">
        
        {/* Node Circle */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#0f1623] border border-slate-700 shadow-xl group`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
          <Icon className={`w-6 h-6 md:w-7 md:h-7 ${data.accent} transition-transform duration-300 group-hover:scale-110`} strokeWidth={1.5} />
        </motion.div>

        {/* Connecting Line */}
        {!isLast && (
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-px bg-gradient-to-b from-slate-700 via-slate-800 to-transparent my-2" 
          />
        )}
      </div>

      {/* 2. Right Column: The Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 pb-16"
      >
        <div className={`group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-slate-800/60 transition-all duration-300 ${data.border} hover:border-opacity-50 hover:shadow-2xl ${data.shadow}`}>
          
          {/* Hover Glow Effect */}
          <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none`} />

          {/* Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <div className={`text-xs font-bold tracking-wider uppercase mb-1 ${data.accent}`}>
                Option 0{index + 1}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {data.title}
              </h3>
            </div>
            {/* Arrow Decoration */}
            <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-slate-400 group-hover:text-white group-hover:border-white/30 transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Body */}
          <div className="relative z-10 space-y-4">
            <p className="text-slate-300 text-lg font-medium leading-snug">
              {data.description}
            </p>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-black/20 border border-white/5">
              <CheckCircle2 className={`w-5 h-5 mt-0.5 ${data.accent} opacity-80`} />
              <p className="text-slate-400 text-sm leading-relaxed">
                {data.details}
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

// --- Main Component ---
const LoanFeed = () => {
  return (
    <section className="py-24 bg-[#050914] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-blue-600/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-violet-600/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        
        {/* Header */}
        <div className="mb-20 pl-4 md:pl-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Find your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400">
              Financial Fit.
            </span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-xl border-l-2 border-slate-800 pl-6">
            A comprehensive guide to the lending instruments available for Indian SMEs today.
          </p>
        </div>

        {/* Timeline Feed */}
        <div className="relative">
          {loanTypes.map((loan, index) => (
            <TimelineItem 
              key={loan.id} 
              data={loan} 
              index={index} 
              isLast={index === loanTypes.length - 1} 
            />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 pl-4 md:pl-24"
        >
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-10">
            <span className="relative z-10">Check Eligibility</span>
            <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-violet-100 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default LoanFeed;