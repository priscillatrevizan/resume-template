import { Building, Calendar, MapPin } from "lucide-react";
import styles from "./experience-section.module.css";

const experiences = [
  {
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    period: "Jan 2022 - Presente",
    location: "São Paulo, SP",
    type: "Remoto",
    description: [
      "Lidero equipe de 4 desenvolvedores na criação de plataforma SaaS com React, Node.js e AWS",
      "Implementei arquitetura de microserviços que reduziu tempo de resposta em 40%",
      "Estabeleci pipeline CI/CD com Docker e Kubernetes, aumentando frequência de deploys em 300%",
      "Mentorei desenvolvedores júnior e conduzi code reviews mantendo alta qualidade de código",
    ],
    technologies: [
      { name: "React", variant: "pastel-blue" },
      { name: "TypeScript", variant: "pastel-purple" },
      { name: "Node.js", variant: "pastel-green" },
      { name: "PostgreSQL", variant: "pastel-cyan" },
      { name: "AWS", variant: "pastel-yellow" },
      { name: "Docker", variant: "pastel-orange" },
      { name: "Kubernetes", variant: "pastel-pink" },
    ],
    highlights: ["Promoção para Senior", "Líder Técnico", "40% melhoria performance"],
  },
  {
    company: "StartupXYZ",
    position: "Full Stack Developer",
    period: "Mar 2020 - Dez 2021",
    location: "São Paulo, SP",
    type: "Híbrido",
    description: [
      "Desenvolvi MVP de aplicação fintech do zero, desde prototipagem até produção",
      "Criei API REST escalável com autenticação JWT e integração com gateways de pagamento",
      "Implementei testes automatizados aumentando cobertura de código para 85%",
      "Colaborei diretamente com product owners na definição de requisitos e prioridades",
    ],
    technologies: [
      { name: "Vue.js", variant: "pastel-green" },
      { name: "JavaScript", variant: "pastel-yellow" },
      { name: "Express.js", variant: "pastel-cyan" },
      { name: "MongoDB", variant: "pastel-pink" },
      { name: "Stripe API", variant: "pastel-orange" },
      { name: "Jest", variant: "pastel-purple" },
    ],
    highlights: ["MVP do zero", "85% cobertura testes", "Integração pagamentos"],
  },
  {
    company: "WebAgency Digital",
    position: "Frontend Developer",
    period: "Jun 2019 - Feb 2020",
    location: "São Paulo, SP",
    type: "Presencial",
    description: [
      "Desenvolvi websites responsivos e e-commerces para diversos clientes",
      "Otimizei performance de aplicações web, melhorando Core Web Vitals em média 60%",
      "Implementei animações e interações avançadas com CSS e JavaScript",
      "Trabalhei em projetos utilizando WordPress customizado e headless CMS",
    ],
    technologies: [
      { name: "HTML5", variant: "pastel-orange" },
      { name: "CSS3", variant: "pastel-blue" },
      { name: "JavaScript", variant: "pastel-yellow" },
      { name: "WordPress", variant: "pastel-indigo" },
      { name: "SASS", variant: "pastel-pink" },
      { name: "jQuery", variant: "pastel-cyan" },
    ],
    highlights: ["60% melhoria Core Web Vitals", "15+ projetos entregues"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.headerSection}>
        <h2 className={styles.mainTitle}>Experiência Profissional</h2>
        <p className={styles.subtitle}>Minha jornada profissional construindo soluções digitais inovadoras</p>
      </div>

      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.cardHeader}>
              <div className={styles.headerContent}>
                <div className={styles.positionInfo}>
                  <h3 className={styles.positionTitle}>{exp.position}</h3>
                  <div className={styles.companyInfo}>
                    <Building className={styles.companyIcon} />
                    <span className={styles.companyName}>{exp.company}</span>
                  </div>
                </div>
                <div className={styles.metaInfo}>
                  <div className={styles.metaItem}>
                    <Calendar className={styles.metaIcon} />
                    {exp.period}
                  </div>
                  <div className={styles.metaItem}>
                    <MapPin className={styles.metaIcon} />
                    {exp.location} • {exp.type}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.cardContent}>
              <ul className={styles.descriptionList}>
                {exp.description.map((item, i) => (
                  <li key={i} className={styles.descriptionItem}>
                    <span className={styles.bullet}>●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <hr className={styles.separator} />

              <div className={styles.technologiesSection}>
                <h4 className={styles.sectionTitle}>Tecnologias Utilizadas</h4>
                <div className={styles.badgeContainer}>
                  {exp.technologies.map(tech => (
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
              </div>

              {exp.highlights.length > 0 && (
                <>
                  <hr className={styles.separator} />
                  <div className={styles.highlightsSection}>
                    <h4 className={styles.sectionTitle}>Principais Conquistas</h4>
                    <div className={styles.badgeContainer}>
                      {exp.highlights.map((highlight, idx) => {
                        const variants = ["Green", "Blue", "Purple"];
                        const variant = variants[idx % variants.length];
                        return (
                          <span key={highlight} className={`${styles.badge} ${styles[`badge${variant}`]}`}>
                            {highlight}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
