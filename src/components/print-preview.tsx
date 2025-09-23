import { ArrowLeft, Printer } from "lucide-react";
import { AboutSection } from "./sections/about-section";
import { ContactSection } from "./sections/contact-section";
import { ExperienceSection } from "./sections/experience-section";
import { ProjectsSection } from "./sections/projects-section";
import { SkillsSection } from "./sections/skills-section";
import { Button } from "./ui/button";

interface PrintPreviewProps {
  onBack: () => void;
}

export function PrintPreview({ onBack }: PrintPreviewProps) {
  const handlePrint = () => {
    // Temporarily replace body content with main page structure for printing
    const originalContent = document.body.innerHTML;
    const originalTitle = document.title;

    // Create the same structure as the main page for printing
    const printContent = `
      <div data-sidebar-inset>
        <main class="flex-1">
          <div id="resume-content" class="container max-w-6xl mx-auto p-6 space-y-12">
            <!-- Header for PDF -->
            <div class="print-only text-center border-b border-gray-300 pb-4 mb-8">
              <h1 class="text-2xl font-bold uppercase tracking-wide mb-2">João Silva</h1>
              <h2 class="text-lg font-medium mb-3">Desenvolvedor Full Stack</h2>
              <div class="text-sm space-y-1">
                <p><strong>Email:</strong> seu.email@exemplo.com | <strong>Telefone:</strong> +55 (11) 99999-9999</p>
                <p><strong>LinkedIn:</strong> linkedin.com/in/seu-perfil | <strong>GitHub:</strong> github.com/seu-usuario</p>
                <p><strong>Localização:</strong> São Paulo, Brasil</p>
              </div>
            </div>
            
            ${document.querySelector("#resume-content")?.innerHTML || ""}
          </div>
        </main>
      </div>
    `;

    // Set title for PDF
    document.title = "Currículo - João Silva";

    // Replace content temporarily
    document.body.innerHTML = printContent;

    // Print
    window.print();

    // Restore original content and title
    document.body.innerHTML = originalContent;
    document.title = originalTitle;
  };

  return (
    <div className="min-h-screen bg-gray-100" id="print-preview-page">
      {/* Controls bar - hidden in print */}
      <div className="print-preview-controls no-print bg-white border-b px-4 py-3 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
            <h1 className="font-semibold text-lg">Preview de Impressão - Modo ATS</h1>
          </div>
          <Button onClick={handlePrint} className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            Imprimir / Salvar PDF
          </Button>
        </div>
      </div>

      {/* Instructions - hidden in print */}
      <div className="print-preview-instructions no-print bg-blue-50 border-b px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-2">📋 Modo de Visualização ATS-Friendly</p>
            <p className="mb-3">
              Esta página simula exatamente como o currículo aparecerá no PDF exportado. Todos os estilos de impressão
              estão aplicados para uma visualização precisa.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-medium text-green-700">✅ Otimizações ATS aplicadas:</span>
                <ul className="mt-1 ml-4 space-y-1">
                  <li>• Layout completamente monocromático</li>
                  <li>• Badges convertidas para texto simples</li>
                  <li>• Todos os ícones e SVGs removidos</li>
                  <li>• Formulários e elementos interativos ocultos</li>
                </ul>
              </div>
              <div>
                <span className="font-medium text-blue-700">🎯 Especificações técnicas:</span>
                <ul className="mt-1 ml-4 space-y-1">
                  <li>• Tipografia: Arial/Helvetica para máxima compatibilidade</li>
                  <li>• Formato: A4 (8.5" x 11")</li>
                  <li>• Hierarquia clara para parsing ATS</li>
                  <li>• Links preservados como texto descritivo</li>
                </ul>
              </div>
            </div>

            <div className="mt-3 p-2 bg-blue-100 rounded border-blue-200 border">
              <p className="font-medium">💡 Dica:</p>
              <p>
                Use Ctrl+P ou clique em "Imprimir" para gerar o PDF final. As configurações de impressão serão aplicadas
                automaticamente.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Print content with forced print styles - A4 paper simulation */}
      <div className="print-preview-wrapper no-print flex justify-center bg-gray-100 py-8">
        <div className="print-preview-content bg-white shadow-lg max-w-[8.5in] min-h-[11in]">
          <div
            className="print-layout space-y-12"
            id="resume-content"
            style={{
              padding: "0.5in",
              fontFamily: "Arial, sans-serif",
              fontSize: "11pt",
              color: "#000",
              background: "#fff",
            }}
          >
            {/* Header for PDF - exactly like print version */}
            <div className="print-only text-center border-b border-gray-300 pb-4 mb-8">
              <h1 className="text-2xl font-bold uppercase tracking-wide mb-2">João Silva</h1>
              <h2 className="text-lg font-medium mb-3">Desenvolvedor Full Stack</h2>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Email:</strong> seu.email@exemplo.com | <strong>Telefone:</strong> +55 (11) 99999-9999
                </p>
                <p>
                  <strong>LinkedIn:</strong> linkedin.com/in/seu-perfil | <strong>GitHub:</strong>{" "}
                  github.com/seu-usuario
                </p>
                <p>
                  <strong>Localização:</strong> São Paulo, Brasil
                </p>
              </div>
            </div>

            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
}
