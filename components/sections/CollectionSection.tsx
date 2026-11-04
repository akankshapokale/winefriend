"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/animations";

import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { products } from "@/data/products";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const productDescriptions: Record<string, string> = {
  "wine-bottle-holder": "A sculptural cradle for bottles worth sharing.",
  "wine-decanter": "Give every vintage room to breathe and unfold.",
  "wine-rack": "Keep a thoughtful collection beautifully close at hand.",
  corkscrew: "A precise, unhurried start to the wine ritual.",
  "wine-stopper": "Preserve the final glass with quiet elegance.",
  "barrel-furniture": "A gathering place shaped by wine country tradition.",
};

export function CollectionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const headingParts = headingRef.current?.querySelectorAll<HTMLElement>(
        ".wf-collection-kicker, .wf-collection-title, .wf-collection-description",
      );
      const dividerParts = dividerRef.current?.children;
      const cards = gsap.utils.toArray<HTMLElement>(".wf-product-card", section);
      const imageFrames = gsap.utils.toArray<HTMLElement>(".wf-product-image-frame", section);
      const images = gsap.utils.toArray<HTMLElement>(".wf-product-image", section);
      if (!cards.length) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      if (headingParts?.length) {
        timeline.fromTo(
          headingParts,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.12 },
          0,
        );
      }
      if (dividerParts?.length) {
        timeline.fromTo(
          dividerParts,
          { autoAlpha: 0, scaleX: 0.7, y: 10 },
          { autoAlpha: 1, scaleX: 1, y: 0, duration: 0.7, stagger: 0.08 },
          "-=0.3",
        );
      }
      timeline.fromTo(
        cards,
        { autoAlpha: 0, y: 45 },
        { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.12 },
        "-=0.15",
      );
      timeline.fromTo(
        imageFrames,
        { clipPath: "inset(100% 0 0 0)" },
        { clipPath: "inset(0% 0 0 0)", duration: 0.85, stagger: 0.12 },
        "-=0.5",
      );
      timeline.fromTo(
        images,
        { scale: 1.08 },
        { scale: 1, duration: 1, stagger: 0.12 },
        "<",
      );

      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section id="products" ref={sectionRef} className="wf-section wf-collection py-16 lg:py-24 bg-cream">
      <Container>
        <div ref={headingRef} className="wf-collection-header">
          <div>
            <p className="wf-collection-kicker">The art of serving well</p>
            <h2 className="wf-collection-title">Objects for the Wine Ritual</h2>
          </div>
          <p className="wf-collection-description">
            Thoughtfully selected wine accessories and related products for wine lovers and professionals.
          </p>
        </div>
        <div ref={dividerRef}>
          <Divider variant="diamond" className="my-6" />
        </div>
        <div className="wf-collection-grid grid mt-10">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index + 1}
              description={productDescriptions[product.slug]}
            />
          ))}
        </div>
        <div ref={buttonRef} className="flex justify-center mt-8">
          <Button href="/products" size="lg" className="wf-collection-button">View All Products</Button>
        </div>
      </Container>
    </section>
  );
}
