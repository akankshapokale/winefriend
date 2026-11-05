import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { journalArticles } from "@/data/journal";
import { FadeUp } from "@/components/animations/FadeUp";
import { ImageReveal } from "@/components/animations/ImageReveal";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = journalArticles.find((item) => item.slug === slug);
  return {
    title: article ? `${article.title} | WineFriend Journal` : "Wine Journal | WineFriend",
    description: article?.excerpt,
  };
}

export default async function JournalArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = journalArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="wf-section wf-detail-page bg-ivory py-16 lg:py-24">
        <Container className="max-w-5xl">
          <Link href="/journal" className="wf-product-link">← Back to the Wine Journal</Link>
          <FadeUp>
            <p className="wf-collection-kicker mt-8">Wine Journal</p>
            <h1 className="wf-page-title max-w-4xl">{article.title}</h1>
          </FadeUp>
          <ImageReveal direction="left" className="relative mt-8 mb-8 aspect-[16/9] overflow-hidden">
            <Image src={article.image} alt={article.title} fill priority sizes="(max-width: 1023px) 100vw, 80vw" className="object-cover" />
          </ImageReveal>
          {article.excerpt && <FadeUp><p className="wf-page-lede max-w-3xl">{article.excerpt}</p></FadeUp>}
        </Container>
      </main>
      <Footer />
    </>
  );
}
