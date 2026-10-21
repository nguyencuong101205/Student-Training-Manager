import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, ChevronRight, Printer, Download, Filter } from 'lucide-react';
import { mockSchedule } from '../data/mockData';

export default function ScheduleView() {
  const [selectedDay, setSelectedDay] = useState('all');
  const [week, setWeek] = useState(8);

  const days = [
    { id: 'all', label: 'Tất cả tuần' },
    { id: 'Thứ 2', label: 'Thứ 2' },
    { id: 'Thứ 3', label: 'Thứ 3' },
    { id: 'Thứ 4', label: 'Thứ 4' },
    { id: 'Thứ 5', label: 'Thứ 5' },
    { id: 'Thứ 6', label: 'Thứ 6' }
  ];

  const filteredSchedule = selectedDay === 'all' 
    ? mockSchedule 
    : mockSchedule.filter(item => item.day === selectedDay);

  return (
    <div className="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-6 sm:p-7 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
            <Calendar className="w-6 h-6 text-amber-500" />
            Thời khóa biểu học kỳ 1 (Năm học 2026 - 2027)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Lịch học chính quy tín chỉ • Cơ sở đào tạo Hà Nội (54 Triều Khúc)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-700">
            <button 
              onClick={() => setWeek(Math.max(1, week - 1))}
              className="px-2 py-1 rounded-lg hover:bg-white transition"
            >
              ◀
            </button>
            <span className="px-2 text-blue-700">Tuần {week < 10 ? `0${week}` : week}</span>
            <button 
              onClick={() => setWeek(week + 1)}
              className="px-2 py-1 rounded-lg hover:bg-white transition"
            >
              ▶
            </button>
          </div>

          <button 
            onClick={() => window.print()}
            className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>In lịch học</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        {days.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDay(d.id)}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition whitespace-nowrap ${
              selectedDay === d.id
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSchedule.map((item, index) => {
          const isToday = item.day === 'Thứ 4';
          return (
            <div 
              key={index} 
              className={`rounded-2xl p-5 border transition-all duration-200 ${
                isToday 
                  ? 'border-amber-400 bg-amber-50/30 shadow-md ring-2 ring-amber-400/20' 
                  : 'border-slate-200/90 bg-white hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-black px-2.5 py-1 rounded-lg ${
                  isToday ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-white'
                }`}>
                  {item.day} {isToday && '(Hôm nay)'}
                </span>
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {item.time}
                </span>
              </div>

              <h3 className="font-extrabold text-slate-900 text-sm mb-3 leading-snug line-clamp-1">
                {item.subject}
              </h3>

              <div className="space-y-2 text-xs text-slate-600 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" /> Phòng học:
                  </span>
                  <strong className="text-blue-700 font-mono text-xs font-bold">{item.room}</strong>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-1.5">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <User className="w-3.5 h-3.5 text-emerald-500" /> Giảng viên:
                  </span>
                  <strong className="text-slate-800">{item.teacher}</strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
