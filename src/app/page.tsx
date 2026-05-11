import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Cases } from "@/components/sections/Cases";
import { Methodology } from "@/components/sections/Methodology";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040B16] selection:bg-cyan-500/30 selection:text-cyan-100">
      <Header />
      <Hero />
      <About />
      <Services />
      <Cases />
      <Methodology />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
