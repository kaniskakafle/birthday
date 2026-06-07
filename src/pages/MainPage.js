import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import FloatingHearts from '../components/FloatingHearts';
import { useConfetti } from '../hooks/useConfetti';
import { POPUPS, LOVE_RESPONSES } from '../data/config';

const NAME    = 'Samikshya ❤️';
const SUBTEXT = 'My Riss ko pookie, my sutta, my everything…';

function useTypewriter(text, speed = 70, startDelay = 800) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const to = setTimeout(() => {
      const id = setInterval(() => {
        setDisplayed(text.slice(0, ++i));
        if (i >= text.length) clearInterval(id);
      }, speed);
      return () => clearInterval(id);
    }, startDelay);
    return () => clearTimeout(to);
  }, [text, speed, startDelay]);
  return displayed;
}

export default function MainPage({ navigate, showPopup }) {
  const typedName = useTypewriter(NAME, 75, 600);
  const typedSub  = useTypewriter(SUBTEXT, 38, 600 + NAME.length * 75 + 500);
  const launch    = useConfetti();
  const loveCount = useRef(0);
  const popupSent = useRef(false);

  // Schedule surprise popup
  useEffect(() => {
    if (popupSent.current) return;
    const id = setTimeout(() => {
      if (popupSent.current) return;
      popupSent.current = true;
      const p = POPUPS[Math.floor(Math.random() * POPUPS.length)];
      showPopup(p.title, p.msg);
    }, 22000);
    return () => clearTimeout(id);
  }, [showPopup]);

  const handleLoveBtn = () => {
    loveCount.current++;
    const msg = LOVE_RESPONSES[(loveCount.current - 1) % LOVE_RESPONSES.length];
    showPopup('😍 I knew it!', msg);
    launch();
  };

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7 },
  });

  return (
    <motion.div
      className="page-wrapper main-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.6 }}
    >
      <FloatingHearts active />

      <div className="main-content">
        <motion.p className="main-greeting" {...fadeUp(0.3)}>
          ✨ Today is her day ✨
        </motion.p>

        <motion.h1 className="main-name" {...fadeUp(0.55)}>
          Happy Birthday
          <br />
          <span className="name-highlight">{typedName}</span>
        </motion.h1>

        <motion.p className="main-sub" {...fadeUp(0.8)}>
          {typedSub}
        </motion.p>

        <motion.div className="btn-group" {...fadeUp(1.0)}>
          <button className="btn-primary" onClick={() => navigate('wishes')}>
            Read My Wishes 💌
          </button>
          <button className="btn-secondary" onClick={() => navigate('gallery')}>
            Our Gallery 📸
          </button>
        </motion.div>

        <motion.div {...fadeUp(1.25)}>
          <button className="love-btn" onClick={handleLoveBtn}>
            Click if you love me 😜
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}