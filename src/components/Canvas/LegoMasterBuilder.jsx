import { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural high-gloss LEGO ABS Plastic Material cache
const createLegoMaterial = (color) => {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color),
    roughness: 0.18,
    metalness: 0.04,
    clearcoat: 0.85,
    clearcoatRoughness: 0.08,
    reflectivity: 0.6,
  });
};

// Single LEGO Brick with realistic cylindrical studs
function LegoBrick({ 
  position = [0, 0, 0], 
  cols = 2, 
  rows = 4, 
  color = '#e52521', 
  explodedOffset = [0, 0, 0], 
  explodeT = 0 
}) {
  const brickWidth = cols * 0.5;
  const brickHeight = 0.42;
  const brickDepth = rows * 0.5;
  const studRadius = 0.15;
  const studHeight = 0.10;

  const mat = useMemo(() => createLegoMaterial(color), [color]);

  // Generate stud positions
  const studs = useMemo(() => {
    const arr = [];
    const startX = -((cols - 1) * 0.5) / 2;
    const startZ = -((rows - 1) * 0.5) / 2;
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        arr.push([startX + c * 0.5, brickHeight / 2 + studHeight / 2, startZ + r * 0.5]);
      }
    }
    return arr;
  }, [cols, rows, brickHeight, studHeight]);

  // Interpolate between assembled and exploded position
  const currentPos = [
    position[0] + explodedOffset[0] * explodeT,
    position[1] + explodedOffset[1] * explodeT,
    position[2] + explodedOffset[2] * explodeT,
  ];

  return (
    <group position={currentPos}>
      {/* Brick Main Box */}
      <mesh material={mat} castShadow receiveShadow>
        <boxGeometry args={[brickWidth, brickHeight, brickDepth]} />
      </mesh>

      {/* Cylindrical Studs on Top */}
      {studs.map((sPos, i) => (
        <mesh key={i} position={sPos} material={mat} castShadow receiveShadow>
          <cylinderGeometry args={[studRadius, studRadius, studHeight, 20]} />
        </mesh>
      ))}
    </group>
  );
}

export default function LegoMasterBuilder() {
  const groupRef = useRef();
  const [exploded, setExploded] = useState(false);
  const explodeProgress = useRef(0);

  useEffect(() => {
    const handleToggle = () => setExploded((prev) => !prev);
    window.addEventListener('toggle-lego-explode', handleToggle);
    return () => window.removeEventListener('toggle-lego-explode', handleToggle);
  }, []);

  // Define the Master Builder centerpiece brick layout (vibrant LEGO Movie colors)
  const bricks = useMemo(() => [
    // --- FOUNDATION LAYER (Lego Blue & Dark) ---
    { pos: [0, -1.2, 0], cols: 4, rows: 4, color: '#0055bf', offset: [0, -1.8, 0] },
    { pos: [-1.25, -1.2, 0], cols: 2, rows: 4, color: '#e52521', offset: [-2.2, -1.2, 0] },
    { pos: [1.25, -1.2, 0], cols: 2, rows: 4, color: '#e52521', offset: [2.2, -1.2, 0] },

    // --- SECOND TIER (Lego Red & Yellow Pillars) ---
    { pos: [-0.75, -0.78, -0.5], cols: 2, rows: 2, color: '#fecb00', offset: [-1.5, -0.3, -1.5] },
    { pos: [0.75, -0.78, -0.5], cols: 2, rows: 2, color: '#fecb00', offset: [1.5, -0.3, -1.5] },
    { pos: [-0.75, -0.78, 0.5], cols: 2, rows: 2, color: '#009640', offset: [-1.5, -0.3, 1.5] },
    { pos: [0.75, -0.78, 0.5], cols: 2, rows: 2, color: '#009640', offset: [1.5, -0.3, 1.5] },
    { pos: [0, -0.78, 0], cols: 2, rows: 2, color: '#ffffff', offset: [0, 0, 0] },

    // --- THIRD TIER ARCH / BRIDGE (Vibrant Red & Orange) ---
    { pos: [0, -0.36, 0], cols: 4, rows: 2, color: '#e52521', offset: [0, 0.5, 0] },
    { pos: [-0.75, -0.36, 0], cols: 2, rows: 2, color: '#f57d20', offset: [-1.8, 0.4, 0] },
    { pos: [0.75, -0.36, 0], cols: 2, rows: 2, color: '#f57d20', offset: [1.8, 0.4, 0] },

    // --- FOURTH TIER (Lego Yellow Crown Plate) ---
    { pos: [0, 0.06, 0], cols: 2, rows: 4, color: '#fecb00', offset: [0, 1.2, 0] },
    { pos: [-0.5, 0.06, 0], cols: 2, rows: 2, color: '#0055bf', offset: [-1.4, 1.2, 0] },
    { pos: [0.5, 0.06, 0], cols: 2, rows: 2, color: '#0055bf', offset: [1.4, 1.2, 0] },

    // --- FIFTH TIER (Minifigure Podium & Beacon) ---
    { pos: [0, 0.48, 0], cols: 2, rows: 2, color: '#ffffff', offset: [0, 1.8, 0] },
    { pos: [0, 0.90, 0], cols: 1, rows: 1, color: '#e52521', offset: [0, 2.4, 0] },
    { pos: [0, 1.22, 0], cols: 1, rows: 1, color: '#fecb00', offset: [0, 3.0, 0] },
  ], []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!groupRef.current) return;

    // Smooth spring physics for explode/assemble
    const targetT = exploded ? 1 : 0;
    explodeProgress.current = THREE.MathUtils.lerp(explodeProgress.current, targetT, 0.1);

    // Continuous Lego Movie playful breathing & gentle floating
    const hoverY = Math.sin(time * 1.8) * 0.06;
    groupRef.current.position.y = hoverY;

    // Interactive mouse tilt parallax
    const targetRotY = state.pointer.x * 0.45;
    const targetRotX = -state.pointer.y * 0.3;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.08);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.08);
  });

  return (
    <group 
      position={[1.5, 0.1, 0.5]} 
      onClick={() => setExploded((prev) => !prev)}
      style={{ cursor: 'pointer' }}
    >
      <group ref={groupRef} scale={[1.1, 1.1, 1.1]}>
        {bricks.map((b, idx) => (
          <LegoBrick
            key={idx}
            position={b.pos}
            cols={b.cols}
            rows={b.rows}
            color={b.color}
            explodedOffset={b.offset}
            explodeT={explodeProgress.current}
          />
        ))}

        {/* Playful Floating 1x1 Round Stud Sparks */}
        <mesh position={[-1.8, 1.2, 0.6]}>
          <cylinderGeometry args={[0.12, 0.12, 0.10, 16]} />
          <meshStandardMaterial color="#fecb00" emissive="#fecb00" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[1.8, 0.8, -0.4]}>
          <cylinderGeometry args={[0.12, 0.12, 0.10, 16]} />
          <meshStandardMaterial color="#e52521" emissive="#e52521" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.8, 1.6, 0.3]}>
          <cylinderGeometry args={[0.12, 0.12, 0.10, 16]} />
          <meshStandardMaterial color="#0055bf" emissive="#0055bf" emissiveIntensity={0.6} />
        </mesh>
      </group>
    </group>
  );
}
