"use client";

import { Container } from "@/components/layout/Container";
import { JournalCard } from "@/components/ui/JournalCard";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { journalArticles } from "@/data/journal";
import { GrapevineDecoration } from "@/components/ui/GrapevineDecoration";

export function JournalSection() {
  const featured = journalArticles.find((a) => a.featured);
  const articles = journalArticles.filter((a) => !a.featured);

  return (
    <section id="wine-journal" className="wf-section wf-journal py-14 lg:py-20 bg-cream">
      <GrapevineDecoration className="wf-vine wf-vine--bottom-left wf-vine--journal" />
      <Container className="wf-botanical-content">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <TextReveal>
            <div>
              <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-burgundy mb-2">
                Wine Journal
              </p>
              <h2 className="wf-display-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-[1.05] mb-3">
                Stories from the World of Wine
              </h2>
              <p className="text-charcoal-light font-sans text-sm leading-relaxed max-w-lg">
                Stories from Manoj Jagtap and the Wine Friend team, including
                Nashik winery visits, grape harvesting, and wine events.
              </p>
            </div>
          </TextReveal>
          <FadeUp delay={0.2} className="shrink-0">
            <Button href="/wine-journal" variant="ghost">
              Explore the Wine Journal
            </Button>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Featured Article */}
          {featured && (
            <FadeUp>
              <JournalCard article={featured} featured />
            </FadeUp>
          )}

          {/* Article List */}
          <StaggerChildren
            className="flex flex-col gap-5 justify-center"
            stagger={0.2}
          >
            {articles.map((article) => (
              <JournalCard key={article.id} article={article} />
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  );
}
