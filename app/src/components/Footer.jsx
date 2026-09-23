import { Link } from "react-router";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#020501",
        borderTop: "1px solid rgba(140,120,40,0.2)",
        padding: "3rem 1.5rem 2rem",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            color: "#c8b050",
            fontSize: "1.2rem",
            letterSpacing: "0.2em",
          }}
        >
          EarthWakens
        </div>
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontStyle: "italic",
            color: "#8aab6a",
            fontSize: "0.88rem",
            textAlign: "center",
            maxWidth: "380px",
            lineHeight: 1.75,
          }}
        >
          The earth stirs. Something old is opening its eyes.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { to: "/gallery", label: "Gallery" },
            { to: "/story", label: "The Story" },
            { to: "/shop", label: "Shop" },
            { to: "/books", label: "Books" },
            { to: "/charity", label: "Charity" },
            { to: "/earth-spirit", label: "Earth Spirit" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontFamily: "'Cinzel', serif",
                color: "#6a8a50",
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <p
          style={{
            color: "#3a4a28",
            fontSize: "0.7rem",
            fontFamily: "serif",
            letterSpacing: "0.08em",
          }}
        >
          © {new Date().getFullYear()} EarthWakens.com — All works original
        </p>
      </div>
    </footer>
  );
}
