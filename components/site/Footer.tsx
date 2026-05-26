"use client";
import { Mail, Instagram, MapPin, Facebook, Youtube, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-accent/40">
              <img src="./logo.jpeg" alt="Malhotra's logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="font-display font-bold text-xl">Malhotra's Tour & Travel</div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent">We’ll help you to create memories</div>
            </div>
          </div>
          <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
            Crafting personal, unforgettable journeys across India and beyond — one careful detail at a time.
          </p>

          <div className="flex items-center gap-3 mt-7">
            <a
              href="https://www.instagram.com/malhotrastourandtravel"
              target="_blank"
              rel="noreferrer"
              className="group h-11 w-11 rounded-full border border-cream/15 bg-cream/5 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
            >
              <Instagram
                size={18}
                className="text-primary-foreground/70 group-hover:text-accent-foreground transition"
              />
            </a>

            <a
              href="https://www.facebook.com/share/15nAZcVXUEW/?mibextid=wwXIfr"
              className="group h-11 w-11 rounded-full border border-cream/15 bg-cream/5 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
            >
              <Facebook
                size={18}
                className="text-primary-foreground/70 group-hover:text-accent-foreground transition"
              />
            </a>

            <a
              href="https://wa.me/918796390456"
              className="group h-11 w-11 rounded-full border border-cream/15 bg-cream/5 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
            >
              <FaWhatsapp
                size={18}
                className="text-primary-foreground/70 group-hover:text-accent-foreground transition"
              />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-5">Explore</div>
          <ul className="space-y-3 text-primary-foreground/80">
            <li><a href="#about" className="hover:text-accent transition">About</a></li>
            <li><a href="#services" className="hover:text-accent transition">Services</a></li>
            <li><a href="#destinations" className="hover:text-accent transition">Destinations</a></li>
            <li><a href="#testimonials" className="hover:text-accent transition">Stories</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-5">Reach us</div>
          <ul className="space-y-4 text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <span>L-1/8 BASEMENT KH NO. 43/3/2 BLOCK L SANGAM VIHAR OPPOSITE SHREE RAM BARAT GHAR, ND-110080</span>
              {/* <span>532/1 Devli, Durga Vihar Bandh Road, Delhi - 110080</span> */}
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />

              <a
                href="tel:+918796390456"
                className="hover:text-accent transition"
              >
                +91 8796390456
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <a href="mailto:malhotratourandtravels2@gmail.com" className="hover:text-accent break-all">
                malhotratourandtravels2@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Malhotra's Tour & Travel. All rights reserved.</div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]">
            <span className="text-primary-foreground/40">Design & Developed by</span>

            <a
              href="https://itssolution.in"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-accent/80 hover:text-accent transition-all duration-300"
            >
              <span className="font-semibold tracking-[0.22em]">
                IT&apos;s Solution
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
