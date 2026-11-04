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
import { BrandLogo } from "@/components/ui/BrandLogo";

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
          ? "wf-header wf-header-scrolled py-2"
            : "wf-header wf-header-top py-3 lg:py-4"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <BrandLogo className="wf-brand shrink-0" />

            {/* Desktop Nav */}
            <nav className="wf-desktop-nav hidden xl:flex items-center gap-7 2xl:gap-9">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`wf-nav-link font-serif text-[13px] 2xl:text-sm tracking-[0.015em] transition-colors relative after:absolute after:bottom-[-7px] after:left-0 after:w-0 after:h-px after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap ${
                    scrolled
                      ? "text-charcoal hover:text-burgundy after:bg-burgundy"
                      : "text-burgundy-dark hover:text-burgundy after:bg-burgundy"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <Button
                href="/#contact"
                size="sm"
                className="wf-header-cta hidden lg:inline-flex"
                icon={false}
              >
                Enquire Now
              </Button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`wf-menu-toggle xl:hidden p-2 transition-colors ${
                  "text-burgundy-dark"
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
