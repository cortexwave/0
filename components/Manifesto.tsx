import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.5"]
  });

  const text = "We believe that in a noisy world, clarity is the ultimate luxury. Cortex Wave exists to strip away the inessential, revealing the core truth of your brand through precision and elegant code.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 bg-slate-950 text-white min-h-[80vh] flex items-center justify-center">
       <div className="max-w-5xl mx-auto text-center">
          <p className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-3xl md:text-6xl font-bold leading-tight tracking-tight">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
              
              return (
                <motion.span 
                  key={i} 
                  style={{ opacity }}
                  className="transition-colors duration-200"
                >
                  {word}
                </motion.span>
              );
            })}
          </p>
       </div>
    </section>
  );
};