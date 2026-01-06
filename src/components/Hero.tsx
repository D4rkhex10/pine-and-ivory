"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [heroError, setHeroError] = useState(false);
  return (
    <section id="home" className="min-h-[75vh] bg-[#2d2d2d] pt-32 md:pt-36 pb-12 md:pb-16 px-4 flex items-center relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 relative z-10">
            <div className="space-y-2">
              <p className="text-[#D4B896] text-xs md:text-sm tracking-[0.2em] uppercase font-light">
                Quality Interior Service
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight uppercase">
                <span className="text-[#D4B896]">Timeless Spaces.</span>
                <br />
                <span className="text-white">Bespoke Furniture.</span>
              </h1>
            </div>

            <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
              We believe great design goes beyond beauty. It elevates everyday life.
              Whether it's a cozy home, a stylish workspace, or a luxurious commercial space.
            </p>

            <a href="#contact" className="bg-[#D4B896] hover:bg-[#E5D4BA] text-black px-6 md:px-8 py-3 md:py-4 rounded-sm font-medium text-sm md:text-base tracking-wide transition-colors transform hover:scale-[1.02] inline-flex items-center gap-2 group">
              BOOK A CONSULTATION
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Stats */}
            <div className="flex items-center gap-3 md:gap-4 pt-6 md:pt-8 border-t border-white/20">
              <div className="flex -space-x-2">
                <img
                  src="https://ext.same-assets.com/2282551275/343305297.jpeg"
                  alt="Team member"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#2d2d2d] object-cover"
                />
                <img
                  src="https://ext.same-assets.com/2282551275/4234242683.jpeg"
                  alt="Team member"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#2d2d2d] object-cover"
                />
                <img
                  src="https://ext.same-assets.com/2282551275/3405176005.jpeg"
                  alt="Team member"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#2d2d2d] object-cover"
                />
                <img
                  src="https://ext.same-assets.com/2282551275/1363408132.jpeg"
                  alt="Team member"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#2d2d2d] object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm md:text-base">20K+</p>
                <p className="text-white/60 text-xs md:text-sm">WORK DONE</p>
              </div>
            </div>
          </div>

            {/* Right Content - Hero Image */}
          <div className="relative hidden md:block">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl max-w-md w-full mx-auto">
              <Image
                src={heroError ? "/services/corporate.jpg" : "/services/hero-lamp.jpg"}
                alt={heroError ? "Luxurious living room interior with elegant, timeless furniture" : "Cozy bedside lamp and retro clock on nightstand"}
                fill
                priority
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="object-cover"
                onError={() => setHeroError(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
