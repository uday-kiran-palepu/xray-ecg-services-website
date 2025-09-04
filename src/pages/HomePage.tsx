// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Hero } from '../components/Hero';
// import { AnimatedSection } from '../components/AnimatedSection';
// import { AnimatedCard } from '../components/AnimatedCard';
// import { OptimizedImage } from '../components/OptimizedImage';
// import { motion } from 'framer-motion';
// import { 
//   Home, Clock, Award, Users, FileCheck, Shield, 
//   Target, CheckCircle, ArrowRight, Activity, Zap, Heart 
// } from 'lucide-react';

// export const HomePage: React.FC = () => {
//   const whyChooseUs = [
//     { icon: Home, title: "First in Hyderabad", desc: "Pioneering at-home diagnostic services" },
//     { icon: Clock, title: "24/7 Service", desc: "Available round the clock for emergencies" },
//     { icon: Award, title: "15+ Years Experience", desc: "Trusted healthcare expertise" },
//     { icon: Users, title: "Expert Staff", desc: "Certified medical professionals" },
//     { icon: FileCheck, title: "Instant Reports", desc: "Digital reports within minutes" },
//     { icon: Shield, title: "100% Accurate", desc: "Precise diagnostic results" },
//     { icon: Target, title: "100% Safe", desc: "Stringent safety protocols" },
//     { icon: CheckCircle, title: "Certified Labs", desc: "ICMR, NABL & CAP accredited" }
//   ];

//   const services = [
//     {
//       id: 'abg',
//       title: 'ABG Test',
//       description: 'Arterial Blood Gas analysis for respiratory and metabolic assessment. Quick, accurate results for critical care decisions.',
//       image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg',
//       icon: Activity,
//       link: '/abg',
//       price: '₹899'
//     },
//     {
//       id: 'ecg',
//       title: 'ECG Test',
//       description: 'Electrocardiogram testing for heart health monitoring. Painless procedure perfect for elderly and immobile patients.',
//       image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg',
//       icon: Heart,
//       link: '/ecg',
//       price: '₹699'
//     },
//     {
//       id: 'xray',
//       title: 'X-Ray Services',
//       description: 'Portable digital X-Ray imaging for chest, bone, and joint examinations. Low-radiation safety standards.',
//       image: 'https://images.pexels.com/photos/4225922/pexels-photo-4225922.jpeg',
//       icon: Zap,
//       link: '/xray',
//       price: '₹1299'
//     }
//   ];

//   const howItWorks = [
//     {
//       step: 1,
//       title: "Book Online/Call",
//       description: "Schedule your test through our website, WhatsApp, or by calling us directly."
//     },
//     {
//       step: 2,
//       title: "Our Expert Visits",
//       description: "Certified medical professional arrives at your location with portable equipment."
//     },
//     {
//       step: 3,
//       title: "Instant Digital Reports",
//       description: "Receive accurate digital reports within minutes via email and WhatsApp."
//     }
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <Hero
//         title="Hyderabad's First At-Home ABG, ECG & X-Ray Services"
//         subtitle="Fast, accurate diagnostic reports delivered to your doorstep within minutes"
//         showTrustBadges={true}
//         backgroundImage="https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg"
//       />

//       {/* Why Choose Us Section */}
//       <section className="py-16 sm:py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection animation="fade-up">
//             <div className="text-center mb-12 sm:mb-16">
//               <motion.h2 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#34495E] mb-4"
//               >
//                 Why Choose Q Path Diagnostics?
//               </motion.h2>
//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
//               >
//                 Experience the convenience of professional healthcare services in the comfort of your home
//               </motion.p>
//             </div>
//           </AnimatedSection>

//           <AnimatedSection stagger={true} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//             {whyChooseUs.map((item, index) => (
//               <AnimatedCard
//                 key={item.title}
//                 icon={item.icon}
//                 title={item.title}
//                 description={item.desc}
//                 delay={index * 100}
//                 hoverEffect={index % 2 === 0 ? 'lift' : 'glow'}
//               />
//             ))}
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Services Overview */}
//       <section className="py-16 sm:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="text-center mb-12 sm:mb-16">
//               <motion.h2 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#34495E] mb-4"
//               >
//                 Our Diagnostic Services
//               </motion.h2>
//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
//               >
//                 Professional medical testing services brought directly to your home with state-of-the-art portable equipment
//               </motion.p>
//             </div>
//           </AnimatedSection>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
//             {services.map((service, index) => {
//               const IconComponent = service.icon;
//               return (
//                 <AnimatedSection
//                   key={service.id}
//                   delay={index * 200}
//                   animation="fade-up"
//                 >
//                   <motion.div
//                     whileHover={{ 
//                       y: -15,
//                       rotateY: 5,
//                       transition: { duration: 0.3 }
//                     }}
//                     className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full flex flex-col relative"
//                   >
//                     {/* Animated border */}
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-r from-[#1E8449] to-[#2980B9] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       style={{ padding: '2px' }}
//                     >
//                       <div className="w-full h-full bg-white rounded-2xl" />
//                     </motion.div>

//                     <div className="relative h-48 sm:h-64 overflow-hidden">
//                       <OptimizedImage
//                         src={service.image}
//                         alt={service.title}
//                         className="w-full h-full"
//                         width={400}
//                         height={256}
//                       />
                      
//                       <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileHover={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                         className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
//                       />
                      
//                       <motion.div 
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                         transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                         className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg"
//                       >
//                         <IconComponent className="w-6 h-6 text-[#1E8449]" />
//                       </motion.div>
                      
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileHover={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="absolute bottom-4 right-4 bg-[#1E8449] text-white px-3 py-1 rounded-full text-sm font-semibold"
//                       >
//                         {service.price}
//                       </motion.div>
//                     </div>
                    
//                     <div className="p-4 sm:p-6 flex-1 flex flex-col relative z-10">
//                       <h3 className="text-xl sm:text-2xl font-bold text-[#34495E] mb-3">{service.title}</h3>
//                       <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed flex-1">{service.description}</p>
                      
//                       <motion.div 
//                         whileHover={{ x: 5 }} 
//                         transition={{ duration: 0.2 }}
//                         className="relative overflow-hidden"
//                       >
//                         <Link
//                           to={service.link}
//                           className="inline-flex items-center space-x-2 text-[#1E8449] hover:text-[#1E8449]/80 font-semibold transition-colors group/link relative"
//                         >
//                           <motion.div
//                             className="absolute bottom-0 left-0 h-0.5 bg-[#1E8449]"
//                             initial={{ width: 0 }}
//                             whileHover={{ width: '100%' }}
//                             transition={{ duration: 0.3 }}
//                           />
//                           <span>Learn More</span>
//                           <motion.div
//                             animate={{ x: [0, 5, 0] }}
//                             transition={{ duration: 1.5, repeat: Infinity }}
//                           >
//                             <ArrowRight className="w-4 h-4" />
//                           </motion.div>
//                         </Link>
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 </AnimatedSection>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-16 sm:py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <div className="text-center mb-12 sm:mb-16">
//               <motion.h2 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#34495E] mb-4"
//               >
//                 How It Works
//               </motion.h2>
//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
//               >
//                 Simple 3-step process to get your diagnostic tests done at home
//               </motion.p>
//             </div>
//           </AnimatedSection>

//           <div className="relative">
//             {/* Desktop connecting line with animation */}
//             <motion.div 
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               transition={{ duration: 1.5, delay: 0.5 }}
//               className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#1E8449] to-[#2980B9] transform -translate-y-1/2 origin-left rounded-full"
//             />
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//               {howItWorks.map((step, index) => (
//                 <AnimatedSection
//                   key={step.step}
//                   delay={index * 300}
//                   animation="bounce-in"
//                   className="relative text-center"
//                 >
//                   <motion.div 
//                     whileHover={{ scale: 1.15, rotate: 5 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                     className="relative z-10 mb-6"
//                   >
//                     <motion.div 
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       transition={{ 
//                         type: "spring", 
//                         stiffness: 400, 
//                         damping: 10,
//                         delay: index * 0.2 
//                       }}
//                       className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1E8449] to-[#2980B9] rounded-full mx-auto flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg relative overflow-hidden"
//                     >
//                       {/* Animated ring */}
//                       <motion.div
//                         className="absolute inset-0 border-4 border-white/30 rounded-full"
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                       />
                      
//                       <motion.span
//                         animate={{ 
//                           scale: [1, 1.1, 1],
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Infinity,
//                           delay: index * 0.5
//                         }}
//                         className="relative z-10"
//                       >
//                         {step.step}
//                       </motion.span>
//                     </motion.div>
//                   </motion.div>
                  
//                   <motion.h3 
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
//                     className="text-xl sm:text-2xl font-bold text-[#34495E] mb-4"
//                   >
//                     {step.title}
//                   </motion.h3>
//                   <motion.p 
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
//                     className="text-sm sm:text-base text-gray-600 leading-relaxed"
//                   >
//                     {step.description}
//                   </motion.p>
//                 </AnimatedSection>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 sm:py-20 bg-gradient-to-r from-[#1E8449] to-[#2980B9] relative overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0">
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-24 h-24 border border-white/5 rounded-full"
//               initial={{
//                 x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
//                 y: Math.random() * 400,
//                 scale: Math.random() * 0.5 + 0.5,
//               }}
//               animate={{
//                 x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
//                 y: Math.random() * 400,
//                 rotate: 360,
//                 scale: [null, Math.random() * 0.5 + 1, Math.random() * 0.5 + 0.5]
//               }}
//               transition={{
//                 duration: Math.random() * 20 + 20,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <AnimatedSection animation="fade-up">
//             <motion.h2 
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6"
//             >
//               Ready to Get Your Test Done at Home?
//             </motion.h2>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto"
//             >
//               Join thousands of satisfied patients who trust Q Path Diagnostics for accurate, convenient healthcare services
//             </motion.p>
            
//             <motion.div 
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//             >
//               <motion.div
//                 whileHover={{ scale: 1.05, y: -3 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="relative overflow-hidden"
//               >
//                 <Link
//                   to="/contact"
//                   className="bg-white text-[#1E8449] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl font-semibold text-base sm:text-lg inline-block relative overflow-hidden group"
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-[#1E8449]/10 to-[#2980B9]/10"
//                     initial={{ x: '-100%' }}
//                     whileHover={{ x: '100%' }}
//                     transition={{ duration: 0.6 }}
//                   />
//                   <span className="relative z-10">
//                   Book Your Test Now
//                   </span>
//                 </Link>
//               </motion.div>
              
//               <motion.div
//                 whileHover={{ scale: 1.05, y: -3 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <a
//                   href="tel:+918712197228"
//                   className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-[#1E8449] transition-all duration-300 font-semibold text-base sm:text-lg inline-block"
//                 >
//                   Call: +91 87121 97228
//                 </a>
//               </motion.div>
//             </motion.div>
//           </AnimatedSection>
//         </div>
//       </section>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedCard } from '../components/AnimatedCard';
import { OptimizedImage } from '../components/OptimizedImage';
import { motion } from 'framer-motion';
import { 
  Home, Clock, Award, Users, FileCheck, Shield, 
  Target, CheckCircle, ArrowRight, Activity, Zap, Heart, 
  Phone, MessageSquare, FileText, Check 
} from 'lucide-react';

/* 
 * HOMEPAGE - MAIN LANDING PAGE
 * 
 * EDITABLE SECTIONS:
 * 1. Hero Section: title, subtitle, background image, CTA buttons
 * 2. Why Choose Us: whyChooseUs array with icons and descriptions
 * 3. Services Overview: services array with images, descriptions, prices
 * 4. How It Works: howItWorks array with 4-step process (updated)
 * 5. Testimonials: patient experiences
 * 6. Safety & Quality Assurance: quality metrics and protocols
 * 7. FAQs: common questions with toggle functionality
 * 8. Contact Information: phone numbers and links throughout
 */

export const HomePage: React.FC = () => {
  /* EDITABLE: Why Choose Us Section Data */
  const whyChooseUs = [
    { icon: Home, title: "First in Hyderabad", desc: "Pioneering at-home diagnostic services" },
    { icon: Clock, title: "24/7 Service", desc: "Available round the clock for emergencies" },
    { icon: Award, title: "15+ Years Experience", desc: "Trusted healthcare expertise" },
    { icon: Users, title: "Expert Staff", desc: "Certified medical professionals" },
    { icon: FileCheck, title: "Instant Reports", desc: "Digital reports within minutes" },
    { icon: Shield, title: "100% Accurate", desc: "Precise diagnostic results" },
    { icon: Target, title: "100% Safe", desc: "Stringent safety protocols" },
    { icon: CheckCircle, title: "Certified Labs", desc: "ICMR, NABL & CAP accredited" }
  ];

  /* EDITABLE: Services Overview Data */
  const services = [
    {
      id: 'abg',
      title: 'ABG Test',
      description: 'Arterial Blood Gas analysis for respiratory and metabolic assessment. Quick, accurate results for critical care decisions.',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg',
      icon: Activity,
      link: '/abg',
      price: '₹899'
    },
    {
      id: 'ecg',
      title: 'ECG Test',
      description: 'Electrocardiogram testing for heart health monitoring. Painless procedure perfect for elderly and immobile patients.',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg',
      icon: Heart,
      link: '/ecg',
      price: '₹699'
    },
    {
      id: 'xray',
      title: 'X-Ray Services',
      description: 'Portable digital X-Ray imaging for chest, bone, and joint examinations. Low-radiation safety standards.',
      image: 'https://images.pexels.com/photos/4225922/pexels-photo-4225922.jpeg',
      icon: Zap,
      link: '/xray',
      price: '₹1299'
    }
  ];

  /* EDITABLE: How It Works Process - Updated to 4-step process */
  const howItWorks = [
    {
      step: 1,
      title: "Book Your Test",
      description: "Choose your preferred booking method (phone, WhatsApp, online form) and get instant confirmation with technician assignment.",
      icon: Phone,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
      fallbackImage: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      details: [
        { method: "Phone Call", desc: "Speak directly with our team: +91 98765 43210", icon: Phone },
        { method: "WhatsApp", desc: "Quick messaging for instant booking", icon: MessageSquare },
        { method: "Online Form", desc: "Fill out our detailed booking form", icon: FileText }
      ]
    },
    {
      step: 2,
      title: "Prepare for Your Test",
      description: "Receive test-specific preparation guidelines and home setup instructions for a smooth experience.",
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
      fallbackImage: 'https://images.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg',
      details: [
        { method: "ABG Prep", desc: "No fasting, comfortable seating, avoid activity 30 mins prior", icon: Heart },
        { method: "ECG Prep", desc: "Loose clothing, flat surface for lying down", icon: Activity },
        { method: "X-Ray Prep", desc: "Remove jewelry, clear space for equipment", icon: Zap }
      ]
    },
    {
      step: 3,
      title: "Professional Testing",
      description: "Certified technicians arrive with hospital-grade equipment for accurate, safe testing in your home.",
      icon: Users,
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
      fallbackImage: 'https://images.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
      details: [
        { method: "Certified Staff", desc: "ICMR certified with 10+ years experience", icon: Award },
        { method: "Equipment", desc: "Portable devices matching hospital accuracy", icon: Shield },
        { method: "Safety", desc: "Full sanitization and safety protocols", icon: Check }
      ]
    },
    {
      step: 4,
      title: "Get Your Results",
      description: "Receive results via WhatsApp, email, or hard copy with interpretation support and follow-up consultation.",
      icon: FileCheck,
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
      fallbackImage: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      details: [
        { method: "WhatsApp", desc: "Instant PDF delivery", icon: MessageSquare },
        { method: "Email", desc: "Detailed report with notes", icon: FileText },
        { method: "Physical Copy", desc: "Hard copy on request", icon: FileText }
      ]
    }
  ];

  /* EDITABLE: Testimonials Data */
  const testimonials = [
    {
      name: "Ramesh Gupta",
      age: 72,
      location: "Banjara Hills",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
      fallbackImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: "From booking to results, everything was seamless. The technician explained each step of my ECG test, and I received results on WhatsApp within minutes.",
      test: "ECG Test",
      rating: "5 Star Experience"
    },
    {
      name: "Sunita Reddy",
      age: 58,
      location: "Jubilee Hills",
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
      fallbackImage: 'https://images.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
      quote: "Q Path's emergency service was a lifesaver. They arrived within 45 minutes for an ABG test, helping our doctor make immediate decisions.",
      test: "ABG Test",
      rating: "Life-Saving Care"
    }
  ];

  /* EDITABLE: Safety & Quality Assurance Data */
  const safetyQuality = [
    {
      icon: Shield,
      title: "Equipment Calibration",
      description: "Daily calibration and monthly certification to match hospital standards."
    },
    {
      icon: Users,
      title: "Staff Training",
      description: "Continuous training and certification updates for professional standards."
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Multi-level quality checks with automated validation and expert review."
    },
    {
      icon: Target,
      title: "Emergency Protocols",
      description: "Comprehensive procedures with direct hospital connections for complications."
    }
  ];

  /* EDITABLE: Quality Metrics */
  const qualityMetrics = [
    { label: "Test Accuracy Rate", value: "99.8%", color: "bg-qpath-green" },
    { label: "Patient Satisfaction", value: "98%", color: "bg-yellow-400" }, // Replaced #F1C40F with Tailwind's yellow-400
    { label: "On-Time Arrival", value: "96%", color: "bg-qpath-blue" },
    { label: "Equipment Reliability", value: "99.5%", color: "bg-green-400" } // Replaced #2ECC71 with Tailwind's green-400
  ];

  /* EDITABLE: FAQs Data */
  const faqs = [
    {
      question: "How accurate are home tests compared to hospital tests?",
      answer: "Our home tests maintain 99.8% accuracy, identical to hospital standards, using the same equipment and protocols."
    },
    {
      question: "What if I need emergency testing outside normal hours?",
      answer: "We offer 24/7 emergency testing. Call +91 98765 43210, and a technician will arrive within 45-60 minutes."
    },
    {
      question: "How do you ensure safety and hygiene during home visits?",
      answer: "Equipment is sanitized before/after use, and technicians follow strict hygiene protocols with single-use consumables."
    },
    {
      question: "Can I get a second opinion on my results?",
      answer: "Yes, we provide free consultations and can connect you with specialists or provide raw data for analysis."
    },
    {
      question: "What happens if the technician can't complete the test?",
      answer: "No charge for incomplete tests. We reschedule or arrange testing at partner facilities."
    }
  ];

  /* State for FAQ toggle */
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Hero
        title="Hyderabad's First At-Home ABG, ECG & X-Ray Services"
        subtitle="Fast, accurate diagnostic reports delivered to your doorstep within minutes"
        showTrustBadges={true}
        backgroundImage="https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg"
      />

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-qpath-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-qpath-text mb-4"
              >
                Why Choose Q Path Diagnostics?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Experience the convenience of professional healthcare services in the comfort of your home
              </motion.p>
            </div>
          </AnimatedSection>
          <AnimatedSection stagger={true} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseUs.map((item, index) => (
              <AnimatedCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.desc}
                delay={index * 100}
                hoverEffect={index % 2 === 0 ? 'lift' : 'glow'}
              />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-qpath-text mb-4"
              >
                Our Diagnostic Services
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Professional medical testing services brought directly to your home with state-of-the-art portable equipment
              </motion.p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <AnimatedSection
                  key={service.id}
                  delay={index * 200}
                  animation="fade-up"
                >
                  <motion.div
                    whileHover={{ y: -15, rotateY: 5 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full flex flex-col relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-qpath-green to-qpath-blue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ padding: '2px' }}
                    >
                      <div className="w-full h-full bg-white rounded-2xl" />
                    </motion.div>
                    <div className="relative h-48 sm:h-64 overflow-hidden">
                      <OptimizedImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full"
                        width={400}
                        height={256}
                      />
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      />
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg"
                      >
                        <IconComponent className="w-6 h-6 text-qpath-green" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-4 right-4 bg-qpath-green text-white px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {service.price}
                      </motion.div>
                    </div>
                    <div className="p-4 sm:p-6 flex-1 flex flex-col relative z-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-qpath-text mb-3">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed flex-1">{service.description}</p>
                      <motion.div 
                        whileHover={{ x: 5 }} 
                        transition={{ duration: 0.2 }}
                        className="relative overflow-hidden"
                      >
                        <Link
                          to={service.link}
                          className="inline-flex items-center space-x-2 text-qpath-green hover:text-qpath-green/80 font-semibold transition-colors group/link relative"
                        >
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-qpath-green"
                            initial={{ width: '0%' }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                          <span>Learn More</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Our Home Testing Process Works Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-qpath-green/10 to-qpath-blue/10 relative">
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Simple • Transparent • Professional
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-qpath-text mb-6 leading-tight"
              >
                How Our <span className="bg-gradient-to-r from-qpath-green to-qpath-blue text-transparent bg-clip-text">Home Testing</span> Process Works
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                From booking to results, our 4-step process brings hospital-grade medical testing to your doorstep with complete transparency and care.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-8 mt-8"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-qpath-green mb-1">15 min</div>
                  <div className="text-sm text-gray-600">Average Booking Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-qpath-green mb-1">30 min</div>
                  <div className="text-sm text-gray-600">Testing Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-qpath-green mb-1">2 hrs</div>
                  <div className="text-sm text-gray-600">Results Delivery</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-qpath-green to-qpath-blue text-white px-6 py-3 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  Start Your Test Journey
                </Link>
                <Link
                  to="#process-steps"
                  className="border-2 border-qpath-green text-qpath-green px-6 py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-qpath-green/10 transition-all duration-300"
                >
                  See The Process
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps Section */}
      <section id="process-steps" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-qpath-text mb-4"
              >
                Our 4-Step Process
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Every step designed for your comfort, safety, and peace of mind
              </motion.p>
            </div>
          </AnimatedSection>
          <div className="space-y-16">
            {howItWorks.map((step, index) => {
              const IconComponent = step.icon;
              const isReverse = index % 2 === 1; // Alternate layout for visual appeal
              return (
                <AnimatedSection
                  key={step.step}
                  delay={index * 200}
                  animation="fade-up"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="order-2 lg:order-none"
                    >
                      <div className="flex items-center mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 bg-qpath-green rounded-full flex items-center justify-center mr-4"
                        >
                          <span className="text-xl font-bold text-white">{step.step}</span>
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-qpath-text">{step.title}</h3>
                      </div>
                      <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                      <div className="space-y-4 mb-8">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center p-4 bg-qpath-bg rounded-lg">
                            <div className="w-10 h-10 bg-qpath-green/10 rounded-full flex items-center justify-center mr-4">
                              <detail.icon className="w-5 h-5 text-qpath-green" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-qpath-text">{detail.method}</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">{detail.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-qpath-green/10 p-4 rounded-lg"
                      >
                        <div className="flex items-center mb-2">
                          <CheckCircle className="w-5 h-5 text-qpath-green mr-2" />
                          <span className="font-semibold text-qpath-green">
                            {step.step === 1 ? "What Happens Next?" : step.step === 2 ? "Pre-Visit Call" : step.step === 3 ? "Quality Guarantee" : "Follow-up Support"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.step === 1
                            ? "Immediate confirmation with technician details and estimated arrival time."
                            : step.step === 2
                            ? "Technician calls 30 minutes before arrival to confirm preparation."
                            : step.step === 3
                            ? "99.8% accuracy with full quality assurance and repeat testing if needed."
                            : "Free consultation to explain results and recommend next steps."}
                        </p>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="order-1 lg:order-none"
                    >
                      <div className="relative">
                        <OptimizedImage
                          src={step.image}
                          alt={step.title}
                          className="rounded-2xl shadow-lg w-full h-64 sm:h-80 object-cover"
                          width={600}
                          height={400}
                          fallback={step.fallbackImage}
                        />
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6 }}
                          className={`absolute ${isReverse ? '-top-4 -left-4' : '-bottom-4 -right-4'} bg-white rounded-xl p-4 shadow-lg`}
                        >
                          <div className="text-2xl font-bold text-qpath-green">
                            {step.step === 1 ? "24/7" : step.step === 2 ? "Zero" : step.step === 3 ? "99.8%" : "Digital"}
                          </div>
                          <div className="text-sm text-gray-600">
                            {step.step === 1 ? "Booking Available" : step.step === 2 ? "Preparation Stress" : step.step === 3 ? "Accuracy Rate" : "Results Delivery"}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-qpath-text mb-4"
              >
                Real Patient Experiences
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed"
              >
                See how our process works in real life
              </motion.p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.name}
                delay={index * 200}
                animation="fade-up"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <OptimizedImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      width={48}
                      height={48}
                      fallback={testimonial.fallbackImage}
                    />
                    <div>
                      <h4 className="font-semibold text-qpath-text">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Age {testimonial.age}, {testimonial.location}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="bg-qpath-green/10 text-qpath-green px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.test} Experience
                    </span>
                  </div>
                  <p className="text-gray-600 italic mb-4 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center text-sm text-green-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>{testimonial.test} • {testimonial.rating}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Quality Assurance Section */}
      <section className="py-16 sm:py-20 bg-qpath-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-qpath-text mb-4"
              >
                Safety & Quality Assurance
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed"
              >
                Hospital-grade standards maintained in home environments
              </motion.p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <AnimatedSection stagger={true}>
              <div className="space-y-6">
                {safetyQuality.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 bg-qpath-green/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-qpath-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-qpath-text mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up">
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-qpath-text mb-6 text-center">Quality Metrics</h3>
                <div className="space-y-4">
                  {qualityMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-600">{metric.label}</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                          <motion.div
                            className={`${metric.color} h-2 rounded-full`}
                            initial={{ width: '0%' }}
                            whileInView={{ width: metric.value }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                          />
                        </div>
                        <span className={`font-semibold ${metric.color.replace('bg-', 'text-')}`}>
                          {metric.value}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-6 p-4 bg-qpath-green/10 rounded-lg"
                >
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-qpath-green mr-2" />
                    <span className="font-semibold text-qpath-green">Quality Guarantee</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    If you're not satisfied with any aspect of our service, we'll repeat the test at no additional cost.
                  </p>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-qpath-text mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed"
              >
                Common concerns about our home testing process
              </motion.p>
            </div>
          </AnimatedSection>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection
                key={faq.question}
                delay={index * 100}
                animation="fade-up"
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-lg p-6"
                  whileHover={{ y: -5 }}
                >
                  <button
                    className="w-full text-left flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-qpath-text">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5 text-gray-600" />
                    </motion.div>
                  </button>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-600 leading-relaxed"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-qpath-green to-qpath-blue relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 border border-white/5 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * 400,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * 400,
                rotate: 360,
                scale: [null, Math.random() * 0.5 + 1, Math.random() * 0.5 + 0.5]
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection animation="fade-up">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Get Your Test Done at Home?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Join thousands of satisfied patients who trust Q Path Diagnostics for accurate, convenient healthcare services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden"
              >
                <Link
                  to="/contact"
                  className="bg-white text-qpath-text px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-fit w-auto"
                >
                  <span className="relative z-10">Book Your Test Now</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="tel:+919876543210"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-qpath-text transition-all duration-300 font-semibold text-base sm:text-lg min-w-fit w-auto text-center"
                >
                  Call: +91 98765 43210
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 text-sm text-white/90"
            >
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>ICMR & NABL Certified</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>99.8% Accuracy Rate</span>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};