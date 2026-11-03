"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/animations";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { TextReveal } from "@/components/animations/TextReveal";
import { products } from "@/data/products";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function CollectionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const cards = gsap.utils.toArray<HTMLElement>(".wf-product-card", section);
      const imageFrames = gsap.utils.toArray<HTMLElement>(".wf-product-image-frame", section);
      const images = gsap.utils.toArray<HTMLElement>(".wf-product-image", section);
      if (!cards.length) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      timeline.fromTo(
        cards,
        { autoAlpha: 0, y: 48 },
        { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.14 },
      );
      timeline.fromTo(
        imageFrames,
        { clipPath: "inset(100% 0 0 0)" },
        { clipPath: "inset(0% 0 0 0)", duration: 1, stagger: 0.14 },
        "-=0.65",
      );
      timeline.fromTo(
        images,
        { scale: 1.12 },
        { scale: 1, duration: 1.15, stagger: 0.14 },
        "<",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="wf-section wf-collection py-14 lg:py-20 bg-cream">
      <Container>
        <TextReveal>
          <SectionHeading
            kicker="The art of serving well"
            heading="Objects for the Wine Ritual"
            description="Thoughtfully selected wine accessories and related products for wine lovers and professionals."
          />
        </TextReveal>
        <Divider variant="diamond" className="my-6" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mt-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <TextReveal className="flex justify-center mt-8" delay={0.2}>
          <Button href="/products">View All Products</Button>
        </TextReveal>
      </Container>
    </section>
  );
}
