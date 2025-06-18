"use client";

import dynamic from "next/dynamic";

const PDFResumeViewer = dynamic(
  () => import("./pdf-resume-component").then((mod) => mod.PDFResumeComponent),
  {
    ssr: false,
    loading: () => <p>Loading document...</p>,
  }
);

export function ResumeViewer() {
  return (
    <div>
      <PDFResumeViewer />
    </div>
  );
}
