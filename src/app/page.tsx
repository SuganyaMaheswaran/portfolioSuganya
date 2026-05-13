'use client';

import { motion } from 'framer-motion';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Skills from '@/components/Skills';
import { colors } from '@/styles/tokens';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.4 }}
  className="mb-28 md:mb-36"
>

  {/* Identity */}
  <div className="mt-4 mb-12 pb-4 border-b" style={{ borderColor: colors.border }}>
    <h1
      className="text-6xl md:text-7xl font-bold tracking-tight mb-6"
      style={{ color: colors.text.primary }}
    >
      Suganya Maheswaran
    </h1>

    <p
      className="text-2xl md:text-3xl mb-6"
      style={{ color: colors.accent }}
    >
      Cloud Full-Stack Engineer & Systems Problem Solver
    </p>

    <p className="text-base md:text-lg" style={{ color: "#6B7280" }}>
      Government • Enterprise • Startup systems
    </p>
  </div>

  {/* Core statement */}
  <div className="max-w-2xl space-y-4 mb-10">
    <p
      className="text-lg leading-relaxed"
      style={{ color: colors.text.secondary }}
    >
      I build software that turns complex, fragmented systems into simple, reliable tools.
    </p>

    <p
      className="text-lg leading-relaxed"
      style={{ color: colors.text.secondary }}
    >
      I focus on reducing ambiguity, stabilizing systems, and making technical complexity invisible to users.
    </p>
  </div>

 <div className="flex items-center justify-center mt-8">

    <div className="flex items-center gap-4">

   <a
  href="#work"
  className="
    px-5 py-2 rounded-full
    border border-[#0A84FF]
    text-[#0A84FF]
    transition-all duration-200
    hover:bg-[#0A84FF]
    hover:text-white
  "
>
  View Work
</a>

    <a
  href="#experience"
  className="px-5 py-2 rounded-full border transition-colors duration-200"
  style={{
    borderColor: "#0A84FF",
    color: "#0A84FF",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#0A84FF";
    e.currentTarget.style.color = "#FFFFFF";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "#0A84FF";
  }}
>
  View Experience
</a>


  </div>
</div>
</motion.section>
{/* About */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}
  className="mb-28 md:mb-36"
>
  <h2 className="text-3xl font-bold mb-8" style={{ color: colors.text.primary }}>
    About
  </h2>

  <div className="space-y-6 max-w-3xl">
    {[
      "Thanks for stopping by! I’m a Full Stack Developer on my way to becoming a Cloud Solutions Architect. I’m a resilient individual motivated to build meaningful things, continuously learn, and explore the world through both technology and human connection.",
      
      "In my early 20s, I explored different paths — from accounting (which wasn’t the right fit), to medical sales, and various roles in between — before ultimately finding my way into programming. These experiences across different industries, combined with my education, have made me a stronger developer. I bring user experience insight, workflow understanding, industry knowledge, and strong people skills into my work, which helps me approach problems in a more well-rounded way.",

      "I’m a generalist at heart with a strong understanding of end-to-end solutions. After completing an intensive 14-week cloud engineering course, I developed a deep interest in building on the cloud and working with Infrastructure as Code.",

      "What drives me most is root cause analysis. I enjoy solving problems that seem unsolvable and I love those moments when a solution suddenly clicks while I’m going about my day. That feeling of finally getting something to work is one of my favorite parts of technology.",

      "Another aspect I enjoy is building exactly what someone needs and seeing them use it successfully. I value the full lifecycle — from understanding the problem, to designing and building the solution, through to deployment and maintenance.",

      "I bring this mindset into every team I join and aim to be a reliable and impactful contributor. I’m especially drawn to new industries and have a strong interest in the energy sector, particularly nuclear energy, where I hope to apply my skills in the future."
    ].map((text, i) => (
      <p
        key={i}
        className="text-lg leading-relaxed"
        style={{ color: colors.text.secondary }}
      >
        {text}
      </p>
    ))}
  </div>
</motion.section>
      {/* Selected Work */}
      <motion.section
       id="work"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-28 md:mb-36"
      >
        <h2 className="text-3xl font-bold mb-12" style={{ color: colors.text.primary }}>
          Selected Work
        </h2>

        <div className="space-y-12 max-w-3xl">

          {/* Project 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: colors.text.primary }}>
              Fragments Microservice
            </h3>

            <p className="mb-3 leading-relaxed" style={{ color: colors.text.secondary }}>
              Designed and built a microservice architecture to handle fragmented data workflows. Focused on fault tolerance, clear service contracts, and reducing cascading failures.
            </p>

            <a
              href="https://github.com/SuganyaMaheswaran/fragments"
              target="_blank"
              className="text-sm hover:underline"
              style={{ color: colors.accent }}
            >
              GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: colors.text.primary }}>
              SettleCAN (In Progress)
            </h3>

            <p className="mb-3 leading-relaxed" style={{ color: colors.text.secondary }}>
              Building a rule-based system that transforms fragmented immigration data into structured timelines and actionable tasks.
            </p>
          </div>

          {/* Project 3 */}
          <div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: colors.text.primary }}>
              Sprott ETF Tracker
            </h3>

            <p className="mb-3 leading-relaxed" style={{ color: colors.text.secondary }}>
              Built an ETL pipeline for automated financial data extraction and transformation, replacing manual reporting with a reliable system.
            </p>

            <a
              href="https://github.com/SuganyaMaheswaran/etf-extractor-etl-dashboard"
              target="_blank"
              className="text-sm hover:underline"
              style={{ color: colors.accent }}
            >
              GitHub
            </a>
          </div>

        </div>
      </motion.section>

      {/* Experience */}
      <ExperienceTimeline />

      {/* Skills */}
      <Skills />

      {/* Footer */}
      <footer
        className="mt-32 pt-8 border-t"
        style={{ borderColor: colors.border }}
      >
        <nav className="flex flex-wrap gap-6 mb-8">
          {[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Map", href: "/map" },
            { label: "GitHub", href: "https://github.com" },
            { label: "Email", href: "mailto:suganya@example.com" }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:opacity-80"
              style={{ color: colors.text.secondary }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-sm" style={{ color: colors.text.muted }}>
          © 2024 Suganya Maheswaran. All rights reserved.
        </p>
      </footer>
    </>
  );
}
