import { PDFViewer } from "@react-pdf/renderer";
import { PDFResume } from "./resume-pdf";

export function PDFResumeComponent() {
  return (
    <PDFViewer className="w-full h-screen">
      <PDFResume />
    </PDFViewer>
  );
}
