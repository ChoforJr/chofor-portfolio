import { Link } from "react-router-dom";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.header}>
        <p className={styles.sectionLabel}>About</p>
        <h1>Crafting clean, scalable web applications with a human touch</h1>
        <p className={styles.intro}>
          I am a full-stack developer who builds thoughtful digital products
          using React, Node.js, Express, and PostgreSQL. My focus is on
          delivering fast, accessible experiences that feel polished and easy to
          use.
        </p>
      </header>

      <section className={styles.contentGrid}>
        <div className={styles.bioCard}>
          <h2>My story</h2>
          <p>
            I enjoy turning ideas into functioning applications. I collaborate
            with teams to translate product goals into real interfaces, APIs,
            and data workflows. I also enjoy solving problems across the full
            stack, from clean UI layout to backend reliability.
          </p>
          <p>
            When I’m not writing code, I’m refining my projects, learning new
            technologies, and looking for ways to simplify complex user
            journeys.
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
              <span>8+</span>
              <p>Applications delivered</p>
            </div>
            <div>
              <span>React / Node</span>
              <p>Stack expertise</p>
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
