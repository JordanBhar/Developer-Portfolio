import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroContent from './HeroContent';
import HeroButtons from './HeroButtons';
import HeroParticles from './HeroParticles';
import { ShaderAnimation } from '../../ui/ShaderAnimation';
import { ScrollController } from '../../common/ScrollController';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollControllerRef = useRef<ScrollController | null>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);

  // === BUTTON HANDLERS ===
  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jordan_Bhar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // === SCROLL ANIMATIONS ===
  useEffect(() => {
    scrollControllerRef.current = new ScrollController();

    const aboutSection = document.getElementById('about');

    // Set initial opacity for about section
    if (aboutSection) {
      aboutSection.style.opacity = '0';
    }

    // Initialize scroll animations after a brief delay to ensure DOM is ready
    const timer = setTimeout(() => {
      scrollControllerRef.current?.initializeScrollAnimations(
        sectionRef.current,
        headlineRef.current,
        subheadlineRef.current,
        buttonsRef.current,
        backgroundRef.current,
        aboutSection
      );
    }, 100);

    return () => {
      clearTimeout(timer);
      scrollControllerRef.current?.cleanup();
    };
  }, []);

  //
  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-primary"
    >
      

      {/* Circular Shader Animation Behind Text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: -2 }}
      >
        <div className="absolute w-[800px] h-[800px] md:w-[1000px] md:h-[1000px]">
          <ShaderAnimation />
        </div>
      </div>

      {/* Overlay Gradient - More prominent for contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-dark-primary/40 via-dark-primary/50 to-dark-primary/80"
        style={{ zIndex: -7 }}
      />

      {/* Parallax Tech Tags Layer */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <HeroParticles />
      </div>

      {/* Scroll Indicator - Animated */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ zIndex: 20 }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-accent-teal/60 rounded-full flex items-center justify-center">
          <motion.div
            className="w-1 h-2 bg-gradient-to-b from-accent-teal to-accent-cyan rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Content with Scroll Animations */}
        <HeroContent ref={contentRef} headlineRef={headlineRef} subheadlineRef={subheadlineRef} />

        {/* Buttons with Scroll Animations */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <HeroButtons
            ref={buttonsRef}
            onViewProjects={handleViewProjects}
            onDownloadResume={handleDownloadResume}
            onContactMe={handleContactMe}
          />
        </motion.div>
      </div>

      {/* Floating Glow Effects */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-accent-teal/5 blur-3xl pointer-events-none -z-5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none -z-5"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </section>
  );
};

export default HeroSection;
