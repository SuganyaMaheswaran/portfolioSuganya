'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '@/data/experiences';
import TimelineItem from './TimelineItem';
import ExperienceDetailsPanel from './ExperienceDetailsPanel';
import type { Experience } from '@/data/experiences';
import { colors } from '@/styles/tokens';

export default function MobileExpandableCard() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(
    experiences.length > 0 ? experiences[0].id : null
  );

  const selectedExperience = experiences.find((exp) => exp.id === selectedExperienceId) || null;

  const handleExperienceClick = (experience: Experience) => {
    setSelectedExperienceId(experience.id);
  };

  return (
    <div className="h-full flex flex-col bg-white md:hidden overflow-hidden">
      {/* Header Bar */}
      <div
        className="sticky top-0 z-50 px-4 py-3 border-b"
        style={{
          backgroundColor: colors.surface,
          borderColor: colors.border,
        }}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between transition-colors duration-200 active:opacity-70 min-h-[44px]"
          aria-expanded={isExpanded}
          aria-label="Toggle experience card"
        >
          <h2
            className="text-base font-bold"
            style={{ color: colors.text.primary }}
          >
            Professional Experience
          </h2>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl flex-shrink-0"
            style={{ color: colors.text.secondary }}
          >
            ↓
          </motion.div>
        </button>
      </div>

      {/* Content Container */}
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 overflow-hidden flex flex-col"
          >
            <div className="flex-1 overflow-y-auto">
              {/* Experience List */}
              <div className="px-3 py-4 space-y-2">
                {experiences.map((experience) => (
                  <button
                    key={experience.id}
                    onClick={() => handleExperienceClick(experience)}
                    className="w-full text-left p-3 rounded-lg border transition-all duration-200"
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
                  </button>
                ))}
              </div>
            </div>

            {/* Details Panel */}
            {selectedExperience && (
              <div
                className="border-t p-4 max-h-[40vh] overflow-y-auto"
                style={{
                  backgroundColor: colors.bg,
                  borderColor: colors.border,
                }}
              >
                <ExperienceDetailsPanel experience={selectedExperience} />
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex items-center justify-center px-4"
            style={{ backgroundColor: colors.bg }}
          >
            <p
              className="text-center"
              style={{ color: colors.text.secondary }}
            >
              Tap to expand and view my professional journey
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
