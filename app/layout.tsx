import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/lib/lenis";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const brandTitle = "Kamaltara Enterprises | Always in All Ways for Wine Lovers";
const brandDescription =
  "Always in All Ways for Wine Lovers. Kamaltara Enterprises is a Nashik-based wine product manufacturer and importer founded by Manoj Jagtap in 2004, offering wine accessories, product customisation, business services, and Nashik winery tours.";

export const metadata: Metadata = {
  metadataBase: new URL("https://winefriend.in"),
  applicationName: "Kamaltara Enterprises",
  icons: {
    icon: [
      { url: "/kamaltara-favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/kamaltara-favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    shortcut: "/kamaltara-favicon.ico",
    apple: "/kamaltara-favicon.png",
  },
  title: brandTitle,
  description: brandDescription,
  keywords: [
    "wine accessories",
    "wine products",
    "Nashik wine tours",
    "wine experiences",
    "business solutions",
    "Kamaltara Enterprises",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Kamaltara Enterprises",
    title: brandTitle,
    description: brandDescription,
    images: [
      {
        url: "/logo.png",
        width: 421,
        height: 293,
        alt: "Kamaltara Enterprises golden Wine Friend bottle emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brandTitle,
    description: brandDescription,
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
