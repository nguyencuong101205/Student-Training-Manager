import React from 'react';
import { Calendar, BookOpen, Award, CheckCircle, Clock, ChevronRight, Sparkles, UserCheck } from 'lucide-react';
import { mockUser } from '../data/mockData';

export default function StudentWelcomeBanner({ onNavigate }) {
  return (
    <div className="mb-6 space-y-3.5">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0d2a54] via-[#143e77] to-[#1a5198] text-white p-6 sm:p-7 shadow-sm border border-blue-400/20">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute right-36 -top-12 w-48 h-48 bg-amber-400/10 rounded-full blur-xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1.5 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Học kỳ 1 • Năm học 2026 - 2027
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                🟢 Đang trong học kỳ chính
              </span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
                Xin chào, {mockUser.name}! 👋
              </h2>
              <p className="text-xs sm:text-sm text-blue-100/90 font-medium mt-1">
                Mã sinh viên: <strong className="font-mono text-white font-bold">{mockUser.id}</strong> • Lớp: <span className="text-white font-semibold">{mockUser.className}</span> • Ngành: <span className="text-white font-semibold">{mockUser.major}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 flex items-center gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-amber-400/20 flex items-center justify-center flex-shrink-0 text-amber-400">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-blue-200 block font-semibold uppercase tracking-wider">GPA tích lũy</span>
                  <span className="text-xs sm:text-sm font-black text-white">{mockUser.gpa} / 4.0 <span className="text-amber-300 text-xs font-bold">(Học lực Giỏi)</span></span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 flex items-center gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0 text-cyan-400">
                  <BookOpen className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-blue-200 block font-semibold uppercase tracking-wider">Tiến độ tích lũy</span>
                  <span className="text-xs sm:text-sm font-black text-white">{mockUser.creditsAccumulated} / 150 TC <span className="text-cyan-300 text-xs font-bold">(Đạt 57%)</span></span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 flex items-center gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-emerald-400/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <CheckCircle className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-blue-200 block font-semibold uppercase tracking-wider">Tình trạng học phí</span>
                  <span className="text-xs sm:text-sm font-black text-emerald-300">Không nợ công nợ</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row lg:flex-col gap-2.5 flex-shrink-0">
            <button
              onClick={() => onNavigate('schedule')}
              className="flex-1 lg:flex-none px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Xem Thời khóa biểu</span>
            </button>

            <button
              onClick={() => onNavigate('registration')}
              className="flex-1 lg:flex-none px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs flex items-center justify-center gap-2 transition border border-white/20 active:scale-95"
            >
              <BookOpen className="w-4 h-4" />
              <span>Đăng ký môn học</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-3.5 px-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-slate-800 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 font-bold shadow-xs">
            <Clock className="w-4.5 h-4.5" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-bold text-slate-900 block">
              Nhắc lịch học trong ngày: <strong className="text-amber-900 font-extrabold">Thứ 4: Kiến trúc hệ thống phần mềm (07:00 - 10:15)</strong>
            </span>
            <span className="text-[11px] text-slate-600">
              Phòng học: <strong className="text-blue-700 font-mono font-bold">H1-301 (Cơ sở Triều Khúc)</strong> • Giảng viên: ThS. Phạm Tuấn Anh
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            onClick={() => onNavigate('schedule')}
            className="text-xs font-bold text-amber-900 hover:text-amber-700 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl transition flex items-center gap-1 group whitespace-nowrap"
          >
            <span>Chi tiết lịch học</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
