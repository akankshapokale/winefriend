"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ImageRevealProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
}

export function ImageReveal({
  children,
  direction = "left",
  className = "",
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const clipPaths: Record<string, { from: string; to: string }> = {
      left: {
        from: "inset(0 100% 0 0)",
        to: "inset(0 0% 0 0)",
      },
      right: {
        from: "inset(0 0 0 100%)",
        to: "inset(0 0 0 0%)",
      },
      up: {
        from: "inset(100% 0 0 0)",
        to: "inset(0% 0 0 0)",
      },
      down: {
        from: "inset(0 0 100% 0)",
        to: "inset(0 0 0% 0)",
      },
    };

    const { from, to } = clipPaths[direction];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: from },
        {
          clipPath: to,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Inner image scale
      const img = el.querySelector("img, .img-inner");
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.3 },
          {
            scale: 1,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
