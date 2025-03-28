"use client";

import React, { useEffect, useRef } from 'react';

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // TODO: implement map
    const container = mapContainerRef.current;
    container.innerHTML = `
      <div class="flex items-center justify-center h-full bg-gray-100">
        <div class="text-center bg-white p-8 rounded-lg shadow-md max-w-2xl">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">Diplomacy Map</h2>
          <p class="max-w-md mb-8 text-gray-700">This is where the interactive map of Europe would be displayed, showing:</p>
          <ul class="list-disc text-left inline-block text-gray-700 pl-5">
            <li class="mb-1">Territories with borders</li>
            <li class="mb-1">Army and fleet units</li>
            <li class="mb-1">Supply centers</li>
            <li class="mb-1">Current country control</li>
          </ul>
          <div class="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div class="p-4 border rounded bg-blue-100 text-blue-800 font-bold">FRA</div>
            <div class="p-4 border rounded bg-yellow-100 text-yellow-800 font-bold">ENG</div>
            <div class="p-4 border rounded bg-gray-200 text-gray-800 font-bold">GER</div>
            <div class="p-4 border rounded bg-red-100 text-red-800 font-bold">ITA</div>
            <div class="p-4 border rounded bg-green-100 text-green-800 font-bold">AUS</div>
            <div class="p-4 border rounded bg-purple-100 text-purple-800 font-bold">RUS</div>
            <div class="p-4 border rounded bg-orange-100 text-orange-800 font-bold">TUR</div>
          </div>
        </div>
      </div>
    `;
  }, []);

  return (
    <div ref={mapContainerRef} className="w-full h-full"></div>
  );
};

export default Map;