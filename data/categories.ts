import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "wine-products",
    title: "Wine Products & Accessories",
    description:
      "Discover wine openers, glassware, decanters, preservation systems and more.",
    image: "/images/categories/wine-accessories-display.webp",
    ctaText: "Explore Products",
    ctaHref: "/products",
  },
  {
    id: "business-solutions",
    title: "Business & Custom Solutions",
    description:
      "Product supply, bulk orders and customised solutions for your business.",
    image: "/images/categories/business-wine-gifting.webp",
    ctaText: "Partner With Us",
    ctaHref: "/business-solutions",
  },
  {
    id: "wine-tours",
    title: "Wine Tours & Experiences",
    description:
      "Explore Nashik's vineyards and experience the art of winemaking.",
    image: "/images/categories/nashik-countryside.webp",
    ctaText: "Explore Experiences",
    ctaHref: "/wine-tours",
  },
];
