import SectionDivider from "../components/SectionDivider.jsx";

export default function Books() {
  return (
    <div style={{ background: "#060a04", minHeight: "100vh", paddingTop: "5rem" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 style={{ fontFamily: "'Cinzel', serif", color: "#c8b050", fontSize: "clamp(2rem,5vw,3.2rem)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Books
        </h1>
        <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", color: "#6a8a50", fontSize: "1rem", marginTop: "0.8rem" }}>
          Illustrated volumes from the waking earth
        </p>
        <SectionDivider />
        <p style={{ fontFamily: "'Lora', serif", color: "#8aab6a", fontSize: "0.95rem", lineHeight: 1.85, marginTop: "2rem" }}>
          Books are in preparation. Share your titles and we'll give them a home here.
        </p>
      </div>
    </div>
  );
}
