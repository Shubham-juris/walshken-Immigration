import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyLegalDisputes = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/contact");
  };
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Property Legal Disputes
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Trusted legal solutions for property ownership, inheritance, and
            real estate disputes.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Resolving Property Disputes Effectively
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Property disputes can arise from ownership conflicts, inheritance
              issues, tenancy disagreements, or fraud. These disputes are often
              complex and emotionally stressful, requiring professional legal
              guidance to protect your rights.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of experienced property dispute lawyers works with
              clients to resolve conflicts through negotiation, mediation, or
              court representation, ensuring your best interests are safeguarded
              at every step.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80"
              alt="Property Disputes"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Types of Disputes */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Common Property Disputes We Handle
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Ownership Disputes",
                desc: "Conflicts over who legally owns the property or land.",
              },
              {
                title: "Inheritance Issues",
                desc: "Family disputes regarding division of ancestral or inherited property.",
              },
              {
                title: "Boundary Conflicts",
                desc: "Disagreements over land boundaries and encroachments.",
              },
              {
                title: "Tenant-Landlord Disputes",
                desc: "Legal issues related to rental agreements, eviction, or property misuse.",
              },
              {
                title: "Fraudulent Transactions",
                desc: "Cases involving forged documents or misrepresentation of property rights.",
              },
              {
                title: "Joint Ownership Disputes",
                desc: "Conflicts between co-owners on property use, sale, or management.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-green-600 text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="p-6 bg-emerald-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Negotiation & Mediation
              </h3>
              <p className="text-gray-200">
                We aim to resolve disputes amicably through dialogue and
                settlements, saving time and costs.
              </p>
            </div>
            <div className="p-6 bg-emerald-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Litigation</h3>
              <p className="text-gray-200">
                When necessary, we represent clients in court with strong legal
                strategies to defend their rights.
              </p>
            </div>
            <div className="p-6 bg-emerald-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Documentation Support
              </h3>
              <p className="text-gray-200">
                Assistance with drafting, reviewing, and validating legal
                documents to avoid future disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Experienced Lawyers
              </h3>
              <p className="text-gray-700">
                Our team has extensive expertise in handling complex property
                disputes.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Client-Focused Approach
              </h3>
              <p className="text-gray-700">
                We prioritize your interests and provide transparent advice at
                every step.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Proven Track Record
              </h3>
              <p className="text-gray-700">
                Successfully resolved disputes for numerous clients across
                domestic and commercial property matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 py-14 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Help With a Property Dispute?
        </h2>
        <p className="mb-6 text-lg">
          Contact our legal team today for expert advice and quick resolution of
          property-related conflicts.
        </p>
        <button
          onClick={handleclick}
          className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PropertyLegalDisputes;
