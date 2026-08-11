import { useState } from "react";
import { config } from "@/config";
import { Petals } from "./Petals";
import gate from "@/assets/gate.jpg";
import prLogo from "@/assets/pr-logo.png";

export function OpeningGate({ onEnter }: { onEnter: () => void }) {
  const [opened, setOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const enter = () => {
    setOpened(true);
    setTimeout(() => setLeaving(true), 1500);
    setTimeout(onEnter, 3000);
  };

  return (
    <div
      className={`opening-shell ${opened ? "gates-open" : ""} ${leaving ? "is-leaving" : ""}`}
    >
      <div className="divine-glow" />
      <div className="scene-veil bg-[radial-gradient(circle_at_50%_65%,transparent_10%,oklch(0.62_0.05_60/0.35)_100%)]" />

      <div
        className="gate-panel gate-left"
        style={{ backgroundImage: `url(${gate})` }}
      />
      <div
        className="gate-panel gate-right"
        style={{ backgroundImage: `url(${gate})` }}
      />

      <Petals />

      <div
        style={{
          background:
            "radial-gradient(circle at 50% 48%, oklch(0.18 0.03 55 / 0.8), oklch(0.18 0.03 55 / 0.45))",
        }}
        className={`absolute inset-0 z-[8] transition-opacity duration-700 ${
          opened ? "opacity-0" : "opacity-100"
        }`}
      />

      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center px-8 text-center transition-opacity duration-700 ${
          opened ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={prLogo}
          alt="P & R monogram"
          width={1024}
          height={1024}
          className="mb-6 h-24 w-24 object-contain drop-shadow-[0_2px_8px_oklch(0.2_0.03_55/0.6)]"
        />

        <p className="max-w-[16rem] whitespace-pre-line font-body text-[1rem] italic leading-relaxed text-[var(--ivory)]">
          {config.opening.blessing}
        </p>


        <div className="my-6 h-px w-24 bg-[var(--gold)]" />

        <h1 className="font-display text-4xl leading-tight tracking-[0.12em] text-gold-foil drop-shadow-[0_2px_6px_oklch(0.3_0.05_60/0.4)]">
          {config.groomShort}
          <span className="my-1 block font-script text-2xl italic tracking-normal">
            &amp;
          </span>
          {config.brideShort}
        </h1>

        <p className="mt-6 font-display text-[0.7rem] tracking-[0.4em] text-[var(--gold-soft)]">
          {config.weddingTitle}
        </p>

        <button type="button" className="btn-royal mt-10" onClick={enter}>
          {config.opening.cta}
        </button>
      </div>
    </div>
  );
}
