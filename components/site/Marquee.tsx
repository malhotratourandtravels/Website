"use client";
const items = [
  "Himalayan Treks",
  "Kashmir Valleys",
  "Rajasthan Royals",
  "Goa Shores",
  "Spiti Adventures",
  "Ladakh Monasteries",
  "Kerala Backwaters",
  "Sikkim Skies",
];

export function Marquee() {
  return (
    <section className="relative bg-primary text-primary-foreground py-8 overflow-hidden border-y border-primary/20">
      <div className="marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-16 shrink-0">
            <span className="font-display text-3xl md:text-5xl italic font-light">{item}</span>
            <span className="text-accent text-2xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
