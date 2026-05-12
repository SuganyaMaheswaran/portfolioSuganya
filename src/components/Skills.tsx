'use client';

import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiGithub,
  SiFirebase,
  SiGooglecloud,
  SiDocker
} from "react-icons/si";

import {
  FaAws,
  FaCloud,
  FaTerminal,
  FaUniversalAccess,
  FaBug
} from "react-icons/fa";

import { BsBarChartFill } from "react-icons/bs";

const skills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "SASS", icon: SiSass },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },

  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },

  { name: "AWS", icon: FaAws },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Azure", icon: FaCloud },

  { name: "Docker", icon: SiDocker },
  { name: "Firebase", icon: SiFirebase },

  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },

  { name: "Debugging", icon: FaBug },
  { name: "Command Line", icon: FaTerminal },
  { name: "Data Viz", icon: BsBarChartFill },
  { name: "Accessibility", icon: FaUniversalAccess }
];

export default function Skills() {
  return (
    <section className="py-6">
      <h2 className="text-3xl font-bold mb-5">Skills</h2>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-3 max-w-3xl">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="
              group
              aspect-square
              flex flex-col items-center justify-center
              cursor-pointer
            "
          >
            {/* Icon */}
            <Icon
              className="
                text-4xl
                text-gray-400
                grayscale
                transition-all
                duration-200
                group-hover:grayscale-0
                group-hover:text-gray-800
                group-hover:scale-110
              "
            />

            {/* Label (8px spacing) */}
            <span
              className="
                mt-2
                text-[11px]
                text-gray-500
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-200
              "
              style={{ marginTop: "8px" }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}