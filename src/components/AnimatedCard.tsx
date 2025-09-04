import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AnimatedCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  gradient?: string;
  hoverEffect?: 'lift' | 'glow' | 'rotate' | 'scale';
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  gradient = 'from-[#1E8449] to-[#2980B9]',
  hoverEffect = 'lift'
}) => {
  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case 'lift':
        return { y: -8, transition: { duration: 0.3 } };
      case 'glow':
        return { boxShadow: '0 20px 40px rgba(30, 132, 73, 0.3)', transition: { duration: 0.3 } };
      case 'rotate':
        return { rotate: 2, scale: 1.02, transition: { duration: 0.3 } };
      case 'scale':
        return { scale: 1.05, transition: { duration: 0.3 } };
      default:
        return { y: -8, transition: { duration: 0.3 } };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      whileHover={getHoverAnimation()}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group cursor-pointer"
    >
      <motion.div 
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      
      <motion.h3 
        className="text-lg font-semibold text-[#34495E] mb-2 group-hover:text-[#1E8449] transition-colors duration-300"
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

