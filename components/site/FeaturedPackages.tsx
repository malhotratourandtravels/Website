"use client";
import { motion } from "framer-motion";
import {
  Check,
  MapPin,
  Calendar,
  Star,
  Car,
  Camera,
  Hotel,
  Utensils,
  ArrowUpRight,
} from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Manali Escape",
    region: "Himachal Pradesh",
    duration: "3 Nights / 4 Days",
    price: "₹6,999/person",
    minimum: "Minimum 4 Travelers",
    rating: 4.9,
    reviews: 128,
    highlights: [
      "Snow mountains",
      "Solang adventure",
      "Riverside cafés",
      "Scenic drives",
    ],
    includes: [
      { icon: Car, label: "Transfers" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Hotel, label: "Stay" },
      { icon: Utensils, label: "Meals" },
    ],
    image: "linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)",
  },

  {
    id: 2,
    name: "Kashmir Retreat",
    region: "Kashmir",
    duration: "4 Nights / 5 Days",
    price: "₹12,999/person",
    minimum: "Minimum 4 Travelers",
    rating: 4.8,
    reviews: 95,
    highlights: [
      "Dal Lake stay",
      "Gulmarg ride",
      "Meadow views",
      "Kashmiri cuisine",
    ],
    includes: [
      { icon: Car, label: "Transfers" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Hotel, label: "Stay" },
      { icon: Utensils, label: "Meals" },
    ],
    image: "linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)",
  },

  {
    id: 3,
    name: "Kedarnath Yatra",
    region: "Uttarakhand",
    duration: "4 Nights / 5 Days",
    price: "₹8,999/person",
    minimum: "Minimum 4 Travelers",
    rating: 5.0,
    reviews: 156,
    highlights: [
      "Kedarnath temple",
      "Mountain trek",
      "Spiritual retreat",
      "Himalayan valleys",
    ],
    includes: [
      { icon: Car, label: "Transfers" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Hotel, label: "Stay" },
      { icon: Utensils, label: "Meals" },
    ],
    image: "linear-gradient(135deg, #DEB887 0%, #D2691E 100%)",
  },

  {
    id: 4,
    name: "Shimla Getaway",
    region: "Himachal Pradesh",
    duration: "4 Nights / 5 Days",
    price: "₹6,999/person",
    minimum: "Minimum 4 Travelers",
    rating: 4.7,
    reviews: 84,
    highlights: [
      "Mall Road strolls",
      "Colonial vibes",
      "Mountain views",
      "Toy train ride",
    ],
    includes: [
      { icon: Car, label: "Transfers" },
      { icon: Camera, label: "Sightseeing" },
      { icon: Hotel, label: "Stay" },
      { icon: Utensils, label: "Meals" },
    ],
    image: "linear-gradient(135deg, #9ACD32 0%, #2E8B57 100%)",
  },
];
export function FeaturedPackages() {
  return (
    <section
      id="packages"
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Ambient Background */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{
          y: [0, 40, 0],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-orange-400/5 blur-3xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 1,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            ✦ Curated Experiences
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-bold text-balance mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-accent">
              Packages
            </span>
          </h2>

          <p className="text-foreground/70 text-lg max-w-2xl leading-relaxed">
            Carefully curated travel experiences designed to combine comfort,
            adventure, local culture, and unforgettable memories.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 xl:gap-7">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
              }}
              whileHover={{
                y: -12,
              }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-500"
            >
              {/* Gradient Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(255,140,0,0.12), transparent 60%)",
                }}
              />

              {/* Top Gradient */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-44 opacity-20"
                style={{ background: pkg.image }}
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative p-6">
                {/* Rating */}
                <motion.div
                  className="inline-flex items-center gap-1 mb-5"
                  animate={{
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className={
                        idx < Math.floor(pkg.rating)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                      }
                    />
                  ))}

                  <span className="text-xs text-muted-foreground ml-2">
                    ({pkg.reviews} reviews)
                  </span>
                </motion.div>

                {/* Title */}
                <div className="mb-3">
                  <motion.h3
                    whileHover={{ x: 4 }}
                    className="font-display text-3xl font-bold text-foreground mb-2 transition-all"
                  >
                    {pkg.name}
                  </motion.h3>

                  <motion.div
                    className="flex items-center gap-2 text-accent text-sm"
                    whileHover={{ x: 4 }}
                  >
                    <MapPin size={14} />
                    {pkg.region}
                  </motion.div>
                </div>

                {/* Duration */}
                <motion.div
                  className="flex items-center gap-3 text-foreground/70 mb-6"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Calendar size={16} className="text-accent" />
                  <span className="text-sm">{pkg.duration}</span>
                </motion.div>
                {/* Pricing Info */}
                <motion.div
                  className="mb-3 flex flex-col gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <div className="rounded-2xl border border-accent/20 bg-accent/5 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Starting From
                    </p>

                    <div className="flex items-end justify-between gap-3 flex-wrap">
                      <h4 className="font-display text-2xl md:text-3xl font-bold text-accent leading-none">
                        {pkg.price}
                      </h4>

                      <span className="rounded-full bg-primary/5 border border-border px-3 py-1 text-xs sm:text-sm text-foreground/70">
                        {pkg.minimum}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Highlights */}
                <motion.div
                  className="border-t border-border pt-5 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    Highlights
                  </p>

                  <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-3">
                    {pkg.highlights.map((highlight, idx) => (
                      <motion.div
                        key={highlight}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.35 + idx * 0.08,
                        }}
                      >
                        <Check
                          size={14}
                          className="text-accent shrink-0"
                        />
                        <span className="text-sm text-foreground/80">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Includes */}
                <motion.div
                  className="border-t border-border pt-5 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    Includes
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {pkg.includes.map((item, idx) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.label}
                          whileHover={{
                            y: -3,
                            scale: 1.02,
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.45 + idx * 0.08,
                          }}
                          className="flex items-center gap-3 rounded-2xl border border-border bg-primary/5 px-4 py-3"
                        >
                          <div className="flex h-8 w-8 min-h-8 min-w-8 items-center justify-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/20">
                            <Icon size={16} />
                          </div>

                          <span className="text-sm text-foreground/80">
                            {item.label}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.a
                  href="#book"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group/btn flex items-center justify-between rounded-2xl bg-accent px-5 py-4 text-accent-foreground font-semibold overflow-hidden relative"
                >
                  <span>Explore Package</span>

                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.7 }}
                  />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}