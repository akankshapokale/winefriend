import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { products, productDescriptions } from "@/data/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return { title: product ? `${product.name} | WineFriend` : "Product | WineFriend" };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  return (
    <>
      <Header />
      <Suspense fallback={<main className="wf-section wf-detail-page bg-ivory py-16 lg:py-24" aria-busy="true" />}>
        <ProductDetailContent params={params} />
      </Suspense>
      <Footer />
    </>
  );
}

async function ProductDetailContent({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main className="wf-section wf-detail-page bg-ivory py-16 lg:py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ImageReveal direction="left" className="relative aspect-[4/3] overflow-hidden bg-cream">
            <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
          </ImageReveal>
          <FadeUp>
            <p className="wf-collection-kicker">WineFriend Products</p>
            <h1 className="wf-page-title">{product.name}</h1>
            <p className="wf-page-lede">{productDescriptions[product.slug] ?? product.shortDescription ?? "Explore this wine product from WineFriend."}</p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Button href="/contact">Enquire About This Product</Button>
              <Link href="/products" className="wf-product-link">Back to all products</Link>
            </div>
          </FadeUp>
        </Container>
    </main>
  );
}
