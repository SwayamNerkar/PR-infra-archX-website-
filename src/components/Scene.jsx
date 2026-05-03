import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, MeshDistortMaterial, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const AbstractBuilding = () => {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) / 4;
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group ref={group}>
      {/* Base */}
      <mesh position={[0, -1, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.2, 4]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Tower 1 */}
      <mesh position={[-0.8, 1, 0.5]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 4, 1.2]} />
        <meshStandardMaterial color="#222" metalness={0.6} roughness={0.1} />
      </mesh>

      {/* Glass Tower */}
      <mesh position={[0.5, 1.5, -0.5]} castShadow receiveShadow>
        <boxGeometry args={[1, 5, 1]} />
        <meshPhysicalMaterial
          color="#d4af37"
          transmission={0.9}
          opacity={1}
          metalness={0}
          roughness={0}
          ior={1.5}
          thickness={0.5}
        />
      </mesh>

      {/* Floating Elements */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[2, 2, 2]} castShadow>
          <icosahedronGeometry args={[0.5, 0]} />
          <MeshDistortMaterial color="#d4af37" distort={0.3} speed={2} metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2, 3, -1]} castShadow>
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#ffffff" metalness={1} roughness={0} />
        </mesh>
      </Float>
    </group>
  );
};

const Scene = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
      <Canvas shadows camera={{ position: [0, 2, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <AbstractBuilding />

        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2} far={4} />
        <Environment preset="city" />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene;
