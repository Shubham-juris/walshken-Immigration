import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-black via-gray-900 to-red-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          
          {/* Inner ring */}
          <div className="w-14 h-14 border-4 border-red-500 border-b-transparent rounded-full animate-spin mx-auto absolute top-3 left-3"></div>
          
          {/* Logo or icon in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10"></path>
            </svg>
          </div>
        </div>
        <p className="mt-6 text-xl text-white font-semibold">Loading PR Programs</p>
        <p className="mt-2 text-red-300">Your journey to permanent residency starts here...</p>
      </div>
    </div>
  );
};

export default Loading;