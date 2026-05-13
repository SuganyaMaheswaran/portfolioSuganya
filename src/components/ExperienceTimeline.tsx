'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '@/data/experiences';
import TimelineItem from './TimelineItem';
import ExperienceDetailsPanel from './ExperienceDetailsPanel';
import ExperienceFilter, { type FilterType } from './ExperienceFilter';
import type { Experience } from '@/data/experiences';
import { colors } from '@/styles/tokens';

export default function ExperienceTimeline() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('technical');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredExperiences = useMemo(() => {
    let filtered: Experience[];

    if (activeFilter === 'all') {
      filtered = experiences;
    } else if (
      activeFilter === 'technical' ||
      activeFilter === 'non_technical' ||
      activeFilter === 'hybrid'
    ) {
      filtered = experiences.filter((exp) => exp.roleCategory === activeFilter);
    } else {
      filtered = experiences.filter((exp) =>
        exp.tags.includes(activeFilter)
      );
    }

    return [...filtered].sort((a, b) => {
      if (a.endYear === null && b.endYear !== null) return -1;
      if (a.endYear !== null && b.endYear === null) return 1;

      if (a.endYear !== null && b.endYear !== null) {
        return b.endYear - a.endYear;
      }

      return b.startYear - a.startYear;
    });
  }, [activeFilter]);

  const defaultSelectedExperience =
    filteredExperiences.length > 0 ? filteredExperiences[0] : null;

  const [selectedExperienceId, setSelectedExperienceId] = useState<
    string | null
  >(defaultSelectedExperience?.id || null);

  const selectedExperience =
    filteredExperiences.find((exp) => exp.id === selectedExperienceId) ||
    defaultSelectedExperience;

  const handleExperienceClick = (experience: Experience) => {
    setSelectedExperienceId(experience.id);
  };

  return (
    <section className="py-12 w-full">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-12"
      >
        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: colors.text.primary }}
        >
          Professional Experience
        </h2>

        <p
          className="max-w-2xl"
          style={{ color: colors.text.secondary }}
        >
          A chronological look at my journey building systems and solving problems.
        </p>
      </motion.div>

      {/* Filter */}
      <ExperienceFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Desktop Layout - Side by Side */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 md:h-[70vh]">

        {/* Timeline */}
        <div
          className="md:col-span-1 h-full overflow-y-auto rounded-xl border"
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.border,
          }}
        >
          {filteredExperiences.length > 0 ? (
            filteredExperiences.map((experience) => (
              <div
                key={experience.id}
                onClick={() => handleExperienceClick(experience)}
                className="border-b cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor:
                    selectedExperienceId === experience.id
                      ? colors.bg
                      : colors.surface,
                  borderColor: colors.border,
                }}
              >
                <TimelineItem
                  experience={experience}
                  index={0}
                  isAlternate={false}
                  onClick={() => handleExperienceClick(experience)}
                />
              </div>
            ))
          ) : (
            <p
              className="text-center py-12 px-4"
              style={{ color: colors.text.muted }}
            >
              No experiences found for this filter.
            </p>
          )}
        </div>

        {/* Details Panel */}
        <div
          className="col-span-2 h-full overflow-y-auto rounded-xl border"
          style={{
            backgroundColor: colors.bg,
            borderColor: colors.border,
          }}
        >
          <ExperienceDetailsPanel experience={selectedExperience} />
        </div>

      </div>

      {/* Mobile Layout - Expandable Cards */}
      <div className="md:hidden space-y-2">
        {filteredExperiences.length > 0 ? (
          filteredExperiences.map((experience) => {
            const yearRange = experience.endYear
              ? `${experience.startYear} - ${experience.endYear}`
              : `${experience.startYear} - Present`;

            return (
              <motion.div
                key={experience.id}
                className="rounded-xl border overflow-hidden"
                style={{
                  backgroundColor: expandedId === experience.id ? colors.bg : '#FFFFFF',
                  borderColor: colors.border,
                }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === experience.id ? null : experience.id)}
                  className="w-full text-left p-4 transition-all duration-200 flex items-start justify-between hover:bg-gray-100"
                  style={{
                    backgroundColor: expandedId === experience.id ? colors.bg : '#FFFFFF',
                  }}
                  onMouseEnter={(e) => {
                    if (expandedId !== experience.id) {
                      e.currentTarget.style.backgroundColor = '#F3F3F3';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (expandedId !== experience.id) {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                    }
                  }}
                >
                  <div className="flex-1">
                    <TimelineItem
                      experience={experience}
                      index={0}
                      isAlternate={false}
                      onClick={() => setExpandedId(expandedId === experience.id ? null : experience.id)}
                    />
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === experience.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-2 text-lg"
                    style={{ color: colors.text.secondary }}
                  >
                    ↓
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedId === experience.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t px-4 py-3 space-y-3"
                      style={{ borderColor: colors.border, backgroundColor: colors.bg }}
                    >
                      {/* Description */}
                      <div>
                        <h3
                          className="text-sm font-semibold mb-2"
                          style={{ color: colors.text.primary }}
                        >
                          About This Role
                        </h3>
                        <p
                          className="text-xs leading-relaxed"
                          style={{ color: colors.text.secondary }}
                        >
                          {experience.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      {experience.achievements.length > 0 && (
                        <div>
                          <h3
                            className="text-sm font-semibold mb-2"
                            style={{ color: colors.text.primary }}
                          >
                            Achievements
                          </h3>
                          <ul className="space-y-1 text-xs">
                            {experience.achievements.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex gap-2"
                                style={{ color: colors.text.secondary }}
                              >
                                <span style={{ color: colors.accent, fontWeight: 700 }}>✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {experience.technologies.length > 0 && (
                        <div>
                          <h3
                            className="text-sm font-semibold mb-2"
                            style={{ color: colors.text.primary }}
                          >
                            Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.slice(0, 4).map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 rounded text-xs"
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
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        ) : (
          <p
            className="text-center py-12 px-4"
            style={{ color: colors.text.muted }}
          >
            No experiences found for this filter.
          </p>
        )}
      </div>
    </section>
  );
}
