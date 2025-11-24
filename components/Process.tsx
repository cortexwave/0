import React from 'react';
import { SectionId } from '../types';
import { Reveal } from './ui/Reveal';

const steps = [
    {
        id: "01",
        title: "Discovery",
        description: "We begin by deconstructing your brand to its core. We interview stakeholders, analyze competitors, and identify the unique value proposition that will set you apart."
    },
    {
        id: "02",
        title: "Strategy",
        description: "Insights turn into action. We develop a comprehensive roadmap that defines user personas, information architecture, and the technical requirements needed for success."
    },
    {
        id: "03",
        title: "Design",
        description: "This is where form meets function. We create high-fidelity prototypes that focus on visual impact and user experience, iterating until the aesthetic is perfectly aligned with your vision."
    },
    {
        id: "04",
        title: "Development",
        description: "Our engineering team brings the design to life using modern frameworks. We focus on clean code, accessibility, and lightning-fast performance across all devices."
    }
];

export const Process: React.FC = () => {
  return (
    <section id={SectionId.PROCESS} className="py-32 md:py-48 px-6 bg-white text-slate-950" data-theme="light">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Sticky Header */}
            <div className="lg:w-1/3">
                <div className="sticky top-32">
                    <Reveal>
                        <span className="text-sm uppercase tracking-widest text-slate-500 block mb-4">(03) — How We Work</span>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Our<br/>Process</h2>
                        <p className="text-slate-600 text-lg leading-relaxed max-w-sm">
                            A systematic approach to creativity guarantees consistent, high-quality results for every project we touch.
                        </p>
                        <div className="mt-12 hidden lg:block">
                             <div className="w-full h-px bg-slate-200 mb-4"></div>
                             <span className="text-xs uppercase tracking-widest text-slate-400">Scroll to explore</span>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Scrollable Steps */}
            <div className="lg:w-2/3 flex flex-col gap-16 lg:gap-32 pt-12 lg:pt-0">
                {steps.map((step, index) => (
                    <Reveal key={step.id} width="100%">
                        <div className="group border-t border-slate-200 pt-12 hover:border-slate-950 transition-colors duration-500">
                            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                                <span className="text-6xl md:text-8xl font-light text-slate-200 group-hover:text-slate-950 transition-colors duration-500">{step.id}</span>
                                <div className="pt-4">
                                    <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-wide mb-6">{step.title}</h3>
                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed group-hover:text-slate-950 transition-colors duration-500 max-w-xl">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};