"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import Icon from "@mui/material/Icon";
import { IconCalendar, IconHeart } from "@tabler/icons-react";

const images = [
    "/images/hero.jpg",
    "/images/hero_2.jpg",
    "/images/hero_3.jpg",
    "/images/hero_4.jpg",
];

export default function HeroCarousel() {
    return (
        <section
            id="beranda"
            className="relative h-[90vh] w-full overflow-hidden rounded-3xl"
        >
            {/* Carousel */}
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop
                className="h-full w-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={src}
                            alt={`Hero ${index + 1}`}
                            fill
                            priority={index === 0}
                            className="object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55 z-10" />

            {/* Text */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <span className="mb-2 text-base md:text-lg tracking-widest text-yellow-300">
                    REUNI ALUMNI
                </span>

                <h1 className="font-cormorant font-bold text-4xl md:text-7xl tracking-widest text-yellow-400 drop-shadow-lg">
                    AGORA LA FAMILIA
                </h1>
            </div>

            {/* Glass School Badge */}
            <div className="absolute top-3 left-3 md:top-6 md:left-6 z-30">
                <div
                    className="flex items-center gap-2 md:gap-3 rounded-xl md:rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 px-3 md:px-5 py-2 md:py-3 shadow-lg">
                    <Image
                        src="/images/logo.png"
                        alt="SMPN 2 Panumbangan"
                        width={28}
                        height={28}
                        className="w-7 h-7 md:w-8 md:h-8"
                    />
                    <span className="text-xs md:text-sm font-semibold text-white">
                        SMPN 2 Panumbangan
                    </span>
                </div>
            </div>

            {/* Glass School Badge */}
            <div className="absolute bottom-3 right-3 md:bottom-6 md:right-6 z-30">            
                <div
                    className="flex items-center gap-2 md:gap-3 rounded-xl md:rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 px-3 md:px-5 py-2 md:py-3 shadow-lg">
                    <IconCalendar className="text-white w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-xs md:text-sm font-semibold text-white">
                        Sabtu, 12 Juli 2025
                    </span>
                </div>
                
            </div>

        </section>
    );
}
