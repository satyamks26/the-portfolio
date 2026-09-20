import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField() {
  const pointsRef = useRef();
  
  // Track mouse coordinates for subtle parallax tilt
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const count = 1200;

  // Generate coordinate buffer once on load spanning the vertical flight corridor
  const initialPositions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 14;         // Spread across X
      pos[i3 + 1] = 4.0 - Math.random() * 16.0;     // Spread vertically from y = +4 down to y = -12
      pos[i3 + 2] = (Math.random() - 0.5) * 9 - 1;   // Depth across Z
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();

    // Gentle ambient rotation as the camera flies through the corridor
    pointsRef.current.rotation.y = time * 0.025;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[initialPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#0a0a0a"
        sizeAttenuation={true}
        depthWrite={false}
        transparent={true}
        opacity={0.75}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
