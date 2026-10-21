import React, { useEffect, useState } from 'react';
import { 
  Home, 
  Newspaper, 
  User, 
  GraduationCap, 
  BookMarked, 
  CalendarDays, 
  Wallet, 
  FileText, 
  X, 
  Sparkles, 
  LogOut, 
  Search, 
  ChevronRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import UttLogo from './UttLogo';
import { mockUser } from '../data/mockData';

export default function Sidebar({ isOpen, onClose, currentView, onNavigate, onLogout }) {
  const [filterQuery, setFilterQuery] = useState('');

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const menuSections = [
    {
      title: "HỌC VỤ & ĐÀO TẠO",
      items: [
        {
          id: 'registration',
          label: 'Đăng ký học phần',
          description: 'Đăng ký tín chỉ kỳ 1 đợt 9.1',
          icon: BookMarked,
          badge: 'Đang mở',
          badgeColor: 'bg-emerald-500 text-white',
          iconColor: 'bg-blue-50 text-blue-600 border border-blue-200',
          view: 'registration'
        },
        {
          id: 'schedule',
          label: 'Thời khóa biểu',
          description: 'Lịch học theo tuần và lịch thi',
          icon: CalendarDays,
          badge: 'Tuần 08',
          badgeColor: 'bg-amber-500 text-white',
          iconColor: 'bg-amber-50 text-amber-600 border border-amber-200',
          view: 'schedule'
        },
        {
          id: 'learning',
          label: 'Kết quả học tập & Điểm',
          description: 'Tra cứu bảng điểm & tích lũy',
          icon: GraduationCap,
          iconColor: 'bg-purple-50 text-purple-600 border border-purple-200',
          view: 'profile'
        }
      ]
    },
    {
      title: "DỊCH VỤ SINH VIÊN & TÀI CHÍNH",
      items: [
        {
          id: 'finance',
          label: 'Học phí & Công nợ',
          description: 'Tra cứu học phí và lịch sử nộp tiền',
          icon: Wallet,
          badge: 'Đã hoàn thành',
          badgeColor: 'bg-teal-500 text-white',
          iconColor: 'bg-teal-50 text-teal-600 border border-teal-200',
          view: 'tuition'
        },
        {
          id: 'one-stop',
          label: 'Hệ thống Một cửa điện tử',
          description: 'Xin cấp giấy xác nhận, bảng điểm',
          icon: Sparkles,
          iconColor: 'bg-rose-50 text-rose-600 border border-rose-200',
          action: () => alert("Chuyển tới Cổng dịch vụ một cửa điện tử UTT")
        },
        {
          id: 'docs',
          label: 'Biểu mẫu & Quy chế đào tạo',
          description: 'Văn bản quy định, đơn xin nghỉ phép',
          icon: FileText,
          iconColor: 'bg-slate-50 text-slate-600 border border-slate-200',
          view: 'home'
        }
      ]
    },
    {
      title: "TỔNG QUAN & TÀI KHOẢN",
      items: [
        {
          id: 'home',
          label: 'Trang chủ cổng thông tin',
          description: 'Bảng tin, thông báo và tin tức',
          icon: Home,
          iconColor: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
          view: 'home'
        },
        {
          id: 'profile',
          label: 'Hồ sơ sinh viên',
          description: 'Lý lịch, thông tin cá nhân và lớp',
          icon: User,
          iconColor: 'bg-cyan-50 text-cyan-600 border border-cyan-200',
          view: 'profile'
        }
      ]
    }
  ];

  const handleItemClick = (item) => {
    if (item.action) {
      item.action();
    } else if (item.view) {
      onNavigate(item.view);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex animate-fadeIn">
      {/* Blurred Full-Page Backdrop Overlay */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-all cursor-pointer"
        aria-hidden="true"
      />

      {/* Floating Animated Drawer Panel */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 border-r border-slate-200 animate-slideRight overflow-hidden">
        
        {/* Drawer Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-[#0a1e3b] via-[#0d274d] to-[#0a1e3b] text-white flex items-center justify-between shadow-md flex-shrink-0">
          <UttLogo light={true} />

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition active:scale-95 flex items-center gap-1.5 text-xs font-medium"
            title="Đóng menu (Esc)"
          >
            <span className="text-[10px] uppercase font-bold text-slate-300 hidden sm:inline">Đóng</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar inside Drawer */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/70 flex-shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Tìm nhanh phân hệ chức năng..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-xs transition"
              autoFocus
            />
          </div>
        </div>

        {/* Menu Items Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          {menuSections.map((section, sIdx) => {
            const filteredItems = section.items.filter(item => 
              item.label.toLowerCase().includes(filterQuery.toLowerCase()) ||
              item.description.toLowerCase().includes(filterQuery.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={sIdx} className="space-y-2.5">
                <h4 className="text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center justify-between">
                  <span>{section.title}</span>
                  <span className="text-[10px] text-slate-400 font-normal">{filteredItems.length} mục</span>
                </h4>

                <div className="grid grid-cols-1 gap-2">
                  {filteredItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentView === item.view;

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        className={`w-full text-left p-3 rounded-2xl flex items-center gap-3.5 transition-all group ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-[1.01]'
                            : 'bg-slate-50/70 hover:bg-white hover:shadow-md border border-slate-200/60 hover:border-blue-200 text-slate-800'
                        }`}
                      >
                        {/* Icon */}
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
                          isActive 
                            ? 'bg-white/20 text-white border border-white/20' 
                            : item.iconColor || 'bg-blue-50 text-blue-600'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>

                        {/* Text info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-800 group-hover:text-blue-600'}`}>
                              {item.label}
                            </span>
                            {item.badge && (
                              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold flex-shrink-0 ${
                                isActive 
                                  ? 'bg-white text-blue-700' 
                                  : item.badgeColor || 'bg-blue-100 text-blue-700'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                            {item.description}
                          </p>
                        </div>

                        <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1 ${
                          isActive ? 'text-white/80' : 'text-slate-400 group-hover:text-blue-600'
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Drawer Footer: User Profile & Quick Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex-shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-900 font-bold flex items-center justify-center text-sm shadow-sm">
                {mockUser.name.charAt(0)}
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white absolute -bottom-0.5 -right-0.5"></span>
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-slate-900 truncate">
                {mockUser.name}
              </p>
              <p className="text-[10px] text-slate-500 font-mono">
                {mockUser.id} • {mockUser.className}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition active:scale-95"
          >
            <LogOut className="w-4 h-4" />
            <span>Đăng xuất</span>
          </button>
        </div>

      </div>
    </div>
  );
}
