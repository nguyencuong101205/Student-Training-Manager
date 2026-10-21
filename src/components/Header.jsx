import React, { useState } from 'react';
import { Menu, Search, ChevronDown, User, LogOut, Bell, Shield, Key } from 'lucide-react';
import UttLogo from './UttLogo';

export default function Header({ 
  user, 
  onLogout, 
  onToggleSidebar, 
  searchQuery, 
  setSearchQuery,
  onNavigate 
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-[#102a4d] text-white sticky top-0 z-40 shadow-md">
      <div className="flex items-center justify-between px-4 py-2.5 h-16">
        {/* Left: Hamburger & Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-1.5 rounded-lg hover:bg-white/10 text-white transition focus:outline-none"
            title="Đóng / mở menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div 
            onClick={() => onNavigate('home')} 
            className="cursor-pointer hover:opacity-95 transition"
          >
            <UttLogo light={true} />
          </div>
        </div>

        {/* Middle: Search Box */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm thông tin..."
              className="w-full bg-[#1b3d6c] hover:bg-[#20477e] focus:bg-[#20477e] text-sm text-white placeholder-slate-300 pl-4 pr-10 py-2 rounded-full border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
            <Search className="w-4 h-4 text-slate-300 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Right: Notifications & User Profile */}
        <div className="flex items-center gap-3">
          <button 
            className="p-2 rounded-full hover:bg-white/10 text-slate-200 hover:text-white transition relative"
            title="Thông báo mới"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2.5 hover:bg-white/10 p-1.5 rounded-xl transition focus:outline-none"
            >
              <div className="w-9 h-9 rounded-full bg-slate-300 border-2 border-white/50 flex items-center justify-center overflow-hidden">
                <User className="w-5 h-5 text-slate-700" />
              </div>
              <span className="hidden sm:inline text-sm font-medium text-slate-100 max-w-[160px] truncate">
                {user?.name || "Nguyễn Bá Trung Cường"}
              </span>
              <ChevronDown className="w-4 h-4 text-slate-300" />
            </button>

            {dropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 text-slate-700 text-xs border border-slate-100 z-50 animate-fadeIn"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="px-4 py-2 border-b border-slate-100 mb-1">
                  <p className="font-bold text-slate-900 text-sm">{user?.name}</p>
                  <p className="text-slate-500">MSSV: {user?.id}</p>
                </div>

                <button
                  onClick={() => { onNavigate('profile'); setDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-center gap-2.5 transition"
                >
                  <User className="w-4 h-4 text-blue-600" />
                  <span>Hồ sơ cá nhân</span>
                </button>

                <button
                  onClick={() => { onNavigate('schedule'); setDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-center gap-2.5 transition"
                >
                  <Shield className="w-4 h-4 text-orange-500" />
                  <span>Thời khóa biểu</span>
                </button>

                <button
                  onClick={() => { onNavigate('tuition'); setDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 flex items-center gap-2.5 transition"
                >
                  <Key className="w-4 h-4 text-emerald-600" />
                  <span>Tra cứu học phí</span>
                </button>

                <div className="border-t border-slate-100 mt-1 pt-1">
                  <button
                    onClick={() => { onLogout(); setDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-rose-600 hover:bg-rose-50 flex items-center gap-2.5 transition font-semibold"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Đăng xuất</span>
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
