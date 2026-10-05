import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SiteMotion from "../motion";
import { BOOKING_URL } from "../data/contact";

/**
 * Shell shared by every route: progress bar, nav header and the mascot
 * widget stay mounted across navigations while <Outlet/> swaps page content.
 * SiteMotion is re-initialised on every pathname change so it re-queries the
 * fresh data-ax-* hooks each page brings in (reveal targets, cards, FAQs...).
 */
export default function Layout({ accentColor, motion = "full", showMascot = true }) {
  const rootRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mascotVisible, setMascotVisible] = useState(true);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const m = new SiteMotion({ accentColor, motion, showMascot });
    m.componentDidMount();
    return () => m.componentWillUnmount();
  }, [accentColor, motion, showMascot, location.pathname]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll("[data-hover]"));
    const offs = nodes.map((el) => {
      const decls = el.getAttribute("data-hover").split(";").map((d) => d.trim()).filter(Boolean)
        .map((d) => [d.slice(0, d.indexOf(":")).trim(), d.slice(d.indexOf(":") + 1).trim()]);
      const prev = decls.map(([p]) => [p, el.style.getPropertyValue(p)]);
      const on = () => decls.forEach(([p, v]) => el.style.setProperty(p, v));
      const off = () => prev.forEach(([p, v]) => v ? el.style.setProperty(p, v) : el.style.removeProperty(p));
      el.addEventListener("mouseenter", on);
      el.addEventListener("mouseleave", off);
      return () => { el.removeEventListener("mouseenter", on); el.removeEventListener("mouseleave", off); };
    });
    return () => offs.forEach((f) => f());
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
    }
  }, [location.pathname, location.hash]);

  return (
    <div ref={rootRef} data-ax-root="" style={{ width: "100%", background: "#F6F5F2", overflow: "hidden" }}>

      <div data-ax-progress="" style={{ position: "fixed", top: "0", left: "0", height: "3px", width: "100%", transform: "scaleX(0)", transformOrigin: "0 50%", background: "linear-gradient(90deg, oklch(0.74 0.13 195), oklch(0.78 0.13 65))", zIndex: "60" }}></div>

      <header className="site-header" data-ax-nav="" style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "50", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "18px clamp(16px, 4vw, 56px)", transition: "background 400ms ease, backdrop-filter 400ms ease, padding 400ms ease", color: "#F6F5F2" }}>
        <Link className="site-logo" to="/" aria-label="AdaptrixAI home" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img src="/logo.png" alt="AdaptrixAI" style={{ display: "block", width: "clamp(120px, 11vw, 148px)", height: "auto" }} />
        </Link>
        <button className="site-menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? "Close" : "Menu"} <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span></button>
        <nav id="site-navigation" className={`site-nav${menuOpen ? " is-open" : ""}`} onClick={() => setMenuOpen(false)} style={{ alignItems: "center", gap: "clamp(14px, 2vw, 30px)", fontSize: "14px", letterSpacing: "0.01em" }}>
          <Link to="/" data-ax-navlink="">Home</Link>
          <Link to="/about" data-ax-navlink="">About</Link>
          <Link to="/services" data-ax-navlink="">Services</Link>
          <Link to="/contact" data-ax-navlink="">Contact</Link>
          <Link className="site-nav-secondary" to="/#industries" data-ax-navlink="">Industries</Link>
          <a className="site-nav-cta" href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-ax-accent-border="" style={{ padding: "10px 18px", border: "1px solid oklch(0.74 0.13 195)", borderRadius: "999px", fontWeight: "500" }} data-hover="background: oklch(0.74 0.13 195); color: #0A0C10;">Book a discovery call</a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <div data-ax-bot="" style={{ position: "fixed", right: "clamp(14px, 2vw, 28px)", bottom: "clamp(14px, 2vw, 28px)", zIndex: "55", display: mascotVisible && showMascot ? "flex" : "none", alignItems: "flex-end", gap: "10px" }}>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" aria-label="Book a 30-minute call" style={{ display: "block", color: "inherit", textDecoration: "none", borderRadius: "12px", outlineOffset: "4px" }}>
          <div data-ax-bot-body="" aria-hidden="true" style={{ position: "relative", display: "block", width: "118px", height: "128px", animation: "ax-float 4.2s ease-in-out infinite" }}>
            <span style={{ position: "absolute", left: "50%", top: "1px", width: "2px", height: "12px", marginLeft: "-1px", background: "#F6F5F2", display: "block" }}></span>
            <span data-ax-accent-bg="" style={{ position: "absolute", left: "50%", top: "-6px", width: "10px", height: "10px", marginLeft: "-5px", borderRadius: "50%", background: "oklch(0.74 0.13 195)", display: "block", animation: "ax-ping 2.8s ease-out infinite" }}></span>
            <div style={{ position: "absolute", inset: "0", transformOrigin: "83px 108px", animation: "ax-wave 4.8s ease-in-out infinite" }}>
              <span style={{ position: "absolute", left: "79px", top: "58px", width: "8px", height: "50px", borderRadius: "4px", background: "#F6F5F2", boxShadow: "0 4px 12px rgba(0,0,0,0.25)", display: "block", transform: "rotate(24deg)", transformOrigin: "50% 100%" }}></span>
              <span style={{ position: "absolute", left: "102px", top: "9px", width: "3px", height: "57px", borderRadius: "2px", background: "#F6F5F2", boxShadow: "0 3px 8px rgba(0,0,0,0.2)", display: "block" }}></span>
              <span data-ax-accent-bg="" style={{ position: "absolute", left: "8px", top: "10px", width: "96px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", background: "oklch(0.74 0.13 195)", color: "#0A0C10", border: "2px solid #F6F5F2", borderRadius: "4px 4px 9px 4px", boxShadow: "0 6px 16px rgba(0,0,0,0.28)", fontFamily: "'IBM Plex Mono', monospace", fontSize: "9px", fontWeight: "700", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>BOOK A CALL <span style={{ marginLeft: "4px" }}>↗</span></span>
              <span style={{ position: "absolute", left: "96px", top: "54px", width: "15px", height: "16px", borderRadius: "7px", background: "#F6F5F2", border: "1px solid rgba(10,12,16,0.18)", boxShadow: "0 3px 8px rgba(0,0,0,0.2)", display: "block" }}></span>
            </div>
            <span style={{ position: "absolute", left: "24px", top: "46px", width: "70px", height: "50px", borderRadius: "18px", background: "#F6F5F2", border: "1px solid rgba(10,12,16,0.18)", boxShadow: "0 8px 22px rgba(0,0,0,0.28)", display: "block" }}></span>
            <span style={{ position: "absolute", left: "33px", top: "57px", width: "50px", height: "26px", borderRadius: "12px", background: "#0A0C10", display: "block" }}></span>
            <span style={{ position: "absolute", left: "43px", top: "65px", width: "11px", height: "11px", borderRadius: "50%", background: "#F6F5F2", display: "block", animation: "ax-eye 5.4s ease-in-out infinite" }}></span>
            <span style={{ position: "absolute", left: "64px", top: "65px", width: "11px", height: "11px", borderRadius: "50%", background: "#F6F5F2", display: "block", animation: "ax-eye 5.4s ease-in-out infinite" }}></span>
            <span style={{ position: "absolute", left: "35px", top: "100px", width: "48px", height: "28px", borderRadius: "12px", background: "#F6F5F2", border: "1px solid rgba(10,12,16,0.18)", boxShadow: "0 8px 22px rgba(0,0,0,0.28)", display: "block" }}></span>
            <span data-ax-accent-bg="" style={{ position: "absolute", left: "52px", top: "111px", width: "16px", height: "4px", borderRadius: "2px", background: "oklch(0.74 0.13 195)", display: "block" }}></span>
            <span style={{ position: "absolute", left: "26px", top: "100px", width: "8px", height: "24px", borderRadius: "4px", background: "#F6F5F2", boxShadow: "0 4px 12px rgba(0,0,0,0.25)", display: "block" }}></span>
          </div>
        </a>
        <button type="button" onClick={() => setMascotVisible(false)} aria-label="Hide booking mascot" style={{ position: "absolute", top: "-8px", right: "-6px", width: "22px", height: "22px", padding: "0", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(10,12,16,0.3)", borderRadius: "50%", background: "#F6F5F2", color: "#0A0C10", fontSize: "15px", lineHeight: "1", cursor: "pointer", boxShadow: "0 3px 8px rgba(0,0,0,0.2)" }}><span aria-hidden="true">×</span></button>
      </div>
    </div>
  );
}
