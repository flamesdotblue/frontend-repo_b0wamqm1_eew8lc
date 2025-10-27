import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Palette, Megaphone, LineChart } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Brand Acceleration',
    desc: 'Positioning, narrative, and identity systems designed to scale your presence across channels.',
    gradient: 'from-violet-500/20 to-blue-500/20',
  },
  {
    icon: Megaphone,
    title: 'Performance Marketing',
    desc: 'Full-funnel campaigns with conversion-focused creative and rapid iteration cycles.',
    gradient: 'from-orange-500/20 to-pink-500/20',
  },
  {
    icon: Palette,
    title: 'Creative & Motion',
    desc: 'Cinematic visuals and motion design that make your brand feel alive and memorable.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: LineChart,
    title: 'Insights & Strategy',
    desc: 'Deep analytics to uncover leverage points and maximize ROI across your ecosystem.',
    gradient: 'from-emerald-500/20 to-lime-500/20',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">What we do</h2>
          <p className="mt-3 text-white/70">Integrated services engineered for motion-first brands.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm"
            >
              <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${s.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
