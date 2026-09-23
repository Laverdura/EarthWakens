import { useState } from "react";
import { NavLink } from "react-router";

const LINKS = [
  { to: "/", label: "The Spiritual Realm" },
  { to: "/story", label: "The Living World" },
  { to: "/story#chapter3", label: "The Earth Spirit Wakens" },
  { to: "/story#chapter6", label: "The Fissure" },
  { to: "/story#chapter8", label: "AI & Humanity" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: open
          ? "rgba(4,8,2,0.98)"
          : "linear-gradient(to bottom, rgba(4,8,2,0.85) 0%, transparent 100%)",
        backdropFilter: open ? "blur(8px)" : "none",
        transition: "background 0.4s",
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-center h-16">
        {/* No wordmark — nav links carry the full story arc */}

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              style={({ isActive }) => ({
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#e0cc80",
                borderBottom: isActive ? "1px solid #c8b050" : "1px solid transparent",
                paddingBottom: "2px",
                transition: "color 0.2s, border-color 0.2s",
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5"
          style={{ width: "44px", height: "44px" }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "#d4c070",
                transition: "all 0.3s",
                opacity: open && i === 1 ? 0 : 1,
                transform: open
                  ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                  : i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                  : "none"
                  : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        style={{
          maxHeight: open ? "360px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-1" style={{ borderTop: "1px solid rgba(160,140,60,0.15)" }}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                fontFamily: "'Cinzel', serif",
                fontSize: "1rem",
                letterSpacing: "0.14em",
                color: isActive ? "#e8d88a" : "rgba(200,180,100,0.7)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(100,90,30,0.2)",
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
