export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaHref: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  category?: string;
  shortDescription?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  excerpt?: string;
  image: string;
  slug: string;
  date?: string;
  featured?: boolean;
}

export interface AboutPillar {
  icon: string;
  title: string;
  description?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  location: string;
  phone: string[];
  email: string;
  contactPerson?: string;
  hours?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url?: string;
}
