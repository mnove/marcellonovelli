"use client";

import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { PDFResume } from "./resume-pdf";
import { Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const DownloadResumeButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPDF = async () => {
    setIsGenerating(true);

    try {
      // Generate the PDF blob
      const blob = await pdf(<PDFResume />).toBlob();

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "marcello-novelli-resume.pdf";

      // Trigger download
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={downloadPDF}
      disabled={isGenerating}
      className={buttonVariants({ variant: "outline", size: "sm" })}
    >
      <Download size={16} />
      {isGenerating ? "Generating PDF..." : "Generate my Resume"}
    </button>
  );
};
