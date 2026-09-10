import React from 'react';

export default function SearchFilter() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 w-full">
      <div className="flex flex-col">
        <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Date</label>
        <input type="date" className="mt-1 outline-none text-sm text-slate-800 bg-transparent" />
      </div>
      
      <div className="flex flex-col">
        <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Guests</label>
        <select className="mt-1 outline-none text-sm text-slate-800 bg-transparent">
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Seating</label>
        <select className="mt-1 outline-none text-sm text-slate-800 bg-transparent">
          <option>Dinner (5:30 - 10:00 PM)</option>
          <option>Lunch (11:30 - 2:00 PM)</option>
        </select>
      </div>

      <button className="bg-emerald-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors">
        Check Availability
      </button>
    </div>
  );
}