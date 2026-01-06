"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState as useClientState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useClientState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    const nodes = document.querySelectorAll<HTMLElement>("[data-fade]");
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
      root.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
      root.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/services", label: "OUR SERVICES" },
    { href: "https://pine-ivory.myshopify.com", label: "STORE", external: true },
    { href: "/contact", label: "CONTACT US" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-300 border-0 ${scrolled ? "bg-[#1a1a1a]/60" : "bg-[#1a1a1a]/90"}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {logoError ? (
            <img
              src="/logo.svg"
              alt="Pine & Ivory Ltd. logo"
              className="w-[180px] h-auto"
            />
          ) : (
            <Image
              src="/logo.png"
              alt="Pine & Ivory Ltd. logo"
              width={180}
              height={72}
              priority
              onError={() => setLogoError(true)}
              className="w-[180px] h-auto"
            />
          )}
        </Link>
      
        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#D4B896] transition-colors text-sm tracking-wide"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#D4B896] transition-colors text-sm tracking-wide"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="menu-toggle lg:hidden p-2 rounded-md bg.white/10 hover:bg.white/20 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay lg:hidden fixed top-0 left-0 w-screen h-screen bg-[#0f0f0f] z-[99999] overflow-hidden py-10">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                {logoError ? (
                  <img src="/logo.svg" alt="Pine & Ivory Ltd. logo" className="w-[160px] h-auto" />
                ) : (
                  <Image
                    src="/logo.png"
                    alt="Pine & Ivory Ltd. logo"
                    width={160}
                    height={64}
                    priority
                    onError={() => setLogoError(true)}
                    className="w-[160px] h-auto"
                  />
                )}
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <nav className="flex-1 flex items-center justify-center w-full h-full">
              <ul className="space-y-8 text-center">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl tracking-[0.2em] hover:text-[#D4B896] transition-colors uppercase"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white text-2xl tracking-[0.2em] hover:text-[#D4B896] transition-colors uppercase"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
