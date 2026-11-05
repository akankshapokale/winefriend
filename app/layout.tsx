import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import localFont from "next/font/local";
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

const italianno = localFont({
  src: "../public/Italianno-Regular.ttf",
  variable: "--font-italianno",
  display: "swap",
  weight: "400",
});

const brandTitle = "Kamaltara Enterprises | Always in All Ways for Wine Lovers";
const brandDescription =
  "Always in All Ways for Wine Lovers. Wine Friend is a registered trademark of Nashik-based Kamaltara Enterprises, owned and operated by Manoj Jagtap. The company manufactures and imports wine products, offers customisation, and arranges Nashik winery tours.";

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
      className={`${playfair.variable} ${inter.variable} ${italianno.variable} antialiased`}
    >
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
