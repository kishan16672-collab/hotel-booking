import React from 'react';
import ClickSpark from './components/ui/ClickSpark'; // Adjust path if shadcn placed it elsewhere
import HeroHeader from './components/HeroHeader';
import SearchFilter from './components/SearchFilter';
import SeatingArea from './components/SeatingArea';
import ReservationSidebar from './components/ReservationSidebar';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <ClickSpark
          sparkColor="#2b2828"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          easing="ease-out"
          extraScale={1}
        />
      </div>

      {/* Main Content (z-10 brings it above the spark canvas) */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <HeroHeader />
        
        <main className="w-full max-w-6xl px-4 py-8 flex flex-col gap-8">
          <SearchFilter />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <SeatingArea />
            </div>
            <div className="lg:col-span-1">
              <ReservationSidebar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}