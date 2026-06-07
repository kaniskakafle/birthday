import { useEffect, useRef } from 'react';

export default function Cursor() {
  const mainRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const main = mainRef.current;
    const trail = trailRef.current;
    let mx = 0, my = 0;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (main) {
        main.style.left = mx + 'px';
        main.style.top  = my + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);

    // Trail lags slightly
    let raf;
    let tx = 0, ty = 0;
    const animate = () => {
      tx += (mx - tx) * 0.18;
      ty += (my - ty) * 0.18;
      if (trail) {
        trail.style.left = tx + 'px';
        trail.style.top  = ty + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={mainRef} className="cursor-main">💗</div>
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}