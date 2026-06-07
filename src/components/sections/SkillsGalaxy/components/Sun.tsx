import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Sun = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.0005;
    }
    if (glowRef.current) {
      glowRef.current.rotation.z -= 0.0003;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Main sun sphere with emissive material */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[6, 64, 64]} />
        <meshStandardMaterial
          color="#ff8800"
          emissive="#ff8800"
          emissiveIntensity={1}
          roughness={0.2}
          metalness={0}
        />
      </mesh>

      {/* Outer glow layer */}
      <mesh ref={glowRef} scale={1.3}>
        <sphereGeometry args={[6, 64, 64]} />
        <meshStandardMaterial
          color="#ff6600"
          transparent
          opacity={0.3}
          emissive="#ff6600"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0}
        />
      </mesh>

      {/* Even larger faint glow */}
      <mesh scale={1.8}>
        <sphereGeometry args={[6, 64, 64]} />
        <meshStandardMaterial
          color="#ff8800"
          transparent
          opacity={0.15}
          emissive="#ff8800"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0}
        />
      </mesh>

      {/* Point light for illumination */}
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#ff8800" distance={100} />
    </group>
  );
};
