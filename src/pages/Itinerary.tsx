import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Plus, MapPin, Calendar, Clock } from 'lucide-react';

export default function Itinerary() {
  const [days, setDays] = useState([
    { id: 1, activities: [{ id: 1, time: '09:00 AM', title: 'Sunrise Hike', location: 'Coastal Trail' }] },
  ]);

  const addDay = () => {
    setDays([...days, { id: days.length + 1, activities: [] }]);
  };

  return (
    <Layout>
      <div className="px-16 pt-10 pb-32">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-6xl font-serif italic text-beige mb-2">Itinerary Planner</h1>
            <p className="text-white/60 uppercase tracking-widest text-xs">Craft your perfect journey</p>
          </div>
          <button 
            onClick={addDay}
            className="frosted-glass px-6 py-3 rounded-full flex items-center gap-2 text-gold hover:bg-white/10 transition-colors"
          >
            <Plus size={18} /> Add Day
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {days.map((day) => (
            <div key={day.id} className="frosted-glass p-8 rounded-3xl flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <h2 className="text-2xl font-serif italic text-gold">Day {day.id}</h2>
                <Calendar size={18} className="text-white/40" />
              </div>
              
              <div className="flex flex-col gap-4">
                {day.activities.length > 0 ? (
                  day.activities.map((activity) => (
                    <div key={activity.id} className="frosted-glass-heavy p-4 rounded-xl flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-[10px] text-gold uppercase tracking-widest">
                        <Clock size={12} /> {activity.time}
                      </div>
                      <div className="text-lg font-serif">{activity.title}</div>
                      <div className="flex items-center gap-1 text-xs text-white/50">
                        <MapPin size={12} /> {activity.location}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-white/30 italic text-sm">
                    No activities planned yet
                  </div>
                )}
                
                <button className="mt-2 border border-dashed border-white/20 rounded-xl py-3 text-white/40 hover:text-white/60 hover:border-white/40 transition-all text-sm flex justify-center items-center gap-2">
                  <Plus size={16} /> Add Activity
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
