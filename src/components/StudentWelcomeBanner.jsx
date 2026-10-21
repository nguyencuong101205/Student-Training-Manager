import React from 'react';
import { Calendar, BookOpen, Award, CheckCircle, Clock, ChevronRight, Sparkles, AlertCircle } from 'lucide-react';
import { mockUser } from '../data/mockData';

export default function StudentWelcomeBanner({ onNavigate }) {
  return (
    <div className="mb-6 space-y-4">
      {/* Main Student Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0c2e5c] via-[#124282] to-[#1c57a5] text-white p-6 sm:p-7 shadow-lg border border-blue-400/20">
        {/* Subtle decorative circles */}
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute right-32 -top-10 w-40 h-40 bg-amber-400/10 rounded-full blur-xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left Greeting & Details */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Học kỳ 1 • Năm học 2026 - 2027
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                🟢 Đang trong kỳ học chính
              </span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
                Xin chào, {mockUser.name}! 👋
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/90 font-light mt-0.5">
                Mã sinh viên: <strong className="font-mono text-white font-bold">{mockUser.id}</strong> • Lớp: <span className="text-white font-medium">{mockUser.className}</span> • Ngành: <span className="text-white font-medium">{mockUser.major}</span>
              </p>
            </div>

            {/* Quick Metrics Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-amber-400" />
                <div>
                  <span className="text-[10px] text-blue-200 block leading-none">GPA tích lũy</span>
                  <span className="text-xs font-black text-white">{mockUser.gpa} / 4.0 (Giỏi)</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <div>
                  <span className="text-[10px] text-blue-200 block leading-none">Tiến độ tín chỉ</span>
                  <span className="text-xs font-black text-white">{mockUser.creditsAccumulated} / 150 TC (57%)</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="text-[10px] text-blue-200 block leading-none">Tình trạng học phí</span>
                  <span className="text-xs font-black text-emerald-300">Không nợ công nợ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="flex flex-row lg:flex-col gap-2.5 flex-shrink-0">
            <button
              onClick={() => onNavigate('schedule')}
              className="flex-1 lg:flex-none px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Xem TKB hôm nay</span>
            </button>

            <button
              onClick={() => onNavigate('registration')}
              className="flex-1 lg:flex-none px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs flex items-center justify-center gap-2 transition border border-white/20 active:scale-95"
            >
              <BookOpen className="w-4 h-4" />
              <span>Đăng ký tín chỉ</span>
            </button>
          </div>
        </div>
      </div>

      {/* Today Class Alert Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-300/40 rounded-2xl p-3.5 px-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 font-bold">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 block">
              Lịch học hôm nay: Kiến trúc hệ thống phần mềm (07:00 - 10:15)
            </span>
            <span className="text-[11px] text-slate-600">
              Phòng học: <strong className="text-amber-800">H1-301 (Cơ sở Triều Khúc)</strong> • Giảng viên: ThS. Phạm Tuấn Anh
            </span>
          </div>
        </div>

        <button
          onClick={() => onNavigate('schedule')}
          className="text-xs font-bold text-amber-900 hover:text-amber-700 flex items-center gap-1 group whitespace-nowrap"
        >
          <span>Xem chi tiết tuần</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
