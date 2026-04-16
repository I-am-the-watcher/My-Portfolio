import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = {
  "Programming & Dev": ["Python", "JavaScript", "HTML/CSS", "React", "Node.js"],
  "AI & ML": ["OpenAI APIs", "Prompt Engineering", "NLP Fundamentals"],
  "Cloud & DevOps": ["AWS (EC2, S3, IAM)", "GitHub Actions", "Docker", "CI/CD"],
  "Web Development": ["Responsive UI", "API Integration", "Dashboard Dev", "Static Deployment"],
  "Database": ["MySQL", "NoSQL (basics)"],
  "Tools": ["VS Code", "Postman", "Figma"],
};

const PROJECTS = [
  {
    title: "Opticode",
    subtitle: "AI-Based Python Code Optimizer",
    desc: "Full-stack platform using dual optimization engine — rule-based AST transformations + LLM semantic improvements. Features multi-LLM aggregation, explainable AI, complexity analysis, and performance visualizations.",
    tags: ["Python", "LLM", "AST", "Full-Stack", "AI"],
    accent: "#00e5c0",
  },
  {
    title: "VolunConnect",
    subtitle: "Volunteer Connecting Platform",
    desc: "Role-based platform for event organizers and volunteers. Built interactive dashboards, event management, and filtering systems to streamline community engagement and volunteer coordination.",
    tags: ["Web App", "Dashboard", "Community", "Full-Stack"],
    accent: "#ff6b6b",
  },
  {
    title: "StudyLens",
    subtitle: "Intelligent Learning Assistance Tool",
    desc: "AI-driven study companion with personalized recommendations, real-time doubt assistance, and adaptive content support to help students stay organized and understand concepts faster.",
    tags: ["AI", "EdTech", "Personalization", "NLP"],
    accent: "#a78bfa",
  },
  {
    title: "Genesis",
    subtitle: "AI-Powered Multi-Solution Platform",
    desc: "Hackathon project — integrated platform combining Smart Study Companion and other innovative AI solutions. Showcased at AI Genesis Conference & Exhibition, Dubai, 2025.",
    tags: ["Hackathon", "AI", "Multi-Solution", "Dubai"],
    accent: "#fbbf24",
  },
  {
    title: "DevOps Portfolio Site",
    subtitle: "Static Portfolio with Full CI/CD",
    desc: "Personal portfolio built with modern DevOps practices. Fully automated CI/CD pipeline using Git, GitHub Actions, and containerized environments for scalable, reliable deployments.",
    tags: ["DevOps", "CI/CD", "Docker", "GitHub Actions"],
    accent: "#34d399",
  },
];

const TIMELINE = [
  {
    period: "Oct 2022 – May 2026",
    role: "B.Tech in Information Technology",
    org: "Rajagiri School of Engineering & Technology, Kakkanad",
    type: "education",
  },
  {
    period: "June 2024",
    role: "Intern",
    org: "Integra Technologies, Dubai",
    detail: "AWS Fundamentals training; assisted technical staff with report presentations; adapted to local management practices.",
    type: "work",
  },
  {
    period: "May – June 2025",
    role: "IT Intern",
    org: "ADMMI, Abu Dhabi",
    detail: "Evaluated emerging technologies and provided technical support to the existing IT team.",
    type: "work",
  },
  {
    period: "April 2020 – May 2022",
    role: "High School",
    org: "Sharjah Indian School, Sharjah",
    type: "education",
  },
];

const EVENTS = [
  { title: "Unblock the Blockchain", date: "September 2024" },
  { title: "Introduction to NLP", date: "April 2025" },
  { title: "AI Genesis | /function1 — Dubai", date: "November 2025" },
  { title: "AI Samasya | International Conclave on Generative AI — Thiruvananthapuram (Hackathon)", date: "January 2026" },
];

const COURSES = [
  { name: "AWS Fundamentals for Beginners", platform: "Udemy", date: "June 2024" },
  { name: "Foundations of Cyber Security", platform: "Coursera", date: "April 2024" },
  { name: "Cloud Computing", platform: "Course", date: "" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#09090f", color: "#e8e8f0", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #09090f; }
        ::-webkit-scrollbar-thumb { background: #00e5c0; border-radius: 2px; }
        .nav-link { cursor: pointer; transition: color 0.2s; font-weight: 500; font-size: 0.85rem; letter-spacing: 0.08em; text-transform: uppercase; }
        .nav-link:hover { color: #00e5c0; }
        .skill-pill { display: inline-block; padding: 5px 14px; border-radius: 20px; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.04em; margin: 4px; border: 1px solid rgba(0,229,192,0.25); color: #00e5c0; background: rgba(0,229,192,0.06); transition: all 0.2s; }
        .skill-pill:hover { background: rgba(0,229,192,0.15); border-color: #00e5c0; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; transition: border-color 0.3s, transform 0.3s; }
        .card:hover { border-color: rgba(0,229,192,0.3); transform: translateY(-4px); }
        .tag { display: inline-block; font-size: 0.7rem; padding: 3px 10px; border-radius: 12px; margin: 3px; font-weight: 600; letter-spacing: 0.05em; }
        .cta-btn { cursor: pointer; border: none; padding: 14px 32px; border-radius: 8px; font-size: 0.9rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; transition: all 0.2s; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,229,192,0.3); }
        section { padding: 90px 0; }
        .section-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #00e5c0; margin-bottom: 8px; }
        .section-title { font-family: 'Syne', sans-serif; font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 800; line-height: 1.1; }
        .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
        a { color: inherit; text-decoration: none; }
        .hero-glow { position: absolute; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(0,229,192,0.12) 0%, transparent 70%); top: -100px; right: -100px; pointer-events: none; animation: pulse 6s ease-in-out infinite; }
        .hero-glow2 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%); bottom: 0; left: -80px; pointer-events: none; animation: pulse 8s ease-in-out infinite 2s; }
        @keyframes pulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.7; } }
        .dot-grid { position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px); background-size: 32px 32px; pointer-events: none; }
        .avatar-ring { width: 160px; height: 160px; border-radius: 50%; background: linear-gradient(135deg, #00e5c0, #a78bfa); padding: 3px; flex-shrink: 0; }
        .avatar-inner { width: 100%; height: 100%; border-radius: 50%; background: #14141f; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; color: #00e5c0; }
        .timeline-dot { width: 12px; height: 12px; border-radius: 50%; background: #00e5c0; flex-shrink: 0; margin-top: 5px; box-shadow: 0 0 12px rgba(0,229,192,0.5); }
        .timeline-line { width: 2px; background: rgba(0,229,192,0.15); flex: 1; min-height: 40px; margin: 4px auto; }
        .contact-icon { width: 44px; height: 44px; border-radius: 50%; background: rgba(0,229,192,0.1); border: 1px solid rgba(0,229,192,0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.1rem; }
        @media (max-width: 600px) {
          section { padding: 60px 0; }
          .grid-2, .grid-3 { grid-template-columns: 1fr; }
          .hero-flex { flex-direction: column !important; text-align: center; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(9,9,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s",
        padding: "0 clamp(16px, 5vw, 80px)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <span onClick={() => scrollTo("about")} style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", cursor: "pointer", color: "#00e5c0" }}>NP/</span>
          <div style={{ display: "flex", gap: 32 }}>
            {NAV_LINKS.map(l => (
              <span key={l} className="nav-link" onClick={() => scrollTo(l)} style={{ color: active === l ? "#00e5c0" : "#9090a8" }}>{l}</span>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "80px clamp(16px,5vw,80px) 0" }}>
        <div className="dot-grid" />
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative" }}>
          <div className="hero-flex" style={{ display: "flex", alignItems: "center", gap: 60 }}>
            <div style={{ flex: 1 }}>
              <FadeIn delay={0.1}>
                <p className="section-label" style={{ marginBottom: 16 }}>👋 Hello, I'm</p>
                <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem, 8vw, 5.5rem)", lineHeight: 1.0, marginBottom: 16 }}>
                  Niranjan<br />
                  <span style={{ color: "#00e5c0" }}>Parichippully</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#9090a8", maxWidth: 540, marginBottom: 32 }}>
                  IT engineering student with expertise in <span style={{ color: "#e8e8f0" }}>cloud computing</span>, <span style={{ color: "#e8e8f0" }}>software development</span>, and <span style={{ color: "#e8e8f0" }}>DevOps</span>. Building AI-driven solutions and automated deployments.
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <button className="cta-btn" onClick={() => scrollTo("Projects")} style={{ background: "#00e5c0", color: "#09090f" }}>View Projects</button>
                  <button className="cta-btn" onClick={() => scrollTo("Contact")} style={{ background: "transparent", color: "#e8e8f0", border: "1px solid rgba(255,255,255,0.15)" }}>Contact Me</button>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div style={{ display: "flex", gap: 24, marginTop: 48, flexWrap: "wrap" }}>
                  {[["📍", "Kochi, Kerala"], ["🎓", "B.Tech IT, 2026"], ["☁️", "Cloud & DevOps"]].map(([icon, label]) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, color: "#9090a8", fontSize: "0.85rem" }}>
                      <span>{icon}</span><span>{label}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.3}>
              <div className="avatar-ring">
                <img
                  src="/niranjan.jpeg"
                  alt="Niranjan Parichippully"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "90px clamp(16px,5vw,80px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <p className="section-label">What I work with</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>Skills &<br /><span style={{ color: "#00e5c0" }}>Technologies</span></h2>
          </FadeIn>
          <div className="grid-3">
            {Object.entries(SKILLS).map(([category, items], i) => (
              <FadeIn key={category} delay={i * 0.08}>
                <div className="card" style={{ padding: 24, height: "100%" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00e5c0", marginBottom: 14 }}>{category}</p>
                  <div>{items.map(s => <span key={s} className="skill-pill">{s}</span>)}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "90px clamp(16px,5vw,80px)", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <p className="section-label">What I've built</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>Featured<br /><span style={{ color: "#00e5c0" }}>Projects</span></h2>
          </FadeIn>
          <div className="grid-2">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="card" style={{ padding: 28, height: "100%", borderLeft: `3px solid ${p.accent}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.25rem" }}>{p.title}</h3>
                    <span style={{ fontSize: "1.4rem", opacity: 0.5 }}>→</span>
                  </div>
                  <p style={{ fontSize: "0.78rem", fontWeight: 600, color: p.accent, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>{p.subtitle}</p>
                  <p style={{ color: "#9090a8", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: 18 }}>{p.desc}</p>
                  <div>{p.tags.map(t => <span key={t} className="tag" style={{ background: `${p.accent}15`, color: p.accent, border: `1px solid ${p.accent}30` }}>{t}</span>)}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE / TIMELINE */}
      <section id="experience" style={{ padding: "90px clamp(16px,5vw,80px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <p className="section-label">My journey</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>Education &<br /><span style={{ color: "#00e5c0" }}>Experience</span></h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <FadeIn delay={0.1}>
                <p style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.14em", color: "#9090a8", textTransform: "uppercase", marginBottom: 24 }}>Timeline</p>
              </FadeIn>
              {TIMELINE.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{ display: "flex", gap: 16, marginBottom: 8 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div className="timeline-dot" style={{ background: item.type === "work" ? "#00e5c0" : "#a78bfa", boxShadow: `0 0 12px ${item.type === "work" ? "rgba(0,229,192,0.5)" : "rgba(167,139,250,0.5)"}` }} />
                      {i < TIMELINE.length - 1 && <div className="timeline-line" />}
                    </div>
                    <div style={{ paddingBottom: 24 }}>
                      <p style={{ fontSize: "0.7rem", color: item.type === "work" ? "#00e5c0" : "#a78bfa", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 4 }}>{item.period}</p>
                      <p style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 2 }}>{item.role}</p>
                      <p style={{ fontSize: "0.82rem", color: "#9090a8", marginBottom: item.detail ? 6 : 0 }}>{item.org}</p>
                      {item.detail && <p style={{ fontSize: "0.8rem", color: "#666680", lineHeight: 1.6 }}>{item.detail}</p>}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <div>
              <FadeIn delay={0.2}>
                <p style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.14em", color: "#9090a8", textTransform: "uppercase", marginBottom: 24 }}>Events & Webinars</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                  {EVENTS.map(e => (
                    <div key={e.title} className="card" style={{ padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>🎤 {e.title}</span>
                      <span style={{ fontSize: "0.72rem", color: "#9090a8" }}>{e.date}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.14em", color: "#9090a8", textTransform: "uppercase", marginBottom: 16 }}>Certifications</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {COURSES.map(c => (
                    <div key={c.name} className="card" style={{ padding: "14px 18px" }}>
                      <p style={{ fontSize: "0.88rem", fontWeight: 600, marginBottom: 2 }}>📜 {c.name}</p>
                      <p style={{ fontSize: "0.72rem", color: "#00e5c0" }}>{c.platform}{c.date && ` · ${c.date}`}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "90px clamp(16px,5vw,80px)", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <p className="section-label">Get in touch</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Let's Build<br /><span style={{ color: "#00e5c0" }}>Something</span></h2>
            <p style={{ color: "#9090a8", fontSize: "1rem", lineHeight: 1.7, marginBottom: 48 }}>
              Open to roles in cloud, DevOps, software development, and IT infrastructure. Let's connect!
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "stretch", maxWidth: 420, margin: "0 auto 48px" }}>
              {[
                { icon: "📧", label: "parichippully.004@gmail.com", href: "mailto:parichippully.004@gmail.com" },
                { icon: "📞", label: "+91 62873 70271 (India)", href: "tel:+916287370271" },
                { icon: "📱", label: "+971 50 517 7373 (UAE)", href: "tel:+971505177373" },
                { icon: "📍", label: "Kochi, Kerala, India", href: null },
              ].map(item => (
                <a key={item.label} href={item.href || "#"} className="card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 16, textAlign: "left", cursor: item.href ? "pointer" : "default" }}>
                  <div className="contact-icon">{item.icon}</div>
                  <span style={{ fontSize: "0.88rem", color: "#c8c8d8" }}>{item.label}</span>
                </a>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <a href="mailto:parichippully.004@gmail.com">
              <button className="cta-btn" style={{ background: "#00e5c0", color: "#09090f" }}>Send an Email →</button>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "28px clamp(16px,5vw,80px)", textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem", color: "#444460" }}>
          Designed & built by <span style={{ color: "#00e5c0" }}>Niranjan Parichippully</span> · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}