import styles from "./projects.module.css";

const fullStackProjects = [
  {
    title: "Odin-Book",
    description: "A social media app that connects to a RESTAPI backend.",
    langAndTech: [
      "React",
      "JavaScript",
      "CSS",
      "Express",
      "Prisma ORM",
      "Faker.js",
      "Passport.js",
      "Bcrypt.js",
      "JWT",
      "Cloudinary",
    ],
    code: "https://github.com/ChoforJr/odin-book",
    demo: "https://odin-book-delta.vercel.app/",
    screenshot: "/projects/odin-book.jpeg",
  },
  {
    title: "Messaging App",
    description:
      "A messaging app for individual and group conversations, using the messaging app api as backend.",
    langAndTech: [
      "React",
      "JavaScript",
      "CSS",
      "Express",
      "Prisma ORM",
      "Passport.js",
      "Bcrypt.js",
      "JWT",
      "Cloudinary",
    ],
    code: "https://github.com/ChoforJr/messaging-app",
    demo: "https://messaging-app-seven-ashen.vercel.app/",
    screenshot: "/projects/messaging-app.jpeg",
  },
  {
    title: "Where is Waldo",
    description: "Test your observation skills and compete on the leaderboard!",
    langAndTech: ["React", "JavaScript", "CSS", "Express", "Prisma ORM"],
    code: "https://github.com/ChoforJr/where-is-waldo",
    demo: "https://where-is-waldo-ebon.vercel.app/",
    screenshot: "/projects/where-is-waldo.jpeg",
  },
  {
    title: "Blog-App",
    description:
      "This application allows users to browse and read blog posts in a user-friendly interface.",
    langAndTech: [
      "React",
      "JavaScript",
      "CSS",
      "Express",
      "Prisma ORM",
      "Passport.js",
      "Bcrypt.js",
      "JWT",
    ],
    code: "https://github.com/ChoforJr/user-client-blog-api",
    demo: "https://user-client-blog-api.vercel.app/",
    screenshot: "/projects/blog-client.jpeg",
  },
];

const frontendProjects = [
  {
    title: "Shopping Cart",
    description:
      "A modern, fully-functional e-commerce shopping cart application built with React.",
    langAndTech: [
      "React",
      "lucide-react",
      "react-router-dom",
      "Vitest",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    code: "https://github.com/ChoforJr/shopping-cart",
    demo: "https://shopping-cart-flax-ten.vercel.app/",
    screenshot: "/projects/shopping-cart.jpeg",
  },
  {
    title: "Memory Card",
    description: "Test your memory by matching anime character cards!",
    langAndTech: ["React", "JavaScript", "HTML", "CSS"],
    code: "https://github.com/ChoforJr/Memory-Card",
    demo: "https://memory-card-flame-sigma.vercel.app/",
    screenshot: "/projects/memory-card.jpeg",
  },
  {
    title: "CV Application",
    description:
      "A dynamic, interactive CV builder application that allows users to create, edit, and preview professional CVs in real-time.",
    langAndTech: ["React", "JavaScript", "HTML", "CSS"],
    code: "https://github.com/ChoforJr/CV-Application",
    demo: "https://cv-application-pi-lemon.vercel.app/",
    screenshot: "/projects/cv-application.jpeg",
  },
  {
    title: "Homepage",
    description:
      "This Project contains a collection of various other projects I built using HTML, CSS, and vanilla JavaScript.",
    langAndTech: ["HTML", "CSS", "JavaScript", "Jest"],
    code: "https://github.com/ChoforJr/Homepage",
    demo: "https://choforjr.github.io/Homepage/",
    screenshot: "/projects/homepage.jpeg",
  },
];

const backendProjects = [
  {
    title: "Members Only",
    description:
      "A Node.js authentication application built to practice and showcase authentication skills using Passport.js with local strategy, Express, and PostgreSQL.",
    langAndTech: ["EJS", "Express", "Postgresql", "Passport.js", "Bcrypt.js"],
    code: "https://github.com/ChoforJr/Members-Only",
    screenshot: "/projects/members-only.jpeg",
  },
  {
    title: "Odin-Book API",
    description:
      "This is the backend API for the Odin-Book social media application.",
    langAndTech: [
      "Express",
      "Prisma ORM",
      "Faker.js",
      "Passport.js",
      "Bcrypt.js",
      "JWT",
      "Cloudinary",
    ],
    code: "https://github.com/ChoforJr/odin-book-api",
    screenshot: "/projects/odin-book-api.jpeg",
  },
  {
    title: "Messaging App API",
    description:
      "This the backend of the messaging app project I built to allow users to communicate with one another.",
    langAndTech: [
      "Express",
      "Prisma ORM",
      "Passport.js",
      "Bcrypt.js",
      "JWT",
      "Cloudinary",
    ],
    code: "https://github.com/ChoforJr/messaging-app-api",
    screenshot: "/projects/messaging-app-api.jpeg",
  },
  {
    title: "Where is Waldo API",
    description:
      "A RESTful backend API for the Where's Waldo photo tagging game.",
    langAndTech: ["Express", "Prisma ORM", "Passport.js", "Bcrypt.js", "JWT"],
    code: "https://github.com/ChoforJr/where-is-waldo-api",
    screenshot: "/projects/where-is-waldo-api.jpeg",
  },
  {
    title: "Blog-api",
    description:
      "A comprehensive RESTful API backend for a blog application with user authentication, post management, and commenting functionality.",
    langAndTech: ["Express", "Prisma ORM", "Passport.js", "Bcrypt.js", "JWT"],
    code: "https://github.com/ChoforJr/blog-api",
    screenshot: "/projects/blog-api.jpeg",
  },
];

const ProjectCard = ({ project }) => (
  <article className={styles.projectTab}>
    <div
      className={styles.screenshot}
      style={{ backgroundImage: `url(${project.screenshot})` }}
    ></div>
    <div className={styles.projectHead}>
      <h3>{project.title}</h3>
      <span className={styles.socialLinks}>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
        >
          <img src="/github-color-svgrepo-com.svg" alt="GitHub Logo" />
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Demo"
          >
            <img src="/open-in-new.svg" alt="External Link Icon" />
          </a>
        )}
      </span>
    </div>
    <p>{project.description}</p>
    <div className={styles.langAndTech}>
      {project.langAndTech.map((lang) => (
        <span key={lang}>{lang}</span>
      ))}
    </div>
  </article>
);

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <section>
        <hr />
        <h2>Full-Stack Projects</h2>
        <hr />
        <div className={styles.projectCollection}>
          {fullStackProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <hr />
        <h2>Front-End Projects</h2>
        <hr />
        <div className={styles.projectCollection}>
          {frontendProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <hr />
        <h2>Back-End Projects</h2>
        <hr />
        <div className={styles.projectCollection}>
          {backendProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
