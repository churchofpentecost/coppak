"use client";

import { useEffect, useState } from "react";

/**
 * Cinematic homepage video hero. YouTube is used as the background stream
 * until the original MP4 has been published to a permanent site asset URL.
 * A real ministry photograph remains visible while loading, on small screens,
 * and for visitors who prefer reduced motion.
 */
export default function HomeHero() {
  const [allowVideo, setAllowVideo] = useState(false);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    const update = () => setAllowVideo(!reducedMotion.matches && desktop.matches);
    update();
    reducedMotion.addEventListener("change", update);
    desktop.addEventListener("change", update);
    return () => {
      reducedMotion.removeEventListener("change", update);
      desktop.removeEventListener("change", update);
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/styles/pages/home-hero.css" />
      <section className="home-hero home-hero--video" aria-label="Welcome to The Church of Pentecost Pakistan">
        <div className="home-hero__scene">
          <img
            className="home-hero__image is-current"
            src="/assets/images/coppak/outreach/mass-evangelism/01.jpg"
            alt=""
            aria-hidden="true"
            width="1600"
            height="1200"
            fetchPriority="high"
          />
          {allowVideo && playing && (
            <div className="home-hero__video-wrap" aria-hidden="true">
              <iframe
                title="Mass evangelism ministry footage"
                src="https://www.youtube-nocookie.com/embed/d43Aza_YUK8?autoplay=1&mute=1&controls=0&loop=1&playlist=d43Aza_YUK8&playsinline=1&rel=0&disablekb=1"
                tabIndex={-1}
                allow="autoplay; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          )}
          <div className="home-hero__shade" aria-hidden="true" />
          <div className="home-hero__shell home-hero__content">
            <p className="home-hero__eyebrow">
              <span aria-hidden="true" />
              THE CHURCH OF PENTECOST PAKISTAN
            </p>
            <h1 id="home-hero-title">
              Rooted in faith.
              <br />
              Reaching with <em>love.</em>
            </h1>
            <p className="home-hero__intro">
              A Spirit-led church sharing the Gospel, nurturing disciples
              and bringing hope to communities across Pakistan.
            </p>
            <div className="home-hero__actions">
              <a className="home-hero__button" href="/church-services">
                Worship with us <span aria-hidden="true">↗</span>
              </a>
              <a className="home-hero__story" href="/about">
                Discover our story <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="home-hero__video-actions">
              <a
                href="https://www.youtube.com/watch?v=d43Aza_YUK8"
                target="_blank"
                rel="noopener noreferrer"
                className="home-hero__watch"
              >
                <span aria-hidden="true">▶</span> Watch full video with sound
              </a>
              {allowVideo && (
                <button
                  type="button"
                  className="home-hero__video-toggle"
                  onClick={() => setPlaying((value) => !value)}
                  aria-label={playing ? "Pause background video" : "Play background video"}
                  aria-pressed={!playing}
                >
                  <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
                  {playing ? "Pause motion" : "Play motion"}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
