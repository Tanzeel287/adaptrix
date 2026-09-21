import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import "./index.css";

/**
 * AdaptrixAI marketing site. Layout carries the persistent header, progress
 * bar and mascot; each route renders its own page content. Markup uses
 * inline styles so each section is self-contained. All motion lives in
 * ./motion.js (scroll reveals, parallax, 3D coverflow, hero film-burn, FAQ
 * accordion, mascot) and is re-initialised per route inside Layout.
 */
export default function App({ accentColor, motion = "full", showMascot = true }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout accentColor={accentColor} motion={motion} showMascot={showMascot} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
