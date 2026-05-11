"use client";
import { motion } from "framer-motion";
import { MapPin, Compass, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant"
          >
            <img src="./mountains-group.jpeg" alt="Travelers in the Himalayas" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60, x: 40 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-10 -right-4 md:-right-12 w-2/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant border-8 border-background"
          >
            <img src="./snow-road.jpeg" alt="Mountain road" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-6"
          >
            ✦ Our Story
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-[0.95]"
          >
            Journeys that <span className="italic font-light text-accent">stay with you</span> long after you return.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
            Discover the world with journeys designed to inspire, relax, and excite. Our tour and travel services bring you closer to breathtaking landscapes, vibrant cultures, and unforgettable experiences — all crafted with care and attention to detail.
          </motion.p>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              { icon: Compass, label: "Explore", text: "50+ destinations curated by locals" },
              { icon: Heart, label: "Care", text: "Every itinerary built around you" },
              { icon: MapPin, label: "Roots", text: "Based in Delhi, traveling everywhere" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-5 hover:border-accent transition"
              >
                <item.icon className="text-accent mb-3" size={22} />
                <div className="font-display font-semibold text-lg">{item.label}</div>
                <div className="text-sm text-muted-foreground mt-1">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
