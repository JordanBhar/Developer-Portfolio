import { forwardRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';
import gsap from 'gsap';

interface HeroButtonsProps {
  onViewProjects: () => void;
  onDownloadResume: () => void;
  onContactMe: () => void;
}

const HeroButtons = forwardRef<HTMLDivElement, HeroButtonsProps>(
  ({ onViewProjects, onDownloadResume, onContactMe }, ref) => {
    useEffect(() => {
      // Subtle glow pulse on buttons
      const buttons = document.querySelectorAll('[data-hero-button]');

      buttons.forEach((button, index) => {
        gsap.timeline({ repeat: -1 }).to(
          button,
          {
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.5)',
            duration: 1.5,
            ease: 'sine.inOut',
          },
          0
        ).to(
          button,
          {
            boxShadow: '0 0 0px rgba(20, 184, 166, 0)',
            duration: 1.5,
            ease: 'sine.inOut',
          }
        );
      });
    }, []);

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    };

    const buttonVariants = {
      hidden: {
        opacity: 0,
        y: 30,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
        },
      },
      hover: {
        scale: 1.05,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 30,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        className="flex flex-wrap gap-4 justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={buttonVariants} whileHover="hover">
          <Button
            variant="primary"
            size="lg"
            onClick={onViewProjects}
            className="bg-gradient-to-r from-accent-teal to-accent-cyan hover:shadow-xl hover:shadow-teal-500/50 transition-all duration-300"
            data-hero-button="true"
          >
            View Projects
          </Button>
        </motion.div>

        <motion.div variants={buttonVariants} whileHover="hover">
          <Button
            variant="secondary"
            size="lg"
            onClick={onDownloadResume}
            className="border-accent-teal/50 hover:border-accent-teal hover:bg-accent-teal/15 transition-all duration-300"
            data-hero-button="true"
          >
            Download Resume
          </Button>
        </motion.div>

        <motion.div variants={buttonVariants} whileHover="hover">
          <Button
            variant="ghost"
            size="lg"
            onClick={onContactMe}
            className="text-accent-teal hover:text-accent-cyan hover:bg-accent-teal/15 transition-all duration-300"
            data-hero-button="true"
          >
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    );
  }
);

HeroButtons.displayName = 'HeroButtons';

export default HeroButtons;
