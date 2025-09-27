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
    
    // Province Selection
    selectedProvince: '',
    
    // Consultation
    consultationType: '',
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
    
    Swal.fire({
      title: `<span style="color: #1a202c; font-weight: bold;">Thank You, ${userName}!</span>`,
      html: `
        <div style="text-align: left; color: #2d3748;">
          <p style="margin-bottom: 15px; font-size: 16px; color: #4a5568;">Your Canada Immigration Eligibility Assessment has been successfully submitted!</p>
          <div style="background: #fed7d7; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #e53e3e;">
            <h4 style="font-weight: bold; font-size: 18px; margin-bottom: 10px; color: #1a202c;">Your Assessment Results:</h4>
            <p style="margin-bottom: 8px; color: #2d3748;">📊 <strong>FSWP Score:</strong> ${fswpTotal}/100 
              <span style="color: ${fswpTotal >= 67 ? '#38a169' : '#e53e3e'}; font-weight: bold;">
                ${fswpTotal >= 67 ? '✅ Eligible' : '❌ Needs Improvement'}
              </span>
            </p>
            <p style="margin-bottom: 8px; color: #2d3748;">🎯 <strong>CRS Score:</strong> ${crsTotal}/1200 
              <span style="color: ${crsTotal >= 470 ? '#38a169' : '#d69e2e'}; font-weight: bold;">
                ${crsTotal >= 470 ? '✅ Competitive' : '⚠️ Could be Improved'}
              </span>
            </p>
          </div>
          <p style="font-size: 14px; color: #718096; margin-bottom: 10px;">
            Our immigration experts will review your profile and contact you within 24-48 hours with personalized recommendations.
          </p>
          <p style="font-size: 12px; color: #a0aec0; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            This assessment is for evaluation purposes only and does not guarantee visa approval.
          </p>
        </div>
      `,
      icon: 'success',
      iconColor: '#38a169',
      background: '#ffffff',
      color: '#2d3748',
      confirmButtonColor: '#e53e3e',
      confirmButtonText: 'Great! What\'s Next?',
      customClass: {
        popup: 'rounded-xl border-2 border-red-500 shadow-2xl',
        title: 'mb-4',
        confirmButton: 'px-6 py-2 rounded-lg font-semibold text-white hover:bg-red-700 transition duration-300'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp animate__faster'
      }
    });
  };

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
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[rgb(254,230,186)] to-[rgb(240,200,140)] bg-clip-text text-transparent mb-2">
            Canada Immigration Eligibility Report
          </h1>
          <p className="text-gray-300">This report is for evaluation purposes only and does not guarantee visa approval.</p>
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

          {/* CRS Score Card Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">
              CRS (Comprehensive Ranking System) - Score Card
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* Language Test Results */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-red-500 pb-2">Language Test Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">IELTS Listening Score</label>
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
                <label className="block mb-2">IELTS Reading Score</label>
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
                <label className="block mb-2">IELTS Writing Score</label>
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
                <label className="block mb-2">IELTS Speaking Score</label>
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