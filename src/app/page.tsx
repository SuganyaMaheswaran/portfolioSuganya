import { motion } from 'framer-motion';
import ExperienceTimeline from '@/components/ExperienceTimeline';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mb-20">
        <div>
          <h1 className="text-5xl font-bold mb-4">Suganya Maheswaran</h1>
          <p className="text-2xl text-gray-600 mb-6">Cloud Full-Stack Engineer & Systems Problem Solver</p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            I build software that turns complex, fragmented systems into simple, reliable tools.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">About</h2>
        <div className="space-y-6 max-w-3xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a cloud engineer and systems thinker who's spent the last several years building tools and infrastructure that simplify complexity. I work best when the problem is fuzzy—when the real challenge isn't in the code, but in understanding what needs to be solved and why.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I'm most interested in systems that are confusing, slow, or inconsistent. I approach problems by asking what's actually being asked, rather than building what was requested.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Across my work in government, enterprise systems, and startups, I've been placed in situations where the problem wasn't building something new—it was making something existing easier to understand and use. That's shaped how I think about engineering: clarity first, systems thinking second, code last.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I focus on reducing unnecessary complexity, creating structure where there's ambiguity, and building systems that degrade gracefully instead of failing catastrophically. The best solutions are boring and predictable—they work quietly in the background.
          </p>
        </div>
      </section>

      {/* Selected Work */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
        <div className="space-y-12 max-w-3xl">
          <div>
            <h3 className="text-2xl font-bold mb-3">Fragments Microservice</h3>
            <p className="text-gray-700 leading-relaxed">
              Designed and built a microservice architecture to handle fragmented data workflows. The system decouples complex processes into manageable, independently deployable services. Focus was on fault tolerance, clear contracts between services, and reducing cascading failures. This project reinforced that good architecture is about making the system's behavior predictable and failures visible.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">SettleCAN</h3>
            <p className="text-gray-700 leading-relaxed">
              Currently building a rule-based system that transforms fragmented, unstructured immigration data into clear timelines and actionable tasks. The system codifies complex workflows, handles edge cases gracefully, and reduces uncertainty through explicit logic. This is systems thinking at its core—defining what's actually happening, documenting the rules, and building tools that enforce clarity.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Sprott ETF Tracker</h3>
            <p className="text-gray-700 leading-relaxed">
              Built an ETL pipeline that automates financial data extraction, transformation, and visualization. The problem was manual reporting: error-prone, slow, hard to scale. The solution was a reliable, automated pipeline that runs silently. This taught me that infrastructure is invisible—the best systems are the ones you never think about because they just work.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Skills */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          React · Angular · TypeScript · Node.js · SQL · Python · AWS · Docker · Power BI
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-32 pt-8 border-t border-gray-200">
        <nav className="flex flex-wrap gap-6 text-gray-700 mb-8">
          <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="/blog" className="hover:text-gray-900 transition-colors">Blog</a>
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
