import { useState } from "react";
import styles from "./contacts.module.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent("Contact from portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:choforjrforsakang@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.contactsPage}>
      <header className={styles.header}>
        <p className={styles.sectionLabel}>Contact</p>
        <h1>Let's build something together</h1>
        <p className={styles.intro}>
          If you're looking for a dedicated developer who can deliver polished
          applications and collaborative value, let's connect.
        </p>
      </header>

      <div className={styles.contactLayout}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project"
              rows="7"
              required
            />
          </label>
          <button type="submit">Send message</button>
        </form>

        <aside className={styles.contactCard}>
          <h2>Contact Info</h2>
          <p>
            I am available for freelance projects, full-time roles, and
            collaborative opportunities. Send a quick note and I’ll reply as
            soon as possible.
          </p>

          <div className={styles.linksGrid}>
            <a
              href="https://github.com/ChoforJr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img src="/github-color-svgrepo-com.svg" alt="GitHub" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/choforforsakang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src="/linkedin.svg" alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:choforjrforsakang@gmail.com" aria-label="Email">
              <img src="/mail.svg" alt="Email" />
              <span>Email</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contacts;
