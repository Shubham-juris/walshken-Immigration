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

const testimonials = [
  {
    id: 1,
    rating: 5,
    title: "Professional Guidance",
    feedback:
      "Thanks to Walshken Immigration, I secured my Canadian work permit without delays. They reviewed my documents, prepared me for the interview, and ensured everything met IRCC standards. Their immigration expertise was truly remarkable.",
  },
  {
    id: 2,
    rating: 4,
    title: "Excellent Support",
    feedback:
      "Walshken Immigration made my Canadian student visa journey smooth and stress-free. Their team helped me with every step — from selecting the right college to filing my visa documents. I'm now studying in Canada, all thanks to their expert advice!",
  },
];

const AboutConsultants = () => {
  return (
    <>
      <div className="py-16 px-4 md:px-10 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Let’s Explore Why People Say <br className="hidden md:block" />
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
