import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

useGLTF.preload('/models/car.glb');

export default function AventadorModel({ paintColor = '#d4d5d9', headlightsOn = true }) {
  const groupRef = useRef();
  const leftSpotRef = useRef();
  const rightSpotRef = useRef();
  const leftTargetRef = useRef();
  const rightTargetRef = useRef();

  const { scene } = useGLTF('/models/car.glb');

  // Dynamic uniform for automotive paint color
  const customPaintUniform = useRef({ value: new THREE.Color(paintColor) });

  // Update uniform when paintColor prop changes
  useEffect(() => {
    customPaintUniform.current.value.set(paintColor);
  }, [paintColor]);

  // Set up PBR materials once on load
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          const nodeName = child.name || '';
          const matName = child.material.name || '';

          if (nodeName.includes('Body') || nodeName.includes('Wheel') || matName.includes('BodySG')) {
            const originalMap = child.material.map;

            const mat = new THREE.MeshPhysicalMaterial({
              map: originalMap,
              roughness: 0.16,
              metalness: 0.88,
              clearcoat: 1.0,
              clearcoatRoughness: 0.04,
              reflectivity: 0.96,
              envMapIntensity: 2.4,
            });

            // Precision fragment shader: converts yellow paint across all highlights & ambient shadows
            mat.onBeforeCompile = (shader) => {
              shader.uniforms.uCustomPaint = customPaintUniform.current;
              shader.fragmentShader = `
                uniform vec3 uCustomPaint;
              ` + shader.fragmentShader;

              shader.fragmentShader = shader.fragmentShader.replace(
                '#include <map_fragment>',
                `
                #ifdef USE_MAP
                  vec4 sampledDiffuseColor = texture2D( map, vMapUv );
                  // Detect yellow paint panels (high R & G, significantly lower B)
                  bool isYellowPaint = (sampledDiffuseColor.r > 0.32) && 
                                       (sampledDiffuseColor.g > 0.22) && 
                                       ((sampledDiffuseColor.r - sampledDiffuseColor.b) > 0.08) && 
                                       ((sampledDiffuseColor.g - sampledDiffuseColor.b) > 0.04);
                  if (isYellowPaint) {
                    float lum = dot(sampledDiffuseColor.rgb, vec3(0.299, 0.587, 0.114));
                    diffuseColor.rgb = uCustomPaint * (lum / 0.80);
                  } else {
                    diffuseColor *= sampledDiffuseColor;
                  }
                #endif
                `
              );
            };

            child.material = mat;
          } else if (nodeName.includes('Glass') || matName.includes('GlassSG')) {
            child.material = new THREE.MeshPhysicalMaterial({
              color: new THREE.Color('#0b0e14'),
              roughness: 0.04,
              metalness: 0.92,
              transmission: 0.72,
              thickness: 0.45,
              opacity: 0.88,
              transparent: true,
              depthWrite: false,
              envMapIntensity: 2.5,
            });
          }
        }
      }
    });
  }, [scene]);

  // Target objects for forward headlights projection
  useEffect(() => {
    if (leftSpotRef.current && leftTargetRef.current) {
      leftSpotRef.current.target = leftTargetRef.current;
    }
    if (rightSpotRef.current && rightTargetRef.current) {
      rightSpotRef.current.target = rightTargetRef.current;
    }
  }, []);

  // Frame animation: V12 engine idle vibration + subtle interactive parallax
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!groupRef.current) return;

    // 6.5L V12 engine idle vibration
    const idleY = Math.sin(time * 3.2) * 0.0035;
    groupRef.current.position.y = idleY;

    // Responsive micro-parallax: car tilts subtly towards mouse pointer
    const targetRotY = -0.62 + (state.pointer.x * 0.14);
    const targetRotX = (state.pointer.y * -0.04);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.06);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);
  });

  // Scale factor to produce a 4.65m exotic supercar footprint:
  // Original bounds: length 489.44, width 230.2, height 117.55
  // Centered by X: +19.54, Y: -0.04 (grounded on floor), Z: +27.05
  const SCALE = 0.0095;

  return (
    <group ref={groupRef} rotation={[0, -0.62, 0]}>
      {/* Centered and Grounded Model Primitive */}
      <group scale={[SCALE, SCALE, SCALE]}>
        <primitive object={scene} position={[19.54, -0.04, 27.05]} />
      </group>

      {/* ================= HIGH-INTENSITY LED PROJECTOR HEADLIGHTS ================= */}
      {/* Front Left Projector Housing & Beam */}
      <group position={[0.60, 0.38, 2.02]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial
            color="#e0f2fe"
            emissive="#38bdf8"
            emissiveIntensity={headlightsOn ? 6 : 0.1}
            toneMapped={false}
          />
        </mesh>

        <spotLight
          ref={leftSpotRef}
          position={[0, 0, 0.1]}
          intensity={headlightsOn ? 7.0 : 0}
          distance={12}
          angle={0.34}
          penumbra={0.7}
          color="#f0f9ff"
          castShadow
        />
        <object3D ref={leftTargetRef} position={[0.2, -0.38, 5.0]} />
      </group>

      {/* Front Right Projector Housing & Beam */}
      <group position={[-0.60, 0.38, 2.02]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial
            color="#e0f2fe"
            emissive="#38bdf8"
            emissiveIntensity={headlightsOn ? 6 : 0.1}
            toneMapped={false}
          />
        </mesh>

        <spotLight
          ref={rightSpotRef}
          position={[0, 0, 0.1]}
          intensity={headlightsOn ? 7.0 : 0}
          distance={12}
          angle={0.34}
          penumbra={0.7}
          color="#f0f9ff"
          castShadow
        />
        <object3D ref={rightTargetRef} position={[-0.2, -0.38, 5.0]} />
      </group>

      {/* Ambient Floor Glow under Headlights */}
      {headlightsOn && (
        <pointLight position={[0, 0.15, 2.6]} intensity={2.2} color="#00f0ff" distance={5} />
      )}
    </group>
  );
}
