import React from "react";
import { useNavigate } from "react-router-dom";

const PermanentResidency = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Permanent Residency (PR) Visa
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Secure your future with Permanent Residency. Live, work, and enjoy
            unlimited opportunities in your dream country.
          </p>
        </div>
      </section>

      {/* About PR */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Apply for Permanent Residency?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Permanent Residency Visa allows you to live, work, and study in
              a country of your choice without time restrictions. It gives you
              access to social benefits, healthcare, and the pathway to
              citizenship.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With PR status, you can secure your family’s future, access
              world-class opportunities, and enjoy a better quality of life.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
              alt="Permanent Residency"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Key Benefits of Permanent Residency
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Live & Work Freely",
                desc: "Freedom to live, work, or study in the country without restrictions.",
              },
              {
                title: "Healthcare Access",
                desc: "Enjoy public healthcare and social security benefits.",
              },
              {
                title: "Pathway to Citizenship",
                desc: "PR is often the first step towards full citizenship.",
              },
              {
                title: "Family Security",
                desc: "Include your spouse and children in your PR application.",
              },
              {
                title: "Education Opportunities",
                desc: "Access top universities and schools at resident tuition fees.",
              },
              {
                title: "Travel Flexibility",
                desc: "Travel in and out of the country freely with PR status.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Who is Eligible for PR?
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              "Skilled Professionals",
              "International Students",
              "Business Investors",
              "Family Sponsorship Applicants",
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:bg-gray-200 transition"
              >
                <h3 className="text-lg font-semibold text-green-700">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PR Process Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Step-by-Step PR Application Process
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="p-6 bg-green-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Step 1: Eligibility Check
              </h3>
              <p className="text-gray-200">
                We assess your qualifications, work experience, and language
                skills.
              </p>
            </div>
            <div className="p-6 bg-green-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Step 2: Documentation
              </h3>
              <p className="text-gray-200">
                We assist in gathering required documents like proof of funds,
                ID, and medical tests.
              </p>
            </div>
            <div className="p-6 bg-green-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Step 3: Application & Approval
              </h3>
              <p className="text-gray-200">
                Submit your PR application and receive support until approval.
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
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-700">
                Our experts provide personalized PR strategies for maximum
                success.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">High Success Rate</h3>
              <p className="text-gray-700">
                Hundreds of successful PR applications handled by our team.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">End-to-End Support</h3>
              <p className="text-gray-700">
                From eligibility to approval, we’re with you every step of the
                way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 py-14 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your PR Journey Today
        </h2>
        <p className="mb-6 text-lg">
          Secure your future with Permanent Residency. Contact us for a free
          consultation and personalized guidance.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Free Consultation
        </button>
      </section>
    </div>
  );
};

export default PermanentResidency;
