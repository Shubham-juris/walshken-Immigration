import React from "react";
import { useNavigate } from "react-router-dom";

const BusinessInvestorVisa = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Business & Investor Visa
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Unlock global opportunities by investing abroad and expanding your
            business internationally.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose a Business Investor Visa?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Business or Investor Visa provides individuals and companies the
              opportunity to invest, establish, or expand their businesses in a
              foreign country. This visa opens doors to permanent residency,
              global trade, and new markets.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our expert visa consultants help you navigate the process with
              ease, ensuring compliance with immigration laws while maximizing
              your business potential abroad.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
              alt="Business Investor Visa"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Key Benefits of Business & Investor Visas
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Global Expansion",
                desc: "Access international markets and grow your business presence globally.",
              },
              {
                title: "Residency Options",
                desc: "Many countries offer permanent residency and citizenship pathways.",
              },
              {
                title: "Tax Advantages",
                desc: "Benefit from favorable tax regimes and business incentives abroad.",
              },
              {
                title: "Family Inclusion",
                desc: "Bring your spouse and children with dependent visa options.",
              },
              {
                title: "Investment Opportunities",
                desc: "Invest in real estate, startups, or government bonds for visa eligibility.",
              },
              {
                title: "Networking & Trade",
                desc: "Expand professional networks and trade partnerships worldwide.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-800 text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Application Process</h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="p-6 bg-indigo-900 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Step 1: Consultation
              </h3>
              <p className="text-gray-200">
                We assess your eligibility and recommend the best visa options
                for your business goals.
              </p>
            </div>
            <div className="p-6 bg-indigo-900 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Step 2: Documentation
              </h3>
              <p className="text-gray-200">
                Assistance with preparing financial records, investment proofs,
                and legal documents.
              </p>
            </div>
            <div className="p-6 bg-indigo-900 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Step 3: Submission</h3>
              <p className="text-gray-200">
                We file your visa application and provide guidance until you
                receive approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Countries Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Popular Destinations for Business & Investor Visas
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              "USA",
              "Canada",
              "UK",
              "Australia",
              "Portugal",
              "UAE",
              "Singapore",
              "New Zealand",
            ].map((country, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow hover:bg-gray-200 transition"
              >
                <h3 className="text-xl font-semibold text-indigo-700">
                  {country}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-700">
                Years of experience in immigration and business consultancy.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Tailored Solutions</h3>
              <p className="text-gray-700">
                Customized visa plans based on your investment and goals.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">High Success Rate</h3>
              <p className="text-gray-700">
                Trusted track record with successful visa approvals worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 py-14 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Expand Your Business Globally?
        </h2>
        <p className="mb-6 text-lg">
          Contact our experts today to explore the right Business & Investor
          Visa options for you.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Free Consultation
        </button>
      </section>
    </div>
  );
};

export default BusinessInvestorVisa;
