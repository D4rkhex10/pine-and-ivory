"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function CorporateDecorPage() {
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
        const res = await fetch("/api/gallery/corporate-decor");
        const data = await res.json();
        const imgs: string[] = Array.isArray(data.images) ? data.images : [];
        if (imgs.length > 0) {
          setGallery(imgs.map((src, idx) => ({ src, alt: `Gallery image ${idx + 1}` })));
        } else {
          setGallery([
            { src: "/services/corporate.jpg", alt: "Corporate lounge" },
            { src: "/services/corp.jpg", alt: "Interior detail" },
            { src: "/services/furniture.jpg", alt: "Furniture showcase" },
          ]);
        }
      } catch {
        setGallery([
          { src: "/services/corporate.jpg", alt: "Corporate lounge" },
          { src: "/services/corp.jpg", alt: "Interior detail" },
          { src: "/services/furniture.jpg", alt: "Furniture showcase" },
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

      <section className="relative bg-[#F5F5F0] mt-32 md:mt-36 h-[220px] md:h-[260px] overflow-visible">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-serif text-[#D4B896]/40 leading-[1.1] select-none text-[18vw] md:text-[14vw]">IVORY</span>
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

      <section className="bg-[#F5F5F0]">
        <div
          className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-scroll md:bg-fixed"
          style={{
            backgroundImage: "url('/services/corporate.jpg')",
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

      <section className="py-24 px-4 bg-[#f6f2ec]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-black tracking-wide mb-6">CORPORATE DECOR</h2>
          <p className="text-gray-800 leading-relaxed mb-12">
            Our 3D Rendering for Interior Design service brings your design concepts to life with photorealistic visualizations. Whether you're an architect,
            interior designer, real estate developer, or homeowner, our 3D rendering services provide a clear, detailed view of your space before construction
            or renovation begins. We help you visualize every detail, from the layout and materials to lighting and furniture, ensuring that your vision is
            realized with precision and clarity.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">PROJECT BRIEF</h3>
              <p className="text-gray-800 leading-relaxed">
                We start with a detailed consultation to understand your project’s requirements, including the design concept, style preferences, and specific
                elements you want to visualize. You provide us with floor plans, sketches, or reference images, and we discuss your goals for the 3D renderings,
                including the level of detail and any particular features you wish to highlight.
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">SITE ANALYSIS &amp; FEASIBILITY</h3>
              <p className="text-gray-800 leading-relaxed">
                A thorough analysis of the site is crucial for any architectural project. We assess the site’s conditions, zoning regulations, environmental impact,
                and any potential challenges that could affect the design and construction process. We provide feasibility studies that evaluate the viability of the
                project, offering insights into costs, timelines, and any necessary adjustments to ensure successful implementation.
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">CONCEPTUALIZATION</h3>
              <p className="text-gray-800 leading-relaxed">
                Based on your input, we create initial storyboard concepts that outline the key views and angles of the space to be rendered. This helps in determining
                the most impactful perspectives that showcase the design effectively. We work closely with you to refine these concepts, ensuring that they align with
                your vision and objectives.
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">3D MODELING</h3>
              <p className="text-gray-800 leading-relaxed">
                Our team begins by creating detailed 3D models of the interior space, including architectural elements, furniture, fixtures, and decor. We pay close
                attention to accuracy, ensuring that dimensions and proportions are true to the actual design. We use advanced software to craft realistic textures
                and materials that mirror your selections, bringing depth and authenticity to the model.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-black">Gallery</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Selected corporate decor highlights.</p>
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

      <section className="py-24 px-4 bg-[#2d2d2d]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">Let's work together to create something extraordinary.</p>
          <a href="/contact" className="inline-block bg-[#D4B896] hover:bg-[#E5D4BA] text-black px-8 py-4 rounded-sm font-medium tracking-wide transition-colors transform hover:scale-[1.02]">
            GET IN TOUCH
          </a>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
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

          <div className="relative max-w-5xl w-full mx-4 md:mx-12" onClick={(e) => e.stopPropagation()}>
            <div className="bg-black/40 rounded-sm overflow-hidden">
              <img src={gallery[lightboxIndex].src} alt={gallery[lightboxIndex].alt} className="w-full max-h-[80vh] object-contain" />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
