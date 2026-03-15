import styles from "./contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h1>Lets work together!</h1>
      <p>
        Get in touch if you are interested in working together on developing
        software that will allow me to apply my skills, collaborate on impactful
        projects, and evolve professionally, as mention before I have both
        Frontend and Backend skills at my disposal. Available to discuss new
        opportunities.
      </p>
      <section>
        <a href="https://github.com/ChoforJr" target="_blank" alt="github link">
          <img src="/github-color-svgrepo-com.svg" alt="github logo" />
        </a>
        <a
          href="https://linkedin.com/in/choforforsakang"
          target="_blank"
          alt="linkedin link"
        >
          <img src="/linkedin.svg" alt="linkedin logo" />
        </a>
        <a href="mailto:choforjrforsakang@gmail.com" alt="mail link">
          <img src="/mail.svg" alt="mail logo" />
        </a>
      </section>
    </div>
  );
};

export default Contacts;
