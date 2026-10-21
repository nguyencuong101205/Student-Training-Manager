import React, { useState } from 'react';
import { Menu, Search, ChevronDown, User, LogOut, Bell, Shield, Key, Sparkles, BookOpen, Calendar, HelpCircle } from 'lucide-react';

export default function Header({ 
  user, 
  onLogout, 
  onToggleSidebar, 
  searchQuery, 
  setSearchQuery,
  onNavigate,
  currentView
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#0a1e3b] via-[#0d274d] to-[#0a1e3b] text-white sticky top-0 z-40 shadow-sm border-b border-blue-900/40 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 h-16">
        {/* Left: Menu Toggle & Clean Brand Typography (No Logo) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition focus:outline-none border border-white/10 active:scale-95 flex items-center gap-2 group"
            title="Mở menu hệ thống"
          >
            <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-200 group-hover:text-white hidden lg:inline">MENU</span>
          </button>

          <div 
            onClick={() => onNavigate('home')} 
            className="cursor-pointer hover:opacity-95 transition flex flex-col select-none"
          >
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-black tracking-wide text-white uppercase drop-shadow-sm">
                CỔNG THÔNG TIN ĐÀO TẠO
              </span>
              <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 uppercase tracking-wider">
                PORTAL
              </span>
            </div>
            <span className="text-[10px] text-blue-200/80 font-medium tracking-wider hidden sm:inline uppercase">
              Hệ thống Quản lý Đào tạo & Dịch vụ Sinh viên Trực tuyến
            </span>
          </div>
        </div>

        {/* Center: Sleek Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm thông báo, lịch thi, biểu mẫu..."
              className="w-full bg-white/10 hover:bg-white/15 focus:bg-white/20 text-xs text-white placeholder-slate-300 pl-10 pr-16 py-2 rounded-xl border border-white/15 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all shadow-inner"
            />
            <Search className="w-4 h-4 text-slate-300 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono bg-white/10 border border-white/20 rounded text-slate-300 pointer-events-none hidden sm:inline-block">
              Ctrl K
            </kbd>
          </div>
        </div>

        {/* Right: Quick action pills, Notification & User Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick shortcuts */}
          <div className="hidden xl:flex items-center gap-1.5 mr-2">
            <button
              onClick={() => onNavigate('schedule')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                currentView === 'schedule'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Thời khóa biểu</span>
            </button>

            <button
              onClick={() => onNavigate('registration')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                currentView === 'registration'
                  ? 'bg-blue-600 text-white shadow-sm font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>Đăng ký học</span>
            </button>
          </div>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white transition relative border border-white/10 active:scale-95"
              title="Thông báo mới"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            </button>

            {notificationOpen && (
              <div 
                className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl py-3 text-slate-700 text-xs border border-slate-200 z-50 animate-fadeIn"
                onMouseLeave={() => setNotificationOpen(false)}
              >
                <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">Thông báo học vụ</span>
                  <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-semibold">2 tin mới</span>
                </div>
                <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto">
                  <div className="p-3 hover:bg-slate-50 cursor-pointer transition">
                    <p className="font-semibold text-slate-900 line-clamp-1">Kế hoạch đăng ký môn học kỳ phụ 9.1</p>
                    <span className="text-[10px] text-slate-400">10 phút trước</span>
                  </div>
                  <div className="p-3 hover:bg-slate-50 cursor-pointer transition">
                    <p className="font-semibold text-slate-900 line-clamp-1">Danh sách sinh viên đạt học bổng kỳ 2</p>
                    <span className="text-[10px] text-slate-400">Hôm qua</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2.5 hover:bg-white/10 p-1 rounded-xl transition focus:outline-none border border-transparent hover:border-white/10"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-900 font-black flex items-center justify-center text-xs shadow-md">
                {user?.name?.charAt(0) || "C"}
              </div>
              <div className="hidden sm:flex flex-col text-left leading-tight">
                <span className="text-xs font-bold text-white max-w-[140px] truncate">
                  {user?.name || "Nguyễn Bá Trung Cường"}
                </span>
                <span className="text-[10px] text-amber-300 font-mono">
                  {user?.id || "74dcht21272"}
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-300" />
            </button>

            {dropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl py-2 text-slate-700 text-xs border border-slate-200 z-50 animate-fadeIn"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="px-4 py-3 border-b border-slate-100 mb-1 bg-slate-50/70">
                  <p className="font-bold text-slate-900 text-sm">{user?.name}</p>
                  <p className="text-slate-500 text-[11px] font-mono">Mã SV: {user?.id} • 74DCHT21</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                    🟢 Sinh viên chính quy
                  </span>
                </div>

                <button
                  onClick={() => { onNavigate('profile'); setDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-center gap-2.5 transition text-slate-700 font-medium"
                >
                  <User className="w-4 h-4 text-blue-600" />
                  <span>Hồ sơ cá nhân & Bảng điểm</span>
                </button>

                <button
                  onClick={() => { onNavigate('schedule'); setDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-center gap-2.5 transition text-slate-700 font-medium"
                >
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <span>Thời khóa biểu tuần</span>
                </button>

                <button
                  onClick={() => { onNavigate('tuition'); setDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-center gap-2.5 transition text-slate-700 font-medium"
                >
                  <Key className="w-4 h-4 text-emerald-600" />
                  <span>Tra cứu học phí & Công nợ</span>
                </button>

                <button
                  onClick={() => { onNavigate('registration'); setDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-center gap-2.5 transition text-slate-700 font-medium"
                >
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  <span>Đăng ký môn học tín chỉ</span>
                </button>

                <div className="border-t border-slate-100 mt-1 pt-1">
                  <button
                    onClick={() => { onLogout(); setDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-rose-600 hover:bg-rose-50 flex items-center gap-2.5 transition font-semibold"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Đăng xuất tài khoản</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
