import { ExternalLink, GitFork, Github, Star } from "lucide-react";
import styles from "./projects-section.module.css";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque. Suporta múltiplos vendors e possui dashboard analítico avançado.",
    image: "/api/placeholder/400/200",
    technologies: [
      { name: "React", variant: "pastel-blue" },
      { name: "Node.js", variant: "pastel-green" },
      { name: "PostgreSQL", variant: "pastel-purple" },
      { name: "Stripe", variant: "pastel-orange" },
      { name: "AWS", variant: "pastel-yellow" },
    ],
    features: [
      "Sistema de pagamentos integrado",
      "Dashboard analítico em tempo real",
      "Gestão multi-vendor",
      "API REST escalável",
    ],
    stats: { stars: 156, forks: 42 },
    links: {
      demo: "https://ecommerce-demo.exemplo.com",
      github: "https://github.com/seu-usuario/ecommerce-platform",
    },
    status: "Em produção",
  },
  {
    title: "Task Management App",
    description:
      "Aplicação de gerenciamento de tarefas em tempo real com colaboração em equipe, notificações push e sincronização offline-first.",
    image: "/api/placeholder/400/200",
    technologies: [
      { name: "Vue.js", variant: "pastel-green" },
      { name: "Express.js", variant: "pastel-cyan" },
      { name: "MongoDB", variant: "pastel-pink" },
      { name: "Socket.io", variant: "pastel-indigo" },
      { name: "PWA", variant: "pastel-orange" },
    ],
    features: ["Colaboração em tempo real", "Sincronização offline", "Notificações push", "Drag & drop interface"],
    stats: { stars: 89, forks: 23 },
    links: {
      demo: "https://taskapp-demo.exemplo.com",
      github: "https://github.com/seu-usuario/task-management",
    },
    status: "Finalizado",
  },
  {
    title: "DevOps Dashboard",
    description:
      "Dashboard para monitoramento de infraestrutura cloud com métricas em tempo real, alertas automáticos e integração com múltiplos provedores.",
    image: "/api/placeholder/400/200",
    technologies: [
      { name: "React", variant: "pastel-blue" },
      { name: "TypeScript", variant: "pastel-purple" },
      { name: "Grafana", variant: "pastel-orange" },
      { name: "Prometheus", variant: "pastel-cyan" },
      { name: "Docker", variant: "pastel-yellow" },
    ],
    features: ["Monitoramento multi-cloud", "Alertas personalizáveis", "Métricas em tempo real", "Integração CI/CD"],
    stats: { stars: 234, forks: 67 },
    links: {
      demo: "https://devops-dashboard.exemplo.com",
      github: "https://github.com/seu-usuario/devops-dashboard",
    },
    status: "Em desenvolvimento",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.headerSection}>
        <h2 className={styles.mainTitle}>Projetos em Destaque</h2>
        <p className={styles.subtitle}>
          Alguns dos projetos que desenvolvi e que demonstram minhas habilidades técnicas
        </p>
      </div>

      <div className={styles.projectsList}>
        {projects.map((project, index) => (
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
                      {project.features.map((feature, i) => (
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
                      {project.technologies.map(tech => (
                        <span
                          key={tech.name}
                          className={`${styles.badge} ${
                            styles[
                              `badge${
                                tech.variant.split("-")[1].charAt(0).toUpperCase() + tech.variant.split("-")[1].slice(1)
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
                      <p className={styles.printTechList}>{project.technologies.map(tech => tech.name).join(" - ")}</p>
                    </div>
                  </div>

                  {/* GitHub stats - only show in web version */}
                  <div className={`${styles.statsContainer} ${styles.noPrint}`}>
                    <div className={styles.statItem}>
                      <Star className={styles.statIcon} />
                      {project.stats.stars}
                    </div>
                    <div className={styles.statItem}>
                      <GitFork className={styles.statIcon} />
                      {project.stats.forks}
                    </div>
                  </div>

                  <div className={`${styles.buttonsContainer} ${styles.noPrint}`}>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.button} ${styles.buttonPrimary}`}
                    >
                      <ExternalLink className={styles.buttonIcon} />
                      Demo
                    </a>
                    <a
                      href={project.links.github}
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
                    <p>• Demonstração: {project.links.demo}</p>
                    <p>• Código fonte: {project.links.github}</p>
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
