import * as THREE from 'three';

export interface GalaxyPosition {
  x: number;
  y: number;
  z: number;
}

export interface PlanetOrbit {
  angle: number;
  radius: number;
  speed: number;
}

// Generate positions for a spiral galaxy
export const generateGalaxyStars = (
  count: number,
  centerX: number,
  centerY: number,
  centerZ: number,
  scale: number = 1
): { positions: Float32Array; colors: Float32Array } => {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    // Spiral galaxy shape
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * scale * 15;
    const height = (Math.random() - 0.5) * scale * 4;

    // Add spiral arm rotation
    const spiralAngle = angle + (distance / (scale * 15)) * Math.PI * 4;

    positions[i * 3] = centerX + Math.cos(spiralAngle) * distance;
    positions[i * 3 + 1] = centerY + height;
    positions[i * 3 + 2] = centerZ + Math.sin(spiralAngle) * distance;

    // Color variation: whiter stars closer to core, more colorful at edges
    const colorIntensity = 1 - distance / (scale * 15);
    colors[i * 3] = 0.8 + colorIntensity * 0.2; // R
    colors[i * 3 + 1] = 0.8 + colorIntensity * 0.2; // G
    colors[i * 3 + 2] = 1.0; // B (slight blue tint)
  }

  return { positions, colors };
};

// Generate positions for galaxy core (denser, glowing)
export const generateGalaxyCore = (
  count: number,
  centerX: number,
  centerY: number,
  centerZ: number,
  coreRadius: number = 2
): { positions: Float32Array; colors: Float32Array } => {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    const radius = Math.random() * coreRadius;

    positions[i * 3] = centerX + Math.sin(phi) * Math.cos(angle) * radius;
    positions[i * 3 + 1] = centerY + Math.cos(phi) * radius;
    positions[i * 3 + 2] = centerZ + Math.sin(phi) * Math.sin(angle) * radius;

    // Bright white for core
    const brightness = 0.8 + Math.random() * 0.2;
    colors[i * 3] = brightness;
    colors[i * 3 + 1] = brightness;
    colors[i * 3 + 2] = brightness;
  }

  return { positions, colors };
};

// Position a galaxy in universe space
export const positionGalaxy = (
  categoryIndex: number,
  totalCategories: number
): { x: number; y: number; z: number } => {
  const angle = (categoryIndex / totalCategories) * Math.PI * 2;
  const radius = 50;

  return {
    x: Math.cos(angle) * radius,
    y: (Math.random() - 0.5) * 20,
    z: Math.sin(angle) * radius,
  };
};

// Calculate planet orbit position
export const calculateOrbitPosition = (
  centerX: number,
  centerY: number,
  centerZ: number,
  orbitRadius: number,
  angle: number,
  tilt: number = 0
): GalaxyPosition => {
  return {
    x: centerX + Math.cos(angle) * orbitRadius,
    y: centerY + Math.sin(angle + tilt) * orbitRadius * 0.3,
    z: centerZ + Math.sin(angle) * orbitRadius,
  };
};

// Get color for a category
export const getCategoryColor = (
  category: 'mobile' | 'frontend' | 'backend' | 'cloud' | 'ai'
): string => {
  const colors: Record<string, string> = {
    mobile: '#FF6B9D', // Pink
    frontend: '#A78BFA', // Purple
    backend: '#06B6D4', // Cyan
    cloud: '#3B82F6', // Blue
    ai: '#FBBF24', // Gold
  };
  return colors[category] || '#06B6D4';
};

// Proficiency to size mapping - enlarged for better visibility
export const proficiencyToSize = (
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
): number => {
  const sizes: Record<string, number> = {
    beginner: 0.6,
    intermediate: 0.85,
    advanced: 1.1,
    expert: 1.4,
  };
  return sizes[proficiency] || 0.85;
};

// Experience years to glow intensity
export const experienceToGlow = (years: number): number => {
  return Math.min(0.5 + years * 0.1, 1.0);
};
