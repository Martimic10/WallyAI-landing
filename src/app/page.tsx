import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import VerticalGallery from "../components/VerticalGallery";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050507] text-white">
      <Navbar />
      <Hero />
      <Features />
      <VerticalGallery />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
