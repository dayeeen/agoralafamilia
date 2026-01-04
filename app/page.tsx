'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from "@/components/HeroSection";
import AcaraSection from "@/components/AcaraSection";
import GallerySection from "@/components/GallerySection";
import MessageSection from "@/components/MessageSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import { FloatingNavbar } from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <main className="min-h-screen px-4 md:px-[50px] pt-4 md:pt-[30px] bg-white">
      <FloatingNavbar />
      <div data-aos="fade-up"><HeroSection /></div>
      <div data-aos="fade-up"><AcaraSection /></div>
      <div data-aos="fade-up"><GallerySection /></div>
      <div data-aos="fade-up"><MessageSection /></div>
      <div data-aos="fade-up"><RSVPSection /></div>
      <div data-aos="fade-up"><Footer /></div>
    </main>
  );
}
