"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro.fromTo(
        ".wf-brand",
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0, duration: 0.75 },
      );
      intro.fromTo(
        ".wf-desktop-nav a",
        { autoAlpha: 0, y: -8 },
        { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.06 },
        "-=0.4",
      );
      intro.fromTo(
        ".wf-header-cta",
        { autoAlpha: 0, y: -8 },
        { autoAlpha: 1, y: 0, duration: 0.5 },
        "-=0.25",
      );
    },
    { scope: headerRef },
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "wf-header wf-header-scrolled bg-ivory/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(36,18,16,0.08)] py-2"
            : "wf-header bg-transparent py-4 lg:py-5"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="wf-brand flex items-center gap-3 shrink-0">
              <div className={`wf-brand-mark flex items-center justify-center ${scrolled ? "text-burgundy" : "text-cream"}`}>
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2C12 2 8 6 8 10c0 2.21 1.79 4 4 4s4-1.79 4-4c0-4-4-8-4-8z" />
                  <path d="M12 14v8" />
                  <path d="M9 22h6" />
                </svg>
              </div>
              <div className="leading-none">
                <div
                  className={`font-serif text-lg lg:text-xl font-semibold tracking-[0.04em] transition-colors ${
                    scrolled ? "text-charcoal" : "text-white"
                  }`}
                >
                  WINE FRIEND
                </div>
                <div
                  className={`font-sans text-[7px] uppercase tracking-[0.16em] mt-1 transition-colors hidden sm:block ${
                    scrolled ? "text-slate" : "text-white/60"
                  }`}
                >
                  Always in All Ways for Wine Lovers
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="wf-desktop-nav hidden xl:flex items-center gap-7 2xl:gap-9">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`wf-nav-link font-serif text-[13px] 2xl:text-sm tracking-[0.015em] transition-colors relative after:absolute after:bottom-[-7px] after:left-0 after:w-0 after:h-px after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap ${
                    scrolled
                      ? "text-charcoal hover:text-burgundy after:bg-burgundy"
                      : "text-white/90 hover:text-white after:bg-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <Button
                href="/contact"
                size="sm"
                className="wf-header-cta hidden lg:inline-flex"
                icon={false}
              >
                Enquire Now
              </Button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`wf-menu-toggle xl:hidden p-2 transition-colors ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />
    </>
  );
}
