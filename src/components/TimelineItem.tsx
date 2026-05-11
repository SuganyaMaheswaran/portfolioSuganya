'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Experience } from '@/data/experiences';

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isAlternate: boolean;
  onClick: () => void;
}

export default function TimelineItem({
  experience,
  index,
  isAlternate,
  onClick,
}: TimelineItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const yearRange = experience.endYear
    ? `${experience.startYear} - ${experience.endYear}`
    : `${experience.startYear} - Present`;

  return (
    <div className="relative">
      {/* Desktop: Alternating layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-center">
        {/* Left side (alternates) */}
        <motion.div
          initial={{ opacity: 0, x: isAlternate ? -40 : 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className={isAlternate ? '' : 'invisible'}
        >
          <TimelineCard
            experience={experience}
            yearRange={yearRange}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            onClick={onClick}
          />
        </motion.div>

        {/* Center dot */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className={`w-4 h-4 rounded-full border-4 border-white z-10 ${
              experience.current ? 'bg-black animate-pulse-glow' : 'bg-gray-400'
            }`}
          />
        </div>

        {/* Right side (alternates) */}
        <motion.div
          initial={{ opacity: 0, x: isAlternate ? 0 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className={!isAlternate ? '' : 'invisible'}
        >
          <TimelineCard
            experience={experience}
            yearRange={yearRange}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            onClick={onClick}
          />
        </motion.div>
      </div>

      {/* Mobile: Single column centered */}
      <div className="md:hidden pl-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="absolute left-0 top-2 w-12 flex justify-center"
        >
          <div
            className={`w-3 h-3 rounded-full border-4 border-white ${
              experience.current ? 'bg-black animate-pulse-glow' : 'bg-gray-400'
            }`}
          />
        </motion.div>

        <TimelineCard
          experience={experience}
          yearRange={yearRange}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

interface TimelineCardProps {
  experience: Experience;
  yearRange: string;
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
  onClick: () => void;
}

function TimelineCard({
  experience,
  yearRange,
  isHovered,
  setIsHovered,
  onClick,
}: TimelineCardProps) {
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <motion.div
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-400 hover:shadow-lg transition-all duration-200"
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{experience.company}</h3>
            <p className="text-sm font-medium text-gray-600">{experience.title}</p>
          </div>
          {experience.current && (
            <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-black rounded">
              Current
            </span>
          )}
        </div>

        <p className="text-xs text-gray-500 mb-3">{yearRange}</p>
        <p className="text-sm text-gray-700 mb-4">{experience.summary}</p>

        {/* Hover preview */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-gray-200 space-y-2">
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase">Key Achievements</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                {experience.achievements.slice(0, 2).map((achievement, idx) => (
                  <li key={idx}>• {achievement}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase">Tech Stack</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {experience.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-xs text-gray-500 mt-4 group-hover:text-gray-700 transition-colors">
          Click for details →
        </p>
      </motion.div>
    </motion.div>
  );
}
