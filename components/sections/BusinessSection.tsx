"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { GrapevineDecoration } from "@/components/ui/GrapevineDecoration";

export function BusinessSection() {
  return (
    <section id="business-solutions" className="wf-section wf-business py-14 lg:py-20 bg-ivory overflow-hidden">
      <GrapevineDecoration className="wf-vine wf-vine--top-left" variant="champagne" />
      <Container className="wf-botanical-content">
        <div className="wf-editorial-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <TextReveal>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-burgundy mb-3">
                Business Solutions
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="wf-display-heading font-serif text-3xl sm:text-4xl lg:text-6xl font-normal text-charcoal leading-[1.05] mb-6">
                Wine solutions,
                <br />
                <span className="italic text-burgundy">made personal.</span>
              </h2>
            </TextReveal>
            <FadeUp delay={0.2}>
              <p className="text-charcoal-light font-sans text-base leading-8 mb-7 max-w-xl">
                Kamaltara Enterprises manufactures and imports wine-related
                products, with customisation tailored to client specifications
                and current market trends. The source website lists cash, demand
                draft, and bank transfer as accepted payment methods.
              </p>
              <Button href="/contact">
                Discuss Your Requirements
              </Button>
            </FadeUp>
          </div>

          {/* Image */}
          <ImageReveal
            direction="left"
            className="wf-editorial-image relative aspect-[4/5] rounded-none overflow-hidden"
          >
            <div className="absolute inset-0 img-fallback-wine -z-10" />
            <Image
              src="/images/business/wine-service-business.webp"
              alt="Wine being poured into a decanter during professional service"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-3 border border-gold/20 rounded-xl pointer-events-none" />
          </ImageReveal>
        </div>
      </Container>
    </section>
  );
}
