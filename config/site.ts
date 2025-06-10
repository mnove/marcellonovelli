export const siteConfig = {
  name: "Marcello's Website",
  creator: "@mnove",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://marcellonovelli.com",
  ogImage: "https://marcellonovelli.com/opengraph-image.png",
  description:
    "Personal website of Marcello Novelli, showcasing my work, blog, and projects.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "UI Library",
    "UI Kit",
    "UI Components",
    "UI Elements",
    "Open Source",
    "shadcn/ui",
  ],
  links: {
    portfolio: "https://marcellonovelli.com",
    github: "https://github.com/mnove",
  },
};

export type SiteConfig = typeof siteConfig;
