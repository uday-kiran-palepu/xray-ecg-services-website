import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up' | 'bounce-in' | 'rotate-in' | 'flip-in' | 'zoom-in';
  delay?: number;
  duration?: number;
  stagger?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  stagger = false
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: {},
      visible: stagger ? {
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay / 1000
        }
      } : {}
    };

    switch (animation) {
      case 'fade-up':
        baseVariants.hidden = { opacity: 0, y: 50 };
        baseVariants.visible = { ...baseVariants.visible, opacity: 1, y: 0 };
        break;
      case 'fade-in':
        baseVariants.hidden = { opacity: 0 };
        baseVariants.visible = { ...baseVariants.visible, opacity: 1 };
        break;
      case 'slide-left':
        baseVariants.hidden = { opacity: 0, x: -50 };
        baseVariants.visible = { ...baseVariants.visible, opacity: 1, x: 0 };
        break;
      case 'slide-right':
        baseVariants.hidden = { opacity: 0, x: 50 };
        baseVariants.visible = { ...baseVariants.visible, opacity: 1, x: 0 };
        break;
      case 'scale-up':
        baseVariants.hidden = { opacity: 0, scale: 0.8 };
        baseVariants.visible = { ...baseVariants.visible, opacity: 1, scale: 1 };
        break;
      case 'bounce-in':
        baseVariants.hidden = { opacity: 0, scale: 0.3 };
        baseVariants.visible = { 
          ...baseVariants.visible,
          opacity: 1, 
          scale: 1,
          transition: {
            ...baseVariants.visible.transition,
            type: "spring",
            stiffness: 400,
            damping: 10
          }
        };
        break;
      case 'rotate-in':
        baseVariants.hidden = { opacity: 0, rotate: -180, scale: 0.5 };
        baseVariants.visible = { ...baseVariants.visible, opacity: 1, rotate: 0, scale: 1 };
        break;
      case 'flip-in':
        baseVariants.hidden = { opacity: 0, rotateY: -90 };
        baseVariants.visible = { ...baseVariants.visible, opacity: 1, rotateY: 0 };
        break;
      case 'zoom-in':
        baseVariants.hidden = { opacity: 0, scale: 0 };
        baseVariants.visible = { ...baseVariants.visible, opacity: 1, scale: 1 };
        break;
      default:
        baseVariants.hidden = { opacity: 0, y: 50 };
        baseVariants.visible = { ...baseVariants.visible, opacity: 1, y: 0 };
    }

    return baseVariants;
  };

  const childVariants = stagger ? {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  } : {};

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={getAnimationVariants()}
      transition={{ 
        duration,
        delay: stagger ? 0 : delay / 1000,
        ease: "easeOut"
      }}
      className={className}
    >
      {stagger ? (
        React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={childVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  );
};