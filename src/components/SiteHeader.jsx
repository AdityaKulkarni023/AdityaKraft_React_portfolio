import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { label: "Home", path: "/", icon: "fa-home" },
  { label: "About", path: "/about", icon: "fa-user" },
  { label: "Experience", path: "/experience", icon: "fa-briefcase" },
  { label: "Works", path: "/work", icon: "fa-th-large" },
  { label: "YouTube", path: "/youtube", icon: "fa-play-circle" },
  { label: "Contact", path: "/contact", icon: "fa-comment-dots" },
];

function Brand() {
  return (
    <Link className="navbar-brand me-0" to="/" aria-label="AdityaKraft home">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="0" y="0" width="32" height="32" rx="9" fill="#4770FF" />
        <text
          x="16"
          y="17"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Bricolage Grotesque', Arial, sans-serif"
          fontWeight="800"
          fontSize="14"
          letterSpacing="-0.5"
          fill="#ffffff"
        >
          AK
        </text>
      </svg>
      <span>
        Aditya<span className="primary">Kraft</span>
      </span>
    </Link>
  );
}

export default function SiteHeader({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true",
  );

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header-area">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="menu-container">
            <div className="logo">
              <Brand />
            </div>
            <div
              className={`navbar-main d-flex flex-grow-1${menuOpen ? " show" : ""}`}
            >
              <div className="logo inner-logo d-block d-xl-none">
                <Brand />
              </div>
              <ul className="navbar-info mx-auto">
                {navigation.map((item) => (
                  <li className="nav-item" key={item.path}>
                    <Link
                      className={`nav-link${activePage === item.path.slice(1) || (item.path === "/" && activePage === "index") ? " active" : ""}`}
                      aria-current={
                        activePage === item.path.slice(1) ||
                        (item.path === "/" && activePage === "index")
                          ? "page"
                          : undefined
                      }
                      to={item.path}
                      onClick={closeMenu}
                    >
                      <i
                        className={`nav-icon fas ${item.icon}`}
                        aria-hidden="true"
                      />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="header-right-info d-flex align-items-center">
                <button
                  className="theme-control-btn"
                  type="button"
                  aria-label={
                    darkMode ? "Switch to light theme" : "Switch to dark theme"
                  }
                  onClick={() => setDarkMode((current) => !current)}
                >
                  <span className="dark">
                    <i className="fas fa-moon" aria-hidden="true" />
                  </span>
                  <span className="light">
                    <i className="fas fa-sun" aria-hidden="true" />
                  </span>
                </button>
                <Link
                  to="/contact"
                  className="lets-talk-btn"
                  onClick={closeMenu}
                >
                  Let&apos;s Talk{" "}
                  <i className="icon fas fa-arrow-down" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div
              className={`mobile-menu-overlay d-block d-lg-none${menuOpen ? " show" : ""}`}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <div className="mobile-menu-control-bar d-block d-xl-none">
              <button
                className="mobile-menu-control-bar"
                type="button"
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((current) => !current)}
              >
                <i
                  className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
