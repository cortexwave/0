import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Process } from './components/Process';
import { AIChat } from './components/AIChat';
import { Manifesto } from './components/Manifesto';
import { CustomCursor } from './components/ui/CustomCursor';
import { Abstract3D } from './components/Abstract3D';

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-white selection:text-slate-950">
      <CustomCursor />
      <Header />
      
      <main>
        <Hero />
        <About />
        <Manifesto />
        <Abstract3D />
        <Services />
        <Process />
        <Work />
        <Contact />
      </main>

      <footer className="py-8 border-t border-slate-900 bg-slate-950 text-center flex flex-col md:flex-row justify-between items-center px-12 text-slate-600 text-xs uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Cortex Wave</span>
        <span className="hidden md:block">Silence the noise</span>
        <span>All Rights Reserved</span>
      </footer>

      <AIChat />
    </div>
  );
}

export default App;