"use client";
import { motion } from "framer-motion";
import { Award, Users, MapPin, Zap, Heart, Shield } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expert Guides",
    description: "Certified and experienced guides who know every corner of their destinations inside out.",
    stat: "15+",
    statLabel: "Years of expertise",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Custom itineraries tailored to your preferences, pace, and travel style.",
    stat: "5000+",
    statLabel: "Happy travelers",
  },
  {
    icon: MapPin,
    title: "Hidden Gems",
    description: "Exclusive access to off-the-beaten-path locations and authentic local experiences.",
    stat: "50+",
    statLabel: "Curated destinations",
  },
  {
    icon: Zap,
    title: "24/7 Support",
    description: "Round-the-clock assistance before, during, and after your journey for peace of mind.",
    stat: "100%",
    statLabel: "Satisfaction rate",
  },
  {
    icon: Heart,
    title: "Sustainable Travel",
    description: "Committed to responsible tourism that respects local communities and environment.",
    stat: "1000+",
    statLabel: "Trees planted",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Fully insured trips with safety protocols and emergency support systems in place.",
    stat: "0",
    statLabel: "Incidents (track record)",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(0deg, currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            ✦ Why Choose Us
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-balance mb-6">
            The Malhotra's <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-accent">Difference</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            We don't just organize trips. We craft transformative journeys that create lasting memories and meaningful connections.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative rounded-2xl bg-card border border-border p-8 hover:border-accent transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                    whileHover={{ scale: 1.15, rotate: 0 }}
                  >
                    <div className="h-14 w-14 rounded-xl bg-accent/15 grid place-items-center">
                      <Icon className="text-accent" size={24} />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="font-display text-2xl font-bold mb-3 text-foreground"
                    whileHover={{ x: 4 }}
                  >
                    {reason.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
                    {reason.description}
                  </p>

                  {/* Stat */}
                  <motion.div
                    className="pt-6 border-t border-border"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    <motion.div
                      className="font-display text-3xl font-bold text-accent mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      {reason.stat}
                    </motion.div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {reason.statLabel}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
