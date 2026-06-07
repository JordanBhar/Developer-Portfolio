import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Skill } from '@/types';
import { skillsByCategory } from '@/data/skills';
import { Galaxy } from './Galaxy';
import { CameraController } from './CameraController';
import { Suspense } from 'react';

interface UniverseCanvasProps {
  onHover: (skill: Skill | null) => void;
}

export const UniverseCanvas = ({ onHover }: UniverseCanvasProps) => {
  const categories = ['mobile', 'frontend', 'backend', 'cloud', 'ai'] as const;

  return (
    <div className="relative w-full h-full">
      {/* Instructions overlay - positioned absolutely over canvas */}
      <div className="absolute top-4 right-4 z-10 pointer-events-none">
        <div className="bg-dark-primary/80 border border-accent-cyan/30 rounded-lg px-4 py-3 backdrop-blur-sm">
          <p className="text-sm text-text-muted whitespace-nowrap">
            <span className="inline-block mr-3">↖️ Click & drag to pan</span>
            <span className="inline-block">🔍 Scroll to zoom</span>
          </p>
        </div>
      </div>

    <Canvas
      camera={{ position: [0, 0, 80], fov: 75 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%' }}
    >
      <color attach="background" args={['#0a0e27']} />
      <fog attach="fog" args={['#0a0e27', 100, 300]} />

      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 50]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[50, 30, 50]} intensity={0.4} color="#a78bfa" />
      <pointLight position={[-50, -30, 50]} intensity={0.4} color="#ff6b9d" />

      <Suspense fallback={null}>
        {categories.map((category, index) => (
          <Galaxy
            key={category}
            category={category}
            skills={skillsByCategory(category)}
            categoryIndex={index}
            totalCategories={categories.length}
            onHover={onHover}
          />
        ))}
      </Suspense>

      <CameraController enabled />
      <Preload all />
    </Canvas>
    </div>
  );
};
