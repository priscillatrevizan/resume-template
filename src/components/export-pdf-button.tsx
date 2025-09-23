import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

export function ExportPdfButton() {
  const handlePrint = () => {
    // Simply trigger print dialog - @media print will handle styling
    window.print();
    
    // Show success message
    toast.success("Diálogo de impressão aberto!", {
      description: "Use 'Salvar como PDF' para salvar ou 'Imprimir' conforme sua necessidade."
    });
  };

  return (
    <Button 
      onClick={handlePrint} 
      variant="outline"
      size="sm"
      className="export-pdf-btn gap-2 transition-all duration-200 shadow-sm hover:shadow-md focus-pastel-blue"
    >
      <Download className="h-4 w-4" />
      Exportar PDF
    </Button>
  );
}