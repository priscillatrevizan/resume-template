import { Building, Calendar, MapPin } from "lucide-react";
import { useResume } from "../../features/resume/context";
import styles from "./experience-section.module.css";

export function ExperienceSection() {
  const data = useResume();
  const experiences = data.experiences || [];

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.headerSection}>
        <h2 className={styles.mainTitle}>Experiência Profissional</h2>
        <p className={styles.subtitle}>Minha jornada profissional construindo soluções digitais inovadoras</p>
      </div>

      <div className={styles.experienceList}>
        {experiences.map((exp: any, index: number) => (
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
                {exp.description.map((item: string, i: number) => (
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
                  {exp.technologies.map((tech: any) => (
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
              </div>

              {exp.highlights && exp.highlights.length > 0 && (
                <>
                  <hr className={styles.separator} />
                  <div className={styles.highlightsSection}>
                    <h4 className={styles.sectionTitle}>Principais Conquistas</h4>
                    <div className={styles.badgeContainer}>
                      {exp.highlights.map((highlight: string, idx: number) => {
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
