"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function SmartHomePage() {
  const [gallery, setGallery] = useState<{ src: string; alt: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const previewCount = 3;
  const [kitchenSrc, setKitchenSrc] = useState("/services/smarthome-solutions-background.jpg");
  const [panelSrc, setPanelSrc] = useState("/services/corporate.jpg");

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
        const imgs: string[] = manifest['smart-home'] || [];
        if (imgs.length > 0) {
          setGallery(imgs.map((src, idx) => ({ src, alt: `Gallery image ${idx + 1}` })));
        } else {
          setGallery([
            { src: "/services/corp.jpg", alt: "Interior detail" },
            { src: "/services/corporate.jpg", alt: "Corporate lounge" },
            { src: "/services/furniture.jpg", alt: "Furniture showcase" },
          ]);
        }
      } catch {
        setGallery([
          { src: "/services/corp.jpg", alt: "Interior detail" },
          { src: "/services/corporate.jpg", alt: "Corporate lounge" },
          { src: "/services/furniture.jpg", alt: "Furniture showcase" },
        ]);
      }
    };
    load();
  }, []);

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
      const kitchenOk = await check("/services/smart-home-kitchen.jpg");
      if (kitchenOk) setKitchenSrc("/services/smart-home-kitchen.jpg");
      const panelOk = await check("/services/smart-home-wall-panel.jpg");
      if (panelOk) setPanelSrc("/services/smart-home-wall-panel.jpg");
    };
    init();
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
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-serif text-black tracking-wide">SERVICE DETAILS</h1>
            </div>
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
            backgroundImage: `url('${kitchenSrc}')`,
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

      <section className="py-24 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-black tracking-wide mb-6">SMART HOME SOLUTIONS</h2>
          <p className="text-gray-800 leading-relaxed mb-12">
            When it comes to creating a truly connected home, smart technology is the backbone of making your space both functional and intuitive. While architecture and layout set the stage, it’s the smart devices you choose and how you integrate them that bring your home to life. The right solutions, thoughtfully placed, can transform an ordinary house into an extraordinary smart home.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">CHOOSING THE RIGHT SMART DEVICES FOR YOUR SPACE</h3>
              <p className="text-gray-800 leading-relaxed">The first step in building a seamless smart home is selecting devices that meet your lifestyle needs and complement your home’s design. Whether you prefer a minimalist setup or a fully automated environment, your devices should serve a dual purpose: they should simplify daily tasks and enhance your living experience.</p>
              <p className="text-gray-800 leading-relaxed">Consider scale and compatibility. A full home automation hub might be perfect for a large property, while a few smart plugs and voice assistants could be ideal for a smaller apartment. Think about how each device fits into your routine without overwhelming your space.</p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">MIXING TECHNOLOGIES FOR A UNIQUE EXPERIENCE</h3>
              <p className="text-gray-800 leading-relaxed">One of the best ways to personalize your smart home is by blending different technologies. A smart thermostat can pair beautifully with energy-efficient lighting, or a voice controlled speaker can complement automated blinds. The key is balance—contrast works when it’s intentional. Aim for harmony between devices, even if they come from different brands or ecosystems.</p>
              <p className="text-gray-800 leading-relaxed">This integration can also extend to materials and aesthetics. Sleek touch panels can coexist with classic décor, creating a modern yet warm environment. Combining tech with design ensures your home feels both advanced and inviting.</p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">STYLING YOUR SMART HOME: ADDING THE FINISHING TOUCHES</h3>
              <p className="text-gray-800 leading-relaxed">Once your devices are installed, it’s time to style and optimize. This is where your personality shines through. Customize settings, create automation routines, and layer features that make life easier and more enjoyable.</p>
              <p className="text-gray-800 leading-relaxed">Start with simple automations like lights that adjust to your schedule or climate control that learns your preferences. Add voice commands for convenience and integrate entertainment systems for a cohesive experience. Don’t underestimate the power of smart décor elements like ambient lighting or digital art displays; they can become focal points that elevate your home’s mood and functionality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-black">Gallery</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Smart home implementations.</p>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${(previewIndex % Math.max(1, gallery.length)) * (100 / previewCount)}%)` }}
            >
              {gallery.map((g, i) => (
                <button
                  key={g.src}
                  className="bg-white rounded-sm overflow-hidden group cursor-zoom-in shadow-md ring-1 ring-black/5"
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
