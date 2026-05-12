"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  {
    name: "Kiran Arora",
    trip: "Amritsar Trip · 2024",
    rating: 5,
    text: "Booking our Amritsar trip through Malhotra Tours & Travels was a seamless experience. Excellent hotel arrangements, reliable transportation, and outstanding service made the journey truly memorable.",
  },

  {
    name: "Amisha",
    trip: "Vrindawan Family Trip",
    rating: 5,
    text: "Great service and we had a good experience with Malhotra's Tour & Travels. I would love to take more and more experiences in future. Thanks.",
  },

  {
    name: "Ankush Baghpat",
    trip: "Delhi to Udaipur Road Trip",
    rating: 5,
    text: "I travelled from Delhi to Udaipur by car with Malhotra's Tour & Travel and my experience was very good. I will surely recommend Malhotra's Tour & Travel for my future trips. Thanks a lot.",
  },
];

export function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[startIndex % reviews.length],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  return (
    <section
      id="testimonials"
      className="relative py-28 md:py-40 bg-secondary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-6">
            ✦ Travel stories
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-bold text-balance leading-[0.95] max-w-4xl mx-auto">
            Words from those who{" "}
            <span className="italic font-light text-accent">
              wandered with us.
            </span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleReviews.map((r, i) => (
              <motion.div
                key={`${r.name}-${startIndex}`}
                initial={{
                  opacity: 0,
                  y: 70,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -50,
                  scale: 0.94,
                }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="relative rounded-3xl bg-background p-8 md:p-10 shadow-elegant overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

                {/* Quote */}
                <motion.div
                  animate={{
                    rotate: [0, -3, 0],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative font-display text-7xl text-accent leading-none mb-4"
                >
                  "
                </motion.div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star
                      key={k}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="relative text-foreground/85 leading-relaxed mb-8 text-sm md:text-base">
                  {r.text}
                </p>

                {/* Footer */}
                <div className="border-t border-border pt-5">
                  <div className="font-display font-semibold text-lg">
                    {r.name}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {r.trip}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
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