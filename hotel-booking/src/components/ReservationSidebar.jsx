import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function ReservationSidebar() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    seating_area: 'Sunlit Window Booth',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase
      .from('reservations')
      .insert([
        {
          customer_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          guests: formData.guests,
          seating_area: formData.seating_area,
          reservation_time: new Date().toISOString(),
        }
      ]);

    if (error) {
      setMessage('Error booking table. Please try again.');
    } else {
      setMessage('Reservation confirmed successfully!');
      setFormData({ name: '', email: '', phone: '', guests: 2, seating_area: 'Sunlit Window Booth' });
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-6">
      <h2 className="text-lg font-medium text-slate-900 mb-6">Reservation Summary</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase">Full Name</label>
          <input 
            required type="text" 
            className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-emerald-600 transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase">Email Address</label>
          <input 
            required type="email" 
            className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-emerald-600 transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase">Mobile Number</label>
          <input 
            required type="tel" 
            className="w-full mt-1 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:border-emerald-600 transition-colors"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full mt-4 bg-emerald-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors disabled:opacity-50"
        >
          {loading ? 'Confirming...' : 'Confirm Table Reservation'}
        </button>

        {message && (
          <p className={`text-sm text-center mt-4 ${message.includes('Error') ? 'text-red-600' : 'text-emerald-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}