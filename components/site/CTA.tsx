"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Instagram } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 overflow-hidden bg-ink text-cream"
    >
      <div className="absolute inset-0">
        <img
          src="./hero-himalaya.jpg"
          alt=""
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/85 to-ink" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-8"
        >
          ✦ Your next chapter
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-[0.95]"
        >
          The mountains are calling.
          <span className="italic font-light bg-clip-text text-transparent bg-linear-to-r from-orange-400 via-orange-300 to-amber-100">
            Will you go?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-cream/80 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Tell us where your imagination lives. We'll handle every road, room,
          and sunrise from there.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:malhotratourandtravels2@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground hover:scale-105 transition-transform shadow-glow"
          >
            <Mail size={18} />
            Start planning
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="https://www.instagram.com/malhotrastourandtravel"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-cream/30 px-8 py-4 font-semibold hover:bg-cream/10 transition"
          >
            <Instagram size={18} /> Follow our journeys
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 text-sm text-cream/60"
        >
          malhotratourandtravels2@gmail.com
        </motion.div>
      </div>
    </section>
  );
}
