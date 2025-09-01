import React from "react";
import { useNavigate } from "react-router-dom";

const WorkVisa = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Work Visa Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Unlock global career opportunities. We simplify your work visa
            process with expert guidance and fast approvals.
          </p>
        </div>
      </section>

      {/* About Work Visa */}
      <section className="max-w-7xl mx-auto py-14 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is a Work Visa?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Work Visa allows individuals to live and work in a foreign
              country legally. Depending on the visa type, you may be sponsored
              by an employer, apply independently, or qualify for skilled
              migration programs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We provide complete support in choosing the right work visa
              category, preparing required documents, and ensuring a smooth
              application process for your career abroad.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092334964-581fd8a6a6f2?auto=format&fit=crop&w=900&q=80"
              alt="Work Visa"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Benefits of a Work Visa
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Global Opportunities",
                desc: "Expand your career in top international markets.",
              },
              {
                title: "Higher Income",
                desc: "Earn competitive salaries abroad with better perks.",
              },
              {
                title: "Permanent Residency Path",
                desc: "Many work visas lead to permanent residency options.",
              },
              {
                title: "Skill Development",
                desc: "Gain international exposure and professional growth.",
              },
              {
                title: "Family Sponsorship",
                desc: "Bring your spouse and children on dependent visas.",
              },
              {
                title: "Networking",
                desc: "Build professional connections worldwide.",
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

      {/* Eligibility Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Work Visa Eligibility
          </h2>
          <ul className="grid gap-6 md:grid-cols-2 text-gray-700">
            <li className="p-5 bg-white rounded-xl shadow">
              ✔ Valid job offer or employer sponsorship
            </li>
            <li className="p-5 bg-white rounded-xl shadow">
              ✔ Educational qualifications or relevant work experience
            </li>
            <li className="p-5 bg-white rounded-xl shadow">
              ✔ Proof of financial stability
            </li>
            <li className="p-5 bg-white rounded-xl shadow">
              ✔ Health and character certificates
            </li>
            <li className="p-5 bg-white rounded-xl shadow">
              ✔ Language proficiency (IELTS/TOEFL where required)
            </li>
          </ul>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Work Visa Application Process
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Step 1: Consultation
              </h3>
              <p className="text-gray-700">
                We evaluate your qualifications and suggest the best visa
                options.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Step 2: Documentation
              </h3>
              <p className="text-gray-700">
                Prepare necessary paperwork such as job offers, resumes, and
                qualifications.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Step 3: Visa Submission
              </h3>
              <p className="text-gray-700">
                Submit your application and track progress until approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-700">
                Years of experience in securing work visas globally.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Fast Processing</h3>
              <p className="text-gray-700">
                Streamlined process to avoid delays and rejections.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Personalized Support
              </h3>
              <p className="text-gray-700">
                End-to-end assistance tailored to your unique career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 py-14 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Begin Your Career Abroad Today
        </h2>
        <p className="mb-6 text-lg">
          Contact us now to explore work visa opportunities and build your
          future overseas.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Free Consultation
        </button>
      </section>
    </div>
  );
};

export default WorkVisa;
