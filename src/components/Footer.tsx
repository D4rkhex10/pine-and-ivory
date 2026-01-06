"use client";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const watermarkRef = useRef<HTMLSpanElement>(null);
  const [bandWidth, setBandWidth] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      if (watermarkRef.current) {
        setBandWidth(watermarkRef.current.clientWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <footer className="bg-[#2d2d2d] text-white">
      {/* Top Contact Bar - Like Storefront Sign */}
      <div className="bg-[#3a3a3a] border-b border-[#D4B896]">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="text-center space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Pine & Ivory Ltd. logo"
                width={240}
                height={96}
                priority
                className="mx-auto h-14 md:h-16 w-auto"
              />
            </Link>
            <p className="text-[#D4B896] text-sm md:text-base tracking-wider uppercase">
              interiors + spaces
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-lg md:text-xl font-light">
              <a href="tel:+2349076600081" className="hover:text-[#D4B896] transition-colors">
                +234 907 660 0081
              </a>
              <span className="hidden md:inline text-[#D4B896]">|</span>
              <a href="tel:+2349056898336" className="hover:text-[#D4B896] transition-colors">
                +234 905 689 8336
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="pineIvoryFooter">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>ESSENTIAL</h4>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white hover:text-[#D4B896] transition-colors">HOME</Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-[#D4B896] transition-colors">ABOUT US</Link>
                </li>
                <li>
                  <Link href="/services" className="text-white hover:text-[#D4B896] transition-colors">OUR SERVICES</Link>
                </li>
                <li>
                  <Link href="/services/smart-home" className="text-white hover:text-[#D4B896] transition-colors">SMART HOME</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-[#D4B896] transition-colors">CONTACT US</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-col">
            <h4>BUSINESS HOURS</h4>
            <p>Monday - Friday</p>
            <p>08:00 AM - 9:00 PM</p>
            <p><strong>+234 907 660 0081</strong></p>
            <p><strong>+234 905 689 8336</strong></p>
          </div>
          <div className="footer-col">
            <h4>ADDRESS</h4>
            <p>48B Faramobi Ajike Street,<br/>Anthony Village</p>
            <h4 style={{ marginTop: 25 }}>HAVE A PROJECT IN MIND?</h4>
            <p><strong>INFO@PINE&IVORY.COM</strong></p>
          </div>
        </div>
        <style jsx>{`
          #pineIvoryFooter * { margin: 0; padding: 0; box-sizing: border-box !important; }
          #pineIvoryFooter { width: 100%; background: #1A1A1A; padding: 80px 0 120px 0; }
          #pineIvoryFooter .footer-grid { max-width: 1100px; margin: auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 100px; text-align: center; }
          #pineIvoryFooter .footer-col h4 { font-size: 18px; letter-spacing: 2px; color: #C9B68C; margin-bottom: 20px; font-weight: 500; text-transform: uppercase; }
          #pineIvoryFooter .footer-col p, #pineIvoryFooter .footer-col a { color: #E8E8E8; font-size: 15px; line-height: 1.8; display: block; text-decoration: none; margin-bottom: 6px; transition: 0.3s ease; }
          #pineIvoryFooter .footer-col a:hover { color: #C9B68C; }
          #pineIvoryFooter strong { color: #FFFFFF; font-weight: 600; }

          @media (max-width: 768px) {
            #pineIvoryFooter { padding: 60px 0 80px 0; }
            #pineIvoryFooter .footer-grid { grid-template-columns: 1fr; gap: 45px; padding: 0 20px; }
            #pineIvoryFooter .footer-col h4 { font-size: 18px; letter-spacing: 0.15em; color: #C7B08A; margin-bottom: 18px; }
            #pineIvoryFooter .footer-col p, #pineIvoryFooter .footer-col a { font-size: 15px; margin: 6px 0; }
            #pineIvoryFooter .footer-col p strong { font-size: 16px; font-weight: 600; margin: 4px 0; color: #ffffff; display: inline-block; }
          }
        `}</style>
      </div>

      {/* Bottom Bar */}
      <section className="relative overflow-hidden bg-[#1f1f1f] h-[220px] md:h-[280px]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span
            className="font-serif text-transparent leading-none select-none text-[22vw] md:text-[18vw]"
            style={{ WebkitTextStroke: "1.25px #D4B896" }}
            ref={watermarkRef}
          >
            IVORY
          </span>
        </div>
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-10 md:h-12 bg-[#1f1f1f]/80 border border-[#D4B896]/30 rounded-sm"
          style={{ width: bandWidth ? `${bandWidth}px` : "75%" }}
        />
        <div className="relative z-10 container mx-auto max-w-7xl h-full px-4">
          <div className="relative max-w-4xl mx-auto h-full">
            <div className="relative h-full flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between px-4 gap-4">
              <p className="text-white/80 text-xs md:text-sm tracking-wide text-center md:text-left">
                COPYRIGHT PINE & IVORY DESIGN BY STUDIO10N 2025
              </p>
              <div className="flex items-center gap-3 justify-center md:justify-end">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-sm bg-white/10 hover:bg-[#D4B896] flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-sm bg-white/10 hover:bg-[#D4B896] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-sm bg-white/10 hover:bg-[#D4B896] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-sm bg-white/10 hover:bg-[#D4B896] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
