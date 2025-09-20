import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function Ship() {
  // Placeholder for a simple ship (can be replaced with a model)
  return (
    <mesh position={[0, 0.5, 0]}>
      <boxGeometry args={[1.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#c19a6b" />
      {/* Sail */}
      <mesh position={[0, 0.7, 0]}>
        <planeGeometry args={[1, 1.2]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
    </mesh>
  );
}

function Ocean() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#1a3a5a" transparent opacity={0.8} />
    </mesh>
  );
}

const PirateOcean = () => (
  <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Ocean />
      <Ship />
      <Stars radius={10} depth={50} count={2000} factor={4} saturation={0} fade />
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  </div>
);

export default PirateOcean;
