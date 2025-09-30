import { Download } from "lucide-react";
import { toast } from "sonner";
import styles from "./export-pdf-button.module.css";

interface ExportPdfButtonProps {
  onPrintStart: () => void;
}

export function ExportPdfButton({ onPrintStart }: ExportPdfButtonProps) {
  const handlePrint = () => {
    onPrintStart();
    toast.success("Preparando para impressão...", {
      description: "A página de impressão será exibida em breve.",
    });
  };

  return (
    <button onClick={handlePrint} className={styles.exportButton}>
      <Download className={styles.icon} />
      Exportar PDF
    </button>
  );
}