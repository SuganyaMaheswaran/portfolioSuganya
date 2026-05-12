'use client';

import { useState, useMemo } from 'react';
import { experiences } from '@/data/experiences';
import type { Experience } from '@/data/experiences';

export default function MapExplorer() {
  const [selectedPin, setSelectedPin] = useState<Experience | null>(null);

  const withCoords = useMemo(
    () => experiences.filter((exp) => exp.coordinates),
    []
  );

  if (withCoords.length === 0) {
    return (
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-4">Exploration Map</h2>
        <p className="text-gray-600">No location data available.</p>
      </section>
    );
  }

  const latitudes = withCoords.map((exp) => exp.coordinates!.lat);
  const longitudes = withCoords.map((exp) => exp.coordinates!.lng);

  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);

  const lngRange = maxLng - minLng || 1;
  const latRange = maxLat - minLat || 1;

  return (
    <section className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Exploration Map</h2>
        <p className="text-gray-600 max-w-2xl">
          Click on locations to explore my professional journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* MAP */}
        <div className="relative w-full h-[500px] rounded-lg border border-gray-300 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Pins */}
          <div className="absolute inset-0 z-10">
            {withCoords.map((experience) => {
              const { lat, lng } = experience.coordinates!;
              const xPercent = ((lng - minLng) / lngRange) * 100;
              const yPercent = ((maxLat - lat) / latRange) * 100;
              const isSelected = selectedPin?.id === experience.id;

              return (
                <div
                  key={experience.id}
                  className="absolute group"
                  style={{
                    left: `${xPercent}%`,
                    top: `${yPercent}%`,
                    zIndex: isSelected ? 20 : 10,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <button
                    onClick={() => setSelectedPin(experience)}
                    className={`w-8 h-8 rounded-full transition-all transform cursor-pointer flex items-center justify-center font-bold text-white text-xs ${
                      isSelected
                        ? 'bg-red-600 ring-4 ring-red-300 scale-150 shadow-xl'
                        : 'bg-blue-600 ring-2 ring-blue-400 shadow-lg hover:scale-125 hover:bg-blue-700'
                    }`}
                    title={`${experience.company} - ${experience.title}`}
                    aria-label={experience.company}
                  >
                    ●
                  </button>

                  {/* Tooltip on hover */}
                  <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                    {experience.company}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="absolute bottom-3 left-3 bg-white border border-gray-300 rounded p-2 text-xs z-20">
            <p className="font-semibold mb-1">Legend</p>
            <p>🔵 Blue = Experience</p>
            <p>🔴 Red = Selected</p>
          </div>
        </div>

        {/* DETAILS PANEL */}
        <div className="flex flex-col">
          {selectedPin ? (
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-full overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedPin.company}
                  </h3>
                  <p className="text-lg font-semibold text-gray-600">
                    {selectedPin.title}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPin(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> {selectedPin.location}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Years:</strong> {selectedPin.startYear} -{' '}
                  {selectedPin.endYear || 'Present'}
                </p>
                {selectedPin.current && (
                  <p className="text-sm text-blue-600 font-semibold">
                    ✓ Currently active
                  </p>
                )}
              </div>

              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                {selectedPin.description}
              </p>

              {selectedPin.achievements.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    Achievements
                  </h4>
                  <ul className="space-y-1">
                    {selectedPin.achievements.slice(0, 3).map((a, i) => (
                      <li key={i} className="text-xs text-gray-700">
                        ✓ {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedPin.technologies.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedPin.technologies.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 h-full flex items-center justify-center text-gray-500 text-center">
              <p>Click a location on the map to view details</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
