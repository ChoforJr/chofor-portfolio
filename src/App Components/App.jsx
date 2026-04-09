import "./App.css";
import { useState, useEffect } from "react"; // 1. Added useEffect
import { Link, Outlet, useLocation } from "react-router-dom"; // 2. Added useLocation

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contacts", to: "/contacts" },
];

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen((value) => !value);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div className="container">
      <nav className="siteNav">
        <Link to="/" className="logo">
          <div className="brand">
            <span>Chofor</span>
            <strong>Portfolio</strong>
          </div>
        </Link>

        <button
          className="open-sidebar-button"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={isSidebarOpen}
        >
          <img src="/menu.svg" alt="Menu" />
        </button>

        <div className={`links-container ${isSidebarOpen ? "active" : ""}`}>
          <button
            className="close-sidebar-button"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <img src="/close.svg" alt="Close menu" />
          </button>
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      {isSidebarOpen && <div id="overlay" onClick={closeSidebar}></div>}

      <main className="pageContent">
        <Outlet />
      </main>

      <footer className="siteFooter">
        <p>© {new Date().getFullYear()} Chofor Forsakang</p>
      </footer>
    </div>
  );
};

export default App;
