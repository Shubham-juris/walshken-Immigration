import React from "react";

const visaServices = [
  { title: "Business Visa", icon: "👷‍♂️" },
  { title: "Student Visa", icon: "🎓" },
  { title: "Work Visa", icon: "🧰" },
  { title: "Tourist Visa", icon: "📸" },
  { title: "Family Visa", icon: "👨‍👩‍👧‍👦" },
];

const VisaVisaCategories = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 md:px-10 lg:px-16 flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 text-center md:text-left">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <p className="text-red-600 uppercase font-semibold tracking-wide">
              Visa Categories
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-2">
              Outstanding Immigration <br /> Visa Services
            </h2>
          </div>

          <div className="md:w-1/2 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            We are experts in immigration and visa consulting, offering
            personalized support for students, professionals, and families
            worldwide
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10 ">
          {visaServices.map((visa, index) => (
            <div
              key={index}
              className="bg-white hover:bg-red-600  shadow-md rounded-md py-8 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4 text-red-600">{visa.icon}</div>
              <h4 className="font-semibold text-lg ">{visa.title}</h4>
            </div>
          ))}
        </div>

        <div className="text-center font-semibold text-sm sm:text-base lg:text-lg">
          Bring Them Together And You Overcome The Ordinary.
        </div>
      </div>
    </div>
  );
};

export default VisaVisaCategories;
