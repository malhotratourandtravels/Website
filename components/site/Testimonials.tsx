"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ananya & Rohan",
    trip: "Kashmir Honeymoon · 7 days",
    rating: 5,
    text: "From the houseboat in Srinagar to the snow at Gulmarg — every day felt thoughtfully arranged. Mr. Malhotra anticipated things we didn't even know to ask for.",
  },
  {
    name: "Karan Mehta",
    trip: "Spiti Circuit · 10 days",
    rating: 5,
    text: "Our group of five wanted adventure without the chaos. We got high passes, monasteries at dawn, and a driver who became a friend. Best trip we've ever taken.",
  },
  {
    name: "Priya Sharma",
    trip: "Rajasthan Heritage · 9 days",
    rating: 5,
    text: "Palaces, camels, and folk music under the stars. The boutique stays they picked were stunning. I'll be calling them again for Kerala next winter.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-40 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-6">✦ Travel stories</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-balance leading-[0.95] max-w-4xl mx-auto">
            Words from those who <span className="italic font-light text-accent">wandered with us.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl bg-background p-8 md:p-10 shadow-elegant"
            >
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                className="font-display text-7xl text-accent leading-none mb-4"
              >
                "
              </motion.div>
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-8">{r.text}</p>
              <div className="border-t border-border pt-5">
                <div className="font-display font-semibold text-lg">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.trip}</div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 md:mt-20"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-background px-6 py-10 md:px-12 md:py-14 text-center shadow-elegant">

            {/* Background glow */}
            <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Heading */}
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-4 text-balance">
                Loved your journey with us?
              </h3>

              {/* Text */}
              <p className="max-w-2xl mx-auto text-foreground/70 text-base md:text-lg leading-relaxed mb-8">
                Your feedback helps us create even better travel experiences.
                Read authentic guest reviews or share your own experience
                with Malhotra’s Tour & Travel.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                {/* Read Reviews */}
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="YOUR_GOOGLE_REVIEW_PAGE_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-accent/30 px-6 py-3 text-sm font-semibold text-accent hover:bg-accent/10 transition-all"
                >
                  Read Google Reviews
                </motion.a>

                {/* Write Review */}
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="YOUR_GOOGLE_WRITE_REVIEW_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:bg-accent/90 transition-all"
                >
                  Write a Review
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
