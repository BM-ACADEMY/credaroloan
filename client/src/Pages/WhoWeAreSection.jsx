import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const WhoWeAreSection = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden" id='whoweare'>
      
      {/* --- Background Design --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Centered Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge: Who we are */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-slate-900 border border-slate-800 shadow-lg mx-auto">
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-slate-300 text-xs font-bold tracking-widest uppercase">
              Who We Are
            </span>
          </div>

          {/* Heading (Fixed Typo) */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Credaro: Your Dedicated <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
              SME Growth Partner
            </span>
          </h2>

          {/* Main Content 1 */}
          <div className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
            <p>
              Credaro is a dedicated SME loan distribution partner focused on small and medium businesses that are ready to grow but need timely credit support.
            </p>
          </div>

          {/* --- Highlight Box (Content 2) --- */}
          <div className="inline-block w-full">
            <div className="relative p-8 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-yellow-500/30 transition-colors duration-300 group max-w-2xl mx-auto">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-500/50 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-500/50 rounded-br-lg" />

              <div className="flex flex-col items-center gap-4 text-center">
                 <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-8 h-8" />
                 </div>
                 <div>
                    <p className="text-slate-300 font-medium text-lg leading-relaxed">
                       The brand stands for “credible credit,” combining strong documentation discipline with a practical understanding of how Indian SMEs actually run.
                    </p>
                 </div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;
