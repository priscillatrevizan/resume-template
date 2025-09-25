import { Calendar, MapPin, User } from "lucide-react";
import { useResume } from "../../context/DataContext";
import { ExportPdfButton } from "../export-pdf-button";
import styles from "./about-section.module.css";

export function AboutSection() {
  const data = useResume();
  const profile = data.profile;

  return (
    <section id="about" className={styles.aboutSection}>
      {/* Header for Print Only */}
      <div className={styles.printHeader}>
        <h1 className={styles.printTitle}>{profile.name.toUpperCase()}</h1>
        <h2 className={styles.printSubtitle}>{profile.title}</h2>
        <div className={styles.printContact}>
          <p>
            <strong>Email:</strong> {profile.email} | <strong>Telefone:</strong> {profile.phone}
          </p>
          <p>
            <strong>LinkedIn:</strong> {profile.linkedin} | <strong>GitHub:</strong> {profile.github}
          </p>
          <p>
            <strong>Localização:</strong> {profile.location}
          </p>
        </div>
      </div>

      {/* Header for Screen Only */}
      <div className={styles.screenHeader}>
        {/* <h1 className={styles.mainTitle}>{profile.name}</h1> */}
        <h2 className={styles.subtitle}>{profile.title}</h2>
        <div className={styles.infoContainer}>
          <div className={styles.infoItem}>
            <MapPin className={styles.icon} />
            {profile.location}
          </div>
          <div className={styles.infoItem}>
            <Calendar className={styles.icon} />
            {profile.experienceYears}
          </div>
          <div className={styles.infoItem}>
            <User className={styles.icon} />
            {profile.age}
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Sobre Mim</h3>
        </div>
        <div className={styles.cardContent}>
          <p className={styles.paragraph}>{profile.summary}</p>

          <p className={styles.paragraph}>{profile.summary2}</p>

          <div className={styles.competenciesSection}>
            <h4 className={styles.competenciesTitle}>Principais Competências</h4>
            <div className={styles.badgeContainer}>
              {profile.competencies.map((c: string) => (
                <span key={c} className={`${styles.badge}`}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.footerSection}>
            <p className={styles.footerText}>Interessado no meu perfil? Baixe uma versão completa do meu currículo.</p>
            <div className={styles.buttonContainer}>
              <ExportPdfButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
