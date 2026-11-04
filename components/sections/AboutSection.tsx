"use client";

import { Container } from "@/components/layout/Container";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { FadeUp } from "@/components/animations/FadeUp";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { aboutPillars, aboutContent } from "@/data/about";

export function AboutSection() {
  return (
    <section id="about" className="wf-section wf-about py-14 lg:py-20 bg-ivory">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left – Pillars */}
          <div>
            <TextReveal>
              <h2 className="wf-display-heading font-serif text-3xl sm:text-4xl lg:text-6xl font-normal text-charcoal leading-[1.05] mb-10">
                {aboutContent.heading}
              </h2>
            </TextReveal>
            <StaggerChildren
              className="grid grid-cols-2 gap-4"
              stagger={0.15}
            >
              {aboutPillars.map((pillar) => (
                <FeatureIcon key={pillar.title} pillar={pillar} />
              ))}
            </StaggerChildren>
          </div>

          {/* Right – Story */}
          <FadeUp delay={0.2}>
            <div className="lg:pt-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-burgundy mb-5">
                {aboutContent.storyHeading}
              </h3>
              <Divider className="mb-4" />
              <p className="text-charcoal-light font-sans text-sm leading-relaxed mb-5">
                {aboutContent.storyText}
              </p>
              <Button href={aboutContent.ctaHref} variant="ghost">
                {aboutContent.ctaText}
              </Button>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
