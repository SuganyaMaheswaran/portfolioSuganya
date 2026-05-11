export interface Experience {
  id: string;
  company: string;
  title: string;
  location?: string;
  startYear: number;
  endYear: number | null;
  current?: boolean;
  summary: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  keySkills?: string[];
  projectLink?: string;
}

export const experiences: Experience[] = [
  {
    id: "statistics-canada",
    company: "Statistics Canada",
    title: "Software Engineer",
    location: "Ottawa, ON",
    startYear: 2018,
    endYear: 2020,
    summary: "Built large-scale government data systems focused on reliability and auditability.",
    description:
      "Worked on systems that serve the public interest, focusing on data integrity, transparency, and clear requirements documentation.",
    responsibilities: [
      "Designed and implemented scalable data processing pipelines",
      "Built systems with emphasis on auditability and compliance",
      "Improved data quality processes and validation frameworks",
    ],
    achievements: [
      "Reduced data processing time by 40% through pipeline optimization",
      "Established documentation standards for system transparency",
      "Led initiative to improve system reliability and error handling",
    ],
    technologies: ["Python", "SQL", "AWS", "Java"],
  },
  {
    id: "trainfo",
    company: "TRAINFO",
    title: "Full-Stack Engineer",
    location: "Toronto, ON",
    startYear: 2020,
    endYear: 2022,
    summary:
      "Built dashboard and reporting infrastructure for operational intelligence.",
    description:
      "Developed systems that made complex data accessible to decision-makers, focusing on simplifying workflows and improving data usability.",
    responsibilities: [
      "Architected dashboard and reporting systems",
      "Simplified data workflows and improved data quality",
      "Built APIs and backend services for frontend applications",
      "Mentored junior engineers on systems design",
    ],
    achievements: [
      "Created reporting system used by 200+ analysts daily",
      "Improved dashboard load times by 60%",
      "Reduced manual data entry by 70% through automation",
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    id: "solution-community",
    company: "Solution Community",
    title: "Backend Engineer",
    location: "Remote",
    startYear: 2021,
    endYear: 2022,
    summary:
      "Built systems for a collaborative problem-solving platform.",
    description:
      "Developed reliable, scalable infrastructure enabling meaningful community interaction and collaboration.",
    responsibilities: [
      "Designed microservices architecture for platform scalability",
      "Built real-time collaboration features",
      "Implemented data consistency and synchronization mechanisms",
    ],
    achievements: [
      "Supported 50k+ active users with 99.9% uptime",
      "Reduced API response time to sub-100ms",
      "Built event-driven architecture for real-time updates",
    ],
    technologies: ["Node.js", "TypeScript", "Kafka", "MongoDB", "Docker"],
  },
  {
    id: "facedrive",
    company: "FaceDrive",
    title: "Full-Stack Engineer",
    location: "Toronto, ON",
    startYear: 2022,
    endYear: 2023,
    summary:
      "Developed systems for a mobility and transportation platform.",
    description:
      "Built backend infrastructure and data pipelines for a real-time ride-sharing and delivery platform.",
    responsibilities: [
      "Developed location-based services and real-time tracking",
      "Built data pipelines for analytics and reporting",
      "Optimized database queries for high-traffic scenarios",
    ],
    achievements: [
      "Implemented real-time tracking for 1000+ concurrent drivers",
      "Built ETL pipeline processing 100k+ daily transactions",
      "Reduced database load by 45% through query optimization",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
  },
  {
    id: "hear-com",
    company: "hear.com",
    title: "Senior Full-Stack Engineer",
    location: "Berlin, DE / Remote",
    startYear: 2023,
    endYear: 2024,
    summary:
      "Developed user-facing applications and backend systems for a consumer platform.",
    description:
      "Focused on scaling systems, improving performance, and ensuring reliability as the platform grew.",
    responsibilities: [
      "Led architecture decisions for system scalability",
      "Owned full-stack feature development end-to-end",
      "Implemented performance monitoring and optimization",
      "Mentored team on best practices and system design",
    ],
    achievements: [
      "Scaled platform to handle 10x traffic growth",
      "Reduced page load time from 4s to 1.2s",
      "Implemented observability framework reducing incident resolution time by 50%",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "GraphQL"],
  },
  {
    id: "nurse-next-door",
    company: "Nurse Next Door",
    title: "Full-Stack Engineer",
    location: "Toronto, ON",
    startYear: 2024,
    endYear: null,
    current: true,
    summary:
      "Building full-stack solutions for a home care platform connecting providers with clients.",
    description:
      "Developing systems that reliably connect care providers with clients, emphasizing data consistency and excellent user experience.",
    responsibilities: [
      "Build features for provider and client mobile applications",
      "Design backend systems for scheduling and matching",
      "Ensure data consistency in complex multi-party workflows",
    ],
    achievements: [
      "Architected new provider onboarding flow reducing setup time by 80%",
      "Built real-time scheduling system handling 5k+ daily bookings",
    ],
    technologies: ["React", "React Native", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
];
