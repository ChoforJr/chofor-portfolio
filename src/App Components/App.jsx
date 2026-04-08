import "./App.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contacts" },
];

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((value) => !value);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="container">
      <nav className="siteNav">
        <Link to="/" className="logo" onClick={closeSidebar}>
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

        {isSidebarOpen && <div id="overlay" onClick={closeSidebar}></div>}

        <div className={`links-container ${isSidebarOpen ? "active" : ""}`}>
          <button
            className="close-sidebar-button"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <img src="/close.svg" alt="Close menu" />
          </button>
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} onClick={closeSidebar}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

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
