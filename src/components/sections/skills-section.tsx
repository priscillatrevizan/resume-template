import styles from "./skills-section.module.css";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "SASS/SCSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "NestJS", level: 75 },
      { name: "Python", level: 70 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "Prisma", level: 85 },
      { name: "TypeORM", level: 80 },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 65 },
      { name: "Nginx", level: 75 },
    ],
  },
];

const tools = [
  { name: "Git", variant: "pastel-blue" },
  { name: "GitHub Actions", variant: "pastel-green" },
  { name: "Jest", variant: "pastel-purple" },
  { name: "Cypress", variant: "pastel-orange" },
  { name: "Figma", variant: "pastel-pink" },
  { name: "Postman", variant: "pastel-cyan" },
  { name: "VS Code", variant: "pastel-yellow" },
  { name: "Jira", variant: "pastel-indigo" },
  { name: "Confluence", variant: "pastel-blue" },
  { name: "Slack", variant: "pastel-green" },
  { name: "Linear", variant: "pastel-purple" },
  { name: "Vercel", variant: "pastel-orange" },
];

const methodologies = [
  { name: "Scrum", variant: "pastel-pink" },
  { name: "Kanban", variant: "pastel-cyan" },
  { name: "TDD", variant: "pastel-yellow" },
  { name: "Clean Code", variant: "pastel-indigo" },
  { name: "SOLID", variant: "pastel-blue" },
  { name: "Microservices", variant: "pastel-green" },
  { name: "Clean Architecture", variant: "pastel-purple" },
  { name: "DDD", variant: "pastel-orange" },
  { name: "Event Sourcing", variant: "pastel-pink" },
  { name: "CQRS", variant: "pastel-cyan" },
];

export function SkillsSection() {
  // Extract all technical skills for PDF linear format
  const allTechnicalSkills = skillCategories.reduce((acc, category) => {
    return [...acc, ...category.skills.map(skill => skill.name)];
  }, [] as string[]);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.headerSection}>
        <h2 className={styles.mainTitle}>Habilidades Técnicas</h2>
        <p className={`${styles.subtitle} ${styles.noPrint}`}>
          Tecnologias e ferramentas que domino para criar soluções eficientes
        </p>
      </div>

      {/* Web version with progress bars */}
      <div className={`${styles.skillsGrid} ${styles.noPrint}`}>
        {skillCategories.map(category => (
          <div key={category.title} className={styles.skillCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{category.title}</h3>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.skillsList}>
                {category.skills.map(skill => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercentage}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PDF-only linear format with dashes */}
      <div className={`${styles.printSection} ${styles.printOnly}`}>
        <div className={styles.printSubsection}>
          <h3 className={styles.printSectionTitle}>Linguagens e Tecnologias:</h3>
          <p className={styles.printContent}>{allTechnicalSkills.join(" - ")}</p>
        </div>
      </div>

      {/* Web version with badges */}
      <div className={`${styles.skillsGrid} ${styles.noPrint}`}>
        <div className={styles.skillCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Ferramentas & Plataformas</h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.badgeContainer}>
              {tools.map(tool => (
                <span
                  key={tool.name}
                  className={`${styles.badge} ${
                    styles[
                      `badge${tool.variant.split("-")[1].charAt(0).toUpperCase() + tool.variant.split("-")[1].slice(1)}`
                    ]
                  }`}
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Metodologias & Conceitos</h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.badgeContainer}>
              {methodologies.map(methodology => (
                <span
                  key={methodology.name}
                  className={`${styles.badge} ${
                    styles[
                      `badge${
                        methodology.variant.split("-")[1].charAt(0).toUpperCase() +
                        methodology.variant.split("-")[1].slice(1)
                      }`
                    ]
                  }`}
                >
                  {methodology.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PDF-only linear format with dashes */}
      <div className={`${styles.printSection} ${styles.printOnly}`}>
        <div className={styles.printSubsection}>
          <h3 className={styles.printSectionTitle}>Ferramentas e Plataformas:</h3>
          <p className={styles.printContent}>{tools.map(tool => tool.name).join(" - ")}</p>
        </div>
        <div className={styles.printSubsection}>
          <h3 className={styles.printSectionTitle}>Metodologias e Conceitos:</h3>
          <p className={styles.printContent}>{methodologies.map(methodology => methodology.name).join(" - ")}</p>
        </div>
      </div>
    </section>
  );
}
