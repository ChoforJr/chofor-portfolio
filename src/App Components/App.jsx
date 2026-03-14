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
            <span style={{ color: "#EE204D" }}>Dev</span>Chofor
          </Link>
        </h1>
        <section>
          <Link to="/project">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contacts">Contacts</Link>
        </section>
      </nav>
      <>
        <main>
          <ItemContext.Provider>
            <Outlet />
          </ItemContext.Provider>
        </main>
      </>
      <footer>
        <p>© {new Date().getFullYear()} — Built with React.js</p>
      </footer>
    </div>
  );
};

export default App;
