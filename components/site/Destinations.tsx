"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  BedDouble,
  Camera,
  Car,
  Expand,
  Ticket,
  UtensilsCrossed,
} from "lucide-react";
import { Lightbox } from "./Lightbox";

const destinations = [
  {
    name: "Kashmir",
    region: "Northern Valley",
    img: "./dest-kashmir.jpg",
    fact: "Drift across Dal Lake at sunrise on a wooden shikara.",
    tags: ["Houseboats", "Saffron fields", "Wazwan feast"],
  },
  {
    name: "Ladakh",
    region: "High Himalaya",
    img: "./dest-ladakh.jpg",
    fact: "Monasteries clinging to cliffs above the Indus river.",
    tags: ["Pangong Lake", "Khardung La", "Hemis festival"],
  },
  {
    name: "Rajasthan",
    region: "Royal Desert",
    img: "./dest-rajasthan.jpg",
    fact: "Camel caravans into golden Thar dunes at sundown.",
    tags: ["Jaisalmer fort", "Folk music", "Palace stays"],
  },
  {
    name: "Goa",
    region: "Tropical Coast",
    img: "./dest-goa.jpg",
    fact: "Sunset sessions where the Arabian Sea meets palm groves.",
    tags: ["Beach shacks", "Old Portuguese town", "Spice trails"],
  },
  {
    name: "Manali",
    region: "Pine Mountains",
    img: "./snow-cabins.jpeg",
    fact: "Snow-dusted cedar cabins beside the Beas river.",
    tags: ["Solang valley", "Old Manali cafés", "Snowfall stays"],
  },
  {
    name: "Himachal Eats",
    region: "Mountain Flavors",
    img: "./local-cuisine.jpeg",
    fact: "Steamed siddu with ghee — comfort food at 8,000 ft.",
    tags: ["Local cuisine", "Cooking classes", "Village stays"],
  },
  {
    name: "Shimla",
    region: "Colonial Hills",
    img: "./dest-shimla.jpg",
    fact: "Toy train rides through pine forests to a colonial hill town.",
    tags: ["Mall Road","Toy train","Heritage walks"],
  },
  {
    name: "Kedarnath",
    region: "Sacred Himalaya",
    img: "./dest-kedarnath.jpg",
    fact: "A timeless temple cradled by snow peaks and prayer flags.",
    tags: ["Char Dham yatra","Mountain trek","Spiritual stays"],
  },
];

const packageIncludes = [
  { icon: Car, label: "Transfers" },
  { icon: Camera, label: "Sightseeing" },
  { icon: BedDouble, label: "Luxury Stay" },
  { icon: UtensilsCrossed, label: "Meals" },
  { icon: Ticket, label: "Entry Passes" },
];

export function Destinations() {
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const a = destinations[active];

  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-28 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -top-40 right-0 h-[320px] w-[320px] sm:h-[500px] sm:w-[500px] rounded-full bg-accent/10 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-0 h-[260px] w-[260px] sm:h-[420px] sm:w-[420px] rounded-full bg-orange-400/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-14 md:mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 sm:mb-6 text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-accent font-semibold">
              ✦ Where we go
            </div>

            <h2 className="max-w-4xl text-balance font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1]">
              Places that{" "}
              <span className="font-light italic text-accent">
                change
              </span>{" "}
              the way you see the world.
            </h2>
          </motion.div>
        </div>

        {/* Main layout */}
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* Featured image */}
          <motion.button
            key={a.img}
            type="button"
            onClick={() => setLightboxIndex(active)}
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -4,
            }}
            className="group relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] text-left shadow-elegant lg:col-span-7"
          >
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:min-h-[620px]">
              <img
                src={a.img}
                alt={a.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Expand */}
              <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md"
                >
                  <Expand size={16} />
                </motion.div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10 text-cream">
                <div className="mb-2 sm:mb-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-accent">
                  {a.region}
                </div>

                <div className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
                  {a.name}
                </div>
              </div>
            </div>
          </motion.button>

          {/* Right content */}
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="flex flex-col justify-between rounded-[1.75rem] sm:rounded-[2rem] bg-primary p-5 sm:p-7 md:p-8 lg:p-10 text-primary-foreground lg:col-span-5"
          >
            <div>
              <div className="mb-4 sm:mb-6 font-display text-4xl sm:text-5xl leading-none text-accent">
                "
              </div>

              <p className="text-balance font-display text-xl sm:text-2xl md:text-3xl leading-snug">
                {a.fact}
              </p>

              {/* Includes */}
              <div className="mt-8 sm:mt-10">
                <div className="mb-4 text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-accent font-semibold">
                  Package Includes
                </div>

                <ul className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-2">
                  {packageIncludes.map(({ icon: Icon, label }, i) => (
                    <motion.li
                      key={label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.05,
                      }}
                      whileHover={{
                        y: -2,
                      }}
                      className="flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/10 px-3 py-3 backdrop-blur-sm"
                    >
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                        <Icon size={15} />
                      </div>

                      <span className="text-sm sm:text-[15px] text-cream/90">
                        {label}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {a.tags.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="rounded-full border border-cream/20 bg-cream/10 px-3 py-1.5 text-[11px] sm:text-xs"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#book"
              whileHover={{ x: 4 }}
              className="mt-8 sm:mt-10 inline-flex w-fit items-center gap-2 text-sm sm:text-base font-semibold text-accent"
            >
              Plan a {a.name} trip

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Thumbnail Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
          {destinations.map((d, i) => (
            <motion.button
              key={d.name}
              onClick={() =>
                active === i ? setLightboxIndex(i) : setActive(i)
              }
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
              }}
              whileHover={{
                y: -4,
              }}
              className={`group relative overflow-hidden rounded-2xl text-left transition-all duration-300 ${
                active === i
                  ? "ring-2 ring-accent ring-offset-2 sm:ring-offset-4 ring-offset-background"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              <div className="relative aspect-[4/5]">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 text-cream">
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-accent">
                    {d.region}
                  </div>

                  <div className="font-display text-base sm:text-lg font-semibold leading-tight">
                    {d.name}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        items={destinations.map((d) => ({
          src: d.img,
          type: "image",
          title: d.name,
          caption: `${d.region} — ${d.fact}`,
        }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={(i) => {
          setLightboxIndex(i);
          setActive(i);
        }}
      />
    </section>
  );
}