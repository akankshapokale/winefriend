"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index: number;
  description: string;
}

export function ProductCard({ product, index, description }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="wf-product-card group block rounded-none overflow-hidden"
    >
      <div className="wf-product-image-frame relative aspect-[4/3] overflow-hidden bg-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="wf-product-image object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
        <div className="wf-product-image-wash absolute inset-0" />
        <span className="wf-product-index">{String(index).padStart(2, "0")}</span>
      </div>
      <div className="wf-product-card-copy">
        <h3 className="wf-product-title">{product.name}</h3>
        <p className="wf-product-description">{description}</p>
        <span className="wf-product-link">
          Explore Details
          <ArrowRight aria-hidden="true" className="wf-product-arrow" />
        </span>
      </div>
    </Link>
  );
}
