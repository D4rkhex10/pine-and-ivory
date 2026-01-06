"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [resolvedSrc, setResolvedSrc] = useState<Record<string, string>>({});
  const services = [
    {
      slug: "furniture",
      number: "01",
      title: "FURNITURE",
      description: "In today's competitive business environment, the design of commercial interiors plays a crucial role",
      details: "Custom furniture solutions tailored to your space and style. From modern minimalist pieces to classic elegant designs.",
      image: "/services/furniture.jpg",
      fallback: "/services/furniture.jpg",
    },
    {
      slug: "interior-decoration",
      number: "02",
      title: "INTERIOR DECORATION",
      description: "Strategic use of color and lighting can significantly impact employee mood and customer experience.",
      details: "Complete interior decoration services including color consultation, lighting design, and accessory selection.",
      image: "/services/interior designbackground.jpg",
      fallback: "/services/corporate.jpg",
    },
    {
      slug: "corporate-decor",
      number: "03",
      title: "CORPORATE DECOR",
      description: "Our 3D Rendering for Interior Design service brings your design concepts to life with photorealistic visualizations.",
      details: "Professional office and corporate space design that enhances productivity and reflects your brand identity.",
      image: "/services/corporate.jpg",
      fallback: "/services/corporate.jpg",
    },
    {
      slug: "smart-home",
      number: "04",
      title: "SMART HOME SOLUTIONS",
      description: "Smart Home Solutions: The Backbone of Modern Living",
      details: "Integrate cutting-edge technology into your home design for comfort, security, and energy efficiency.",
      image: "/services/smarthome-solutions-background.jpg",
      fallback: "/services/furniture.jpg",
    },
  ];

  useEffect(() => {
    const check = async (url: string) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        return res.ok;
      } catch {
        return false;
      }
    };
    const init = async () => {
      const entries = await Promise.all(
        services.map(async (s) => {
          const ok = await check(s.image);
          return [s.slug, ok ? s.image : s.fallback] as const;
        })
      );
      setResolvedSrc(Object.fromEntries(entries));
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative bg-[#F5F5F0] mt-32 md:mt-36 h-[220px] md:h-[260px] overflow-visible border-t-[2px] border-[#D4B896]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-serif text-[#D4B896]/40 leading-[1.1] select-none text-[18vw] md:text-[14vw]">IVORY</span>
        </div>
        <div className="relative h-full container mx-auto max-w-7xl px-4 border-0">
          <div className="h-full flex items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-serif text-black tracking-wide">COMPANY EXPERTISE</h1>
          </div>
        </div>
        
      </section>

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 bg-[#212121]">
        <div className="container mx-auto max-w-7xl">
          <p className="text-[#D4B896] text-sm tracking-[0.2em] uppercase mb-4">
            Our Services
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 md:mb-8 leading-tight">
            COMPREHENSIVE
            <br />
            INTERIOR SOLUTIONS
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed">
            From concept to completion, we offer a full range of interior design
            services to transform your space into something extraordinary.
          </p>
          <div className="mt-8">
            <a
              href="/brochure/Black%20and%20White%20Minimalist%20Interior%20Catalog%20Booklet%20%28A5%29.pdf.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#D4B896] hover:bg-[#E5D4BA] text-black px-6 py-3 rounded-sm font-medium tracking-wide transition-colors transform hover:scale-[1.02]"
            >
              Download Brochure
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 md:py-32 px-4 bg-[#2a2a2a] relative">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white" />
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="relative aspect-[4/3] rounded-sm overflow-hidden group fade"
                data-fade
              >
                <div className="absolute inset-0 bg-gray-300" />
                <Image
                  src={resolvedSrc[service.slug] ?? service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      {service.details}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-[#D4B896] hover:text-[#E5D4BA] transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                <div
                  className="absolute top-4 right-4 text-6xl md:text-7xl lg:text-8xl font-serif text-white/30 group-hover:text-[#D4B896]/50 transition-colors"
                  style={{ textShadow: "0 0 6px rgba(212,184,150,0.9), 0 0 14px rgba(212,184,150,0.7), 0 0 22px rgba(212,184,150,0.5)" }}
                >
                  {service.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">Our Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">A seamless journey from consultation to completion</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-[46px] h-[2px] bg-[#D4B896]" />
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="relative z-10 w-20 h-20 rounded-full bg-white ring-2 ring-[#D4B896] text-black text-3xl font-serif mx-auto shadow-sm overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#D4B896] transform scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100" />
                  <span className="relative z-10">01</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-black">Consultation</h3>
                <p className="text-gray-700 max-w-sm mx-auto">We understand your vision, needs, and budget through detailed consultations.</p>
              </div>
              <div className="text-center group">
                <div className="relative z-10 w-20 h-20 rounded-full bg-white ring-2 ring-[#D4B896] text-black text-3xl font-serif mx-auto shadow-sm overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#D4B896] transform scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100" />
                  <span className="relative z-10">02</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-black">Design & Planning</h3>
                <p className="text-gray-700 max-w-sm mx-auto">We produce detailed designs, 3D renderings, and comprehensive plans for approval.</p>
              </div>
              <div className="text-center group">
                <div className="relative z-10 w-20 h-20 rounded-full bg-white ring-2 ring-[#D4B896] text-black text-3xl font-serif mx-auto shadow-sm overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#D4B896] transform scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100" />
                  <span className="relative z-10">03</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-black">Implementation</h3>
                <p className="text-gray-700 max-w-sm mx-auto">We manage execution end‑to‑end, ensuring quality and timely delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
