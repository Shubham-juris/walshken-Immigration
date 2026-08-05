import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Pages/HomePage/Hero";
import AboutHeroSection from "./Pages/AboutPage/AboutHeroSection";
import Visa from "../src/Pages/Visa/visa";
import PageHeroSection from "./Pages/PagePage/PageHeroSection";
import Contact from "./Pages/ContactPage/Contact";
import Blog from "./Pages/BlogPage/Blog";
// import FAQ from "./Pages/FAQ/FAQ";
import StudyVisa from "./Pages/services/StudyVisa";
import WorkVisa from "./Pages/services/WorkVisa";
import PermanentResidency from "./Pages/services/PermanentResidency";
import VisitorVisa from "./Pages/services/VisitorVisa";
import BusinessInvestorVisa from "./Pages/services/BusinessInvestorVisa";
import FamilySpousalSponsorship from "./Pages/services/FamilySpousalSponsorship";
import RefugeeClaims from "./Pages/services/RefugeeClaims";
import InadmissibilityServices from "./pages/services/InadmissibilityServices";
import DetentionRemoval from "./pages/services/DetentionRemoval";
import TechImmigration from "./pages/services/TechImmigration";
import USVisasTravelWaivers from "./pages/services/USVisasTravelWaivers";
import CanadaImmigrationForm from "./Pages/CanadaImmigrationForms";
import ScrollToTop from "./Components/ScrollToTop";
import Services from "./Pages/Service/Services";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutHeroSection />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/Page" element={<PageHeroSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/faq" element={<FAQ />} /> */}
        <Route path="/study-visa" element={<StudyVisa />} />
        <Route path="/work-visa" element={<WorkVisa />} />
        <Route path="/pr" element={<PermanentResidency />} />
        <Route path="/visitor-visa" element={<VisitorVisa />} />
        <Route path="/business-visa" element={<BusinessInvestorVisa />} />
        <Route path="/family" element={<FamilySpousalSponsorship />} />
        <Route path="/refugee" element={<RefugeeClaims />} />
        <Route path="/refugee-claims" element={<RefugeeClaims />} />
        <Route path="/inadmissibility" element={<InadmissibilityServices />} />
        <Route path="/detention-removal" element={<DetentionRemoval />} />
        <Route path="/tech-immigration" element={<TechImmigration />} />
        <Route path="/us-visas-travel-waivers" element={<USVisasTravelWaivers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/form" element={<CanadaImmigrationForm/>} />
       
      </Routes>
    </>
  );
};

export default AppRouter;
