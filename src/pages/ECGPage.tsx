import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ServiceHero } from '../components/ServiceHero';
import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedCard } from '../components/AnimatedCard';
import { OptimizedImage } from '../components/OptimizedImage';
import { 
  Heart, Clock, Home, Shield, CheckCircle, 
  Users, Activity, AlertTriangle, Zap 
} from 'lucide-react';
import { motion } from 'framer-motion';

/* 
 * ECG TEST PAGE - ELECTROCARDIOGRAM TESTING SERVICE
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

export const ECGPage: React.FC = () => {
  console.log('ECGPage rendered'); // Debugging log

  /* EDITABLE: Benefits Section Data - Modify icons, titles, and descriptions */
  const benefits = [
    { icon: Heart, title: "Painless Procedure", desc: "Non-invasive test with no discomfort" },
    { icon: Clock, title: "Quick & Easy", desc: "Complete test in just 5-10 minutes" },
    { icon: Home, title: "Home Convenience", desc: "Perfect for elderly and immobile patients" },
    { icon: Shield, title: "Digital Safety", desc: "Latest ECG machines with safety protocols" }
  ];

  /* EDITABLE: Target Conditions - Heart conditions detected by ECG */
  const conditions = [
    "Irregular heartbeat (Arrhythmia)",
    "Chest pain evaluation",
    "Heart attack diagnosis", 
    "Heart failure assessment",
    "High blood pressure monitoring",
    "Pre-surgical cardiac evaluation"
  ];

  /* EDITABLE: Process Steps - ECG testing procedure steps */
  const process = [
    "Patient preparation and positioning on comfortable surface",
    "Placement of 12-lead electrodes on chest, arms, and legs",
    "Recording heart's electrical activity for 10 seconds",
    "Digital analysis and interpretation by certified technician",
    "Instant report generation and delivery to patient"
  ];

  return (
    <ErrorBoundary>
      <div className="pt-16 lg:pt-20">
        {/* EDITABLE: ServiceHero Section - Main hero banner with call-to-action buttons */}
        <ServiceHero
          title="ECG Test at Your Doorstep" /* EDITABLE: Main page title */
          subtitle="Professional Electrocardiogram testing at home. Painless, quick procedure perfect for heart health monitoring." /* EDITABLE: Page description */
          backgroundImage="https://images.pexels.com/photos/7449057/pexels-photo-7449057.jpeg" /* EDITABLE: Hero background image URL - exactly 1200x628 pixels */
          price="₹699" /* EDITABLE: Service price display */
          ctaText="Book ECG Test" /* EDITABLE: Call-to-action button text */
          buttonGap="gap-4 sm:gap-6 md:gap-8" /* EDITABLE: Button spacing - MOBILE FIX APPLIED */
        />

        {/* EDITABLE: Understanding ECG Section - Educational content about ECG tests */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-left">
                <div className="space-y-6">
                  {/* EDITABLE: Section Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-[#34495E]">
                    Understanding ECG Tests
                  </h2>
                  {/* EDITABLE: Section Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    An Electrocardiogram (ECG or EKG) records the electrical activity of your heart. 
                    This simple, non-invasive test helps detect heart problems, monitor heart health, 
                    and guide treatment decisions.
                  </p>
                  
                  {/* EDITABLE: Information Box - What ECG measures */}
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-50 border-l-4 border-[#2980B9] p-6 rounded-r-lg hover:bg-blue-100 transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <Activity className="w-6 h-6 text-[#2980B9] mt-1" />
                      <div>
                        <h4 className="font-semibold text-[#34495E] mb-2">What ECG Measures:</h4>
                        {/* EDITABLE: ECG Measurements List */}
                        <ul className="text-gray-600 space-y-1">
                          <li>• Heart rhythm and rate</li>
                          <li>• Heart muscle damage</li>
                          <li>• Blood flow to the heart</li>
                          <li>• Heart's electrical conduction</li>
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
                    src="https://images.pexels.com/photos/7449057/pexels-photo-7449057.jpeg" /* EDITABLE: Section image URL */
                    alt="ECG test procedure" /* EDITABLE: Image alt text for accessibility */
                    className="w-full rounded-2xl shadow-lg"
                    width={600}
                    height={400}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* EDITABLE: Benefits Section - Why choose at-home ECG testing */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                {/* EDITABLE: Benefits Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#34495E] mb-4">
                  Painless & Quick Procedure
                </h2>
                {/* EDITABLE: Benefits Section Description */}
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience stress-free ECG testing with our advanced portable equipment and expert care
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

        {/* EDITABLE: Who Needs ECG Section - Target conditions and pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-left">
                <div className="space-y-6">
                  {/* EDITABLE: Target Conditions Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-[#34495E]">
                    Common Heart Conditions We Detect
                  </h2>
                  {/* EDITABLE: Target Conditions Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our ECG testing helps identify various heart conditions early, enabling 
                    prompt treatment and better health outcomes.
                  </p>
                  
                  {/* EDITABLE: Conditions List - Heart conditions detected by ECG */}
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
                      <span className="text-gray-600">ECG Test at Home</span>
                      <motion.span 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl font-bold text-[#1E8449]"
                      >
                        ₹699 {/* EDITABLE: ECG test price */}
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Report Delivery</span>
                      <span className="text-[#34495E] font-medium">Within 5-10 minutes</span> {/* EDITABLE: Report delivery time */}
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Service Hours</span>
                      <span className="text-[#34495E] font-medium">24/7 Available</span> {/* EDITABLE: Service availability */}
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
                      <span className="relative z-10">Book ECG Test Now</span> {/* EDITABLE: Booking button text */}
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* EDITABLE: Process Section - Step-by-step ECG testing procedure */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                {/* EDITABLE: Process Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#34495E] mb-4">
                  Our ECG Testing Process
                </h2>
                {/* EDITABLE: Process Section Description */}
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  State-of-the-art portable ECG machines with the highest safety and accuracy standards
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
                Get Your ECG Test Done at Home
              </h2>
              {/* EDITABLE: CTA Section Description */}
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Professional, painless, and convenient heart health monitoring in the comfort of your home
              </p>
              
              {/* EDITABLE: CTA Buttons - MOBILE SPACING FIXED */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                {/* EDITABLE: Primary Booking Button */}
                <Link
                  to="/contact" /* EDITABLE: Booking page link */
                  className="bg-white text-[#2980B9] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-105 font-semibold text-base sm:text-lg w-full sm:w-auto text-center"
                >
                  Book ECG Test - ₹699 {/* EDITABLE: Button text and price */}
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