"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function Orb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh position={position}>
        <sphereGeometry args={[0.9, 42, 42]} />
        <MeshDistortMaterial color={color} emissive={color} emissiveIntensity={0.12} distort={0.18} speed={2} />
      </mesh>
    </Float>
  );
}

export function OrbCluster() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 4]} intensity={1} color="#ffb566" />
        <directionalLight position={[-4, 2, -2]} intensity={0.4} color="#7b8bff" />
        <Orb position={[-1.8, 0, 0]} color="#f59e0b" />
        <Orb position={[1.2, 0.6, -0.4]} color="#22c55e" />
        <Orb position={[0.4, -1.2, 0.8]} color="#6366f1" />
      </Canvas>
    </div>
  );
}
