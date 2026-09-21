import { Link } from "react-router-dom";
import ContactFooter from "../components/ContactFooter";
import ClientViews from "../components/ClientViews";
import ServicesCarousel from "../components/ServicesCarousel";
import { SERVICES } from "../data/services";
import { INDUSTRIES } from "../data/industries";

export default function Home() {
  return (
    <>
      <section id="top" className="home-hero" style={{ position: "relative", minHeight: "100vh", background: "#0A0C10", color: "#F6F5F2", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(96px, 14vh, 160px) clamp(16px, 4vw, 56px) clamp(28px, 4vh, 48px)", overflow: "hidden" }}>
        <video data-ax-hero-video="" src="https://videos.pexels.com/video-files/7651771/7651771-uhd_2560_1440_30fps.mp4" poster="https://images.pexels.com/videos/7651771/adult-analysis-asian-asian-man-7651771.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: "0.4", filter: "saturate(0.55) contrast(1.06)" }}></video>
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(10,12,16,0.72) 0%, rgba(10,12,16,0.5) 45%, rgba(10,12,16,0.94) 100%)" }}></div>
        <div style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(246,245,242,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(246,245,242,0.055) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(120% 90% at 20% 20%, #000 20%, transparent 78%)" }}></div>
        <div data-ax-blob="" style={{ position: "absolute", top: "-18%", right: "-8%", width: "62vw", height: "62vw", borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, oklch(0.62 0.13 195 / 0.5), transparent 62%)", filter: "blur(30px)", animation: "ax-drift 22s ease-in-out infinite" }}></div>
        <div style={{ position: "absolute", bottom: "-22%", left: "-12%", width: "52vw", height: "52vw", borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, oklch(0.66 0.12 65 / 0.28), transparent 62%)", filter: "blur(40px)", animation: "ax-drift 30s ease-in-out infinite reverse" }}></div>
        <div data-ax-glow="" style={{ position: "absolute", width: "520px", height: "520px", left: "50%", top: "50%", margin: "-260px 0 0 -260px", borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(246,245,242,0.10), transparent 65%)", transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)" }}></div>

        <div data-ax-burn="1" style={{ position: "absolute", inset: "0", pointerEvents: "none", mixBlendMode: "screen" }}></div>
        <div data-ax-burn="2" style={{ position: "absolute", inset: "0", pointerEvents: "none", mixBlendMode: "screen" }}></div>
        <div data-ax-burn="3" style={{ position: "absolute", inset: "0", pointerEvents: "none", mixBlendMode: "screen" }}></div>

        <div data-ax-heroinner="" style={{ position: "relative", maxWidth: "1320px", width: "100%", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(246,245,242,0.6)", marginBottom: "clamp(20px, 4vh, 40px)", overflow: "hidden" }}>
            <span data-ax-accent-bg="" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "oklch(0.74 0.13 195)", animation: "ax-blink 2.2s ease-in-out infinite" }}></span>
            <span>AI &amp; ML consulting, engineering and delivery</span>
          </div>

          <h1 className="home-hero-title" style={{ fontSize: "clamp(40px, 7.5vw, 104px)", lineHeight: "1.04", fontWeight: "500", maxWidth: "17ch" }}>
            <span style={{ display: "block" }}>Adaptive</span>
            <span style={{ display: "block" }}>intelligence,</span>
            <span data-ax-accent-fg="" style={{ display: "block", color: "oklch(0.74 0.13 195)", fontStyle: "italic", fontWeight: "400" }}>engineered to ship.</span>
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "clamp(20px, 3vw, 56px)", alignItems: "end", marginTop: "clamp(28px, 5vh, 56px)", paddingTop: "clamp(24px, 4vh, 40px)", borderTop: "1px solid rgba(246,245,242,0.14)" }}>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: "1.55", color: "rgba(246,245,242,0.74)", maxWidth: "48ch", fontWeight: "300" }}>We are a team of data scientists, machine learning engineers and AI specialists helping organisations turn data into decisions — from AI strategy through to production-grade agentic systems.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifySelf: "start" }}>
              <a href="#contact" data-ax-accent-bg="" style={{ padding: "16px 28px", borderRadius: "999px", background: "oklch(0.74 0.13 195)", color: "#0A0C10", fontWeight: "500", fontSize: "15px", transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)" }} data-hover="transform: translateY(-3px);">Scope a project</a>
              <a href="#capabilities" style={{ padding: "16px 28px", borderRadius: "999px", border: "1px solid rgba(246,245,242,0.28)", fontWeight: "500", fontSize: "15px", transition: "border-color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)" }} data-hover="transform: translateY(-3px); border-color: #F6F5F2;">See capabilities</a>
            </div>
          </div>

          <div style={{ marginTop: "clamp(24px, 4vh, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 14px" }}>
            <span style={{ padding: "9px 16px", border: "1px solid rgba(246,245,242,0.22)", borderRadius: "999px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(246,245,242,0.72)" }}>Clutch-reviewed</span>
            <span style={{ padding: "9px 16px", border: "1px solid rgba(246,245,242,0.22)", borderRadius: "999px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(246,245,242,0.72)" }}>Senior-only teams</span>
            <span style={{ padding: "9px 16px", border: "1px solid rgba(246,245,242,0.22)", borderRadius: "999px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(246,245,242,0.72)" }}>EdTech · Energy · Retail · Travel</span>
            <span style={{ padding: "9px 16px", border: "1px solid rgba(246,245,242,0.22)", borderRadius: "999px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(246,245,242,0.72)" }}>Concept → production</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "clamp(32px, 6vh, 64px)", fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(246,245,242,0.45)" }}>
            <span style={{ display: "inline-block", animation: "ax-bob 2.4s ease-in-out infinite" }}>↓</span> Scroll
          </div>
        </div>
      </section>

      <section style={{ background: "#0A0C10", color: "#F6F5F2", borderTop: "1px solid rgba(246,245,242,0.1)", padding: "22px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", width: "max-content", animation: "ax-marquee 38s linear infinite" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "34px", paddingRight: "34px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(18px, 2.4vw, 32px)", color: "rgba(246,245,242,0.42)", whiteSpace: "nowrap" }}>
            <span>Generative AI</span><span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>✦</span>
            <span>Agentic systems</span><span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>✦</span>
            <span>Machine &amp; deep learning</span><span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>✦</span>
            <span>Natural language processing</span><span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>✦</span>
            <span>Computer vision</span><span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>✦</span>
            <span>Data engineering &amp; MLOps</span><span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>✦</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "34px", paddingRight: "34px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(18px, 2.4vw, 32px)", color: "rgba(246,245,242,0.42)", whiteSpace: "nowrap" }} aria-hidden="true">
            <span>Generative AI</span><span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>✦</span>
            <span>Agentic systems</span><span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>✦</span>
            <span>Machine &amp; deep learning</span><span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>✦</span>
            <span>Natural language processing</span><span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>✦</span>
            <span>Computer vision</span><span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>✦</span>
            <span>Data engineering &amp; MLOps</span><span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>✦</span>
          </div>
        </div>
      </section>

      <section data-ax-stats="" style={{ background: "#F6F5F2", padding: "clamp(56px, 9vh, 104px) clamp(16px, 4vw, 56px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 210px), 1fr))", gap: "clamp(20px, 3vw, 44px)" }}>
          <div data-r="" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", borderTop: "1px solid rgba(10,12,16,0.16)", paddingTop: "18px" }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: "1", letterSpacing: "-0.04em" }}><span data-count="30" data-suffix="%">0%</span></div>
            <p style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.5", color: "rgba(10,12,16,0.6)" }}>Increase in customer satisfaction reported after deployment</p>
          </div>
          <div data-r="" data-d="90" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", borderTop: "1px solid rgba(10,12,16,0.16)", paddingTop: "18px" }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: "1", letterSpacing: "-0.04em" }}>Days<span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>→</span>min</div>
            <p style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.5", color: "rgba(10,12,16,0.6)" }}>Loan approval cycle time on a real-time decisioning build</p>
          </div>
          <div data-r="" data-d="180" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", borderTop: "1px solid rgba(10,12,16,0.16)", paddingTop: "18px" }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: "1", letterSpacing: "-0.04em" }}><span data-count="50" data-suffix="+">50+</span></div>
            <p style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.5", color: "rgba(10,12,16,0.6)" }}>AI, ML and data capabilities delivered under one team</p>
          </div>
          <div data-r="" data-d="270" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", borderTop: "1px solid rgba(10,12,16,0.16)", paddingTop: "18px" }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(38px, 5vw, 64px)", lineHeight: "1", letterSpacing: "-0.04em" }}>Built</div>
            <p style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.5", color: "rgba(10,12,16,0.6)" }}>Built for operating teams that need AI to move from pilot to payoff</p>
          </div>
        </div>
      </section>

      <section style={{ background: "#F6F5F2", padding: "0 clamp(16px, 4vw, 56px) clamp(48px, 8vh, 96px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "clamp(12px, 1.6vw, 22px)" }}>
          <figure data-r="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", margin: "0", gridColumn: "span 1" }}>
            <div data-ax-par="0.06" style={{ overflow: "hidden", aspectRatio: "4 / 3", background: "#E4E2DC" }}>
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000" alt="Client and delivery team in a discovery workshop" style={{ width: "100%", height: "100%", objectFit: "cover", animation: "ax-kb 26s ease-in-out infinite" }} />
            </div>
            <figcaption style={{ marginTop: "12px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(10,12,16,0.5)" }}>Discovery workshops</figcaption>
          </figure>
          <figure data-r="" data-d="110" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", margin: "0" }}>
            <div data-ax-par="0.06" style={{ overflow: "hidden", aspectRatio: "4 / 3", background: "#E4E2DC" }}>
              <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000" alt="Machine learning engineer working at a development workstation" style={{ width: "100%", height: "100%", objectFit: "cover", animation: "ax-kb 30s ease-in-out infinite reverse" }} />
            </div>
            <figcaption style={{ marginTop: "12px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(10,12,16,0.5)" }}>Model &amp; platform engineering</figcaption>
          </figure>
          <figure data-r="" data-d="220" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", margin: "0" }}>
            <div data-ax-par="0.06" style={{ overflow: "hidden", aspectRatio: "4 / 3", background: "#E4E2DC" }}>
              <img src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1000" alt="Engineer checking a deployment on a laptop in a data centre" style={{ width: "100%", height: "100%", objectFit: "cover", animation: "ax-kb 28s ease-in-out infinite" }} />
            </div>
            <figcaption style={{ marginTop: "12px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(10,12,16,0.5)" }}>Production support &amp; handover</figcaption>
          </figure>
        </div>
      </section>

      <section id="capabilities" style={{ background: "#F6F5F2", padding: "clamp(40px, 6vh, 72px) clamp(16px, 2vw, 32px) clamp(64px, 10vh, 120px)" }}>
        <div style={{ maxWidth: "1800px", margin: "0 auto" }}>
          <div style={{ maxWidth: "1320px", marginLeft: "auto", marginRight: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "clamp(16px, 3vw, 48px)", alignItems: "end", marginBottom: "clamp(32px, 5vh, 64px)" }}>
            <h2 data-r="" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", fontSize: "clamp(30px, 4.4vw, 62px)", lineHeight: "1.03", maxWidth: "20ch" }}>Services</h2>
            <p data-r="" data-d="120" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", fontSize: "16px", lineHeight: "1.6", color: "rgba(10,12,16,0.62)", maxWidth: "44ch", fontWeight: "300" }}>From concept to deployment, we build custom AI solutions that optimise processes, sharpen decision-making and unlock new efficiency — fifteen capabilities delivered by one senior team.</p>
          </div>

          <ServicesCarousel items={SERVICES} category="All" />

          <div data-r="" style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "clamp(32px, 5vh, 48px)", textAlign: "center" }}>
            <Link to="/services" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 28px", borderRadius: "999px", border: "1px solid rgba(10,12,16,0.22)", fontWeight: "500", fontSize: "15px", transition: "border-color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)" }} data-hover="transform: translateY(-3px); border-color: rgba(10,12,16,0.6);">View all services <span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)" }}>→</span></Link>
          </div>
        </div>
      </section>

      <section id="industries" style={{ background: "#0A0C10", color: "#F6F5F2", padding: "clamp(64px, 11vh, 132px) clamp(16px, 4vw, 56px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(90deg, rgba(246,245,242,0.05) 1px, transparent 1px)", backgroundSize: "96px 100%" }}></div>
        <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto" }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.74 0.13 195)" }} data-ax-accent-fg="">Industries</span>
          <h2 data-r="" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "18px", fontSize: "clamp(30px, 4.4vw, 62px)", lineHeight: "1.04", maxWidth: "26ch" }}>Sector depth, not generic models</h2>
          <p data-r="" data-d="120" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "20px", maxWidth: "52ch", fontSize: "16px", lineHeight: "1.6", color: "rgba(246,245,242,0.62)", fontWeight: "300" }}>We shape AI solutions around the workflows, data and decisions that matter in each sector.</p>

          <div style={{ marginTop: "clamp(36px, 6vh, 72px)", borderTop: "1px solid rgba(246,245,242,0.14)" }}>
            {INDUSTRIES.map((industry, i) => (
              <Link key={industry.slug} to={`/industries#industry-${industry.slug}`} data-r="" data-d={i === 0 ? undefined : String(i * 80)} data-ax-row="" style={{ opacity: "0", transform: "translateY(20px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), padding 350ms ease, background 350ms ease", display: "grid", gridTemplateColumns: "56px minmax(0, 1fr) auto", gap: "clamp(12px, 3vw, 40px)", alignItems: "center", padding: "clamp(20px, 3vh, 32px) 8px", borderBottom: "1px solid rgba(246,245,242,0.14)" }} data-hover="background: rgba(246,245,242,0.04); padding-left: 20px;">
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "rgba(246,245,242,0.4)" }}>{industry.n}</span>
                <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 20px" }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(24px, 3.2vw, 44px)", letterSpacing: "-0.03em" }}>{industry.title}</span>
                  <span style={{ fontSize: "14px", color: "rgba(246,245,242,0.55)", fontWeight: "300" }}>{industry.tagline}</span>
                </span>
                <span data-ax-accent-fg="" style={{ color: "oklch(0.74 0.13 195)", fontSize: "20px" }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section data-ax-band="" style={{ position: "relative", height: "clamp(320px, 62vh, 620px)", overflow: "hidden", background: "#0A0C10" }}>
        <img data-ax-parallax="" src="https://images.pexels.com/photos/5203849/pexels-photo-5203849.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920" alt="Fibre-optic cabling in a modern data centre" style={{ position: "absolute", left: "0", top: "-14%", width: "100%", height: "128%", objectFit: "cover", opacity: "0.55", filter: "saturate(0.55)" }} />
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg, rgba(10,12,16,0.92), rgba(10,12,16,0.35))" }}></div>
        <div style={{ position: "relative", height: "100%", maxWidth: "1320px", margin: "0 auto", padding: "clamp(24px, 5vh, 64px) clamp(16px, 4vw, 56px)", display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "#F6F5F2" }}>
          <span data-ax-accent-fg="" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.74 0.13 195)" }}>Infrastructure ready</span>
          <h2 data-r="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 800ms ease, transform 800ms cubic-bezier(0.22,1,0.36,1)", marginTop: "16px", fontSize: "clamp(26px, 4vw, 58px)", lineHeight: "1.04", maxWidth: "22ch" }}>Models that survive contact with production</h2>
        </div>
      </section>

      <section id="approach" style={{ background: "#F6F5F2", padding: "clamp(64px, 11vh, 132px) clamp(16px, 4vw, 56px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "clamp(32px, 6vw, 88px)", alignItems: "start" }}>
          <div style={{ position: "sticky", top: "108px" }}>
            <span data-ax-accent-fg="" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.74 0.13 195)" }}>Approach</span>
            <h2 style={{ marginTop: "18px", fontSize: "clamp(30px, 4vw, 54px)", lineHeight: "1.04", maxWidth: "18ch" }}>Concept to deployment in four moves</h2>
            <p style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.6", color: "rgba(10,12,16,0.62)", maxWidth: "40ch", fontWeight: "300" }}>Short, evidence-led phases. You see working software early, and nothing ships without a measurable business case behind it.</p>
            <div style={{ marginTop: "32px", display: "flex", gap: "8px" }}>
              <span data-ax-dot="0" style={{ width: "30px", height: "3px", background: "rgba(10,12,16,0.18)", transition: "background 400ms ease" }}></span>
              <span data-ax-dot="1" style={{ width: "30px", height: "3px", background: "rgba(10,12,16,0.18)", transition: "background 400ms ease" }}></span>
              <span data-ax-dot="2" style={{ width: "30px", height: "3px", background: "rgba(10,12,16,0.18)", transition: "background 400ms ease" }}></span>
              <span data-ax-dot="3" style={{ width: "30px", height: "3px", background: "rgba(10,12,16,0.18)", transition: "background 400ms ease" }}></span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 3vh, 28px)" }}>
            <article data-ax-step="0" data-r="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), border-color 400ms ease, background 400ms ease", border: "1px solid rgba(10,12,16,0.14)", background: "transparent", padding: "clamp(24px, 3vw, 38px)" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(10,12,16,0.45)" }}>PHASE 01</span>
              <h3 style={{ marginTop: "14px", fontSize: "clamp(20px, 2.2vw, 30px)" }}>Discover &amp; prioritise</h3>
              <p style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.6", color: "rgba(10,12,16,0.62)", fontWeight: "300" }}>We map your data, systems and constraints, then rank the use cases by value and feasibility. You leave with a costed shortlist, not a slideshow.</p>
            </article>
            <article data-ax-step="1" data-r="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), border-color 400ms ease, background 400ms ease", border: "1px solid rgba(10,12,16,0.14)", background: "transparent", padding: "clamp(24px, 3vw, 38px)" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(10,12,16,0.45)" }}>PHASE 02</span>
              <h3 style={{ marginTop: "14px", fontSize: "clamp(20px, 2.2vw, 30px)" }}>Prove it on your data</h3>
              <p style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.6", color: "rgba(10,12,16,0.62)", fontWeight: "300" }}>A focused proof of concept against agreed metrics — accuracy, latency, cost per decision — so the business case is settled before build.</p>
            </article>
            <article data-ax-step="2" data-r="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), border-color 400ms ease, background 400ms ease", border: "1px solid rgba(10,12,16,0.14)", background: "transparent", padding: "clamp(24px, 3vw, 38px)" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(10,12,16,0.45)" }}>PHASE 03</span>
              <h3 style={{ marginTop: "14px", fontSize: "clamp(20px, 2.2vw, 30px)" }}>Engineer for production</h3>
              <p style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.6", color: "rgba(10,12,16,0.62)", fontWeight: "300" }}>Pipelines, evaluation harnesses, guardrails and MLOps — integrated with your existing stack and documented for your own engineers.</p>
            </article>
            <article data-ax-step="3" data-r="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), border-color 400ms ease, background 400ms ease", border: "1px solid rgba(10,12,16,0.14)", background: "transparent", padding: "clamp(24px, 3vw, 38px)" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(10,12,16,0.45)" }}>PHASE 04</span>
              <h3 style={{ marginTop: "14px", fontSize: "clamp(20px, 2.2vw, 30px)" }}>Run, retrain, hand over</h3>
              <p style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.6", color: "rgba(10,12,16,0.62)", fontWeight: "300" }}>Monitoring and retraining keep models honest as data drifts — with the option to transition ownership to your team whenever you're ready.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="proof" style={{ background: "#0A0C10", color: "#F6F5F2", padding: "clamp(64px, 11vh, 132px) clamp(16px, 4vw, 56px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "clamp(20px, 4vw, 64px)", alignItems: "end" }}>
            <h2 data-r="" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", fontSize: "clamp(30px, 4.4vw, 62px)", lineHeight: "1.04", maxWidth: "18ch" }}>What clients say</h2>
            <p data-r="" data-d="120" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", fontSize: "16px", lineHeight: "1.6", color: "rgba(246,245,242,0.6)", maxWidth: "42ch", fontWeight: "300" }}>Hear directly from clients about the work we built together. Select a card to flip it and read their view.</p>
          </div>

          <ClientViews />
        </div>
      </section>

      <section id="work" style={{ background: "#0A0C10", color: "#F6F5F2", padding: "clamp(56px, 10vh, 120px) 0 clamp(64px, 11vh, 132px)", overflow: "hidden", borderTop: "1px solid rgba(246,245,242,0.12)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 56px)" }}>
          <span data-ax-accent-fg="" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.74 0.13 195)" }}>Featured work</span>
          <h2 data-r="" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "16px", fontSize: "clamp(28px, 4vw, 54px)", lineHeight: "1.04", maxWidth: "22ch" }}>Systems we've shipped <em style={{ fontWeight: "400" }}>into production</em></h2>
        </div>
        <div data-ax-cf="" data-ax-cfscroll="" style={{ position: "relative", height: "460px", marginTop: "clamp(28px, 5vh, 56px)", perspective: "1400px", transformStyle: "preserve-3d" }}>
          <article data-ax-cf-card="" style={{ position: "absolute", left: "50%", top: "50%", width: "280px", height: "360px", margin: "-180px 0 0 -140px", borderRadius: "20px", overflow: "hidden", background: "linear-gradient(150deg, oklch(0.82 0.11 195), oklch(0.68 0.12 240))", boxShadow: "0 30px 60px rgba(0,0,0,0.45)", transformStyle: "preserve-3d", willChange: "transform, opacity" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(115deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 38%, rgba(255,255,255,0) 62%)" }}></span>
            <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "26px", color: "#0A0C10" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase" }}>Banking</span>
              <div><h3 style={{ fontSize: "25px", lineHeight: "1.12" }}>Real-time credit decisioning</h3><p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.5 }}>Scores applications as data arrives, giving lending teams a clearer path to faster decisions.</p></div>
            </div>
          </article>
          <article data-ax-cf-card="" style={{ position: "absolute", left: "50%", top: "50%", width: "280px", height: "360px", margin: "-180px 0 0 -140px", borderRadius: "20px", overflow: "hidden", background: "linear-gradient(150deg, oklch(0.86 0.1 95), oklch(0.74 0.12 55))", boxShadow: "0 30px 60px rgba(0,0,0,0.45)", transformStyle: "preserve-3d", willChange: "transform, opacity" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(115deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 38%, rgba(255,255,255,0) 62%)" }}></span>
            <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "26px", color: "#0A0C10" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase" }}>Document AI</span>
              <div><h3 style={{ fontSize: "25px", lineHeight: "1.12" }}>Loan document understanding</h3><p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.5 }}>Extracts key details from documents and flags missing information for review.</p></div>
            </div>
          </article>
          <article data-ax-cf-card="" style={{ position: "absolute", left: "50%", top: "50%", width: "280px", height: "360px", margin: "-180px 0 0 -140px", borderRadius: "20px", overflow: "hidden", background: "linear-gradient(150deg, oklch(0.84 0.11 150), oklch(0.7 0.12 195))", boxShadow: "0 30px 60px rgba(0,0,0,0.45)", transformStyle: "preserve-3d", willChange: "transform, opacity" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(115deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 38%, rgba(255,255,255,0) 62%)" }}></span>
            <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "26px", color: "#0A0C10" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase" }}>Energy</span>
              <div><h3 style={{ fontSize: "25px", lineHeight: "1.12" }}>Demand &amp; price forecasting</h3><p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.5 }}>Combines historical and live data to support planning across changing market conditions.</p></div>
            </div>
          </article>
          <article data-ax-cf-card="" style={{ position: "absolute", left: "50%", top: "50%", width: "280px", height: "360px", margin: "-180px 0 0 -140px", borderRadius: "20px", overflow: "hidden", background: "linear-gradient(150deg, oklch(0.84 0.1 300), oklch(0.7 0.13 265))", boxShadow: "0 30px 60px rgba(0,0,0,0.45)", transformStyle: "preserve-3d", willChange: "transform, opacity" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(115deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 38%, rgba(255,255,255,0) 62%)" }}></span>
            <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "26px", color: "#0A0C10" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase" }}>Travel</span>
              <div><h3 style={{ fontSize: "25px", lineHeight: "1.12" }}>Support agent copilot</h3><p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.5 }}>Surfaces relevant answers and next steps while agents handle traveler requests.</p></div>
            </div>
          </article>
          <article data-ax-cf-card="" style={{ position: "absolute", left: "50%", top: "50%", width: "280px", height: "360px", margin: "-180px 0 0 -140px", borderRadius: "20px", overflow: "hidden", background: "linear-gradient(150deg, oklch(0.86 0.09 65), oklch(0.72 0.11 25))", boxShadow: "0 30px 60px rgba(0,0,0,0.45)", transformStyle: "preserve-3d", willChange: "transform, opacity" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(115deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 38%, rgba(255,255,255,0) 62%)" }}></span>
            <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "26px", color: "#0A0C10" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase" }}>Resources</span>
              <div><h3 style={{ fontSize: "25px", lineHeight: "1.12" }}>Predictive maintenance vision</h3><p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.5 }}>Analyzes inspection images to help teams spot equipment issues earlier.</p></div>
            </div>
          </article>
          <article data-ax-cf-card="" style={{ position: "absolute", left: "50%", top: "50%", width: "280px", height: "360px", margin: "-180px 0 0 -140px", borderRadius: "20px", overflow: "hidden", background: "linear-gradient(150deg, oklch(0.84 0.1 215), oklch(0.68 0.13 285))", boxShadow: "0 30px 60px rgba(0,0,0,0.45)", transformStyle: "preserve-3d", willChange: "transform, opacity" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(115deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 38%, rgba(255,255,255,0) 62%)" }}></span>
            <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "26px", color: "#0A0C10" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase" }}>Marketing</span>
              <div><h3 style={{ fontSize: "25px", lineHeight: "1.12" }}>Campaign generation engine</h3><p style={{ marginTop: "12px", fontSize: "14px", lineHeight: 1.5 }}>Creates campaign variants from approved inputs for faster testing and review.</p></div>
            </div>
          </article>
        </div>
        <p style={{ maxWidth: "1320px", margin: "clamp(20px, 3vh, 32px) auto 0", padding: "0 clamp(16px, 4vw, 56px)", fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(246,245,242,0.45)" }}>Representative engagements · details on request</p>
      </section>

      <section style={{ background: "#F6F5F2", padding: "clamp(64px, 11vh, 132px) clamp(16px, 4vw, 56px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(28px, 5vw, 72px)", alignItems: "center" }}>
          <div>
            <span data-ax-accent-fg="" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.74 0.13 195)" }}>Why Adaptrix</span>
            <h2 data-r="" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "18px", fontSize: "clamp(28px, 3.6vw, 50px)", lineHeight: "1.06", maxWidth: "22ch" }}>More than a tech vendor — a delivery partner</h2>
            <p data-r="" data-d="100" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "20px", fontSize: "16px", lineHeight: "1.65", color: "rgba(10,12,16,0.64)", maxWidth: "46ch", fontWeight: "300" }}>Our team of experienced data scientists, machine learning engineers and AI experts works as one team with yours — from first workshop to production handover. We respect enterprise data-governance expectations and build intelligent, agentic systems that help businesses thrive in an increasingly complex digital world.</p>
            <div data-r="" data-d="180" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "20px" }}>
              <div style={{ borderTop: "1px solid rgba(10,12,16,0.16)", paddingTop: "14px" }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px" }}>Fast to production</div>
                <p style={{ marginTop: "6px", fontSize: "13px", color: "rgba(10,12,16,0.58)" }}>Working pilots in weeks, not quarters</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(10,12,16,0.16)", paddingTop: "14px" }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px" }}>Data residency aware</div>
                <p style={{ marginTop: "6px", fontSize: "13px", color: "rgba(10,12,16,0.58)" }}>Cloud or on-prem, your governance rules</p>
              </div>
            </div>
          </div>
          <div data-r="" data-d="140" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", aspectRatio: "4 / 5", minHeight: "320px", overflow: "hidden", background: "#EBE9E3", position: "relative" }} data-ax-par="0.05">
            <img src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200" alt="Client and delivery team collaborating around a table during a workshop" style={{ width: "100%", height: "100%", objectFit: "cover", animation: "ax-kb 24s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      <section style={{ background: "#0A0C10", color: "#F6F5F2", padding: "clamp(56px, 9vh, 104px) clamp(16px, 4vw, 56px)", borderTop: "1px solid rgba(246,245,242,0.12)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "clamp(18px, 3vw, 56px)", alignItems: "end" }}>
            <h2 data-r="" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", fontSize: "clamp(26px, 3.4vw, 46px)", lineHeight: "1.06", maxWidth: "22ch" }}>The stack we build <em style={{ fontWeight: "400" }}>production AI</em> on</h2>
            <p data-r="" data-d="110" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", fontSize: "15px", lineHeight: "1.6", color: "rgba(246,245,242,0.6)", maxWidth: "44ch", fontWeight: "300" }}>Tooling chosen for your constraints — not ours. Cloud, hybrid or on-premise, with everything documented for your engineers.</p>
          </div>
          <div data-r="" data-d="180" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "clamp(28px, 5vh, 52px)", display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>Python</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>PyTorch</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>TensorFlow</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>scikit-learn</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>LangChain</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>LlamaIndex</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>FastAPI</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>Airflow</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>dbt</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>Snowflake</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>Databricks</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>Postgres + pgvector</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>MLflow</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>Docker</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>Kubernetes</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>AWS</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>Azure</span>
            <span style={{ padding: "10px 16px", border: "1px solid rgba(246,245,242,0.18)", borderRadius: "6px", fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(246,245,242,0.78)" }}>Google Cloud</span>
          </div>
        </div>
      </section>

      <section id="engagement" style={{ background: "#F6F5F2", padding: "clamp(64px, 11vh, 132px) clamp(16px, 4vw, 56px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <h2 data-r="" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", fontSize: "clamp(28px, 4vw, 54px)", lineHeight: "1.04", maxWidth: "20ch" }}>Engagement models <em style={{ fontWeight: "400" }}>that fit the work</em></h2>
          <p data-r="" data-d="100" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "18px", maxWidth: "48ch", fontSize: "16px", lineHeight: "1.6", color: "rgba(10,12,16,0.62)", fontWeight: "300" }}>Clear scope, clear rate, no hidden surprises. Most clients start small and scale once the first use case pays for itself.</p>
          <div style={{ marginTop: "clamp(32px, 5vh, 60px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "clamp(14px, 2vw, 24px)" }}>
            <article data-r="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), border-color 300ms ease", border: "1px solid rgba(10,12,16,0.16)", padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "14px", minHeight: "240px" }} data-hover="border-color: rgba(10,12,16,0.5);">
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(10,12,16,0.45)" }}>MODEL 01</span>
              <h3 style={{ fontSize: "clamp(20px, 2.1vw, 28px)" }}>Fixed-scope build</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "rgba(10,12,16,0.62)", fontWeight: "300" }}>One agreed price, timeline and deliverable set. Best for a defined proof of concept or a single production use case.</p>
            </article>
            <article data-r="" data-d="100" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1), border-color 300ms ease", border: "1px solid rgba(10,12,16,0.16)", padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "14px", minHeight: "240px" }} data-hover="border-color: rgba(10,12,16,0.5);">
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(10,12,16,0.45)" }}>MODEL 02</span>
              <h3 style={{ fontSize: "clamp(20px, 2.1vw, 28px)" }}>Time &amp; materials</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "rgba(10,12,16,0.62)", fontWeight: "300" }}>Pay for the hours used as requirements evolve. Best for discovery, experimentation and ongoing model improvement.</p>
            </article>
            <article data-r="" data-d="200" data-ax-accent-panel="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", background: "oklch(0.74 0.13 195)", color: "#0A0C10", padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "14px", minHeight: "240px" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(10,12,16,0.6)" }}>MODEL 03</span>
              <h3 style={{ fontSize: "clamp(20px, 2.1vw, 28px)" }}>Dedicated pod</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "rgba(10,12,16,0.72)", fontWeight: "400" }}>A standing team of data scientists, ML and data engineers embedded with yours for continuous delivery.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" style={{ background: "#F6F5F2", padding: "0 clamp(16px, 4vw, 56px) clamp(64px, 11vh, 132px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(28px, 5vw, 80px)", alignItems: "start" }}>
          <div>
            <span data-ax-accent-fg="" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.74 0.13 195)" }}>FAQs</span>
            <h2 data-r="" style={{ opacity: "0", transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "16px", fontSize: "clamp(26px, 3.4vw, 46px)", lineHeight: "1.06", maxWidth: "18ch" }}>Questions we get <em style={{ fontWeight: "400" }}>before kickoff</em></h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div data-ax-faq="" data-r="" style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity 600ms ease, transform 600ms cubic-bezier(0.22,1,0.36,1)", borderTop: "1px solid rgba(10,12,16,0.18)" }}>
              <button data-ax-faq-q="" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "22px 0", background: "none", border: "0", cursor: "pointer", textAlign: "left", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 1.5vw, 20px)", color: "#0A0C10" }}><span>What exactly does AdaptrixAI do?</span><span data-ax-faq-icon="" style={{ fontSize: "20px", transition: "transform 300ms ease" }}>+</span></button>
              <div data-ax-faq-a="" style={{ overflow: "hidden", height: "0", transition: "height 350ms cubic-bezier(0.22,1,0.36,1)" }}><p style={{ paddingBottom: "22px", fontSize: "15px", lineHeight: "1.65", color: "rgba(10,12,16,0.64)", fontWeight: "300", maxWidth: "56ch" }}>We provide custom AI and data science solutions — consulting and strategy, generative and agentic AI, machine and deep learning, NLP and computer vision, data engineering and MLOps, and AI-powered digital marketing.</p></div>
            </div>
            <div data-ax-faq="" data-r="" data-d="60" style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity 600ms ease, transform 600ms cubic-bezier(0.22,1,0.36,1)", borderTop: "1px solid rgba(10,12,16,0.18)" }}>
              <button data-ax-faq-q="" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "22px 0", background: "none", border: "0", cursor: "pointer", textAlign: "left", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 1.5vw, 20px)", color: "#0A0C10" }}><span>How does an engagement start?</span><span data-ax-faq-icon="" style={{ fontSize: "20px", transition: "transform 300ms ease" }}>+</span></button>
              <div data-ax-faq-a="" style={{ overflow: "hidden", height: "0", transition: "height 350ms cubic-bezier(0.22,1,0.36,1)" }}><p style={{ paddingBottom: "22px", fontSize: "15px", lineHeight: "1.65", color: "rgba(10,12,16,0.64)", fontWeight: "300", maxWidth: "56ch" }}>With a discovery call, then a short paid discovery phase: we map your data and systems, rank use cases by value and feasibility, and hand you a costed shortlist before anyone writes production code.</p></div>
            </div>
            <div data-ax-faq="" data-r="" data-d="120" style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity 600ms ease, transform 600ms cubic-bezier(0.22,1,0.36,1)", borderTop: "1px solid rgba(10,12,16,0.18)" }}>
              <button data-ax-faq-q="" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "22px 0", background: "none", border: "0", cursor: "pointer", textAlign: "left", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 1.5vw, 20px)", color: "#0A0C10" }}><span>Do you only build new systems?</span><span data-ax-faq-icon="" style={{ fontSize: "20px", transition: "transform 300ms ease" }}>+</span></button>
              <div data-ax-faq-a="" style={{ overflow: "hidden", height: "0", transition: "height 350ms cubic-bezier(0.22,1,0.36,1)" }}><p style={{ paddingBottom: "22px", fontSize: "15px", lineHeight: "1.65", color: "rgba(10,12,16,0.64)", fontWeight: "300", maxWidth: "56ch" }}>No. Much of our work adds AI to platforms that already exist — cleaning up data pipelines, adding models and agents to current workflows, and improving reliability of systems already in production.</p></div>
            </div>
            <div data-ax-faq="" data-r="" data-d="180" style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity 600ms ease, transform 600ms cubic-bezier(0.22,1,0.36,1)", borderTop: "1px solid rgba(10,12,16,0.18)" }}>
              <button data-ax-faq-q="" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "22px 0", background: "none", border: "0", cursor: "pointer", textAlign: "left", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 1.5vw, 20px)", color: "#0A0C10" }}><span>Where does our data live?</span><span data-ax-faq-icon="" style={{ fontSize: "20px", transition: "transform 300ms ease" }}>+</span></button>
              <div data-ax-faq-a="" style={{ overflow: "hidden", height: "0", transition: "height 350ms cubic-bezier(0.22,1,0.36,1)" }}><p style={{ paddingBottom: "22px", fontSize: "15px", lineHeight: "1.65", color: "rgba(10,12,16,0.64)", fontWeight: "300", maxWidth: "56ch" }}>Wherever your governance requires — your cloud tenancy, a hybrid setup, or fully on-premise. We work inside your residency, access and audit rules rather than moving data to us.</p></div>
            </div>
            <div data-ax-faq="" data-r="" data-d="240" style={{ opacity: "0", transform: "translateY(18px)", transition: "opacity 600ms ease, transform 600ms cubic-bezier(0.22,1,0.36,1)", borderTop: "1px solid rgba(10,12,16,0.18)", borderBottom: "1px solid rgba(10,12,16,0.18)" }}>
              <button data-ax-faq-q="" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "22px 0", background: "none", border: "0", cursor: "pointer", textAlign: "left", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 1.5vw, 20px)", color: "#0A0C10" }}><span>Can our own team take it over?</span><span data-ax-faq-icon="" style={{ fontSize: "20px", transition: "transform 300ms ease" }}>+</span></button>
              <div data-ax-faq-a="" style={{ overflow: "hidden", height: "0", transition: "height 350ms cubic-bezier(0.22,1,0.36,1)" }}><p style={{ paddingBottom: "22px", fontSize: "15px", lineHeight: "1.65", color: "rgba(10,12,16,0.64)", fontWeight: "300", maxWidth: "56ch" }}>Yes — that is the default end state. Everything is documented and reviewed with your engineers as we build, so ownership can transfer whenever you are ready.</p></div>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </>
  );
}
