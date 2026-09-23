import { Routes, Route, useLocation } from "react-router";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Story from "./pages/Story.jsx";
import Shop from "./pages/Shop.jsx";
import Books from "./pages/Books.jsx";
import Charity from "./pages/Charity.jsx";
import EarthSpirit from "./pages/EarthSpirit.jsx";

function NotFound() {
  return (
    <div style={{ background: "#060a04", minHeight: "100vh", paddingTop: "5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <p style={{ fontFamily: "'Cinzel', serif", color: "#8aab6a", fontSize: "1.1rem", letterSpacing: "0.1em" }}>
        This path leads nowhere the earth knows.
      </p>
      <a href="/" style={{ marginTop: "1.5rem", fontFamily: "'Lora', serif", fontStyle: "italic", color: "#c8b050", fontSize: "0.9rem" }}>
        Return to the surface →
      </a>
    </div>
  );
}

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div style={{ background: "#060a04" }}>
      {!isHome && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/story" element={<Story />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/books" element={<Books />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/earth-spirit" element={<EarthSpirit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  const basename = new URL(document.baseURI).pathname.replace(/\/$/, "");
  return <Layout />;
}
