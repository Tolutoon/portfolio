import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ConsentBanner from "./components/ConsentBanner";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

const App = () => {
  const { pathname } = useLocation();

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
      <ConsentBanner />
    </>
  );
};

export default App;
