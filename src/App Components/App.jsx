import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./App.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
];

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsSidebarOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="container">
      <nav className="siteNav" aria-label="Main navigation">
        <Link to="/" className="logo" aria-label="Chofor Forsakang, home">
          <span className="brandMark" aria-hidden="true">
            cf
          </span>
          <span className="brandName">
            Chofor<span>.</span>
          </span>
        </Link>

        <button
          className="menuToggle"
          onClick={() => setIsSidebarOpen((value) => !value)}
          aria-label={isSidebarOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isSidebarOpen}
          aria-controls="primary-navigation"
        >
          {isSidebarOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div
          className={`linksContainer ${isSidebarOpen ? "isOpen" : ""}`}
          id="primary-navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `navLink${isActive ? " isActive" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contacts" className="navContact">
            Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
          </NavLink>
        </div>
      </nav>

      {isSidebarOpen && (
        <button
          className="navigationOverlay"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close navigation menu"
        />
      )}

      <main className="pageContent">
        <Outlet />
      </main>

      <footer className="siteFooter">
        <p>© {new Date().getFullYear()} Chofor Forsakang</p>
        <a href="mailto:choforjrforsakang@gmail.com">
          Say hello <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
};

export default App;
