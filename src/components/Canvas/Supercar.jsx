import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Supercar({ paintColor = '#d4d5d9', headlightsOn = true }) {
  const carGroup = useRef();
  const frontLeftWheel = useRef();
  const frontRightWheel = useRef();
  const rearLeftWheel = useRef();
  const rearRightWheel = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!carGroup.current) return;

    // Subtle idle engine vibration / breathing suspension
    carGroup.current.position.y = Math.sin(time * 2.5) * 0.008;

    // Gentle wheel rotation
    const wheelSpin = time * 0.8;
    if (frontLeftWheel.current) frontLeftWheel.current.rotation.x = wheelSpin;
    if (frontRightWheel.current) frontRightWheel.current.rotation.x = wheelSpin;
    if (rearLeftWheel.current) rearLeftWheel.current.rotation.x = wheelSpin;
    if (rearRightWheel.current) rearRightWheel.current.rotation.x = wheelSpin;
  });

  // Reusable Wheel Component
  const Wheel = ({ wheelRef, position, flip = false }) => (
    <group ref={wheelRef} position={position}>
      {/* Outer Tire */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.38, 0.38, 0.28, 32]} />
        <meshStandardMaterial color="#141416" roughness={0.85} metalness={0.1} />
      </mesh>

      {/* Forged Alloy Rim */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.26, 0.26, 0.285, 24]} />
        <meshStandardMaterial color="#2b2d35" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* Rim Spokes Pattern */}
      {[0, 60, 120, 180, 240, 300].map((deg, idx) => (
        <mesh key={idx} rotation={[THREE.MathUtils.degToRad(deg), 0, 0]}>
          <boxGeometry args={[0.04, 0.22, 0.29]} />
          <meshStandardMaterial color="#d4d7e1" metalness={0.92} roughness={0.12} />
        </mesh>
      ))}

      {/* Center Wheel Cap */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 0.3, 16]} />
        <meshStandardMaterial color="#e61919" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Carbon Ceramic Slotted Brake Rotor */}
      <mesh position={[flip ? 0.05 : -0.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.02, 24]} />
        <meshStandardMaterial color="#71717a" metalness={0.9} roughness={0.25} />
      </mesh>

      {/* Brembo Style Racing Red Brake Caliper */}
      <mesh position={[flip ? 0.06 : -0.06, 0.12, 0]}>
        <boxGeometry args={[0.05, 0.12, 0.08]} />
        <meshStandardMaterial color="#e61919" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );

  return (
    <group ref={carGroup} position={[0, 0.38, 0]}>
      {/* ================= BODY CHASSIS & SCULPTED PANELS ================= */}

      {/* 1. Main Lower Monocoque Chassis */}
      <mesh position={[0, 0.26, 0]}>
        <boxGeometry args={[1.82, 0.32, 4.4]} />
        <meshPhysicalMaterial
          color={paintColor}
          clearcoat={1.0}
          clearcoatRoughness={0.06}
          metalness={0.92}
          roughness={0.18}
          reflectivity={0.95}
        />
      </mesh>

      {/* 2. Sleek Front Hood & Aerodynamic Nose (Wedge Slant) */}
      <mesh position={[0, 0.32, 1.45]} rotation={[-0.14, 0, 0]}>
        <boxGeometry args={[1.76, 0.22, 1.6]} />
        <meshPhysicalMaterial
          color={paintColor}
          clearcoat={1.0}
          clearcoatRoughness={0.06}
          metalness={0.92}
          roughness={0.18}
        />
      </mesh>

      {/* 3. Front Nose Downforce Tip */}
      <mesh position={[0, 0.16, 2.25]}>
        <boxGeometry args={[1.68, 0.16, 0.35]} />
        <meshPhysicalMaterial
          color={paintColor}
          clearcoat={1.0}
          clearcoatRoughness={0.06}
          metalness={0.92}
          roughness={0.18}
        />
      </mesh>

      {/* 4. Carbon Fiber Front Splitter Lip */}
      <mesh position={[0, 0.05, 2.3]}>
        <boxGeometry args={[1.86, 0.04, 0.45]} />
        <meshStandardMaterial color="#101114" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* 5. Aerodynamic Cockpit Glass Canopy */}
      <mesh position={[0, 0.62, -0.15]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[1.36, 0.44, 2.1]} />
        <meshPhysicalMaterial
          color="#06080d"
          metalness={0.95}
          roughness={0.05}
          transmission={0.3}
          transparent={true}
          opacity={0.88}
        />
      </mesh>

      {/* 6. Roof Spine / Top Air Intake */}
      <mesh position={[0, 0.82, -0.3]}>
        <boxGeometry args={[0.95, 0.08, 1.4]} />
        <meshPhysicalMaterial
          color={paintColor}
          clearcoat={1.0}
          clearcoatRoughness={0.06}
          metalness={0.92}
          roughness={0.18}
        />
      </mesh>

      {/* 7. Rear Mid-Engine Decklid Cover (Vented) */}
      <mesh position={[0, 0.44, -1.55]} rotation={[0.08, 0, 0]}>
        <boxGeometry args={[1.72, 0.24, 1.5]} />
        <meshPhysicalMaterial
          color={paintColor}
          clearcoat={1.0}
          clearcoatRoughness={0.06}
          metalness={0.92}
          roughness={0.18}
        />
      </mesh>

      {/* 8. Muscular Front Fenders (Left & Right) */}
      <mesh position={[-0.92, 0.35, 1.3]}>
        <boxGeometry args={[0.15, 0.35, 1.1]} />
        <meshPhysicalMaterial color={paintColor} clearcoat={1.0} metalness={0.92} roughness={0.18} />
      </mesh>
      <mesh position={[0.92, 0.35, 1.3]}>
        <boxGeometry args={[0.15, 0.35, 1.1]} />
        <meshPhysicalMaterial color={paintColor} clearcoat={1.0} metalness={0.92} roughness={0.18} />
      </mesh>

      {/* 9. Muscular Rear Quarter Panels / Fenders (Widebody) */}
      <mesh position={[-0.95, 0.4, -1.35]}>
        <boxGeometry args={[0.18, 0.42, 1.3]} />
        <meshPhysicalMaterial color={paintColor} clearcoat={1.0} metalness={0.92} roughness={0.18} />
      </mesh>
      <mesh position={[0.95, 0.4, -1.35]}>
        <boxGeometry args={[0.18, 0.42, 1.3]} />
        <meshPhysicalMaterial color={paintColor} clearcoat={1.0} metalness={0.92} roughness={0.18} />
      </mesh>

      {/* 10. Carbon Side Skirts */}
      <mesh position={[-0.95, 0.08, 0]}>
        <boxGeometry args={[0.12, 0.05, 2.6]} />
        <meshStandardMaterial color="#101114" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0.95, 0.08, 0]}>
        <boxGeometry args={[0.12, 0.05, 2.6]} />
        <meshStandardMaterial color="#101114" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* 11. Rear Carbon Ducktail GT Spoiler */}
      <group position={[0, 0.72, -2.1]}>
        {/* Wing Blades */}
        <mesh>
          <boxGeometry args={[1.86, 0.05, 0.32]} />
          <meshStandardMaterial color="#0e1014" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Dual Stanchion Mounts */}
        <mesh position={[-0.5, -0.15, 0]}>
          <boxGeometry args={[0.04, 0.28, 0.12]} />
          <meshStandardMaterial color="#1e2026" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0.5, -0.15, 0]}>
          <boxGeometry args={[0.04, 0.28, 0.12]} />
          <meshStandardMaterial color="#1e2026" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* 12. Rear Aerodynamic Diffuser & Dual Exhausts */}
      <mesh position={[0, 0.14, -2.22]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[1.76, 0.2, 0.3]} />
        <meshStandardMaterial color="#0c0d10" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Dual Performance Exhaust Tips */}
      <mesh position={[-0.32, 0.25, -2.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.15, 16]} />
        <meshStandardMaterial color="#3f3f46" metalness={0.95} roughness={0.15} />
      </mesh>
      <mesh position={[0.32, 0.25, -2.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.15, 16]} />
        <meshStandardMaterial color="#3f3f46" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* ================= ILLUMINATION & LIGHTS ================= */}

      {/* High-Intensity Projector LED Headlights (Left & Right) */}
      <mesh position={[-0.64, 0.32, 2.22]} rotation={[0, 0.15, 0]}>
        <boxGeometry args={[0.38, 0.07, 0.15]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00f0ff"
          emissiveIntensity={headlightsOn ? 4.5 : 0.2}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0.64, 0.32, 2.22]} rotation={[0, -0.15, 0]}>
        <boxGeometry args={[0.38, 0.07, 0.15]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00f0ff"
          emissiveIntensity={headlightsOn ? 4.5 : 0.2}
          toneMapped={false}
        />
      </mesh>

      {/* Real Headlight Spotlights Casting onto Showroom Floor */}
      {headlightsOn && (
        <>
          <spotLight
            position={[-0.64, 0.35, 2.3]}
            target-position={[-0.8, -0.2, 7.5]}
            angle={0.45}
            penumbra={0.6}
            intensity={8.0}
            color="#bbf7d0"
            distance={14}
          />
          <spotLight
            position={[0.64, 0.35, 2.3]}
            target-position={[0.8, -0.2, 7.5]}
            angle={0.45}
            penumbra={0.6}
            intensity={8.0}
            color="#bbf7d0"
            distance={14}
          />
        </>
      )}

      {/* Cyber Full-Width Red LED Taillight Strip */}
      <mesh position={[0, 0.44, -2.22]}>
        <boxGeometry args={[1.68, 0.05, 0.06]} />
        <meshStandardMaterial
          color="#ff0022"
          emissive="#ff0022"
          emissiveIntensity={headlightsOn ? 4.0 : 1.0}
          toneMapped={false}
        />
      </mesh>

      {/* Subtle Cyan Underglow LED */}
      {headlightsOn && (
        <pointLight position={[0, -0.05, 0]} intensity={1.8} color="#00f0ff" distance={3.5} />
      )}

      {/* ================= 4x FORGED ALLOY WHEELS ================= */}
      <Wheel wheelRef={frontLeftWheel} position={[-0.96, 0, 1.45]} />
      <Wheel wheelRef={frontRightWheel} position={[0.96, 0, 1.45]} flip />
      <Wheel wheelRef={rearLeftWheel} position={[-0.98, 0, -1.35]} />
      <Wheel wheelRef={rearRightWheel} position={[0.98, 0, -1.35]} flip />
    </group>
  );
}
