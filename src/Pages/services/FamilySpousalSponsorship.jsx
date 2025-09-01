import React from "react";
import { useNavigate } from "react-router-dom";

const FamilySpousalSponsorship = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-red-500 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Family & Spousal Sponsorship
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Reunite with your loved ones and build your future together in a new
            country with our trusted visa support.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Bringing Families Together
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Family and Spousal Sponsorship visas allow citizens or permanent
              residents to sponsor their spouse, children, parents, or other
              eligible relatives to live with them abroad. Immigration laws are
              designed to keep families united, making this one of the most
              common visa categories.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team provides end-to-end assistance, from eligibility checks
              to preparing applications and ensuring a smooth visa approval
              process for your family.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=900&q=80"
              alt="Family Sponsorship"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Benefits of Family & Spousal Sponsorship
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Family Reunification",
                desc: "Live with your spouse, children, or parents without long separations.",
              },
              {
                title: "Permanent Residency",
                desc: "Sponsored family members often qualify for permanent residency.",
              },
              {
                title: "Work & Study Rights",
                desc: "Dependents can access work permits and study opportunities.",
              },
              {
                title: "Healthcare & Benefits",
                desc: "Access healthcare, social security, and other resident benefits.",
              },
              {
                title: "Path to Citizenship",
                desc: "Sponsorship often provides a pathway to citizenship in many countries.",
              },
              {
                title: "Stronger Family Bonds",
                desc: "Share important life moments together without immigration barriers.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Categories */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Who Can You Sponsor?
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              "Spouse / Partner",
              "Children (Dependent)",
              "Parents & Grandparents",
              "Other Relatives (case-specific)",
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:bg-gray-200 transition"
              >
                <h3 className="text-xl font-semibold text-red-500">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Sponsorship Process</h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="p-6 bg-red-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Step 1: Eligibility Check
              </h3>
              <p className="text-gray-200">
                We review your profile to confirm eligibility for sponsorship.
              </p>
            </div>
            <div className="p-6 bg-red-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Step 2: Documentation
              </h3>
              <p className="text-gray-200">
                Assistance with preparing proof of relationship, identity, and
                financial support.
              </p>
            </div>
            <div className="p-6 bg-red-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Step 3: Application & Approval
              </h3>
              <p className="text-gray-200">
                Submission of your application and support until final approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
              <p className="text-gray-700">
                Years of expertise in handling family and spousal sponsorships
                worldwide.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Personalized Guidance
              </h3>
              <p className="text-gray-700">
                Every family is unique — we provide tailored solutions for your
                needs.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">High Success Rate</h3>
              <p className="text-gray-700">
                A proven track record of reuniting families through visa
                approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-600 py-14 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Reunite with Your Family?
        </h2>
        <p className="mb-6 text-lg">
          Contact our immigration experts today and start the sponsorship
          process with confidence.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Free Consultation
        </button>
      </section>
    </div>
  );
};

export default FamilySpousalSponsorship;
