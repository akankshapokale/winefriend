import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Container } from "./Container";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site";
import { quickLinks, contactInfo, socialLinks, legalLinks } from "@/data/footer";

export function Footer() {
  // Use a static year to avoid Next.js prerendering issues with dynamic values
  const currentYear = 2026;

  return (
    <footer className="wf-footer bg-[#4B0B20] text-white pt-16 lg:pt-20 pb-8">
      <Container>
        {/* Top border accent */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-16 -mt-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-burgundy flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2C12 2 8 6 8 10c0 2.21 1.79 4 4 4s4-1.79 4-4c0-4-4-8-4-8z" />
                  <path d="M12 14v8" />
                  <path d="M9 22h6" />
                </svg>
              </div>
              <div>
                <div className="font-serif text-lg font-bold tracking-tight leading-none text-white">
                  WINE FRIEND
                </div>
              </div>
            </div>
            <p className="font-sans text-sm text-white/50 italic leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-burgundy mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/50">
                  {contactInfo.location}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-burgundy mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  {contactInfo.phone.map((num) => (
                    <a
                      key={num}
                      href={`tel:${num.replace(/\s/g, "")}`}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-burgundy mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Follow Us
            </h4>
            <SocialIcons links={socialLinks} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-sans">
            &copy; {currentYear} WineFriend. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors font-sans"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
