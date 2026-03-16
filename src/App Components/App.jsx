import "./App.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ItemContext } from "../ItemContext";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="container">
      <nav>
        <h1>
          <Link to="/" className="navHeader">
            Chofor's <span style={{ color: "#DA291C" }}>Portfolio</span>
          </Link>
        </h1>

        <section>
          <button
            className="open-sidebar-button"
            onClick={toggleSidebar}
            aria-label="Open menu"
          >
            <img src="/menu.svg" alt="menu icon" />
          </button>

          {isSidebarOpen && <div id="overlay" onClick={closeSidebar}></div>}

          <div className={`links-container ${isSidebarOpen ? "active" : ""}`}>
            <button
              className="close-sidebar-button"
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              <img src="close.svg" alt="close icon" />
            </button>
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
            <Link to="/projects" onClick={closeSidebar}>
              Projects
            </Link>
            <Link to="/skills" onClick={closeSidebar}>
              Skills
            </Link>
            <Link to="/contacts" onClick={closeSidebar}>
              Contacts
            </Link>
          </div>
        </section>
      </nav>

      <main>
        <ItemContext.Provider value={null}>
          <Outlet />
        </ItemContext.Provider>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Chofor</p>
      </footer>
    </div>
  );
};

export default App;
