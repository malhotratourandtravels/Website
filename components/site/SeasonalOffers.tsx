"use client";
import { motion } from "framer-motion";
import { Zap, Clock, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const offers = [
  {
    id: 1,
    title: "Summer Mountain Escape",
    description: "Experience the majestic peaks during the best trekking season",
    destination: "Himalayas",
    discount: "25%",
    originalPrice: "₹60,000",
    discountedPrice: "₹45,000",
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    color: "from-blue-400 to-blue-600",
    features: ["Peak season access", "Expert guides", "Altitude acclimatization"],
  },
  {
    id: 2,
    title: "Monsoon Valley Retreat",
    description: "Lush landscapes and misty mountains in their full glory",
    destination: "Western Ghats",
    discount: "30%",
    originalPrice: "₹40,000",
    discountedPrice: "₹28,000",
    validUntil: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
    color: "from-emerald-400 to-emerald-600",
    features: ["Green landscapes", "Waterfall visits", "Photography ops"],
  },
  {
    id: 3,
    title: "Winter Desert Festival",
    description: "Golden dunes and royal palaces under clear winter skies",
    destination: "Rajasthan",
    discount: "20%",
    originalPrice: "₹50,000",
    discountedPrice: "₹40,000",
    validUntil: new Date(Date.now() + 40 * 24 * 60 * 60 * 1000),
    color: "from-amber-400 to-orange-600",
    features: ["Camel safari", "Palace tours", "Cultural shows"],
  },
  {
    id: 4,
    title: "Spring Bloom Paradise",
    description: "Wildflower meadows and perfect weather for exploration",
    destination: "Kashmir",
    discount: "28%",
    originalPrice: "₹55,000",
    discountedPrice: "₹39,600",
    validUntil: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000),
    color: "from-pink-400 to-rose-600",
    features: ["Flower fields", "Houseboat stays", "Local markets"],
  },
];

function CountdownTimer({ validUntil }: { validUntil: Date }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = validUntil.getTime() - now;

      if (distance > 0) {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [validUntil]);

  return (
    <div className="flex items-center gap-3">
      <Clock size={14} className="text-accent" />
      <span className="text-xs font-mono text-foreground/70">
        {time.days}d {time.hours}h {time.minutes}m
      </span>
    </div>
  );
}

export function SeasonalOffers() {
  return (
    <section id="offers" className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/5 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, -60, 0], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            <Zap size={14} />
            Limited Time Offers
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-balance mb-6">
            Seasonal <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-accent">Offers</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Incredible deals on our most popular destinations. Book now and save big!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -16, scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-[0_40px_100px_color-mix(in_oklab,_var(--accent)_30%,_transparent)]"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className={`absolute top-4 right-4 bg-gradient-to-br ${offer.color} px-4 py-2 rounded-full text-accent-foreground text-sm font-bold shadow-lg z-10`}
              >
                {offer.discount} OFF
              </motion.div>

              {/* Header gradient */}
              <motion.div
                className={`relative h-32 bg-gradient-to-br ${offer.color} overflow-hidden`}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                {/* Animated accent elements */}
                <motion.div
                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Content */}
              <div className="relative p-6">
                {/* Title and destination */}
                <motion.div className="mb-4" whileHover={{ x: 4 }}>
                  <motion.h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {offer.title}
                  </motion.h3>
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                    <MapPin size={14} />
                    {offer.destination}
                  </div>
                </motion.div>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {offer.description}
                </p>

                {/* Pricing */}
                <motion.div
                  className="mb-4 p-4 rounded-xl bg-primary/5 border border-border"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display text-2xl font-bold text-accent">
                      {offer.discountedPrice}
                    </span>
                    <span className="text-sm text-foreground/50 line-through">
                      {offer.originalPrice}
                    </span>
                  </div>
                  <CountdownTimer validUntil={offer.validUntil} />
                </motion.div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {offer.features.map((feature) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-2 text-foreground/70 text-xs"
                      whileHover={{ x: 4 }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full bg-gradient-to-r ${offer.color} text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-shadow`}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 md:p-12 rounded-3xl border border-accent/30 bg-gradient-to-r from-accent/10 via-orange-400/10 to-accent/10 text-center"
        >
          <h3 className="font-display text-3xl font-bold text-foreground mb-4">Don't miss out on these exclusive deals!</h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            These limited-time offers are designed to give you the best value for your dream journey. Spaces are filling up fast.
          </p>
          <motion.a
            href="#book"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold shadow-glow hover:shadow-[0_20px_60px_color-mix(in_oklab,_var(--accent)_60%,_transparent)] transition-shadow"
          >
            <Zap size={18} />
            Claim your offer today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
