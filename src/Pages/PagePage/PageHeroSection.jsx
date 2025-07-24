import React from "react";
import PageCourseCards from "./PageCourseCards";
import PageImage1 from "../../assets/hero/pexels-cottonbro-5137969.jpg";
import PageImage2 from "../../assets/hero/pexels-ekrulila-2305114.jpg";
import PageImage3 from "../../assets/hero/pexels-freestockpro-1008155.jpg";
import PageImage4 from "../../assets/hero/pexels-joshsorenson-1716826.jpg";

const PageHeroSection = () => {
  const coachingData = [
    {
      title: "IELTS Courses",
      description:
        "Our IELTS coaching is designed to help students achieve their desired band scores through expert-led training, flexible schedules, and a focus on all four modules—listening, reading, writing, and speaking. We provide updated study materials, mock tests, and personalized feedback to boost your confidence and performance.",
      image: PageImage1,
    },
    {
      title: "Citizenship Test",
      description:
        "Prepare for your Citizenship Test with our structured coaching that covers essential topics like government systems, civic responsibilities, and national history. Our experienced instructors guide you through practice tests and key concepts to ensure you're ready with knowledge and confidence on exam day.",
      image: PageImage2,
    },
    {
      title: "TOFEL Coaching",
      description:
        "Our TOEFL coaching program is designed to strengthen your skills in reading, listening, speaking, and writing. With focused practice tests, expert strategies, and individual guidance, we help you meet your academic or immigration goals with a higher score and improved confidence.",
      image: PageImage3,
    },
    {
      title: "OET Coaching",
      description:
        "Different types of programs, such as group classes, one-on-one sessions, or online courses. You can have each program displayed as a card or grid, each with a short description, pricing, and a CTA (call to action) button like Outline of the course structure, such as lessons on speaking, listening, reading.",
      image: PageImage4,
    },
  ];

  return (
    <>
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),url(${PageImage1})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-6 md:px-16">
          <h1 className="text-4xl md:text-7xl font-bold text-white text-center md:text-left lg:px-20">
            Coaching
          </h1>
        </div>
      </div>
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
      <PageCourseCards />
    </>
  );
};

export default PageHeroSection;
