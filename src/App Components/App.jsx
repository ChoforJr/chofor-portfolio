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
          <Link to="/">
            Chofor's <span style={{ color: "#DA291C" }}>Portfolio</span>
          </Link>
        </h1>
        <section>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contacts">Contacts</Link>
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
