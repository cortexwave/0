import React from 'react';
import { SectionId } from '../types';
import { Reveal } from './ui/Reveal';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <Reveal>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
                Let's<br/>Talk.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-slate-400 max-w-md mb-12">
                Ready to start your next project? We are currently accepting new clients for Q4 2024.
              </p>
            </Reveal>
            
            <div className="space-y-4">
              <Reveal delay={0.3}>
                <a href="mailto:cortexwave.connect@gmail.com" className="block text-2xl hover:text-slate-400 transition-colors">cortexwave.connect@gmail.com</a>
              </Reveal>
              <Reveal delay={0.4}>
                <a href="tel:+8801533744721" className="block text-2xl hover:text-slate-400 transition-colors">+880 1533 744721</a>
              </Reveal>
            </div>

            <div className="mt-24 flex gap-8">
               {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map((social, i) => (
                 <Reveal key={social} delay={0.5 + (i * 0.1)}>
                   <a href="#" className="uppercase text-xs tracking-widest text-slate-500 hover:text-white transition-colors">{social}</a>
                 </Reveal>
               ))}
            </div>
          </div>

          <div className="bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-slate-700 py-2 focus:outline-none focus:border-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-slate-700 py-2 focus:outline-none focus:border-white transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500">Service</label>
                <select className="w-full bg-transparent border-b border-slate-700 py-2 focus:outline-none focus:border-white transition-colors text-slate-400">
                  <option>Strategic Branding</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-slate-700 py-2 focus:outline-none focus:border-white transition-colors resize-none"></textarea>
              </div>
              
              <button className="w-full bg-white text-slate-950 py-4 font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors mt-4">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full text-[15vw] leading-none font-bold text-slate-900 select-none pointer-events-none text-center opacity-20">
        CORTEX WAVE
      </div>
    </section>
  );
};