import { useState } from "react";

const accent = "oklch(0.74 0.13 195)";
const field = { width: "100%", padding: "15px 16px", border: "1px solid rgba(10,12,16,0.2)", borderRadius: "4px", background: "#FFFFFF", color: "#0A0C10", font: "inherit", fontSize: "15px" };
const label = { display: "block", marginBottom: "9px", fontSize: "13px", fontWeight: 500 };

export default function ContactForm({ id, prefix = "contact" }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(false);
    const data = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "c83d9d50-23d0-4572-a2fb-f9dd1cb1ae63",
          subject: "New contact form submission — Adaptrix AI",
          from_name: String(data.get("name") || "").trim(),
          email: String(data.get("email") || "").trim(),
          company: String(data.get("company") || "").trim(),
          message: String(data.get("message") || "").trim(),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Message was not accepted");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) return <div id={id} role="status" style={{ background: "#FFFFFF", border: "1px solid rgba(10,12,16,0.14)", padding: "clamp(24px, 4vw, 48px)", fontSize: "17px", lineHeight: 1.6 }}>Thank you. Your message has been sent. A specialist will follow up within one business day. In the meantime, you can reach us at <a href="mailto:customerservice@adaptrixai.com">customerservice@adaptrixai.com</a>.</div>;

  return (
    <form id={id} onSubmit={handleSubmit} style={{ background: "#FFFFFF", border: "1px solid rgba(10,12,16,0.14)", padding: "clamp(24px, 4vw, 48px)", display: "grid", gap: "22px", scrollMarginTop: "100px" }}>
      <h2 style={{ fontSize: "clamp(23px, 2.6vw, 32px)" }}>Tell us about your project</h2>
      <div><label htmlFor={`${prefix}-name`} style={label}>Your name *</label><input id={`${prefix}-name`} name="name" type="text" autoComplete="name" required style={field} /></div>
      <div><label htmlFor={`${prefix}-email`} style={label}>Work email *</label><input id={`${prefix}-email`} name="email" type="email" autoComplete="email" required style={field} /></div>
      <div><label htmlFor={`${prefix}-company`} style={label}>Company</label><input id={`${prefix}-company`} name="company" type="text" autoComplete="organization" style={field} /></div>
      <div><label htmlFor={`${prefix}-message`} style={label}>What would you like to build? *</label><textarea id={`${prefix}-message`} name="message" required rows={6} style={{ ...field, resize: "vertical" }} /></div>
      {error && <p role="alert" style={{ fontSize: "14px", lineHeight: 1.5, color: "#A12626" }}>Something went wrong sending your message. Please try again or email us directly.</p>}
      <button type="submit" disabled={loading} data-ax-accent-bg="" style={{ justifySelf: "start", border: 0, borderRadius: "999px", padding: "16px 28px", background: accent, color: "#0A0C10", font: "inherit", fontWeight: 500, cursor: loading ? "wait" : "pointer", opacity: loading ? 0.7 : 1 }}>{loading ? "Sending…" : "Send message →"}</button>
    </form>
  );
}
