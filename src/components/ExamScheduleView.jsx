import React from 'react';
import { CalendarDays, Clock, MapPin, Printer, ShieldAlert, Award, FileText } from 'lucide-react';
import { mockExamSchedule, mockUser } from '../data/mockData';

export default function ExamScheduleView() {
  return (
    <div className="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-6 sm:p-7 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
            <CalendarDays className="w-6 h-6 text-rose-600" />
            Lịch thi kết thúc học phần - Học kỳ 1 (2026 - 2027)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Số báo danh sinh viên: <strong className="font-mono text-blue-700 font-bold">CNTT-042</strong> • Địa điểm thi: Cơ sở Hà Nội
          </p>
        </div>

        <button 
          onClick={() => window.print()}
          className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition"
        >
          <Printer className="w-3.5 h-3.5 text-slate-500" />
          <span>In thẻ dự thi</span>
        </button>
      </div>

      {/* Notice */}
      <div className="bg-rose-50 border border-rose-200 p-3.5 px-4 rounded-2xl text-xs text-rose-900 flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
        <p>
          Sinh viên phải mang theo <strong>Thẻ sinh viên</strong> hoặc <strong>Căn cước công dân</strong> khi vào phòng thi. Có mặt trước giờ thi 15 phút.
        </p>
      </div>

      {/* Exam Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockExamSchedule.map((exam, idx) => (
          <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                {exam.code}
              </span>
              <span className="text-xs font-black text-rose-600 px-2.5 py-0.5 rounded-full bg-rose-50">
                {exam.shift}
              </span>
            </div>

            <h4 className="font-extrabold text-sm text-slate-900 mb-3">
              {exam.name}
            </h4>

            <div className="space-y-2 text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-100">
              <div className="flex justify-between">
                <span className="text-slate-500">Ngày & Giờ thi:</span>
                <strong className="text-slate-900 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  {exam.examDate} ({exam.time})
                </strong>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-1.5">
                <span className="text-slate-500">Phòng thi & SBD:</span>
                <strong className="text-slate-900 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  Phòng {exam.room} • SBD: {exam.sbd}
                </strong>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-1.5">
                <span className="text-slate-500">Hình thức thi:</span>
                <span className="font-bold text-blue-700">{exam.format}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
