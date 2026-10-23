import React, { useEffect, useState } from "react";
import { SITE_CONFIG } from "../mississauga-landing/siteConfig";
import {
  captureAndPersistUtms,
  trackEvent,
} from "../mississauga-landing/analytics";
import AnnouncementBar from "../mississauga-landing/AnnouncementBar";
import CompactHeader from "../mississauga-landing/CompactHeader";
import HeroSection from "../mississauga-landing/HeroSection";
import ProblemCardGrid from "../mississauga-landing/ProblemCardGrid";
import ServiceCardGrid from "../mississauga-landing/ServiceCardGrid";
import ConsultationOffer from "../mississauga-landing/ConsultationOffer";
import ThreeStepProcess from "../mississauga-landing/ThreeStepProcess";
import CredentialBlock from "../mississauga-landing/CredentialBlock";
import AddressPanel from "../mississauga-landing/AddressPanel";
import FAQAccordion from "../mississauga-landing/FAQAccordion";
import FinalCTA from "../mississauga-landing/FinalCTA";
import StickyMobileCTA from "../mississauga-landing/StickyMobileCTA";

export default function MississaugaConsultation() {
  const [headlineVariant, setHeadlineVariant] = useState("A");
  const [ctaVariant, setCtaVariant] = useState("A");
  const [feeVariant, setFeeVariant] = useState("A");

  useEffect(() => {
    window.scrollTo(0, 0);

    // 1. Ensure Manrope & Inter Google Fonts are loaded
    const fontLinkId = "walshken-mississauga-fonts";
    if (!document.getElementById(fontLinkId)) {
      const fontLink = document.createElement("link");
      fontLink.id = fontLinkId;
      fontLink.rel = "stylesheet";
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@700;800&display=swap";
      document.head.appendChild(fontLink);
    }

    // 2. Set SEO Title & Meta Description
    const previousTitle = document.title;
    document.title = SITE_CONFIG.seo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    const previousDesc = metaDesc?.getAttribute("content") || "";
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", SITE_CONFIG.seo.description);

    // 3. Set Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalLink?.getAttribute("href") || "";
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", SITE_CONFIG.canonicalUrl);

    // 4. Inject Verified LegalService JSON-LD Structured Data
    const scriptId = "walshken-mississauga-jsonld";
    let jsonLdScript = document.getElementById(scriptId);
    if (!jsonLdScript) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.id = scriptId;
      jsonLdScript.type = "application/ld+json";
      jsonLdScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: SITE_CONFIG.companyName,
        url: SITE_CONFIG.canonicalUrl,
        email: SITE_CONFIG.contactEmail,
        priceRange: "$50 CAD (Initial Consultation)",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.location.street,
          addressLocality: "Mississauga",
          addressRegion: "ON",
          postalCode: "L5S 0A8",
          addressCountry: "CA",
        },
        areaServed: [
          "Mississauga",
          "Brampton",
          "Toronto",
          "Greater Toronto Area",
        ],
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: SITE_CONFIG.primaryBookingUrl,
          },
          result: {
            "@type": "Reservation",
            name: "Immigration Consultation ($50 CAD)",
          },
        },
      });
      document.head.appendChild(jsonLdScript);
    }

    // 5. Capture UTMs, Check Experiment Variants & Fire Page View Event
    captureAndPersistUtms();

    const params = new URLSearchParams(window.location.search);
    const hVar = params.get("exp_headline") === "B" ? "B" : "A";
    const cVar = params.get("exp_cta") === "B" ? "B" : "A";
    const fVar = params.get("exp_fee") === "B" ? "B" : "A";

    setHeadlineVariant(hVar);
    setCtaVariant(cVar);
    setFeeVariant(fVar);

    trackEvent("landing_page_view", {
      dedup_key: "initial_landing_page_view",
      experiment_variant: `H:${hVar}|C:${cVar}|F:${fVar}`,
    });

    return () => {
      document.title = previousTitle;
      if (metaDesc && previousDesc) {
        metaDesc.setAttribute("content", previousDesc);
      }
      if (canonicalLink && previousCanonical) {
        canonicalLink.setAttribute("href", previousCanonical);
      }
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const activeCtaLabel =
    ctaVariant === "B"
      ? SITE_CONFIG.experiments.buttonCopy.B
      : SITE_CONFIG.experiments.buttonCopy.A;

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="min-h-screen flex flex-col bg-white text-[#444444] selection:bg-[#FEE6BA] selection:text-black"
    >
      {/* Scoped Font Heading Helper */}
      <style>{`
        .font-heading {
          font-family: 'Manrope', sans-serif;
        }
      `}</style>

      {/* 01. Announcement Bar */}
      <AnnouncementBar />

      {/* 02. Compact Header */}
      <CompactHeader ctaLabel={activeCtaLabel} />

      {/* Main Conversion Content */}
      <main id="main-content" className="flex-1">
        {/* 03. Hero Section */}
        <HeroSection
          headlineVariant={headlineVariant}
          ctaLabel={activeCtaLabel}
          feeVariant={feeVariant}
        />

        {/* 04. Recognize Visitor's Problem (4 Cards) */}
        <ProblemCardGrid ctaLabel={activeCtaLabel} />

        {/* 05. Four Service Pathways (4 Cards) */}
        <ServiceCardGrid ctaLabel={activeCtaLabel} />

        {/* 06. Dedicated $50 Offer Card */}
        <ConsultationOffer ctaLabel={activeCtaLabel} />

        {/* 07. Three-Step Booking Process */}
        <ThreeStepProcess ctaLabel={activeCtaLabel} />

        {/* 08. Why Walshken & Verified RCIC Credentials */}
        <CredentialBlock />

        {/* 09. Mississauga Office & Map */}
        <AddressPanel ctaLabel={activeCtaLabel} />

        {/* 10. Accessible FAQ Accordion */}
        <FAQAccordion ctaLabel={activeCtaLabel} />
      </main>

      {/* 11. Final Booking Close & 12. Legal Footer */}
      <FinalCTA ctaLabel={activeCtaLabel} />

      {/* Mobile Sticky Booking Bar */}
      <StickyMobileCTA ctaLabel={activeCtaLabel} />
    </div>
  );
}
