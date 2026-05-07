"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="main-nav">
        <div className="container navbar-inner">
          <Link href="/" className="nav-logo" aria-label="SparkUp Detailing Home">
            {/* Inline SVG car icon */}
            <svg width="36" height="20" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 35 C10 35, 25 10, 55 12 C70 13, 85 15, 100 20 C108 23, 112 28, 110 33 C108 36, 95 38, 80 35 C65 32, 50 30, 35 33 C25 35, 15 37, 10 35Z" stroke="white" strokeWidth="2.5" fill="none"/>
              <path d="M8 37 C8 37, 30 28, 60 30 C80 31, 100 33, 115 30" stroke="#2196F3" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
            Spark<span>Up</span>
          </Link>

          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/contact" className="btn btn-primary nav-cta">
            Get a Quote
          </Link>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`} id="mobile-menu">
        <button
          className="mobile-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation menu"
        >
          ✕
        </button>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn btn-primary"
          onClick={() => setMobileOpen(false)}
        >
          Get a Quote
        </Link>
      </div>
    </>
  );
}
