import React, { useState } from 'react';
import { SectionId, Service } from '../types';
import { Reveal } from './ui/Reveal';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services: Service[] = [
  {
    id: 1,
    title: "Digital Strategy",
    description: "We analyze your market position to uncover hidden opportunities. Our data-driven approach ensures your digital presence is built on a foundation of solid logic and forward-thinking innovation.",
    tags: ["Market Research", "Brand Positioning", "Content Strategy"]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Interface design that serves a purpose. We strip away the non-essential to reveal the core function, creating intuitive flows that guide users effortlessly towards conversion.",
    tags: ["Wireframing", "Prototyping", "Visual Design", "Design Systems"]
  },
  {
    id: 3,
    title: "Web Development",
    description: "Robust, scalable code. Whether it's a complex web application or a high-performance marketing site, we build with the latest technologies to ensure speed, security, and reliability.",
    tags: ["React / Next.js", "WebGL", "E-commerce", "CMS Integration"]
  },
  {
    id: 4,
    title: "Brand Identity",
    description: "Visual languages that speak louder than words. We craft memorable identities that resonate with your audience and stand the test of time in a rapidly changing digital landscape.",
    tags: ["Logo Design", "Typography", "Art Direction"]
  }
];

export const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id={SectionId.SERVICES} className="py-40 px-6 bg-slate-50 text-slate-950" data-theme="light">
      <div className="max-w-[90%] mx-auto">
        <div className="mb-24">
          <Reveal>
             <span className="text-sm uppercase tracking-widest text-slate-500 block mb-4">(02) — Expertise</span>
             <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">Services</h2>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="border-t border-slate-300 last:border-b py-12 cursor-pointer group hover:px-4 transition-all duration-300"
              onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-3xl md:text-6xl font-light uppercase tracking-tighter transition-all duration-300 ${expandedId === service.id ? 'font-normal' : 'text-slate-500 group-hover:text-slate-950'}`}>
                  {service.title}
                </h3>
                <span className="p-3 rounded-full border border-slate-300 group-hover:bg-slate-950 group-hover:text-white transition-colors duration-300">
                  {expandedId === service.id ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </div>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 pb-4 flex flex-col md:flex-row gap-12 border-l border-slate-950 pl-6 ml-2 mt-4">
                      <p className="text-xl text-slate-800 max-w-2xl leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-3 content-start">
                        {service.tags.map(tag => (
                          <span key={tag} className="px-4 py-2 bg-white border border-slate-200 text-xs uppercase tracking-wider rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};