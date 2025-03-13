import React from "react";
import CopyButton from "@/components/ui/copy-btn";

export type CodePreviewProps = {
  code: string;
  highlightedCode: string;
};

export function CodeRenderer({ code, highlightedCode }: CodePreviewProps) {
  return (
    <div className="group/item relative">
      <CopyButton componentSource={code} />
      <div className="max-h-[550px] overflow-auto rounded-md">
        <div className="inline-block overflow-x-auto p-4 [&_pre]:bg-transparent!">
          <div
            className="font-mono text-sm [&_.only-dark]:hidden dark:[&_.only-dark]:block [&_.only-light]:block dark:[&_.only-light]:hidden [&_.shiki]:bg-transparent!"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </div>
      </div>
    </div>
  );
}
