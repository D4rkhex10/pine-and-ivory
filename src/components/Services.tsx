"use client";
import Link from "next/link";
export default function Services() {
  const services = [
    {
      slug: "furniture",
      number: "01",
      title: "FURNITURE",
      description: "In today's competitive business environment, the design of commercial interiors plays a crucial role",
      image: "/services/furniture.jpg",
      fallback: "/services/furniture.jpg",
    },
    {
      slug: "interior-decoration",
      number: "02",
      title: "INTERIOR DECORATION",
      description: "Strategic use of color and lighting can significantly impact employee mood and customer experience.",
      image: "/services/interior designbackground.jpg",
      fallback: "/services/corporate.jpg",
    },
    {
      slug: "corporate-decor",
      number: "03",
      title: "CORPORATE DECOR",
      description: "Our 3D Rendering for Interior Design service brings your design concepts to life with photorealistic visualizations.",
      image: "/services/corporate.jpg",
      fallback: "/services/corporate.jpg",
    },
    {
      slug: "smart-home",
      number: "04",
      title: "SMART HOME SOLUTIONS",
      description: "Smart Home Solutions: The Backbone of Modern Living",
      image: "/services/smarthome-solutions-background.jpg",
      fallback: "/services/furniture.jpg",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-[#3a3a3a]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#D4B896] text-xs md:text-sm tracking-[0.2em] uppercase mb-3 md:mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white">
            VIEW OUR PROJECTS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service) => (
            <Link
              href={`/services/${service.slug}`}
              key={service.slug}
              className="relative aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer block"
            >
              <div className="absolute inset-0 bg-gray-300" />
              <img
                src={service.image}
                alt={service.title}
                onError={(e) => {
                  if (service.fallback && e.currentTarget.src !== service.fallback) {
                    e.currentTarget.src = service.fallback;
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 text-6xl md:text-7xl lg:text-8xl font-serif text-white/30 group-hover:text-[#D4B896]/50 transition-colors">
                {service.number}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
