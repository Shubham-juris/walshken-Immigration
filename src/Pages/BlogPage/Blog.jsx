import React from "react";
import BlogImage from "../../assets/hero/BlogImage.webp";
import BlogImage1 from "../../assets/hero/BlogImage1.webp";
import BlogImage2 from "../../assets/hero/BlogImage2.webp";
import BlogImage3 from "../../assets/hero/BlogImage3.webp";
import BlogImage4 from "../../assets/hero/BlogImage4.webp";
import BlogImage5 from "../../assets/hero/BlogImage5.webp";
import ImageVisa from "../../assets/hero/VisaImg.jpg";
import FAQ from "../FAQ/FAQ";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: "07 Jul",
      author: "Admin",
      comments: 0,
      category: "Consulting",
      title: "Journeys Of Discovery: Uncovering Hidden Treasures",
      excerpt:
        "With global digital ad spending exceeding $325B annually, the quest for visibility has never been more intense. Discover how consulting uncovers hidden opportunities for businesses worldwide",
      image: BlogImage,
    },
    {
      id: 2,
      date: "17 Jun",
      author: "Admin",
      comments: 0,
      category: "Immigration",
      title: "Unlocking Opportunities: The Visa Journey Unveiled",
      excerpt:
        "Navigating the visa process can be complex, but it opens doors to life-changing opportunities. Explore how proper guidance makes immigration a journey worth taking",
      image: BlogImage1,
    },
    {
      id: 3,
      date: "12 May",
      author: "Admin",
      comments: 0,
      category: "Business",
      title: "Navigating Borders: Ultimate Guide To Visa Success",
      excerpt:
        "Borders aren’t barriers—they’re opportunities. This guide walks you through essential steps for visa approval, with expert tips and common pitfalls to avoid",
      image: BlogImage2,
    },
    {
      id: 4,
      date: "09 Nov",
      author: "Admin",
      comments: 0,
      category: "Green Card",
      title: "Citizenship Process: How To Become A UK Resident",
      excerpt:
        "Dreaming of settling in the UK? From eligibility to applications, this article explains the residency and citizenship process step by step...",
      image: BlogImage3,
    },
    {
      id: 5,
      date: "16 Sep",
      author: "Admin",
      comments: 0,
      category: "Culture",
      title: "Exploring Ancient Civilizations: The Wonders Of Egypt",
      excerpt:
        "Step back in time and explore the architectural wonders of ancient Egypt. Learn how cultural immersion can enhance your global mobility journey",
      image: BlogImage4,
    },
    {
      id: 6,
      date: "15 Sep",
      author: "Admin",
      comments: 2,
      category: "Business",
      title: "The Road To Adventure: Embarking On New Horizons",
      excerpt:
        "Stepping into the unknown can be daunting, but it's where growth begins. Discover how business visas open doors to new markets and opportunities worldwide",
      image: BlogImage5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${ImageVisa})`,
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Stay updated with the latest immigration tips, visa success stories,
            and global opportunities.
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <section className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Latest Articles
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-lg shadow-md text-center">
                    <p className="text-lg font-bold leading-none">
                      {post.date.split(" ")[0]}
                    </p>
                    <p className="text-xs uppercase">
                      {post.date.split(" ")[1]}
                    </p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-gray-500 flex flex-wrap gap-4 mb-3">
                    <span>👤 {post.author}</span>
                    <span>💬 {post.comments} Comments</span>
                    <span>🏷️ {post.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-red-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
};

export default Blog;
