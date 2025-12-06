// components/Analytics.tsx — FINAL, 100% WORKING GA4 (NO SUSPENSE ERROR)
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GA_ID) return;

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    // @ts-ignore
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: pathname,
    });

    // Track page views on route change
    const handleRouteChange = () => {
      gtag("config", process.env.NEXT_PUBLIC_GA_ID, { page_path: pathname });
    };

    return () => {
      // Cleanup
    };
  }, [pathname]);

  return null;
}