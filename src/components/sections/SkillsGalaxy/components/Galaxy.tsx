import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Skill } from '@/types';
import {
  generateGalaxyStars,
  generateGalaxyCore,
  getCategoryColor,
  positionGalaxy,
} from '../utils/galaxyMath';
import { Planet } from './Planet';

interface GalaxyProps {
  category: Skill['category'];
  skills: Skill[];
  categoryIndex: number;
  totalCategories: number;
  onHover: (skill: Skill | null) => void;
}

const categoryNames: Record<string, string> = {
  mobile: '📱 Mobile Development',
  frontend: '💻 Frontend',
  backend: '⚙️ Backend',
  cloud: '☁️ Cloud & DevOps',
  ai: '🤖 AI & ML',
};

const categoryEmojis: Record<string, string> = {
  mobile: '📱',
  frontend: '💻',
  backend: '⚙️',
  cloud: '☁️',
  ai: '🤖',
};

export const Galaxy = ({
  category,
  skills,
  categoryIndex,
  totalCategories,
  onHover,
}: GalaxyProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const starsRef = useRef<THREE.Points>(null);
  const coreRef = useRef<THREE.Points>(null);

  const galaxyCenter = useMemo(
    () => positionGalaxy(categoryIndex, totalCategories),
    [categoryIndex, totalCategories]
  );

  // Generate static star field
  const { starPositions, starColors } = useMemo(() => {
    const { positions, colors } = generateGalaxyStars(
      800,
      galaxyCenter.x,
      galaxyCenter.y,
      galaxyCenter.z,
      8
    );
    return { starPositions: positions, starColors: colors };
  }, [galaxyCenter]);

  // Generate galaxy core
  const { corePositions, coreColors } = useMemo(() => {
    const { positions, colors } = generateGalaxyCore(
      200,
      galaxyCenter.x,
      galaxyCenter.y,
      galaxyCenter.z,
      3
    );
    return { corePositions: positions, coreColors: colors };
  }, [galaxyCenter]);

  // No auto-rotation - user controls camera instead
  // This keeps the view stable and recruiter-friendly

  const categoryColor = getCategoryColor(category);

  return (
    <group ref={groupRef}>
      {/* Category label */}
      <Html
        position={[galaxyCenter.x, galaxyCenter.y - 12, galaxyCenter.z]}
        distanceFactor={1}
        occlude={false}
      >
        <div className="text-center">
          <div className="text-3xl font-mono font-bold text-white drop-shadow-lg mb-1">
            {categoryNames[category]}
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent mx-auto" />
        </div>
      </Html>

      {/* Star field */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={starPositions.length / 3}
            array={starPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={starColors.length / 3}
            array={starColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.15} vertexColors sizeAttenuation transparent />
      </points>

      {/* Glowing core */}
      <points ref={coreRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={corePositions.length / 3}
            array={corePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={coreColors.length / 3}
            array={coreColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.3}
          vertexColors
          sizeAttenuation
          transparent
        />
      </points>

      {/* Skills as orbiting planets - organized in clusters */}
      {skills
        .sort((a, b) => {
          // Sort by proficiency level (expert first) and then by experience
          const proficiencyOrder = { expert: 0, advanced: 1, intermediate: 2, beginner: 3 };
          const aPrio = proficiencyOrder[a.proficiency] || 4;
          const bPrio = proficiencyOrder[b.proficiency] || 4;
          if (aPrio !== bPrio) return aPrio - bPrio;
          return b.experience - a.experience;
        })
        .map((skill, index) => {
          // Organize into orbital rings by proficiency
          const proficiencyOrder = { expert: 0, advanced: 1, intermediate: 2, beginner: 3 };
          const ring = proficiencyOrder[skill.proficiency] || 3;

          // Base radius for each ring
          const baseRadius = 6 + ring * 2.5;
          // Number of skills in this ring (approximate)
          const skillsInRing = skills.filter(
            (s) => proficiencyOrder[s.proficiency] === ring
          ).length;
          const ringIndex = skills
            .filter((s) => proficiencyOrder[s.proficiency] === ring)
            .indexOf(skill);

          return (
            <Planet
              key={skill.id}
              skill={skill}
              galaxyCenter={galaxyCenter}
              orbitRadius={baseRadius}
              speed={0.0015 + ring * 0.0005}
              initialAngle={(ringIndex / Math.max(1, skillsInRing)) * Math.PI * 2}
              color={categoryColor}
              onHover={onHover}
            />
          );
        })}
    </group>
  );
};
