"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const targets = useMemo(() => [25], []);
  const [years, setYears] = useState<number>(0);
  const started = useRef(false);
  const history = [
    {
      year: "2025",
      title: "VENTURING INTO COMMERCIAL DESIGN",
      desc: "Pine & Ivory was created to shape spaces that are smart, elegant, and lasting. Our roots lie in compact residential design.",
    },
    {
      year: "2023",
      title: "FIRST MAJOR RESIDENTIAL PROJECT",
      desc: "With a passion for timeless, useful design, new work took root. Our early focus was on small‑scale residential spaces.",
    },
    {
      year: "2016",
      title: "EXPANDING THE TEAM",
      desc: "Driven by purpose, we set out to build spaces that inspire, serve, and last. We began with humble home projects.",
    },
    {
      year: "1967",
      title: "HUMBLE BEGINNINGS",
      desc: "Pine & Ivory was founded with a vision to design thoughtful, functional, and timeless spaces. We started with small residential projects.",
    },
  ];
  useEffect(() => {
    const el = document.querySelector("[data-years]");
    if (!el || started.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          started.current = true;
          const start = performance.now();
          const duration = 1000;
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            setYears(Math.floor(targets[0] * t));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [targets]);

  return (
    <main className="min-h-screen">

      <Header />

      <section className="relative bg-[#F5F5F0] mt-32 md:mt-36 h-[220px] md:h-[260px] overflow-visible border-t-[2px] border-[#D4B896]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-serif text-[#D4B896]/40 leading-[1.1] select-none text-[18vw] md:text-[14vw]">IVORY</span>
        </div>
        <div className="relative h-full container mx-auto max-w-7xl px-4 border-0">
          <div className="h-full flex items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-serif text-black tracking-wide">ABOUT US</h1>
          </div>
        </div>
        
      </section>

      <section className="py-24 md:py-28 px-4 bg-[var(--pine-dark)]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="relative rounded-sm overflow-hidden h-64 md:h-80 lg:h-full">
              <Image src="/services/about us hero image.jpeg" alt="About us hero" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="bg-[#0f0f0f] border border-[var(--pine-gold)]/40 p-8 md:p-10 rounded-sm" data-years>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-7xl md:text-8xl font-serif text-[var(--pine-gold)] leading-none">{years}+</span>
                <span className="text-sm md:text-base text-white/70 tracking-wide">YEARS OF EXPERIENCE</span>
              </div>
              <div className="h-px bg-[var(--pine-gold)]/40 mb-6" />
              <p className="text-white/80 leading-relaxed">
                With over a decade in the interior design and furniture manufacturing industry, Pine & Ivory has been
                transforming spaces with elegance, functionality, and timeless craftsmanship. Born from a passion for
                design and innovation, we set out to create beautiful spaces and build quality furniture that is durable,
                aesthetically pleasing, and refined. Over the years, Pine & Ivory has worked on residential and commercial
                projects, delivering results that elevate everyday living. Our service covers full design, bespoke furniture
                manufacturing, and project execution. We combine creative vision with technical design expertise to bring
                ideas to life. Our commitment to integrity, precision, and high-end detailing is our signature.
              </p>
              <div className="mt-6">
                <a href="/services" className="inline-block bg-[var(--pine-gold)] hover:bg-[var(--pine-gold-light)] text-black px-6 py-3 rounded-sm font-medium tracking-wide transition-colors">OUR EXPERTISE</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#F8F7F4]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h3 className="text-xs tracking-[0.2em] text-[#dccfb4] font-sans font-medium uppercase mb-4">OUR HISTORY</h3>
            <h1 className="text-4xl md:text-5xl font-serif text-black tracking-tight">OUR HAPPY AND DOPE JOURNEY</h1>
          </div>
          <div>
            {history.map((item, index) => (
              <div key={item.title + index} className="flex group border-t border-[#dccfb4]/70 first:border-t-0">
                <div className="w-24 md:w-32 flex-shrink-0 text-right pt-12 pr-20 md:pr-32">
                  <span className="inline-block bg-[#F8F7F4] text-black px-3 py-1 rounded-sm border border-[#dccfb4]/80 shadow-sm font-sans font-bold text-sm md:text-base tracking-wide leading-none mt-1 mr-10 md:mr-12 relative z-10">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 border-l border-[#dccfb4]/70 pl-14 md:pl-24 pt-12 pb-12 md:pb-20 relative">
                  <div className="absolute -left-[5px] top-[57px] h-[9px] w-[9px] rounded-full bg-[#dccfb4]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h2 className="text-xl md:text-2xl font-serif font-medium mb-3 tracking-wide leading-none uppercase text-black">{item.title}</h2>
                  <p className="text-gray-700 font-sans leading-relaxed text-sm md:text-[15px] max-w-2xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (optional) */}

      <Footer />
    </main>
  );
}
