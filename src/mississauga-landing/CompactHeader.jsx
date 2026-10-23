import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { PAGE_COPY, SITE_CONFIG } from "./siteConfig";
import BookingButton from "./BookingButton";
import logo from "../assets/hero/logo.webp";
export default function CompactHeader({ ctaLabel }) {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Official Walshken Immigration Logo (clicks back to main website Home) */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            aria-label={`${SITE_CONFIG.companyName} - Back to Home`}
            className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D40000]"
          >
            {!logoError ? (
              <img
                src={logo}
                alt={SITE_CONFIG.companyName}
                width={190}
                height={52}
                onError={() => setLogoError(true)}
                className="h-10 w-auto object-contain sm:h-12"
              />
            ) : (
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#D40000] text-lg font-extrabold tracking-tight text-white shadow-xs"
                  aria-hidden="true"
                >
                  W
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-extrabold tracking-tight text-black sm:text-lg leading-none">
                    WALSHKEN
                  </span>
                  <span className="mt-0.5 text-[10px] font-semibold tracking-[0.18em] text-[#444444] uppercase sm:text-xs">
                    Immigration Services
                  </span>
                </div>
              </div>
            )}
          </Link>

          <Link
            to="/"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-[#444444] hover:text-[#D40000] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Main Website</span>
          </Link>
        </div>

        {/* Single Primary CTA */}
        <div>
          <BookingButton
            placement="compact_header"
            label={ctaLabel || PAGE_COPY.section02Header.cta}
            size="sm"
          />
        </div>
      </div>

      {/* Prominent RCIC Identification Sub-bar */}
      <div className="border-t border-[#D8B79B]/40 bg-[#FEE6BA]/35 px-4 py-1.5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-xs text-[#444444] sm:px-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck
              className="h-3.5 w-3.5 shrink-0 text-[#D40000]"
              aria-hidden="true"
            />
            <span>
              Immigration consultations with{" "}
              <strong className="font-semibold text-black">
                {SITE_CONFIG.rcicDetails.fullLegalName}
              </strong>
              , CICC Licence No.{" "}
              <strong className="font-semibold text-black">
                {SITE_CONFIG.rcicDetails.licenceNumber}
              </strong>
              .
            </span>
          </div>
          <a
            href={SITE_CONFIG.ciccRegisterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-black underline decoration-[#D8B79B] underline-offset-2 transition-colors hover:text-[#D40000]"
          >
            Verify on CICC Public Register
          </a>
        </div>
      </div>
    </header>
  );
}
