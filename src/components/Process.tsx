"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Book Appointment",
      description: "From full-home makeovers to single-room transformations, we start with your vision.",
    },
    {
      number: "02",
      title: "Get a Call Back",
      description: "A specialized decorator enhances your style through curated furnishings and palettes.",
    },
    {
      number: "03",
      title: "Get Your Work Done",
      description: "The whole area feels fresh and cozy. Every design choice is executed to perfection.",
    },
  ];

  const logos = [
    { src: "/brands/sterling.svg", alt: "Sterling" },
    { src: "/brands/buhler.svg", alt: "Buhler" },
    { src: "/brands/edves.svg", alt: "Edves" },
    { src: "/brands/smile.svg", alt: "Smile" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fillHeight, setFillHeight] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>("[data-step]"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-step-index")) || 0;
            setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.1 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const update = () => {
      const tl = timelineRef.current;
      const step = stepRefs.current[activeIndex];
      if (!tl) return;
      const tlRect = tl.getBoundingClientRect();
      let h = 0;
      if (step) {
        const sRect = step.getBoundingClientRect();
        h = Math.max(0, Math.min(tlRect.height, sRect.top - tlRect.top + sRect.height / 2));
      }
      setFillHeight(h);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-[#2d2d2d]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-[#D4B896] text-xs tracking-[0.25em] uppercase mb-3">Our Process</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-4">
              WE CRAFT DATA-DRIVEN INTERIOR STRATEGIES
              <br />
              FOR A
              <br />
              <span className="text-[#D4B896]">LIVING HAVEN.</span>
            </h2>
            <p className="text-white/70 max-w-xl mb-6">
              We move beyond simple decoration to create spaces that breathe, inspire, and endure.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#D4B896] hover:bg-[#E5D4BA] text-black px-6 py-3 rounded-sm font-medium tracking-wide transition-colors">
              START YOUR PROJECT
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />
            <div className="absolute left-8 top-0 w-[2px] bg-[#D4B896] transition-[height] duration-300" style={{ height: fillHeight }} />
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  data-step
                  data-step-index={index}
                  className={`relative pl-20 pb-10 border-b border-white/10 transition-opacity ${
                    activeIndex === index ? "opacity-100" : "opacity-40"
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                >
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-[#1f1f1f] ring-1 ring-[#D7C3A0]/40 flex items-center justify-center">
                    <span className="text-[#D7C3A0] font-serif text-lg">{step.number}</span>
                  </div>
                  <h3 className={`font-serif text-2xl leading-tight mb-2 transition-colors ${
                    activeIndex === index ? "text-[#D4B896]" : "text-white"
                  }`}>{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-6">
            <h3 className="text-[#D4B896] text-xs tracking-[0.25em] uppercase mb-3">OUR CLIENTS</h3>
          </div>
          <div className="marquee mx-auto w-[calc(5*160px+4*48px)]">
            <div className="marquee-track justify-center">
              {[...logos, ...logos].map((logo, idx) => (
                <Image
                  key={`${logo.alt}-${idx}`}
                  src={logo.src}
                  alt={`${logo.alt} logo`}
                  width={160}
                  height={48}
                  className="h-10 w-[160px] object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
