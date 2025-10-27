import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <Services />
      <CaseStudies />
      <CTA />
      <footer className="border-t border-white/10 bg-slate-950/60 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Auralink Studio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
