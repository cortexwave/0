import React from 'react';
import { SectionId } from '../types';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-40 px-6 bg-slate-900 text-white">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-4">
            <Reveal>
              <span className="text-sm uppercase tracking-widest text-slate-500 block mb-4">(01) — Who We Are</span>
              <h2 className="text-4xl font-bold tracking-tighter">The Future<br/>Of Digital</h2>
            </Reveal>
          </div>

          <div className="md:col-span-8 space-y-12">
            <Reveal delay={0.2}>
              <p className="text-3xl md:text-5xl font-light leading-tight text-slate-200">
                We don't just build websites; we architect digital ecosystems. In a world cluttered with templates and noise, Cortex Wave offers a return to craftsmanship.
              </p>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-slate-800">
              <Reveal delay={0.3}>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Born from a desire to strip away the unnecessary, our philosophy is rooted in efficient code and refined aesthetics. We believe that every pixel should serve a purpose, and every interaction should be intuitive.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"/> 
                    <span>Data-Driven Strategy</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"/> 
                    <span>Performance Optimized</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"/> 
                    <span>Future-Proof Tech Stack</span>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};