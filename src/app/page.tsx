'use client';
import { motion } from 'framer-motion';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Skills from '@/components/Skills';
export default function Home() {
  return (
    <>
      {/* Hero */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.4 }}
  className="mb-20"
>
        <div>
          <h1 className="text-5xl font-bold mb-4">Suganya Maheswaran</h1>
          <p className="text-2xl text-gray-600 mb-6">Cloud Full-Stack Engineer & Systems Problem Solver</p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            I build software that turns complex, fragmented systems into simple, reliable tools.
          </p>
        </div>
      </motion.section>

      {/* About */}
     <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}
  className="mb-20"
>
        <h2 className="text-3xl font-bold mb-8">About</h2>
        <div className="space-y-6 max-w-3xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            I&apos;m a cloud engineer and systems thinker who&apos;s spent the last several years building tools and infrastructure that simplify complexity. I work best when the problem is fuzzy—when the real challenge isn&apos;t in the code, but in understanding what needs to be solved and why.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I&apos;m most interested in systems that are confusing, slow, or inconsistent. I approach problems by asking what&apos;s actually being asked, rather than building what was requested.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Across my work in government, enterprise systems, and startups, I&apos;ve been placed in situations where the problem wasn&apos;t building something new—it was making something existing easier to understand and use. That&apos;s shaped how I think about engineering: clarity first, systems thinking second, code last.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I focus on reducing unnecessary complexity, creating structure where there&apos;s ambiguity, and building systems that degrade gracefully instead of failing catastrophically. The best solutions are boring and predictable—they work quietly in the background.
          </p>
        </div>
      </motion.section>

      {/* Selected Work */}
     <motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true, amount: 0.2 }}
  className="mb-20"
>
  <h2 className="text-3xl font-bold mb-12">Selected Work</h2>

  <div className="space-y-12 max-w-3xl">

    {/* Project 1 */}
    <div>
      <h3 className="text-2xl font-bold mb-3">Fragments Microservice</h3>

      <p className="text-gray-700 leading-relaxed mb-3">
        Designed and built a microservice architecture to handle fragmented data workflows. The system decouples complex processes into manageable, independently deployable services. Focus was on fault tolerance, clear contracts between services, and reducing cascading failures.
      </p>

      <div className="flex gap-4 text-sm">
        <a
          href="https://github.com/your-repo/fragments"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://your-live-link.com/fragments"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Live
        </a>
      </div>
    </div>

    {/* Project 2 */}
    <div>
      <h3 className="text-2xl font-bold mb-3">SettleCAN</h3>

      <p className="text-gray-700 leading-relaxed mb-3">
        Currently building a rule-based system that transforms fragmented immigration data into clear timelines and actionable tasks. The system codifies complex workflows, handles edge cases gracefully, and reduces uncertainty through explicit logic.
      </p>

      <div className="flex gap-4 text-sm">
        <a
          href="https://github.com/your-repo/settlecan"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://your-live-link.com/settlecan"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Live
        </a>
      </div>
    </div>

    {/* Project 3 */}
    <div>
      <h3 className="text-2xl font-bold mb-3">Sprott ETF Tracker</h3>

      <p className="text-gray-700 leading-relaxed mb-3">
        Built an ETL pipeline that automates financial data extraction, transformation, and visualization. The solution replaces manual reporting with a reliable automated pipeline that runs silently in production.
      </p>

      <div className="flex gap-4 text-sm">
        <a
          href="https://github.com/your-repo/etf-tracker"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://your-live-link.com/etf-tracker"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Live
        </a>
      </div>
    </div>

  </div>
</motion.section>

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Skills */}
     <Skills />

      {/* Footer */}
      <footer className="mt-32 pt-8 border-t border-gray-200">
        <nav className="flex flex-wrap gap-6 text-gray-700 mb-8">
          <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="/blog" className="hover:text-gray-900 transition-colors">Blog</a>
          <a href="/map" className="hover:text-gray-900 transition-colors">Map</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
          <a href="mailto:suganya@example.com" className="hover:text-gray-900 transition-colors">Email</a>
        </nav>
        <p className="text-sm text-gray-500">
          © 2024 Suganya Maheswaran. All rights reserved.
        </p>
      </footer>
    </>
  );
}
