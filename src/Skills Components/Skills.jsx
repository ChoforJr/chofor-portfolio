import styles from "./skills.module.css";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "lucide-react",
      "Vitest",
      "HTML",
      "CSS",
      "JavaScript",
      "Jest",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "SQL", "Prisma ORM"],
  },
  {
    title: "Tools & Systems",
    skills: [
      "Git",
      "Github",
      "Linux / CLI",
      "VS Code",
      "Postman",
      "Vercel",
      "Neon",
      "Render",
    ],
  },
];

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1>Technical Stack</h1>
      <section>
        {skillCategories.map((category) => (
          <div key={category.title} className={styles.skillCard}>
            <h2>{category.title}</h2>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
