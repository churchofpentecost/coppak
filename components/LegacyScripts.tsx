"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    coppakReady?: (event: string, callback: () => void) => void;
    jQuery?: (target: Window) => { trigger: (event: string) => void };
  }
}

// The original theme uses jQuery plugins. Load them after React hydration,
// in their original order. Navigation uses regular links so each page has
// a clean plugin lifecycle without duplicate carousel or gallery handlers.
export default function LegacyScripts({ sources }: { sources: string[] }) {
  useEffect(() => {
    let cancelled = false;
    window.coppakReady = (_event, callback) => callback();
    async function load() {
      for (const src of sources) {
        if (cancelled) return;
        await new Promise<void>((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = false;
          script.onload = () => resolve();
          script.onerror = () => {
            console.error(`Could not load site script: ${src}`);
            resolve();
          };
          document.body.appendChild(script);
        });
      }
      if (!cancelled) {
        window.jQuery?.(window).trigger("load");
        document.documentElement.dataset.siteReady = "true";
      }
    }
    void load();
    return () => { cancelled = true; };
  }, [sources]);
  return null;
}
