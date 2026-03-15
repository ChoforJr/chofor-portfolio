import styles from "./homePage.module.css";
import { FileText } from "lucide-react";

const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <a
        href="/Resume (30-Jun-2023).pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resumeBtn}
      >
        <FileText size={20} />
        <span>Resume</span>
      </a>

      <h1>
        Hello, I'm <span className={styles.highlight}>Chofor Forsakang</span>
      </h1>

      <p className={styles.bio}>
        As a Full-Stack Developer, I build responsive front-end interfaces using
        HTML, CSS, JavaScript, and React.js, translating mockups into seamless
        user experiences. On the back-end, I architect robust database queries
        and APIs using Node.js, Express.js, and PostgreSQL to power dynamic
        applications.
      </p>

      <section className={styles.socialLinks}>
        <a
          href="https://github.com/ChoforJr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <img src="/github-color-svgrepo-com.svg" alt="" />
        </a>
        <a
          href="https://linkedin.com/in/choforforsakang"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <img src="/linkedin.svg" alt="" />
        </a>
        <a href="mailto:choforjrforsakang@gmail.com" aria-label="Email Me">
          <img src="/mail.svg" alt="" />
        </a>
      </section>
    </main>
  );
};

export default HomePage;
