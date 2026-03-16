import "./App.css";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ItemContext } from "../ItemContext";
// import { useAppLogic } from "./UseAppLogic";

const App = () => {
  return (
    <div className="container">
      <nav>
        <h1>
          <Link to="/" className="navHeader">
            Chofor's <span style={{ color: "#DA291C" }}>Portfolio</span>
          </Link>
        </h1>

        <section>
          <input type="checkbox" id="sidebar-active" />
          <label htmlFor="sidebar-active" className="open-sidebar-button">
            <img src="/menu.svg" alt="menu icon" />
          </label>
          <label id="overlay" htmlFor="sidebar-active"></label>

          <div className="links-container">
            <label htmlFor="sidebar-active" className="close-sidebar-button">
              <img src="close.svg" alt="close icon" />
            </label>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contacts">Contacts</Link>
          </div>
        </section>
      </nav>
      <>
        <main>
          <ItemContext.Provider value={null}>
            <Outlet />
          </ItemContext.Provider>
        </main>
      </>
      <footer>
        <p>© {new Date().getFullYear()} Chofor</p>
      </footer>
    </div>
  );
};

export default App;
