// src/components/HeroSection.tsx
import React, { useState } from 'react';
import SeniorImage from '../assets/seniors.jpg';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    receivingSSDI: '',
    expectOutOfWork: '',
    workedFiveYears: '',
    attorneyHelping: '',
    receivingTreatment: '',
    lastWorkedYear: '2025',
    age: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-[#0D2C5C] text-3xl mb-6 font-bold">
      SSDI Guidance is a non-government affiliated organization, dedicated to helping you get compensation for disabilities
        </h1>
        
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col md:flex-row">
          <div className="md:w-3/5 pr-0 md:pr-8">
            <h2 className="text-2xl font-bold text-[#0D2C5C] mb-6">Learn More About Your SSDI Eligibility</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* SSDI Questions */}
              <div className="space-y-4">
                <div>
                  <p className="mb-2">1. Are you currently receiving Social Security Disability (SSDI) benefits?</p>
                  <div className="flex space-x-6">
                    <label className="inline-flex items-center">
                      <input type="radio" name="receivingSSDI" value="Yes" onChange={handleChange} className="form-radio text-[#0D2C5C]" />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="receivingSSDI" value="No" onChange={handleChange} className="form-radio text-[#0D2C5C]" />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="mb-2">2. Do you expect to be out of work for at least a year?</p>
                  <div className="flex space-x-6">
                    <label className="inline-flex items-center">
                      <input type="radio" name="expectOutOfWork" value="Yes" onChange={handleChange} className="form-radio text-[#0D2C5C]" />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="expectOutOfWork" value="No" onChange={handleChange} className="form-radio text-[#0D2C5C]" />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="mb-2">3. Have you worked for 5 out of the last 10 years? (Does not have to be consecutive.)</p>
                  <div className="flex space-x-6">
                    <label className="inline-flex items-center">
                      <input type="radio" name="workedFiveYears" value="Yes" onChange={handleChange} className="form-radio text-[#0D2C5C]" />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="workedFiveYears" value="No" onChange={handleChange} className="form-radio text-[#0D2C5C]" />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="mb-2">4. Is an attorney helping you with your case or claim?</p>
                  <div className="flex space-x-6">
                    <label className="inline-flex items-center">
                      <input type="radio" name="attorneyHelping" value="Yes" onChange={handleChange} className="form-radio text-[#0D2C5C]" />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="attorneyHelping" value="No" onChange={handleChange} className="form-radio text-[#0D2C5C]" />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="mb-2">5. Are you receiving treatment for your medical condition?</p>
                  <div className="flex space-x-6">
                    <label className="inline-flex items-center">
                      <input type="radio" name="receivingTreatment" value="Yes" onChange={handleChange} className="form-radio text-[#0D2C5C]" />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="receivingTreatment" value="No" onChange={handleChange} className="form-radio text-[#0D2C5C]" />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <p className="mb-2">6. What is the last year in which you worked?</p>
                  <select
                    name="lastWorkedYear"
                    value={formData.lastWorkedYear}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5BB7E6]"
                  >
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    {/* Add more years as needed */}
                  </select>
                </div>
                
                <div>
                  <p className="mb-2">7. What is the age of the person seeking benefits?</p>
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="50"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5BB7E6]"
                  />
                </div>
              </div>
              
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-[#0D2C5C] mb-4">Contact information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5BB7E6]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5BB7E6]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5BB7E6]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5BB7E6]"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Zip Code"
                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5BB7E6]"
                  />
                </div>
              </div>
              
              {/* Consent */}
              <div>
                <h3 className="text-xl font-semibold text-[#0D2C5C] mb-4">Consent</h3>
                <label className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mt-1 form-checkbox text-[#0D2C5C]"
                  />
                  <span className="text-sm">
                    I agree to the terms and conditions below
                  </span>
                </label>
                <p className="text-xs mt-4 text-gray-600">
                  By clicking "Help me with my SSDI Claim" below I am providing my ESIGN signature and express written consent agreement to permit
                  SSDI Guidance, LLC to contact me at the number provided above for marketing purposes regarding SSDI Guidance services,
                  including a disability claim, benefits optimization, Medicare, and/or pharmacy services, and customer care messages, such as
                  information and reminders regarding your disability claim. I understand that these calls and/or SMS/MMS messages include those using
                  automated technology, AI generative voice, and prerecorded and/or artificial voice messages. I confirm that the phone number above is
                  accurate, and I am the regular user of that phone. I also agree to SSDI Guidance's SMS Terms and Conditions and Privacy Policy. For
                  SMS messages campaigns, text "STOP" to stop and "HELP" for help. Message frequency may vary. Msg & data rates may apply. I
                  acknowledge that my consent is not required to obtain any good or service, and to contact SSDI Guidance without providing consent I
                  can call 833-242-2963.
                </p>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#0D2C5C] text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition duration-300"
              >
                HELP ME WITH MY SSDI CLAIM
              </button>
            </form>
          </div>
          
          <div className="md:w-2/5 mt-8 md:mt-0">
            <img
              src={SeniorImage}
              alt="People smiling together"
              className="w-full h-auto rounded-lg"
            />
            
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold">4.6 stars</p>
              <div className="flex justify-center text-[#D8A627] text-xl">
                ★★★★★
              </div>
              <p className="text-sm mt-2">Based on over 3K reviews</p>
            </div>
            
            <div className="mt-8 text-center">
              <p className="font-bold text-xl">We will never share</p>
              <p className="font-bold text-xl">your info with anyone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;