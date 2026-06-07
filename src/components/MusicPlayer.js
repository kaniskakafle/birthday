import { useEffect, useRef } from 'react';

export default function MusicPlayer({ trackKey, tracks, muted, onMuteToggle, onNext, visible }) {
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;
    const track = tracks[trackKey];
    if (!track) return;

    if (track.src) {
      if (audio.src !== window.location.origin + track.src) {
        audio.src = track.src;
        audio.loop = true;
        audio.volume = 0.4;
      }
      if (!muted) audio.play().catch(() => {});
      else audio.pause();
    } else {
      audio.pause();
    }
  }, [trackKey, tracks]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.muted = muted;
    if (!muted && audio.src) audio.play().catch(() => {});
    else if (muted) audio.pause();
  }, [muted]);

  // Try to play on first user gesture
  useEffect(() => {
    const resume = () => {
      const audio = audioRef.current;
      if (audio.src && !muted) audio.play().catch(() => {});
    };
    document.addEventListener('click', resume, { once: true });
    return () => document.removeEventListener('click', resume);
  }, []);

  if (!visible) return null;

  const track = tracks[trackKey];

  return (
    <div className="music-player">
      <button onClick={onMuteToggle} title={muted ? 'Unmute' : 'Mute'}>
        {muted ? '🔇' : '🔊'}
      </button>
      <span className="music-track-name">{track?.name || '♪'}</span>
      <button onClick={onNext} title="Next track">⏭</button>
    </div>
  );
}