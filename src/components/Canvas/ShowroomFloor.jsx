import { MeshReflectorMaterial, ContactShadows } from '@react-three/drei';

export default function ShowroomFloor() {
  return (
    <group position={[0, -0.02, 0]}>
      {/* Studio Wet Asphalt Reflective Floor - Apple / Porsche Luxury Studio */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[40, 40]} />
        <MeshReflectorMaterial
          blur={[200, 60]}
          resolution={512}
          mirror={0.4}
          mixBlur={0.75}
          mixStrength={14}
          roughness={0.45}
          depthScale={1.0}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050608"
          metalness={0.5}
        />
      </mesh>

      {/* Grounded Car Contact Shadows */}
      <ContactShadows
        position={[0, 0.01, 0]}
        opacity={0.85}
        scale={7}
        blur={1.8}
        far={3.0}
        color="#000000"
      />
    </group>
  );
}
