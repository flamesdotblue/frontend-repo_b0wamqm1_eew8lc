import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Decorative gradient aura overlay - doesn't block Spline interactions */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),rgba(59,130,246,0.22)_40%,rgba(251,146,60,0.15)_70%,transparent_75%)] blur-3xl" />
      </div>

      {/* Simple Navbar */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
            <Sparkles className="h-5 w-5 text-violet-300" />
          </div>
          <span className="font-semibold tracking-wide">Auralink Studio</span>
        </div>
        <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>

      {/* Content + Spline */}
      <div className="relative mx-auto grid min-h-[70vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            Marketing that moves with you
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-4 max-w-xl text-lg text-white/70"
          >
            We blend strategy, storytelling, and motion to build brands that feel alive. Futuristic, minimal, and undeniably effective.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-950 shadow-lg shadow-violet-500/20 transition hover:shadow-violet-400/30"
            >
              Start a project
              <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15"
            >
              See our work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-center text-sm text-white/70"
          >
            <div>
              <div className="text-2xl font-semibold text-white">120+</div>
              Brands scaled
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">7.2x</div>
              Avg. ROAS
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">18</div>
              Countries served
            </div>
          </motion.div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative z-0 h-[420px] w-full md:h-[540px]">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
