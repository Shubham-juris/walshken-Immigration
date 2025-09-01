import React from "react";
import { useNavigate } from "react-router-dom";

const VisitorVisa = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Visitor Visa Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Travel across the globe with ease. We simplify your visitor visa
            process, ensuring a smooth and stress-free journey.
          </p>
        </div>
      </section>

      {/* About Visitor Visa */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is a Visitor Visa?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Visitor Visa allows you to enter another country temporarily for
              tourism, visiting family/friends, attending events, or short-term
              business trips. Each country has specific requirements and
              conditions for granting visitor visas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our expert consultants help you prepare the right documentation,
              meet eligibility requirements, and secure approvals quickly so you
              can travel stress-free.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=900&q=80"
              alt="Visitor Visa"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Benefits of a Visitor Visa
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Tourism",
                desc: "Explore new cultures, traditions, and breathtaking destinations.",
              },
              {
                title: "Family Visits",
                desc: "Reconnect with your loved ones across borders.",
              },
              {
                title: "Business Trips",
                desc: "Attend meetings, conferences, and expand global networks.",
              },
              {
                title: "Short-Term Study",
                desc: "Participate in short training or certificate programs.",
              },
              {
                title: "Events & Exhibitions",
                desc: "Attend global events, fairs, or cultural festivals.",
              },
              {
                title: "Multiple Entry Options",
                desc: "Choose single-entry or multiple-entry visas as per your needs.",
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

      {/* Application Process */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Visitor Visa Application Process
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Step 1: Consultation</h3>
              <p className="text-gray-700">
                We assess your purpose of visit and suggest the best visa option.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Step 2: Documentation</h3>
              <p className="text-gray-700">
                Our experts help you prepare financial proofs, invitation letters,
                and other required documents.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Step 3: Visa Approval</h3>
              <p className="text-gray-700">
                We submit your application and guide you until your visa is
                approved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Why Choose Us?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Trusted Expertise</h3>
              <p className="text-gray-700">
                Years of experience in processing visitor visas for top countries.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Fast & Hassle-Free</h3>
              <p className="text-gray-700">
                Quick and simplified process with minimal stress for applicants.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">End-to-End Guidance</h3>
              <p className="text-gray-700">
                From application submission to approval, we are with you at every
                step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 py-14 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Plan Your Next Trip with Ease
        </h2>
        <p className="mb-6 text-lg">
          Contact us today for expert assistance in securing your visitor visa.
        </p>
        <button
               onClick={() => navigate("/contact")} 
        className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
          Get Free Consultation
        </button>
      </section>
    </div>
  );
};

export default VisitorVisa;
