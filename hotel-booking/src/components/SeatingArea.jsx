import React, { useState } from 'react';

export default function SeatingArea() {
  const [selected, setSelected] = useState('Sunlit Window Booth');

  const areas = [
    { name: 'Sunlit Window Booth', capacity: '2-4 Guests', desc: 'Serene panoramic garden views.' },
    { name: 'Main Dining Room', capacity: '2-6 Guests', desc: 'Under towering lush indoor ferns.' },
    { name: 'Outdoor Wisteria Terrace', capacity: '2-8 Guests', desc: 'Breezy open-air pergola.' }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-slate-900 border-b pb-2">Select Seating Atmosphere</h2>
      <div className="flex flex-col gap-4">
        {areas.map((area) => (
          <div 
            key={area.name}
            onClick={() => setSelected(area.name)}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selected === area.name ? 'border-emerald-700 bg-emerald-50/30' : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-slate-900">{area.name}</h3>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                  <span>👥 {area.capacity}</span>
                </p>
                <p className="text-sm text-slate-600 mt-2">{area.desc}</p>
              </div>
              {selected === area.name && (
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-medium">Selected</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}