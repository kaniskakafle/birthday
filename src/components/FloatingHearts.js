import { useEffect } from 'react';

const EMOJIS = ['❤️','💖','💕','💗','💓','🌹','✨','💫','🌸'];

export default function FloatingHearts({ active }) {
  useEffect(() => {
    if (!active) return;

    const spawn = () => {
      const el = document.createElement('div');
      el.className = 'float-heart';
      el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      el.style.left     = Math.random() * 92 + 'vw';
      el.style.bottom   = '0';
      el.style.fontSize = (14 + Math.random() * 20) + 'px';
      const dur = 5 + Math.random() * 6;
      el.style.animationDuration = dur + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), dur * 1000);
    };

    const id = setInterval(spawn, 1400);
    return () => clearInterval(id);
  }, [active]);

  return null;
}