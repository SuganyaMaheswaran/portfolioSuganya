'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Experience } from '@/data/experiences';
import { colors } from '@/styles/tokens';

interface ExperienceModalProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ExperienceModal({
  experience,
  isOpen,
  onClose,
}: ExperienceModalProps) {
  if (!experience) return null;

  const yearRange = experience.endYear
    ? `${experience.startYear} - ${experience.endYear}`
    : `${experience.startYear} - Present`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Apple-style soft blur) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{
              backgroundColor: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(6px)',
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-1/2 left-1/2 ... overflow-y-auto rounded-2xl z-50 shadow-2xl p-1"
            style={{
              backgroundColor: colors.bg,
              border: `1px solid ${colors.border}`,
            }}
          >

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl"
              style={{ color: colors.text.muted }}
            >
              ×
            </button>

            <div className="p-6 md:p-8 space-y-10">

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">

                  <div>
                    <h1
                      className="text-3xl font-bold"
                      style={{ color: colors.text.primary }}
                    >
                      {experience.company}
                    </h1>

                    <p
                      className="text-xl font-semibold mt-1"
                      style={{ color: colors.text.secondary }}
                    >
                      {experience.title}
                    </p>
                  </div>

                  {experience.current && (
                    <span
                      className="px-3 py-1 text-sm font-semibold rounded-full"
                      style={{
                        backgroundColor: colors.accent,
                        color: '#FFFFFF',
                      }}
                    >
                      Current Role
                    </span>
                  )}

                </div>

                <div
                  className="flex flex-wrap gap-4 text-sm"
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

              {/* Sections */}
              <div className="space-y-8">

                {/* Description */}
                <div>
                  <h2
                    className="text-lg font-semibold mb-3"
                    style={{ color: colors.text.primary }}
                  >
                    About This Role
                  </h2>

                  <p
                    className="leading-relaxed"
                    style={{ color: colors.text.secondary }}
                  >
                    {experience.description}
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h2
                    className="text-lg font-semibold mb-3"
                    style={{ color: colors.text.primary }}
                  >
                    Responsibilities
                  </h2>

                  <ul className="space-y-2">
                    {experience.responsibilities.map((r, i) => (
                      <li
                        key={i}
                        className="flex gap-3"
                        style={{ color: colors.text.secondary }}
                      >
                        <span style={{ color: colors.text.muted }}>•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h2
                    className="text-lg font-semibold mb-3"
                    style={{ color: colors.text.primary }}
                  >
                    Achievements
                  </h2>

                  <ul className="space-y-2">
                    {experience.achievements.map((a, i) => (
                      <li
                        key={i}
                        className="flex gap-3"
                        style={{ color: colors.text.secondary }}
                      >
                        <span style={{ color: colors.accent, fontWeight: 700 }}>
                          ✓
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h2
                    className="text-lg font-semibold mb-3"
                    style={{ color: colors.text.primary }}
                  >
                    Technologies
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm border"
                        style={{
                          backgroundColor: colors.surface,
                          color: colors.text.secondary,
                          borderColor: colors.border,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}