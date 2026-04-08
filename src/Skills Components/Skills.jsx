import styles from "./skills.module.css";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      // {
      //   name: "TypeScript",
      //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      // },
      {
        name: "Vitest",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMDAwMDAwIiBzdHlsZT0ib3BhY2l0eToxOyI+PHBhdGggIGQ9Ik0xMy43NCAxLjA1M2EuNS41IDAgMCAwLS4xNTcuMDI1YS41LjUgMCAwIDAtLjI1LjE4OEw3LjU5NSA5LjU2MmEuNS41IDAgMCAwLS4wODQuMjIzYS41LjUgMCAwIDAgLjAzMi4yMzZhLjUuNSAwIDAgMCAuMTQuMTkzYS41LjUgMCAwIDAgLjIxNS4xMDVsMy43MDcuNzg2bC0uMjMgNC41OGEuNS41IDAgMCAwIC4wODUuM2EuNS41IDAgMCAwIC4yNS4xODlhLjUuNSAwIDAgMCAuMzEzIDBhLjUuNSAwIDAgMCAuMjUtLjE4N2w1LjczOC04LjI5NmEuNS41IDAgMCAwIC4wODQtLjIyM2EuNS41IDAgMCAwLS4wMzItLjIzNmEuNS41IDAgMCAwLS4xNC0uMTk0YS41LjUgMCAwIDAtLjIxNS0uMTA0bC0zLjcwNy0uNzg3bC4yMy00LjU4YS41LjUgMCAwIDAtLjA4NS0uM2EuNS41IDAgMCAwLS4yNS0uMTg4YS41LjUgMCAwIDAtLjE1Ni0uMDI2TTEuMTU3IDkuNzg4Yy0uMzA3LjAwMS0uNi4xMjQtLjgxNy4zNGExLjE2IDEuMTYgMCAwIDAtLjM0LjgxN2ExLjE2IDEuMTYgMCAwIDAgLjMzNC44MmwxMC44NDIgMTAuODQyYTEuMiAxLjIgMCAwIDAgLjM3Ny4yNTJhMS4yIDEuMiAwIDAgMCAuNDQ1LjA4OGguMDA0YTEuMiAxLjIgMCAwIDAgLjQ0NS0uMDg4YTEuMiAxLjIgMCAwIDAgLjM3Ny0uMjUybDEwLjg0Mi0xMC44NDNhMS4xNiAxLjE2IDAgMCAwIC4zMzQtLjgyYTEuMTYgMS4xNiAwIDAgMC0uMzQtLjgxNmExLjE2IDEuMTYgMCAwIDAtLjgxNy0uMzRhMS4xNiAxLjE2IDAgMCAwLS44Mi4zMzRsLTUuNCA1LjRsLS4wMjYuMDJMMTIgMjAuMTRsLTQuNTk4LTQuNTk3bC0uMDI0LS4wMmwtNS40MDEtNS40MDFhMS4xNiAxLjE2IDAgMCAwLS44Mi0uMzM0Ii8+PC9zdmc+",
      },
      {
        name: "React-Router",
        icon: "https://reactrouter.com/favicon-dark.png",
      },
      {
        name: "Lucide-React",
        icon: "https://lucide.dev/favicon.ico",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Prisma",
        icon: "data:image/svg+xml,%3csvg width='24' height='24' fill='currentColor' viewBox='0 0 24 24' transform='' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.23 2.58c-.33-.72-1.34-.78-1.75-.1L4 14.67c-.2.32-.2.73 0 1.05l3.68 5.81c.24.38.7.55 1.13.42l10.63-3.19c.58-.17.87-.82.62-1.37zm4.29 14.8-7.34 2.19a.37.37 0 0 1-.47-.43l2.63-13.1c.07-.36.56-.41.71-.07l4.71 10.9c.09.21-.02.44-.24.51'%3e%3c/path%3e%3c/svg%3e",
      },
      {
        name: "Passport.js",
        icon: "https://www.passportjs.org/images/favicon/ms-icon-144x144.png",
      },
      {
        name: "Cloudinary",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMTY4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiICBzdHlsZT0ib3BhY2l0eToxOyI+PHBhdGggZmlsbD0iIzM0NDhDNSIgZD0iTTc1LjA2IDc1LjIwMmEuNy43IDAgMCAxIC40OTguMjA4bDIzLjU2IDIzLjU4MWEuNy43IDAgMCAxLS40ODggMS4xODhoLTYuMDIyYS43Mi43MiAwIDAgMC0uNzIxLjd2NTMuMDE1YTEyLjcyIDEyLjcyIDAgMCAwIDMuNzEgOC45NDlsMy41MiAzLjUyYS43LjcgMCAwIDEtLjQ4NyAxLjE4N0g3MC44NWMtNy4wMjcgMC0xMi43MjMtNS42OTYtMTIuNzIzLTEyLjcyM3YtNTMuOTQ4YS43LjcgMCAwIDAtLjctLjdoLTUuOTM4YS43LjcgMCAwIDEtLjUwOS0xLjE4OGwyMy41ODEtMjMuNThhLjcuNyAwIDAgMSAuNDk5LS4yMW01Mi4xMDMgMTMuNjU2YS43LjcgMCAwIDEgLjQ5OC4yMDlsMjMuNTgxIDIzLjQ5NmEuNy43IDAgMCAxLS41MDkgMS4xODhoLTYuMDIyYS43Mi43MiAwIDAgMC0uNy43MnYzOS40MjNhMTIuNzIgMTIuNzIgMCAwIDAgMy42OSA4Ljk0OWwzLjU0MSAzLjUyYS43LjcgMCAwIDEtLjUwOSAxLjE4N2gtMjcuNzE2Yy03LjAyNyAwLTEyLjcyNC01LjY5Ni0xMi43MjQtMTIuNzIzdi00MC4zMTNhLjcyLjcyIDAgMCAwLS43LS43MjFoLTZhLjcuNyAwIDAgMS0uNDg4LTEuMTg4bDIzLjU2LTIzLjUzOGEuNy43IDAgMCAxIC40OTgtLjIwOW01Mi4xMTQgMTMuNTFjLjE4MyAwIC4zNi4wNzUuNDg3LjIwN2wyMy41ODEgMjMuNTZhLjcuNyAwIDAgMS0uNDg3IDEuMjA5aC02LjA0NGEuNy43IDAgMCAwLS43Ljd2MjUuODVhMTIuNzIgMTIuNzIgMCAwIDAgMy43MTEgOC45NDlsMy41MiAzLjUyYS43LjcgMCAwIDEtLjQ4NyAxLjE4N2gtMjcuODAxYy03LjAyNyAwLTEyLjcyNC01LjY5Ni0xMi43MjQtMTIuNzIzdi0yNi43ODRhLjcuNyAwIDAgMC0uNy0uN2gtNS45MzdhLjcuNyAwIDAgMS0uNDg4LTEuMjA4bDIzLjU4LTIzLjU2YS42OC42OCAwIDAgMSAuNDg5LS4yMDdNMTI2LjY4Ni0uMDAyYzM3LjA0LjI3IDY5LjcxIDI0LjMyMyA4MC45NjQgNTkuNjE0YzI3LjUxIDMuNTkgNDguMTUgMjYuOTI4IDQ4LjM1IDU0LjY2OGMwIDIyLjg5NS0xNC4zMTkgNDEuOTIxLTM3LjQzOCA0OS44NDJsLS44Ni4yODlsLTEuMDYuMzM5di0xNy4wOTJjMTQuNjk1LTYuMTkyIDIzLjMyNi0xOC40MjggMjMuMzI2LTMzLjM3OGMtLjA3NS0yMS4wOTctMTYuNzgyLTM4LjMyMy0zNy43OC0zOS4xMjZsLS43MDktLjAyaC02LjM2MWwtMS41MjctNi4wNjZjLTcuNDk0LTMwLjkzLTM1LjA4LTUyLjc5LTY2LjkwNS01My4wMTVhNjguMTggNjguMTggMCAwIDAtNjEuNTc2IDM4LjIzbC0yLjM2IDQuODYxbC00LjQ1NC40NjdjLTIwLjExMiAyLjE1MS0zNi42MjcgMTYuODYyLTQxLjA4IDM2LjU5M2MtNC4zOSAxOS40NDkgMy44OTggMzkuNTI3IDIwLjY0NiA1MC4yMzFsLjczNC40NnYxOC4wMjVoLS4xMDZsLTEuNTktLjcyMUMxMS43NDQgMTUyLjYzNi0yLjk5IDEyNi4wOC41MSA5OC42MTZjMy41MDItMjcuNDYzIDI0LjQyOC00OS40NzQgNTEuNjgtNTQuMzU4QzY2LjkxMiAxNi44NTEgOTUuNTc1LS4xNzcgMTI2LjY4Ni0uMDAyIi8+PC9zdmc+",
      },
      {
        name: "Bcrypt",
        icon: "/data-protection.png",
      },
      // {
      //   name: "Socket.io",
      //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      // },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Postman",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "Vercel",
        icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
      },
      {
        name: "Neon Postgres",
        icon: "https://neon.com/favicon/favicon.svg",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className={styles.skillsPage}>
      <header className={styles.header}>
        <p className={styles.sectionLabel}>Skills</p>
        <h1>Technical stack</h1>
        <p className={styles.intro}>
          Tools and technologies I use to build polished, production-ready web
          applications.
        </p>
      </header>

      <section className={styles.skillsGrid}>
        {skillCategories.map((category) => (
          <article key={category.title} className={styles.categoryCard}>
            <h2>{category.title}</h2>
            <div className={styles.iconGrid}>
              {category.skills.map((skill) => (
                <div key={skill.name} className={styles.skillTile}>
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Skills;
