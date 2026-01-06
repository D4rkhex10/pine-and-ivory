"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function FurnitureServicePage() {
  const features = [
    {
      title: "Space Planning",
      description:
        "Layouts that maximize comfort, accessibility, and flow — from living rooms to workspaces.",
    },
    {
      title: "Lighting",
      description:
        "Balanced natural and artificial lighting to set mood and enhance functionality.",
    },
    {
      title: "Color & Materials",
      description:
        "Curated palettes and sustainable materials that elevate aesthetics and durability.",
    },
    {
      title: "Furniture & Fixtures",
      description:
        "Ergonomic, durable, and tailored pieces that fit your lifestyle and space.",
    },
  ];

  const [gallery, setGallery] = useState<{ src: string; alt: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const previewCount = 3;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i + gallery.length - 1) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, gallery.length]);

  useEffect(() => {
    if (lightboxIndex === null || gallery.length === 0) return;
    const id = setInterval(() => {
      setLightboxIndex((i) => (i === null ? i : (i + 1) % gallery.length));
    }, 3000);
    return () => clearInterval(id);
  }, [lightboxIndex, gallery.length]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/gallery-manifest.json");
        const manifest = await res.json();
        const imgs: string[] = manifest['furniture'] || [];
        if (imgs.length > 0) {
          setGallery(imgs.map((src, idx) => ({ src, alt: `Gallery image ${idx + 1}` })));
        } else {
          setGallery([
            { src: "/services/furniture.jpg", alt: "Furniture showcase" },
            { src: "/services/corp.jpg", alt: "Interior detail" },
            { src: "/services/corporate.jpg", alt: "Corporate lounge" },
          ]);
        }
      } catch {
        setGallery([
          { src: "/services/furniture.jpg", alt: "Furniture showcase" },
          { src: "/services/corp.jpg", alt: "Interior detail" },
          { src: "/services/corporate.jpg", alt: "Corporate lounge" },
        ]);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (gallery.length === 0) return;
    const id = setInterval(() => {
      setPreviewIndex((i) => (i + 1) % gallery.length);
    }, 3000);
    return () => clearInterval(id);
  }, [gallery.length]);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Title Banner */}
      <section className="relative bg-[#F5F5F0] mt-32 md:mt-36 h-[220px] md:h-[260px] overflow-visible">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-serif text-[#D4B896]/40 leading-[1.1] select-none text-[18vw] md:text-[14vw]">
            IVORY
          </span>
        </div>
        <div className="relative h-full container mx-auto max-w-7xl px-4">
          <div className="h-full flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-serif text-black tracking-wide">SERVICE DETAILS</h1>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px md:h-px"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        />
      </section>

      {/* Parallax Banner */}
      <section className="bg-[#F5F5F0]">
        <div
          className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-scroll md:bg-fixed"
          style={{
            backgroundImage: "url('/services/furniture.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Overview + Sections */}
      <section className="py-24 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-black tracking-wide mb-6">FURNITURE</h2>
          <p className="text-gray-800 leading-relaxed mb-12">
            In today's competitive business environment, the design of commercial interiors plays a crucial role in the success and functionality of any workspace. A well-designed commercial interior not only enhances the aesthetic appeal of the space but also boosts productivity, reflects the company’s brand, and creates a positive environment for employees and clients alike. This overview touches on the various aspects of commercial interior design, highlighting its importance, key elements, trends, and the role of professional designers.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">Space Planning</h3>
              <p className="text-gray-800 leading-relaxed">
                Effective space planning involves creating a layout that maximizes the use of available space while ensuring comfort and accessibility. This includes zoning different areas for various functions, such as workstations, meeting rooms, and recreational areas.
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">Lighting</h3>
              <p className="text-gray-800 leading-relaxed">
                Lighting plays a crucial role in setting the mood and functionality of a commercial space. A combination of natural light, ambient lighting, task lighting, and accent lighting can create a balanced and inviting atmosphere. Smart lighting solutions can enhance energy efficiency and adjust to the needs of the space throughout the day.
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">Color and Materials</h3>
              <p className="text-gray-800 leading-relaxed">
                The choice of colors and materials can greatly influence the look and feel of a commercial interior. Neutral tones can create a calm and professional environment, while bold colors can energize and inspire. Sustainable materials, such as reclaimed wood, recycled metals, and low-VOC paints, are increasingly popular for their environmental benefits and unique aesthetic.
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">Furniture and Fixtures</h3>
              <p className="text-gray-800 leading-relaxed">
                Selecting the right furniture and fixtures is essential for both comfort and functionality. Ergonomic chairs, adjustable desks, and collaborative furniture options support diverse work styles and activities. High-quality, durable furniture ensures longevity and reduces the need for frequent replacements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-black">Gallery</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">A selection of recent furniture and interior installations.</p>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${(previewIndex % Math.max(1, gallery.length)) * (100 / previewCount)}%)` }}
            >
              {gallery.map((g, i) => (
                <button
                  key={g.src}
                  className="bg-white rounded-sm overflow-hidden group cursor-zoom-in shadow-sm"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View ${g.alt}`}
                  style={{ flex: `0 0 ${100 / previewCount}%` }}
                >
                  <div className="aspect-[4/3] bg-gray-200">
                    <img
                      src={g.src}
                      alt={g.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="absolute top-6 right-6">
            <button
              className="p-2 rounded-sm bg-white/10 hover:bg-white/20 text-white"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(null);
              }}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <button
            className="hidden md:block absolute left-4 md:left-6 p-2 rounded-sm bg-white/10 hover:bg-white/20 text-white"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i === null ? i : (i + gallery.length - 1) % gallery.length));
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="hidden md:block absolute right-4 md:right-6 p-2 rounded-sm bg-white/10 hover:bg-white/20 text-white"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i === null ? i : (i + 1) % gallery.length));
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl w-full mx-4 md:mx-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black/40 rounded-sm overflow-hidden">
              <img
                src={gallery[lightboxIndex].src}
                alt={gallery[lightboxIndex].alt}
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      

      <Footer />
    </main>
  );
}
