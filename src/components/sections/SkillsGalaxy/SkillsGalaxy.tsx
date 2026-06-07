import { useState } from 'react';
import { Skill } from '@/types';
import { UniverseCanvas } from './components/UniverseCanvas';

const SkillsGalaxy = () => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="relative min-h-screen bg-dark-primary overflow-hidden" style={{ opacity: 0 }}>
      {/* Title Section - Outside Canvas */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 pb-8">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-accent-teal mb-3">
          Skills_Galaxy
        </h2>
      </div>

      {/* Canvas Container - Full remaining height */}
      <div className="relative h-[calc(100vh-200px)] z-10 m-28 bg-gradient-to-b from-dark-primary via-dark-primary to-dark-secondary rounded-lg border-4 border-border-dark/30">
        <UniverseCanvas onHover={setHoveredSkill} />
      </div>

      {/* Skill Info Panel - Floats above canvas */}
      {hoveredSkill && (
        <div className="absolute bottom-32 left-32 z-30 pointer-events-auto">
          <div className="bg-gradient-to-br from-dark-primary/95 to-dark-secondary/95 border border-accent-cyan/50 rounded-lg p-6 backdrop-blur-md shadow-2xl max-w-sm">
            <h3 className="text-xl font-mono text-accent-teal mb-3 text-center">
              {hoveredSkill.name}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Experience</span>
                <span className="text-accent-cyan font-semibold">
                  {hoveredSkill.experience}
                  {hoveredSkill.experience === 1 ? ' year' : ' years'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted mr-2">Proficiency</span>
                <span className="text-accent-teal font-semibold capitalize bg-accent-teal/20 px-3 py-1 rounded">
                  {hoveredSkill.proficiency}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Category</span>
                <span className="text-accent-purple font-semibold capitalize">
                  {hoveredSkill.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsGalaxy;
