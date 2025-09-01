import React from "react";
import { useNavigate } from "react-router-dom";

const InternationalAdoptions = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/contact");
  };
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            International Adoptions
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Guiding families through the legal, emotional, and cultural aspects
            of international adoption with trust and care.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Building Families Across Borders
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              International adoption is a life-changing journey that brings
              families together across cultures and countries. While the process
              can be legally complex, we are here to simplify it and support you
              every step of the way.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From legal documentation and compliance with international laws to
              cultural preparation and post-adoption support, our team ensures
              your adoption journey is smooth, transparent, and secure.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1503457574462-bd27054394c1?auto=format&fit=crop&w=900&q=80"
              alt="International Adoption"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Our Adoption Process
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "Step 1",
                title: "Consultation",
                desc: "Meet with our team to understand eligibility, requirements, and options for international adoption.",
              },
              {
                step: "Step 2",
                title: "Legal Guidance",
                desc: "We assist in preparing and reviewing all necessary legal documents to ensure compliance with laws.",
              },
              {
                step: "Step 3",
                title: "Home Study",
                desc: "Support in completing background checks, interviews, and home visits required by authorities.",
              },
              {
                step: "Step 4",
                title: "Matching",
                desc: "Guidance in connecting you with a child in need, considering both legal and cultural aspects.",
              },
              {
                step: "Step 5",
                title: "Finalization",
                desc: "Representation in courts and embassies to finalize adoption and secure visas for the child.",
              },
              {
                step: "Step 6",
                title: "Post-Adoption Support",
                desc: "Ongoing resources and counseling to help families adjust after the adoption process is complete.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <span className="text-blue-600 font-bold">{step.step}</span>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="p-6 bg-indigo-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Experienced Lawyers
              </h3>
              <p className="text-gray-200">
                Our legal experts have deep knowledge of both domestic and
                international adoption laws.
              </p>
            </div>
            <div className="p-6 bg-indigo-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">End-to-End Support</h3>
              <p className="text-gray-200">
                From paperwork to cultural orientation, we guide you at every
                stage of adoption.
              </p>
            </div>
            <div className="p-6 bg-indigo-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Child-Centered Approach
              </h3>
              <p className="text-gray-200">
                We focus on the best interests of the child while supporting
                families with care and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-14 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Adoption Journey Today
        </h2>
        <p className="mb-6 text-lg">
          Contact us now to schedule a consultation and learn how we can help
          you expand your family through international adoption.
        </p>
        <button
          onClick={handleclick}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InternationalAdoptions;
