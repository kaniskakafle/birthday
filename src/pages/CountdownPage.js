import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownPage({ navigate }) {
  const [time, setTime] = useState({ h: '00', m: '00', s: '00' });

  useEffect(() => {
    const tick = () => {
      const now    = new Date();
      const target = new Date(now);
      target.setHours(0, 0, 0, 0);
      if (now >= target) target.setDate(target.getDate() + 1);

      const diff = target - now;
      if (diff <= 0) { navigate('lock'); return; }

      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({
        h: String(h).padStart(2, '0'),
        m: String(m).padStart(2, '0'),
        s: String(s).padStart(2, '0'),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [navigate]);

  return (
    <motion.div
      className="page-wrapper countdown-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="countdown-content">
        <motion.h1
          className="countdown-heading"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Something magical is coming… 💫
        </motion.h1>
        <motion.p
          className="countdown-sub"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Her birthday begins at midnight. Hold tight, Kaniska…
        </motion.p>

        <motion.div
          className="clock-grid"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[
            { val: time.h, label: 'Hours' },
            { val: time.m, label: 'Minutes' },
            { val: time.s, label: 'Seconds' },
          ].map(({ val, label }) => (
            <div className="clock-item" key={label}>
              <span className="clock-num">{val}</span>
              <span className="clock-label">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.button
          className="skip-btn"
          onClick={() => navigate('lock')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Skip to birthday ✨
        </motion.button>
      </div>
    </motion.div>
  );
}