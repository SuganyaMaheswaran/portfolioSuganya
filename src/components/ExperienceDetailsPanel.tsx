'use client';

import type { Experience } from '@/data/experiences';
import { colors } from '@/styles/tokens';

interface ExperiencePanelProps {
  experience: Experience | null;
}

export default function ExperienceDetailsPanel({ experience }: ExperiencePanelProps) {
  if (!experience) {
    return (
      <div
        className="h-full flex items-center justify-center px-8"
        style={{ color: colors.text.muted }}
      >
        <p>Select an experience to view details</p>
      </div>
    );
  }

  const yearRange = experience.endYear
    ? `${experience.startYear} - ${experience.endYear}`
    : `${experience.startYear} - Present`;

  return (
    <div className="h-full flex flex-col overflow-y-auto px-4 md:px-8 py-4 md:py-6">

      {/* Header */}
      <div
        className="pb-6 border-b"
        style={{ borderColor: colors.border }}
      >
        <div className="flex items-start justify-between mb-5 gap-2">
          <div className="min-w-0 flex-1">
            <h1
              className="text-lg md:text-2xl font-bold"
              style={{ color: colors.text.primary }}
            >
              {experience.company}
            </h1>

            <p
              className="text-base md:text-lg font-semibold mt-2"
              style={{ color: colors.text.secondary }}
            >
              {experience.title}
            </p>
          </div>

          {experience.current && (
            <span
              className="px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-semibold rounded-full flex-shrink-0"
              style={{
                backgroundColor: colors.accent,
                color: "#fff"
              }}
            >
              Current
            </span>
          )}
        </div>

        <div
          className="flex flex-col md:flex-row md:gap-5 gap-2 text-xs md:text-sm"
          style={{ color: colors.text.secondary }}
        >
          <div>
            <span style={{ color: colors.text.primary, fontWeight: 600 }}>
              Location:
            </span>{" "}
            {experience.location || 'Remote'}
          </div>

          <div>
            <span style={{ color: colors.text.primary, fontWeight: 600 }}>
              Period:
            </span>{" "}
            {yearRange}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 py-4 md:py-8 space-y-6 md:space-y-8">

        {/* Description */}
        <section>
          <h2
            className="text-base md:text-lg font-semibold mb-3"
            style={{ color: colors.text.primary }}
          >
            About This Role
          </h2>

          <p
            className="leading-relaxed text-xs md:text-base"
            style={{ color: colors.text.secondary }}
          >
            {experience.description}
          </p>
        </section>

        {/* Responsibilities */}
        <section>
          <h2
            className="text-base md:text-lg font-semibold mb-3"
            style={{ color: colors.text.primary }}
          >
            Responsibilities
          </h2>

          <ul className="space-y-2 md:space-y-3 text-xs md:text-base">
            {experience.responsibilities.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-2 md:gap-3"
                style={{ color: colors.text.secondary }}
              >
                <span className="flex-shrink-0" style={{ color: colors.text.muted }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section>
          <h2
            className="text-base md:text-lg font-semibold mb-3"
            style={{ color: colors.text.primary }}
          >
            Achievements
          </h2>

          <ul className="space-y-2 md:space-y-3 text-xs md:text-base">
            {experience.achievements.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-2 md:gap-3"
                style={{ color: colors.text.secondary }}
              >
                <span className="flex-shrink-0" style={{ color: colors.accent, fontWeight: 700 }}>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        {experience.technologies.length > 0 && (
          <section>
            <h2
              className="text-base md:text-lg font-semibold mb-3"
              style={{ color: colors.text.primary }}
            >
              Technologies
            </h2>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm"
                  style={{
                    backgroundColor: colors.surface,
                    color: colors.text.secondary,
                    border: `1px solid ${colors.border}`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Tags */}
        {experience.tags.length > 0 && (
          <section>
            <h2
              className="text-base md:text-lg font-semibold mb-3"
              style={{ color: colors.text.primary }}
            >
              Categories
            </h2>

            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 md:px-3 py-0.5 md:py-1 rounded text-xs md:text-sm"
                  style={{
                    backgroundColor: colors.bg,
                    border: `1px solid ${colors.border}`,
                    color: colors.text.secondary
                  }}
                >
                  {tag.replace(/_/g, ' ')}
                </span>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
