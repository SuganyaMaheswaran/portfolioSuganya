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

import { FaAws, FaTerminal, FaUniversalAccess, FaBug } from "react-icons/fa";
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
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-3xl">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="
                group
                aspect-square
                flex items-center justify-center
                relative
                cursor-pointer
              "
            >
              {/* Icon */}
              <Icon
                className="
                  text-2xl
                  text-gray-400
                  grayscale
                  group-hover:grayscale-0
                  group-hover:text-gray-800
                  group-hover:scale-110
                  transition-all
                  duration-300
                "
              />

              {/* Tooltip */}
              <div
                className="
                  absolute -bottom-2
                  text-[10px] tracking-wide
                  text-gray-500
                  opacity-0
                  translate-y-1
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                "
              >
                {skill.name}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}