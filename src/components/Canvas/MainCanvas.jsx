import { Canvas } from '@react-three/fiber';
import ParticleField from './ParticleField';
import FloatingShapes from './FloatingShapes';
import CameraFlythrough from './CameraFlythrough';
import LegoMasterBuilder from './LegoMasterBuilder';

export default function MainCanvas() {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 65 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: 'high-performance', toneMappingExposure: 1.15 }}
      >
        {/* Sunny Vibrant LEGO Studio Lighting */}
        <ambientLight intensity={1.1} />
        <directionalLight position={[5, 10, 5]} intensity={2.8} color="#ffffff" castShadow />
        <directionalLight position={[-4, 4, 3]} intensity={1.6} color="#fecb00" />
        <pointLight position={[3, -2, 3]} intensity={1.8} color="#0055bf" distance={10} />
        <pointLight position={[-3, 2, -2]} intensity={2.0} color="#e52521" distance={10} />

        {/* 3D Camera Trajectory */}
        <CameraFlythrough />

        {/* 3D Interactive LEGO Master Builder Centerpiece */}
        <LegoMasterBuilder />

        {/* 3D Background Particles & Floating Shapes */}
        <ParticleField />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
