"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
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
    // Add form submission logic here
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
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 bg-[#212121]">
        <div className="container mx-auto max-w-7xl">
          <p className="text-[#D4B896] text-sm tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 md:mb-8 leading-tight">
            LET'S CREATE
            <br />
            SOMETHING AMAZING
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed">
            Ready to transform your space? Reach out to us and let's discuss
            how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-28 md:py-32 px-4 bg-[#2a2a2a]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 fade" data-fade>
                  <div className="w-12 h-12 rounded-full bg-[#D4B896] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Phone</h3>
                    <p className="text-white/70">0905 689 8336</p>
                    <p className="text-white/70">0907 660 0081</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 fade" data-fade>
                  <div className="w-12 h-12 rounded-full bg-[#D4B896] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Email</h3>
                    <p className="text-white/70">info@pine-ivory.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 fade" data-fade>
                  <div className="w-12 h-12 rounded-full bg-[#D4B896] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Address</h3>
                    <p className="text-white/70">
                      48B Faramobi Ajike Street,
                      <br />
                      Anthony Village
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 fade" data-fade>
                  <div className="w-12 h-12 rounded-full bg-[#D4B896] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Business Hours</h3>
                    <p className="text-white/70">Monday - Friday</p>
                    <p className="text-white/70">08:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-[#2d2d2d] rounded-sm flex items-center justify-center">
                <p className="text-white/50">Map View</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#f6f2ec] border border-[#D4B896]/40 p-8 md:p-12 rounded-sm fade" data-fade>
              <h3 className="text-2xl font-bold text-black mb-8 tracking-wide">
                REACH OUT TO US...
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. alonso"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-[#D4B896] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. jane@framer.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
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
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-[#D4B896] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2 uppercase tracking-wide">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-[#D4B896] transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="furniture">Furniture</option>
                      <option value="interior">Interior Decoration</option>
                      <option value="corporate">Corporate Decor</option>
                      <option value="smart-home">Smart Home Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-[#D4B896] transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#D4B896] hover:bg-[#E5D4BA] text-black px-8 py-4 rounded-sm font-medium tracking-wide transition-colors transform hover:scale-[1.02] uppercase w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
