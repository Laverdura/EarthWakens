import SectionDivider from "../components/SectionDivider.jsx";

export default function Gallery() {
  return (
    <div style={{ background: "#060a04", minHeight: "100vh", paddingTop: "5rem" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 style={{ fontFamily: "'Cinzel', serif", color: "#c8b050", fontSize: "clamp(2rem,5vw,3.2rem)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Gallery
        </h1>
        <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", color: "#6a8a50", fontSize: "1rem", marginTop: "0.8rem" }}>
          Original works from the waking earth — coming soon
        </p>
        <SectionDivider />
        <p style={{ fontFamily: "'Lora', serif", color: "#8aab6a", fontSize: "0.95rem", lineHeight: 1.85, marginTop: "2rem" }}>
          The gallery is being prepared. Add your images and we'll fill this space together.
        </p>
      </div>
    </div>
  );
}
