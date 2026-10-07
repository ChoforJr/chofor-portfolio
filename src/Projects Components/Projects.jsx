import { ArrowUpRight, Github, MoveUpRight } from "lucide-react";
import { projects } from "../data/projects";
import styles from "./projects.module.css";

const ProjectCard = ({ project, index }) => (
  <article className={styles.projectCard}>
    <a
      className={styles.screenshotLink}
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} live demo in a new tab`}
    >
      <img
        className={styles.screenshot}
        src={project.screenshot}
        alt={project.imageAlt}
        loading={index > 1 ? "lazy" : "eager"}
      />
      <span className={styles.projectNumber}>0{index + 1}</span>
      <span className={styles.previewLink}>
        View live <MoveUpRight size={16} aria-hidden="true" />
      </span>
    </a>
    <div className={styles.projectBody}>
      <div className={styles.projectHeading}>
        <div>
          <p className={styles.category}>{project.category}</p>
          <h2>{project.title}</h2>
        </div>
        <div className={styles.projectLinks}>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
          >
            <Github size={19} aria-hidden="true" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo (opens in a new tab)`}
          >
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className={styles.projectDescription}>{project.description}</p>
      <ul className={styles.technologyList} aria-label="Technologies and features">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  </article>
);

const Projects = () => {
  return (
    <div className={styles.projects}>
      <header className={styles.header}>
        <p className={styles.sectionLabel}>Selected work · Full-stack</p>
        <h1>
          Built with care.
          <br />
          <span>Made to be used.</span>
        </h1>
        <p className={styles.intro}>
          A selection of full-stack projects exploring community, communication,
          publishing, and play. Open a live demo or take a look at the code.
        </p>
      </header>

      <section className={styles.projectCollection} aria-label="Projects">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
