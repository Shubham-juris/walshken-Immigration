import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Pages/HomePage/Hero";
import AboutHeroSection from "./Pages/AboutPage/AboutHeroSection";
import Visa from "../src/Pages/Visa/visa";
import PageHeroSection from "./Pages/PagePage/PageHeroSection";
import Contact from "./Pages/ContactPage/Contact";
import Blog from "./Pages/BlogPage/Blog";
import FAQ from "./Pages/FAQ/FAQ";
import StudyVisa from "./Pages/services/StudyVisa";
import WorkVisa from "./Pages/services/WorkVisa";
import PermanentResidency from "./Pages/services/PermanentResidency";
import VisitorVisa from "./Pages/services/VisitorVisa";
import BusinessInvestorVisa from "./Pages/services/BusinessInvestorVisa";
import FamilySpousalSponsorship from "./Pages/services/FamilySpousalSponsorship";
import DivorceFamilyLaw from "./Pages/internationalServices/DivorceFamilyLaw";
import InternationalAdoptions from "./Pages/internationalServices/InternationalAdoptions";
import PropertyLegalDisputes from "./Pages/internationalServices/PropertyLegalDisputes";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutHeroSection />} />
      <Route path="/visa" element={<Visa />} />
      <Route path="/Page" element={<PageHeroSection />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/study-visa" element={<StudyVisa />} />
      <Route path="/work-visa" element={<WorkVisa />} />
      <Route path="/pr" element={<PermanentResidency />} />
      <Route path="/visitor-visa" element={<VisitorVisa />} />
      <Route path="/business-visa" element={<BusinessInvestorVisa />} />
      <Route path="/family" element={<FamilySpousalSponsorship />} />
      <Route path="/divorce-family" element={<DivorceFamilyLaw />} />
      <Route path="/adoptions" element={<InternationalAdoptions />} />
      <Route path="/property" element={<PropertyLegalDisputes />} />
    </Routes>
  );
};

export default AppRouter;
