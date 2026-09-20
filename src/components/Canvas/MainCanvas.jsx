import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ParticleField from './ParticleField';
import FloatingShapes from './FloatingShapes';
import CameraFlythrough from './CameraFlythrough';
import AventadorModel from './AventadorModel';
import StreetLamp from './StreetLamp';
import ShowroomFloor from './ShowroomFloor';

export default function MainCanvas() {
  const [paintColor, setPaintColor] = useState('#d4d5d9'); // Default: Chalk Gray
  const [headlightsOn, setHeadlightsOn] = useState(true);

  useEffect(() => {
    const handlePaintChange = (e) => {
      if (e.detail) setPaintColor(e.detail);
    };

    const handleHeadlightsToggle = (e) => {
      setHeadlightsOn(e.detail);
    };

    window.addEventListener('car-paint-change', handlePaintChange);
    window.addEventListener('car-headlights-toggle', handleHeadlightsToggle);

    return () => {
      window.removeEventListener('car-paint-change', handlePaintChange);
      window.removeEventListener('car-headlights-toggle', handleHeadlightsToggle);
    };
  }, []);

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 65 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: 'high-performance', toneMappingExposure: 1.05 }}
      >
        {/* ================= APPLE / PORSCHE STUDIO SOFTBOX LIGHTING ================= */}
        <ambientLight intensity={0.75} />
        
        {/* Overhead Studio Softbox (highlights roof, hood, and clearcoat) */}
        <directionalLight position={[0, 9, 2]} intensity={2.6} color="#ffffff" />
        
        {/* Front Key Light (sculpts front nose and aggressive aero creases) */}
        <directionalLight position={[3.5, 3.2, 4.5]} intensity={2.2} color="#f8fafc" />
        
        {/* Electric Cyan Rim Light (crisp silhouette on rear widebody fenders) */}
        <pointLight position={[-4.5, 2.5, -2]} intensity={2.8} color="#00f0ff" distance={12} />
        
        {/* Soft Platinum Rear Fill */}
        <pointLight position={[3, 1.5, -4]} intensity={1.4} color="#e2e8f0" distance={10} />

        {/* ================= CAMERA TRAJECTORY ================= */}
        <CameraFlythrough />

        {/* ================= HERO 3D AVENTADOR, STREET LAMP & REFLECTIVE FLOOR ================= */}
        <group position={[1.35, -0.42, 0.35]}>
          <Suspense fallback={null}>
            <AventadorModel paintColor={paintColor} headlightsOn={headlightsOn} />
            <StreetLamp position={[-1.85, 0, 0.95]} carTarget={[0.2, 0.4, 0]} />
          </Suspense>
          <ShowroomFloor />
        </group>

        {/* ================= 3D BACKGROUND PARTICLES & ARCHITECTURAL SHAPES ================= */}
        <ParticleField />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
