"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";

const slides = [
  {
    name: "Our mission",
    image: "/assets/images/coppak/outreach/mass-evangelism/01.jpg",
    alt: "An open-air Gospel gathering with The Church of Pentecost Pakistan",
    firstLine: "Rooted in faith.",
    secondLine: "Reaching with",
    emphasis: "love.",
    eyebrow: "THE CHURCH OF PENTECOST PAKISTAN",
    description:
      "A Spirit-led church sharing the Gospel, nurturing disciples and bringing hope to communities across Pakistan.",
    primaryLabel: "Worship with us",
    primaryHref: "/church-services",
    secondaryLabel: "Discover our story",
    secondaryHref: "/about",
    note: "THE GOSPEL BEYOND OUR WALLS",
    caption: "Pakistan. A people full of hope.",
  },
  {
    name: "Worship together",
    image: "/assets/images/coppak/services/sunday/01.jpg",
    alt: "The COPPAK congregation and worship team praying together during a Sunday service",
    firstLine: "Together in worship.",
    secondLine: "Growing in",
    emphasis: "faith.",
    eyebrow: "A CHURCH FAMILY FOR EVERY GENERATION",
    description:
      "Gather with us in worship, prayer and the Word of God. Wherever you are in your journey, there is a place for you in our church family.",
    primaryLabel: "Explore our services",
    primaryHref: "/church-services",
    secondaryLabel: "Find a ministry",
    secondaryHref: "/ministries",
    note: "GATHERED IN HIS NAME",
    caption: "One family. Growing together.",
  },
  {
    name: "Compassion in action",
    image: "/assets/images/coppak/projects/brick-kiln/01.jpg",
    alt: "COPPAK standing alongside families in a brick-kiln community in Pakistan",
    firstLine: "Compassion in action.",
    secondLine: "Restoring",
    emphasis: "hope.",
    eyebrow: "LOVE THAT REACHES PEOPLE",
    description:
      "From free medical camps to support for brick-kiln families, our faith moves us to serve, restore dignity and walk alongside people in need.",
    primaryLabel: "Explore our projects",
    primaryHref: "/projects",
    secondaryLabel: "Give with purpose",
    secondaryHref: "/donate",
    note: "FAITH IN EVERYDAY LIFE",
    caption: "Serving communities with love.",
  },
];

export default function HomeHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const slide = slides[active];

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPaused(motion.matches);
    const stopForReducedMotion = () => {
      if (motion.matches) setPaused(true);
    };
    const updateVisibility = () => setPageHidden(document.hidden);
    updateVisibility();
    motion.addEventListener("change", stopForReducedMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      motion.removeEventListener("change", stopForReducedMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (paused || hovered || pageHidden) return;
    const timer = window.setInterval(
      () => setActive((index) => (index + 1) % slides.length),
      7000,
    );
    return () => window.clearInterval(timer);
  }, [paused, hovered, pageHidden]);

  function selectSlide(index: number) {
    setPaused(true);
    setActive((index + slides.length) % slides.length);
  }

  function finishSwipe(event: PointerEvent<HTMLDivElement>) {
    if (!touchStart.current) return;
    const dx = event.clientX - touchStart.current.x;
    const dy = event.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.2)
      selectSlide(active + (dx < 0 ? 1 : -1));
  }

  return (
    <>
      <link rel="stylesheet" href="/styles/pages/home-hero.css" />
      <section className="home-hero" aria-label="Church life and mission">
        <div
          className="home-hero__scene"
          role="region"
          aria-roledescription="carousel"
          aria-label="COPPAK highlights"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={(event) => {
            if (
              !event.currentTarget.contains(event.relatedTarget) &&
              !(event.target as HTMLElement).closest(".home-hero__play")
            )
              setPaused(true);
          }}
          onKeyDown={(event) => {
            if (event.altKey || event.ctrlKey || event.metaKey) return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              selectSlide(active + (event.key === "ArrowRight" ? 1 : -1));
            }
          }}
          onPointerDown={(event) => {
            if (
              event.pointerType === "touch" &&
              !(event.target as HTMLElement).closest("a,button")
            )
              touchStart.current = { x: event.clientX, y: event.clientY };
          }}
          onPointerUp={finishSwipe}
          onPointerCancel={() => {
            touchStart.current = null;
          }}
        >
          {slides.map((item, index) => (
            <img
              key={item.image}
              className={`home-hero__image home-hero__image--slide${index} ${index === active ? "is-current" : ""}`}
              src={item.image}
              alt=""
              aria-hidden="true"
              width={1600}
              height={1200}
              fetchPriority={index === 0 ? "high" : "low"}
            />
          ))}
          <div className="home-hero__shade" aria-hidden="true" />
          <div
            className="home-hero__shell home-hero__content"
            id="home-hero-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${active + 1} of ${slides.length}: ${slide.name}`}
            aria-live={paused ? "polite" : "off"}
            aria-atomic="true"
          >
            <p className="home-hero__eyebrow">
              <span aria-hidden="true" />
              {slide.eyebrow}
            </p>
            <h1 id="home-hero-title">
              {slide.firstLine}
              <br />
              {slide.secondLine} <em>{slide.emphasis}</em>
            </h1>
            <p className="home-hero__intro">{slide.description}</p>
            <div className="home-hero__actions">
              <a className="home-hero__button" href={slide.primaryHref}>
                {slide.primaryLabel} <span aria-hidden="true">↗</span>
              </a>
              <a className="home-hero__story" href={slide.secondaryHref}>
                {slide.secondaryLabel} <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="home-hero__community">
              <span>71 assemblies</span>
              <span>8 districts</span>
              <span>One mission</span>
            </div>
          </div>
          <div className="home-hero__photo-note">
            <span className="home-hero__photo-line" aria-hidden="true" />
            <span>
              {slide.note}
              <br />
              <strong>{slide.caption}</strong>
            </span>
          </div>
          <div
            className="home-hero__controls home-hero__shell"
            role="group"
            aria-label="Slideshow controls"
          >
            <button
              type="button"
              className="home-hero__control"
              onClick={() => selectSlide(active - 1)}
              aria-label="Previous slide"
              aria-controls="home-hero-slide"
            >
              <span aria-hidden="true">←</span>
            </button>
            <div
              className="home-hero__dots"
              role="group"
              aria-label="Choose a slide"
            >
              {slides.map((item, index) => (
                <button
                  type="button"
                  key={item.name}
                  className="home-hero__dot"
                  aria-label={`Show slide ${index + 1}: ${item.name}`}
                  aria-current={index === active ? "true" : undefined}
                  aria-controls="home-hero-slide"
                  onClick={() => selectSlide(index)}
                >
                  <span />
                </button>
              ))}
            </div>
            <button
              type="button"
              className="home-hero__control"
              onClick={() => selectSlide(active + 1)}
              aria-label="Next slide"
              aria-controls="home-hero-slide"
            >
              <span aria-hidden="true">→</span>
            </button>
            <span className="home-hero__slide-count" aria-hidden="true">
              0{active + 1} / 0{slides.length}
            </span>
            <button
              type="button"
              className="home-hero__control home-hero__play"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            >
              <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
            </button>
          </div>
        </div>
        <div className="home-hero__pathways">
          <div className="home-hero__shell home-hero__pathways-grid">
            <a href="/ministries">
              <span className="home-hero__pathway-number">01</span>
              <div>
                <span className="home-hero__pathway-label">GROW TOGETHER</span>
                <h2>Find your place.</h2>
                <p>A church family for every generation.</p>
              </div>
              <span className="home-hero__pathway-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="/outreach">
              <span className="home-hero__pathway-number">02</span>
              <div>
                <span className="home-hero__pathway-label">
                  FAITH IN ACTION
                </span>
                <h2>See our mission.</h2>
                <p>Sharing the Gospel. Serving people.</p>
              </div>
              <span className="home-hero__pathway-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="/donate">
              <span className="home-hero__pathway-number">03</span>
              <div>
                <span className="home-hero__pathway-label">
                  MAKE A DIFFERENCE
                </span>
                <h2>Give with purpose.</h2>
                <p>Stand alongside families and communities.</p>
              </div>
              <span className="home-hero__pathway-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
