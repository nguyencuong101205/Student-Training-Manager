import React, { useState } from 'react';
import { 
  Home, 
  Newspaper, 
  User, 
  GraduationCap, 
  BookMarked, 
  CalendarDays, 
  Wallet, 
  FileText, 
  ChevronRight, 
  ChevronDown,
  Sparkles,
  LogOut,
  Layers,
  HelpCircle,
  FolderOpen
} from 'lucide-react';
import { mockUser } from '../data/mockData';

export default function Sidebar({ isOpen, currentView, onNavigate, onLogout }) {
  const [expandedMenus, setExpandedMenus] = useState({
    profile: false,
    learning: false,
    registration: false,
    schedule: false,
    finance: false,
    docs: false
  });

  const toggleSubmenu = (key) => {
    setExpandedMenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const menuSections = [
    {
      title: "TỔNG QUAN",
      items: [
        {
          id: 'home',
          label: 'Trang chủ',
          icon: Home,
          view: 'home'
        },
        {
          id: 'news',
          label: 'Bảng tin & Thông báo',
          icon: Newspaper,
          badge: 'Mới',
          badgeColor: 'bg-rose-500 text-white',
          view: 'home'
        }
      ]
    },
    {
      title: "HỌC VỤ & ĐÀO TẠO",
      items: [
        {
          id: 'registration',
          label: 'Đăng ký học phần',
          icon: BookMarked,
          badge: 'Đợt 1',
          badgeColor: 'bg-emerald-500 text-white',
          hasSub: true,
          subItems: [
            { label: 'Đăng ký tín chỉ', view: 'registration' },
            { label: 'Kết quả đăng ký', view: 'registration' }
          ]
        },
        {
          id: 'schedule',
          label: 'Thời khóa biểu',
          icon: CalendarDays,
          hasSub: true,
          subItems: [
            { label: 'Thời khóa biểu tuần', view: 'schedule' },
            { label: 'Lịch thi học kỳ', action: () => alert("Lịch thi sẽ mở trước 2 tuần") }
          ]
        },
        {
          id: 'learning',
          label: 'Góc học tập & Điểm',
          icon: GraduationCap,
          hasSub: true,
          subItems: [
            { label: 'Tra cứu điểm số', view: 'profile' },
            { label: 'Chương trình khung', action: () => alert("Khung chương trình đào tạo kỹ sư 4.5 năm") }
          ]
        }
      ]
    },
    {
      title: "DỊCH VỤ & TÀI CHÍNH",
      items: [
        {
          id: 'finance',
          label: 'Học phí & Công nợ',
          icon: Wallet,
          hasSub: true,
          subItems: [
            { label: 'Tra cứu công nợ', view: 'tuition' },
            { label: 'Lịch sử thanh toán', view: 'tuition' }
          ]
        },
        {
          id: 'one-stop',
          label: 'Hệ thống một cửa',
          icon: Sparkles,
          action: () => alert("Chuyển tới Cổng dịch vụ một cửa điện tử UTT")
        },
        {
          id: 'docs',
          label: 'Biểu mẫu & Văn bản',
          icon: FileText,
          hasSub: true,
          subItems: [
            { label: 'Quy chế đào tạo', view: 'home' },
            { label: 'Đơn xin phép sinh viên', action: () => alert("Tải xuống biểu mẫu") }
          ]
        }
      ]
    },
    {
      title: "TÀI KHOẢN",
      items: [
        {
          id: 'profile',
          label: 'Hồ sơ cá nhân',
          icon: User,
          view: 'profile'
        }
      ]
    }
  ];

  return (
    <aside 
      className={`bg-white/95 backdrop-blur-md border-r border-slate-200/90 shadow-sm flex-shrink-0 transition-all duration-300 ease-in-out z-30 select-none flex flex-col justify-between ${
        isOpen ? 'w-64' : 'w-[72px]'
      }`}
    >
      {/* Navigation links */}
      <div className="py-4 px-3 flex-1 overflow-y-auto space-y-6">
        {menuSections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-1.5">
            {isOpen ? (
              <h4 className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-3 mb-1.5">
                {section.title}
              </h4>
            ) : (
              <div className="h-px bg-slate-200 mx-2 my-2"></div>
            )}

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.view && !item.hasSub;
                const isExpanded = expandedMenus[item.id];

                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => {
                        if (item.hasSub) {
                          toggleSubmenu(item.id);
                        } else if (item.action) {
                          item.action();
                        } else if (item.view) {
                          onNavigate(item.view);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                      }`}
                      title={!isOpen ? item.label : undefined}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4.5 h-4.5 flex-shrink-0 transition-transform group-hover:scale-110 ${
                          isActive ? 'text-white' : 'text-slate-500 group-hover:text-blue-600'
                        }`} />
                        {isOpen && (
                          <span className="truncate">{item.label}</span>
                        )}
                      </div>

                      {isOpen && (
                        <div className="flex items-center gap-1.5">
                          {item.badge && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${item.badgeColor || 'bg-blue-100 text-blue-700'}`}>
                              {item.badge}
                            </span>
                          )}
                          {item.hasSub && (
                            <span className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                            </span>
                          )}
                        </div>
                      )}
                    </button>

                    {/* Submenu for expanded state */}
                    {isOpen && item.hasSub && isExpanded && (
                      <div className="mt-1 ml-4 pl-3 border-l-2 border-blue-200 space-y-1 py-1">
                        {item.subItems.map((sub, subIdx) => (
                          <button
                            key={subIdx}
                            onClick={() => {
                              if (sub.action) sub.action();
                              else if (sub.view) onNavigate(sub.view);
                            }}
                            className="w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition truncate"
                          >
                            • {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom User Card / Status */}
      <div className="p-3 border-t border-slate-200/80 bg-slate-50/80">
        {isOpen ? (
          <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="relative flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {mockUser.name.charAt(0)}
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white absolute bottom-0 right-0"></span>
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-slate-800 truncate leading-tight">
                  {mockUser.name}
                </p>
                <p className="text-[10px] text-slate-500 font-mono">
                  {mockUser.id}
                </p>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
              title="Đăng xuất"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={onLogout}
              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition"
              title="Đăng xuất"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
