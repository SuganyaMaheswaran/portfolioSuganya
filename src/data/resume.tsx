import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Suganya Maheswaran",
  initials: "SM",
  url: "https://google.ca",
  location: "Toronto, ON, CA",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    " Solving human problems thorough technology.",
  summary:
  "I am a front-end web developer based out of the Greater Toronto Area with a background in finance and experience with working at a startup company.  I have always been fascinated with emerging technologies, expanding my skill set, and challenging myself. Web development allows me to marry my passions and experiences together in order to create an intuitive, user-friendly environment. My hope is that my contributions lead to a better and more accessible future for all. When I'm not coding, you can find me getting ragdolled in the dojo, playing boardgames, or on a run.",
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Typescript",
    "Power BI",
    "C++",
    "DAX",
    "SQL",
    "Microsoft Office",
    "Jira",
    "CompTIA A+",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "suganyamaheswaran@gmail.com",
    tel: "+64722895414",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Suganya1990",
        icon: Icons.github,

        navbar: true,
      },
      // LinkedIn: {
      //   name: "LinkedIn",
      //   url: "",
      //   icon: Icons.linkedin,

      //   navbar: true,
      // },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      }
    },
  },

  work: [
    {
      company: "TRAINFO",
      href: "https://trainfo.ca/",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/trainfo.png",
      start: "Sept 2021",
      end: "March 2024",
      description: "Created various Power BI dashboards for users through out the organization. One of those dashboards was the Grade Crossing scorecard, a multi-page interactive and dynamic dashboard for management, sales team, and existing and potential customers to identify priority/non-priority crossings through map visuals, charts, tables, and KPIs"
    },
    {
      company: "Facedrive",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Dispatcher/Adminstrator",
      logoUrl: "/facedrive.jpg",
      start: "March 2019",
      end: "February 2020",
      description:
       "Dispatched and coordinated the movements of vehicles and personnel to optimize efficiency and response times. Communicated with drivers and customers via radio, phone, or computer to provide information and updates on routes, schedules, or emergencies. Also Focused on attracting and converting new users through driver and customer promotions. Responsible for onboarding new drivers and ensuring all documents are up to date..",
    },
    {
      company: "hear.com",
      badges: [],
      href: "https://www.hear.com/",
      location: "Toronto, Canada",
      title: "Medical Sales Consultant",
      logoUrl: "/hearcom.svg",
      start: "May 2016",
      end: "September 2017",
      description:
        "Consulted customers via telephone throughout every step of the process (B 2 C process). During the consultation provided individual solutions based on their hearing reuirments. ",
    },
    {
      company: "Nurse Next Door",
      href: "https://www.nursenextdoor.com/",
      badges: [],
      location: "Toronto, CA",
      title: "Nurse Scheduler",
      logoUrl: "/NurseNextDoorLogo",
      start: "Sept 2014",
      end: "May 2016",
      description:
        "Sets up all nursing work schedules and assigned staff to ensure adequate staffing and replacement at all times following the guidelines within the bargaining units contract as well as thec company's administrative policies",
    },
   
  ],
  education: [
    {
      school: "Seneca College",
      href: "https://www.senecapolytechnic.ca/",
      degree: "Computer Programming Diploma ",
      logoUrl: "/seneca-logo.svg",
      start: "2017",
      end: "2020",
    },
    {
      school: "Toronto Metropolitan University",
      href: "https://www.torontomu.ca/",
      degree: "Bachelor's Accounting (Finished 2nd Year) ",
      logoUrl: "/tmu_logo",
      start: "2010",
      end: "2012",
    },
  ],
  projects: [
    {
      title: "Weather App ",
      href: "https://react-weather-app-suganya1990.vercel.app/",
      dates: "January 2021 - Febuary 2021",
      active: true,
      description:
        "Developed a responsive single page weather App that informs users of the weather condition including temperature, rain, snow, and wind.",
      technologies: [
        "React",
        "REST API",
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Mobile First Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://react-weather-app-suganya1990.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Suganya1990/ReactWeatherApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/WeatherAppDemoView.mp4",
    },
    // {
    //   title: "Grocery Bud",
    //   href: "https://grocery-shopping-list-kohl.vercel.app/",
    //   dates: "April 2020 - March 2020",
    //   active: true,
    //   description:
    //     "Developed a simple app to help you during the trip to the grocery store.",
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "React",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://grocery-shopping-list-kohl.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "",
    // },
  ],
  hackathons: [   {
    title: "Portal Hackathon",
    dates: "October 29, 2016",
    location: "Kingston, Ontario",
    description:
      "Developed an internal widget for uploading assignments using Waterloo's portal app",
    image:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    links: [
      {
        title: "Source",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/UWPortalSDK/crowmark",
      },
    ],
  },],
} as const;
