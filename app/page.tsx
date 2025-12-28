import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import MessageSection from "@/components/MessageSection";
import Footer from "@/components/Footer";
import { FloatingNavbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen p-[50px] pt-[25px] bg-white">
      <FloatingNavbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <MessageSection />
      <Footer />
    </main>
  );
}
