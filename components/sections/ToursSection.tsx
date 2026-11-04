"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export function ToursSection() {
  return (
    <section id="wine-tours" className="wf-section wf-tours py-14 lg:py-20 bg-cream overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Image (left on desktop) */}
          <ImageReveal
            direction="right"
            className="wf-editorial-image relative aspect-[4/5] rounded-none overflow-hidden order-2 lg:order-1"
          >
            <div className="absolute inset-0 img-fallback-vineyard -z-10" />
            <Image
              src="/images/experiences/vineyard-landscape.webp"
              alt="Vineyard rows stretching toward a mountain landscape"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-3 border border-gold/20 rounded-xl pointer-events-none" />
          </ImageReveal>

          {/* Text (right on desktop) */}
          <div className="order-1 lg:order-2">
            <TextReveal>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-burgundy mb-3">
                Wine Tours &amp; Experiences
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="wf-display-heading font-serif text-3xl sm:text-4xl lg:text-6xl font-normal text-charcoal leading-[1.05] mb-6">
                Discover Nashik
                <br />
                <span className="italic text-burgundy">Through Wine</span>
              </h2>
            </TextReveal>
            <FadeUp delay={0.2}>
              <p className="text-charcoal-light font-sans text-base leading-8 mb-7 max-w-xl">
                More than a destination, Nashik is a place to discover vineyards,
                winemaking traditions and memorable experiences. Join us for
                curated vineyard visits, wine tastings, and immersive wine tourism
                that captures the essence of India&apos;s wine capital.
              </p>
              <Button href="/wine-tours">Explore Nashik Wine Tours</Button>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
