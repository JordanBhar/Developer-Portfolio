import * as THREE from 'three';

export const createGlowMaterial = (color: number = 0x14B8A6) => {
  return new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.6,
    roughness: 0.3,
    metalness: 0.7,
  });
};

export const createGlassGeometry = () => {
  return new THREE.IcosahedronGeometry(1, 4);
};

export const createConnectionLine = (
  start: THREE.Vector3,
  end: THREE.Vector3,
  color: number = 0x14B8A6
) => {
  const points = [start, end];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color, linewidth: 2 });
  return new THREE.Line(geometry, material);
};

export const addOutlineGlow = (mesh: THREE.Mesh) => {
  const glowGeometry = mesh.geometry.clone();
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0x14B8A6,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0.3,
  });
  const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
  glowMesh.scale.multiplyScalar(1.1);
  mesh.add(glowMesh);
};

export const optimizeGeometry = (geometry: THREE.BufferGeometry) => {
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  return geometry;
};
