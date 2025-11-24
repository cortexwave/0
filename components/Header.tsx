import React, { useState } from 'react';
import { SectionId } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: SectionId.HERO, label: 'Home' },
    { id: SectionId.ABOUT, label: 'Agency' },
    { id: SectionId.SERVICES, label: 'Services' },
    { id: SectionId.PROCESS, label: 'Process' },
    { id: SectionId.WORK, label: 'Work' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ];

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 backdrop-blur-md bg-slate-950/20 border-b border-white/5"
      >
        <div className="max-w-[95%] mx-auto flex justify-between items-center">
          {/* Mix blend difference applied to content to invert against underlying blurred bg or page content */}
          <div 
            className="font-bold text-xl md:text-2xl tracking-tighter cursor-pointer uppercase hover-trigger text-white mix-blend-difference"
            onClick={() => scrollTo(SectionId.HERO)}
          >
            Cortex Wave
          </div>

          <div className="flex items-center gap-6 text-white mix-blend-difference">
             <button 
                onClick={() => scrollTo(SectionId.CONTACT)}
                className="hidden md:block px-6 py-2 border border-white rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all duration-300"
             >
                Start Project
             </button>
             
             <button 
                className="flex items-center gap-2 group"
                onClick={() => setIsMenuOpen(true)}
             >
                <span className="hidden md:block text-xs uppercase tracking-widest font-medium group-hover:opacity-50 transition-opacity">Menu</span>
                <Menu size={24} className="group-hover:scale-110 transition-transform" />
             </button>
          </div>
        </div>
      </header>

      {/* Side Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-slate-900 z-50 border-l border-slate-800 flex flex-col"
            >
                <div className="p-6 md:p-12 flex justify-between items-center border-b border-slate-800">
                    <span className="text-sm uppercase tracking-widest text-slate-500">Navigation</span>
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-700 hover:bg-white hover:text-slate-950 transition-colors text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 md:p-12 flex flex-col justify-center space-y-6">
                    {navLinks.map((link, i) => (
                        <motion.button
                            key={link.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + (i * 0.05) }}
                            onClick={() => scrollTo(link.id)}
                            className="text-left group flex items-center justify-between w-full"
                        >
                            <span className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-slate-400 group-hover:text-white transition-colors">
                                {link.label}
                            </span>
                            <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white" />
                        </motion.button>
                    ))}
                </div>

                <div className="p-6 md:p-12 border-t border-slate-800 text-white">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs uppercase tracking-widest text-slate-500">Get in touch</span>
                        <a href="mailto:cortexwave.connect@gmail.com" className="text-xl hover:underline decoration-1 underline-offset-4 break-words">cortexwave.connect@gmail.com</a>
                        <div className="flex gap-4 mt-4">
                             {['IG', 'TW', 'LN', 'BE'].map(social => (
                                 <a key={social} href="#" className="text-xs border border-slate-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-slate-950 transition-colors">{social}</a>
                             ))}
                        </div>
                    </div>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};