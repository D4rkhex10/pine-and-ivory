"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function InteriorDecorationPage() {
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
        const res = await fetch("/api/gallery/interior-decoration");
        const data = await res.json();
        const imgs: string[] = Array.isArray(data.images) ? data.images : [];
        if (imgs.length > 0) {
          setGallery(imgs.map((src, idx) => ({ src, alt: `Gallery image ${idx + 1}` })));
        } else {
          setGallery([
            { src: "/services/corporate.jpg", alt: "Interior showcase" },
            { src: "/services/furniture.jpg", alt: "Furniture detail" },
            { src: "/services/corporate.jpg", alt: "Corporate lounge" },
          ]);
        }
      } catch {
        setGallery([
          { src: "/services/corporate.jpg", alt: "Interior showcase" },
          { src: "/services/furniture.jpg", alt: "Furniture detail" },
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
            backgroundImage: "url('/services/interior%20designbackground.jpg')",
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
          <h2 className="text-xl md:text-2xl font-bold text-black tracking-wide mb-6">INTERIOR DECORATION</h2>
          <p className="text-gray-800 leading-relaxed mb-12">
            Our Commercial Interior Design service is dedicated to transforming workspaces into environments that reflect your brand,
            enhance productivity, and foster a positive atmosphere for both employees and clients. We specialize in creating functional,
            aesthetically pleasing spaces that align with your business goals and culture.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">Consultation & Planning</h3>
              <p className="text-gray-800 leading-relaxed">
                We begin by understanding your business, your vision, and the unique needs of your space. This includes site visits,
                discussions with key stakeholders, and a thorough analysis of your brand identity. Our design team collaborates with you
                to develop a customized plan that integrates your brand's ethos with cutting-edge design principles.
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">Project Management</h3>
              <p className="text-gray-800 leading-relaxed">
                Our project management team ensures that every phase of the design process is executed smoothly, on time, and within budget.
                We coordinate with contractors, suppliers, and other stakeholders to keep the project on track. Regular updates and open
                communication ensure that you are informed and involved throughout the process.
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">Concept Development</h3>
              <p className="text-gray-800 leading-relaxed">
                Based on our initial consultations, we create a design concept that aligns with your objectives. This includes mood boards,
                sketches, and 3D renderings to help you visualize the final outcome. We focus on creating a balance between functionality
                and aesthetics, ensuring that the space is both beautiful and practical.
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">Space Planning & Layout</h3>
              <p className="text-gray-800 leading-relaxed">
                Efficient use of space is critical in commercial settings. Our experts design layouts that maximize the use of available
                space while ensuring easy navigation and accessibility. We consider factors such as employee comfort, workflow optimization,
                and client experience to create an environment that supports your business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-black">Gallery</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Selected interior decoration highlights.</p>
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
