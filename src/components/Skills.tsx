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
import { colors } from "@/styles/tokens";

const APPLE_BLUE = "#007AFF";

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
    <section className="py-10">

      <h2
        className="text-3xl font-bold mb-6"
        style={{ color: colors.text.primary }}
      >
        Skills
      </h2>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-8 max-w-3xl">

        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="group flex flex-col items-center justify-center"
          >
            {/* Icon */}
            <Icon
              className="
                text-4xl
                transition-all duration-200
                group-hover:scale-110
              "
              style={{
                color: colors.text.muted,
              }}
            />

            {/* Label */}
            <span
              className="
                mt-2
                text-[11px]
                opacity-0
                group-hover:opacity-100
                transition-all duration-200
              "
              style={{
                color: colors.text.secondary,
              }}
            >
              {name}
            </span>

            {/* Hover color override layer */}
            <style jsx>{`
              .group:hover svg {
                color: ${APPLE_BLUE} !important;
              }

              .group:hover span {
                color: ${APPLE_BLUE} !important;
              }
            `}</style>
          </div>
        ))}

      </div>
    </section>
  );
}