// src/components/BenefitsSection.tsx
import React from 'react';
import { FaFileAlt, FaSmile, FaChartLine } from 'react-icons/fa';

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0D2C5C] mb-12">Benefits of working with SSDI Guidance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4 text-[#D8A627] text-4xl">
              <FaFileAlt />
            </div>
            <h3 className="text-xl font-bold text-[#0D2C5C] mb-3">Expert Guidance on the SSDI Process</h3>
            <p className="text-gray-600">
              SSDI Guidance simplifies SSDI claims and appeals with expert representation to increase your chances of success.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4 text-[#D8A627] text-4xl">
              <FaSmile />
            </div>
            <h3 className="text-xl font-bold text-[#0D2C5C] mb-3">Stress-Free Application Management</h3>
            <p className="text-gray-600">
              They manage paperwork and communication with the SSA, saving you time and stress.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4 text-[#D8A627] text-4xl">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-bold text-[#0D2C5C] mb-3">Higher Success Rates</h3>
            <p className="text-gray-600">
              SSDI Guidance uses their expertise to resolve issues and improve your chances of approval.
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <button className="bg-[#D8A627] text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition duration-300">
            FILL OUT THE EVALUATION FORM
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;