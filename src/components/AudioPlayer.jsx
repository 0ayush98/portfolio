import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    let autoplaySucceeded = false;

    const attemptPlay = () => {
      if (autoplaySucceeded) return;
      
      if (audioRef.current && audioRef.current.paused) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
            autoplaySucceeded = true;
            removeListeners();
          }).catch((error) => {
            // Browser still blocking, waiting for stronger interaction
          });
        }
      }
    };

    const removeListeners = () => {
      document.removeEventListener('click', attemptPlay);
      document.removeEventListener('keydown', attemptPlay);
      document.removeEventListener('scroll', attemptPlay);
      document.removeEventListener('touchstart', attemptPlay);
    };

    // 1. Try to play immediately on mount
    attemptPlay();

    // 2. Bind listeners to catch the very first user interaction anywhere on the page
    document.addEventListener('click', attemptPlay);
    document.addEventListener('keydown', attemptPlay);
    document.addEventListener('scroll', attemptPlay);
    document.addEventListener('touchstart', attemptPlay);

    return () => {
      removeListeners();
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="glass bg-card/80 backdrop-blur-xl border border-border/80 shadow-2xl rounded-full p-2 flex items-center gap-3 hover:border-primary/50 transition-all duration-300">
        {/* Assumes a file named background.mp3 placed in the /public folder */}
        <audio ref={audioRef} src="/background.mp3" loop />
        
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20">
          <Music className={`w-5 h-5 ${isPlaying ? 'animate-bounce' : ''}`} />
        </div>
        
        <div className="max-w-0 md:max-w-xs overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap opacity-0 md:opacity-100 group-hover:opacity-100 pr-2">
          <p className="text-sm font-semibold text-foreground tracking-tight">Vibe Track</p>
          <p className="text-xs text-muted-foreground font-medium">{isPlaying ? 'Playing...' : 'Paused'}</p>
        </div>

        <button 
          onClick={togglePlay}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 hover:bg-primary/90 transition-all duration-300 shadow-md ml-auto"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause size={18} fill="currentColor" />
          ) : (
            <Play size={18} fill="currentColor" className="ml-1" />
          )}
        </button>
      </div>
    </motion.div>
  );
}
