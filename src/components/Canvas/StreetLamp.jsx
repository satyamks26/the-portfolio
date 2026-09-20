import { useRef, useMemo, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

useGLTF.preload('/models/lamp_post.glb');

export default function StreetLamp({ position = [-1.75, 0, 0.35], carTarget = [0, 0.4, 0] }) {
  const spotRef = useRef();
  const targetRef = useRef();

  const { scene } = useGLTF('/models/lamp_post.glb');

  // Clone scene so materials are isolated and clean
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    return clone;
  }, [scene]);

  // Configure PBR materials: emissive glowing bulb, transparent glass lantern, matte cast iron post
  useMemo(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (Array.isArray(child.material)) {
          child.material = child.material.map((mat) => upgradeMaterial(mat));
        } else if (child.material) {
          child.material = upgradeMaterial(child.material);
        }
      }
    });
  }, [clonedScene]);

  function upgradeMaterial(mat) {
    const name = mat.name || '';
    if (name.includes('lambert4') || name.includes('bulb')) {
      // High-intensity warm tungsten bulb inside lantern
      return new THREE.MeshStandardMaterial({
        color: '#fffbeb',
        emissive: '#fde047',
        emissiveIntensity: 6,
        toneMapped: false,
      });
    } else if (name.includes('lambert2') || name.includes('glass')) {
      // Smoked glass lantern panes
      return new THREE.MeshPhysicalMaterial({
        color: '#27272a',
        roughness: 0.08,
        metalness: 0.7,
        transmission: 0.82,
        thickness: 0.2,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
      });
    } else {
      // Architectural cast iron pole
      return new THREE.MeshStandardMaterial({
        color: '#181920',
        roughness: 0.5,
        metalness: 0.85,
      });
    }
  }

  // Link spotlight target to aim down at the car
  useEffect(() => {
    if (spotRef.current && targetRef.current) {
      spotRef.current.target = targetRef.current;
    }
  }, []);

  // Scale: original height is 19.76. Scaled by 0.070 -> height is 1.38m.
  // Lantern bulb is situated at y = 16.45 * 0.070 = 1.15m, with generous clearance well below navbar.
  const SCALE = 0.070;
  const BULB_HEIGHT = 1.15;

  return (
    <group position={position}>
      {/* 3D Lamp Post Geometry */}
      <group scale={[SCALE, SCALE, SCALE]}>
        <primitive object={clonedScene} />
      </group>

      {/* Downward Warm Street Spotlight Illuminating the Car */}
      <spotLight
        ref={spotRef}
        position={[0, BULB_HEIGHT, 0]}
        intensity={18}
        distance={12}
        angle={0.62}
        penumbra={0.7}
        color="#fff1c2"
        castShadow
      />

      {/* Spotlight Target Aimed directly at the car's roof and cockpit */}
      <object3D
        ref={targetRef}
        position={[carTarget[0] - position[0], carTarget[1] - position[1], carTarget[2] - position[2]]}
      />

      {/* Warm Ambient Lantern Core Glow */}
      <pointLight position={[0, BULB_HEIGHT, 0]} intensity={3.0} color="#fde047" distance={5} />

      {/* Soft Ground Halo under the pole */}
      <pointLight position={[0, 0.1, 0]} intensity={0.6} color="#fed7aa" distance={2.5} />
    </group>
  );
}
