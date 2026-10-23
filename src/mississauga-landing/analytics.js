import { SITE_CONFIG } from "./siteConfig";

const UTM_STORAGE_KEY = "walshken_mississauga_utms";
const DEDUP_STORAGE_KEY = "walshken_dispatched_events";

export function captureAndPersistUtms() {
  if (typeof window === "undefined") return {};

  const searchParams = new URLSearchParams(window.location.search);
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ];

  const foundUtms = {};
  let hasNewUtms = false;

  utmKeys.forEach((key) => {
    const val = searchParams.get(key);
    if (val && val.trim().length > 0 && !val.includes("@")) {
      foundUtms[key] = val.trim().slice(0, 120);
      hasNewUtms = true;
    }
  });

  if (hasNewUtms) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(foundUtms));
    } catch {
      // Ignore storage restrictions
    }
    return foundUtms;
  }

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Ignore storage read errors
  }

  return {};
}

export function buildCalendlyUrl(ctaPlacement) {
  const baseUrl = SITE_CONFIG.primaryBookingUrl;
  if (typeof window === "undefined") return baseUrl;

  try {
    const url = new URL(baseUrl);
    const utms = captureAndPersistUtms();

    Object.entries(utms).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      }
    });

    if (ctaPlacement && !url.searchParams.get("utm_content")) {
      url.searchParams.set("utm_content", ctaPlacement);
    }

    return url.toString();
  } catch {
    return baseUrl;
  }
}

function isDuplicateEvent(dedupKey) {
  if (!dedupKey || typeof window === "undefined") return false;
  try {
    const raw = sessionStorage.getItem(DEDUP_STORAGE_KEY);
    const list = raw ? JSON.parse(raw) : [];
    if (list.includes(dedupKey)) {
      return true;
    }
    list.push(dedupKey);
    sessionStorage.setItem(DEDUP_STORAGE_KEY, JSON.stringify(list));
    return false;
  } catch {
    return false;
  }
}

export function trackEvent(eventName, payload = {}) {
  if (typeof window === "undefined") return;

  if (payload.dedup_key && isDuplicateEvent(payload.dedup_key)) {
    return;
  }

  const utms = captureAndPersistUtms();
  const safePayload = {
    event: eventName,
    cta_placement: payload.cta_placement,
    landing_page_url:
      payload.landing_page_url ||
      `${window.location.origin}${window.location.pathname}`,
    timestamp: payload.timestamp || new Date().toISOString(),
    experiment_variant: payload.experiment_variant,
    utm_source: payload.utm_source || utms.utm_source,
    utm_medium: payload.utm_medium || utms.utm_medium,
    utm_campaign: payload.utm_campaign || utms.utm_campaign,
    utm_content: payload.utm_content || utms.utm_content,
    utm_term: payload.utm_term || utms.utm_term,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(safePayload);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, safePayload);
  }

  if (typeof window.fbq === "function") {
    if (eventName === "booking_cta_click") {
      window.fbq("trackCustom", "BookingCTAClick", {
        cta_placement: safePayload.cta_placement,
      });
    } else if (eventName === "consultation_booked") {
      window.fbq("track", "Schedule", {
        currency: "CAD",
        value: 50.0,
      });
    } else if (eventName === "consultation_payment_completed") {
      window.fbq("track", "Purchase", {
        currency: "CAD",
        value: 50.0,
      });
    }
  }
}
