import { useState } from "react";

const reviews = [
  { client: "Aramco", quote: "AdaptrixAI transformed our data strategy! Their AI solutions delivered insights that drove real business growth." },
  { client: "Hertz", quote: "The AI models built by AdaptrixAI gave us a competitive edge. Fast, efficient, and highly accurate!" },
  { client: "THAI AIRWAYS", quote: "Exceptional analytics expertise! AdaptrixAI helped us optimize operations and make smarter decisions." },
  { client: "PLENTI", quote: "Brilliant AI consulting! Their team simplified complex data challenges and delivered impactful results." },
  { client: "ENERGYCORP", quote: "AdaptrixAI is a game-changer! Their data science capabilities helped us unlock new revenue opportunities." },
];

export default function ClientViews() {
  const [flipped, setFlipped] = useState(() => new Set([0]));

  function toggle(index) {
    setFlipped((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className="client-views" aria-label="Client views">
      {reviews.map(({ client, quote }, index) => (
        <button key={client} type="button" className={`client-flip-card${flipped.has(index) ? " is-flipped" : ""}`} onClick={() => toggle(index)} aria-label={`${client}: ${quote} Select to flip card`} aria-pressed={flipped.has(index)}>
          <span className="client-flip-inner">
            <span className="client-flip-face client-flip-front">
              <span className="client-flip-number">{String(index + 1).padStart(2, "0")} / 05</span>
              <span className="client-flip-name">{client}</span>
              <span className="client-flip-hint">Tap to read view ↗</span>
            </span>
            <span className="client-flip-face client-flip-back">
              <span className="client-flip-number">Client view / {String(index + 1).padStart(2, "0")}</span>
              <span className="client-flip-quote">“{quote}”</span>
              <span className="client-flip-hint">{client} · Tap to flip back</span>
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
