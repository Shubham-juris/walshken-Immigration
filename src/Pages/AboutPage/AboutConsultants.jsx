import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShareAlt,
  FaQuoteLeft,
  FaStar,
  FaRegStar,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import AboutImage5 from "../../assets/hero/AboutImage5.webp";
import AboutImage3 from "../../assets/hero/AboutImage3.webp";
import AboutImage4 from "../../assets/hero/AboutImage4.webp";

const testimonials = [
  {
    id: 1,
    rating: 5,
    title: "Professional Guidance",
    feedback:
      "The consultants at Visaland guided me through every step of my student visa process. From document preparation to interview training, their support was exceptional.",
  },
  {
    id: 2,
    rating: 4,
    title: "Excellent Support",
    feedback:
      "I got my Canadian work permit with the help of their expert team. They explained the full procedure clearly and responded promptly to all queries.",
  },
];

const consultants = [
  {
    name: "Devid Miller",
    title: "Student Visa Specialist",
    img: AboutImage4,
  },
  {
    name: "Ritu Ratia",
    title: "Immigration Consultant",
    img: AboutImage5,
  },
  {
    name: "Shikhon Islam",
    title: "Work Permit Expert",
    img: AboutImage3,
  },
  {
    name: "Sonsil Macron",
    title: "Permanent Residency Advisor",
    img: AboutImage4,
  },
];

const AboutConsultants = () => {
  return (
    <>
      <section className="bg-[#151515] py-16 text-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <p className="uppercase text-red-500 font-semibold mb-2">
            Professional People
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Consultants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-14 h-70">
            {consultants.map((consultant, index) => (
              <div key={index} className="relative group">
                <img
                  src={consultant.img}
                  alt={consultant.name}
                  className="w-full h-auto rounded shadow-md"
                />

                <div className="absolute top-4 right-4 z-10">
                  <div className="relative group">
                    <div className="bg-[#e4003a] p-2 rounded-full text-white cursor-pointer">
                      <FaShareAlt />
                    </div>
                    <div className="absolute top-full right-0 mt-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                        <FaFacebookF />
                      </div>
                      <div className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                        <FaTwitter />
                      </div>
                      <div className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                        <FaLinkedinIn />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white text-black text-center py-4 mt-2 rounded-b">
                  <h3 className="font-bold">{consultant.name}</h3>
                  <p className="text-sm">{consultant.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16 px-4 md:px-10 bg-white">
        <div className="text-center mb-12">
          <h4 className="text-red-600 font-semibold uppercase mb-2 tracking-wide">
            Our Testimonials
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Let’s Explore Why People Say <br className="hidden md:block" />{" "}
            About Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 p-6 rounded-lg shadow-sm"
            >
              <div className="text-red-500 text-4xl mb-4">
                <FaQuoteLeft />
              </div>
              <h4 className="text-lg font-bold mb-1">{testimonial.title}</h4>
              <div className="flex mb-4 text-red-500">
                {[...Array(5)].map((_, i) =>
                  i < testimonial.rating ? (
                    <FaStar key={i} className="mr-1" />
                  ) : (
                    <FaRegStar key={i} className="mr-1" />
                  )
                )}
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="font-sans">
        <div className="relative bg-red-700 text-white py-20 px-4 md:px-16 overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-cover bg-center bg-[url('/path-to-your-background-image.jpg')] z-0"></div>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <p className="uppercase text-sm tracking-widest font-semibold">
              Trusted Immigration & Visa Experts
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Let’s Discuss & Start Visa <br /> Consultations
            </h1>
            <button className="mt-8 bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-100 transition">
              Free Consulting
            </button>
          </div>
        </div>

        <div className="bg-black text-white py-12 px-4 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-red-500">
                <FaPhoneAlt className="text-red-500 text-lg" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Call Us </p>
                <p className="font-bold text-lg text-white">+1 365-363-6067</p>
              </div>
            </div>

            <div className="flex items-center gap-5 justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-red-500">
                <FaEnvelope className="text-red-500 text-lg" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <p className="font-bold text-lg text-white">
                  walshkenco@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-red-500">
                <FaMapMarkerAlt className="text-red-500 text-lg" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Location</p>
                <p className="font-bold text-lg text-white">
                  3030 3 Ave NE #120, Calgary, AB, Canada, Alberta
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutConsultants;
