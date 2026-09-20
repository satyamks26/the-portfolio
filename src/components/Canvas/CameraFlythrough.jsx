import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraFlythrough() {
  const mouse = useRef({ x: 0, y: 0 });
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    const updateScrollMetrics = () => {
      scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgressRef.current = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
    };

    const handleScroll = () => {
      scrollProgressRef.current = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
    };

    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    updateScrollMetrics();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollMetrics, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollMetrics);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 3D camera trajectory keyframes along the scroll path
  // [progress (0 to 1), pos: [x, y, z], target: [x, y, z]]
  const keyframes = [
    { p: 0.0, pos: [0, 0.2, 5.0], target: [0.8, -0.2, 0.4] },     // Hero: Perfectly frames Supercar & Showroom
    { p: 0.25, pos: [1.8, -2.2, 4.2], target: [0.3, -2.5, 0] },   // About: Swoop right, angled into content
    { p: 0.50, pos: [-2.0, -4.5, 3.8], target: [-0.3, -4.8, 0] }, // Experience: Banking left through particle tunnel
    { p: 0.75, pos: [1.6, -6.8, 4.5], target: [0, -7.0, 0] },     // Projects: Elevated perspective over cards
    { p: 1.0, pos: [0, -9.0, 4.0], target: [0, -9.0, 0] },        // Contact: Level perspective at finish
  ];

  // Helper to calculate smooth interpolation between keyframes
  const getInterpolated = (progress) => {
    const t = Math.max(0, Math.min(1, progress));
    
    let i = 0;
    while (i < keyframes.length - 1 && keyframes[i + 1].p < t) {
      i++;
    }
    const k1 = keyframes[i];
    const k2 = keyframes[Math.min(i + 1, keyframes.length - 1)];

    const segmentT = k2.p === k1.p ? 0 : (t - k1.p) / (k2.p - k1.p);
    // Smoothstep interpolation for cinema-grade curve
    const smoothT = segmentT * segmentT * (3 - 2 * segmentT);

    const pos = [
      THREE.MathUtils.lerp(k1.pos[0], k2.pos[0], smoothT),
      THREE.MathUtils.lerp(k1.pos[1], k2.pos[1], smoothT),
      THREE.MathUtils.lerp(k1.pos[2], k2.pos[2], smoothT),
    ];

    const target = [
      THREE.MathUtils.lerp(k1.target[0], k2.target[0], smoothT),
      THREE.MathUtils.lerp(k1.target[1], k2.target[1], smoothT),
      THREE.MathUtils.lerp(k1.target[2], k2.target[2], smoothT),
    ];

    return { pos, target };
  };

  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(({ camera }) => {
    const { pos, target } = getInterpolated(scrollProgressRef.current);

    // Subtle mouse parallax offset
    const mouseOffsetX = mouse.current.x * 0.35;
    const mouseOffsetY = mouse.current.y * 0.25;

    // Smooth lerp to target camera coordinates (60fps lock without layout recalculation)
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pos[0] + mouseOffsetX, 0.08);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pos[1] + mouseOffsetY, 0.08);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, pos[2], 0.08);

    // Smooth lerp lookAt target
    currentLookAt.current.x = THREE.MathUtils.lerp(currentLookAt.current.x, target[0], 0.08);
    currentLookAt.current.y = THREE.MathUtils.lerp(currentLookAt.current.y, target[1], 0.08);
    currentLookAt.current.z = THREE.MathUtils.lerp(currentLookAt.current.z, target[2], 0.08);

    camera.lookAt(currentLookAt.current);
  });

  return null;
}
