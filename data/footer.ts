import type { FooterLink, ContactInfo, SocialLink } from "@/types";

export const quickLinks: FooterLink[] = [
  { label: "Products", href: "/products" },
  { label: "Business Solutions", href: "/business-solutions" },
  { label: "Wine Tours & Experiences", href: "/wine-tours" },
  { label: "Wine Journal", href: "/wine-journal" },
  { label: "About Us", href: "/about" },
];

export const contactInfo: ContactInfo = {
  location: "Nashik, Maharashtra, India",
  phone: ["+91 98220 92443", "+91 96228 46748"],
  email: "info@winefriend.in",
};

export const socialLinks: SocialLink[] = [
  { platform: "Facebook", href: "#", icon: "facebook" },
  { platform: "Instagram", href: "#", icon: "instagram" },
  { platform: "YouTube", href: "#", icon: "youtube" },
  { platform: "LinkedIn", href: "#", icon: "linkedin" },
];

export const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];
