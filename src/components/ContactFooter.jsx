import { Link, useLocation } from "react-router-dom";

const footerServices = [
  ["AI Consulting", "ai-consulting"],
  ["AI Development", "ai-development"],
  ["GenAI Development", "generative-ai-development"],
  ["AI Chatbot Development", "ai-chatbot-development"],
  ["Machine and Deep Learning", "machine-deep-learning"],
  ["Digital Marketing", "digital-marketing"],
  ["Natural Language Processing", "nlp"],
  ["Computer Vision", "computer-vision"],
  ["Data Engineering & MLOps", "data-engineering"],
  ["Agentic AI", "agentic-ai"],
];

/**
 * Closing contact CTA + footer, shared across Home, About and Services so
 * every page ends on the same call-to-action and site-wide nav.
 */
export default function ContactFooter({ heading = "Let's scope your first AI win.", compact = false }) {
  const isContactPage = useLocation().pathname === "/contact";

  return (
    <section id="contact" style={{ background: "#0A0C10", color: "#F6F5F2", padding: `${compact ? "clamp(40px, 6vh, 64px)" : "clamp(72px, 13vh, 150px)"} clamp(16px, 4vw, 56px) clamp(40px, 6vh, 64px)`, position: "relative", overflow: "hidden" }}>
      <div data-ax-blob="" style={{ position: "absolute", bottom: "-40%", left: "50%", width: "80vw", height: "80vw", marginLeft: "-40vw", borderRadius: "50%", background: "radial-gradient(circle, oklch(0.62 0.13 195 / 0.34), transparent 60%)", filter: "blur(40px)", animation: "ax-drift 26s ease-in-out infinite" }}></div>
      <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto" }}>
        {isContactPage ? (
        <h2 data-r="" style={{ opacity: "0", transform: "translateY(26px)", transition: "opacity 800ms ease, transform 800ms cubic-bezier(0.22,1,0.36,1)", fontSize: "clamp(34px, 7vw, 104px)", lineHeight: "0.98", maxWidth: "16ch" }}>{heading}</h2>
        ) : (
          <section className="build-together" aria-labelledby="build-together-title">
            <div className="build-together-copy">
              <span className="build-together-eyebrow"><span aria-hidden="true" /> YOUR NEXT CHAPTER STARTS HERE</span>
              <h2 id="build-together-title">Let’s build something <em>great together.</em></h2>
              <p>Bring your ambition. We’ll bring the AI, design, and engineering to make it real.</p>
            </div>
            <Link className="build-together-link" to="/contact" aria-label="Let’s talk — go to the Contact page">
              <span className="build-together-arrow">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M12 36 36 12M12 12h24v24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <span className="build-together-link-label">LET’S TALK</span>
            </Link>
          </section>
        )}
        <div style={{ marginTop: "clamp(32px, 6vh, 64px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "clamp(36px, 5vw, 72px)", paddingTop: "clamp(32px, 5vh, 56px)", borderTop: "1px solid rgba(246,245,242,0.16)" }}>
          <div>
            <img src="/logo.png" alt="AdaptrixAI" style={{ display: "block", width: "184px", height: "auto" }} />
            <p style={{ marginTop: "18px", maxWidth: "32ch", fontSize: "15px", lineHeight: 1.65, color: "rgba(246,245,242,0.68)" }}>At AdaptrixAI, we are at the forefront of transforming businesses with the power of artificial intelligence.</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "oklch(0.74 0.13 195)" }}>Services</h3>
            <nav className="footer-services" aria-label="Footer services" style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px 24px", fontSize: "14px", lineHeight: 1.4, color: "rgba(246,245,242,0.72)" }}>
              {footerServices.map(([name, slug]) => <Link key={slug} to={`/services#service-${slug}`}>{name}</Link>)}
            </nav>
          </div>
          <div>
            <h3 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "oklch(0.74 0.13 195)" }}>Contact info</h3>
            <div style={{ marginTop: "20px", display: "grid", gap: "14px", fontSize: "15px", color: "rgba(246,245,242,0.72)" }}>
              <a href="tel:+61467498031">+61 467 498 031</a>
              <a href="mailto:customerservice@adaptrixai.com" style={{ overflowWrap: "anywhere" }}>customerservice@adaptrixai.com</a>
              <span>9 Bethany Way, Mickleham VIC 3064, Australia</span>
              <span>ACN 701 851 274</span>
            </div>
            <Link to="/contact" data-ax-accent-bg="" style={{ display: "inline-block", marginTop: "28px", padding: "14px 24px", borderRadius: "999px", background: "oklch(0.74 0.13 195)", color: "#0A0C10", fontWeight: 500, fontSize: "14px" }}>Start the conversation</Link>
          </div>
        </div>

        <footer style={{ marginTop: "clamp(56px, 10vh, 120px)", paddingTop: "24px", borderTop: "1px solid rgba(246,245,242,0.14)", display: "flex", flexWrap: "wrap", gap: "16px 32px", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "rgba(246,245,242,0.5)" }}>
          <span>© 2026 AdaptrixAI · Custom AI &amp; data science solutions</span>
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/#capabilities">Capabilities</Link>
            <Link to="/#industries">Industries</Link>
            <Link to="/#faq">FAQ</Link>
            <a href="https://www.linkedin.com/company/adaptrixai/" target="_blank" rel="noopener">LinkedIn</a>
          </nav>
        </footer>
      </div>
    </section>
  );
}
