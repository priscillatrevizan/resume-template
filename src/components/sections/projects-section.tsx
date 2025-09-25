import { ExternalLink, GitFork, Github, Star } from "lucide-react";
import { useResume } from "../../features/resume/context";
import styles from "./projects-section.module.css";

export function ProjectsSection() {
  const data = useResume();
  const projects = data.projects || [];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.headerSection}>
        <h2 className={styles.mainTitle}>Projetos em Destaque</h2>
        <p className={styles.subtitle}>
          Alguns dos projetos que desenvolvi e que demonstram minhas habilidades técnicas
        </p>
      </div>

      <div className={styles.projectsList}>
        {projects.map((project: any, index: number) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectGrid}>
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>

              <div className={styles.contentContainer}>
                <div className={styles.cardHeader}>
                  <div className={styles.headerContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span
                      className={`${styles.badge} ${styles.noPrint} ${
                        project.status === "Em produção"
                          ? styles.badgeGreen
                          : project.status === "Finalizado"
                          ? styles.badgeBlue
                          : styles.badgeOrange
                      }`}
                    >
                      {project.status}
                    </span>
                    {/* PDF-only plain text status */}
                    <span className={`${styles.printStatus} ${styles.printOnly}`}>({project.status})</span>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <p className={styles.description}>{project.description}</p>

                  <div className={styles.featureSection}>
                    <h4 className={styles.sectionTitle}>Principais funcionalidades:</h4>
                    <ul className={styles.featureList}>
                      {project.features.map((feature: string, i: number) => (
                        <li key={i} className={styles.featureItem}>
                          <span className={styles.bullet}>●</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.techSection}>
                    <h4 className={styles.sectionTitle}>Tecnologias:</h4>
                    <div className={`${styles.badgeContainer} ${styles.noPrint}`}>
                      {project.technologies.map((tech: any) => (
                        <span
                          key={tech.name}
                          className={`${styles.badge} ${
                            styles[
                              `badge${
                                (tech.variant.split("-")[1] || "").charAt(0).toUpperCase() +
                                (tech.variant.split("-")[1] || "").slice(1)
                              }`
                            ]
                          }`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    {/* PDF-only plain text version with dashes */}
                    <div className={styles.printOnly}>
                      <p className={styles.printTechList}>
                        {project.technologies.map((tech: any) => tech.name).join(" - ")}
                      </p>
                    </div>
                  </div>

                  {/* GitHub stats - only show in web version */}
                  <div className={`${styles.statsContainer} ${styles.noPrint}`}>
                    <div className={styles.statItem}>
                      <Star className={styles.statIcon} />
                      {project.stats?.stars}
                    </div>
                    <div className={styles.statItem}>
                      <GitFork className={styles.statIcon} />
                      {project.stats?.forks}
                    </div>
                  </div>

                  <div className={`${styles.buttonsContainer} ${styles.noPrint}`}>
                    <a
                      href={project.links?.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.button} ${styles.buttonPrimary}`}
                    >
                      <ExternalLink className={styles.buttonIcon} />
                      Demo
                    </a>
                    <a
                      href={project.links?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.button} ${styles.buttonOutline}`}
                    >
                      <Github className={styles.buttonIcon} />
                      Código
                    </a>
                  </div>

                  {/* PDF-only links section */}
                  <div className={`${styles.printLinksSection} ${styles.printOnly}`}>
                    <p>
                      <strong>Links do projeto:</strong>
                    </p>
                    <p>• Demonstração: {project.links?.demo}</p>
                    <p>• Código fonte: {project.links?.github}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
