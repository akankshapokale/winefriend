"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/animations/FadeUp";
import { JournalCard } from "@/components/ui/JournalCard";
import { journalArticles } from "@/data/journal";

const categories = ["All stories", "People & company", "Tours & harvest", "Wine events"] as const;
type Category = typeof categories[number];

function articleCategory(title: string): Exclude<Category, "All stories"> {
  if (/fest|wineout/i.test(title)) return "Wine events";
  if (/harvest|nashik wine country/i.test(title)) return "Tours & harvest";
  return "People & company";
}

export function JournalListing() {
  const [activeCategory, setActiveCategory] = useState<Category>("All stories");
  const filteredArticles = activeCategory === "All stories"
    ? journalArticles
    : journalArticles.filter((article) => articleCategory(article.title) === activeCategory);

  return (
    <section className="wf-section wf-journal py-14 lg:py-20 bg-cream">
      <Container>
        <nav className="wf-journal-filters" aria-label="Filter journal stories">
          {categories.map((category) => (
            <button key={category} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {filteredArticles.map((article, index) => (
            <FadeUp key={article.id} delay={Math.min(index * .06, .24)}>
              <JournalCard article={article} featured={Boolean(article.featured)} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
