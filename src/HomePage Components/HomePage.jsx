import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  FileText,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../data/projects";
import styles from "./homePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            <span className={styles.availabilityDot} />
            Full-stack developer · Open to opportunities
          </p>

          <h1 id="hero-title">
            I build
            <br />
            <span>web things</span>
            <br />
            that feel good
            <br />
            to use.
          </h1>

          <p className={styles.heroText}>
            Hey, I’m Chofor Forsakang. I turn ideas into thoughtful web
            experiences, from the first interface to the logic behind it.
          </p>

          <div className={styles.heroActions}>
            <Link to="/projects" className={styles.primaryButton}>
              Explore my work <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="/resumes/Software Engineer Resume - Chofor Forsakang.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              <FileText size={17} aria-hidden="true" />
              View résumé
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className={styles.socialLinks} aria-label="Social links">
            <a
              href="https://github.com/ChoforJr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <Github size={19} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/choforforsakang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <Linkedin size={19} aria-hidden="true" />
            </a>
            <a href="mailto:choforjrforsakang@gmail.com" aria-label="Email Chofor">
              <Mail size={19} aria-hidden="true" />
            </a>
          </div>
        </div>

        <a className={styles.featuredProject} href={featuredProjects[0].demo} target="_blank" rel="noopener noreferrer">
          <img
            src={featuredProjects[0].screenshot}
            alt={featuredProjects[0].imageAlt}
            className={styles.featuredImage}
          />
          <span className={styles.imageShade} />
          <span className={styles.featuredTag}>
            <Sparkles size={14} aria-hidden="true" /> Featured project
          </span>
          <span className={styles.featuredCaption}>
            <span>
              <span className={styles.projectType}>SOCIAL · FULL-STACK</span>
              <strong>{featuredProjects[0].title}</strong>
            </span>
            <span className={styles.featuredArrow} aria-hidden="true">
              <ArrowUpRight size={21} />
            </span>
          </span>
          <span className={styles.imageNote}>
            <Code2 size={15} aria-hidden="true" />
            Built with React &amp; Node.js
          </span>
        </a>

        <a className={styles.scrollCue} href="#selected-work">
          <ArrowDown size={15} aria-hidden="true" />
          Scroll to explore
        </a>
      </section>

      <section className={styles.workSection} id="selected-work">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>A few things I’ve made</p>
            <h2>Selected work<span>.</span></h2>
          </div>
          <Link to="/projects" className={styles.textLink}>
            All projects <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.projectGrid}>
          {featuredProjects.slice(1, 4).map((project, index) => (
            <article className={styles.projectCard} key={project.title}>
              <Link
                to="/projects"
                className={styles.projectImageLink}
                aria-label={`See ${project.title} project details`}
              >
                <img
                  src={project.screenshot}
                  alt={project.imageAlt}
                  className={styles.projectImage}
                  loading="lazy"
                />
                <span className={styles.cardNumber}>0{index + 2}</span>
              </Link>
              <div className={styles.projectInfo}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                </div>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} live demo (opens in a new tab)`}
                  className={styles.cardArrow}
                >
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contactBand}>
        <p className={styles.sectionLabel}>Have something in mind?</p>
        <div>
          <h2>Let’s make it happen.</h2>
          <Link to="/contacts" className={styles.contactButton}>
            Get in touch <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
