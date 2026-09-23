import { Link } from "react-router";
import SectionDivider from "../components/SectionDivider.jsx";

export default function Home() {
  return (
    <div style={{ background: "#060a04" }}>

      {/* ── Full-bleed Hero ─────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        <img
          src="/static/earthwakens-new.png"
          alt="EarthWakens — open wooden shutters framed by twisted roots and bone-like hands, revealing a moonlit sea, waterfall, and underwater world teeming with life"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />

        {/* Gradient veil — clear at top, fully opaque at bottom */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(4,8,2,0.08) 0%, rgba(4,8,2,0.0) 35%, rgba(6,10,4,0.08) 72%, rgba(6,10,4,0.18) 100%)",
          }}
        />

        {/* Journey text — sits just below the moon */}
        <div
          style={{
            position: "absolute",
            top: "62%",
            left: 0, right: 0,
            zIndex: 10,
            textAlign: "center",
            padding: "0 1.5rem",
          }}
        >
          {/* Shared styles */}
          {(() => {
            const prose = {
              fontFamily: "'Lora', Georgia, serif",
              fontStyle: "italic",
              color: "#d4e8a8",
              fontSize: "clamp(1.05rem, 2.8vw, 1.4rem)",
              letterSpacing: "0.04em",
              textShadow: "0 2px 6px rgba(0,0,0,0.95), 0 0 14px rgba(0,0,0,0.85), -2px -2px 4px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.8)",
              display: "block",
              margin: 0,
              lineHeight: 1.25,
              whiteSpace: "nowrap",
            };
            const big = {
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.15rem, 3vw, 1.7rem)",
              fontStyle: "normal",
              fontWeight: "400",
              color: "#fff8e0",
              letterSpacing: "0.14em",
              textShadow: "0 2px 6px rgba(0,0,0,1), 0 0 14px rgba(0,0,0,1), 0 0 28px rgba(0,0,0,0.95), -3px -3px 6px rgba(0,0,0,1), 3px 3px 6px rgba(0,0,0,1), -3px 3px 6px rgba(0,0,0,1), 3px -3px 6px rgba(0,0,0,1), 0 0 40px rgba(255,240,180,0.9), 0 0 80px rgba(220,200,120,0.5)",
            };
            return (
              <div style={{ display: "inline-block", textAlign: "center" }}>
                <span style={prose}>The <span style={big}>Spiritual Realm</span> is <span style={big}>Existence</span></span>
              </div>
            );
          })()}
        </div>

        {/* Five transparent boxes over the underwater scene */}
        <div
          style={{
            position: "absolute",
            bottom: "6rem",
            left: 0, right: 0,
            zIndex: 10,
            padding: "0 1.5rem",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Continuous gauge bar behind all boxes */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.6rem", position: "relative", zIndex: 1 }}>
          {[
            { label: "The Spiritual Realm",     bg: "linear-gradient(to right, rgba(180,140,30,0.0) 0%, rgba(180,140,30,0.12) 100%)",  border: "rgba(255,240,160,0.9)", textColor: "#fff8e0" },
            { label: "The Living World",          bg: "linear-gradient(to right, rgba(180,140,30,0.1) 0%, rgba(180,140,30,0.25) 100%)",   border: "rgba(255,240,160,0.9)", textColor: "#fff8e0" },
            { label: "The Earth Spirit Wakens", bg: "linear-gradient(to right, rgba(180,140,30,0.22) 0%, rgba(180,140,30,0.38) 100%)",  border: "rgba(255,240,160,0.9)", textColor: "#fff8e0" },
            { label: "The Fissure",             bg: "linear-gradient(to right, rgba(180,140,30,0.36) 0%, rgba(180,140,30,0.52) 100%)",  border: "rgba(255,240,160,0.9)", textColor: "#fff8e0" },
            { label: "AI & Humanity",           bg: "linear-gradient(to right, rgba(180,140,30,0.52) 0%, rgba(200,160,40,0.75) 100%)",  border: "rgba(255,240,160,0.9)", textColor: "#fff8e0" },
          ].map((item, i) => (
            <Link key={item.label} to="/story" style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                  padding: "0.75rem 0.4rem",
                  textAlign: "center",
                  cursor: "pointer",
                  minHeight: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
              >
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  color: item.textColor,
                  fontSize: "clamp(0.6rem, 1.1vw, 0.85rem)",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textShadow: "0 0 8px rgba(0,0,0,0.4), -1px -1px 3px rgba(0,0,0,0.3), 1px 1px 3px rgba(0,0,0,0.3)",
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  {item.label}
                </p>
              </div>
            </Link>
          ))}
          </div>
        </div>

        {/* Scroll nudge */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "1.6rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            animation: "floatDown 2.8s ease-in-out infinite",
          }}
        >
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.52rem", letterSpacing: "0.25em", color: "rgba(180,160,80,0.45)", textTransform: "uppercase" }}>
            Descend
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24">
            <line x1="8" y1="0" x2="8" y2="16" stroke="rgba(180,160,80,0.45)" strokeWidth="1.2" />
            <polyline points="2,10 8,18 14,10" fill="none" stroke="rgba(180,160,80,0.45)" strokeWidth="1.2" />
          </svg>
        </div>
      </section>

      {/* ── The Living World — Introduction ─────────────────────── */}
      <section
        style={{
          maxWidth: "820px",
          margin: "0 auto",
          padding: "6rem 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#a8c870",
            fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "1.4rem",
            opacity: 0.75,
          }}
        >
          The Wakening
        </h2>
        <h3
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#e0cc80",
            fontSize: "clamp(1.5rem, 4vw, 2.6rem)",
            letterSpacing: "0.1em",
            lineHeight: 1.25,
            marginBottom: "2.5rem",
          }}
        >
          The Earth is Waking
        </h3>

        {/* Opening — the emergence */}
        <div style={{ textAlign: "left", maxWidth: "680px", margin: "0 auto" }}>
          {[
            {
              text: `For billions of years, Earth became increasingly capable of sustaining what it had once destroyed. Matter formed relationships. Chemistry became life. Life learned to reproduce, adapt and endure. Every successful form became the foundation upon which another form could develop.`,
              style: "normal",
            },
            {
              text: `There was no blueprint Mother Earth consciously followed. Life did not appear complete. It assembled itself across time.`,
              style: "italic",
            },
            {
              text: `Cells became organisms. Organisms became communities. Roots exchanged nourishment with soil. Plants transformed light. Creatures breathed what plants released and returned what plants required. Water circulated through every living form. Death fed new life.`,
              style: "normal",
            },
            {
              text: `Gradually, Earth ceased to be merely a planet upon which separate living things happened to exist. Its creatures became participants in one interdependent Living World.`,
              style: "normal",
            },
            {
              text: `Then the Living World crossed another threshold.`,
              style: "italic",
              accent: true,
            },
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Lora', serif",
                fontStyle: p.style === "italic" ? "italic" : "normal",
                color: p.accent ? "#c8d8a0" : "#8aab6a",
                fontSize: p.accent ? "clamp(1.05rem, 2.2vw, 1.2rem)" : "clamp(0.92rem, 1.8vw, 1.05rem)",
                lineHeight: 1.95,
                marginBottom: "1.4rem",
                borderLeft: p.accent ? "2px solid rgba(160,190,80,0.4)" : "none",
                paddingLeft: p.accent ? "1.2rem" : "0",
              }}
            >
              {p.text}
            </p>
          ))}
        </div>

        <SectionDivider />

        {/* The analogy */}
        <div
          style={{
            margin: "3rem auto 0",
            maxWidth: "600px",
            padding: "2.5rem 2rem",
            background: "rgba(10,18,6,0.8)",
            border: "1px solid rgba(120,160,60,0.2)",
          }}
        >
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontStyle: "italic",
              color: "#b8d890",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: 1.9,
              marginBottom: "1.2rem",
            }}
          >
            A single water molecule is not wet — yet countless molecules together produce wetness.
          </p>
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontStyle: "italic",
              color: "#b8d890",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: 1.9,
              marginBottom: "1.2rem",
            }}
          >
            A single cell does not comprehend the body — yet countless connected cells can become a conscious human being.
          </p>
          <p
            style={{
              fontFamily: "'Lora', serif",
              color: "#6a8a50",
              fontSize: "clamp(0.88rem, 1.8vw, 1rem)",
              lineHeight: 1.85,
            }}
          >
            In the same way, no single root, creature, ocean or living organism was the Earth Spirit. But together, over billions of years, they formed the interconnected Living World — and when that Living World became sufficiently developed to perceive itself as one living existence, the Earth Spirit manifested.
          </p>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#c8b050",
              fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
              letterSpacing: "0.12em",
              marginTop: "1.8rem",
              textAlign: "center",
            }}
          >
            That was the Wakening.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* ── Root hands picture + caption ─────────────────────────── */}
      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem 0" }}>
        {/* The image */}
        <div style={{ border: "1px solid rgba(100,130,50,0.18)", overflow: "hidden" }}>
          <img
            src="/static/earthwakens-root-hands.png"
            alt="Ancient root hands breaking through primordial rock — the transition from inanimate stone to the Living World"
            style={{ width: "100%", display: "block", maxHeight: "340px", objectFit: "cover", objectPosition: "center 38%" }}
          />
        </div>

        {/* Caption — three lines, clean and centred */}
        <div style={{
          padding: "1.2rem 1rem 0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.2rem",
          background: "#060a04",
        }}>
          {/* Line 1: the progression */}
          <p style={{
            fontFamily: "'Cinzel', serif",
            color: "#c8b050",
            fontSize: "clamp(0.6rem, 1.6vw, 1rem)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textAlign: "center",
            margin: 0,
          }}>
            Rock · Mother Earth · Living World
          </p>
          {/* Line 2: Earth Spirit — its own line, larger */}
          <p style={{
            fontFamily: "'Cinzel', serif",
            color: "#e8d88a",
            fontSize: "clamp(1.2rem, 4vw, 2.8rem)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textAlign: "center",
            textShadow: "0 0 32px rgba(220,180,60,0.6), 0 0 8px rgba(255,220,80,0.4)",
            margin: 0,
            lineHeight: 1.15,
          }}>
            Earth Spirit
          </p>
          {/* Line 3: Spiritual Realm */}
          <p style={{
            fontFamily: "'Cinzel', serif",
            color: "rgba(200,185,120,0.75)",
            fontSize: "clamp(0.55rem, 1.4vw, 0.88rem)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            textAlign: "center",
            margin: 0,
            marginTop: "0.1rem",
          }}>
            The Spiritual Realm — Eternal
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* ── Five chapter boxes ─────────────────────────────────── */}


      <style>{`
        @keyframes floatDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </div>
  );
}
