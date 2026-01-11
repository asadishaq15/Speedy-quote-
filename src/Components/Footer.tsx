// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm text-gray-700 mb-4">
            SSDI Guidance is committed to helping keep people safe from fraud. We will never ask for personal details to start an SSDI application over Facebook or social media. We will only ask for certain details, in private messages, to confirm the identity of a client in a customer service situation. The only way to begin an SSDI application with us is on the phone, through a number found on our website, or one of our clearly-marked advertisements. Please keep your personal details safe, don't share them in a public forum, or with individuals who solicit your information.
          </p>
          
          <p className="text-sm text-gray-700 mb-4">
            This website is an ADVERTISEMENT. The Social Security disability information you obtain at this site is not, nor is it intended to be, legal advice, and should be used for informational purposes only. Utilizing this website or contacting us does not create an advocate-client relationship. You should consult an advocate for advice regarding your individual situation.
          </p>
          
          <p className="text-sm text-gray-700 mb-4">
            SSDI Guidance is neither affiliated with nor endorsed by the Social Security Administration, United States Department of Veterans Affairs, or any other government entity or agency. Your claim may be assigned to another reputable representation organization for service.
          </p>
          
          <p className="text-sm text-gray-700">
            SSDI Guidance is a disability advocacy group that advocates for people with SSDI or SSI claims pending before the Social Security Administration. We provide advocacy services for Americans who are disabled and unable to work. We help claimants with applications for Social Security Disability benefits. While we have many attorneys on our staff, we are not a law firm and do not provide legal service or represent claimants in an attorney-client relationship in this process.
          </p>
        </div>
        
        <div className="py-6 text-center">
          <p className="text-sm text-gray-600">Copyright © 2026 SSDI Guidance</p>
          
          <div className="mt-4 flex justify-center space-x-4 text-sm text-[#0D2C5C]">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link>
            <span>|</span>
            <Link to="/sms-terms" className="hover:underline">SMS Terms and Conditions</Link>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;