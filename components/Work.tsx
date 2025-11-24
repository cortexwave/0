import React, { useState } from 'react';
import { SectionId, Project } from '../types';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Propulsion AI",
    category: "SaaS Platform / Product Design",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    location: "San Francisco"
  },
  {
    id: 2,
    title: "Velvet Capital",
    category: "Fintech / Mobile App",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600&auto=format&fit=crop",
    location: "London"
  },
  {
    id: 3,
    title: "Aeon Motors",
    category: "Automotive / WebGL Experience",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
    location: "Tokyo"
  },
  {
    id: 4,
    title: "Maison Étude",
    category: "E-Commerce / Brand Identity",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    location: "Paris"
  }
];

export const Work: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id={SectionId.WORK} className="py-40 px-6 bg-slate-950 text-white">
      <div className="max-w-[90%] mx-auto">
        <div className="flex justify-between items-end mb-24 border-b border-slate-800 pb-8">
          <Reveal>
             <span className="text-sm uppercase tracking-widest text-slate-500 block mb-4">(04) — Portfolio</span>
             <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Selected<br/>Works</h2>
          </Reveal>
          <Reveal delay={0.2}>
             <div className="text-right hidden md:block">
                 <p className="text-slate-500 mb-2">Refining the digital landscape</p>
                 <p className="text-xl">Featured Case Studies</p>
             </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${index % 2 === 1 ? 'md:pt-32' : ''}`} // Staggered layout
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Reveal delay={index * 0.1}>
                  <div className="overflow-hidden mb-8 relative">
                     <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                     {/* Image Container with aspect ratio */}
                     <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105"
                        />
                     </div>
                     <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <div className="bg-white text-slate-950 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                            <ArrowUpRight size={32} strokeWidth={1.5} />
                        </div>
                     </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 border-t border-slate-800 pt-6 group-hover:border-slate-600 transition-colors duration-500">
                      <div className="flex justify-between items-center">
                          <h3 className="text-4xl font-medium tracking-tight group-hover:text-blue-200 transition-colors duration-300">{project.title}</h3>
                          <span className="text-xs text-slate-500 border border-slate-800 px-3 py-1 rounded-full uppercase tracking-wider">{project.location}</span>
                      </div>
                      <span className="text-sm uppercase tracking-wider text-slate-400">{project.category}</span>
                  </div>
              </Reveal>
            </div>
          ))}
        </div>
        
        <div className="mt-40 flex justify-center">
           <a href="#contact" className="group relative px-12 py-6 overflow-hidden bg-transparent border border-slate-700 text-white transition-colors hover:border-white">
             <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
             <span className="relative text-lg uppercase tracking-widest font-medium group-hover:text-slate-950 transition-colors duration-300">View Archive</span>
           </a>
        </div>
      </div>
    </section>
  );
};