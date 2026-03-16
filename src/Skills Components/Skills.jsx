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
    skills: [
      "EJS",
      "Node.js",
      "Express",
      "Postgresql",
      "Prisma ORM",
      "Faker.js",
      "Passport.js",
      "Bcrypt.js",
      "JWT",
    ],
  },
  {
    title: "Tools & Systems",
    skills: [
      "Git",
      "Github",
      "Linux",
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
