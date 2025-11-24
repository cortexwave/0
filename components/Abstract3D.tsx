import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Abstract3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={containerRef} className="h-[80vh] bg-slate-950 text-white overflow-hidden relative flex items-center justify-center perspective-1000" data-theme="dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-slate-950 pointer-events-none" />
      
      <motion.div 
        style={{ 
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full max-w-4xl h-96 flex flex-col items-center justify-center gap-8"
      >
        {/* Layer 1 */}
        <motion.div 
          style={{ translateZ: 100 }}
          className="text-6xl md:text-9xl font-bold uppercase tracking-tighter text-transparent text-stroke whitespace-nowrap"
        >
          Digital Reality
        </motion.div>

        {/* Layer 2 (Center) */}
        <motion.div 
          style={{ translateZ: 0 }}
          className="text-6xl md:text-9xl font-bold uppercase tracking-tighter text-white whitespace-nowrap mix-blend-overlay"
        >
          Future Proof
        </motion.div>

        {/* Layer 3 */}
        <motion.div 
          style={{ translateZ: -100 }}
          className="text-6xl md:text-9xl font-bold uppercase tracking-tighter text-transparent text-stroke whitespace-nowrap"
        >
          System Design
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div
             style={{ x: -200, y: -100, translateZ: 50 }}
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute w-32 h-32 border border-blue-500 rounded-full opacity-40"
        />
        
        <motion.div
             style={{ x: 200, y: 100, translateZ: 150 }}
             animate={{ rotate: -360 }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute w-48 h-48 border border-slate-500 rounded-full opacity-30 border-dashed"
        />
      </motion.div>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};