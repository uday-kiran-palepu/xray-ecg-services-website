import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Stethoscope } from 'lucide-react';

/* 
 * FOOTER COMPONENT - SITE-WIDE FOOTER
 * 
 * EDITABLE SECTIONS:
 * 1. Company Information: logo, description, certifications
 * 2. Service Links: navigation to service pages
 * 3. Contact Information: phone, email, service areas
 * 4. Copyright and Legal Links
 */

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#34495E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* EDITABLE: Company Information Section */}
          <div className="space-y-4">
            {/* EDITABLE: Company Logo and Name */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E8449] to-[#2980B9] rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Q Path Diagnostics</span> {/* EDITABLE: Company name */}
            </div>
            {/* EDITABLE: Company Description */}
            <p className="text-gray-300 leading-relaxed">
              Hyderabad's first at-home diagnostic service provider offering ABG, ECG, and X-Ray tests. 
              Professional, certified, and trusted healthcare at your doorstep.
            </p>
            {/* EDITABLE: Certification Badges */}
            <div className="flex space-x-2">
              <span className="bg-[#1E8449] text-xs px-3 py-1 rounded-full">ICMR Certified</span>
              <span className="bg-[#2980B9] text-xs px-3 py-1 rounded-full">NABL Certified</span>
              <span className="bg-gray-600 text-xs px-3 py-1 rounded-full">CAP Certified</span>
            </div>
          </div>

          {/* EDITABLE: Service Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            {/* EDITABLE: Service Navigation Links */}
            <div className="space-y-3">
              <Link to="/abg" /* EDITABLE: ABG page link */ className="block text-gray-300 hover:text-[#1E8449] transition-colors">
                ABG Test - Arterial Blood Gas Analysis
              </Link>
              <Link to="/ecg" /* EDITABLE: ECG page link */ className="block text-gray-300 hover:text-[#1E8449] transition-colors">
                ECG Test - Electrocardiogram
              </Link>
              <Link to="/xray" /* EDITABLE: X-Ray page link */ className="block text-gray-300 hover:text-[#1E8449] transition-colors">
                X-Ray - Digital X-Ray Services
              </Link>
              <Link to="/contact" /* EDITABLE: Contact page link */ className="block text-gray-300 hover:text-[#1E8449] transition-colors">
                Book a Test Now
              </Link>
            </div>
          </div>

          {/* EDITABLE: Contact Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {/* EDITABLE: Phone Contact Information */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#1E8449]" />
                <div>
                  <a href="tel:+918712197228" /* EDITABLE: Phone contact link */ className="text-gray-300 hover:text-white transition-colors">
                    +91 87121 97228 {/* EDITABLE: Display phone number */}
                  </a>
                  <div className="text-sm text-gray-400">24/7 Emergency Service</div>
                </div>
              </div>
              
              {/* EDITABLE: Email Contact Information */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#2980B9]" />
                <div>
                  <a href="mailto:contact@qpathdiagnostics.com" /* EDITABLE: Email contact link */ className="text-gray-300 hover:text-white transition-colors">
                    contact@qpathdiagnostics.com {/* EDITABLE: Display email address */}
                  </a>
                  <div className="text-sm text-gray-400">Quick Response Guaranteed</div>
                </div>
              </div>
              
              {/* EDITABLE: Service Coverage Information */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#1E8449] mt-1" />
                <div>
                  <div className="text-gray-300">Service Coverage</div>
                  {/* EDITABLE: Service Coverage Areas */}
                  <div className="text-sm text-gray-400">All areas of Hyderabad & Secunderabad</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EDITABLE: Footer Bottom Section - Copyright and legal links */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* EDITABLE: Copyright Notice */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Q Path Diagnostics. All rights reserved.
            </div>
            {/* EDITABLE: Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link to="/contact" /* EDITABLE: Privacy policy link */ className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" /* EDITABLE: Terms of service link */ className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" /* EDITABLE: Medical disclaimer link */ className="text-gray-400 hover:text-white transition-colors">
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};