import ContactFooter from "../components/ContactFooter";
import { SERVICES } from "../data/services";

export default function Services() {
  return (
    <>
      <section style={{ position: "relative", minHeight: "72vh", background: "#0A0C10", color: "#F6F5F2", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(120px, 18vh, 200px) clamp(16px, 4vw, 56px) clamp(56px, 8vh, 96px)", overflow: "hidden" }}>
        <img src={`${import.meta.env.BASE_URL}images/services/machine-deep-learning.jpg`} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: "0.36", filter: "saturate(0.55) contrast(1.06)" }} />
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(10,12,16,0.68) 0%, rgba(10,12,16,0.5) 45%, rgba(10,12,16,0.95) 100%)" }}></div>
        <div data-ax-blob="" style={{ position: "absolute", top: "-20%", right: "-10%", width: "58vw", height: "58vw", borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, oklch(0.62 0.13 195 / 0.42), transparent 62%)", filter: "blur(30px)", animation: "ax-drift 24s ease-in-out infinite reverse" }}></div>

        <div style={{ position: "relative", maxWidth: "1320px", width: "100%", margin: "0 auto" }}>
          <span data-ax-accent-fg="" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.74 0.13 195)" }}>Services</span>
          <h1 data-r="" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 800ms ease, transform 800ms cubic-bezier(0.22,1,0.36,1)", marginTop: "18px", fontSize: "clamp(38px, 7vw, 96px)", lineHeight: "0.98", maxWidth: "22ch" }}>Fifteen capabilities, one delivery team.</h1>
          <p data-r="" data-d="120" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "24px", maxWidth: "56ch", fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: "1.6", color: "rgba(246,245,242,0.72)", fontWeight: "300" }}>From AI strategy and agentic systems through to the frontend, backend and cloud infrastructure around them, every service below is delivered by the same senior team — no handoffs between a consultancy, a dev shop and an MLOps vendor.</p>
        </div>
      </section>

      <section style={{ background: "#F6F5F2", padding: "clamp(56px, 9vh, 104px) clamp(16px, 4vw, 56px) clamp(64px, 10vh, 120px)" }}>
        <div className="services-list">
          {SERVICES.map((s, i) => (
            <article className="service-card" key={s.n} id={`service-${s.slug}`} data-r="" data-d={String(Math.min(i * 60, 240))} style={{ opacity: "0", transform: "translateY(28px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), border-color 300ms ease", border: "1px solid rgba(10,12,16,0.14)" }} data-hover="border-color: rgba(10,12,16,0.4);">
              <div className="service-card-media">
                <img src={s.img} alt={s.alt} loading="lazy" decoding="async" width="1100" height="825" style={{ objectPosition: s.imagePosition || "center" }} />
              </div>
              <div className="service-card-content">
                <span data-ax-accent-fg="" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "oklch(0.74 0.13 195)" }}>{s.n}</span>
                <h2 style={{ fontSize: "clamp(22px, 2.4vw, 32px)" }}>{s.title}</h2>
                <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgba(10,12,16,0.62)", fontWeight: "300", maxWidth: "58ch" }}>{s.desc}</p>
                <ul style={{ margin: "4px 0 0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {s.points.map((p) => (
                    <li key={p} style={{ padding: "8px 14px", border: "1px solid rgba(10,12,16,0.16)", borderRadius: "999px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.04em", color: "rgba(10,12,16,0.62)" }}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "#0A0C10", color: "#F6F5F2", padding: "clamp(64px, 11vh, 132px) clamp(16px, 4vw, 56px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "clamp(32px, 6vw, 88px)", alignItems: "start" }}>
          <div style={{ position: "sticky", top: "108px" }}>
            <span data-ax-accent-fg="" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.74 0.13 195)" }}>How we deliver</span>
            <h2 style={{ marginTop: "18px", fontSize: "clamp(28px, 3.6vw, 50px)", lineHeight: "1.06", maxWidth: "18ch" }}>Every service runs on the same delivery spine</h2>
            <p style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.6", color: "rgba(246,245,242,0.62)", maxWidth: "40ch", fontWeight: "300" }}>Whichever capability you start with, the phases and the people stay the same.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 3vh, 28px)" }}>
            <article data-r="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", border: "1px solid rgba(246,245,242,0.16)", padding: "clamp(24px, 3vw, 38px)" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(246,245,242,0.45)" }}>STEP 01</span>
              <h3 style={{ marginTop: "14px", fontSize: "clamp(20px, 2.2vw, 26px)" }}>Scope &amp; feasibility</h3>
              <p style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.6", color: "rgba(246,245,242,0.62)", fontWeight: "300" }}>A short paid discovery to confirm the data, constraints and business case exist before we commit to a build.</p>
            </article>
            <article data-r="" data-d="90" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", border: "1px solid rgba(246,245,242,0.16)", padding: "clamp(24px, 3vw, 38px)" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(246,245,242,0.45)" }}>STEP 02</span>
              <h3 style={{ marginTop: "14px", fontSize: "clamp(20px, 2.2vw, 26px)" }}>Build &amp; evaluate</h3>
              <p style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.6", color: "rgba(246,245,242,0.62)", fontWeight: "300" }}>Iterative delivery against agreed metrics, with working software you can see and test early.</p>
            </article>
            <article data-r="" data-d="180" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", border: "1px solid rgba(246,245,242,0.16)", padding: "clamp(24px, 3vw, 38px)" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(246,245,242,0.45)" }}>STEP 03</span>
              <h3 style={{ marginTop: "14px", fontSize: "clamp(20px, 2.2vw, 26px)" }}>Deploy, monitor, hand over</h3>
              <p style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.6", color: "rgba(246,245,242,0.62)", fontWeight: "300" }}>Production deployment with monitoring and retraining, documented for your own engineers to own.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="pricing" style={{ background: "#F6F5F2", padding: "clamp(64px, 11vh, 132px) clamp(16px, 4vw, 56px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <h2 data-r="" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", fontSize: "clamp(28px, 4vw, 54px)", lineHeight: "1.04", maxWidth: "20ch" }}>Engagement models <em style={{ fontWeight: "400" }}>that fit the work</em></h2>
          <p data-r="" data-d="100" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "18px", maxWidth: "48ch", fontSize: "16px", lineHeight: "1.6", color: "rgba(10,12,16,0.62)", fontWeight: "300" }}>Clear scope, clear rate, no hidden surprises. Most clients start with one service and expand once it pays for itself.</p>
          <div style={{ marginTop: "clamp(32px, 5vh, 60px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "clamp(14px, 2vw, 24px)" }}>
            <article data-r="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), border-color 300ms ease", border: "1px solid rgba(10,12,16,0.16)", padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "14px", minHeight: "240px" }} data-hover="border-color: rgba(10,12,16,0.5);">
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(10,12,16,0.45)" }}>MODEL 01</span>
              <h3 style={{ fontSize: "clamp(20px, 2.1vw, 28px)" }}>Fixed-scope build</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "rgba(10,12,16,0.62)", fontWeight: "300" }}>One agreed price, timeline and deliverable set for a defined proof of concept or a single service above.</p>
            </article>
            <article data-r="" data-d="100" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), border-color 300ms ease", border: "1px solid rgba(10,12,16,0.16)", padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "14px", minHeight: "240px" }} data-hover="border-color: rgba(10,12,16,0.5);">
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(10,12,16,0.45)" }}>MODEL 02</span>
              <h3 style={{ fontSize: "clamp(20px, 2.1vw, 28px)" }}>Time &amp; materials</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "rgba(10,12,16,0.62)", fontWeight: "300" }}>Pay for the hours used as requirements evolve — best for discovery and ongoing model improvement.</p>
            </article>
            <article data-r="" data-d="200" data-ax-accent-panel="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", background: "oklch(0.74 0.13 195)", color: "#0A0C10", padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "14px", minHeight: "240px" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(10,12,16,0.6)" }}>MODEL 03</span>
              <h3 style={{ fontSize: "clamp(20px, 2.1vw, 28px)" }}>Dedicated pod</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "rgba(10,12,16,0.72)", fontWeight: "400" }}>A standing team spanning multiple services above, embedded with yours for continuous delivery.</p>
            </article>
          </div>
        </div>
      </section>

      <ContactFooter heading="Tell us which service to start with." />
    </>
  );
}
