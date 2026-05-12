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
        <h1 className="text-5xl font-bold mb-4" style={{ color: colors.text.primary }}>
          Suganya Maheswaran
        </h1>

        <p className="text-2xl mb-6" style={{ color: colors.text.secondary }}>
          Cloud Full-Stack Engineer & Systems Problem Solver
        </p>

        <p className="text-lg max-w-2xl leading-relaxed" style={{ color: colors.text.secondary }}>
          I build software that turns complex, fragmented systems into simple, reliable tools.
        </p>
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
            "I'm a cloud engineer and systems thinker who builds tools that simplify complexity. I work best when the problem is fuzzy—understanding what needs to be solved matters more than the code itself.",
            "I'm most interested in systems that are confusing, slow, or inconsistent. I focus on what is actually being asked rather than what is requested.",
            "Across government, enterprise systems, and startups, I've often worked on making existing systems easier to understand rather than building something new.",
            "I focus on reducing unnecessary complexity, creating structure in ambiguity, and building systems that fail gracefully instead of catastrophically."
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