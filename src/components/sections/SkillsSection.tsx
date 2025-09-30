import { useResume } from "../../features/resume/context";
import styles from "./SkillsSection.module.css";

export function SkillsSection() {
  const data = useResume();
  const skills = data.skills || [];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.headerSection}>
        <h2 className={styles.mainTitle}>Habilidades</h2>
        <p className={styles.subtitle}>Tecnologias e ferramentas que utilizo com frequência</p>
      </div>

      <div className={styles.skillsGrid}>
        {skills.map((skill: any, idx: number) => (
          <div key={idx} className={styles.skillCard}>
            <div className={styles.skillName}>{skill.name}</div>
            <div className={styles.skillLevel}>{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
