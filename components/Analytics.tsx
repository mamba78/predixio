// components/Analytics.tsx — FINAL, 100% WORKING GA4 + NO TSC ERRORS (2025)
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fix TypeScript complaining about window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GA_ID) return;

    // Load gtag script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize dataLayer + gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}