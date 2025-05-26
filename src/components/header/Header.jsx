import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link
          to="#hero"
          onClick={handleLogoClick}
          className="logo"
          aria-label="Lazer-tech logo"
        >
          <img
            src="/logo.svg"
            alt="Lazer-tech logo"
            width={36}
            height={36}
          />
          <span>Lazer-tech</span>
        </Link>

        <button
          ref={burgerRef}
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          ref={navRef}
          className={`nav ${menuOpen ? "active" : ""}`}
        >
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
