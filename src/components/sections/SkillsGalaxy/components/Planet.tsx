import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Skill } from '@/types';
import {
  calculateOrbitPosition,
  proficiencyToSize,
  experienceToGlow,
} from '../utils/galaxyMath';

interface PlanetProps {
  skill: Skill;
  galaxyCenter: { x: number; y: number; z: number };
  orbitRadius: number;
  speed: number;
  initialAngle: number;
  color: string;
  onHover: (skill: Skill | null) => void;
}

export const Planet = ({
  skill,
  galaxyCenter,
  orbitRadius,
  speed,
  initialAngle,
  color,
  onHover,
}: PlanetProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointRef = useRef<THREE.Points>(null);
  const [hovered, setHovered] = useState(false);
  const angleRef = useRef(initialAngle);

  useFrame(() => {
    angleRef.current += speed;

    const pos = calculateOrbitPosition(
      galaxyCenter.x,
      galaxyCenter.y,
      galaxyCenter.z,
      orbitRadius,
      angleRef.current
    );

    if (meshRef.current) {
      meshRef.current.position.set(pos.x, pos.y, pos.z);
      // Subtle rotation
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  const size = proficiencyToSize(skill.proficiency);
  const glowIntensity = experienceToGlow(skill.experience);
  const nodeSize = size * 0.7; // Enlarged from 0.4 to 0.7

  return (
    <group>
      <mesh
        ref={meshRef}
        onPointerEnter={() => {
          setHovered(true);
          onHover(skill);
        }}
        onPointerLeave={() => {
          setHovered(false);
          onHover(null);
        }}
      >
        <Sphere args={[nodeSize, 32, 32]}>
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={glowIntensity * (hovered ? 2 : 0.8)}
            metalness={0.7}
            roughness={0.3}
            wireframe={false}
          />
        </Sphere>

        {/* Outer glow ring */}
        <Sphere args={[nodeSize * 1.2, 32, 32]}>
          <meshBasicMaterial
            color={color}
            transparent
            opacity={glowIntensity * (hovered ? 0.5 : 0.2)}
          />
        </Sphere>

        {/* Inner core highlight */}
        <Sphere args={[nodeSize * 0.4, 16, 16]}>
          <meshBasicMaterial color="white" transparent opacity={hovered ? 0.6 : 0.3} />
        </Sphere>

        {/* Skill name label - Always visible */}
        <Html position={[0, nodeSize * 1.5, 0]} distanceFactor={1} occlude={false}>
          <div className="text-center pointer-events-none">
            <div className={`font-mono font-bold transition-all duration-200 whitespace-nowrap ${
              hovered
                ? 'text-sm text-white drop-shadow-lg'
                : 'text-xs text-gray-200'
            }`}>
              {skill.name}
            </div>
          </div>
        </Html>

        {/* Enhanced tooltip on hover */}
        {hovered && (
          <Html
            position={[0, nodeSize * 2.5, 0]}
            distanceFactor={1}
            occlude={false}
          >
            <div className="bg-gradient-to-br from-dark-primary to-dark-secondary border border-accent-cyan/60 rounded-lg px-4 py-3 text-white whitespace-nowrap backdrop-blur-md shadow-2xl">
              <div className="font-mono font-bold text-base text-accent-teal mb-2">
                {skill.name}
              </div>
              <div className="space-y-1 text-sm text-text-secondary">
                <div>
                  <span className="text-accent-cyan font-semibold">Experience:</span> {skill.experience}
                  {skill.experience === 1 ? ' year' : ' years'}
                </div>
                <div>
                  <span className="text-accent-cyan font-semibold">Level:</span>{' '}
                  <span className="capitalize bg-accent-cyan/20 px-2 py-1 rounded text-xs">
                    {skill.proficiency}
                  </span>
                </div>
                <div className="text-xs text-text-muted mt-2 italic">
                  {skill.category === 'mobile' && '📱 Mobile Development'}
                  {skill.category === 'frontend' && '💻 Frontend Development'}
                  {skill.category === 'backend' && '⚙️ Backend Systems'}
                  {skill.category === 'cloud' && '☁️ Cloud & DevOps'}
                  {skill.category === 'ai' && '🤖 AI & Machine Learning'}
                </div>
              </div>
            </div>
          </Html>
        )}
      </mesh>
    </group>
  );
};
