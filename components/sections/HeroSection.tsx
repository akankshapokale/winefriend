"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/data/site";
import { ChevronDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Image zoom in
      tl.fromTo(
        imageRef.current,
        { scale: 1.12, opacity: 0.82 },
        { scale: 1, opacity: 1, duration: 2.4 },
        0
      );

      // Overlay fade
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 },
        0
      );

      // Brand name reveal
      tl.fromTo(
        ".hero-brand",
        { opacity: 0, y: 16, letterSpacing: "0.4em" },
        { opacity: 1, y: 0, letterSpacing: "0.28em", duration: 0.7 },
        0.85
      );

      // Tagline reveal
      tl.fromTo(
        ".hero-tagline",
        { opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.85,
          ease: "power4.out",
        },
        1.05
      );

      // Subtitle reveal
      tl.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6 },
        1.5
      );

      // Description
      tl.fromTo(
        ".hero-desc",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.45 },
        1.7
      );

      // Buttons stagger
      tl.fromTo(
        ".hero-btn",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.12 },
        1.9
      );

      // Scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6 },
        2.35
      );

      // Scroll indicator bounce
      gsap.to(scrollIndicatorRef.current, {
        y: 7,
        duration: 1.2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2.8,
      });

      // Hold the opening frame while its copy clears, then release into the page.
      const heroTransition = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=35%",
          pin: window.innerWidth > 768,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      heroTransition.to(contentRef.current, {
        y: -260,
        opacity: 0,
        scale: 0.94,
        ease: "none",
      }, 0);

      heroTransition.to(scrollIndicatorRef.current, {
        opacity: 0,
        y: -20,
        ease: "none",
      }, 0);

      // Keep the wine glass centered while the image sharpens and opens up.
      gsap.to(imageFrameRef.current, {
        scale: 1.08,
        ease: "none",
        transformOrigin: "50% 50%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=35%",
          scrub: 0.8,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="wine-hero relative min-h-[700px] h-[min(900px,100svh)] overflow-hidden"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 -bottom-24">
        <div ref={imageFrameRef} className="absolute inset-0">
          <Image
            src="/images/hero/vineyard-mountain-landscape.webp"
            alt="Rows of grapevines across a mountain vineyard landscape"
            fill
            className="wine-hero-image object-cover"
            priority
            sizes="100vw"
          />
          {/* Fallback gradient in case image doesn't load */}
          <div className="absolute inset-0 img-fallback-vineyard -z-10" />
        </div>
      </div>

      {/* Overlays */}
      <div ref={overlayRef}>
        <div className="wine-hero-overlay absolute inset-0 z-10" />
      </div>

      {/* Content */}
      <Container className="relative z-20 h-full min-h-[inherit] flex flex-col justify-center items-start">
        <div ref={contentRef} className="wine-hero-content max-w-2xl px-2 sm:px-4 pt-24 lg:pt-16 text-left lg:max-w-[54%]">
          <div>
            {/* Brand name */}
            <p className="hero-brand font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-gold mb-5">
              WINE FRIEND
            </p>

            {/* Main heading */}
            <h1 className="wine-hero-title hero-tagline font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-normal leading-[0.96] tracking-[-0.04em] mb-6">
              Always in All Ways <span className="wine-hero-title-accent italic font-normal">for Wine Lovers</span>
            </h1>

            {/* Subtitle */}
            <p className="wine-hero-support hero-subtitle font-serif text-lg sm:text-xl italic mb-5">
              Everything Wine. One Trusted Friend.
            </p>
          </div>

          {/* Description */}
          <p className="wine-hero-support hero-desc font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            {siteConfig.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-start gap-3">
            <div className="hero-btn">
              <Button href="/products">Explore Our Products</Button>
            </div>
            <div className="hero-btn">
              <Button
                href="/wine-tours"
                variant="secondary"
                className="wf-hero-secondary border-white/60 text-white hover:bg-white hover:text-charcoal"
              >
                Discover Wine Experiences
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-[9px] font-sans uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-white/40" />
      </div>
    </section>
  );
}
