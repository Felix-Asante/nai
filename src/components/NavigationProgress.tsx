"use client";

import NextTopLoader from "nextjs-toploader";

/**
 * Slim top progress bar during client-side navigations (App Router).
 * Brand secondary accent; no spinner — keeps the UI calm and NGO-appropriate.
 */
export default function NavigationProgress() {
  return (
    <NextTopLoader
      color="#F4511E"
      initialPosition={0.12}
      crawlSpeed={280}
      height={3}
      crawl
      showSpinner={false}
      easing="cubic-bezier(0.22, 1, 0.36, 1)"
      speed={400}
      shadow="0 0 14px rgba(244, 81, 30, 0.4)"
      zIndex={99999}
      showForHashAnchor={false}
    />
  );
}
