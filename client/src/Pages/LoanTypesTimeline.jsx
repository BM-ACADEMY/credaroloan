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
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// --- Data Configuration (New Content + Light Mode Styling) ---
const loanTypes = [
  {
    id: 1,
    title: "Term Loans",
    description:
      "Fixed amount borrowed for capital expenditure or business expansion, repayable over a set period.",
    icon: Landmark,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "group-hover:border-blue-200",
  },
  {
    id: 2,
    title: "Working Capital Loans",
    description:
      "Short-term loans for daily operational expenses such as inventory and payroll.",
    icon: Banknote,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "group-hover:border-emerald-200",
  },
  {
    id: 3,
    title: "Machinery/Equipment Loans",
    description:
      "For purchasing new machinery or upgrading existing equipment.",
    icon: Factory,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "group-hover:border-amber-200",
  },
  {
    id: 4,
    title: "MSME/SME Business Loans",
    description:
      "Flexible loan options offered by banks or NBFCs, often unsecured for smaller amounts.",
    icon: Briefcase,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "group-hover:border-violet-200",
  },
  {
    id: 5,
    title: "MUDRA Loans",
    description:
      "A government initiative offering loans up to ₹20 lakh based on business stage and need.",
    details: "Shishu, Kishore, Tarun, Tarun Plus",
    icon: Sprout,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "group-hover:border-pink-200",
  },
  {
    id: 6,
    title: "Loans Against Property",
    description:
      "Secured loans where business owners pledge property as collateral, generally yielding higher loan amounts.",
    icon: Building2,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "group-hover:border-cyan-200",
  },
  {
    id: 7,
    title: "Government-Sponsored Loans",
    description:
      "Special schemes backed by government agencies, often at subsidized rates or with relaxed eligibility.",
    icon: Vote,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "group-hover:border-indigo-200",
  },
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
          className={`relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-white shadow-md group ${data.bg}`}
        >
          <Icon
            className={`w-6 h-6 md:w-7 md:h-7 ${data.color} transition-transform duration-300 group-hover:scale-110`}
            strokeWidth={1.5}
          />
        </motion.div>

        {/* Connecting Line */}
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-0.5 bg-slate-200 my-2 rounded-full"
          />
        )}
      </div>

      {/* 2. Right Column: The Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 pb-12"
      >
        <div
          className={`group relative bg-white border border-slate-100 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 ${data.border} hover:border-opacity-100 shadow-sm`}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
            <div>
              <div
                className={`text-xs font-bold tracking-wider uppercase mb-1 ${data.color} opacity-80`}
              >
                Option 0{index + 1}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-black transition-colors">
                {data.title}
              </h3>
            </div>
            {/* Arrow Decoration */}
            <div
              className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full ${data.bg} ${data.color} opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
            >
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              {data.description}
            </p>

            {/* Conditional Detail Box (Only if details exist) */}
            {data.details && (
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className={`w-5 h-5 mt-0.5 ${data.color}`} />
                <p className="text-slate-500 text-sm font-medium">
                  {data.details}
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main Component ---
const LoanFeed = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Ambience (Subtle Grid) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft gradient blobs for warmth */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-100/50 rounded-full blur-[100px] mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-100/50 rounded-full blur-[100px] mix-blend-multiply" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        {/* Header */}
        <div className="mb-20 pl-4 md:pl-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 text-center"
          >
            Types of SME Loans in <span className="text-[#05075a]">India</span>
          </motion.h2>
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
      </div>
    </section>
  );
};

export default LoanFeed;
