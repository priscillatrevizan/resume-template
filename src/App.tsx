import { useEffect, useState } from "react";
import { AppSidebar } from "./components/app-sidebar";
import { ExportPdfButton } from "./components/export-pdf-button";
import { AboutSection } from "./components/sections/about-section";
import { ContactSection } from "./components/sections/contact-section";
import { ExperienceSection } from "./components/sections/experience-section";
import { ProjectsSection } from "./components/sections/projects-section";
import { SkillsSection } from "./components/sections/skills-section";
import { Separator } from "./components/ui/separator";
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
      <div className="flex min-h-screen w-full">
        <AppSidebar
          onNavigate={setActiveSection}
          activeSection={activeSection}
        />

        <SidebarInset className="flex-1">
          <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="flex h-16 items-center justify-between gap-4 px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="md:hidden" />
                <Separator orientation="vertical" className="h-6 md:hidden" />
              </div>
              <div className="flex items-center gap-2">
                <ExportPdfButton />
              </div>
            </div>
          </header>

          <main className="flex-1">
            <div id="resume-content" className="container max-w-6xl mx-auto p-6 space-y-12">
              <AboutSection />
              <Separator className="no-print" />
              <ExperienceSection />
              <Separator className="no-print" />
              <SkillsSection />
              <Separator className="no-print" />
              <ProjectsSection />
              <Separator className="no-print" />
              <ContactSection />
            </div>
          </main>

          <footer className="border-t py-6 px-6">
            <div className="container max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p>© 2024 João Silva. Todos os direitos reservados.</p>
                <p>Desenvolvido com React, TypeScript e Tailwind CSS</p>
              </div>
            </div>
          </footer>
        </SidebarInset>
      </div>

      <Toaster />
    </SidebarProvider>
  );
}
