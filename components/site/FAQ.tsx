"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    category: "Bookings & Planning",
    questions: [
      {
        q: "How far in advance should I book my trip?",
        a: "We recommend booking 4-6 weeks in advance for better package availability. However, we can accommodate last-minute bookings based on destination and season.",
      },
      {
        q: "Is there a minimum group size for tours?",
        a: "Most of our group tours require a minimum of 4-5 people. Solo travelers and couples can join existing groups or opt for customized private journeys.",
      },
      {
        q: "Do you offer customized itineraries?",
        a: "Absolutely! We specialize in personalized journeys. Share your preferences and budget, and we'll craft the perfect itinerary tailored to your needs.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        q: "What's included in the package price?",
        a: "Our packages typically include accommodation, meals, guided tours, transportation, and entry fees. Specific inclusions are detailed in each package description.",
      },
      {
        q: "What payment options do you accept?",
        a: "We accept bank transfers, credit cards, debit cards, and digital payment methods. A 30% advance is required to confirm bookings.",
      },
      {
        q: "Is there a cancellation policy?",
        a: "Yes, cancellations made 30+ days before travel receive full refunds. Between 15-29 days: 50% refund. Less than 15 days: no refund.",
      },
    ],
  },
  {
    category: "Travel & Safety",
    questions: [
      {
        q: "What vaccinations do I need?",
        a: "Vaccinations vary by destination. We recommend consulting your doctor 4-6 weeks before travel. We can provide specific guidance based on your itinerary.",
      },
      {
        q: "Is the trip insured?",
        a: "All our tours are fully insured. We recommend purchasing travel insurance for additional coverage including medical emergencies and trip cancellations.",
      },
      {
        q: "What fitness level is required?",
        a: "We offer trips for all fitness levels, from leisurely cultural tours to strenuous treks. We'll help you choose appropriate activities during planning.",
      },
    ],
  },
  {
    category: "Destination Info",
    questions: [
      {
        q: "What's the best time to visit these destinations?",
        a: "Each destination has optimal seasons. Summer (Jun-Aug) for mountains, Winter (Oct-Mar) for plains, and Monsoon (Jul-Sep) for greenery. We'll advise based on your preferences.",
      },
      {
        q: "Do I need special permits for restricted areas?",
        a: "Some destinations like Ladakh and parts of Northeast India require permits. We handle all documentation and permitting as part of our service.",
      },
      {
        q: "What's the internet connectivity like?",
        a: "Connectivity varies by region. Major cities have excellent coverage. Remote areas may have limited access. We inform travelers beforehand.",
      },
    ],
  },
];

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <section id="faq" className="relative py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-6">
            ✦ Questions Answered
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-balance mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-accent">Questions</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Everything you need to know about booking and experiencing your journey with us.
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: catIdx * 0.1 }}
            >
              {/* Category title */}
              <motion.h3
                className="font-display text-2xl font-bold text-foreground mb-4 pl-4 border-l-4 border-accent"
                whileHover={{ x: 8 }}
              >
                {category.category}
              </motion.h3>

              {/* Questions */}
              <div className="space-y-3">
                {category.questions.map((faq, qIdx) => {
                  const faqId = `${catIdx}-${qIdx}`;
                  const isOpen = openFaq === faqId;

                  return (
                    <motion.div
                      key={faqId}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: qIdx * 0.05 }}
                      className="rounded-2xl border border-border bg-card overflow-hidden hover:border-accent transition-all duration-300"
                    >
                      <motion.button
                        onClick={() => setOpenFaq(isOpen ? null : faqId)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
                        whileHover={{ paddingLeft: 24 }}
                      >
                        <span className="font-display font-semibold text-foreground text-left">{faq.q}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 ml-4"
                        >
                          <ChevronDown size={20} className="text-accent" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-border"
                          >
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ delay: 0.1 }}
                              className="px-6 py-4 text-foreground/70 leading-relaxed"
                            >
                              {faq.a}
                            </motion.p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl border border-accent/30 bg-gradient-to-r from-accent/10 to-orange-400/10 text-center"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Still have questions?</h3>
          <p className="text-foreground/70 mb-6">Get in touch with our team. We&apos;re always happy to help.</p>
          <motion.a
            href="mailto:malhotratourandtravels2@gmail.com"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold shadow-glow"
          >
            Contact us now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
