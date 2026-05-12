'use client';

import { motion } from 'framer-motion';
import type { Experience } from '@/data/experiences';

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isAlternate: boolean;
  onClick: () => void;
  isSelected?: boolean;
}

export default function TimelineItem({
  experience,
  index,
  onClick,
  isSelected = false,
}: TimelineItemProps) {
  const yearRange = experience.endYear
    ? `${experience.startYear} - ${experience.endYear}`
    : `${experience.startYear} - Present`;

  return (
    <div
      onClick={onClick}
      className="p-3 hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold text-gray-900">{experience.company}</h3>
          <p className="text-xs font-medium text-gray-600 leading-tight">{experience.title}</p>
        </div>
        {experience.current && (
          <span className="flex-shrink-0 inline-block px-1.5 py-0.5 text-xs font-semibold text-white bg-black rounded">
            Current
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500 mb-1">{yearRange}</p>
      <p className="text-xs text-gray-700 line-clamp-1">{experience.summary}</p>
    </div>
  );
}
