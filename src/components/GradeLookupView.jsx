import React from 'react';
import { Award, Printer, Download, BookOpen, CheckCircle, Search } from 'lucide-react';
import { mockGrades, mockUser } from '../data/mockData';

export default function GradeLookupView() {
  return (
    <div className="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-6 sm:p-7 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
            <Award className="w-6 h-6 text-amber-500" />
            Tra cứu kết quả học tập & Bảng điểm
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Kết quả học tập theo hệ thống tín chỉ • Học kỳ 2 Năm học 2025 - 2026
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => window.print()}
            className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>In bảng điểm</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Điểm TB Học kỳ (Hệ 4)</span>
          <span className="text-xl font-black text-blue-700 mt-1 block">3.72</span>
          <span className="text-[10px] text-emerald-600 font-bold mt-0.5 block">Xuất sắc</span>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Điểm TB Tích lũy (GPA)</span>
          <span className="text-xl font-black text-amber-600 mt-1 block">{mockUser.gpa}</span>
          <span className="text-[10px] text-slate-500 font-semibold mt-0.5 block">Học lực Giỏi</span>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tín chỉ tích lũy</span>
          <span className="text-xl font-black text-slate-800 mt-1 block">{mockUser.creditsAccumulated} / 150</span>
          <span className="text-[10px] text-blue-600 font-semibold mt-0.5 block">Đạt 57% chương trình</span>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Điểm rèn luyện kỳ</span>
          <span className="text-xl font-black text-purple-700 mt-1 block">92 / 100</span>
          <span className="text-[10px] text-purple-600 font-semibold mt-0.5 block">Xếp loại Xuất sắc</span>
        </div>
      </div>

      {/* Grade Details Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700 uppercase tracking-wider font-extrabold border-b text-[11px]">
              <th className="py-3.5 px-4">Mã môn</th>
              <th className="py-3.5 px-4">Tên học phần</th>
              <th className="py-3.5 px-4 text-center">Số TC</th>
              <th className="py-3.5 px-4 text-center">Chuyên cần (10%)</th>
              <th className="py-3.5 px-4 text-center">Giữa kỳ (30%)</th>
              <th className="py-3.5 px-4 text-center">Cuối kỳ (60%)</th>
              <th className="py-3.5 px-4 text-center">Tổng kết (Hệ 10)</th>
              <th className="py-3.5 px-4 text-center">Điểm chữ</th>
              <th className="py-3.5 px-4 text-center">Điểm Hệ 4</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {mockGrades.map((g) => (
              <tr key={g.id} className="hover:bg-slate-50 transition">
                <td className="py-3.5 px-4 font-mono font-bold text-blue-700">{g.id}</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">{g.name}</td>
                <td className="py-3.5 px-4 text-center font-bold">{g.credits}</td>
                <td className="py-3.5 px-4 text-center">{g.attendance}</td>
                <td className="py-3.5 px-4 text-center">{g.test}</td>
                <td className="py-3.5 px-4 text-center">{g.exam}</td>
                <td className="py-3.5 px-4 text-center font-bold text-slate-900">{g.total}</td>
                <td className="py-3.5 px-4 text-center">
                  <span className={`px-2 py-0.5 rounded-full font-black text-[11px] ${
                    g.letter.startsWith('A') 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {g.letter}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-center font-bold text-blue-700">{g.gpa4.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
