import ContactFooter from "../components/ContactFooter";
import { INDUSTRIES } from "../data/industries";

export default function Industries() {
  return (
    <>
      <section style={{ position: "relative", minHeight: "72vh", background: "#0A0C10", color: "#F6F5F2", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(120px, 18vh, 200px) clamp(16px, 4vw, 56px) clamp(56px, 8vh, 96px)", overflow: "hidden" }}>
        <img src={INDUSTRIES[0].img} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: "0.36", filter: "saturate(0.55) contrast(1.06)" }} />
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(10,12,16,0.68) 0%, rgba(10,12,16,0.5) 45%, rgba(10,12,16,0.95) 100%)" }}></div>
        <div data-ax-blob="" style={{ position: "absolute", top: "-20%", right: "-10%", width: "58vw", height: "58vw", borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, oklch(0.62 0.13 195 / 0.42), transparent 62%)", filter: "blur(30px)", animation: "ax-drift 24s ease-in-out infinite reverse" }}></div>

        <div style={{ position: "relative", maxWidth: "1320px", width: "100%", margin: "0 auto" }}>
          <span data-ax-accent-fg="" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.74 0.13 195)" }}>Industries</span>
          <h1 data-r="" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 800ms ease, transform 800ms cubic-bezier(0.22,1,0.36,1)", marginTop: "18px", fontSize: "clamp(38px, 7vw, 96px)", lineHeight: "0.98", maxWidth: "20ch" }}>Sector depth, not generic models.</h1>
          <p data-r="" data-d="120" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "24px", maxWidth: "56ch", fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: "1.6", color: "rgba(246,245,242,0.72)", fontWeight: "300" }}>We shape AI solutions around the workflows, data and decisions that matter in each sector — built by the same senior delivery team across every engagement.</p>
        </div>
      </section>

      <section style={{ background: "#F6F5F2", padding: "clamp(56px, 9vh, 104px) clamp(16px, 4vw, 56px) clamp(64px, 10vh, 120px)" }}>
        <div className="services-list">
          {INDUSTRIES.map((industry, i) => (
            <article className="service-card" key={industry.slug} id={`industry-${industry.slug}`} data-r="" data-d={String(Math.min(i * 60, 240))} style={{ opacity: "0", transform: "translateY(28px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), border-color 300ms ease", border: "1px solid rgba(10,12,16,0.14)" }} data-hover="border-color: rgba(10,12,16,0.4);">
              <div className="service-card-media">
                <img src={industry.img} alt={industry.alt} loading="lazy" decoding="async" width="1100" height="825" style={{ objectPosition: industry.imagePosition || "center" }} />
              </div>
              <div className="service-card-content">
                <span data-ax-accent-fg="" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "oklch(0.74 0.13 195)" }}>{industry.n}</span>
                <h2 style={{ fontSize: "clamp(22px, 2.4vw, 32px)" }}>{industry.title}</h2>
                <p style={{ fontSize: "15px", lineHeight: "1.65", color: "rgba(10,12,16,0.62)", fontWeight: "300", maxWidth: "58ch" }}>{industry.desc}</p>
                <ul style={{ margin: "4px 0 0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {industry.points.map((p) => (
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
            <h2 style={{ marginTop: "18px", fontSize: "clamp(28px, 3.6vw, 50px)", lineHeight: "1.06", maxWidth: "18ch" }}>Every sector runs on the same delivery spine</h2>
            <p style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.6", color: "rgba(246,245,242,0.62)", maxWidth: "40ch", fontWeight: "300" }}>Whichever sector you start in, the phases, the governance and the people stay the same.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 3vh, 28px)" }}>
            <article data-r="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", border: "1px solid rgba(246,245,242,0.16)", padding: "clamp(24px, 3vw, 38px)" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(246,245,242,0.45)" }}>STEP 01</span>
              <h3 style={{ marginTop: "14px", fontSize: "clamp(20px, 2.2vw, 26px)" }}>Map the sector context</h3>
              <p style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.6", color: "rgba(246,245,242,0.62)", fontWeight: "300" }}>We learn the workflows, data sources and regulatory constraints specific to your sector before proposing a solution.</p>
            </article>
            <article data-r="" data-d="90" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", border: "1px solid rgba(246,245,242,0.16)", padding: "clamp(24px, 3vw, 38px)" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(246,245,242,0.45)" }}>STEP 02</span>
              <h3 style={{ marginTop: "14px", fontSize: "clamp(20px, 2.2vw, 26px)" }}>Prove it on your data</h3>
              <p style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.6", color: "rgba(246,245,242,0.62)", fontWeight: "300" }}>A focused proof of concept against metrics that matter in your sector, so the business case is settled before build.</p>
            </article>
            <article data-r="" data-d="180" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", border: "1px solid rgba(246,245,242,0.16)", padding: "clamp(24px, 3vw, 38px)" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(246,245,242,0.45)" }}>STEP 03</span>
              <h3 style={{ marginTop: "14px", fontSize: "clamp(20px, 2.2vw, 26px)" }}>Deploy, monitor, hand over</h3>
              <p style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.6", color: "rgba(246,245,242,0.62)", fontWeight: "300" }}>Production deployment with monitoring and retraining, documented for your own engineers to own.</p>
            </article>
          </div>
        </div>
      </section>

      <ContactFooter heading="Tell us which sector to start with." />
    </>
  );
}
