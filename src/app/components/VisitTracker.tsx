"use client";

import { useEffect } from "react";

type TrackVisitPayload = {
  pathname: string;
  referrer: string;
  language: string;
};

const SESSION_KEY = "visit_logged_v1";

export default function VisitTracker() {
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      if (sessionStorage.getItem(SESSION_KEY) === "1") return;
      sessionStorage.setItem(SESSION_KEY, "1");

      const payload: TrackVisitPayload = {
        pathname: window.location.pathname,
        referrer: document.referrer || "",
        language: navigator.language || "",
      };

      // Fire-and-forget; keepalive helps on quick navigations/close tab.
      fetch("/api/track-visit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {
        // Intentionally ignore tracking errors to avoid impacting UX.
      });
    } catch {
      // Intentionally ignore tracking errors to avoid impacting UX.
    }
  }, []);

  return null;
}


