import React from "react";
import pageImage1 from "../../assets/hero/pexels-ketut-subiyanto-4901969.jpg";
import pageImage2 from "../../assets/hero/pexels-timur-weber-9186040.jpg";
import pageImage3 from "../../assets/hero/pexels-vlada-karpovich-7368272.jpg";
import pageImage4 from "../../assets/hero/pexels-vlada-karpovich-7368310.jpg";

const coachingData = [
  {
    title: "IELTS Courses",
    description:
      "Our IELTS courses are designed to help students improve their listening, reading, writing, and speaking skills, with flexible schedules, expert instructors, and personalized practice materials to ensure high band scores.",
    image: pageImage1,
  },
  {
    title: "Citizenship Test",
    description:
      "Prepare for your Citizenship Test with our comprehensive course covering all key topics, including government structure, rights and responsibilities, and Canadian/U.S. history, taught by experienced instructors to boost your confidence and success.",
    image: pageImage2,
  },
  {
    title: "TOEFL Coaching",
    description:
      "Our TOEFL coaching program offers expert guidance in reading, listening, speaking, and writing, with personalized strategies, mock tests, and targeted practice to help you achieve top scores and meet your academic goals.",
    image: pageImage3,
  },
  {
    title: "OET Coaching",
    description:
      "Our OET coaching is tailored for healthcare professionals, focusing on the language skills needed for success in real workplace scenarios, with expert trainers, role-play practice, and test-specific strategies for all four sub-tests.",
    image: pageImage4,
  },
];

const PageCourseCards = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {coachingData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white flex items-center rounded-xl shadow-md p-6 space-x-6 transition-transform hover:scale-[1.02]"
          >
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href="#"
                className="text-red-600 font-semibold flex items-center hover:underline"
              >
                Read More <span className="ml-1 text-lg">➜</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageCourseCards;
