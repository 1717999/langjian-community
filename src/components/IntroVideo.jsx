import { useState, useEffect, useRef } from 'react';
import './IntroVideo.css';

export default function IntroVideo({ videoSrc, onComplete }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log('Video autoplay failed:', err);
        onComplete?.();
      }
    };

    playVideo();
  }, [onComplete]);

  const handleEnded = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsPlaying(false);
      onComplete?.();
    }, 800);
  };

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsPlaying(false);
      onComplete?.();
    }, 300);
  };

  if (!isPlaying) return null;

  return (
    <div className={`intro-video ${isFading ? 'intro-video--fading' : ''}`}>
      <video
        ref={videoRef}
        className="intro-video__element"
        src={videoSrc}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
      />
      <button className="intro-video__skip" onClick={handleSkip}>
        跳过 →
      </button>
      <div className="intro-video__progress">
        <div className="intro-video__progress-bar" />
      </div>
    </div>
  );
}
