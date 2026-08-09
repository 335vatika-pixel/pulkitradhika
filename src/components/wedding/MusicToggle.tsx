import { useEffect, useRef, useState } from "react";
import { config } from "@/config";

export function MusicToggle({ active }: { active: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    if (!active) {
      el.pause();
      setPlaying(false);
      return;
    }
    el.volume = 0.6;
    el.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [active]);


  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
      return;
    }
    try {
      await el.play();
      setPlaying(true);
    } catch {
      // No audio file supplied yet — the toggle stays ready for one.
      setPlaying(false);
    }
  };

  if (!active) return null;

  return (
    <>
      <audio ref={audioRef} src={config.musicFile} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Turn music off" : "Turn music on"}
        className={`music-btn ${playing ? "is-playing" : ""}`}
      >
        <span className="music-icon">{playing ? "♫" : "♪"}</span>
      </button>
    </>
  );
}
