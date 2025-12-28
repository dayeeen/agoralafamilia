import HeroSection from "@/components/HeroSection";
import AcaraSection from "@/components/AcaraSection";
import GallerySection from "@/components/GallerySection";
import MessageSection from "@/components/MessageSection";
import Footer from "@/components/Footer";
import { FloatingNavbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen p-[50px] pt-[30px] bg-white">
      <FloatingNavbar />
      <HeroSection />
      <AcaraSection />
      <GallerySection />
      <MessageSection />
      <Footer />
    </main>
  );
}
