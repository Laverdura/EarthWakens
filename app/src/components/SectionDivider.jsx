export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-3" aria-hidden="true">
      <svg width="340" height="20" viewBox="0 0 340 20" style={{ maxWidth: "90vw" }}>
        <line x1="0" y1="10" x2="140" y2="10" stroke="#2a3a18" strokeWidth="0.6" />
        <path d="M 150 10 Q 155 4 160 10 Q 165 16 170 10 Q 175 4 180 10 Q 185 16 190 10" stroke="#8aab5a" strokeWidth="1.2" fill="none" />
        <circle cx="170" cy="10" r="2.5" fill="#a8c870" />
        <line x1="200" y1="10" x2="340" y2="10" stroke="#2a3a18" strokeWidth="0.6" />
      </svg>
    </div>
  );
}
