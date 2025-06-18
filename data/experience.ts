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
  {
    id: "nickelytics",
    title: "Product Manager & Design Engineer (Web)",
    company: "Nickelytics",
    period: "Jan 2020 - Jan 2021 · 1y",
    location: "Florida, USA - Remote",
    companyUrl: "https://www.Nickelytics.com/",
    description:
      "Nickelytics is a data analytics platform that helps businesses make data-driven decisions. My role involved working closely with the product team to design and develop the web application.",
    responsibilities: [
      "Design/develop internal digital tools to help streamline internal ops.",
      "Product prototyping for AdTech Platform (SaaS / Recruiting) using HTML, React, CSS",
      "Script development (Javascript, AppScript, Google Sheets)",
      "Managed day-to-day operations, user onboarding, and customer support to ensure high retention and feedback loops.",
      "Coordinated between technical development and business strategy to align product decisions with growth goals.",
    ],
    type: "work",
  },
  {
    id: "techstars",
    title: "Product Development & Growth Associate",
    company: "Techstars",
    period: "Oct 2019 - Apr 2020 · 7 mos",
    location: "London, UK - Turin, Italy",
    companyUrl: "https://www.techstars.com/",
    description:
      "Techstars is a global platform that provides investment and mentorship to startups. My role involved working closely with selected startups, helping them refine their product offerings, product design and go-to-market strategies.",
    responsibilities: [
      "Website design",
      "Product design",
      "Business process design",
      "UX / UI research",
      "MVP development (Web)",
      "Customer development / discovery",
      "Sale strategy (B2B / B2G) and execution",
      "Early-stage business strategy for venture-backed companies",
    ],
    type: "work",
  },
  {
    id: "ucl",
    title: "Master of Science Student - UCL school of Engineering",
    company: "University College London (UCL)",
    period: "Sep 2018 - Sep 2019 · 1 yr 1 mo",
    location: "London, UK",
    companyUrl: "https://www.ucl.ac.uk/",
    description:
      "UCL is a world-leading university known for its cutting-edge research and diverse academic programs. My MSc in Technology provided me with a strong foundation in both theoretical and practical aspects of technology, preparing me for a career at the intersection of design and engineering.",
    responsibilities: [
      "MSc in Technology Entrepreneurship",
      "Specialization in digital product design and development",
      'Dissertation: "Behaviours and working practices of independent creative consultants that can be coded as a digital platform core interaction"',
    ],
    type: "education",
  },
  {
    id: "carv",
    title: "Operations Manager (Founding Team)",
    company: "Carv by MotionMetrics",
    period: "2017 - 2018 · 1 yr",
    location: "London, UK",
    companyUrl: "https://getcarv.com/",
    description:
      "I joined Carv, a tech startup focused on enhancing the skiing experience through innovative wearable technology, as part of the founding team. My role involved leading business operations and project management, working closely with the CEO and CCO to establish processes and drive product development.",
    responsibilities: [
      "Business operations (Founding Team)",
      "Coordinated pilot projects, 20+ live product tests with investors/partners",
      "Customer service (5K+ customers)",
      "International logistics (shipped £500K worth of goods)",
      "MVP development (Web)",
    ],
    type: "work",
  },
];
