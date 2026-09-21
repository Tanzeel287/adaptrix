import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Browser adaptation of the rotating carousel concept from reactvideoeditor.com.
export default function ServicesCarousel({ items, category }) {
  const stageRef = useRef(null);
  const cardsRef = useRef([]);
  const angleRef = useRef(0);
  const paintRef = useRef(() => {});
  const visibleRef = useRef(false);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const stageId = useId();
  const step = (Math.PI * 2) / items.length;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const paint = () => {
      const width = stage.clientWidth;
      const cardWidth = cardsRef.current[0]?.offsetWidth || 280;
      const radius = Math.max(0, Math.min(650, (width - cardWidth) / 2 - 12));
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const offset = Math.atan2(Math.sin(angleRef.current + index * step), Math.cos(angleRef.current + index * step));
        const angle = offset * Math.max(1, items.length / 5);
        card.style.visibility = Math.abs(offset) <= step * 2.5 ? "visible" : "hidden";
        const depth = (Math.cos(angle) + 1) / 2;
        card.style.transform = `translate(-50%, -50%) translate(${Math.sin(angle) * radius}px, ${(1 - depth) * -24}px) scale(${0.65 + depth * 0.35})`;
        card.style.opacity = String(0.25 + depth * 0.75);
        card.style.zIndex = String(Math.round(depth * 100));
      });
      const next = ((Math.round(-angleRef.current / step) % items.length) + items.length) % items.length;
      if (next !== activeRef.current) {
        activeRef.current = next;
        setActive(next);
      }
    };
    paintRef.current = paint;
    const resize = new ResizeObserver(paint);
    resize.observe(stage);
    const observer = new IntersectionObserver(([entry]) => { visibleRef.current = entry.isIntersecting; });
    observer.observe(stage);
    paint();
    return () => { resize.disconnect(); observer.disconnect(); paintRef.current = () => {}; };
  }, [items.length, step]);

  useEffect(() => {
    if (!playing || hovered || focused || reducedMotion) return;
    let frame;
    let previous;
    const tick = (now) => {
      if (previous !== undefined && visibleRef.current && !document.hidden) {
        angleRef.current -= Math.min(now - previous, 50) * (step / 6500);
        paintRef.current();
      }
      previous = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, hovered, focused, reducedMotion, step]);

  const select = (index) => {
    angleRef.current = -index * step;
    paintRef.current();
  };
  const move = (direction) => {
    setPlaying(false);
    select((activeRef.current + direction + items.length) % items.length);
  };

  return (
    <div className="services-carousel" role="region" aria-roledescription="carousel" aria-label={`${category} services`}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}>
      <div className="services-carousel-glow" aria-hidden="true" />
      <div className="services-carousel-stage" id={stageId} ref={stageRef}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
        {items.map((service, index) => (
          <Link key={service.slug} ref={(node) => { cardsRef.current[index] = node; }}
            className={`services-carousel-card${active === index ? " is-front" : ""}`}
            to={`/services#service-${service.slug}`}
            aria-label={`${service.title} — view service`}
            onFocus={() => select(index)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={(event) => {
              if (activeRef.current !== index) { event.preventDefault(); select(index); setPlaying(false); }
            }}>
            <div className="services-carousel-image">
              <img src={service.img} alt={service.alt} loading="lazy" decoding="async" style={{ objectPosition: service.imagePosition || "center" }} />
              <span className="services-carousel-number">{service.n} / EXPERTISE</span>
            </div>
            <div className="services-carousel-copy">
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
              <span className="services-carousel-cta">Explore service <span aria-hidden="true">↗</span></span>
            </div>
          </Link>
        ))}
      </div>
      <div className="services-carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label={`Previous ${category} service`} aria-controls={stageId}>←</button>
        <div className="services-carousel-dots" aria-label="Choose a service">
          {items.map((service, index) => (
            <button type="button" key={service.slug} aria-label={`Show ${service.title}`} aria-current={index === active ? "true" : undefined}
              onClick={() => { setPlaying(false); select(index); }}><span /></button>
          ))}
        </div>
        <button type="button" onClick={() => move(1)} aria-label={`Next ${category} service`} aria-controls={stageId}>→</button>
        {!reducedMotion && <button className="services-carousel-play" type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pause automatic rotation" : "Start automatic rotation"} aria-controls={stageId}>{playing ? "Pause" : "Play"}</button>}
      </div>
      <p className="services-carousel-caption">{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")} <span>·</span> {items[active].title}</p>
    </div>
  );
}
