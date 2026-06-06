import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CropDetection from "@/components/CropDetection";
import Features from "@/components/Features";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CropDetection />
      <Features />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  );
}
