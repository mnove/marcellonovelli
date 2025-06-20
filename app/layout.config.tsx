import { DownloadResumeButton } from "@/components/layout/resume/get-resume-btn";
import { Icons } from "@/components/ui/icon";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Icons.Logo />
        Marcello Novelli
      </>
    ),
  },
  links: [
    {
      text: "About me",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Blog",
      url: "/blog",
      active: "nested-url",
    },
    {
      type: "custom",
      children: <DownloadResumeButton />,
    },
  ],
};
