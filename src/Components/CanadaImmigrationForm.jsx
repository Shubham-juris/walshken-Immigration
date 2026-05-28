import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CanadaImmigrationForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    // Applicant Information
    name: '',
    dateOfBirth: '',
    countryOfCitizenship: '',
    contactInfo: '',
    passportNumber: '',
    maritalStatus: '',
    
    // FSWP Eligibility Factors
    age: '',
    education: '',
    workExperience: '',
    languageAbility: '',
    arrangedEmployment: '',
    adaptability: '',
    
    // Proof of Funds
    requiredFunds: '',
    availableFunds: '',
    
    // CRS Score Card (With Spouse)
    crsAge: '',
    crsEducation: '',
    firstOfficialLanguage: '',
    secondOfficialLanguage: '',
    canadianWorkExperience: '',
    
    // Spouse Factors
    spouseEducation: '',
    spouseLanguage: '',
    spouseCanadianWorkExperience: '',
    
    // Skill Transferability
    educationLanguage: '',
    educationCanadianExp: '',
    foreignExpLanguage: '',
    foreignExpCanadian: '',
    certificateOfQualification: '',
    
    // Additional Points
    provincialNomination: '',
    validJobOffer: '',
    studyInCanada: '',
    siblingInCanada: '',
    frenchProficiency: '',
    
    // Language Test Results
    ieltsListening: '',
    ieltsReading: '',
    ieltsWriting: '',
    ieltsSpeaking: '',
    celpipListening: '',
    celpipReading: '',
    celpipWriting: '',
    celpipSpeaking: '',
    tefListening: '',
    tefReading: '',
    tefWriting: '',
    tefSpeaking: '',
    
    // Education Details
    highestEducation: '',
    fieldOfStudy: '',
    institutionName: '',
    countryOfEducation: '',
    yearOfGraduation: '',
    educationCredentialAssessment: '',
    
    // Work Experience
    primaryOccupation: '',
    yearsOfExperience: '',
    nocCode: '',
    currentEmployer: '',
    jobTitle: '',
    
    // Family Information
    spouseName: '',
    spouseDateOfBirth: '',
    spouseCountryOfCitizenship: '',
    childrenCount: '',
    childrenAges: '',
    
    // Medical & Security
    medicalCondition: '',
    criminalRecord: '',
    
    // Previous Canada Experience
    previousVisit: '',
    previousStudy: '',
    previousWork: '',
    relativesInCanada: '',
    
    // Province Selection
    selectedProvince: '',
    
    // Consultation
    consultationType: '',
    
    // Additional Documents
    hasLanguageTest: '',
    hasEducationalCredentials: '',
    hasWorkReference: '',
    hasFundsProof: '',
    
    // Express Entry Profile
    expressEntryProfile: '',
    jobBankRegistration: '',
    
    // PNP Specific
    pnpStream: '',
    pnpStatus: '',
    
    // Business Immigration
    businessExperience: '',
    netWorth: '',
    investmentAmount: '',
    
    // Study Permit
    intendedProgram: '',
    institutionCanada: '',
    tuitionPaid: '',
    gicAmount: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Calculate FSWP Total Points
  const calculateFSWPTotal = () => {
    const factors = [
      parseInt(formData.age) || 0,
      parseInt(formData.education) || 0,
      parseInt(formData.workExperience) || 0,
      parseInt(formData.languageAbility) || 0,
      parseInt(formData.arrangedEmployment) || 0,
      parseInt(formData.adaptability) || 0
    ];
    
    return factors.reduce((total, points) => total + points, 0);
  };

  // Calculate CRS Total Score
  const calculateCRSTotal = () => {
    const coreFactors = [
      parseInt(formData.crsAge) || 0,
      parseInt(formData.crsEducation) || 0,
      parseInt(formData.firstOfficialLanguage) || 0,
      parseInt(formData.secondOfficialLanguage) || 0,
      parseInt(formData.canadianWorkExperience) || 0
    ];
    
    const spouseFactors = [
      parseInt(formData.spouseEducation) || 0,
      parseInt(formData.spouseLanguage) || 0,
      parseInt(formData.spouseCanadianWorkExperience) || 0
    ];
    
    const transferabilityFactors = [
      parseInt(formData.educationLanguage) || 0,
      parseInt(formData.educationCanadianExp) || 0,
      parseInt(formData.foreignExpLanguage) || 0,
      parseInt(formData.foreignExpCanadian) || 0,
      parseInt(formData.certificateOfQualification) || 0
    ];
    
    const additionalPoints = [
      parseInt(formData.provincialNomination) || 0,
      parseInt(formData.validJobOffer) || 0,
      parseInt(formData.studyInCanada) || 0,
      parseInt(formData.siblingInCanada) || 0,
      parseInt(formData.frenchProficiency) || 0
    ];
    
    const coreTotal = coreFactors.reduce((total, points) => total + points, 0);
    const spouseTotal = spouseFactors.reduce((total, points) => total + points, 0);
    const transferabilityTotal = Math.min(
      transferabilityFactors.reduce((total, points) => total + points, 0), 
      100
    );
    const additionalTotal = additionalPoints.reduce((total, points) => total + points, 0);
    
    return coreTotal + spouseTotal + transferabilityTotal + additionalTotal;
  };

  // Show success message with SweetAlert
  const showSuccessMessage = () => {
    const userName = formData.name || 'Valued Applicant';
    const fswpTotal = calculateFSWPTotal();
    const crsTotal = calculateCRSTotal();
    
  //   Swal.fire({
  //     title: `<span style="color: #1a202c; font-weight: bold;">Thank You, ${userName}!</span>`,
  //     html: `
  //       <div style="text-align: left; color: #2d3748;">
  //         <p style="margin-bottom: 15px; font-size: 16px; color: #4a5568;">Your Canada Immigration Eligibility Assessment has been successfully submitted!</p>
  //         <div style="background: #fed7d7; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #e53e3e;">
  //           <h4 style="font-weight: bold; font-size: 18px; margin-bottom: 10px; color: #1a202c;">Your Assessment Results:</h4>
  //           <p style="margin-bottom: 8px; color: #2d3748;">📊 <strong>FSWP Score:</strong> ${fswpTotal}/100 
  //             <span style="color: ${fswpTotal >= 67 ? '#38a169' : '#e53e3e'}; font-weight: bold;">
  //               ${fswpTotal >= 67 ? '✅ Eligible' : '❌ Needs Improvement'}
  //             </span>
  //           </p>
  //           <p style="margin-bottom: 8px; color: #2d3748;">🎯 <strong>CRS Score:</strong> ${crsTotal}/1200 
  //             <span style="color: ${crsTotal >= 470 ? '#38a169' : '#d69e2e'}; font-weight: bold;">
  //               ${crsTotal >= 470 ? '✅ Competitive' : '⚠️ Could be Improved'}
  //             </span>
  //           </p>
  //         </div>
  //         <p style="font-size: 14px; color: #718096; margin-bottom: 10px;">
  //           Our immigration experts will review your profile and contact you within 24-48 hours with personalized recommendations.
  //         </p>
  //         <p style="font-size: 12px; color: #a0aec0; border-top: 1px solid #e2e8f0; padding-top: 10px;">
  //           This assessment is for evaluation purposes only and does not guarantee visa approval.
  //         </p>
  //       </div>
  //     `,
  //     icon: 'success',
  //     iconColor: '#38a169',
  //     background: '#ffffff',
  //     color: '#2d3748',
  //     confirmButtonColor: '#e53e3e',
  //     confirmButtonText: 'Great! What\'s Next?',
  //     customClass: {
  //       popup: 'rounded-xl border-2 border-red-500 shadow-2xl',
  //       title: 'mb-4',
  //       confirmButton: 'px-6 py-2 rounded-lg font-semibold text-white hover:bg-red-700 transition duration-300'
  //     },
  //     showClass: {
  //       popup: 'animate__animated animate__fadeInDown animate__faster'
  //     },
  //     hideClass: {
  //       popup: 'animate__animated animate__fadeOutUp animate__faster'
  //     }
  //   });
  // };


      Swal.fire({
        title: `
          <span style="color: #1a202c; font-weight: bold;">
            Thank You, ${userName}!
          </span>
        `,
      
        html: `
          <div style="text-align: left; color: #2d3748;">
      
            <p style="margin-bottom: 18px; font-size: 16px; color: #4a5568; line-height:1.7;">
              Your Canada Immigration Eligibility Assessment has been successfully submitted!
            </p>
      
            <!-- IMPORTANT NOTICE -->
            <div style="
              background: #fff5f5;
              padding: 18px;
              border-radius: 12px;
              margin-bottom: 18px;
              border-left: 5px solid #e53e3e;
            ">
      
              <p style="
                margin-bottom: 12px;
                color: #c53030;
                font-size: 15px;
                font-weight: 600;
                line-height:1.7;
              ">
                Each and every text msg and call is paid.
              </p>
      
              <p style="
                color: #2d3748;
                font-size: 15px;
                font-weight: 500;
                line-height:1.7;
              ">
                Someone will get back to you in
                <span style="
                  color:#e53e3e;
                  font-weight:bold;
                ">
                  42 to 72hr
                </span>
              </p>
      
            </div>
      
            <!-- SCORE BOX -->
            <div style="
              background: #fed7d7;
              padding: 15px;
              border-radius: 8px;
              margin-bottom: 15px;
              border-left: 4px solid #e53e3e;
            ">
      
              <h4 style="
                font-weight: bold;
                font-size: 18px;
                margin-bottom: 10px;
                color: #1a202c;
              ">
                Your Assessment Results:
              </h4>
      
              <p style="margin-bottom: 8px; color: #2d3748;">
      
                📊 <strong>FSWP Score:</strong> ${fswpTotal}/100
      
                <span style="
                  color: ${fswpTotal >= 67 ? '#38a169' : '#e53e3e'};
                  font-weight: bold;
                ">
                  ${fswpTotal >= 67
                    ? ' ✅ Eligible'
                    : ' ❌ Needs Improvement'}
                </span>
      
              </p>
      
              <p style="margin-bottom: 8px; color: #2d3748;">
      
                🎯 <strong>CRS Score:</strong> ${crsTotal}/1200
      
                <span style="
                  color: ${crsTotal >= 470 ? '#38a169' : '#d69e2e'};
                  font-weight: bold;
                ">
                  ${crsTotal >= 470
                    ? ' ✅ Competitive'
                    : ' ⚠️ Could be Improved'}
                </span>
      
              </p>
      
            </div>
      
            <p style="
              font-size: 14px;
              color: #718096;
              margin-bottom: 10px;
              line-height:1.7;
            ">
              Our immigration experts will review your profile and provide further guidance based on your assessment results.
            </p>
      
            <p style="
              font-size: 12px;
              color: #a0aec0;
              border-top: 1px solid #e2e8f0;
              padding-top: 10px;
              line-height:1.7;
            ">
              This assessment is for evaluation purposes only and does not guarantee visa approval.
            </p>
      
          </div>
        `,
      
        icon: "success",
      
        iconColor: "#38a169",
      
        background: "#ffffff",
      
        color: "#2d3748",
      
        confirmButtonColor: "#e53e3e",
      
        confirmButtonText: "Close",
      
        customClass: {
          popup: "rounded-xl border-2 border-red-500 shadow-2xl",
          title: "mb-4",
          confirmButton:
            "px-6 py-2 rounded-lg font-semibold text-white hover:bg-red-700 transition duration-300",
        },
      
        showClass: {
          popup: "animate__animated animate__fadeInDown animate__faster",
        },
      
        hideClass: {
          popup: "animate__animated animate__fadeOutUp animate__faster",
        },
      });


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name) {
      Swal.fire({
        title: '<span style="color: #1a202c;">Missing Information</span>',
        text: 'Please enter your name to continue',
        icon: 'warning',
        iconColor: '#d69e2e',
        background: '#ffffff',
        color: '#2d3748',
        confirmButtonColor: '#e53e3e',
        customClass: {
          popup: 'rounded-xl border-2 border-yellow-400'
        }
      });
      return;
    }

    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    showSuccessMessage();
  };

  const fswpTotal = calculateFSWPTotal();
  const crsTotal = calculateCRSTotal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-red-900 text-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        {/* <header className="text-center py-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent mb-2">
            Canada Immigration Eligibility Report
          </h1>
          <p className="text-gray-300">This report is for evaluation purposes only and does not guarantee visa approval.</p>
        </header> */}
{/* Header */}
          <header className="text-center py-8">
          
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent mb-2">
              Canada Immigration Eligibility Report
            </h1>
          
            <p className="text-gray-300 mb-5">
              This report is for evaluation purposes only and does not guarantee visa approval.
            </p>
          
            {/* IMPORTANT NOTICE */}
            <div className="max-w-2xl mx-auto bg-red-500/10 border border-red-500 rounded-xl px-6 py-4">
          
              <p className="text-red-400 text-sm md:text-base leading-relaxed font-medium">
          
                Each and every text msg and call is paid.
          
                <br />
                <br />
          
                Someone will get back to you in
                <span className="text-white font-bold">
                  {" "}42 to 72hr
                </span>
          
              </p>
          
            </div>
          
          </header>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900 to-red-800 rounded-xl shadow-2xl p-6 mb-8">
          
          {/* Applicant Information Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Applicant Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block mb-2">Date of Birth</label>
                <input 
                  type="date" 
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Country of Citizenship</label>
                <input 
                  type="text" 
                  name="countryOfCitizenship"
                  value={formData.countryOfCitizenship}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Your country of citizenship"
                />
              </div>
              <div>
                <label className="block mb-2">Contact Information</label>
                <input 
                  type="text" 
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Email or phone number"
                />
              </div>
              <div>
                <label className="block mb-2">Passport Number</label>
                <input 
                  type="text" 
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Passport number"
                />
              </div>
              <div>
                <label className="block mb-2">Marital Status</label>
                <select 
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select marital status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Common-Law">Common-Law</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
            </div>
          </section>

          {/* Family Information Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Family Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Spouse/Partner Name</label>
                <input 
                  type="text" 
                  name="spouseName"
                  value={formData.spouseName}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Spouse/partner full name"
                />
              </div>
              <div>
                <label className="block mb-2">Spouse Date of Birth</label>
                <input 
                  type="date" 
                  name="spouseDateOfBirth"
                  value={formData.spouseDateOfBirth}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Spouse Country of Citizenship</label>
                <input 
                  type="text" 
                  name="spouseCountryOfCitizenship"
                  value={formData.spouseCountryOfCitizenship}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Spouse country of citizenship"
                />
              </div>
              <div>
                <label className="block mb-2">Number of Children</label>
                <input 
                  type="number" 
                  name="childrenCount"
                  value={formData.childrenCount}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Number of children"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2">Children Ages (if any)</label>
                <input 
                  type="text" 
                  name="childrenAges"
                  value={formData.childrenAges}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="e.g., 5, 8, 12"
                />
              </div>
            </div>
          </section>

          {/* Education Details Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Education Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Highest Education Level</label>
                <select 
                  name="highestEducation"
                  value={formData.highestEducation}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select education level</option>
                  <option value="High School">High School</option>
                  <option value="Diploma/Certificate">Diploma/Certificate</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD/Doctorate">PhD/Doctorate</option>
                  <option value="Post-Graduate Diploma">Post-Graduate Diploma</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Field of Study</label>
                <input 
                  type="text" 
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Your field of study"
                />
              </div>
              <div>
                <label className="block mb-2">Institution Name</label>
                <input 
                  type="text" 
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="University/College name"
                />
              </div>
              <div>
                <label className="block mb-2">Country of Education</label>
                <input 
                  type="text" 
                  name="countryOfEducation"
                  value={formData.countryOfEducation}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Country where you studied"
                />
              </div>
              <div>
                <label className="block mb-2">Year of Graduation</label>
                <input 
                  type="number" 
                  name="yearOfGraduation"
                  value={formData.yearOfGraduation}
                  onChange={handleChange}
                  min="1950"
                  max="2025"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Graduation year"
                />
              </div>
              <div>
                <label className="block mb-2">Education Credential Assessment (ECA)</label>
                <select 
                  name="educationCredentialAssessment"
                  value={formData.educationCredentialAssessment}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select ECA status</option>
                  <option value="Completed">Completed</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Not Started">Not Started</option>
                </select>
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Work Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Primary Occupation</label>
                <input 
                  type="text" 
                  name="primaryOccupation"
                  value={formData.primaryOccupation}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Your main occupation"
                />
              </div>
              <div>
                <label className="block mb-2">Years of Experience</label>
                <input 
                  type="number" 
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  min="0"
                  max="50"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Total years of experience"
                />
              </div>
              <div>
                <label className="block mb-2">NOC Code</label>
                <input 
                  type="text" 
                  name="nocCode"
                  value={formData.nocCode}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="e.g., 2173, 1241"
                />
              </div>
              <div>
                <label className="block mb-2">Current Employer</label>
                <input 
                  type="text" 
                  name="currentEmployer"
                  value={formData.currentEmployer}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Current company name"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2">Job Title</label>
                <input 
                  type="text" 
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Your current job title"
                />
              </div>
            </div>
          </section>

          {/* Language Test Results - Expanded */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Language Test Results</h2>
            
            {/* IELTS */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">IELTS (International English Language Testing System)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Listening Score</label>
                  <input 
                    type="number" 
                    name="ieltsListening"
                    value={formData.ieltsListening}
                    onChange={handleChange}
                    step="0.5" 
                    min="0" 
                    max="9"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="0-9"
                  />
                </div>
                <div>
                  <label className="block mb-2">Reading Score</label>
                  <input 
                    type="number" 
                    name="ieltsReading"
                    value={formData.ieltsReading}
                    onChange={handleChange}
                    step="0.5" 
                    min="0" 
                    max="9"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="0-9"
                  />
                </div>
                <div>
                  <label className="block mb-2">Writing Score</label>
                  <input 
                    type="number" 
                    name="ieltsWriting"
                    value={formData.ieltsWriting}
                    onChange={handleChange}
                    step="0.5" 
                    min="0" 
                    max="9"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="0-9"
                  />
                </div>
                <div>
                  <label className="block mb-2">Speaking Score</label>
                  <input 
                    type="number" 
                    name="ieltsSpeaking"
                    value={formData.ieltsSpeaking}
                    onChange={handleChange}
                    step="0.5" 
                    min="0" 
                    max="9"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="0-9"
                  />
                </div>
              </div>
            </div>

            {/* CELPIP */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-green-400">CELPIP (Canadian English Language Proficiency Index Program)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Listening Score</label>
                  <input 
                    type="number" 
                    name="celpipListening"
                    value={formData.celpipListening}
                    onChange={handleChange}
                    min="0" 
                    max="12"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="0-12"
                  />
                </div>
                <div>
                  <label className="block mb-2">Reading Score</label>
                  <input 
                    type="number" 
                    name="celpipReading"
                    value={formData.celpipReading}
                    onChange={handleChange}
                    min="0" 
                    max="12"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="0-12"
                  />
                </div>
                <div>
                  <label className="block mb-2">Writing Score</label>
                  <input 
                    type="number" 
                    name="celpipWriting"
                    value={formData.celpipWriting}
                    onChange={handleChange}
                    min="0" 
                    max="12"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="0-12"
                  />
                </div>
                <div>
                  <label className="block mb-2">Speaking Score</label>
                  <input 
                    type="number" 
                    name="celpipSpeaking"
                    value={formData.celpipSpeaking}
                    onChange={handleChange}
                    min="0" 
                    max="12"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="0-12"
                  />
                </div>
              </div>
            </div>

            {/* TEF */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">TEF (Test d'évaluation de français)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Compréhension Orale</label>
                  <input 
                    type="number" 
                    name="tefListening"
                    value={formData.tefListening}
                    onChange={handleChange}
                    min="0" 
                    max="450"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="0-450"
                  />
                </div>
                <div>
                  <label className="block mb-2">Compréhension Écrite</label>
                  <input 
                    type="number" 
                    name="tefReading"
                    value={formData.tefReading}
                    onChange={handleChange}
                    min="0" 
                    max="450"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="0-450"
                  />
                </div>
                <div>
                  <label className="block mb-2">Expression Écrite</label>
                  <input 
                    type="number" 
                    name="tefWriting"
                    value={formData.tefWriting}
                    onChange={handleChange}
                    min="0" 
                    max="450"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="0-450"
                  />
                </div>
                <div>
                  <label className="block mb-2">Expression Orale</label>
                  <input 
                    type="number" 
                    name="tefSpeaking"
                    value={formData.tefSpeaking}
                    onChange={handleChange}
                    min="0" 
                    max="450"
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                    placeholder="0-450"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FSWP Eligibility Assessment Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">
              Federal Skilled Worker Program (FSWP) - Eligibility Assessment
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block mb-2">Age (Points: up to 12)</label>
                <input 
                  type="number" 
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="0" 
                  max="12"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="0-12"
                />
              </div>
              <div>
                <label className="block mb-2">Education (Points: up to 25)</label>
                <input 
                  type="number" 
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  min="0" 
                  max="25"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="0-25"
                />
              </div>
              <div>
                <label className="block mb-2">Work Experience (Points: up to 15)</label>
                <input 
                  type="number" 
                  name="workExperience"
                  value={formData.workExperience}
                  onChange={handleChange}
                  min="0" 
                  max="15"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="0-15"
                />
              </div>
              <div>
                <label className="block mb-2">Language Ability (Points: up to 28)</label>
                <input 
                  type="number" 
                  name="languageAbility"
                  value={formData.languageAbility}
                  onChange={handleChange}
                  min="0" 
                  max="28"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="0-28"
                />
              </div>
              <div>
                <label className="block mb-2">Arranged Employment (Points: up to 10)</label>
                <input 
                  type="number" 
                  name="arrangedEmployment"
                  value={formData.arrangedEmployment}
                  onChange={handleChange}
                  min="0" 
                  max="10"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="0-10"
                />
              </div>
              <div>
                <label className="block mb-2">Adaptability (Points: up to 10)</label>
                <input 
                  type="number" 
                  name="adaptability"
                  value={formData.adaptability}
                  onChange={handleChange}
                  min="0" 
                  max="10"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="0-10"
                />
              </div>
            </div>

            {/* Proof of Funds */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-2">Required Funds (CAD)</label>
                <input 
                  type="number" 
                  name="requiredFunds"
                  value={formData.requiredFunds}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Amount in CAD"
                />
              </div>
              <div>
                <label className="block mb-2">Available Funds (CAD)</label>
                <input 
                  type="number" 
                  name="availableFunds"
                  value={formData.availableFunds}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Amount in CAD"
                />
              </div>
            </div>

            {/* FSWP Results */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">FSWP Eligibility Results</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p>Total Points: <span className="font-bold">{fswpTotal} / 100</span></p>
                  <p>Minimum Pass Mark: 67 / 100</p>
                </div>
                <div className={`px-4 py-2 rounded ${fswpTotal >= 67 ? 'bg-green-600' : 'bg-red-600'}`}>
                  Status: {fswpTotal >= 67 ? 'Eligible' : 'Not Eligible'}
                </div>
              </div>
            </div>
          </section>

          {/* CRS Score Card Section - Updated */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">
              CRS (Comprehensive Ranking System) - Score Card
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Core Factors */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Core / Human Capital Factors</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block mb-1">Age (Max: 100)</label>
                    <input 
                      type="number" 
                      name="crsAge"
                      value={formData.crsAge}
                      onChange={handleChange}
                      min="0" 
                      max="100"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-100"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Education (Max: 140)</label>
                    <input 
                      type="number" 
                      name="crsEducation"
                      value={formData.crsEducation}
                      onChange={handleChange}
                      min="0" 
                      max="140"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-140"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">First Official Language (Max: 150)</label>
                    <input 
                      type="number" 
                      name="firstOfficialLanguage"
                      value={formData.firstOfficialLanguage}
                      onChange={handleChange}
                      min="0" 
                      max="150"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-150"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Second Official Language (Max: 50)</label>
                    <input 
                      type="number" 
                      name="secondOfficialLanguage"
                      value={formData.secondOfficialLanguage}
                      onChange={handleChange}
                      min="0" 
                      max="50"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-50"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Canadian Work Experience (Max: 70)</label>
                    <input 
                      type="number" 
                      name="canadianWorkExperience"
                      value={formData.canadianWorkExperience}
                      onChange={handleChange}
                      min="0" 
                      max="70"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-70"
                    />
                  </div>
                </div>
              </div>

              {/* Spouse Factors */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Spouse Factors</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block mb-1">Spouse Education (Max: 10)</label>
                    <input 
                      type="number" 
                      name="spouseEducation"
                      value={formData.spouseEducation}
                      onChange={handleChange}
                      min="0" 
                      max="10"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-10"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Spouse Language (Max: 20)</label>
                    <input 
                      type="number" 
                      name="spouseLanguage"
                      value={formData.spouseLanguage}
                      onChange={handleChange}
                      min="0" 
                      max="20"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-20"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Spouse Canadian Work Experience (Max: 10)</label>
                    <input 
                      type="number" 
                      name="spouseCanadianWorkExperience"
                      value={formData.spouseCanadianWorkExperience}
                      onChange={handleChange}
                      min="0" 
                      max="10"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-10"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-6">Skill Transferability</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block mb-1">Education + Language (Max: 50)</label>
                    <input 
                      type="number" 
                      name="educationLanguage"
                      value={formData.educationLanguage}
                      onChange={handleChange}
                      min="0" 
                      max="50"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-50"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Education + Canadian Exp (Max: 50)</label>
                    <input 
                      type="number" 
                      name="educationCanadianExp"
                      value={formData.educationCanadianExp}
                      onChange={handleChange}
                      min="0" 
                      max="50"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-50"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Foreign Exp + Language (Max: 50)</label>
                    <input 
                      type="number" 
                      name="foreignExpLanguage"
                      value={formData.foreignExpLanguage}
                      onChange={handleChange}
                      min="0" 
                      max="50"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-50"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Foreign Exp + Canadian (Max: 50)</label>
                    <input 
                      type="number" 
                      name="foreignExpCanadian"
                      value={formData.foreignExpCanadian}
                      onChange={handleChange}
                      min="0" 
                      max="50"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-50"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Certificate of Qualification (Max: 50)</label>
                    <input 
                      type="number" 
                      name="certificateOfQualification"
                      value={formData.certificateOfQualification}
                      onChange={handleChange}
                      min="0" 
                      max="50"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-50"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Points */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Additional Points</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block mb-1">Provincial Nomination (Max: 600)</label>
                    <input 
                      type="number" 
                      name="provincialNomination"
                      value={formData.provincialNomination}
                      onChange={handleChange}
                      min="0" 
                      max="600"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-600"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Valid Job Offer (Max: 200)</label>
                    <input 
                      type="number" 
                      name="validJobOffer"
                      value={formData.validJobOffer}
                      onChange={handleChange}
                      min="0" 
                      max="200"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-200"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Study in Canada (Max: 30)</label>
                    <input 
                      type="number" 
                      name="studyInCanada"
                      value={formData.studyInCanada}
                      onChange={handleChange}
                      min="0" 
                      max="30"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-30"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Sibling in Canada (Max: 15)</label>
                    <input 
                      type="number" 
                      name="siblingInCanada"
                      value={formData.siblingInCanada}
                      onChange={handleChange}
                      min="0" 
                      max="15"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-15"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">French Proficiency (Max: 50)</label>
                    <input 
                      type="number" 
                      name="frenchProficiency"
                      value={formData.frenchProficiency}
                      onChange={handleChange}
                      min="0" 
                      max="50"
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                      placeholder="0-50"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CRS Results */}
            <div className="bg-gray-800 p-4 rounded-lg mt-6">
              <h3 className="text-xl font-semibold mb-2">CRS Score Results</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p>Total CRS Score: <span className="font-bold">{crsTotal} / 1200</span></p>
                </div>
                <div className={`px-4 py-2 rounded ${crsTotal >= 470 ? 'bg-green-600' : 'bg-yellow-600'}`}>
                  Status: {crsTotal >= 470 ? 'Competitive' : 'Needs Improvement'}
                </div>
              </div>
            </div>
          </section>

          {/* Previous Canada Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Previous Canada Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Previous Visit to Canada</label>
                <select 
                  name="previousVisit"
                  value={formData.previousVisit}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Previous Study in Canada</label>
                <select 
                  name="previousStudy"
                  value={formData.previousStudy}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Previous Work in Canada</label>
                <select 
                  name="previousWork"
                  value={formData.previousWork}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Relatives in Canada</label>
                <select 
                  name="relativesInCanada"
                  value={formData.relativesInCanada}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </section>

          {/* Medical & Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Medical & Security Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Any Medical Conditions?</label>
                <select 
                  name="medicalCondition"
                  value={formData.medicalCondition}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Criminal Record?</label>
                <select 
                  name="criminalRecord"
                  value={formData.criminalRecord}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </section>

          {/* Additional Documents */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Additional Documents Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Language Test Results</label>
                <select 
                  name="hasLanguageTest"
                  value={formData.hasLanguageTest}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select status</option>
                  <option value="Available">Available</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Not Taken">Not Taken</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Educational Credentials</label>
                <select 
                  name="hasEducationalCredentials"
                  value={formData.hasEducationalCredentials}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select status</option>
                  <option value="Available">Available</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Work Reference Letters</label>
                <select 
                  name="hasWorkReference"
                  value={formData.hasWorkReference}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select status</option>
                  <option value="Available">Available</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Proof of Funds</label>
                <select 
                  name="hasFundsProof"
                  value={formData.hasFundsProof}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select status</option>
                  <option value="Available">Available</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </div>
            </div>
          </section>

          {/* Express Entry Profile */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Express Entry Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Express Entry Profile Created?</label>
                <select 
                  name="expressEntryProfile"
                  value={formData.expressEntryProfile}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Job Bank Registration</label>
                <select 
                  name="jobBankRegistration"
                  value={formData.jobBankRegistration}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select option</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                  <option value="Not Required">Not Required</option>
                </select>
              </div>
            </div>
          </section>

          {/* Business Immigration Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Business Immigration (If Applicable)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-2">Business Experience (Years)</label>
                <input 
                  type="number" 
                  name="businessExperience"
                  value={formData.businessExperience}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Years of business experience"
                />
              </div>
              <div>
                <label className="block mb-2">Net Worth (CAD)</label>
                <input 
                  type="number" 
                  name="netWorth"
                  value={formData.netWorth}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Personal net worth"
                />
              </div>
              <div>
                <label className="block mb-2">Investment Amount (CAD)</label>
                <input 
                  type="number" 
                  name="investmentAmount"
                  value={formData.investmentAmount}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Intended investment amount"
                />
              </div>
            </div>
          </section>

          {/* Study Permit Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Study Permit Information (If Applicable)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Intended Program of Study</label>
                <input 
                  type="text" 
                  name="intendedProgram"
                  value={formData.intendedProgram}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Program name"
                />
              </div>
              <div>
                <label className="block mb-2">Institution in Canada</label>
                <input 
                  type="text" 
                  name="institutionCanada"
                  value={formData.institutionCanada}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="University/College name"
                />
              </div>
              <div>
                <label className="block mb-2">Tuition Paid</label>
                <select 
                  name="tuitionPaid"
                  value={formData.tuitionPaid}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Partial">Partial</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">GIC Amount (CAD)</label>
                <input 
                  type="number" 
                  name="gicAmount"
                  value={formData.gicAmount}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Guaranteed Investment Certificate"
                />
              </div>
            </div>
          </section>

          {/* Province Selection */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Province of Interest</h2>
            <div>
              <label className="block mb-2">Select Province/Territory</label>
              <select 
                name="selectedProvince"
                value={formData.selectedProvince}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
              >
                <option value="">Select a province</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland & Labrador">Newfoundland & Labrador</option>
                <option value="Northwest Territories">Northwest Territories</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Yukon">Yukon</option>
              </select>
            </div>
          </section>

          {/* PNP Specific Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Provincial Nominee Program (PNP) Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">PNP Stream of Interest</label>
                <select 
                  name="pnpStream"
                  value={formData.pnpStream}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select PNP stream</option>
                  <option value="Express Entry Linked">Express Entry Linked</option>
                  <option value="Skilled Worker">Skilled Worker</option>
                  <option value="Business/Entrepreneur">Business/Entrepreneur</option>
                  <option value="International Graduate">International Graduate</option>
                  <option value="Semi-Skilled">Semi-Skilled</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">PNP Application Status</label>
                <select 
                  name="pnpStatus"
                  value={formData.pnpStatus}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select status</option>
                  <option value="Not Applied">Not Applied</option>
                  <option value="Expression of Interest">Expression of Interest</option>
                  <option value="Invitation Received">Invitation Received</option>
                  <option value="Application Submitted">Application Submitted</option>
                  <option value="Nomination Received">Nomination Received</option>
                </select>
              </div>
            </div>
          </section>

          {/* Consultation Type */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Consultation Type</h2>
            <div>
              <label className="block mb-2">Select Service Type</label>
              <select 
                name="consultationType"
                value={formData.consultationType}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
              >
                <option value="">Select a service</option>
                <option value="Express Entry">Express Entry (FSW/FST/CEC)</option>
                <option value="PNP">Provincial Nominee Program (PNP)</option>
                <option value="Family Sponsorship">Family Sponsorship</option>
                <option value="Study Permit">Study Permit</option>
                <option value="Work Permit">Work Permit</option>
                <option value="Visitor Visa">Visitor Visa / TRV</option>
                <option value="PR Card Renewal">PR Card Renewal</option>
                <option value="Citizenship Application">Citizenship Application</option>
                <option value="Business Immigration">Business Immigration</option>
                <option value="Refugee Claim">Refugee Claim</option>
                <option value="Appeal Cases">Appeal Cases</option>
                <option value="Comprehensive Assessment">Comprehensive Assessment</option>
              </select>
            </div>
          </section>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Submit Eligibility Assessment
            </button>
          </div>
        </form>

        {/* Footer */}
        <footer className="text-center text-gray-400 py-4 text-sm">
          <p>© {new Date().getFullYear()} Canada Immigration Eligibility Assessment Tool</p>
          <p className="mt-2">This tool is for evaluation purposes only and does not guarantee visa approval.</p>
          <p>Always consult with a Regulated Canadian Immigration Consultant (RCIC) for professional advice.</p>
        </footer>
      </div>
    </div>
  );
};

export default CanadaImmigrationForm;
