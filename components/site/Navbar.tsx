"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Stories" },
  { href: "#book", label: "Book" },
];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="h-11 w-11 rounded-full overflow-hidden ring-2 ring-accent/40 group-hover:ring-accent transition-all">
            <img src="./logo.jpeg" alt="Malhotra's Tour & Travel" className="h-full w-full object-cover" />
          </div>
          <div className="sm:block leading-tight">
            <div className={`font-display font-bold text-base ${scrolled ? "text-foreground" : "text-cream"}`}>
              Malhotra's
            </div>
            <div className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-cream/70"}`}>
              Tour & Travel
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-cream/90 hover:text-cream"
                } group`}
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/malhotrastourandtravel"
            target="_blank"
            rel="noreferrer"
            className={`h-9 w-9 grid place-items-center rounded-full border transition ${scrolled
              ? "border-border hover:bg-accent hover:border-accent hover:text-accent-foreground"
              : "border-cream/30 hover:border-accent text-cream hover:bg-accent hover:border-accent"
              }`}
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918796390456"
            target="_blank"
            rel="noreferrer"
            className={`h-9 w-9 grid place-items-center rounded-full border transition ${scrolled
              ? "border-border hover:bg-accent hover:border-accent hover:text-accent-foreground"
              : "border-cream/30 hover:border-accent text-cream hover:bg-accent hover:border-accent"
              }`}
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={16} />
          </a>

          {/* CTA */}
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105 shadow-glow"
          >
            <Mail size={14} /> Plan trip
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden h-10 w-10 grid place-items-center rounded-full ${scrolled ? "text-foreground bg-muted" : "text-cream bg-cream/10"
            }`}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <nav className="px-6 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg font-display border-b border-border/50"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-accent-foreground"
              >
                <Mail size={16} /> Plan your trip
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
