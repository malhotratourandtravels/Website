"use client";
import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxItem = {
  src: string;
  type?: "image" | "video";
  title: string;
  caption?: string;
};

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;
  const current = open ? items[index!] : null;

  const next = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % items.length);
  }, [index, items.length, onIndexChange]);

  const prev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + items.length) % items.length);
  }, [index, items.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev, onClose]);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm grid place-items-center p-4 md:p-10"
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 h-12 w-12 grid place-items-center rounded-full bg-cream/10 hover:bg-accent text-cream hover:text-accent-foreground transition-colors z-10"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div className="absolute top-8 left-6 text-cream/70 text-xs uppercase tracking-[0.3em] font-semibold">
            {(index! + 1).toString().padStart(2, "0")} / {items.length.toString().padStart(2, "0")}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 h-12 w-12 md:h-14 md:w-14 grid place-items-center rounded-full bg-cream/10 hover:bg-accent text-cream hover:text-accent-foreground transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 h-12 w-12 md:h-14 md:w-14 grid place-items-center rounded-full bg-cream/10 hover:bg-accent text-cream hover:text-accent-foreground transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>

          {/* Media */}
          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex-1 min-h-0 flex items-center justify-center">
              {current.type === "video" ? (
                <video
                  key={current.src}
                  src={current.src}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="max-h-[70vh] max-w-full rounded-2xl shadow-elegant"
                />
              ) : (
                <img
                  src={current.src}
                  alt={current.title}
                  className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-elegant"
                />
              )}
            </div>

            {/* Caption */}
            <div className="text-center max-w-2xl">
              <div className="font-display text-2xl md:text-3xl text-cream font-semibold">
                {current.title}
              </div>
              {current.caption && (
                <div className="mt-2 text-cream/70 text-sm md:text-base">{current.caption}</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
