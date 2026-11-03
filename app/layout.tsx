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

export const metadata: Metadata = {
  title: "WineFriend | Everything Wine. One Trusted Friend.",
  description:
    "From wine accessories and customised business solutions to unforgettable vineyard experiences, WineFriend brings you closer to the world of wine. Based in Nashik, Maharashtra, India.",
  keywords: [
    "wine accessories",
    "wine products",
    "Nashik wine tours",
    "wine experiences",
    "business solutions",
    "WineFriend",
  ],
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
