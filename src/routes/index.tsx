import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { config } from "@/config";
import { OpeningGate } from "@/components/wedding/OpeningGate";
import { Petals } from "@/components/wedding/Petals";
import { Reveal } from "@/components/wedding/Reveal";
import { Countdown } from "@/components/wedding/Countdown";
import { MusicToggle } from "@/components/wedding/MusicToggle";
import lotus from "@/assets/lotus.jpg";
import temple from "@/assets/temple.jpg";
import shivparvati from "@/assets/shivparvati.jpg";
import mandap from "@/assets/mandap.jpg";
import night from "@/assets/night.jpg";
import prLogo from "@/assets/pr-logo.png";

const title = "Pulkit & Radhika — Varmala and Vows | 13 Sept 2026";
const description =
  "With the blessings of Lord Shiva & Maa Parvati, Pulkit Arora & Radhika Arora invite you to Varmala and Vows — Sunday, 13 September 2026, Siddhartha Resorts, Ludhiana.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

function Ornament() {
  return (
    <div className="my-5 flex items-center justify-center gap-3">
      <span className="gold-rule w-12" />
      <span className="text-[var(--gold)]">❁</span>
      <span className="gold-rule w-12" />
    </div>
  );
}

function Names({ className = "" }: { className?: string }) {
  return (
    <p className={`font-display tracking-[0.2em] text-gold-foil ${className}`}>
      {config.groomShort} &amp; {config.brideShort}
    </p>
  );
}

function Invitation() {
  const [loaded, setLoaded] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 1400);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.mapsQuery)}`;
  const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappMessage)}`;

  return (
    <main className="relative bg-[var(--ivory)]">
      {/* Loading screen */}
      <div
        className={`fixed inset-0 z-[80] grid place-items-center bg-[var(--ivory)] transition-opacity duration-700 ${
          loaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center">
          <img
            src={prLogo}
            alt="P & R monogram"
            width={1024}
            height={1024}
            className="mx-auto h-20 w-20 object-contain"
          />
          <p className="kicker mt-4">{config.weddingTitle}</p>
        </div>
      </div>

      {!entered && loaded && <OpeningGate onEnter={() => setEntered(true)} />}

      <MusicToggle active={entered} />

      {/* 2 — Lotus */}
      <section className="scene bg-[var(--sage-deep)]">
        <img
          src={lotus}
          alt="Pink lotus in bloom"
          width={896}
          height={1408}
          className="drift-slow absolute inset-0 h-full w-full object-cover"
        />
        <div className="scene-veil bg-[linear-gradient(to_bottom,oklch(0.35_0.04_130/0.7),oklch(0.35_0.04_130/0.15)_40%,oklch(0.4_0.04_130/0.6))]" />
        <Petals variant="gold" />
        <Reveal className="relative z-10">
          <p className="kicker">SHUBH VIVAH</p>
          <h2 className="mt-4 font-script text-3xl italic text-[var(--ivory)]">
            A new beginning blossoms
          </h2>
        </Reveal>
      </section>

      {/* 3 — Antique scroll */}
      <section className="scene night-panel">
        <div className="relative z-10 w-full max-w-[24rem]">
          <Reveal>
            <div className="scroll-rod mx-2" />
            <div className="parchment filigree-frame px-6 py-10">
              <img
                src={prLogo}
                alt="P & R monogram"
                loading="lazy"
                width={1024}
                height={1024}
                className="mx-auto mb-4 h-16 w-16 object-contain"
              />
              <p className="font-display text-[0.72rem] tracking-[0.34em] text-[var(--gold)]">
                {config.weddingTitle}
              </p>
              <Ornament />
              <p className="whitespace-pre-line font-body text-[0.95rem] italic leading-relaxed text-[var(--gold-soft)]">
                {config.scroll.intro}
              </p>
              <p className="mt-6 font-display text-lg leading-relaxed tracking-[0.12em] text-gold-foil">
                {config.groomName}
                <span className="my-1 block font-script text-xl italic tracking-normal">
                  &amp;
                </span>
                {config.brideName}
              </p>
              <p className="mt-6 whitespace-pre-line font-body text-[0.95rem] italic leading-relaxed text-[var(--gold-soft)]">
                {config.scroll.outro}
              </p>
              <Ornament />
              <p className="font-display text-[0.7rem] tracking-[0.3em] text-[var(--gold)]">
                {config.day}
                <span className="mt-1 block text-[0.8rem] text-[var(--gold-soft)]">
                  {config.date}
                </span>
              </p>
              <p className="mt-5 font-display text-[0.68rem] leading-relaxed tracking-[0.24em] text-[var(--gold-soft)]">
                {config.venue}
                <span className="mt-1 block opacity-80">
                  {config.venueAddress}
                </span>
              </p>
              <p className="mt-5 font-display text-[0.6rem] tracking-[0.34em] text-[var(--gold)]">
                RSVP
                <span className="mt-1 block text-[0.75rem] text-[var(--gold-soft)]">
                  {config.rsvpNumber}
                </span>
              </p>
            </div>
            <div className="scroll-rod mx-2" />
          </Reveal>
        </div>
      </section>


      {/* 4 — Family blessings / temple */}
      <section className="scene">
        <img
          src={temple}
          alt="Indian temple pavilion beside a lotus pond at sunrise"
          loading="lazy"
          width={896}
          height={1408}
          className="drift-slow absolute inset-0 h-full w-full object-cover"
        />
        <div className="scene-veil bg-[linear-gradient(to_bottom,oklch(0.2_0.03_55/0.72),oklch(0.2_0.03_55/0.1)_45%,oklch(0.25_0.03_55/0.65))]" />
        <div className="relative z-10 flex h-full w-full flex-col justify-between gap-40 py-6">
          <Reveal>
            <h2 className="whitespace-pre-line font-display text-lg leading-relaxed tracking-[0.24em] text-[var(--ivory)]">
              {config.blessings.heading}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <Names className="text-xl" />
            <p className="mt-4 whitespace-pre-line font-body text-[0.95rem] italic leading-relaxed text-[var(--ivory)]">
              {config.blessings.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5 — Shiv & Parvati */}
      <section className="scene">
        <img
          src={shivparvati}
          alt="Classical devotional artwork of Shiva and Parvati"
          loading="lazy"
          width={896}
          height={1408}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="scene-veil bg-[linear-gradient(to_top,oklch(0.2_0.03_60/0.85),transparent_55%)]" />
        <Petals variant="gold" />
        <div className="relative z-10 mt-auto">
          <Reveal>
            <p className="whitespace-pre-line font-script text-xl italic leading-relaxed text-[var(--ivory)]">
              {config.divine.body}
            </p>
            <Ornament />
            <Names className="text-base" />
          </Reveal>
        </div>
      </section>

      {/* 6 — Wedding details */}
      <section className="scene night-panel">
        <Reveal className="relative z-10 w-full max-w-[22rem]">
          <div className="filigree-frame px-6 py-12">
            <h2 className="whitespace-pre-line font-display text-base leading-relaxed tracking-[0.3em] text-[var(--gold)]">
              {config.details.heading}
            </h2>
            <Ornament />
            <p className="font-display text-xl leading-relaxed tracking-[0.14em] text-gold-foil">
              {config.groomName}
              <span className="my-1 block font-script text-2xl italic tracking-normal text-[var(--gold-soft)]">
                &amp;
              </span>
              {config.brideName}
            </p>
            <Ornament />
            <p className="font-display text-2xl tracking-[0.14em] text-[var(--gold-soft)]">
              {config.date}
            </p>
            <p className="mt-2 kicker">{config.day}</p>
            <div className="gold-rule my-6" />
            <p className="font-display text-[0.72rem] leading-relaxed tracking-[0.24em] text-[var(--gold-soft)]">
              {config.venue}
              <span className="mt-1 block opacity-80">
                {config.venueAddress}
              </span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* Countdown */}
      <section className="scene night-panel">
        <Petals variant="gold" />
        <Reveal className="relative z-10 w-full max-w-[22rem]">
          <h2 className="whitespace-pre-line font-display text-base leading-relaxed tracking-[0.3em] text-[var(--gold)]">
            {config.countdown.heading}
          </h2>
          <Ornament />
          <Countdown />
        </Reveal>
      </section>


      {/* 7 — Varmala and Vows */}
      <section className="scene">
        <img
          src={mandap}
          alt="Floral wedding mandap at sunset"
          loading="lazy"
          width={896}
          height={1408}
          className="drift-slow absolute inset-0 h-full w-full object-cover"
        />
        <div className="scene-veil bg-[linear-gradient(to_bottom,oklch(0.2_0.03_55/0.7),oklch(0.2_0.03_55/0.1)_40%,oklch(0.24_0.03_55/0.7))]" />
        <div className="relative z-10 flex w-full flex-col justify-between gap-44">
          <Reveal>
            <h2 className="font-display text-lg tracking-[0.3em] text-[var(--ivory)]">
              {config.varmala.heading}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="whitespace-pre-line font-script text-2xl italic leading-relaxed text-[var(--ivory)]">
              {config.varmala.body}
            </p>
            <Ornament />
            <Names className="text-base" />
          </Reveal>
        </div>
      </section>

      {/* 8 — Venue */}
      <section className="scene night-panel">
        <img
          src={temple}
          alt="Royal resort pavilion"
          loading="lazy"
          width={896}
          height={1408}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="scene-veil bg-[linear-gradient(to_bottom,oklch(0.14_0.015_55/0.85),oklch(0.12_0.015_55/0.7)_45%,oklch(0.14_0.015_55/0.9))]" />
        <Petals variant="gold" />
        <Reveal className="relative z-10 w-full max-w-[22rem]">
          <div className="mughal-arch filigree-frame px-6 py-12">
            <p className="kicker">THE VENUE</p>
            <h2 className="mt-4 font-display text-2xl tracking-[0.16em] text-gold-foil">
              {config.venue}
            </h2>
            <p className="mt-3 font-display text-[0.72rem] tracking-[0.28em] text-[var(--gold-soft)] opacity-85">
              {config.venueAddress}
            </p>
            <Ornament />
            <a
              className="btn-royal"
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              {config.venuePage.cta}
            </a>
          </div>
        </Reveal>
      </section>



      {/* 9 — RSVP */}
      <section className="scene night-panel">
        <Petals variant="gold" />
        <Reveal className="relative z-10 w-full max-w-[22rem]">
          <h2 className="whitespace-pre-line font-display text-base leading-relaxed tracking-[0.28em] text-[var(--gold)]">
            {config.rsvp.heading}
          </h2>
          <Ornament />
          <p className="whitespace-pre-line font-body text-[1rem] italic leading-relaxed text-[var(--gold-soft)]">
            {config.rsvp.body}
          </p>
          <p className="mt-8 kicker">RSVP</p>
          <a
            href={`tel:${config.rsvpNumber}`}
            className="mt-2 block font-display text-xl tracking-[0.18em] text-[var(--gold-soft)]"
          >
            {config.rsvpNumber}
          </a>

          <a
            className="btn-royal mt-8"
            href={waUrl}
            target="_blank"
            rel="noreferrer"
          >
            {config.rsvp.cta}
          </a>
        </Reveal>
      </section>

      {/* 10 — Final */}
      <section className="scene">
        <img
          src={night}
          alt="Temple silhouette with floating diyas at night"
          loading="lazy"
          width={896}
          height={1408}
          className="drift-slow absolute inset-0 h-full w-full object-cover"
        />
        <div className="scene-veil bg-[linear-gradient(to_bottom,oklch(0.15_0.04_265/0.6),oklch(0.12_0.04_265/0.75))]" />
        <Petals variant="gold" />
        <Reveal className="relative z-10">
          <img
            src={prLogo}
            alt="P & R monogram"
            loading="lazy"
            width={1024}
            height={1024}
            className="mx-auto mb-6 h-20 w-20 object-contain"
          />
          <h2 className="whitespace-pre-line font-script text-2xl italic leading-relaxed text-[var(--gold-soft)]">
            {config.final.heading}
          </h2>
          <Ornament />
          <p className="font-display text-2xl leading-relaxed tracking-[0.18em] text-gold-foil">
            {config.groomShort}
            <span className="my-1 block font-script text-xl italic tracking-normal">
              &amp;
            </span>
            {config.brideShort}
          </p>
          <p className="mt-6 kicker">{config.weddingTitle}</p>
          <p className="mt-2 font-display text-sm tracking-[0.3em] text-[var(--ivory)]">
            {config.dateShort}
          </p>
          <p className="mt-8 text-2xl text-[var(--gold)]">ॐ</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-outline-gold mt-8"
          >
            BACK TO TOP
          </button>
        </Reveal>
      </section>
    </main>
  );
}
