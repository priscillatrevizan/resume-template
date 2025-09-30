import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "../components/ui/button";
import { useResume } from "../features/resume/context/DataProvider";
import styles from "./print-page.module.css";

// Define types based on resume.json to fix 'any' errors
type Experience = {
  company: string;
  position: string;
  period: string;
  description: string[];
};

type Skill = {
  name: string;
  level: string;
};

type Project = {
  title: string;
  description: string;
  links: {
    demo?: string;
    github?: string;
  };
};

type Education = {
  degree: string;
  institution: string;
  period: string;
};

interface PrintPageProps {
  onPrintFinish: () => void;
}

export function PrintPage({ onPrintFinish }: PrintPageProps) {
  const data = useResume();

  const handlePrint = () => {
    window.print();
  };

  const { profile, experiences, skills, projects, education, languages, interests, references } = data;
  const languagesList = Array.isArray(languages) ? languages : [];

  return (
    <div className={styles.printPageContainer}>
      <header className={styles.screenHeader}>
        <div className={styles.buttonContainer}>
          <Button variant="outline" onClick={onPrintFinish}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
          <Button onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Imprimir
          </Button>
        </div>
      </header>

      <section id="print-preview" className={styles.printPreviewSection}>
        {/* Header */}
        <div className={styles.header}>
          <h1>{profile.name?.toUpperCase()}</h1>
          <h2>{profile.title}</h2>
          <div>
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

        {/* Sobre Mim */}
        <div className={styles.aboutSection}>
          <h3>Sobre Mim</h3>
          <p>{profile.summary}</p>
          <p>{profile.summary2}</p>
        </div>

        {/* Experiência Profissional */}
        <div className={styles.experienceSection}>
          <h3>Experiência Profissional</h3>
          {experiences.map((job: Experience, index: number) => (
            <div key={index}>
              <h4>
                {job.position} - {job.company}
              </h4>
              <p>{job.period}</p>
              <ul>
                {job.description.map((desc: string, idx: number) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Educação */}
        <div className={styles.educationSection}>
          <h3>Educação</h3>
          {education &&
            education.map((edu: Education, index: number) => (
              <div key={index}>
                <p>
                  <strong>{edu.degree}</strong> - {edu.institution} ({edu.period})
                </p>
              </div>
            ))}
        </div>

        {/* Habilidades */}
        <div className={styles.skillsSection}>
          <h3>Habilidades</h3>
          <div className={styles.skillsList}>
            {skills.map((skill: Skill, index: number) => (
              <div key={index} className={styles.skillItem}>
                <span className={styles.divisorDot}></span>
                <div className={styles.skillName}>{skill.name}</div>
                <div className={styles.skillLevel}>({skill.level})</div>
              </div>
            ))}
          </div>
        </div>
        {/* Projetos */}
        <div className={styles.projectsSection}>
          <h3>Projetos</h3>
          {projects.map((project: Project, index: number) => (
            <div key={index}>
              <h4 className={styles.projectTitle}>{project.title}</h4>
              <p className={styles.projectDescription}>{project.description}</p>
              {project.links?.demo && (
                <p className={styles.projectLinks}>
                  <strong className={styles.projectLinkText}>Link:</strong>{" "}
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    {project.links.demo}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Idiomas */}
        <div className={styles.languagesSection}>
          <h3 className={styles.sectionTitle}>Idiomas</h3>
          <ul className={styles.languagesList}>
            {languagesList.length > 0 ? (
              languagesList.map((language: { name: string; level: string }, index: number) => (
                <li key={index} className={styles.languageItem}>
                  <span className={styles.languageName}>{language.name}</span>{" "}
                  <span className={styles.languageLevel}>({language.level})</span>
                </li>
              ))
            ) : (
              <li className={styles.languageItem}>Nenhum idioma informado</li>
            )}
          </ul>
        </div>

        {/* Interesses */}
        <div className={styles.interestsSection}>
          <h3 className={styles.sectionTitle}>Interesses</h3>
          <ul className={styles.interestsList}>
            {interests &&
              interests.map((interest: string, index: number) => (
                <li key={index} className={styles.interestItem}>
                  <span className={styles.divisorDot}></span>
                  {interest}
                </li>
              ))}
          </ul>
        </div>

        {/* Referências */}
        <div className={styles.referencesSection}>
          <h3>Referências</h3>
          <p>{references}</p>
        </div>
      </section>
    </div>
  );
}
