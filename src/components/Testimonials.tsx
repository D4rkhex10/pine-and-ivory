"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Thsi one Surpassed my expectations!!! Beautiful 😍 Comfortable.",
      name: "Mrs Ibukun",
      title: "founder",
      company: "Morrison Cafe",
      image: "https://ext.same-assets.com/2282551275/343305297.jpeg",
    },
    {
      quote: "Quite an amazing turnaround  of my living room. it feels like a different house. Thank you 😃",
      name: "Mrs Ibukun  ",
      title: "Customer",
      company: "Morrison Cafe",
      image: "https://ext.same-assets.com/2282551275/4234242683.jpeg",
    },
    {
      quote: "I love the chairs and furniture, Thank You for an amazing job",
      name: "Mr Ayomide",
      title: "Customer",
      company: "Tech Hifi",
      image: "https://ext.same-assets.com/2282551275/3405176005.jpeg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-[#3a3a3a]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#D4B896] text-xs md:text-sm tracking-[0.2em] uppercase mb-3 md:mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
            HAPPY USERS SAY ABOUT OUR
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>PINE & IVORY
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white p-12 rounded-sm">
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#D4B896]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>

            <blockquote className="text-center mb-8">
              <p className="text-lg text-gray-800 leading-relaxed italic">
                "{testimonials[currentIndex].quote}"
              </p>
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-[#2d2d2d] hover:bg-[#D4B896] text-white hover:text-black transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-[#2d2d2d] hover:bg-[#D4B896] text-white hover:text-black transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#D4B896]" : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}
