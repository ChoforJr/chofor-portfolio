import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.header}>
        <p className={styles.sectionLabel}>About</p>
        <h1>Thoughtful interfaces. Useful products. Solid foundations.</h1>
        <p className={styles.intro}>
          I’m a full-stack developer who enjoys building web products from the
          interface through to the systems behind it. I work with React,
          JavaScript, Node.js, and PostgreSQL to turn ideas into clear,
          responsive experiences.
        </p>
      </header>

      <section className={styles.contentGrid}>
        <div className={styles.bioCard}>
          <h2>My story</h2>
          <p>
            I like taking a product from a rough idea to something people can
            actually use. That means thinking through the interface, connecting
            it to dependable application logic, and paying attention to the
            details that make a project feel complete.
          </p>
          <p>
            My projects span social platforms, messaging, interactive games,
            and publishing. I’m always refining my approach and looking for
            simpler, more thoughtful ways to solve real user problems.
          </p>
        </div>

        <div className={styles.sidebarCard}>
          <div>
            <h3>What I do</h3>
            <ul>
              <li>Frontend development with React and responsive UI design</li>
              <li>Backend development with Node.js, Express, and PostgreSQL</li>
              <li>API design, authentication, and database modeling</li>
            </ul>
          </div>

          <div className={styles.quickStats}>
            <div>
              <span>{projects.length}</span>
              <p>Featured projects</p>
            </div>
            <div>
              <span>React + Node.js</span>
              <p>Core technologies</p>
            </div>
            <div>
              <span>Responsive</span>
              <p>Design for every device</p>
            </div>
          </div>

          <Link to="/contacts" className={styles.ctaButton}>
            Let’s talk
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
