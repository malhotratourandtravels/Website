"use client";

import { motion } from "framer-motion";
import { Map, Users, Hotel, ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    icon: Map,
    title: "Personalized Itineraries",
    text:
      "Every journey is hand-built around your pace, taste, and curiosity — from secluded mountain hideaways to bustling bazaar mornings.",
    tags: ["Custom routes", "Solo / Group", "Flexible pace"],
  },
  {
    n: "02",
    icon: Users,
    title: "Guided Excursions",
    text:
      "Travel with locals who know the back-roads, the best chai stops, and the stories behind every monument and mountain pass.",
    tags: ["Expert guides", "Local lore", "Hidden gems"],
  },
  {
    n: "03",
    icon: Hotel,
    title: "Comfortable Accommodations",
    text:
      "Hand-picked stays — heritage palaces, alpine cabins, design boutiques and cozy homestays — chosen to feel like a chapter in your story.",
    tags: ["Boutique", "Heritage", "Wellness"],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-primary py-20 sm:py-24 md:py-32 lg:py-40 text-primary-foreground grain"
    >
      {/* Background ambient glow */}
      <motion.div
        className="absolute top-0 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-accent/10 blur-3xl"
        animate={{
          opacity: [0.08, 0.14, 0.08],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-orange-400/10 blur-3xl"
        animate={{
          opacity: [0.05, 0.1, 0.05],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 md:gap-10 mb-14 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-5 sm:mb-6">
              ✦ What we do
            </div>

            <h2 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1] text-balance">
              Three pillars.{" "}
              <span className="italic font-light text-accent">
                Endless
              </span>{" "}
              possibilities.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-lg text-base sm:text-lg leading-relaxed text-primary-foreground/70"
          >
            From the first idea to the last sunset, we shape every
            detail of your journey with personalized planning,
            local expertise, and unforgettable hospitality.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-cream/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-accent/40 hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
            >
              {/* Hover gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(255,140,0,0.18), transparent 60%)",
                }}
              />

              {/* Floating glow */}
              <motion.div
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              />

              <div className="relative z-10 h-full flex flex-col">
                {/* Top */}
                <div className="flex items-start justify-between mb-10 sm:mb-12">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="font-display text-2xl sm:text-3xl text-accent"
                  >
                    {s.n}
                  </motion.span>

                  <motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-accent/10 border border-accent/20 text-accent grid place-items-center"
                  >
                    <s.icon size={24} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 sm:mb-5">
                    {s.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-primary-foreground/75 mb-7 sm:mb-8">
                    {s.text}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {s.tags.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{
                          y: -2,
                        }}
                        className="rounded-full border border-cream/15 bg-white/[0.03] px-3 py-1.5 text-[11px] sm:text-xs text-primary-foreground/80"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0.7 }}
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent mt-auto"
                >
                  Learn more
                  <motion.div
                    animate={{
                      x: [0, 3, 0],
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}