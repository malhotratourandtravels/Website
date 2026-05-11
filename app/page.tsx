import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { FeaturedPackages } from "@/components/site/FeaturedPackages";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
// import { Team } from "@/components/site/Team";
import { Founder } from "@/components/site/Founder";
import { Destinations } from "@/components/site/Destinations";
// import { SeasonalOffers } from "@/components/site/SeasonalOffers";
import { Blog } from "@/components/site/Blog";
import { FAQ } from "@/components/site/FAQ";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { BookingForm } from "@/components/site/BookingForm";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground antialiased">
      
      <Hero />
      <Marquee />
      <About />
      <Services />
      <FeaturedPackages />
      <WhyChooseUs />
      <Founder/>
      <Destinations />
      {/* <SeasonalOffers /> */}
      <Blog />
      <FAQ />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <CTA />
      
    </main>
  );
}
