import type { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/#products",
    children: [
      { label: "Wine Accessories", href: "/#products" },
      { label: "Wine Storage", href: "/#products" },
      { label: "Bar Furniture", href: "/#products" },
    ],
  },
  { label: "Business Solutions", href: "/#business-solutions" },
  { label: "Wine Tours & Experiences", href: "/#wine-tours" },
  { label: "Wine Journal", href: "/#wine-journal" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
];
