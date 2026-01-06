"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [imageError, setImageError] = useState(false);
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-[#F5F5F0]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content - Storefront Image */}
          <div>
            <div className="mb-6">
              {imageError ? (
                <img
                  src="https://ugc.same-assets.com/yQUEqYZeqPsrCtzxmj7W7yxO5zHPkCAW.png"
                  alt="Pine & Ivory storefront"
                  className="w-full h-auto rounded-sm shadow-lg object-cover"
                />
              ) : (
                <Image
                  src="/about.jpg"
                  alt="Pine & Ivory storefront"
                  width={1200}
                  height={800}
                  priority
                  className="w-full h-auto rounded-sm shadow-lg object-cover"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
            <p className="text-[#D4B896] text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
              About Us
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-black leading-tight">
              A UNIQUE COMBINATION OF ENGINEERING & ART.
            </h2>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 tracking-wide mb-3 uppercase">CAPABILITIES</p>
              <div className="bg-[#f6f2ec] border border-[#D4B896]/40 p-6 md:p-8 rounded-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-[#D4B896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-black mb-1">1200+</p>
                    <p className="text-gray-600">Interior solutions given</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 tracking-wide mb-3 uppercase">RATINGS</p>
              <div className="bg-[#f6f2ec] border border-[#D4B896]/40 p-6 md:p-8 rounded-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-[#D4B896]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-black mb-1">4.9</p>
                    <p className="text-gray-600">Out of rating 5.0</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 tracking-wide mb-3 uppercase">READY BUILT</p>
              <div className="bg-[#2d2d2d] p-6 md:p-8 rounded-sm border-l-4 border-[#D4B896]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-[#D4B896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-white mb-1">1200+</p>
                    <p className="text-white/70">Interior solutions given</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
