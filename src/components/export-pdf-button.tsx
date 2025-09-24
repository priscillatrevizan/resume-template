import { Download } from "lucide-react";
import { toast } from "sonner";
import styles from "./export-pdf-button.module.css";

export function ExportPdfButton() {
  const handlePrint = () => {
    // Simply trigger print dialog - @media print will handle styling
    window.print();

    // Show success message
    toast.success("Diálogo de impressão aberto!", {
      description: "Use o botão 'Imprimir' conforme sua necessidade.",
    });
  };

  return (
    <button onClick={handlePrint} className={styles.exportButton}>
      <Download className={styles.icon} />
      Exportar PDF
    </button>
  );
}
