import React from 'react';
import { Calendar, Clock, MapPin, User, ChevronRight } from 'lucide-react';
import { mockSchedule } from '../data/mockData';

export default function ScheduleView() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-orange-500" />
            Thời khóa biểu học kỳ 1 (Năm học 2026 - 2027)
          </h2>
          <p className="text-xs text-slate-500 mt-1">Lịch học tuần hiện tại: Tuần 08 (20/10/2026 - 26/10/2026)</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-full bg-orange-100 text-orange-800 font-semibold">
            Đang trong học kỳ chính
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockSchedule.map((item, index) => (
          <div 
            key={index} 
            className="border border-slate-200 hover:border-orange-400 rounded-xl p-4.5 bg-gradient-to-br from-white to-slate-50 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-orange-500 text-white">
                {item.day}
              </span>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {item.time}
              </span>
            </div>

            <h3 className="font-bold text-slate-900 text-sm mb-2 line-clamp-1">
              {item.subject}
            </h3>

            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Phòng học: <strong className="text-slate-800">{item.room}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-blue-500" />
                <span>Giảng viên: {item.teacher}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
