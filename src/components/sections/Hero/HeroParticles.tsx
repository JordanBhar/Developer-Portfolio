import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface TechTag {
  name: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
}

const HeroParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const techTags: TechTag[] = [
    { name: 'AWS', top: '15%', left: '10%', delay: 0, duration: 8 },
    { name: 'Azure', top: '25%', left: '85%', delay: 1, duration: 10 },
    { name: 'Kubernetes', top: '60%', left: '15%', delay: 0.5, duration: 9 },
    { name: 'Docker', top: '70%', left: '80%', delay: 1.5, duration: 11 },
    { name: 'React', top: '45%', left: '70%', delay: 0.8, duration: 10 },
    { name: 'SwiftUI', top: '35%', left: '25%', delay: 1.2, duration: 9 },
    { name: 'AI/ML', top: '80%', left: '50%', delay: 0.3, duration: 12 },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const tags = containerRef.current.querySelectorAll('[data-tech]');

    tags.forEach((tag, index) => {
      const techTag = techTags[index];

      // Floating animation
      gsap.to(tag, {
        y: -30,
        duration: techTag.duration / 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: techTag.delay,
      });

      // Opacity pulse
      gsap.timeline({ repeat: -1, delay: techTag.delay })
        .to(tag, { opacity: 0.8, duration: techTag.duration / 3, ease: 'sine.inOut' })
        .to(tag, { opacity: 0.3, duration: techTag.duration / 3, ease: 'sine.inOut' });
        
    });

    return () => {
      gsap.killTweensOf(tags);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {techTags.map((tag, index) => (
        <motion.div
          key={tag.name}
          data-tech={tag.name}
          className="absolute px-4 py-2 rounded-full border border-accent-teal/30 backdrop-blur-sm bg-accent-teal/5 text-xs font-mono text-accent-teal whitespace-nowrap"
          style={{
            top: tag.top,
            left: tag.left,
            opacity: 0.5,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: tag.delay, duration: 1 }}
        >
          {tag.name}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroParticles;
