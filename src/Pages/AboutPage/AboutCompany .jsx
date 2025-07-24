import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import mainImage from "../../assets/hero/TouristVisa.jpg";
import smallImage from "../../assets/hero/home3.jpg";
const AboutCompany = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="relative w-full md:w-1/2">
          <img
            src={mainImage}
            alt="Main"
            className="rounded-md w-full h-auto object-cover"
          />
          <img
            src={smallImage}
            alt="Small"
            className="absolute -bottom-10 left-10 w-2/3 rounded-md shadow-xl border-4 border-white"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-LG text-red-600 font-semibold uppercase mb-2">
            About Company
          </p>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Welcome To Experience <br />
            Visa Consulting Firm
          </h2>
          <p className="text-gray-600 mb-6">
            Transmds is the world’s driving worldwide coordinations supplier —
            we uphold industry and exchange the worldwide trade of merchandi
          </p>

          <div className="flex gap-10 mb-6">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center text-2xl font-bold text-black">
                68%
              </div>
              <p className="mt-2 font-semibold">Business Strategy</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center text-2xl font-bold text-black">
                93%
              </div>
              <p className="mt-2 font-semibold">Real Technology Solutions</p>
            </div>
          </div>

          <ul className="space-y-3 mb-6 text-gray-800 font-medium">
            <li className="flex items-center">
              <FaCheckCircle className="text-red-500 mr-2" />
              Immigration & Visa Consulting
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-red-500 mr-2" />
              Direct Online Interview
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-red-500 mr-2" />
              99% Visa Approvals
            </li>
          </ul>

          <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded hover:bg-gray-700 transition duration-200">
            About Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
