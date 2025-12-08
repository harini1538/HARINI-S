import { useEffect } from 'react';

export default function useCursorTrail() {
  useEffect(() => {
    const trails = [];
    const trailCount = 4; // reduced trails for smoother performance

    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.position = 'fixed';
      trail.style.pointerEvents = 'none';
      trail.style.willChange = 'transform, opacity'; // performance boost
      trail.style.zIndex = '9999';
      document.body.appendChild(trail);
      trails.push(trail);
    }

    let mouseX = 0;
    let mouseY = 0;

    const positions = trails.map(() => ({ x: 0, y: 0 }));

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      let x = mouseX;
      let y = mouseY;

      positions.forEach((pos, index) => {
        const trail = trails[index];
        
        const speed = 0.30 - index * 0.05; // faster movement

        pos.x += (x - pos.x) * speed;
        pos.y += (y - pos.y) * speed;

        trail.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${1 - index * 0.08})`;
        trail.style.opacity = `${0.9 - index * 0.2}`;

        x = pos.x;
        y = pos.y;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      trails.forEach((trail) => trail.remove());
    };
  }, []);
}
