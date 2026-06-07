import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Logo_Path } from '../../../constants/app';

interface HeroContentProps {
  headlineRef?: React.RefObject<HTMLHeadingElement>;
  subheadlineRef?: React.RefObject<HTMLParagraphElement>;
}

const HeroContent = forwardRef<HTMLDivElement, HeroContentProps>(
  ({ headlineRef, subheadlineRef }, ref) => {
    const headlineVariants = {
      hidden: {
        opacity: 0,
        y: 40,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      },
    };

    const subheadlineVariants = {
      hidden: {
        opacity: 0,
        y: 30,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
          delay: 0.2,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        initial="hidden"
        animate="visible"
      >
        

        {/* Headline */}
        <motion.h1
          ref={headlineRef}
          variants={headlineVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono text-white leading-tight tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #22d3ee 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          <img
            src={Logo_Path}
            alt="Logo"
            className="w-60 h-60 mb-8 mx-auto"
          />
          Building Scalable Software, Cloud Infrastructure, and Intelligent Systems.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          ref={subheadlineRef}
          variants={subheadlineVariants}
          className="text-lg md:text-xl text-text-secondary mb-16 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Software Engineer specializing in Mobile Development, Cloud Engineering, AI
          Infrastructure, and Full Stack Systems.
        </motion.p>
        
      </motion.div>
    );
  }
);

HeroContent.displayName = 'HeroContent';

export default HeroContent;
