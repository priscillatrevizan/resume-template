import { Calendar, MapPin, User } from "lucide-react";
import { ExportPdfButton } from "../export-pdf-button";
import styles from "./about-section.module.css";

export function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      {/* Header for Print Only */}
      <div className={styles.printHeader}>
        <h1 className={styles.printTitle}>JOÃO SILVA</h1>
        <h2 className={styles.printSubtitle}>Desenvolvedor Full Stack</h2>
        <div className={styles.printContact}>
          <p>
            <strong>Email:</strong> seu.email@exemplo.com | <strong>Telefone:</strong> +55 (11) 99999-9999
          </p>
          <p>
            <strong>LinkedIn:</strong> linkedin.com/in/seu-perfil | <strong>GitHub:</strong> github.com/seu-usuario
          </p>
          <p>
            <strong>Localização:</strong> São Paulo, Brasil
          </p>
        </div>
      </div>

      {/* Header for Screen Only */}
      <div className={styles.screenHeader}>
        <h1 className={styles.mainTitle}>João Silva</h1>
        <h2 className={styles.subtitle}>Desenvolvedor Full Stack</h2>
        <div className={styles.infoContainer}>
          <div className={styles.infoItem}>
            <MapPin className={styles.icon} />
            São Paulo, Brasil
          </div>
          <div className={styles.infoItem}>
            <Calendar className={styles.icon} />
            5+ anos de experiência
          </div>
          <div className={styles.infoItem}>
            <User className={styles.icon} />
            28 anos
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Sobre Mim</h3>
        </div>
        <div className={styles.cardContent}>
          <p className={styles.paragraph}>
            Desenvolvedor Full Stack apaixonado por tecnologia e inovação, com mais de 5 anos de experiência criando
            soluções web modernas e escaláveis. Especializado em React, Node.js e arquiteturas cloud, sempre busco
            entregar produtos de alta qualidade que geram valor real para usuários e negócios.
          </p>

          <p className={styles.paragraph}>
            Tenho experiência liderando equipes de desenvolvimento, implementando metodologias ágeis e promovendo boas
            práticas de código. Acredito na importância da colaboração, comunicação clara e aprendizado contínuo para o
            sucesso de qualquer projeto.
          </p>

          <div className={styles.competenciesSection}>
            <h4 className={styles.competenciesTitle}>Principais Competências</h4>
            <div className={styles.badgeContainer}>
              <span className={`${styles.badge} ${styles.badgeBlue}`}>Liderança Técnica</span>
              <span className={`${styles.badge} ${styles.badgeGreen}`}>Arquitetura de Software</span>
              <span className={`${styles.badge} ${styles.badgePurple}`}>DevOps</span>
              <span className={`${styles.badge} ${styles.badgeOrange}`}>Metodologias Ágeis</span>
              <span className={`${styles.badge} ${styles.badgePink}`}>Mentoria</span>
              <span className={`${styles.badge} ${styles.badgeCyan}`}>Code Review</span>
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
