import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    tag: 'AI SaaS',
    title: 'Tripled signups with motion-led launch',
    stat: '+212% MQLs',
    gradient: 'from-violet-500/25 via-blue-500/20 to-emerald-500/20',
  },
  {
    tag: 'E-commerce',
    title: 'Reduced CAC while lifting AOV using creative sprints',
    stat: '-36% CAC',
    gradient: 'from-orange-400/25 via-pink-500/20 to-red-500/20',
  },
  {
    tag: 'Fintech',
    title: 'Repositioned brand with clarity and credibility',
    stat: '+4.8 NPS',
    gradient: 'from-sky-400/25 via-cyan-500/20 to-indigo-500/20',
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Selected work</h2>
          <p className="mt-3 text-white/70">Outcomes over outputs. Here are a few highlights.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.06, duration: 0.55 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />
              <div className="relative flex h-52 items-end rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-5 ring-1 ring-white/10">
                <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/5 blur-2xl" />
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15">{c.tag}</span>
              </div>
              <div className="relative mt-4">
                <h3 className="text-lg font-medium">{c.title}</h3>
                <p className="mt-2 text-sm text-white/70">{c.stat}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
