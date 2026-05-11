"use client";

import { motion } from "framer-motion";
import {
  Award,
  Building2,
  Globe2,
  HeartHandshake,
  Hotel,
  MapPin,
  Plane,
  Sparkles,
  Star,
} from "lucide-react";

const brands = ["IHG", "Taj", "Jaypee Group", "jüSTa Hotels"];

const stats = [
  {
    icon: Hotel,
    value: "11+",
    label: "Years Experience",
  },
  {
    icon: Plane,
    value: "4+",
    label: "Years Running Agency",
  },
  {
    icon: Globe2,
    value: "100%",
    label: "Personalized Journeys",
  },
];

export function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-primary py-16 sm:py-20 md:py-28 lg:py-36 text-primary-foreground"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -40, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-accent blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-orange-400 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-8">
            <Sparkles size={14} />
            Founder Story
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1] md:leading-[0.95] max-w-5xl mx-auto text-balance px-2">
            The person behind
            <span className="italic font-light text-accent">
              {" "}
              every unforgettable journey.
            </span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 order-1"
          >
            <div className="lg:sticky lg:top-28">
              {/* Founder Image */}
              <div className="relative rounded-[1.8rem] md:rounded-[2rem] overflow-hidden border border-cream/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="aspect-[4/5] sm:aspect-[4/5] overflow-hidden">
                  <img
                    src="./founder.png"
                    alt="Deom Malhotra"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent" />

                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 rounded-2xl md:rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-4 md:p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                        Deom Malhotra
                      </h3>

                      <p className="text-accent text-[10px] sm:text-xs uppercase tracking-[0.18em] mt-1">
                        Founder · Malhotra’s Tour & Travel
                      </p>
                    </div>

                    <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-2xl shrink-0">
                      <Star className="fill-current" size={24} />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl border border-cream/10 bg-white/5 backdrop-blur-sm p-5 text-center"
                  >
                    <s.icon
                      size={20}
                      className="mx-auto mb-3 text-accent"
                    />

                    <div className="font-display text-3xl font-bold">
                      {s.value}
                    </div>

                    <div className="text-[11px] uppercase tracking-[0.15em] text-primary-foreground/60 mt-1">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 order-2"
          >
            {/* Intro */}
            <div className="mb-10 md:mb-14">
              <div className="flex items-center gap-3 text-accent mb-6">
                <HeartHandshake size={20} />
                <span className="uppercase tracking-[0.25em] text-xs font-semibold">
                  Hospitality Driven
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight font-bold mb-6 md:mb-8 text-balance">
                From luxury hospitality
                <span className="italic font-light text-accent">
                  {" "}
                  to curated travel experiences.
                </span>
              </h3>

              <div className="space-y-5 text-base sm:text-lg leading-relaxed text-primary-foreground/75">
                <p>
                  With over 11 years of experience across the hospitality and
                  travel industry, Deom Malhotra has built his journey around
                  one simple philosophy — creating experiences people never
                  forget.
                </p>

                <p>
                  Before founding Malhotra’s Tour & Travel, he worked with some
                  of the most respected 5-star hotel brands including IHG,
                  Taj, Jaypee Group, and jüSTa Hotels, gaining deep expertise
                  in guest experience, operations, and luxury hospitality.
                </p>

                <p>
                  Four years ago, inspired by his passion for travel and
                  personalized hospitality, he launched his own travel company
                  with a vision to deliver journeys that feel effortless,
                  comfortable, and truly memorable.
                </p>
              </div>
            </div>

            {/* Experience Brands */}
            <div className="mb-10 md:mb-14">
              <div className="flex items-center gap-3 mb-6">
                <Building2 size={18} className="text-accent" />
                <h4 className="uppercase tracking-[0.25em] text-xs font-semibold text-accent">
                  Experience With
                </h4>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {brands.map((brand, i) => (
                  <motion.div
                    key={brand}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{
                      y: -4,
                    }}
                    className="rounded-2xl border border-cream/10 bg-white/5 px-5 py-3 sm:px-6 sm:py-4 backdrop-blur-sm"
                  >
                    <div className="font-display text-xl font-semibold">
                      {brand}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        {/* Bottom Full Width Content */}
        <div className="mt-14 md:mt-20 space-y-6 md:space-y-8">

          {/* Vision + Goal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="rounded-[1.8rem] md:rounded-[2rem] border border-cream/10 bg-white/5 p-6 sm:p-8 md:p-10 backdrop-blur-sm"
            >
              <Award size={28} className="text-accent mb-6" />

              <h4 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Vision
              </h4>

              <p className="text-primary-foreground/70 leading-relaxed text-lg">
                To become a trusted and preferred travel partner known for
                delivering seamless, personalized, and memorable travel
                experiences with comfort, reliability, and exceptional service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-[1.8rem] md:rounded-[2rem] border border-cream/10 bg-white/5 p-6 sm:p-8 md:p-10 backdrop-blur-sm"
            >
              <Plane size={28} className="text-accent mb-6" />

              <h4 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Goal
              </h4>

              <p className="text-primary-foreground/70 leading-relaxed text-lg">
                To create long-term relationships with travelers by providing
                customized travel experiences with consistency, trust,
                attention to detail, and genuine hospitality.
              </p>
            </motion.div>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-accent/20 bg-gradient-to-br from-accent/15 via-orange-400/10 to-transparent p-6 sm:p-8 md:p-16"
          >
            <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <MapPin size={18} className="text-accent" />

                <span className="uppercase tracking-[0.25em] text-xs font-semibold text-accent">
                  Saket · South Delhi
                </span>
              </div>

              <p className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.2] md:leading-[1.1] text-balance max-w-5xl">
                “Travel is not just about reaching a destination —
                it’s about the comfort, memories, and experiences
                created throughout the journey.”
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-16 bg-accent" />

                <span className="uppercase tracking-[0.2em] text-sm text-primary-foreground/60">
                  Deom Malhotra
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}