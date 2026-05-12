'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data/experiences';
import TimelineItem from './TimelineItem';
import ExperienceDetailsPanel from './ExperienceDetailsPanel';
import ExperienceFilter, { type FilterType } from './ExperienceFilter';
import type { Experience } from '@/data/experiences';
import { colors } from '@/styles/tokens';

export default function ExperienceTimeline() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('technical');

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

      {/* Layout */}
      <div className="grid md:grid-cols-3 gap-8 h-[70vh]">

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
          className="md:col-span-2 h-full overflow-y-auto rounded-xl border"
          style={{
            backgroundColor: colors.bg,
            borderColor: colors.border,
          }}
        >
          <ExperienceDetailsPanel experience={selectedExperience} />
        </div>

      </div>
    </section>
  );
}