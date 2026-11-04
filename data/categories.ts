import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "wine-products",
    title: "Wine Products & Accessories",
    description:
      "Wine and champagne corks, openers, glasses, decanters, preservation systems, bottle holders, racks and wine-barrel furniture.",
    image: "/images/categories/wine-accessories-display.webp",
    ctaText: "Explore Products",
    ctaHref: "/products",
  },
  {
    id: "business-solutions",
    title: "Business & Custom Solutions",
    description:
      "Kamaltara Enterprises manufactures and imports wine-related products, with customisation to client specifications and market trends.",
    image: "/images/categories/business-wine-gifting.webp",
    ctaText: "Partner With Us",
    ctaHref: "/#business-solutions",
  },
  {
    id: "wine-tours",
    title: "Wine Tours & Experiences",
    description:
      "Personalised small-group tours visit 4–5 Nashik wineries, with hotel pickup and drop-off.",
    image: "/images/categories/nashik-countryside.webp",
    ctaText: "Explore Experiences",
    ctaHref: "/wine-tours",
  },
];
