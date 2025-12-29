import HeroSection from "@/components/HeroSection";
import AcaraSection from "@/components/AcaraSection";
import GallerySection from "@/components/GallerySection";
import MessageSection from "@/components/MessageSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import { FloatingNavbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen px-4 md:px-[50px] pt-4 md:pt-[30px] bg-white">
      <FloatingNavbar />
      <HeroSection />
      <AcaraSection />
      <GallerySection />
      <MessageSection />
      <RSVPSection />
      <Footer />
    </main>
  );
}
