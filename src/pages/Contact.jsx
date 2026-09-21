import ContactFooter from "../components/ContactFooter";
import ContactForm from "../components/ContactForm";
import { BOOKING_URL } from "../data/contact";

const accent = "oklch(0.74 0.13 195)";

export default function Contact() {
  return (
    <>
      <section style={{ position: "relative", background: "#0A0C10", color: "#F6F5F2", padding: "clamp(144px, 20vh, 220px) clamp(16px, 4vw, 56px) clamp(72px, 12vh, 132px)", overflow: "hidden" }}>
        <div data-ax-blob="" style={{ position: "absolute", top: "-35%", right: "-12%", width: "68vw", height: "68vw", borderRadius: "50%", background: "radial-gradient(circle, oklch(0.62 0.13 195 / 0.4), transparent 62%)", filter: "blur(35px)", animation: "ax-drift 24s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto" }}>
          <span data-ax-accent-fg="" style={{ color: accent, fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Contact</span>
          <h1 data-r="" style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 800ms ease, transform 800ms cubic-bezier(0.22,1,0.36,1)", marginTop: "20px", maxWidth: "14ch", fontSize: "clamp(42px, 7vw, 96px)", lineHeight: 0.98 }}>Let’s talk about what you’re building.</h1>
          <p data-r="" data-d="120" style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)", marginTop: "28px", maxWidth: "54ch", fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: 1.6, color: "rgba(246,245,242,0.7)" }}>Tell us where you are and what you need. We’ll help you find a practical way forward.</p>
        </div>
      </section>

      <section style={{ background: "#F6F5F2", padding: "clamp(64px, 10vh, 112px) clamp(16px, 4vw, 56px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "clamp(48px, 8vw, 120px)", alignItems: "start" }}>
          <div>
            <span data-ax-accent-fg="" style={{ color: accent, fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Start a conversation</span>
            <h2 style={{ marginTop: "18px", fontSize: "clamp(30px, 4vw, 54px)", lineHeight: 1.04 }}>Have a project in mind?</h2>
            <p style={{ marginTop: "22px", maxWidth: "48ch", fontSize: "16px", lineHeight: 1.65, color: "rgba(10,12,16,0.66)" }}>Share a few details and we’ll pick up the conversation by email. You can also reach us directly.</p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-ax-accent-bg="" style={{ display: "inline-flex", alignItems: "center", marginTop: "30px", padding: "16px 28px", borderRadius: "999px", background: accent, color: "#0A0C10", fontWeight: 500, fontSize: "15px" }}>Book a 30-minute call ↗</a>
            <div style={{ marginTop: "44px", display: "grid", gap: "26px" }}>
              <div style={{ borderTop: "1px solid rgba(10,12,16,0.18)", paddingTop: "18px" }}><span style={{ display: "block", fontSize: "12px", color: "rgba(10,12,16,0.5)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Email</span><a href="mailto:customerservice@adaptrixai.com" style={{ display: "inline-block", marginTop: "8px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(17px, 1.8vw, 22px)", wordBreak: "break-word" }}>customerservice@adaptrixai.com</a></div>
              <div style={{ borderTop: "1px solid rgba(10,12,16,0.18)", paddingTop: "18px" }}><span style={{ display: "block", fontSize: "12px", color: "rgba(10,12,16,0.5)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Phone</span><a href="tel:+61467498031" style={{ display: "inline-block", marginTop: "8px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(17px, 1.8vw, 22px)" }}>+61 467 498 031</a></div>
              <div style={{ borderTop: "1px solid rgba(10,12,16,0.18)", paddingTop: "18px" }}><span style={{ display: "block", fontSize: "12px", color: "rgba(10,12,16,0.5)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Studio</span><span style={{ display: "block", marginTop: "8px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(17px, 1.8vw, 22px)" }}>9 Bethany Way, Mickleham VIC 3064, Australia</span><span style={{ display: "block", marginTop: "6px", fontSize: "14px", color: "rgba(10,12,16,0.62)" }}>ACN 701 851 274</span></div>
            </div>
          </div>

          <ContactForm id="contact-form" />
        </div>
      </section>

      <ContactFooter heading="Ready when you are." compact />
    </>
  );
}
