"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/animations";

import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { GrapevineDecoration } from "@/components/ui/GrapevineDecoration";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const productDescriptions: Record<string, string> = {
  "wine-bottle-holder": "Bottle holders include the Credle and Banana Stand designs.",
  "wine-decanter": "Decanters are part of Kamaltara Enterprises’ wine accessory range.",
  "wine-rack": "The range includes iron racks and wooden, acrylic, and stainless-steel wine stands and racks.",
  corkscrew: "Wine openers include Kamaltara’s plastic T-type corkscrew.",
  "wine-stopper": "Cork, wooden, tapered-cork, and plastic PVC bottle stoppers are available.",
  "barrel-furniture": "Wine-barrel furniture is made from used oak barrels; oak wine barrels are also offered.",
};

export function CollectionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const headingParts = headingRef.current?.querySelectorAll<HTMLElement>(
        ".wf-collection-kicker, .wf-collection-title, .wf-collection-description",
      );
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

    },
    { scope: sectionRef },
  );

  return (
    <section id="products" ref={sectionRef} className="wf-section wf-collection py-16 lg:py-24 bg-cream">
      <GrapevineDecoration className="wf-vine wf-vine--bottom-left" />
      <Container className="wf-botanical-content">
        <div ref={headingRef} className="wf-collection-header">
          <div>
            <p className="wf-collection-kicker">The art of serving well</p>
            <h2 className="wf-collection-title">Objects for the Wine Ritual</h2>
          </div>
          <p className="wf-collection-description">
            The range includes wine and champagne corks, openers, glasses, decanters, preservation systems, wooden, acrylic and stainless-steel stands and racks, used-oak-barrel furniture, and promotional materials. Listed products include the Credle and Banana Stand bottle holders, Kamaltara cork and wooden stoppers, plastic PVC stoppers, a plastic T-type corkscrew, tapered cork stopper, wooden wine box, self-balance stand, iron rack, oak barrels, acrylic photo-frame stand, and green glass ashtray.
          </p>
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
      </Container>
    </section>
  );
}
