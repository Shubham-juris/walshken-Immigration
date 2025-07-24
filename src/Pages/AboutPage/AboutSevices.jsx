import React from "react";
import Studentvisa from "../../assets/hero/studentVisa.webp";
import BusinessVisa from "../../assets/hero/BusinessVisa.webp";
import WorkVisa from "../../assets/hero/WorkVisa.webp";
import TouristVisa from "../../assets/hero/TouristVisa.webp";

const services = [
  {
    title: "Business Visa",
    description:
      "We assist entrepreneurs and investors in obtaining business visas to explore global opportunities. Our experts help with legal documentation, eligibility assessment, and embassy interview preparation.",
    image: BusinessVisa,
  },
  {
    title: "Student Visa",
    description:
      "Get complete support for your dream of studying abroad. From university selection to visa filing, we help students at every step to secure admissions and approvals with confidence.",
    image: Studentvisa,
  },
  {
    title: "Work Visa",
    description:
      "We guide skilled professionals in obtaining work visas for countries like Canada, UK, Australia, and more. Our team supports job matching, application paperwork, and embassy processes.",
    image: WorkVisa,
  },
  {
    title: "Tourist Visa",
    description:
      "Planning to travel abroad? Our Tourist Visa services ensure you have all documents ready and assist in smooth visa filing, so you can focus on enjoying your journey.",
    image: TouristVisa,
  },
];

const AboutSevices = () => {
  return (
    <>
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-red-600 font-semibold text-sm uppercase mb-2">
            Service We Provide
          </p>
          <h2 className="text-4xl font-bold mb-10">
            Explore Our Visa, Citizenship <br /> & Immigration Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-black-600 mb-4">
                    {service.description}
                  </p>
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md mt-4 bg-[#e4003a]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e4003a] text-white py-26 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
              Most Trusted <br /> Walshken Immigration Service Provider
            </h2>
            <p className="text-base mt-4 mb-8 max-w-md">
              With 6+ years of experience, we have successfully helped thousands
              of individuals and families obtain visas, work permits, and
              residency around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center py-6 px-4 rounded-lg shadow">
              <div className="bg-white text-[#e4003a] rounded-full p-4 mb-4 text-2xl"></div>
              <h3 className="text-3xl font-bold">35+</h3>
              <p className="mt-1 text-sm">Countries Represented</p>
            </div>

            <div className="flex flex-col items-center text-center py-6 px-4 rounded-lg shadow">
              <div className="bg-white text-[#e4003a] rounded-full p-4 mb-4 text-2xl"></div>
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="mt-1 text-sm">Successful Visas Delivered</p>
            </div>

            <div className="flex flex-col items-center text-center py-6 px-4 rounded-lg shadow">
              <div className="bg-white text-[#e4003a] rounded-full p-4 mb-4 text-2xl"></div>
              <h3 className="text-3xl font-bold">99%</h3>
              <p className="mt-1 text-sm">Approval Rate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSevices;
