type Badge = {
  label: string;
  color: string;
};

export interface Experience {
  id: string;
  title: string;
  company: string;
  length?: string; // Optional field for length of experience
  period: string;
  location: string;
  companyUrl?: string;
  description: string;
  shortDescription?: string;
  responsibilities: string[];
  logoUrl?: string;
  badges?: Badge[];
  type: "work" | "education";
}

type Hero = {
  title: string;
  subtitle: string;
  description: string;
};

type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  badges?: Badge[];
  technologies?: string[];
  logoUrl?: string;
};

export const hero: Hero = {
  title: "Marcello Novelli",
  subtitle: "Product Manager | Web Developer",
  description:
    "I am a product manager and web developer with a passion for design. I have experience in leading product development, designing user interfaces, and managing teams in tech startups. My expertise lies in creating scalable SaaS platforms and optimizing business processes to drive growth.",
};

export const experiences: Experience[] = [
  {
    id: "stackzero",
    title: "Product Lead | Developer | Co-Founder (SaaS / API)",
    company: "Stackzero",
    period: "Jan 2022 - Present",
    length: "3 yrs",
    location: "London, UK - Remote",
    companyUrl: "https://www.stackzero.co/",
    logoUrl:
      "https://raw.githubusercontent.com/mnove/marcellonovelli/refs/heads/main/public/logos/stackzero.jpeg",
    description:
      "Stackzero is an API-first SaaS platform designed to simplify the development of commerce applications. As a co-founder and product lead, I played a pivotal role in shaping the product vision and technical architecture.",
    shortDescription:
      "Co-Founder and Product Lead at Stackzero, an API-first SaaS platform to build commerce applications. Led the founding team to design and build the core API and web applications.",
    responsibilities: [
      "Co-Founder and Product Lead at Stackzero, an API-first SaaS platform to build commerce applications.",
      "Responsible for company-wide operations and projects across marketing, engineering, product and sales.",
      "Designed and architected the core API (Node.js, GraphQL) and web applications (React, Next.js) for the Stackzero platform.",
      "Designed and develop the product's admin dashboard (React, TypeScript, TailwindCSS), documentation (Next.js, MDX) and marketing website (Next.js, TailwindCSS).",
    ],
    badges: [
      { label: "SaaS", color: "blue" },
      { label: "API", color: "green" },
      { label: "Co-Founder", color: "purple" },
    ],
    type: "work",
  },
  {
    id: "octeract",
    title: "Product & Operations Lead (Web / SaaS)",
    company: "Octeract",
    period: "Jan 2020 - Jan 2021",
    length: "1 yr",
    location: "London, UK - Remote",
    logoUrl:
      "https://raw.githubusercontent.com/mnove/marcellonovelli/refs/heads/main/public/logos/octeract.jpeg",
    description:
      "Octeract is an optimization and data analysis platform that helps businesses make data-driven decisions. My role involved working closely with the product team to design and develop the web application and first SaaS version of the product.",

    shortDescription:
      "Product and Operations Lead at Octeract, an optimization and data analysis platform. Managed a team of 5+ product and software engineers.",
    responsibilities: [
      "Responsible for company-wide operations and projects across marketing, engineering, product and sales.",
      "Lead product/operations for the company's 1st web product (SaaS).",
      "Coordinated key product launches, technical deliverables and deadlines with a team of 12+ software engineers.",
      "Designed initial website and SaaS interface (Figma, React)",
    ],
    badges: [
      { label: "SaaS", color: "blue" },
      { label: "Data Analysis", color: "green" },
      { label: "Product Lead", color: "purple" },
    ],
    type: "work",
  },
  {
    id: "nickelytics",
    title: "Product Manager & Design Engineer (Web)",
    company: "Techstars / Nickelytics (Techstars Portfolio '20)",
    period: "Oct 2019 - Jan 2021",
    length: "2 yrs",
    location: "Turin, Italy - Florida, USA - Remote",
    logoUrl:
      "https://raw.githubusercontent.com/mnove/marcellonovelli/refs/heads/main/public/logos/nickelytics.jpeg",
    companyUrl: "https://www.Nickelytics.com/",
    description:
      "Nickelytics is a data analytics platform that helps businesses make data-driven decisions. My role involved working closely with the product team to design and develop the web application.",
    shortDescription:
      "Product Manager and Design Engineer at Nickelytics, a data analytics platform. Designed and developed the web application and first SaaS version of the product.",
    responsibilities: [
      "Design/develop internal digital tools to help streamline internal ops.",
      "Product prototyping for AdTech Platform (SaaS / Recruiting) using HTML, React, CSS",
      "Script development (Javascript, AppScript, Google Sheets)",
      "Managed day-to-day operations, user onboarding, and customer support to ensure high retention and feedback loops.",
      "Coordinated between technical development and business strategy to align product decisions with growth goals.",
    ],
    badges: [
      { label: "SaaS", color: "blue" },
      { label: "Data Analysis", color: "green" },
      { label: "Product Manager", color: "purple" },
    ],
    type: "work",
  },
  // {
  //   id: "techstars",
  //   title: "Product Development & Growth Associate",
  //   company: "Techstars",
  //   period: "Oct 2019 - Apr 2020 · 7 mos",
  //   location: "London, UK - Turin, Italy",
  //   companyUrl: "https://www.techstars.com/",
  //   description:
  //     "Techstars is a global platform that provides investment and mentorship to startups. My role involved working closely with selected startups, helping them refine their product offerings, product design and go-to-market strategies.",

  //   shortDescription:
  //     "Product Development and Growth Associate at Techstars, working with startups to refine product offerings and go-to-market strategies.",
  //   responsibilities: [
  //     "Website design",
  //     "Product design",
  //     "Business process design",
  //     "UX / UI research",
  //     "MVP development (Web)",
  //     "Customer development / discovery",
  //     "Sale strategy (B2B / B2G) and execution",
  //     "Early-stage business strategy for venture-backed companies",
  //   ],
  //   badges: [
  //     { label: "SaaS", color: "blue" },
  //     { label: "Product Development", color: "green" },
  //     { label: "Growth", color: "purple" },
  //   ],
  //   type: "work",
  // },
  {
    id: "ucl",
    title: "Master of Science Student - UCL school of Engineering",
    company: "University College London (UCL)",
    period: "Sep 2018 - Sep 2019",
    length: "1 yr 1 mo",
    location: "London, UK",
    companyUrl: "https://www.ucl.ac.uk/",
    description:
      "UCL is a world-leading university known for its cutting-edge research and diverse academic programs. My MSc in Technology provided me with a strong foundation in both theoretical and practical aspects of technology, preparing me for a career at the intersection of design and engineering.",

    shortDescription:
      "MSc in Technology Entrepreneurship at UCL, specializing in digital product design and development.",
    responsibilities: [
      "MSc in Technology Entrepreneurship",
      "Specialization in digital product design and development",
      'Dissertation: "Behaviours and working practices of independent creative consultants that can be coded as a digital platform core interaction"',
    ],
    badges: [
      { label: "MSc", color: "blue" },
      { label: "Technology", color: "green" },
      { label: "Entrepreneurship", color: "purple" },
    ],
    type: "education",
  },
  {
    id: "carv",
    title: "Operations Manager (Founding Team)",
    company: "Carv by MotionMetrics",
    period: "2017 - 2018",
    length: "2 yrs",
    logoUrl:
      "https://raw.githubusercontent.com/mnove/marcellonovelli/refs/heads/main/public/logos/carv.jpeg",
    location: "London, UK",
    companyUrl: "https://getcarv.com/",
    description:
      "I joined Carv, a tech startup focused on enhancing the skiing experience through innovative wearable technology, as part of the founding team. My role involved leading business operations and project management, working closely with the CEO and CCO to establish processes and drive product development.",
    shortDescription:
      "Operations Manager at Carv, a tech startup enhancing skiing experiences with wearable technology. I was part of the founding team.",
    responsibilities: [
      "Business operations (Founding Team)",
      "Coordinated pilot projects, 20+ live product tests with investors/partners",
      "Customer service (5K+ customers)",
      "International logistics (shipped £500K worth of goods)",
      "MVP development (Web)",
    ],
    badges: [
      { label: "SaaS", color: "blue" },
      { label: "Wearable Technology", color: "green" },
      { label: "Operations Management", color: "purple" },
    ],
    type: "work",
  },
];

export const projects: Project[] = [
  {
    id: "unlogg-hooks",
    title: "Unlogg Hooks",
    description:
      "A set of React hooks for managing user authentication and authorization.",
    url: "https://www.unlogg.com/docs/hooks",
    logoUrl:
      "https://raw.githubusercontent.com/unlogg/unlogg/7e2f3ce5400efb793d0c7e1a5c0c0de709fe563b/apps/www-docs/public/unlogg-logo-icon.svg",
    badges: [
      { label: "React Hooks", color: "blue" },
      { label: "Authentication", color: "green" },
      { label: "Open Source", color: "purple" },
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: undefined,
  },
  // {
  //   id: "stackzero-dashboard",
  //   title: "Stackzero Dashboard",
  //   description: "Full-stack web app to manage headless e-commerce API.",
  //   url: "https://www.stackzero.co/",
  //   logoUrl:
  //     "https://raw.githubusercontent.com/mnove/marcellonovelli/refs/heads/main/public/logos/stackzero.jpeg",
  //   badges: [
  //     { label: "Dashboard", color: "blue" },
  //     { label: "E-commerce", color: "green" },
  //     { label: "Full Stack", color: "purple" },
  //   ],
  //   technologies: ["React", "GraphQL", "Mantine UI", "Auth", "Caching"],
  //   imageUrl: undefined,
  // },
  {
    id: "stackzero-api",
    title: "Stackzero Commerce API",
    description: "A headless, API-first e-commerce platform.",
    url: "https://www.stackzero.co/",
    logoUrl:
      "https://raw.githubusercontent.com/mnove/marcellonovelli/refs/heads/main/public/logos/stackzero.jpeg",
    badges: [
      { label: "API", color: "blue" },
      { label: "Headless", color: "green" },
      { label: "E-commerce", color: "purple" },
    ],
    technologies: ["GraphQL API", "Node.js", "PostgreSQL", "Docker", "React"],
    imageUrl: undefined,
  },
  {
    id: "hyperlane",
    title: "Hyperlane app",
    description:
      "A low-code micro-app builder with drag-and-drop UI for internal tools.",
    logoUrl:
      "https://raw.githubusercontent.com/mnove/marcellonovelli/refs/heads/main/public/logos/hyperlane.jpeg",
    url: "#", // No public URL provided in MDX
    badges: [
      { label: "Low-Code", color: "blue" },
      { label: "Micro-App", color: "green" },
      { label: "Internal Tool", color: "purple" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "DigitalOcean"],
    imageUrl: undefined,
  },
  {
    id: "commerce-ui",
    title: "commerce-ui",
    description:
      "An open-source, component library for building e-commerce sites and apps.",
    logoUrl:
      "https://raw.githubusercontent.com/mnove/marcellonovelli/refs/heads/main/public/logos/github.jpeg",
    url: "https://ui.stackzero.co",
    imageUrl: "https://ui.stackzero.co/logo.svg",
    badges: [
      { label: "UI Library", color: "blue" },
      { label: "Open Source", color: "green" },
      { label: "E-commerce", color: "purple" },
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
];

export const codingSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "Tailwind CSS",
  "Framer Motion",
  "shadcn/ui",
  "PostgreSQL",
  "Docker",
  "DigitalOcean",
  "AWS",
];

export const designProductSkills = [
  "Product Design",
  "UI/UX Design",
  "Figma",
  "Prototyping",
  "User Research",
  "Wireframing",
  "Design Systems",
  "Responsive Design",
  "Accessibility (a11y)",
];
