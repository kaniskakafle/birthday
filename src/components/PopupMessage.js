import { AnimatePresence, motion } from 'framer-motion';

export default function PopupMessage({ open, title, msg, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="popup-box"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            <div className="popup-emoji">💌</div>
            <h3 className="popup-title">{title}</h3>
            <p className="popup-msg">{msg}</p>
            <button className="popup-close-btn" onClick={onClose}>
              Okay, I love you too 💕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}