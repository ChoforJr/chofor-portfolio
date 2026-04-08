import styles from "./projects.module.css";

const fullStackProjects = [
  {
    title: "Odin-Book",
    description:
      "A full-featured social media platform built with React and Node.js. Features user authentication, post creation, and image uploads. Includes comprehensive backend API with secure authentication and data management.",
    code: "https://github.com/ChoforJr/odin-book",
    demo: "https://odin-book-delta.vercel.app/",
    screenshot: "/projects/odin-book.jpeg",
  },
  {
    title: "Messaging App",
    description:
      "A modern messaging application supporting individual and group conversations. Built with React frontend and Express backend, user authentication, and media sharing capabilities.",
    code: "https://github.com/ChoforJr/messaging-app",
    demo: "https://messaging-app-seven-ashen.vercel.app/",
    screenshot: "/projects/messaging-app.jpeg",
  },
  {
    title: "Where is Waldo",
    description:
      "An interactive photo tagging game where users compete to find hidden characters. Features leaderboard tracking, user authentication, and responsive design for optimal gameplay across devices.",
    code: "https://github.com/ChoforJr/where-is-waldo",
    demo: "https://where-is-waldo-ebon.vercel.app/",
    screenshot: "/projects/where-is-waldo.jpeg",
  },
  {
    title: "Blog-App",
    description:
      "A comprehensive blogging platform with user authentication, post management, and commenting system. Built with React frontend and Node.js backend, featuring secure user sessions and dynamic content rendering.",
    code: "https://github.com/ChoforJr/user-client-blog-api",
    demo: "https://user-client-blog-api.vercel.app/",
    screenshot: "/projects/blog-client.jpeg",
  },
];

const frontendProjects = [
  {
    title: "Shopping Cart",
    description:
      "A fully functional e-commerce shopping cart application built with React. Features product browsing, cart management, checkout process, and responsive design optimized for mobile and desktop users.",
    code: "https://github.com/ChoforJr/shopping-cart",
    demo: "https://shopping-cart-flax-ten.vercel.app/",
    screenshot: "/projects/shopping-cart.jpeg",
  },
  {
    title: "Memory Card",
    description:
      "An engaging memory card game built with React. Test your memory skills by matching pairs of anime character cards. Features score tracking, difficulty levels, and smooth animations.",
    code: "https://github.com/ChoforJr/Memory-Card",
    demo: "https://memory-card-flame-sigma.vercel.app/",
    screenshot: "/projects/memory-card.jpeg",
  },
  {
    title: "CV Application",
    description:
      "A dynamic CV builder application that allows users to create, edit, and preview professional resumes in real-time. Built with React, featuring live preview.",
    code: "https://github.com/ChoforJr/CV-Application",
    demo: "https://cv-application-pi-lemon.vercel.app/",
    screenshot: "/projects/cv-application.jpeg",
  },
  {
    title: "Homepage",
    description:
      "A personal homepage showcasing various web development projects. Built with vanilla HTML, CSS, and JavaScript, demonstrating responsive design principles and interactive web elements.",
    code: "https://github.com/ChoforJr/Homepage",
    demo: "https://choforjr.github.io/Homepage/",
    screenshot: "/projects/homepage.jpeg",
  },
];

const backendProjects = [
  {
    title: "Members Only",
    description:
      "A secure authentication application built with Node.js and Express. Implements Passport.js for user authentication, featuring local strategy, session management, and protected routes with PostgreSQL database.",
    code: "https://github.com/ChoforJr/Members-Only",
    screenshot: "/projects/members-only.jpeg",
  },
  {
    title: "Odin-Book API",
    description:
      "RESTful API backend for a social media application. Built with Express and Prisma ORM, featuring user authentication, post management, friendship systems, and image upload capabilities with Cloudinary.",
    code: "https://github.com/ChoforJr/odin-book-api",
    screenshot: "/projects/odin-book-api.jpeg",
  },
  {
    title: "Messaging App API",
    description:
      "Backend API for a messaging application. Built with Express, Prisma, and Cloudinary, featuring user authentication, group chats, and secure media upload handling.",
    code: "https://github.com/ChoforJr/messaging-app-api",
    screenshot: "/projects/messaging-app-api.jpeg",
  },
  {
    title: "Where is Waldo API",
    description:
      "RESTful API for an interactive photo tagging game. Built with Express and Prisma, featuring user authentication, leaderboard management, and secure game state tracking with PostgreSQL.",
    code: "https://github.com/ChoforJr/where-is-waldo-api",
    screenshot: "/projects/where-is-waldo-api.jpeg",
  },
  {
    title: "Blog-api",
    description:
      "Comprehensive REST API for a blogging platform. Built with Express and Prisma, featuring user authentication, post CRUD operations, commenting system, and secure data management with JWT tokens.",
    code: "https://github.com/ChoforJr/blog-api",
    screenshot: "/projects/blog-api.jpeg",
  },
];

const ProjectCard = ({ project }) => (
  <article className={styles.projectTab}>
    <div
      className={styles.screenshot}
      style={{ backgroundImage: `url(${project.screenshot})` }}
    />
    <div className={styles.projectBody}>
      <div className={styles.projectHead}>
        <h3>{project.title}</h3>
        <div className={styles.projectLinks}>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <img src="/github-color-svgrepo-com.svg" alt="GitHub" />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <img src="/open-in-new.svg" alt="Live demo" />
            </a>
          )}
        </div>
      </div>
      <p className={styles.projectDescription}>{project.description}</p>
    </div>
  </article>
);

const Projects = () => {
  return (
    <div className={styles.projects}>
      <header className={styles.header}>
        <p className={styles.sectionLabel}>Projects</p>
        <h1>Selected work</h1>
        <p className={styles.intro}>
          A curated collection of full-stack, frontend, and backend applications
          built with modern web technologies.
        </p>
      </header>

      <section className={styles.projectSection}>
        <h2>Full-Stack Projects</h2>
        <div className={styles.projectCollection}>
          {fullStackProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className={styles.projectSection}>
        <h2>Front-End Projects</h2>
        <div className={styles.projectCollection}>
          {frontendProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className={styles.projectSection}>
        <h2>Back-End Projects</h2>
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
