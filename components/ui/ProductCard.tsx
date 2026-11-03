"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="wf-product-card group block bg-[#fbf8f3] rounded-none overflow-hidden transition-all duration-500 hover:-translate-y-1"
    >
      <div className="wf-product-image-frame relative aspect-square overflow-hidden bg-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="wf-product-image object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
        />
        {/* Fallback */}
        <div className="absolute inset-0 img-fallback-cream -z-10" />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/10 transition-colors duration-500" />
      </div>
      <div className="p-3 sm:p-4 text-center border-t border-cream-dark/70">
        <h3 className="font-serif font-medium text-charcoal text-xs sm:text-sm mb-1 group-hover:text-burgundy transition-colors leading-tight">
          {product.name}
        </h3>
        <span className="inline-flex items-center gap-1 text-burgundy font-sans text-[9px] font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details
          <ArrowRight className="w-2.5 h-2.5" />
        </span>
      </div>
    </Link>
  );
}
