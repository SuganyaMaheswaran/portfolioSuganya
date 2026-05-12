'use client';

import type { Experience } from '@/data/experiences';
import { colors } from '@/styles/tokens';

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isAlternate: boolean;
  onClick: () => void;
  isSelected?: boolean;
}

export default function TimelineItem({
  experience,
  onClick,
  isSelected = false,
}: TimelineItemProps) {
  const yearRange = experience.endYear
    ? `${experience.startYear} - ${experience.endYear}`
    : `${experience.startYear} - Present`;

  return (
    <div
      onClick={onClick}
      className="
        p-3 cursor-pointer transition-all duration-150
      "
      style={{
        backgroundColor: isSelected ? colors.bg : colors.surface,
        borderLeft: isSelected
          ? `3px solid ${colors.accent}`
          : '3px solid transparent',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-1">

        <div className="min-w-0 flex-1">
          <h3
            className="text-sm font-bold"
            style={{ color: colors.text.primary }}
          >
            {experience.company}
          </h3>

          <p
            className="text-xs font-medium leading-tight"
            style={{ color: colors.text.secondary }}
          >
            {experience.title}
          </p>
        </div>

        {experience.current && (
          <span
            className="flex-shrink-0 inline-block px-2 py-0.5 text-xs font-semibold rounded-full"
            style={{
              backgroundColor: colors.accent,
              color: "#FFFFFF",
            }}
          >
            Current
          </span>
        )}

      </div>

      {/* Meta */}
      <p
        className="text-xs mb-1"
        style={{ color: colors.text.muted }}
      >
        {yearRange}
      </p>

      {/* Summary */}
      <p
        className="text-xs line-clamp-1"
        style={{ color: colors.text.secondary }}
      >
        {experience.summary}
      </p>
    </div>
  );
}