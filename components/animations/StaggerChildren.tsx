"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StaggerChildrenProps {
  children: React.ReactNode;
  stagger?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function StaggerChildren({
  children,
  stagger = 0.15,
  duration = 0.6,
  y = 40,
  className = "",
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const childElements = el.children;
    if (!childElements.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        childElements,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [stagger, duration, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
