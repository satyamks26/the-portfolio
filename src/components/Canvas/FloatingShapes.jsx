import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';

export default function FloatingShapes() {
  const sphereRef = useRef();
  const torusRef = useRef();
  const octaRef = useRef();
  const icoRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.15;
      sphereRef.current.rotation.y = time * 0.1;
      sphereRef.current.position.y = 1.2 + Math.sin(time * 0.6) * 0.15;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = time * -0.15;
      torusRef.current.rotation.y = time * 0.2;
      torusRef.current.position.y = -2.2 + Math.cos(time * 0.7) * 0.15;
    }

    if (octaRef.current) {
      octaRef.current.rotation.x = time * 0.2;
      octaRef.current.rotation.z = time * 0.15;
      octaRef.current.position.y = -4.5 + Math.sin(time * 0.8) * 0.15;
    }

    if (icoRef.current) {
      icoRef.current.rotation.y = time * 0.2;
      icoRef.current.rotation.x = time * 0.1;
      icoRef.current.position.y = -6.8 + Math.cos(time * 0.5) * 0.15;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = time * 0.1;
      ringRef.current.rotation.z = time * 0.15;
      ringRef.current.position.y = -8.8 + Math.sin(time * 0.6) * 0.15;
    }
  });

  return (
    <group>
      {/* 2. About: Wobbling brass torus */}
      <mesh ref={torusRef} position={[-2.6, -2.2, -1.2]}>
        <torusGeometry args={[0.8, 0.22, 16, 80]} />
        <MeshWobbleMaterial
          color="#222222"
          factor={0.5}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* 3. Experience: Floating crystalline octahedron */}
      <mesh ref={octaRef} position={[2.2, -4.5, -1.5]}>
        <octahedronGeometry args={[0.85]} />
        <meshStandardMaterial
          color="#d5d5d5"
          roughness={0.15}
          metalness={0.85}
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      {/* 4. Projects: Floating icosahedron */}
      <mesh ref={icoRef} position={[-2.4, -6.8, -1.2]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#888888"
          wireframe={true}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* 5. Contact: Smooth toroidal ring */}
      <mesh ref={ringRef} position={[1.8, -8.8, -1.2]}>
        <torusGeometry args={[0.9, 0.15, 16, 60]} />
        <meshStandardMaterial
          color="#333333"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}
