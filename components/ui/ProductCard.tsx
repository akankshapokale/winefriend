"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShoppingCart } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index: number;
  description: string;
}

export function ProductCard({ product, index, description }: ProductCardProps) {
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    const cartKey = "winefriend-cart";
    const cart = JSON.parse(window.localStorage.getItem(cartKey) ?? "[]") as Array<{
      productId: string;
      quantity: number;
    }>;
    const existingItem = cart.find((item) => item.productId === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ productId: product.id, quantity: 1 });
    }

    window.localStorage.setItem(cartKey, JSON.stringify(cart));
    setAdded(true);
  };

  return (
    <article className="wf-product-card group rounded-none overflow-hidden">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="wf-product-image-frame relative aspect-[4/3] overflow-hidden bg-card">
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
      <button
        type="button"
        className="wf-product-cart-button"
        onClick={addToCart}
        aria-label={`${added ? "Add another" : "Add"} ${product.name} to cart`}
      >
        {added ? <Check aria-hidden="true" /> : <ShoppingCart aria-hidden="true" />}
        {added ? "Added" : "Add to cart"}
      </button>
    </article>
  );
}
