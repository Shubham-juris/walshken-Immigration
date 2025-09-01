import React from "react";
import heroBgImage from "../../assets/hero/studentVisa.webp";
import heroBgImage1 from "../../assets/hero/AboutImage1.webp";
import heroBgImage2 from "../../assets/hero/AboutImage2.webp";
import heroBgImage3 from "../../assets/hero/AboutImage3.webp";
import { FaCheckCircle } from "react-icons/fa";
import mainImage from "../../assets/hero/TouristVisa.webp";
import smallImage from "../../assets/hero/VisaImg.jpg";
import PageImage1 from "../../assets/hero/pexels-cottonbro-5137969.jpg";
import PageImage2 from "../../assets/hero/pexels-ekrulila-2305114.jpg";
import PageImage3 from "../../assets/hero/pexels-freestockpro-1008155.jpg";
import PageImage4 from "../../assets/hero/pexels-joshsorenson-1716826.jpg";

const HomeCoursesSection = () => {
  const coachingData = [
    {
      title: "IELTS Preparation",
      description:
        "Our IELTS coaching program is tailored to help students achieve their target band scores through expert-led training, flexible study plans, and focused practice on all four modules—Listening, Reading, Writing, and Speaking. We provide updated study materials, mock tests, and personalized feedback to build confidence and maximize performance.",
      image: PageImage1,
    },
    {
      title: "Citizenship Test Training",
      description:
        "Get fully prepared for your Citizenship Test with our structured training program. We cover essential subjects including government systems, civic duties, and national history. Our experienced instructors provide practice tests and key insights to ensure you approach the exam with confidence and clarity.",
      image: PageImage2,
    },
    {
      title: "TOEFL Coaching",
      description:
        "Our TOEFL coaching is designed to strengthen your academic English skills across Reading, Listening, Speaking, and Writing. Through focused practice tests, proven strategies, and personalized guidance, we help you achieve higher scores and reach your academic or immigration goals with greater confidence.",
      image: PageImage3,
    },
    {
      title: "OET Coaching",
      description:
        "Our OET training is specifically designed for healthcare professionals aiming to excel in workplace communication. With specialized role-play sessions, test-specific strategies, and expert mentoring, we prepare you to succeed in all four OET sub-tests—Listening, Reading, Writing, and Speaking.",
      image: PageImage4,
    },
  ];

  const courses = [
    {
      title: "IELTS Courses",
      description:
        "Our IELTS coaching is designed to help students achieve their desired band scores through expert-led training, flexible schedules, and a focus on all four modules—listening, reading, writing, and speaking. We provide updated study materials, mock tests, and personalized feedback to boost your confidence and performance., with flexible schedules, expert instructors, and personalized practice materials to ensure high band scores",
      image: heroBgImage,
    },
    {
      title: "Citizenship Test",
      description:
        "Prepare for your Citizenship Test with our structured coaching that covers essential topics like government systems, civic responsibilities, and national history. Our experienced instructors guide you through practice tests and key concepts to ensure you're ready with knowledge and confidence on exam day.",
      image: heroBgImage1,
    },
    {
      title: "TOFEL Coaching",
      description:
        "Our TOEFL coaching program is designed to strengthen your skills in reading, listening, speaking, and writing. With focused practice tests, expert strategies, and individual guidance, we help you meet your academic or immigration goals with a higher score and improved confidence",
      image: heroBgImage2,
    },
    {
      title: "OET Coaching",
      description:
        "Our OET coaching is tailored for healthcare professionals, focusing on the language skills needed for success in real workplace scenarios, with expert trainers, role-play practice, and test-specific strategies for all four sub-tests.",
      image: heroBgImage3,
    },
  ];
  return (
    <>
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex items-start bg-white p-6 rounded-xl shadow-md hover:bg-red-600 transition-colors duration-300 group"
            >
              <div className="min-w-[96px] min-h-[96px] w-24 h-24 sm:w-28 sm:h-28 mr-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-white">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-600 group-hover:text-white">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
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
              We are experts in immigration and visa consulting, offering
              personalized support for students, professionals, and families
              worldwide
            </p>

            <div className="flex gap-10 mb-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center text-2xl font-bold text-black">
                  76%
                </div>
                <p className="mt-2 font-semibold">Business Strategy</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center text-2xl font-bold text-black">
                  69%
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
          </div>
        </div>
      </section>
      <div className="bg-gray-100 py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coachingData.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 text-center shadow-md transform transition-all duration-300 hover:scale-105 bg-white text-black hover:bg-red-600 hover:text-white"
            >
              <div className="relative w-28 h-28 mx-auto mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeCoursesSection;
