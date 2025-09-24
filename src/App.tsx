import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { AppSidebar } from "./components/app-sidebar";
import { ExportPdfButton } from "./components/export-pdf-button";
import { AboutSection } from "./components/sections/about-section";
import { ContactSection } from "./components/sections/contact-section";
import { ExperienceSection } from "./components/sections/experience-section";
import { ProjectsSection } from "./components/sections/projects-section";
import { SkillsSection } from "./components/sections/skills-section";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

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
                <ExportPdfButton />
              </div>
            </div>
          </header>

          <main className={styles.main}>
            <div id="resume-content" className={styles.container}>
              <AboutSection />
              <hr className={`${styles.sectionSeparator} ${styles.noPrint}`} />
              <ExperienceSection />
              <hr className={`${styles.sectionSeparator} ${styles.noPrint}`} />
              <SkillsSection />
              <hr className={`${styles.sectionSeparator} ${styles.noPrint}`} />
              <ProjectsSection />
              <hr className={`${styles.sectionSeparator} ${styles.noPrint}`} />
              <ContactSection />
            </div>
          </main>

          <footer className={styles.footer}>
            <div className={styles.footerContainer}>
              <div className={styles.footerContent}>
                <p className={styles.footerText}>© 2024 João Silva. Todos os direitos reservados.</p>
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
