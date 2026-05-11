"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-svh min-h-160 w-full overflow-hidden bg-ink"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="./hero-himalaya.jpg"
          alt="Himalayan sunset"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink/20 to-ink/90" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col"
      >
        <div className="flex-1 flex items-end pb-20 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 text-cream/90 text-xs uppercase tracking-[0.25em] mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Crafted Journeys · Since 2015
            </motion.div>

            <h1 className="font-display text-cream font-bold text-balance text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tight">
              {["Wander", "where", "memories", "begin."].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.6 + i * 0.12,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word === "memories" ? (
                    <span className="inline-block italic font-light text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-orange-300 to-amber-100">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-8 flex flex-col md:flex-row md:items-end gap-8 md:gap-12 max-w-4xl"
            >
              <p className="text-cream/85 text-lg md:text-xl leading-relaxed max-w-md">
                We'll help you create memories — handcrafted tours through the
                Himalayas, deserts and shores of incredible India.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#destinations"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-semibold text-accent-foreground hover:scale-105 transition-transform shadow-glow"
                >
                  Explore destinations
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#about"
                  className="hidden sm:inline-flex items-center gap-2 text-cream/90 hover:text-cream font-medium border-b border-cream/30 hover:border-cream pb-1 transition"
                >
                  Our story
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="border-t border-cream/15 backdrop-blur-sm bg-ink/20"
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-cream/80 text-xs uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-accent" /> New Delhi, India
            </div>
            <div className="hidden md:flex items-center gap-8">
              <span>50+ Destinations</span>
              <span>2K+ Happy Travelers</span>
              <span>★ 4.9 Rated</span>
            </div>
            <div className="text-accent">Scroll ↓</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
