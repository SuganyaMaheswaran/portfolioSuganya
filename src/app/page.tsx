export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <h1>Suganya Maheswaran</h1>
        <p className="subtitle">Cloud Full-Stack Engineer & Systems Problem Solver</p>
        <p className="lead">
          I build software that turns complex, fragmented systems into simple, reliable tools.
        </p>
      </section>

      {/* About */}
      <section className="about">
        <p>
          I'm most interested in systems that are confusing, slow, or inconsistent. I approach problems by asking what's actually being asked, rather than building what was requested.
        </p>

        <p>
          Across my work in government, enterprise systems, and startups, I've been placed in situations where the problem wasn't building something new—it was making something existing easier to understand and use. That's shaped how I think about engineering: clarity first, systems thinking second, code last.
        </p>

        <p>
          I focus on reducing unnecessary complexity, creating structure where there's ambiguity, and building systems that degrade gracefully instead of failing catastrophically. The best solutions are boring and predictable—they work quietly in the background.
        </p>
      </section>

      {/* Selected Work */}
      <section className="projects">
        <h2>Selected Work</h2>

        <div className="project">
          <h3>TRAINFO</h3>
          <p>
            Built dashboard and reporting systems for operational intelligence. The core challenge wasn't building dashboards—it was making fragmented, inconsistent data usable for decision-making. I simplified reporting structures, improved frontend reliability, and created workflows that reduced cognitive load for analysts. The project taught me that good systems are invisible: users don't think about the tool, they think about the decision.
          </p>
        </div>

        <div className="project">
          <h3>SettleCAN</h3>
          <p>
            Created a rule-based system that transforms fragmented, unstructured immigration data into clear timelines and actionable tasks. The system codifies complex workflows, handles edge cases gracefully, and reduces uncertainty through explicit logic. This was systems thinking at its core—defining what's actually happening, documenting the rules, and building tools that enforce clarity. The impact was measurable: reduced processing time and fewer errors.
          </p>
        </div>

        <div className="project">
          <h3>Sprott ETF Tracker</h3>
          <p>
            Built an ETL pipeline that automates financial data extraction, transformation, and visualization. The problem was manual reporting: error-prone, slow, hard to scale. The solution was a reliable, automated pipeline that runs silently. This taught me that infrastructure is invisible—the best systems are the ones you never think about because they just work.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="experience">
        <h2>Experience</h2>
        <p>
          My experience spans government systems (Statistics Canada), enterprise dashboards and data workflows (TRAINFO, hear.com), and systems engineering. Across all of them, the pattern is consistent: systems become valuable when they reduce cognitive load, are reliable, and communicate clearly. I've worked on scaling systems, reducing technical debt, and building teams that care about the same things.
        </p>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Skills</h2>
        <p>
          React · Angular · TypeScript · Node.js · SQL · Python · AWS · Docker · Power BI
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:suganya@example.com">Email</a>
      </footer>
    </main>
  );
}
