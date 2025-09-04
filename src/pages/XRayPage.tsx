import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ServiceHero } from '../components/ServiceHero';
import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedCard } from '../components/AnimatedCard';
import { OptimizedImage } from '../components/OptimizedImage';
import { 
  Activity, Clock, Home, Shield, CheckCircle, 
  Users, AlertTriangle, Zap, Bone 
} from 'lucide-react';
import { motion } from 'framer-motion';

/* 
 * X-RAY TEST PAGE - PORTABLE DIGITAL X-RAY SERVICES
 * 
 * EDITABLE SECTIONS:
 * 1. Hero Section: backgroundImage, title, subtitle, price
 * 2. Benefits Section: benefits array with icons, titles, descriptions
 * 3. Process Steps: process array with step descriptions
 * 4. Target Conditions: conditions array
 * 5. Contact Information: phone numbers and links
 * 6. Pricing Information: price displays and service details
 */

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center py-20 text-red-600">Something went wrong on this page. Please try again.</div>;
    }
    return this.props.children;
  }
}

export const XRayPage: React.FC = () => {
  console.log('XRayPage rendered'); // Debugging log

  /* EDITABLE: Benefits Section Data - Modify icons, titles, and descriptions */
  const benefits = [
    { icon: Home, title: "Doorstep Service", desc: "Professional X-ray imaging without leaving home" },
    { icon: Clock, title: "Quick Procedure", desc: "Complete imaging in 15-20 minutes" },
    { icon: Shield, title: "Radiation Safety", desc: "Low-dose digital X-ray with protective measures" },
    { icon: Users, title: "Expert Radiographers", desc: "Certified technicians with mobile equipment" }
  ];

  /* EDITABLE: Target Conditions - Conditions requiring X-ray imaging */
  const conditions = [
    "Bone fractures and injuries",
    "Chest infections and pneumonia",
    "Joint problems and arthritis", 
    "Dental and sinus issues",
    "Spine and posture evaluation",
    "Pre-surgical imaging"
  ];

  /* EDITABLE: Process Steps - X-ray imaging procedure steps */
  const process = [
    "Appointment scheduling and preparation guidance",
    "Technician arrival with portable X-ray machine",
    "Patient positioning and protective shielding",
    "Digital image capture and quality check",
    "Immediate preview and report delivery within hours"
  ];

  return (
    <ErrorBoundary>
      <div className="pt-16 lg:pt-20">
        {/* EDITABLE: ServiceHero Section - Main hero banner with call-to-action buttons */}
        <ServiceHero
          title="X-Ray at Your Doorstep" /* EDITABLE: Main page title */
          subtitle="Professional digital X-ray imaging in the comfort of your home. Safe, quick, and convenient diagnostic service." /* EDITABLE: Page description */
          backgroundImage="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg" /* EDITABLE: Hero background image URL - exactly 1200x628 pixels */
          price="₹1299" /* EDITABLE: Service price display */
          ctaText="Book X-Ray" /* EDITABLE: Call-to-action button text */
          buttonGap="gap-4 sm:gap-6 md:gap-8" /* EDITABLE: Button spacing - MOBILE FIX APPLIED */
        />

        {/* EDITABLE: Understanding X-Ray Section - Educational content about X-ray imaging */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-left">
                <div className="space-y-6">
                  {/* EDITABLE: Section Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-[#34495E]">
                    Understanding X-Ray Imaging
                  </h2>
                  {/* EDITABLE: Section Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    X-ray is a non-invasive imaging technique that uses low-dose radiation to create images of bones, organs, and tissues. 
                    It helps diagnose fractures, infections, and other conditions quickly and accurately.
                  </p>
                  
                  {/* EDITABLE: Information Box - What X-ray detects */}
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-50 border-l-4 border-[#2980B9] p-6 rounded-r-lg hover:bg-blue-100 transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <Activity className="w-6 h-6 text-[#2980B9] mt-1" />
                      <div>
                        <h4 className="font-semibold text-[#34495E] mb-2">What X-Ray Detects:</h4>
                        {/* EDITABLE: X-ray Detection List */}
                        <ul className="text-gray-600 space-y-1">
                          <li>• Bone fractures and density</li>
                          <li>• Lung conditions</li>
                          <li>• Foreign objects</li>
                          <li>• Joint abnormalities</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={200}>
                <div className="relative">
                  {/* EDITABLE: Section Image - Replace src URL to change image */}
                  <OptimizedImage
                    src="https://images.pexels.com/photos/3952232/pexels-photo-3952232.jpeg" /* EDITABLE: Section image URL */
                    alt="X-Ray imaging procedure" /* EDITABLE: Image alt text for accessibility */
                    className="w-full rounded-2xl shadow-lg"
                    width={600}
                    height={400}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* EDITABLE: Benefits Section - Why choose at-home X-ray service */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                {/* EDITABLE: Benefits Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#34495E] mb-4">
                  Safe & Convenient X-Ray Service
                </h2>
                {/* EDITABLE: Benefits Section Description */}
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get high-quality digital X-rays with minimal radiation and maximum convenience at home
                </p>
              </div>
            </AnimatedSection>

            {/* EDITABLE: Benefits Cards Grid */}
            <AnimatedSection stagger={true} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <AnimatedCard
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.desc}
                  delay={index * 150}
                  hoverEffect="glow"
                />
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* EDITABLE: Who Needs X-Ray Section - Target conditions and pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-left">
                <div className="space-y-6">
                  {/* EDITABLE: Target Conditions Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-[#34495E]">
                    Common Conditions We Image
                  </h2>
                  {/* EDITABLE: Target Conditions Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our at-home X-ray service helps diagnose various conditions promptly, 
                    enabling faster treatment and recovery.
                  </p>
                  
                  {/* EDITABLE: Conditions List - Medical conditions requiring X-ray imaging */}
                  <div className="space-y-3">
                    {conditions.map((condition, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-[#2980B9] flex-shrink-0" />
                        <span className="text-[#34495E]">{condition}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* EDITABLE: Pricing Card - Service pricing and booking information */}
              <AnimatedSection animation="slide-right" delay={300}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-[#34495E] mb-6">Pricing & Information</h3>
                  
                  <div className="space-y-4 mb-6">
                    {/* EDITABLE: Pricing Information - Update prices and service details */}
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">X-Ray at Home</span>
                      <motion.span 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl font-bold text-[#1E8449]"
                      >
                        ₹1299 {/* EDITABLE: X-ray test price */}
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Report Delivery</span>
                      <span className="text-[#34495E] font-medium">Within 2-4 hours</span> {/* EDITABLE: Report delivery time */}
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Service Hours</span>
                      <span className="text-[#34495E] font-medium">8 AM - 8 PM</span> {/* EDITABLE: Service availability */}
                    </div>
                  </div>

                  {/* EDITABLE: Booking Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact" /* EDITABLE: Booking destination link */
                      className="w-full bg-[#1E8449] text-white py-4 rounded-lg hover:bg-[#1E8449]/90 transition-all duration-300 hover:shadow-lg font-semibold text-lg inline-block text-center relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">Book X-Ray Now</span> {/* EDITABLE: Booking button text */}
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* EDITABLE: Process Section - Step-by-step X-ray imaging procedure */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                {/* EDITABLE: Process Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#34495E] mb-4">
                  Our Safe X-Ray Process
                </h2>
                {/* EDITABLE: Process Section Description */}
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  State-of-the-art portable digital X-ray equipment with minimal radiation exposure
                </p>
              </div>
            </AnimatedSection>

            {/* EDITABLE: Process Steps List - Interactive step-by-step process */}
            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 200}
                  className="flex items-center space-x-6 mb-8 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex-shrink-0 w-12 h-12 bg-[#2980B9] text-white rounded-full flex items-center justify-center font-bold text-lg relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">{index + 1}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 p-4 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300"
                  >
                    <p className="text-lg text-[#34495E] font-medium">{step}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* EDITABLE: CTA Section - Final call-to-action with contact options */}
        <section className="py-20 bg-gradient-to-r from-[#2980B9] to-[#1E8449]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              {/* EDITABLE: CTA Section Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Schedule Your Home X-Ray Today
              </h2>
              {/* EDITABLE: CTA Section Description */}
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Safe, professional X-ray imaging at your doorstep for accurate diagnosis
              </p>
              
              {/* EDITABLE: CTA Buttons - MOBILE SPACING FIXED */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                {/* EDITABLE: Primary Booking Button */}
                <Link
                  to="/contact" /* EDITABLE: Booking page link */
                  className="bg-white text-[#2980B9] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-105 font-semibold text-base sm:text-lg w-full sm:w-auto text-center"
                >
                  Book X-Ray - ₹1299 {/* EDITABLE: Button text and price */}
                </Link>
                
                {/* EDITABLE: Emergency Call Button */}
                <a
                  href="tel:+918712197228" /* EDITABLE: Emergency phone number */
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-[#2980B9] transition-all duration-300 font-semibold text-base sm:text-lg w-full sm:w-auto text-center"
                >
                  Call: +91 87121 97228 {/* EDITABLE: Display phone number */}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
};