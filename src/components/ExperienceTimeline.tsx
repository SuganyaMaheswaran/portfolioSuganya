'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data/experiences';
import TimelineItem from './TimelineItem';
import ExperienceDetailsPanel from './ExperienceDetailsPanel';
import ExperienceFilter, { type FilterType } from './ExperienceFilter';
import type { Experience } from '@/data/experiences';

export default function ExperienceTimeline() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredExperiences = useMemo(() => {
    // Filter experiences based on active filter
    let filtered: Experience[];

    if (activeFilter === 'all') {
      filtered = experiences;
    } else if (activeFilter === 'technical' || activeFilter === 'non_technical' || activeFilter === 'hybrid') {
      filtered = experiences.filter((exp) => exp.roleCategory === activeFilter);
    } else {
      filtered = experiences.filter((exp) => exp.tags.includes(activeFilter));
    }

    // Sort in reverse chronological order (most recent first)
    return [...filtered].sort((a, b) => {
      // Current roles (endYear is null) come first
      if (a.endYear === null && b.endYear !== null) return -1;
      if (a.endYear !== null && b.endYear === null) return 1;

      // Both are current or both have endYear - sort by endYear descending
      if (a.endYear !== null && b.endYear !== null) {
        return b.endYear - a.endYear;
      }

      // Both are current - sort by startYear descending
      return b.startYear - a.startYear;
    });
  }, [activeFilter]);

  // Set default selected experience to the most recent one
  const defaultSelectedExperience = filteredExperiences.length > 0 ? filteredExperiences[0] : null;
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(
    defaultSelectedExperience?.id || null
  );

  const selectedExperience = filteredExperiences.find(
    (exp) => exp.id === selectedExperienceId
  ) || defaultSelectedExperience;

  const handleExperienceClick = (experience: Experience) => {
    setSelectedExperienceId(experience.id);
  };

  return (
    <section className="py-20 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
        <p className="text-gray-600 max-w-2xl">
          A chronological look at my journey building systems and solving problems.
        </p>
      </motion.div>

      {/* Filter */}
      <ExperienceFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Two-Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 h-[70vh]">
        {/* Left Column: Timeline - Compact Scrollable */}
        <div className="md:col-span-1 bg-gray-50 border border-gray-200 rounded-lg overflow-y-auto">
          <div>
            {filteredExperiences.length > 0 ? (
              filteredExperiences.map((experience) => (
                <div
                  key={experience.id}
                  onClick={() => handleExperienceClick(experience)}
                  className={`border-b border-gray-200 last:border-b-0 cursor-pointer transition-all duration-200 ${
                    selectedExperienceId === experience.id
                      ? 'bg-white'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
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
              <p className="text-gray-500 text-center py-12 px-4">No experiences found for this filter.</p>
            )}
          </div>
        </div>

        {/* Right Column: Details Panel */}
        <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg p-8 overflow-y-auto">
          <ExperienceDetailsPanel experience={selectedExperience} />
        </div>
      </div>
    </section>
  );
}
