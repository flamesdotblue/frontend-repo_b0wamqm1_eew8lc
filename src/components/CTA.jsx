import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.02] p-8 ring-1 ring-white/10 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-6 md:grid-cols-3"
          >
            <h3 className="text-2xl font-semibold md:col-span-2 md:text-3xl">
              Ready to build momentum?
            </h3>
            <div className="md:justify-self-end">
              <a
                href="mailto:hello@auralink.studio"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-900 shadow-lg shadow-indigo-500/20 transition hover:shadow-indigo-400/30"
              >
                Schedule a call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
