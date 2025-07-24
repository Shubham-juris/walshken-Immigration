import React from "react";
import BlogImage from "../../assets/hero/BlogImage.webp";
import BlogImage1 from "../../assets/hero/BlogImage1.webp";
import BlogImage2 from "../../assets/hero/BlogImage2.webp";
import BlogImage3 from "../../assets/hero/BlogImage3.webp";
import BlogImage4 from "../../assets/hero/BlogImage4.webp";
import BlogImage5 from "../../assets/hero/BlogImage5.webp";
import ImageVisa from "../../assets/hero/VisaImg.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: "07 Jul",
      author: "salman",
      comments: 0,
      category: "Visa Guidance",
      title: "Top Mistakes to Avoid in Your Visa Application",
      excerpt:
        "Submitting incorrect information or missing documents can lead to visa rejections. Learn how to prepare your application correctly with insights from industry experts...",
      image: BlogImage,
    },
    {
      id: 2,
      date: "17 Jun",
      author: "salman",
      comments: 0,
      category: "Immigration",
      title: "Unlocking Opportunities: The Visa Journey Unveiled",
      excerpt:
        "Navigating the visa process can be complex, but it opens doors to life-changing opportunities. Explore key insights that make immigration a journey worth taking...",
      image: BlogImage1,
    },
    {
      id: 3,
      date: "12 May",
      author: "salman",
      comments: 0,
      category: "Work Visa",
      title: "How to Get a Work Visa for Canada: A Step-by-Step Guide",
      excerpt:
        "Canada offers great career opportunities for skilled workers. Discover the essential steps, eligibility, and documentation required for a successful work visa application...",
      image: BlogImage2,
    },
    {
      id: 4,
      date: "09 Nov",
      author: "salman",
      comments: 0,
      category: "Green Card",
      title: "Pathway to UK Residency: A Complete Citizenship Guide",
      excerpt:
        "Dreaming of settling in the UK? This guide outlines all the stages involved in acquiring residency and citizenship—from application to legal compliance and beyond...",
      image: BlogImage3,
    },
    {
      id: 5,
      date: "16 Sep",
      author: "salman",
      comments: 0,
      category: "Student Visa",
      title: "Study Abroad 101: Navigating Your Student Visa",
      excerpt:
        "Studying abroad starts with the right visa. Learn how to prepare financials, admission proof, SOPs, and more for your successful student visa application...",
      image: BlogImage4,
    },
    {
      id: 6,
      date: "15 Sep",
      author: "salman",
      comments: 2,
      category: "Tourist Visa",
      title: "Planning Your First Trip Abroad? Get Your Tourist Visa Right",
      excerpt:
        "A tourist visa is your gateway to exploring new cultures and destinations. This article walks you through the do's and don’ts of the tourist visa process...",
      image: BlogImage5,
    },
  ];

  return (
    <>
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),url(${ImageVisa})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-6 md:px-16">
          <h1 className="text-4xl md:text-7xl font-bold text-white text-center md:text-left lg:px-20">
            Blog Grid
          </h1>
        </div>
      </div>
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 text-center rounded">
                    <p className="text-lg font-bold leading-none">
                      {post.date.split(" ")[0]}
                    </p>
                    <p className="text-xs">{post.date.split(" ")[1]}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-sm text-gray-500 flex flex-wrap gap-4 mb-2">
                    <span>👤 {post.author}</span>
                    <span>💬 {post.comments} Comments</span>
                    <span>🏷️ {post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a
                    href="#"
                    className="text-red-600 font-semibold inline-flex items-center hover:underline"
                  >
                    Read More <span className="ml-1">➜</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
