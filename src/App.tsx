import { Suspense, lazy, useEffect, useState } from "react";
import styles from "./App.module.css";
import { AppSidebar } from "./components/app-sidebar";
import { ExportPdfButton } from "./components/export-pdf-button";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { Toaster } from "./components/ui/sonner";
import ResumeContainer from "./features/resume/components/ResumeContainer";
import { useResume } from "./features/resume/context";
const AboutSection = lazy(() =>
  import("./components/sections/about-section").then(m => ({ default: (m as any).AboutSection }))
);
const ContactSection = lazy(() =>
  import("./components/sections/contact-section").then(m => ({ default: (m as any).ContactSection }))
);
const ExperienceSection = lazy(() =>
  import("./components/sections/experience-section").then(m => ({ default: (m as any).ExperienceSection }))
);
const ProjectsSection = lazy(() =>
  import("./components/sections/projects-section").then(m => ({ default: (m as any).ProjectsSection }))
);
const SkillsSection = lazy(() =>
  import("./components/sections/skills-section").then(m => ({ default: (m as any).SkillsSection }))
);

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  const data = useResume();
  const profile = data.profile;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SidebarProvider>
      <div className={styles.app}>
        <AppSidebar onNavigate={setActiveSection} activeSection={activeSection} />

        <SidebarInset className={styles.mainContent}>
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <div className={styles.headerLeft}>
                <SidebarTrigger className={styles.sidebarTrigger} />
                <div className={styles.separator} />
              </div>

              <div className={styles.headerRight}>
                <h1 className={styles.mainTitle}>{profile?.name}</h1>

                <ExportPdfButton />
              </div>
            </div>
          </header>

          <main className={styles.main}>
            <ResumeContainer id="resume-content" className={styles.container}>
              <Suspense fallback={<div>Carregando seção...</div>}>
                <AboutSection />
                <hr className={`${styles.sectionSeparator} ${styles.noPrint}`} />
                <ExperienceSection />
                <hr className={`${styles.sectionSeparator} ${styles.noPrint}`} />
                <SkillsSection />
                <hr className={`${styles.sectionSeparator} ${styles.noPrint}`} />
                <ProjectsSection />
                <hr className={`${styles.sectionSeparator} ${styles.noPrint}`} />
                <ContactSection />
              </Suspense>
            </ResumeContainer>
          </main>

          <footer className={styles.footer}>
            <div className={styles.footerContainer}>
              <div className={styles.footerContent}>
                <p className={styles.footerText}>© 2024 {profile?.name}. Todos os direitos reservados.</p>
                <p className={styles.footerText}>Desenvolvido com React, TypeScript e CSS Modules</p>
              </div>
            </div>
          </footer>
        </SidebarInset>
      </div>

      <Toaster />
    </SidebarProvider>
  );
}
