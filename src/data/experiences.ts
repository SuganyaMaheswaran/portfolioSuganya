export interface Experience {
  id: string;
  company: string;
  title: string;
  location?: string;
  coordinates?: { lat: number; lng: number };
  startYear: number;
  endYear: number | null;
  current?: boolean;
  volunteer?:boolean;
  summary: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  tags: string[];
  roleCategory: 'technical' | 'non_technical' | 'hybrid';
}

export const experiences: Experience[] = [
  {
    id: "bmo",
    company: "BMO",
    title: "Customer Service Representative",
    location: "Canada",
    coordinates: { lat: 56.1304, lng: -106.3468 },
    startYear: 2013,
    endYear: 2013,
    roleCategory: "non_technical",
    summary: "Customer support in a regulated banking environment.",
    description:
      "Provided assistance for customer banking inquiries and transactions while following compliance procedures.",
    responsibilities: [
      "Handled customer inquiries over phone",
      "Processed account-related requests",
      "Followed banking compliance procedures"
    ],
    achievements: [
      "Maintained consistent service quality standards"
    ],
    technologies: [],
    tags: ["customer_service", "banking", "support"]
  },

  {
    id: "xpo-logistics",
    company: "XPO Logistics",
    title: "Administrative Assistant",
    location: "Canada",
    coordinates: { lat: 56.1304, lng: -106.3468 },
    startYear: 2013,
    endYear: 2015,
    roleCategory: "non_technical",
    summary: "Administrative support for logistics operations.",
    description:
      "Supported internal operations through documentation management and coordination tasks.",
    responsibilities: [
      "Managed internal documentation",
      "Supported logistics coordination between teams",
      "Organized operational records",
      "Responded to incoming calls and emails",
      "Updated and maintained databases"
    ],
    achievements: [
      "Improved organization of documentation workflows"
    ],
    technologies: [],
    tags: ["admin", "logistics", "operations"]
  },

  {
    id: "victorias-secret",
    company: "Victoria's Secret",
    title: "Sales Associate / Cashier",
    location: "Toronto, ON",
    coordinates: { lat: 43.6629, lng: -79.3957 },
    startYear: 2010,
    endYear: 2014,
    roleCategory: "non_technical",
    summary: "Retail sales and customer service in a fast-paced retail environment.",
    description:
      "Supported retail operations including customer service, sales transactions, inventory handling, and loss prevention.",
    responsibilities: [
      "Processed sales transactions through POS system",
      "Assisted customers with product selection and inquiries",
      "Maintained inventory records and stock accuracy",
      "Supported visual merchandising and store presentation",
      "Followed company guidelines for loss prevention"
    ],
    achievements: [
      "Exceeded personal and team sales targets",
      "Maintained accurate register and inventory records"
    ],
    technologies: [],
    tags: ["retail", "sales", "customer_service"]
  },

  {
    id: "nurse-next-door",
    company: "Nurse Next Door",
    title: "Care Service Coordinator",
    location: "Remote",
    coordinates: { lat: 43.6629, lng: -79.3957 },
    startYear: 2015,
    endYear: 2015,
    roleCategory: "non_technical",
    summary: "Scheduling coordination for home care services.",
    description:
      "Coordinated caregiver scheduling and client appointments in a healthcare service environment. Managed remote operations with minimal supervision.",
    responsibilities: [
      "Scheduled caregiver-client appointments",
      "Managed complex scheduling constraints",
      "Handled booking requests and cancellations",
      "Coordinated daily care schedules",
      "Assisted with payroll and billing tasks",
      "Maintained caregiver availability database"
    ],
    achievements: [
      "Maintained consistent scheduling operations",
      "Managed 100+ caregivers in a database system"
    ],
    technologies: [],
    tags: ["scheduling", "healthcare", "coordination", "operations"]
  },

  {
    id: "hear-com",
    company: "hear.com",
    title: "Medical Sales Consultant",
    location: "Remote / Berlin",
    coordinates: { lat: 52.5200, lng: 13.4050 },
    startYear: 2015,
    endYear: 2017,
    current: false,
    roleCategory: "hybrid",
    summary: "Customer consultation for hearing healthcare solutions.",
    description:
      "Consulted with customers to understand hearing needs and recommend suitable solutions. Built long-term customer relationships in the hearing healthcare industry.",
    responsibilities: [
      "Conducted customer consultations via phone",
      "Provided hearing loss education and product explanations",
      "Managed customer follow-up communication",
      "Supported trial periods and onboarding",
      "Kept abreast of hearing aid market advances"
    ],
    achievements: [
      "Built long-term customer relationships",
      "Maintained high customer satisfaction scores"
    ],
    technologies: [],
    tags: ["sales", "consultation", "healthcare", "customer_service"]
  },

  {
    id: "sephora",
    company: "Sephora",
    title: "Cashier & Sales Associate",
    location: "Toronto, ON",
    coordinates: { lat: 43.6629, lng: -79.3957 },
    startYear: 2017,
    endYear: 2019,
    roleCategory: "non_technical",
    summary: "Retail customer service and sales support.",
    description:
      "Supported daily retail operations in a high-traffic beauty retail environment including sales, customer service, and inventory handling.",
    responsibilities: [
      "Processed transactions using POS system",
      "Assisted customers with product selection and recommendations",
      "Managed inventory logistics and stock handling",
      "Maintained store organization and visual merchandising",
      "Provided data-driven product recommendations"
    ],
    achievements: [
      "Recognized for strong customer service performance"
    ],
    technologies: [],
    tags: ["retail", "sales", "customer_service"]
  },

  {
    id: "penguin-pickup",
    company: "PenguinPickUp",
    title: "Operations Lead / Keyholder",
    location: "Toronto, ON",
    coordinates: { lat: 43.6629, lng: -79.3957 },
    startYear: 2018,
    endYear: 2024,
    roleCategory: "non_technical",
    summary: "Logistics operations and customer coordination.",
    description:
      "Managed day-to-day pickup operations, customer issues, and workflow coordination. Progressed to leadership role supervising staff and managing complex logistics with major carriers.",
    responsibilities: [
      "Managed daily operations and opening/closing procedures",
      "Coordinated pickup and delivery workflows",
      "Coordinated logistics with major carriers (UPS, DHL, IKEA)",
      "Handled customer escalations and complex issues",
      "Supervised and trained new team members",
      "Maintained inventory accuracy and replenishment",
      "Resolved inbound/outbound shipment discrepancies"
    ],
    achievements: [
      "Improved operational consistency and service flow",
      "Maintained 95%+ inventory accuracy",
      "Provided onboarding training for new team members"
    ],
    technologies: [],
    tags: ["operations", "logistics", "coordination", "leadership"]
  },
{
  id: "facedrive",
  company: "Facedrive",
  title: "Support Analyst / Operations Support Administrator",
  location: "Toronto, ON",
  coordinates: { lat: 43.6629, lng: -79.3957 },
  startYear: 2019,
  endYear: 2020,
  roleCategory: "technical",
  summary: "Operations and technical support for a mobility platform.",
  description:
    "Provided operational and technical support for a ride-sharing and delivery platform, handling customer and driver issues, managing data workflows in Excel, and supporting platform testing and documentation processes.",

  responsibilities: [
    "Supported customer and driver inquiries across platform services",
    "Built and maintained Excel-based databases for driver documentation and operational tracking",
    "Automated follow-ups for expired or incomplete driver documentation using Excel workflows",
    "Tested and validated new platform features (V2) in real-world field conditions",
    "Diagnosed application issues and documented root causes for engineering teams",
    "Created and maintained documentation for recurring system and user issues",
    "Managed driver onboarding, verification, and compliance workflows"
  ],

  achievements: [
    "Improved driver compliance tracking by organizing and streamlining documentation workflows in Excel",
    "Identified recurring platform issues through support ticket analysis and reported findings to product and engineering teams",
    "Contributed to validation of new platform features through field testing during V2 rollout"
  ],

  technologies: [
    "Excel (advanced data management, reporting, automation workflows)",
    "Internal support tools"
  ],

  tags: ["operations", "support", "data_management", "automation", "product_testing"]
},
 {
  id: "trainfo",
  company: "TRAINFO",
  title: "Front End Developer",
  location: "Remote",
  coordinates: { lat: 43.6629, lng: -79.3957 },
  startYear: 2021,
  endYear: 2024,
  roleCategory: "technical",
  summary: "Frontend development for transportation analytics dashboards.",
  description:
    "Developed and maintained Angular-based transportation analytics dashboards, focusing on reusable UI architecture, data visualization, and reporting automation. Contributed to production-grade analytics tools including the Grade Crossing Scorecard dashboard.",

  responsibilities: [
    "Developed and maintained Angular-based dashboard applications",
    "Built 20+ reusable UI components for scalable frontend architecture",
    "Delivered production features for transportation analytics tools",
    "Designed and implemented the Grade Crossing Scorecard dashboard",
    "Worked with Power BI to support analytics and reporting workflows",
    "Automated reporting processes by consolidating manual data reports"
  ],

  achievements: [
    "Reduced manual reporting effort by consolidating 40+ reports into 4 Power BI dashboards",
    "Delivered 14+ production features supporting analytics and operational decision-making",
    "Built reusable component system used across multiple dashboard features",
    "Designed and shipped Grade Crossing Scorecard dashboard for transportation analytics"
  ],

  technologies: [
    "Angular",
    "TypeScript",
    "Power BI",
    "HTML",
    "CSS"
  ],

  tags: ["frontend", "development", "dashboards", "analytics", "data_visualization"]
},
 {
  id: "statistics-canada",
  company: "Statistics Canada",
  title: "Census Enumerator",
  location: "Toronto, ON",
  coordinates: { lat: 43.6629, lng: -79.3957 },
  startYear: 2026,
  endYear: 2026,
  current: false,
  roleCategory: "non_technical",
  summary: "Field data collection and census survey support for national population census operations.",
  description:
    "Conducted in-person and follow-up census data collection for Statistics Canada using secure digital systems, ensuring accuracy, confidentiality, and compliance with federal privacy regulations.",

  responsibilities: [
    "Conducted door-to-door and follow-up visits to collect census data",
    "Assisted residents in completing digital and paper census questionnaires",
    "Used secure government systems to record and submit collected responses",
    "Verified household and demographic information for accuracy",
    "Ensured strict adherence to federal privacy and confidentiality protocols",
    "Resolved resident questions regarding census participation and process"
  ],

  achievements: [
    "Maintained full compliance with federal privacy and data protection requirements",
    "Completed high-volume resident outreach while maintaining accurate data submission"
  ],

  technologies: [
    "Secure government census data collection system",
    "Handheld digital data entry device",
    "Encrypted reporting and submission tools"
  ],

  tags: ["operations", "data_collection", "compliance", "field_work"]
},
  // {
  //   id: "training-software-dev",
  //   company: "Self-Directed Learning",
  //   title: "Software Development Training",
  //   location: "Canada",
  //   coordinates: { lat: 43.6532, lng: -79.3832 },
  //   startYear: 2025,
  //   endYear: 2026,
  //   current: true,
  //   roleCategory: "technical",
  //   summary: "Self-learning full-stack web development.",
  //   description:
  //     "Built projects and learned modern web development through hands-on practice and real-world application development.",
  //   responsibilities: [
  //     "Built React and Next.js applications",
  //     "Learned backend API development with Node.js",
  //     "Worked with databases including PostgreSQL and MongoDB",
  //     "Practiced debugging and system design",
  //     "Deployed applications to production"
  //   ],
  //   achievements: [
  //     "Built multiple portfolio projects"
  //   ],
  //   technologies: [
  //     "React",
  //     "Next.js",
  //     "TypeScript",
  //     "Node.js",
  //     "PostgreSQL",
  //     "MongoDB",
  //     "Git"
  //   ],
  //   tags: ["training", "full_stack", "projects", "self_learning"]
  // },

 {
  id: "solution-community",
  company: "Solution Community",
  title: "Full Stack Developer",
  location: "Remote",
  coordinates: { lat: 43.6629, lng: -79.3957 },
  startYear: 2024,
  endYear: null,
  current: true,
  volunteer: true,
  roleCategory: "technical",
  summary: "Full-stack development for a community-driven web platform.",
  description:
    "Contributing to the development and maintenance of a community-based web application using React, Node.js, PostgreSQL, and Google Cloud, with a focus on feature development, system reliability, and production support.",

  responsibilities: [
    "Developed and maintained frontend features using React and TypeScript",
    "Built and integrated RESTful APIs using Node.js and PostgreSQL",
    "Debugged production issues using Google Cloud logging and monitoring tools",
    "Investigated system errors and performance issues through log analysis",
    "Supported deployment workflows and environment troubleshooting",
    "Collaborated on improving application stability and user experience"
  ],

  achievements: [
    "Resolved production issues by analyzing logs and identifying backend and frontend failure points",
    "Improved system reliability through structured debugging and monitoring practices"
  ],

  technologies: [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Google Cloud Platform (Logging, Monitoring)",
    "Firebase"
  ],

  tags: ["volunteer", "development", "full_stack", "cloud", "debugging"]
},

  {
    id: "seniors-tech-support",
    company: "Seniors Digital Literacy Support",
    title: "Volunteer Tech Support",
    location: "Toronto, ON",
    coordinates: { lat: 43.6629, lng: -79.3957 },
    startYear: 2018,
    endYear: null,
    current: true,
    volunteer: true,
   roleCategory: "technical",
    summary: "Helping seniors with basic digital skills.",
    description:
      "Served as an informal technology support resource for senior Tamil residents in my mother’s building, providing on-demand assistance with smartphones, connectivity issues, and online services such as banking. Regularly resolved issues end-to-end, including contacting customer support and reconfiguring devices when needed.",
    responsibilities: [
      "Set up and configured home internet, Wi-Fi networks, IPTV systems, and landline connections",
      "Resolved connectivity issues, including internet outages and device pairing problems",
      "Provided hands-on troubleshooting for smartphones, apps, and online services",
      "Communicated with customer service and technical support agents to resolve complex issues",
      "Guided seniors through basic digital tasks and device usage"
    ],
    achievements: [
      "Restored internet and device connectivity in recurring outage situations through structured troubleshooting",
      "Acted as the primary technical liaison between residents and service providers",
      "Improved digital accessibility for seniors through consistent, hands-on support"
    ],
technologies: [
  "Smartphones (iOS, Android)",
  "Home Wi-Fi / Networking",
  "IPTV / Digital TV systems",
  "VoIP / Landline systems",
  "Internet service provider portals",
  "Customer support systems (phone/chat troubleshooting)",
  "Online banking platforms"
],
    tags: ["volunteer", "support", "education", "customer_service"]
  }
];
