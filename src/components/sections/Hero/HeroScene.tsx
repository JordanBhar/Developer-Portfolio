import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

const HeroScene = () => {
  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0, 15], fov: 50 }}
      style={{ background: 'transparent' }}
      performance={{ min: 0.5 }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} color={0xffffff} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={0.8}
        color={0xffffff}
      />
      <pointLight position={[-10, -10, 10]} intensity={0.4} color={0x14b8a6} />
      <pointLight position={[10, -10, -10]} intensity={0.3} color={0x06b6d4} />

      {/* Main Scene */}
      <CloudNodes />

      {/* Controls - minimal interaction */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
};

const CloudNodes = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Generate node positions
  const nodes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 20,
      y: (Math.random() - 0.5) * 20,
      z: (Math.random() - 0.5) * 20,
      size: Math.random() * 0.6 + 0.4,
      speed: Math.random() * 0.5 + 0.2,
      angle: Math.random() * Math.PI * 2,
    }));
  }, []);

  // Animation loop
  useFrame(() => {
    if (groupRef.current) {
      // Gentle floating animation
      nodes.forEach((node, index) => {
        const mesh = groupRef.current?.children[index] as THREE.Mesh;
        if (mesh) {
          mesh.position.y += Math.sin(Date.now() * 0.001 * node.speed + node.angle) * 0.01;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cloud Nodes */}
      {nodes.map((node) => (
        <CloudNode key={node.id} {...node} />
      ))}

      {/* Connection Lines */}
      <ConnectionLines nodes={nodes} />

      {/* Particles */}
      <ParticleSystem nodes={nodes} />
    </group>
  );
};

interface NodeProps {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  angle: number;
}

const CloudNode = ({ x, y, z, size }: NodeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group position={[x, y, z]}>
      {/* Main sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={0x14b8a6}
          emissive={0x14b8a6}
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Glow effect (outer sphere) */}
      <mesh scale={1.15}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial
          color={0x14b8a6}
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Bright core */}
      <mesh scale={0.6}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial
          color={0x22d3ee}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

interface ConnectionLinesProps {
  nodes: NodeProps[];
}

const ConnectionLines = ({ nodes }: ConnectionLinesProps) => {
  const positions = useMemo(() => {
    const pos: number[] = [];

    // Create lines between nearby nodes
    nodes.forEach((node1, i) => {
      nodes.forEach((node2, j) => {
        if (i < j) {
          const distance = Math.hypot(
            node1.x - node2.x,
            node1.y - node2.y,
            node1.z - node2.z
          );
          if (distance < 10) {
            pos.push(node1.x, node1.y, node1.z);
            pos.push(node2.x, node2.y, node2.z);
          }
        }
      });
    });

    return new Float32Array(pos);
  }, [nodes]);

  const geometryRef = useRef<THREE.BufferGeometry>(null);

  return (
    <lineSegments>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={0x06b6d4} linewidth={1} transparent opacity={0.5} />
    </lineSegments>
  );
};

const ParticleSystem = ({ nodes }: { nodes: NodeProps[] }) => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 500;

  // Generate particle positions along connections
  const { positions } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const randomNode1 = nodes[Math.floor(Math.random() * nodes.length)];
      const randomNode2 = nodes[Math.floor(Math.random() * nodes.length)];

      // Interpolate between two random nodes
      const t = Math.random();
      pos[i * 3] = randomNode1.x + (randomNode2.x - randomNode1.x) * t;
      pos[i * 3 + 1] = randomNode1.y + (randomNode2.y - randomNode1.y) * t;
      pos[i * 3 + 2] = randomNode1.z + (randomNode2.z - randomNode1.z) * t;
    }

    return { positions: pos };
  }, [nodes]);

  useFrame(() => {
    if (particlesRef.current && particlesRef.current.geometry) {
      const positionAttribute = particlesRef.current.geometry.getAttribute('position');
      const pos = positionAttribute.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const randomNode1 = nodes[Math.floor(Math.random() * nodes.length)];
        const randomNode2 = nodes[Math.floor(Math.random() * nodes.length)];

        const t = (Math.sin(Date.now() * 0.001 + i) + 1) / 2;
        pos[i * 3] = randomNode1.x + (randomNode2.x - randomNode1.x) * t;
        pos[i * 3 + 1] = randomNode1.y + (randomNode2.y - randomNode1.y) * t;
        pos[i * 3 + 2] = randomNode1.z + (randomNode2.z - randomNode1.z) * t;
      }

      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={0x22d3ee}
        size={0.15}
        transparent
        opacity={0.7}
        sizeAttenuation={true}
      />
    </points>
  );
};

export default HeroScene;
