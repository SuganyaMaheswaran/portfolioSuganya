'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data/experiences';
import TimelineItem from './TimelineItem';
import ExperienceModal from './ExperienceModal';
import type { Experience } from '@/data/experiences';

export default function ExperienceTimeline() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExperienceClick = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-gray-600 max-w-2xl">
            A chronological look at my journey building systems and solving problems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop: Vertical Timeline Line */}
          <div className="hidden md:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2" />
          </div>

          {/* Mobile: Centered Timeline Line */}
          <div className="md:hidden">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300" />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
                isAlternate={index % 2 === 1}
                onClick={() => handleExperienceClick(experience)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
