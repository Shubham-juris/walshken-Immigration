import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import paralegalImg from '../../assets/hero/services/paralegal.jpg';
import pvtInvestigatorImg from '../../assets/hero/services/pvtinvestigator.jpg';
import courtImg from '../../assets/hero/services/court.jpg';
import bookkeepingImg from '../../assets/hero/services/bookkeeping.jpg';
import accountingImg from '../../assets/hero/services/accounting.jpg';
import businessConsultationImg from '../../assets/hero/services/business.jpg';
import drugImg from '../../assets/hero/services/drug.jpg';
import fraudImg from '../../assets/hero/services/fraud.jpg';
import recklessDrivingImg from '../../assets/hero/services/reckless.jpg';
import assaultImg from '../../assets/hero/services/assault.jpg';
import drugOffensesImg from '../../assets/hero/services/offence.jpg';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const services = [
    {
      title: "Paralegal",
      image: paralegalImg,
      description:
        "When you need paralegal services, you don't always need a lawyer. We are professionally trained to understand all aspects of the law and paralegal procedures.",
      extendedDescription:
        "That being said, however, Walshkenimmigration as a paralegal firm cannot provide you paralegal advice. We can provide you with our practical experience and knowledge gained throughout our years of experience. In any situation where paralegal advice is required, we are happy to refer you to our network of lawyers.",
    },
    {
      title: "Private Investigation",
      image: pvtInvestigatorImg,
      description:
        "Your most reliable private investigation agency in Calgary and Alberta, helping you understand what is really happening.",
      extendedDescription:
        "Our investigators bring years of expertise in gathering evidence, surveillance, and uncovering hidden truths with complete confidentiality.",
    },
    {
      title: "Court Agent",
      image: courtImg,
      description:
        "Civil Court Agency for claims up to $100,000 with judgment enforcement measures on judgments of any amount.",
      extendedDescription:
        "Our team assists clients with small claims, representation, and enforcement strategies to protect their legal rights effectively.",
    },
    {
      title: "Bookkeeping",
      image: bookkeepingImg,
      description:
        "Well-organized financial records ensure efficient business operations and form the foundation of success.",
      extendedDescription:
        "Our qualified staff will assist you with daily bookkeeping tasks, payroll, and financial organization to keep your business running smoothly.",
    },
    {
      title: "Accounting",
      image: accountingImg,
      description:
        "Accounting involves recording, classifying, and summarizing financial transactions for growth.",
      extendedDescription:
        "It provides a clear picture of financial health and performance, enabling effective resource management and strategic decision-making.",
    },
    {
      title: "Business Consultations",
      image: businessConsultationImg,
      description:
        "We provide professional consulting in areas like management, HR, finance, law, marketing, and digital transformation.",
      extendedDescription:
        "Walshkenimmigration’s consultants ensure practical strategies tailored to your specific industry and business goals.",
    },
    {
      title: "Driving Offenses (Alcohol & Drug)",
      image: drugImg,
      description:
        "Driving under the influence of alcohol or drugs is one of the most common offenses affecting immigration.",
      extendedDescription:
        "Such offenses can make applicants inadmissible to Canada, depending on the severity, circumstances, and location of the incident.",
    },
    {
      title: "Fraud",
      image: fraudImg,
      description:
        "Fraud includes any violation committed with the intent of depriving individuals or organizations of rightful property.",
      extendedDescription:
        "Theft under CAD 5000 is considered minor, while theft above CAD 5000 or involving weapons/violence is a serious crime affecting admissibility.",
    },
    {
      title: "Reckless Driving",
      image: recklessDrivingImg,
      description:
        "Reckless or dangerous driving can lead to inadmissibility in Canada.",
      extendedDescription:
        "Even if applicants state they will not drive in Canada, such offenses remain a major concern for immigration authorities.",
    },
    {
      title: "Assault",
      image: assaultImg,
      description:
        "Any form of assault may result in inadmissibility to Canada.",
      extendedDescription:
        "Use of a weapon, bodily harm, or aggravated assault cases are treated as serious crimes that significantly impact immigration chances.",
    },
    {
      title: "Drug Offenses",
      image: drugOffensesImg,
      description:
        "Charges involving purchase, distribution, possession, or use of drugs may render an individual inadmissible to Canada.",
      extendedDescription:
        "The nature and severity of the offense are key factors in determining immigration outcomes.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardHover = {
    scale: 1.02,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-red-950 min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our <span className="text-red-500">Professional Services</span>
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Comprehensive legal, financial, and business consulting services to
          meet all your needs. Our experienced team is here to guide you through
          complex processes with expertise and care.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover={cardHover}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-red-500 transition-all duration-300 flex flex-col h-full"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 text-red-400">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {expandedService === index
                  ? service.description + " " + (service.extendedDescription || "")
                  : service.description.split(" ").slice(0, 20).join(" ") + "..."}
              </p>

              {/* Read More / Less Button */}
              <button
                onClick={() => toggleService(index)}
                className="mt-auto flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium cursor-pointer"
              >
                {expandedService === index ? (
                  <>
                    <span>Read Less</span>
                    <FaChevronUp className="ml-1" />
                  </>
                ) : (
                  <>
                    <span>Read More</span>
                    <FaChevronDown className="ml-1" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
