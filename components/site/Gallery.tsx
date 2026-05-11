"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Expand } from "lucide-react";
import { Lightbox, LightboxItem } from "./Lightbox";

// Royalty-free sample videos (public CDN)
const VID_MOUNTAIN =
  "/video/347325_small.mp4";
const VID_RIVER =
  "/video/IMG_1819.MP4";
const VID_ROAD =
  "/video/The long winding road.mp4";

const items: (LightboxItem & {
  span?: string;
  poster?: string;
})[] = [
    {
      src: "./gallery-cliff.jpg",
      type: "image",
      title: "Edge of the world",
      caption: "Sunrise over the Parvati valley — moments worth the climb.",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: VID_MOUNTAIN,
      type: "video",
      title: "Drone over the peaks",
      caption: "A morning flight above the great Himalayan range.",
      poster: "./gallery-road.jpg",
    },
    {
      src: "./gallery-flags.jpg",
      type: "image",
      title: "Prayer flags, Ladakh",
      caption: "Color against the cold blue of a 12,000 ft sky.",
    },
    {
      src: "./gallery-stars.jpg",
      type: "image",
      title: "Under a milky sky",
      caption: "Camp nights in Spiti — silence loud enough to hear.",
      span: "md:col-span-2",
    },
    {
      src: VID_RIVER,
      type: "video",
      title: "River songs",
      caption: "Glacier-fed streams cutting through the valley.",
      poster: "./snow-road.jpeg",
    },
    {
      src: "./mountains-group.jpeg",
      type: "image",
      title: "The summit team",
      caption: "Travelers who became friends on the trail.",
    },
    {
      src: VID_ROAD,
      type: "video",
      title: "The long winding road",
      caption: "Mountain switchbacks toward Khardung La.",
      poster: "./winding-road.jpg",
      span: "md:col-span-2",
    },
    {
      src: "./snow-cabins.jpeg",
      type: "image",
      title: "Cedar cabins",
      caption: "Snow-dusted nights in Old Manali.",
    },
    {
      src: "./local-cuisine.jpeg",
      type: "image",
      title: "Mountain flavors",
      caption: "Steamed siddu and butter tea after a long trek.",
    },
    {
      src: "./mountains.jpg",
      type: "image",
      title: "Alpenglow on the Karakoram",
      caption: "The first light of dawn hitting the jagged teeth of the high Himalayas.",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "./video/kashmir.mp4",
      type: "video",
      title: "Mist over Neelum Valley",
      caption: "Waking up to clouds dancing through the cedar forests and terraced homes.",
      poster: "./kashmir-thumbnail.jpg", // Suggested: a frame from 00:01
    },
    {
      src: "./video/night-trails.mp4",
      type: "video",
      title: "Celestial Wayfarers",
      caption: "Long exposures and longer nights under the Spiti star-scape.",
      poster: "./night-trails-thumbnail.png", // Suggested: a frame from 00:05
    },
    {
      src: "./video/IMG_2700.MP4",
      type: "video",
      title: "The White-Out at Rohtang",
      caption: "Caught in a heavy spring blizzard while crossing the mountain pass.",
      poster: "./snow-thumbnail.png", // Suggested: a frame from 00:04
      span: "md:col-span-2",
    },
    {
    src: "./video/revier rafting.mp4",
    type: "video",
    title: "White water rush",
    caption: "Pushing off into the Ganges — where the current dictates the pace.",
    poster: "./rafting-thumbnail.jpg", // Suggested: a frame from 00:11 showing the boats and river
    span: "md:col-span-2",
  },
  ];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-40 bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-50 bg-gradient-deep" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-6">
              ✦ Field notes
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] text-balance max-w-3xl">
              Postcards from <span className="italic font-light text-accent">the road</span>.
            </h2>
          </div>
          <p className="text-cream/70 max-w-md text-lg">
            A living gallery of moments captured on our trips — tap any frame to step inside.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-cream/5 ${it.span ?? ""}`}
              aria-label={`Open ${it.title}`}
            >
              {it.type === "video" ? (
                <>
                  <img
                    src={it.poster}
                    alt={it.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/30" />
                  <div className="absolute inset-0 grid place-items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-accent/95 grid place-items-center shadow-glow"
                    >
                      <Play className="text-accent-foreground ml-1" size={28} fill="currentColor" />
                    </motion.div>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={it.src}
                    alt={it.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full bg-cream/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Expand size={14} className="text-cream" />
                  </div>
                </>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-left">
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent mb-1">
                  {it.type === "video" ? "Film" : "Photo"}
                </div>
                <div className="font-display text-base md:text-xl font-semibold text-cream leading-tight">
                  {it.title}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        items={items.map(({ src, type, title, caption }) => ({ src, type, title, caption }))}
        index={active}
        onClose={() => setActive(null)}
        onIndexChange={setActive}
      />
    </section>
  );
}
