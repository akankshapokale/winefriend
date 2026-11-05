import { Suspense } from "react";
import { redirect } from "next/navigation";
import { journalArticles } from "@/data/journal";

type LegacyJournalProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journalArticles.map(({ slug }) => ({ slug }));
}

export default function LegacyJournalArticlePage({ params }: LegacyJournalProps) {
  return (
    <Suspense fallback={null}>
      <LegacyJournalRedirect params={params} />
    </Suspense>
  );
}

async function LegacyJournalRedirect({ params }: LegacyJournalProps) {
  const { slug } = await params;
  return redirect(`/journal/${slug}`);
}
