import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useConfetti from "../hooks/useConfetti";
import { PASSCODE, WRONG_MSGS } from '../data/config';

const KEYS = ['1','2','3','4','5','6','7','8','9','','0','del'];

export default function LockPage({ navigate }) {
  const [pin, setPin]       = useState('');
  const [error, setError]   = useState('');
  const [shake, setShake]   = useState(false);
  const launch = useConfetti();

  const press = (k) => {
    if (pin.length >= 4) return;
    const next = pin + k;
    setPin(next);
    setError('');
    if (next.length === 4) check(next);
  };

  const del = () => { setPin(p => p.slice(0, -1)); setError(''); };

  const check = (code) => {
    if (code === PASSCODE) {
      launch();
      setTimeout(() => navigate('main'), 700);
    } else {
      setShake(true);
      setError(WRONG_MSGS[Math.floor(Math.random() * WRONG_MSGS.length)]);
      setTimeout(() => { setPin(''); setShake(false); }, 700);
    }
  };

  return (
    <motion.div
      className="page-wrapper lock-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="lock-card"
        animate={shake ? { x: [-10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="lock-icon">🔐</span>
        <h1 className="lock-title">A Secret Awaits You</h1>
        <p className="lock-hint">My special date 💭</p>

        <div className="pin-display">
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              className={`pin-dot${i < pin.length ? ' filled' : ''}${shake && i < pin.length ? ' error' : ''}`}
            />
          ))}
        </div>

        <div className="keypad">
          {KEYS.map((k, i) => {
            if (k === '') return <div key={i} className="key key-empty" />;
            if (k === 'del') return (
              <button key={i} className="key key-del" onClick={del}>⌫</button>
            );
            return (
              <motion.button
                key={k}
                className="key"
                onClick={() => press(k)}
                whileTap={{ scale: 0.9 }}
              >
                {k}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              className="error-msg"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}