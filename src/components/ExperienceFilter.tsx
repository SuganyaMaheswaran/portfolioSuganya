'use client';

import { motion } from 'framer-motion';

export type FilterType = 'all' | 'technical' | 'non_technical' | 'hybrid' | 'customer_service' | 'volunteer' | 'operations';

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
      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
        Filter by Category
      </p>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <motion.button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === filter.value
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
