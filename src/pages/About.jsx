import ContactFooter from "../components/ContactFooter";

const services = [
  ["AI-Powered Automation", "Streamlining operations and enhancing efficiency with intelligent automation."],
  ["AI Agents", "Deploying autonomous AI-driven assistants to optimize workflows, customer interactions, and decision-making."],
  ["Predictive Analytics", "Leveraging machine learning to forecast trends, risks, and opportunities."],
  ["Data Strategy & Consulting", "Helping organizations build scalable, AI-ready data ecosystems."],
  ["AI & Machine Learning Solutions", "Developing custom AI models to optimize business performance."],
  ["Business Intelligence & Insights", "Transforming raw data into actionable strategies for growth."],
];

const reveal = {
  opacity: 0,
  transform: "translateY(24px)",
  transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)",
};

const label = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: "11px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "oklch(0.74 0.13 195)",
};

export default function About() {
  return (
    <>
      <section style={{ position: "relative", minHeight: "72vh", background: "#0A0C10", color: "#F6F5F2", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(120px, 18vh, 200px) clamp(16px, 4vw, 56px) clamp(56px, 8vh, 96px)", overflow: "hidden" }}>
        <img src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Team collaborating around a table" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.36, filter: "saturate(0.55) contrast(1.06)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,12,16,0.68) 0%, rgba(10,12,16,0.5) 45%, rgba(10,12,16,0.95) 100%)" }} />
        <div data-ax-blob="" style={{ position: "absolute", top: "-18%", left: "-8%", width: "56vw", height: "56vw", borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, oklch(0.62 0.13 195 / 0.42), transparent 62%)", filter: "blur(30px)", animation: "ax-drift 24s ease-in-out infinite" }} />
        <div style={{ position: "relative", maxWidth: "1320px", width: "100%", margin: "0 auto" }}>
          <span data-ax-accent-fg="" style={label}>About Us</span>
          <h1 data-r="" style={{ ...reveal, marginTop: "18px", fontSize: "clamp(38px, 7vw, 96px)", lineHeight: 0.98, maxWidth: "18ch" }}>About Us</h1>
          <p data-r="" data-d="120" style={{ ...reveal, marginTop: "24px", maxWidth: "68ch", fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: 1.6, color: "rgba(246,245,242,0.72)", fontWeight: 300 }}>At AdaptrixAI, we are at the forefront of transforming businesses with the power of artificial intelligence. Our mission is to unlock the full potential of AI and data science by offering innovative, agentic AI solutions designed to drive intelligent automation, optimize operations, and fuel growth.</p>
        </div>
      </section>

      <section style={{ background: "#F6F5F2", padding: "clamp(56px, 9vh, 104px) clamp(16px, 4vw, 56px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(28px, 5vw, 72px)", alignItems: "center" }}>
          <div data-r="" data-ax-par="0.05" style={{ ...reveal, aspectRatio: "4 / 5", minHeight: "320px", overflow: "hidden", background: "#EBE9E3" }}>
            <img src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Colleagues discussing work at a table" style={{ width: "100%", height: "100%", objectFit: "cover", animation: "ax-kb 26s ease-in-out infinite" }} />
          </div>
          <div>
            <span data-ax-accent-fg="" style={label}>Agentic AI</span>
            <h2 data-r="" style={{ ...reveal, marginTop: "18px", fontSize: "clamp(28px, 3.6vw, 50px)", lineHeight: 1.06, maxWidth: "20ch" }}>Intelligent systems that act</h2>
            <p data-r="" data-d="100" style={{ ...reveal, marginTop: "20px", fontSize: "16px", lineHeight: 1.65, color: "rgba(10,12,16,0.64)", maxWidth: "58ch", fontWeight: 300 }}>Agentic AI, a key focus of our work, is the next generation of AI technology that empowers systems to autonomously make decisions, adapt to dynamic environments, and take actions that align with business goals. We combine agentic AI with deep analytics to create intelligent systems that not only learn from data but act on it in real-time, delivering significant operational efficiencies and competitive advantages.</p>
            <p data-r="" data-d="180" style={{ ...reveal, marginTop: "18px", fontSize: "16px", lineHeight: 1.65, color: "rgba(10,12,16,0.64)", maxWidth: "58ch", fontWeight: 300 }}>Our team of experienced data scientists, machine learning engineers, and AI experts are passionate about helping businesses leverage AI to gain deeper insights, streamline processes, and stay ahead in their respective industries. Whether in edtech, energy, retail, or travel, we provide customized AI solutions that meet the unique needs of each client.</p>
            <p data-r="" data-d="240" style={{ ...reveal, marginTop: "18px", fontSize: "16px", lineHeight: 1.65, color: "rgba(10,12,16,0.64)", maxWidth: "58ch", fontWeight: 300 }}>At AdaptrixAI, we’re more than just a tech company — we’re building the future of business intelligence with intelligent, agentic systems that empower businesses to thrive in an increasingly complex digital world.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "#0A0C10", color: "#F6F5F2", padding: "clamp(64px, 11vh, 132px) clamp(16px, 4vw, 56px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "clamp(24px, 5vw, 72px)" }}>
          <article data-r="" style={{ ...reveal, borderTop: "1px solid rgba(246,245,242,0.18)", paddingTop: "24px" }}>
            <span data-ax-accent-fg="" style={label}>Mission</span>
            <h2 style={{ marginTop: "18px", fontSize: "clamp(28px, 3.6vw, 50px)", lineHeight: 1.06 }}>Our Mission</h2>
            <p style={{ marginTop: "20px", fontSize: "16px", lineHeight: 1.65, color: "rgba(246,245,242,0.68)", maxWidth: "56ch", fontWeight: 300 }}>At AdaptrixAI, our mission is to empower businesses with cutting-edge AI, analytics, and data science solutions that drive intelligent decision-making, operational efficiency, and innovation. We strive to bridge the gap between complex data and real-world impact, helping organizations unlock their full potential in an AI-driven world.</p>
          </article>
          <article data-r="" data-d="100" style={{ ...reveal, borderTop: "1px solid rgba(246,245,242,0.18)", paddingTop: "24px" }}>
            <span data-ax-accent-fg="" style={label}>Vision</span>
            <h2 style={{ marginTop: "18px", fontSize: "clamp(28px, 3.6vw, 50px)", lineHeight: 1.06 }}>Our Vision</h2>
            <p style={{ marginTop: "20px", fontSize: "16px", lineHeight: 1.65, color: "rgba(246,245,242,0.68)", maxWidth: "56ch", fontWeight: 300 }}>Our vision is to be a global leader in AI and data-driven transformation, enabling businesses across industries to harness the power of advanced analytics and automation. We aim to shape the future of AI adoption, making it more accessible, ethical, and impactful for enterprises of all sizes.</p>
          </article>
        </div>
      </section>

      <section style={{ background: "#F6F5F2", padding: "clamp(64px, 11vh, 132px) clamp(16px, 4vw, 56px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <span data-ax-accent-fg="" style={label}>Capabilities</span>
          <h2 data-r="" style={{ ...reveal, margin: "18px 0 clamp(32px, 5vh, 64px)", fontSize: "clamp(30px, 4.4vw, 62px)", lineHeight: 1.03 }}>What We Do at AdaptrixAI</h2>
          <p data-r="" style={{ ...reveal, margin: "-20px 0 clamp(32px, 5vh, 64px)", maxWidth: "70ch", fontSize: "16px", lineHeight: 1.65, color: "rgba(10,12,16,0.64)", fontWeight: 300 }}>At AdaptrixAI, we harness the power of AI, analytics, and data science to help businesses make smarter, data-driven decisions. Our expertise includes:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1px" }}>
            {services.map(([title, description], index) => (
              <article key={title} data-r="" data-d={String((index % 3) * 70)} style={{ ...reveal, background: "#F6F5F2", border: "1px solid rgba(10,12,16,0.14)", padding: "clamp(26px, 3vw, 40px)", minHeight: "220px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", color: "rgba(10,12,16,0.42)" }}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 style={{ fontSize: "clamp(20px, 2vw, 25px)" }}>{title}</h3>
                  <p style={{ marginTop: "12px", fontSize: "15px", lineHeight: 1.6, color: "rgba(10,12,16,0.62)", fontWeight: 300 }}>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactFooter heading="Come build the next AI win with us." compact />
    </>
  );
}
