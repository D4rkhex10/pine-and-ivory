"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#2d2d2d]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <img
                src="https://ext.same-assets.com/2282551275/3938713349.png"
                alt="Interior showcase"
                className="w-full rounded-sm object-cover"
              />
            </div>
            <p className="text-[#D4B896] text-sm tracking-[0.2em] uppercase mb-4">
              Get Free Estimate
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              REACH OUT TO US IMMEDIATELY TO ARRANGE A CUSTOMISED QUOTATION FOR YOUR SPACE.
            </h2>
          </div>

          {/* Right Content - Form */}
          <div className="bg-[#f6f2ec] border border-[#D4B896]/40 p-8 md:p-12 rounded-sm">
            <h3 className="text-2xl font-bold text-[#D4B896] mb-8 uppercase tracking-wide">
              REACH OUT TO US...
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-[#D4B896] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-[#D4B896] transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-[#D4B896] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-[#D4B896] transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="furniture">Furniture</option>
                    <option value="interior">Interior Decoration</option>
                    <option value="corporate">Corporate Decor</option>
                    <option value="smart-home">Smart Home Solutions</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-[#D4B896] transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                className="bg-[#D4B896] hover:bg-[#E5D4BA] text-black px-8 py-4 rounded-sm font-medium tracking-wide transition-colors uppercase"
              >
                Get a Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
