import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Methodology } from "@/components/sections/Methodology";
import { Cases } from "@/components/sections/Cases";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark selection:bg-brand-cyan/30 selection:text-brand-cyan">
      <Header />
      <Hero />
      <Cases />
      <About />
      <Services />
      <Methodology />
      <Testimonials />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
