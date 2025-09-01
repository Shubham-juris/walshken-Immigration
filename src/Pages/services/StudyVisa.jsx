import React from "react";
import { useNavigate } from "react-router-dom";

const StudyVisa = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Study Visa Assistance
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Begin your international education journey with our expert study
            visa services. Unlock global opportunities for learning and career
            growth.
          </p>
        </div>
      </section>

      {/* About Study Visa */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose a Study Visa?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Study Visa allows international students to pursue education in
              top universities across the world. It opens doors to high-quality
              education, international exposure, and global career
              opportunities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With the right guidance, you can secure admission to your dream
              university, experience cultural diversity, and set the foundation
              for a successful career abroad.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80"
              alt="Study Abroad"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Benefits of a Study Visa
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Global Education",
                desc: "Access world-class universities and advanced learning systems.",
              },
              {
                title: "Cultural Exposure",
                desc: "Experience diversity and build global connections.",
              },
              {
                title: "Work Opportunities",
                desc: "Part-time job options while studying to support living expenses.",
              },
              {
                title: "Post-Study Options",
                desc: "Opportunity to extend stay with post-study work visas.",
              },
              {
                title: "Permanent Residency Pathway",
                desc: "Study visas often lead to PR options in many countries.",
              },
              {
                title: "Skill Development",
                desc: "Enhance personal, academic, and professional skills abroad.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Top Study Destinations
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {["Canada", "USA", "UK", "Australia"].map((country, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:bg-gray-200 transition"
              >
                <h3 className="text-lg font-semibold text-blue-700">
                  {country}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Study Visa Application Process
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="p-6 bg-blue-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Step 1: University Admission
              </h3>
              <p className="text-gray-200">
                Get accepted by a recognized university or college abroad.
              </p>
            </div>
            <div className="p-6 bg-blue-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Step 2: Documentation
              </h3>
              <p className="text-gray-200">
                Prepare financial proofs, language test scores, and academic
                records.
              </p>
            </div>
            <div className="p-6 bg-blue-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Step 3: Visa Approval
              </h3>
              <p className="text-gray-200">
                Submit your application and get your study visa approved.
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
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Expert Counsellors</h3>
              <p className="text-gray-700">
                Our team provides the best university and visa guidance.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">High Success Rate</h3>
              <p className="text-gray-700">
                Thousands of successful student visas processed globally.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Complete Assistance
              </h3>
              <p className="text-gray-700">
                From admissions to visa approval, we guide you at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-14 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Study Abroad Journey Today
        </h2>
        <p className="mb-6 text-lg">
          Contact us now for expert guidance on study visas and admissions.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Book Free Consultation
        </button>
      </section>
    </div>
  );
};

export default StudyVisa;
