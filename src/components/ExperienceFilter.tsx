'use client';

import { motion } from 'framer-motion';
import { colors } from '@/styles/tokens';

export type FilterType =
  | 'all'
  | 'technical'
  | 'non_technical'
  | 'hybrid'
  | 'customer_service'
  | 'volunteer'
  | 'operations';

interface ExperienceFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Technical', value: 'technical' },
  { label: 'Non-Technical', value: 'non_technical' },
  { label: 'Hybrid', value: 'hybrid' },
  { label: 'Customer Service', value: 'customer_service' },
  { label: 'Volunteer', value: 'volunteer' },
  { label: 'Operations', value: 'operations' },
];

export default function ExperienceFilter({
  activeFilter,
  onFilterChange,
}: ExperienceFilterProps) {
  return (
    <div className="mb-12">

      {/* Label */}
      <p
        className="text-sm font-semibold uppercase tracking-wide mb-4"
        style={{ color: colors.text.muted }}
      >
        Filter by Category
      </p>

      {/* Pills */}
      <div className="flex flex-wrap gap-3">

        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <motion.button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: isActive ? colors.accent : colors.surface,
                color: isActive ? '#FFFFFF' : colors.text.secondary,
                border: `1px solid ${isActive ? colors.accent : colors.border}`,
              }}
            >
              {filter.label}
            </motion.button>
          );
        })}

      </div>
    </div>
  );
}