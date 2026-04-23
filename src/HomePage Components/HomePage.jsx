import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./homePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>Hi there, I’m</p>
          <h1>Chofor Forsakang</h1>
          <p className={styles.heroText}>
            I build polished, high-performance web applications with React,
            Node.js, and PostgreSQL. I help businesses launch responsive digital
            products that feel fast and intuitive.
          </p>

          <div className={styles.heroActions}>
            <a
              href="/resumes/Full-Stack Resume - Chofor Forsakang_V6.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              <FileText size={20} />
              Download Resume
            </a>
            <Link to="/about" className={styles.secondaryButton}>
              About Me
            </Link>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/ChoforJr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <img src="/github-color-svgrepo-com.svg" alt="GitHub" />
            </a>
            <a
              href="https://linkedin.com/in/choforforsakang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="mailto:choforjrforsakang@gmail.com" aria-label="Email">
              <img src="/mail.svg" alt="Email" />
            </a>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <div className={styles.panelHeader}>
            <span>Featured</span>
            <p>Full-stack developer</p>
          </div>
          <h2>React + Node.js</h2>
          <p>
            Building modern applications with clean UI, secure backend services,
            and fast database workflows.
          </p>

          <div className={styles.techList}>
            <span>React</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>Express</span>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>What I do</p>
          <h2>Designing and delivering complete web products</h2>
        </div>

        <div className={styles.serviceGrid}>
          <article className={styles.serviceCard}>
            <h3>Frontend</h3>
            <p>
              Craft modern React interfaces, responsive layouts, and polished
              animations for fast user experiences.
            </p>
          </article>

          <article className={styles.serviceCard}>
            <h3>Backend</h3>
            <p>
              Build APIs, authentication, and database systems using Node,
              Express, and PostgreSQL.
            </p>
          </article>

          <article className={styles.serviceCard}>
            <h3>Deployment</h3>
            <p>
              Deploy web apps with reliable hosting, performance monitoring, and
              scalable configuration.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
