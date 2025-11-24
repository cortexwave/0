import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Marquee = () => {
  return (
    <div className="relative flex overflow-hidden py-6 bg-white text-slate-950 border-y border-slate-950">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mx-8">
             Digital Experiences — Creative Strategy — Brand Identity —
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HERO} 
      className="min-h-screen flex flex-col relative pt-32 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Grid - blueish tint */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#3b82f612_1px,transparent_1px),linear-gradient(to_bottom,#3b82f612_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="flex-grow flex flex-col justify-center px-6 md:px-12 relative z-10">
        <div className="max-w-[95%] mx-auto w-full">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-slate-800 pb-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
            >
               <p className="text-sm md:text-base uppercase tracking-widest text-slate-400 mb-2">
                 EST. 2024 — Global
               </p>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"/>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Available for projects</span>
               </div>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.7 }}
               className="mt-8 md:mt-0 max-w-md text-right"
            >
               <p className="text-lg font-light text-slate-300 leading-relaxed hidden md:block">
                 We silence the noise and amplify the signal. <br/>
                 A futuristic approach to the modern web.
               </p>
            </motion.div>
          </div>

          <div className="relative">
            {["Cortex", "Wave", "Agency"].map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: i * 0.15 }}
                  className="text-[13vw] leading-[0.85] font-bold tracking-tighter uppercase text-white mix-blend-difference"
                >
                  {word}
                </motion.h1>
              </div>
            ))}
            
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute right-[10%] top-[40%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-100 text-slate-950 flex items-center justify-center hidden md:flex hover:scale-110 transition-transform duration-300 cursor-pointer z-20"
              onClick={() => document.getElementById(SectionId.WORK)?.scrollIntoView({ behavior: 'smooth' })}
            >
                <ArrowDownRight size={48} strokeWidth={1.5} />
            </motion.div>
          </div>

        </div>
      </div>

      <div className="relative z-20 mt-12">
         <Marquee />
      </div>
    </section>
  );
};