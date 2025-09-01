import React from "react";
import { useNavigate } from "react-router-dom";

const DivorceFamilyLaw = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/contact");
  };
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-500 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Divorce & Family Law
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Expert guidance on divorce, custody, adoption, and property
            disputes—ensuring fairness, compassion, and clarity every step of
            the way.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Compassionate Legal Support For Families
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Family matters can be emotionally challenging and legally complex.
              Our team is committed to helping you navigate divorce, custody
              battles, property settlements, and adoption with professionalism
              and sensitivity. We aim to protect your rights while prioritizing
              the well-being of your family.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you’re seeking amicable resolutions or strong
              representation in disputes, our experienced lawyers are here to
              provide trusted advice and practical solutions.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80"
              alt="Family Law"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Our Family Law Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Divorce & Separation",
                desc: "Guidance through the legal process of divorce and separation with focus on fairness and minimal conflict.",
              },
              {
                title: "Child Custody",
                desc: "Protecting parental rights and ensuring the best interests of your children in custody and visitation cases.",
              },
              {
                title: "Property Settlements",
                desc: "Helping couples divide property, assets, and liabilities in a balanced and lawful way.",
              },
              {
                title: "Spousal Support",
                desc: "Advising on financial support agreements and representing you in spousal maintenance claims.",
              },
              {
                title: "Adoption",
                desc: "Legal assistance with domestic and international adoption to expand your family legally and smoothly.",
              },
              {
                title: "Family Dispute Resolution",
                desc: "Mediation and negotiation services to resolve conflicts outside of court whenever possible.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="p-6 bg-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-300">
                Our lawyers have years of experience in family law and ensure
                your case is handled with professionalism.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Compassionate Approach
              </h3>
              <p className="text-gray-300">
                We understand the emotional toll and approach each case with
                empathy and care.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-300">
                We’ve helped countless families achieve fair outcomes in even
                the most complex disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-14 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Expert Family Law Advice?
        </h2>
        <p className="mb-6 text-lg">
          Get in touch today for a confidential consultation with our legal
          experts.
        </p>
        <button
          onClick={handleclick}
          className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DivorceFamilyLaw;
