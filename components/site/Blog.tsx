"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  ArrowUpRight,
  BookOpen,
  Clock3,
  X,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in the Himalayas You Must Visit",
    excerpt:
      "Discover lesser-known Himalayan destinations, peaceful valleys, scenic trekking routes, and authentic mountain villages away from crowded tourist spots.",
    author: "Deom Malhotra",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    category: "Travel Tips",
    image: "/blog-himalaya.jpg",
    featured: true,
    content: `
The Himalayas are filled with breathtaking destinations that remain untouched by mainstream tourism. While places like Manali and Shimla attract large crowds every year, there are still hidden gems in the Himalayas offering peace, adventure, and authentic local experiences.

Tirthan Valley in Himachal Pradesh is one of the best offbeat destinations for nature lovers. Surrounded by pine forests, crystal-clear rivers, and scenic mountain trails, it is ideal for travelers seeking relaxation and adventure travel in India.

Another hidden Himalayan paradise is Chopta in Uttarakhand. Often called the “Mini Switzerland of India,” Chopta is famous for trekking, camping, and panoramic Himalayan sunrise views.

Traveling to lesser-known Himalayan destinations not only helps avoid crowds but also creates meaningful travel experiences connected to nature and local culture.
`,
  },

  {
    id: 2,
    title: "Sustainable Travel: Making a Positive Impact",
    excerpt:
      "Learn how responsible tourism and eco-friendly travel choices can protect destinations while supporting local communities.",
    author: "Priya Sharma",
    date: "Mar 12, 2024",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/blog-sustainable.jpg",
    content: `
Sustainable travel is becoming increasingly important as travelers seek ways to reduce their environmental impact while exploring the world.

One of the easiest ways to practice eco-friendly travel is by choosing local stays and sustainable hotels that support nearby communities.

Responsible tourism not only protects destinations but also creates richer and more authentic travel experiences.
`,
  },

  {
    id: 3,
    title: "Desert Safari in Rajasthan: A Complete Guide",
    excerpt:
      "Everything you need to know about camel safaris, desert camps, cultural performances, and luxury stays in Rajasthan.",
    author: "Aditya Kumar",
    date: "Mar 10, 2024",
    readTime: "7 min read",
    category: "Destination Guide",
    image: "/blog-desert.jpg",
    content: `
A Rajasthan desert safari is one of the most unforgettable travel experiences in India.

Jaisalmer is famous for camel safaris, luxury desert camps, jeep rides, and sunset views over the Thar Desert.

Whether you are planning a honeymoon trip or adventure getaway, Rajasthan offers culture, history, and unforgettable landscapes.
`,
  },

  {
    id: 4,
    title: "Packing Smart: Essential Tips for Adventure Travel",
    excerpt:
      "Expert travel packing tips for trekking, hiking, mountain tours, and outdoor adventure trips.",
    author: "Neha Patel",
    date: "Mar 8, 2024",
    readTime: "5 min read",
    category: "Travel Tips",
    image: "/blog-packing.jpg",
    content: `
Packing smart is essential for a comfortable adventure travel experience.

Layering clothes, carrying lightweight essentials, and using durable backpacks help travelers stay organized.

Smart packing allows travelers to enjoy journeys comfortably without unnecessary stress.
`,
  },

  {
    id: 5,
    title: "Cultural Immersion: Connecting with Local Communities",
    excerpt:
      "Discover meaningful ways to experience local traditions, authentic food, and community-driven travel experiences.",
    author: "Priya Sharma",
    date: "Mar 5, 2024",
    readTime: "6 min read",
    category: "Culture",
    image: "/blog-culture.jpg",
    content: `
Cultural immersion travel focuses on connecting with local traditions, cuisine, and lifestyles.

Exploring local markets, festivals, and food creates deeper and more memorable travel experiences.

Meaningful cultural tourism transforms travel into a personal and enriching journey.
`,
  },

  {
    id: 6,
    title: "Photography Tips: Capturing Travel Memories",
    excerpt:
      "Professional travel photography tips for capturing landscapes, people, architecture, and unforgettable moments.",
    author: "Deom Malhotra",
    date: "Mar 1, 2024",
    readTime: "7 min read",
    category: "Photography",
    image: "/blog-photography.jpg",
    content: `
Travel photography is about capturing stories, emotions, and unforgettable destinations.

Lighting, composition, and authentic moments create impactful travel photos.

Whether using a camera or smartphone, creativity is the key to memorable travel photography.
`,
  },
];

export function Blog() {
  const [selectedBlog, setSelectedBlog] = useState<
    (typeof blogPosts)[0] | null
  >(null);

  // Prevent background scroll on mobile when modal open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedBlog]);

  return (
    <>
      <section
        id="blog"
        className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-28"
      >
        {/* Background Glow */}
        <motion.div
          className="absolute bottom-0 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-accent/5 blur-3xl"
          animate={{ y: [0, 40, 0], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-5">
              ✦ Travel Insights
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1] mb-5 text-balance">
              Travel{" "}
              <span className="bg-gradient-to-r from-orange-400 to-accent bg-clip-text text-transparent">
                Stories & Tips
              </span>
            </h2>

            <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-foreground/70">
              Expert travel insights, destination guides, adventure travel
              tips, and inspiring tourism stories.
            </p>
          </motion.div>

          {/* FEATURED BLOG */}
          <motion.div
            onClick={() => setSelectedBlog(blogPosts[0])}
            whileHover={{ y: -4 }}
            className="group mb-8 md:mb-12 cursor-pointer overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-300 hover:border-accent"
          >
            <div className="grid lg:grid-cols-2">
              {/* IMAGE */}
              <div className="relative h-[240px] sm:h-[320px] lg:h-full min-h-[240px] overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-between p-5 sm:p-8 md:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.18em] font-semibold text-accent">
                      {blogPosts[0].category}
                    </span>

                    <span className="text-[10px] sm:text-xs font-semibold text-accent">
                      ★ Featured
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
                    {blogPosts[0].title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/70">
                    {blogPosts[0].excerpt}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <div className="space-y-2 text-xs sm:text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-accent" />
                      {blogPosts[0].author}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={14} className="text-accent" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>

                  <div className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full bg-accent text-accent-foreground shrink-0">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BLOG GRID */}
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {blogPosts.slice(1).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedBlog(post)}
                className="group cursor-pointer overflow-hidden rounded-[1.8rem] border border-border bg-card transition-all duration-300 hover:border-accent"
              >
                {/* IMAGE */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-6">
                  <span className="mb-4 inline-block rounded-full bg-accent/15 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.18em] font-semibold text-accent">
                    {post.category}
                  </span>

                  <h4 className="font-display text-xl sm:text-2xl font-bold leading-tight mb-3 transition-colors group-hover:text-accent">
                    {post.title}
                  </h4>

                  <p className="line-clamp-3 text-sm leading-relaxed text-foreground/70 mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-border pt-4 text-[11px] sm:text-xs text-foreground/60">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 text-center"
          >
            <motion.a
              href="#blog"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full border border-accent/30 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-accent transition-all hover:bg-accent/10"
            >
              <BookOpen size={18} />
              Explore all articles
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* MODAL / OVERLAY */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/75 backdrop-blur-xl"
          >
            {/* BACKDROP */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedBlog(null)}
            />

            {/* MODAL */}
            <div className="absolute inset-0 overflow-y-auto">
              <div className="min-h-full px-0 sm:px-6 py-0 sm:py-10">
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.35 }}
                  className="relative mx-auto w-full max-w-5xl overflow-hidden bg-card sm:rounded-[2rem] border border-border"
                >
                  {/* CLOSE */}
                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-accent"
                  >
                    <X size={18} />
                  </button>

                  {/* HERO IMAGE */}
                  <div className="relative h-[240px] sm:h-[340px] md:h-[420px] overflow-hidden">
                    <img
                      src={selectedBlog.image}
                      alt={selectedBlog.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 md:p-10">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                        <span className="rounded-full bg-accent px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-accent-foreground">
                          {selectedBlog.category}
                        </span>

                        <span className="text-xs sm:text-sm text-white/70">
                          {selectedBlog.readTime}
                        </span>
                      </div>

                      <h2 className="max-w-4xl font-display text-2xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
                        {selectedBlog.title}
                      </h2>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-8 md:p-12">
                    {/* META */}
                    <div className="mb-8 flex flex-wrap items-center gap-5 border-b border-border pb-5 text-xs sm:text-sm text-foreground/60">
                      <div className="flex items-center gap-2">
                        <User size={14} className="text-accent" />
                        {selectedBlog.author}
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-accent" />
                        {selectedBlog.date}
                      </div>
                    </div>

                    {/* BLOG CONTENT */}
                    <div className="max-w-none">
                      {selectedBlog.content
                        .trim()
                        .split("\n\n")
                        .map((para, i) => (
                          <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.04 }}
                            className="mb-6 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-foreground/80"
                          >
                            {para}
                          </motion.p>
                        ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}