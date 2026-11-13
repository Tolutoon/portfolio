import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock page scroll + close on Escape while menu is open
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 z-40 w-full mix-blend-difference">
        <div className="main-container py-6 flex justify-between items-center">
          <Link to="/" aria-label="Back to home" onClick={() => setMenuOpen(false)}>
            <img src={Logo} alt="Tolu logo" className="h-10 w-auto" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex flex-col gap-1.5 cursor-pointer p-2 -m-2"
          >
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed z-30 inset-0 bg-black text-white flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col items-center gap-6" aria-label="Site menu">
          <Link to="/" className="menu-link" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <a
            href="https://drive.google.com/file/d/1m6i3Kcnlq6wf9YvXaYKCrb4Q9N-SJR5D/view?usp=sharing"
            className="menu-link"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={menuOpen ? 0 : -1}
          >
            Resume
          </a>
          <a href="https://github.com/tolutoon" className="menu-link" tabIndex={menuOpen ? 0 : -1}>
            Github
          </a>
          <Link to="/projects" className="menu-link" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
