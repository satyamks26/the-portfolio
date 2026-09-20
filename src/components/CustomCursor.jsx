import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const mouse = useRef({ x: -100, y: -100 });
  const cursor = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Hardware-accelerated direct GPU transform
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Smooth lerp for outer ring using GPU compositor transforms
    const animateCursor = () => {
      const ease = 0.35;
      
      cursor.current.x += (mouse.current.x - cursor.current.x) * ease;
      cursor.current.y += (mouse.current.y - cursor.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animateCursor);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('interactive') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';
        
      setHovered(Boolean(isClickable));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    
    const animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`custom-cursor ${hovered ? 'hovered' : ''}`} 
      />
      <div 
        ref={dotRef} 
        className="custom-cursor-dot" 
      />
    </>
  );
}
