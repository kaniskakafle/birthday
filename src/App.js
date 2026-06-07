import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import ParticleCanvas from './components/ParticleCanvas';
import MusicPlayer from './components/MusicPlayer';
import GradientOrbs from './components/GradientOrbs';
import Navbar from './components/Navbar';
import PopupMessage from './components/PopupMessage';

import CountdownPage from './pages/CountdownPage';
import LockPage from './pages/LockPage';
import MainPage from './pages/MainPage';
import WishesPage from './pages/WishesPage';
import GalleryPage from './pages/GalleryPage';
import LetterPage from './pages/LetterPage';

import { TRACKS } from './data/config';

export const AppContext = React.createContext();

function App() {
  const [currentPage, setCurrentPage] = useState('countdown');
  const [unlocked, setUnlocked] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('lock');
  const [muted, setMuted] = useState(false);
  const [popup, setPopup] = useState({ open: false, title: '', msg: '' });

  // Decide start page based on time
  useEffect(() => {
    const h = new Date().getHours();
    if (h >= 22) {
      setCurrentPage('countdown');
    } else {
      setCurrentPage('lock');
    }
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    const trackMap = {
      lock: 'lock',
      main: 'main',
      wishes: 'wishes',
      gallery: 'gallery',
      letter: 'letter',
    };
    if (trackMap[page]) setCurrentTrack(trackMap[page]);
  };

  const showPopup = (title, msg) => {
    setPopup({ open: true, title, msg });
  };

  const closePopup = () => setPopup({ open: false, title: '', msg: '' });

  const contextValue = {
    currentPage,
    navigate,
    unlocked,
    setUnlocked,
    currentTrack,
    setCurrentTrack,
    muted,
    setMuted,
    popup,
    showPopup,
    closePopup,
  };

  const showNav = unlocked && !['countdown', 'lock'].includes(currentPage);

  return (
    <AppContext.Provider value={contextValue}>
      <div className="app-root">
        {/* Global background layers */}
        <GradientOrbs />
        <ParticleCanvas />

        {/* Custom cursor */}
        <Cursor />

        {/* Music player (global) */}
        <MusicPlayer
          trackKey={currentTrack}
          tracks={TRACKS}
          muted={muted}
          onMuteToggle={() => setMuted((m) => !m)}
          onNext={() => {
            const keys = Object.keys(TRACKS);
            const idx = keys.indexOf(currentTrack);
            setCurrentTrack(keys[(idx + 1) % keys.length]);
          }}
          visible={showNav}
        />

        {/* Navbar */}
        {showNav && <Navbar navigate={navigate} currentPage={currentPage} />}

        {/* Pages */}
        <AnimatePresence mode="wait">
          {currentPage === 'countdown' && (
            <CountdownPage key="countdown" navigate={navigate} />
          )}
          {currentPage === 'lock' && (
            <LockPage key="lock" navigate={navigate} />
          )}
          {currentPage === 'main' && (
            <MainPage key="main" navigate={navigate} showPopup={showPopup} />
          )}
          {currentPage === 'wishes' && (
            <WishesPage key="wishes" navigate={navigate} />
          )}
          {currentPage === 'gallery' && (
            <GalleryPage key="gallery" navigate={navigate} />
          )}
          {currentPage === 'letter' && (
            <LetterPage key="letter" navigate={navigate} />
          )}
        </AnimatePresence>

        {/* Global popup */}
        <PopupMessage
          open={popup.open}
          title={popup.title}
          msg={popup.msg}
          onClose={closePopup}
        />
      </div>
    </AppContext.Provider>
  );
}

export default App;