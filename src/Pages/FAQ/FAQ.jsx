import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Walshken Immigration provide?",
    answer:
      "We offer a wide range of immigration services including study visas, work permits, permanent residency (PR), family sponsorship, business/investor visas, and international legal services.",
  },
  {
    question: "How long does the visa application process take?",
    answer:
      "Processing time depends on the type of visa and the country of application. On average, it may take from a few weeks to several months. Our team guides you through the timeline for your specific case.",
  },
  {
    question:
      "Can Walshken Immigration help with international family disputes?",
    answer:
      "Yes, we provide assistance with international adoptions, divorce, family law, and property disputes through our global legal partners.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "We provide an initial consultation to understand your case and guide you on the best immigration pathway. Book a consultation directly through our Contact page.",
  },
  {
    question: "Why choose Walshken Immigration?",
    answer:
      "Our team has years of experience, a high success rate, and provides personalized solutions to make your immigration journey smooth and stress-free.",
  },
  {
    question: "Can you assist with study visa applications?",
    answer:
      "Absolutely! We help students choose the right country and university, prepare applications, and guide them through the visa interview process.",
  },
  {
    question: "Do you provide work permit assistance?",
    answer:
      "Yes, we assist with employer sponsorships, documentation, and help ensure compliance with immigration laws for work permits.",
  },
  {
    question: "What is Permanent Residency (PR)?",
    answer:
      "Permanent Residency allows you to live, work, and study in a country indefinitely. We guide you through the PR application process step by step.",
  },
  {
    question: "Can you help with business and investor visas?",
    answer:
      "Yes, we specialize in helping entrepreneurs and investors secure visas by preparing strong applications and investment documentation.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment directly through our Contact page or click the 'Get A Quote' button in the navigation bar.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Find answers to the most common questions about our immigration
          services. If you can’t find what you’re looking for, feel free to
          contact us anytime.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none"
          />
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-4 transition-all"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span className="ml-2 text-gray-600 text-2xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
