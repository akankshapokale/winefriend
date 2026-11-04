import Link from "next/link";

interface BrandLogoProps { inverse?: boolean; className?: string }

export function BrandLogo({ inverse = false, className = "" }: BrandLogoProps) {
  const ink = inverse ? "text-cream" : "text-burgundy-dark";
  return (
    <Link href="/" aria-label="Wine Friend — Always in All Ways for Wine Lovers" className={`wf-brand-logo ${ink} ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 48 64" fill="none" className="wf-brand-logo-glass">
        <path d="M13 5C8 17 7 27 11 34c3 5 8 8 13 9 5-1 10-4 13-9 4-7 3-17-2-29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 23c1 8 5 13 12 15 7-2 11-7 12-15-4 2-8 3-12 3s-8-1-12-3Z" className="wf-brand-logo-wine" fill="currentColor" />
        <path d="M24 43v15m-8 0h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 32c2 3 5 5 8 6" stroke="white" strokeOpacity=".75" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="wf-brand-logo-copy">
        <span className="wf-brand-logo-name">WINE FRIEND</span>
        <span className="wf-brand-logo-tagline">Always in All Ways for Wine Lovers</span>
      </span>
    </Link>
  );
}
