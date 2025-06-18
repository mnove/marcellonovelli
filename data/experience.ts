export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  companyUrl?: string;
  description: string;
  responsibilities: string[];
  type: "work" | "education";
}

export const experiences: Experience[] = [
  {
    id: "stackzero",
    title: "Product Lead | Developer | Co-Founder (SaaS / API)",
    company: "Stackzero",
    period: "Jan 2022 - Present",
    location: "London, UK - Remote",
    companyUrl: "https://www.stackzero.co/",
    description:
      "Stackzero is an API-first SaaS platform designed to simplify the development of commerce applications. As a co-founder and product lead, I played a pivotal role in shaping the product vision and technical architecture.",
    responsibilities: [
      "Co-Founder and Product Lead at Stackzero, an API-first SaaS platform to build commerce applications.",
      "Responsible for company-wide operations and projects across marketing, engineering, product and sales.",
      "Designed and architected the core API (Node.js, GraphQL) and web applications (React, Next.js) for the Stackzero platform.",
      "Designed and develop the product's admin dashboard (React, TypeScript, TailwindCSS), documentation (Next.js, MDX) and marketing website (Next.js, TailwindCSS).",
    ],
    type: "work",
  },
  {
    id: "octeract",
    title: "Product & Operations Lead (Web / SaaS)",
    company: "Octeract",
    period: "Jan 2020 - Jan 2021 · 1y",
    location: "London, UK - Remote",
    description:
      "Octeract is an optimization and data analysis platform that helps businesses make data-driven decisions. My role involved working closely with the product team to design and develop the web application and first SaaS version of the product.",
    responsibilities: [
      "Responsible for company-wide operations and projects across marketing, engineering, product and sales.",
      "Lead product/operations for the company's 1st web product (SaaS).",
      "Coordinated key product launches, technical deliverables and deadlines with a team of 12+ software engineers.",
      "Designed initial website and SaaS interface (Figma, React)",
    ],
    type: "work",
  },
  // ... add other experiences following the same pattern
];
