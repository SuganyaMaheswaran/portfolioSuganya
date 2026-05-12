'use client';

import type { Experience } from '@/data/experiences';

interface ExperiencePanelProps {
  experience: Experience | null;
}

export default function ExperienceDetailsPanel({ experience }: ExperiencePanelProps) {
  if (!experience) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        <p>Select an experience to view details</p>
      </div>
    );
  }

  const yearRange = experience.endYear
    ? `${experience.startYear} - ${experience.endYear}`
    : `${experience.startYear} - Present`;

  return (
    <div className="h-full flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex-shrink-0 pb-6 border-b border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{experience.company}</h1>
            <p className="text-lg font-semibold text-gray-700 mt-2">{experience.title}</p>
          </div>
          {experience.current && (
            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-black rounded">
              Current
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div>
            <span className="font-semibold">Location:</span> {experience.location || 'Remote'}
          </div>
          <div>
            <span className="font-semibold">Period:</span> {yearRange}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 py-6 space-y-6 overflow-y-auto">
        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">About This Role</h2>
          <p className="text-gray-700 leading-relaxed">{experience.description}</p>
        </div>

        {/* Responsibilities */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities</h2>
          <ul className="space-y-2">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h2>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <span className="text-green-600 font-bold mt-1 flex-shrink-0">✓</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        {experience.technologies.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {experience.tags.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded text-sm"
                >
                  {tag.replace(/_/g, ' ')}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
