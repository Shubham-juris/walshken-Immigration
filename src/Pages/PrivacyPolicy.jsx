import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShieldAlt, FaFileContract, FaUndoAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
  const location = useLocation();

  // Support direct tab opening via query or hash (e.g., /privacy-policy#terms)
  const [activeTab, setActiveTab] = useState("privacy");

  useEffect(() => {
    if (location.hash === "#terms") {
      setActiveTab("terms");
    } else if (location.hash === "#refund") {
      setActiveTab("refund");
    } else {
      setActiveTab("privacy");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-red-950 text-white min-h-screen font-sans">
      {/* ────────────────────────────────────────────────────────
          HERO HEADER (FIXED DESCENDER CLIPPING)
          ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 text-center border-b border-red-950/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-red-500 font-semibold uppercase tracking-widest text-xs mb-3">
            Walshken Immigration Services
          </p>
          
          {/* Added leading-[1.25], pb-3, and overflow-visible to prevent clipping 'g' and 'p' */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 pb-3 leading-[1.25] bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent overflow-visible">
            Legal & Compliance Policies
          </h1>
          
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Effective Date: October 9, 2026 • Review our commitments to transparency, confidentiality, and professional standards.
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          TAB SELECTOR (WITH DARK TEXT ON HOVER)
          ──────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 bg-gray-950/90 rounded-2xl border border-gray-800">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
              activeTab === "privacy"
                ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
                : "text-gray-400 hover:text-black hover:bg-white"
            }`}
          >
            <FaShieldAlt /> Privacy Policy
          </button>

          <button
            onClick={() => setActiveTab("terms")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
              activeTab === "terms"
                ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
                : "text-gray-400 hover:text-black hover:bg-white"
            }`}
          >
            <FaFileContract /> Terms & Conditions
          </button>

          <button
            onClick={() => setActiveTab("refund")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
              activeTab === "refund"
                ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
                : "text-gray-400 hover:text-black hover:bg-white"
            }`}
          >
            <FaUndoAlt /> Refund & Cancellation
          </button>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────
          CONTENT DISPLAY
          ──────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gray-950/80 p-8 sm:p-12 rounded-2xl border border-gray-800 shadow-2xl">
          
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === "privacy" && (
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div>
                <span className="text-red-500 font-bold uppercase tracking-widest text-xs block mb-1">
                  Official Statement
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Privacy Policy</h2>
                <p className="text-xs text-gray-400">Effective Date: October 9, 2026</p>
                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                  Walshken Immigration Services ("we," "us," or "our") respects the privacy and confidentiality of information collected through its website and immigration consulting services.
                </p>
              </div>

              <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">1. Information We Collect</h3>
                  <p>
                    We may collect names, contact details, identity documents, immigration history, education, employment and financial records, and other information reasonably required to assess eligibility, deliver services, communicate with clients, and meet legal obligations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">2. Use and Disclosure</h3>
                  <p>
                    We collect, use, and disclose personal information with consent or as authorized by applicable law. Information may be shared, where necessary, with immigration authorities, regulatory bodies, authorized representatives, and service providers assisting us in delivering our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">3. Security and Confidentiality</h3>
                  <p>
                    We use reasonable administrative, technical, and organizational safeguards against unauthorized access, use, loss, or disclosure. No electronic communication or storage system can be guaranteed completely secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">4. Retention</h3>
                  <p>
                    We retain personal information for as long as required for the purposes identified, applicable legal obligations, and professional recordkeeping requirements, after which we securely dispose of or anonymize it.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">5. Cookies</h3>
                  <p>
                    Our website may use cookies or similar technologies for essential functions and site improvement. Users may adjust browser settings; where legally required, we will obtain appropriate consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">6. Your Rights</h3>
                  <p>
                    Subject to applicable law, individuals may request access to or correction of their personal information, ask questions about its handling, or withdraw consent where withdrawal is permitted.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">7. Privacy Inquiries and Changes</h3>
                  <p>
                    Please direct privacy questions, requests, or complaints to our designated privacy contact below. We may revise this policy and publish the updated version on our website.
                  </p>
                </div>
              </div>

              {/* Contact Box */}
              <div className="pt-6 border-t border-gray-800 text-xs text-gray-400 space-y-2">
                <p className="font-bold text-white">Contact: Walshken Immigration Services</p>
                <p className="flex items-center gap-2"><FaEnvelope className="text-red-500" /> Email: info@walshkenimmigration.com</p>
                <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-500" /> Address: Unit-304, 3016 5 Ave NE Calgary, AB T2A 6K4</p>
              </div>
            </motion.article>
          )}

          {/* TAB 2: TERMS AND CONDITIONS */}
          {activeTab === "terms" && (
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div>
                <span className="text-red-500 font-bold uppercase tracking-widest text-xs block mb-1">
                  Agreement
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Terms and Conditions</h2>
                <p className="text-xs text-gray-400">Effective Date: October 9, 2026</p>
                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                  By using the Walshken Immigration Services website, you acknowledge these Terms and Conditions.
                </p>
              </div>

              <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">1. General Information</h3>
                  <p>
                    Website materials are for general information only and do not constitute individualized legal or immigration advice. Browsing the website or sending an inquiry does not establish a professional client relationship.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">2. Services and Engagement</h3>
                  <p>
                    Professional services begin only when an engagement is accepted and required consultation or service arrangements are completed. Any signed agreement and applicable professional rules govern the services provided.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">3. No Guarantee of Results</h3>
                  <p>
                    We do not guarantee approval of a visa, permit, permanent residence application, citizenship application, processing time, or other immigration result. Decisions are made by the relevant government authorities.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">4. Client Responsibilities</h3>
                  <p>
                    Clients must provide truthful, complete, and timely information and authentic documents. We may decline or end an engagement for lawful and professionally appropriate reasons, subject to contractual and regulatory duties.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">5. Fees and Payments</h3>
                  <p>
                    Fees, disbursements, payment terms, and refund arrangements are governed by the applicable written engagement agreement and mandatory legal or professional requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">6. Website Content</h3>
                  <p>
                    Unless otherwise indicated, website content and branding belong to Walshken Immigration Services or their respective owners and may not be commercially reproduced without authorization.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">7. Liability</h3>
                  <p>
                    To the extent permitted by law, we are not responsible for losses caused by reliance on general website information, external links, or circumstances beyond our reasonable control. Nothing in these terms excludes non-excludable statutory or professional liability.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">8. Governing Law and Updates</h3>
                  <p>
                    These website terms are governed by the laws of Alberta and applicable federal laws of Canada. We may publish revised terms from time to time, subject to applicable law.
                  </p>
                </div>
              </div>

              {/* Contact Box */}
              <div className="pt-6 border-t border-gray-800 text-xs text-gray-400 space-y-2">
                <p className="font-bold text-white">Contact: Walshken Immigration Services</p>
                <p className="flex items-center gap-2"><FaEnvelope className="text-red-500" /> Email: info@walshkenimmigration.com</p>
                <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-500" /> Address: Unit-304, 3016 5 Ave NE Calgary, AB T2A 6K4</p>
              </div>
            </motion.article>
          )}

          {/* TAB 3: REFUND AND CANCELLATION POLICY */}
          {activeTab === "refund" && (
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div>
                <span className="text-red-500 font-bold uppercase tracking-widest text-xs block mb-1">
                  Billing & Cancellations
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Refund and Cancellation Policy</h2>
                <p className="text-xs text-gray-400">Effective Date: October 9, 2026</p>
                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                  Walshken Immigration Services is committed to transparent and fair billing in accordance with applicable law, professional rules, and written client agreements.
                </p>
              </div>

              <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">1. Consultation Fees</h3>
                  <p>
                    Consultation fees are generally non-refundable once the agreed consultation has been provided, except where required by law or agreed otherwise in writing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">2. Professional Fees</h3>
                  <p>
                    Professional fees are earned as agreed services are performed. Unearned fees and client funds will be accounted for and returned as required by applicable law and professional obligations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">3. Application Outcomes</h3>
                  <p>
                    An application refusal, delay, or other unfavourable decision does not, by itself, require a refund of professional fees properly earned for work performed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">4. Cancellation or Termination</h3>
                  <p>
                    Clients may terminate services in accordance with their agreement and applicable law. Following termination, we will provide any required accounting and refund unused or unearned funds, subject to lawful charges and disbursements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">5. Government and Third-Party Charges</h3>
                  <p>
                    Government charges and third-party costs are governed by the refund practices of the relevant authority or provider. Expenses already properly paid may not be recoverable.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">6. Refund Requests</h3>
                  <p>
                    Written refund requests may be sent to the contact email below. Approved refunds will be processed within the time required by applicable law and professional rules.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 text-red-400">7. Priority of Legal Requirements</h3>
                  <p>
                    If this policy conflicts with mandatory law, professional rules, or a governing service agreement, mandatory requirements will prevail.
                  </p>
                </div>
              </div>

              {/* Contact Box */}
              <div className="pt-6 border-t border-gray-800 text-xs text-gray-400 space-y-2">
                <p className="font-bold text-white">Contact: Walshken Immigration Services</p>
                <p className="flex items-center gap-2"><FaEnvelope className="text-red-500" /> Email: info@walshkenimmigration.com</p>
                <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-500" /> Address: Unit-304, 3016 5 Ave NE Calgary, AB T2A 6K4</p>
              </div>
            </motion.article>
          )}

        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
