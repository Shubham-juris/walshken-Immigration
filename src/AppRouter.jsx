import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Pages/HomePage/Hero";
import AboutHeroSection from "./Pages/AboutPage/AboutHeroSection";
import Visa from "../src/Pages/Visa/visa";
import PageHeroSection from "./Pages/PagePage/PageHeroSection";
import Contact from "./Pages/ContactPage/Contact";
import Blog from "./Pages/BlogPage/Blog";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutHeroSection />} />
      <Route path="/visa" element={<Visa />} />
      <Route path="/Page" element={<PageHeroSection />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default AppRouter;
