"use client";

import { useEffect, useState } from "react";

/**
 * Cinematic homepage video hero with a locally hosted ministry MP4.
 * A ministry photograph remains visible while loading, if video fails,
 * and for visitors who prefer reduced motion.
 */
export default function HomeHero() {
  const [allowVideo, setAllowVideo] = useState(false);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowVideo(!reducedMotion.matches);
    update();
    reducedMotion.addEventListener("change", update);
    return () => {
      reducedMotion.removeEventListener("change", update);
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
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/assets/images/coppak/outreach/mass-evangelism/01.jpg"
                onError={() => setPlaying(false)}
              >
                <source src="/assets/video/mass-evangelism-hero.mp4" type="video/mp4" />
              </video>
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
                href="/assets/video/mass-evangelism-hero.mp4"
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
