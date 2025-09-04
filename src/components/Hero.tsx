// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
// import { motion } from 'framer-motion';

// interface HeroProps {
//   title: string;
//   subtitle: string;
//   ctaText?: string;
//   ctaLink?: string;
//   backgroundImage?: string;
//   showTrustBadges?: boolean;
//   isServicePage?: boolean;
// }

// export const Hero: React.FC<HeroProps> = ({
//   title,
//   subtitle,
//   ctaText = "Book a Test Now",
//   ctaLink = "/contact",
//   backgroundImage = "https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg",
//   showTrustBadges = false,
//   isServicePage = false
// }) => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     },
//     hover: {
//       scale: 1.05,
//       transition: {
//         duration: 0.2,
//         ease: "easeInOut"
//       }
//     },
//     tap: {
//       scale: 0.95
//     }
//   };

//   return (
//     <section className={`relative ${isServicePage ? 'h-[70vh]' : 'h-screen'} flex items-center justify-center overflow-hidden`}>
//       {/* Background with parallax effect */}
//       <motion.div 
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"
//         />
//       </motion.div>

//       {/* Floating particles animation */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-white/20 rounded-full"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: window.innerHeight + 100,
//             }}
//             animate={{
//               y: -100,
//               x: Math.random() * window.innerWidth,
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               ease: "linear",
//               delay: Math.random() * 5,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="max-w-4xl mx-auto space-y-8"
//         >
//           <motion.h1 
//             variants={itemVariants}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
//           >
//             {title}
//           </motion.h1>
          
//           <motion.p 
//             variants={itemVariants}
//             className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
//           >
//             {subtitle}
//           </motion.p>

//           <motion.div 
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
//               <Link
//                 to={ctaLink}
//                 className="bg-gradient-to-r from-[#1E8449] to-[#2980B9] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <span>{ctaText}</span>
//                 <motion.div
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <ArrowRight className="w-5 h-5" />
//                 </motion.div>
//               </Link>
//             </motion.div>
            
//             <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
//               <a
//                 href="tel:+918712197228"
//                 className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#34495E] transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
//               >
//                 Call Now: +91 87121 97228
//               </a>
//             </motion.div>
//           </motion.div>

//           {showTrustBadges && (
//             <motion.div 
//               variants={itemVariants}
//               className="flex flex-wrap justify-center items-center gap-4 mt-12"
//             >
//               {[
//                 { icon: Shield, text: "ICMR Certified", color: "#1E8449" },
//                 { icon: Shield, text: "NABL Certified", color: "#2980B9" },
//                 { icon: Clock, text: "24/7 Service", color: "#1E8449" },
//                 { icon: Users, text: "15+ Years Experience", color: "#2980B9" }
//               ].map((badge, index) => (
//                 <motion.div
//                   key={badge.text}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30"
//                 >
//                   <badge.icon className="w-5 h-5" style={{ color: badge.color }} />
//                   <span className="text-white font-medium text-sm">{badge.text}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface HeroProps {
  title: string;
  subtitle: string;
  showTrustBadges: boolean;
  backgroundImage: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  showTrustBadges,
  backgroundImage
}) => {
  return (
    <section className="relative bg-qpath-text py-16 sm:py-24 lg:py-32 overflow-hidden font-sans">
      <div className="absolute inset-0">
        <OptimizedImage
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-qpath-green/80 to-qpath-blue/80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          <Link
            to="/contact"
            className="bg-white text-qpath-text px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Book Your Test
          </Link>
          <Link
            to="/abg"
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-qpath-text transition-all"
          >
            Learn More
          </Link>
        </motion.div>
        {showTrustBadges && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white leading-relaxed"
          >
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>ICMR Certified</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>99.8% Accuracy</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};