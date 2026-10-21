import React, { useState } from 'react';
import { 
  Home, 
  Layers, 
  Newspaper, 
  User, 
  GraduationCap, 
  BookMarked, 
  CalendarDays, 
  ArrowLeftRight, 
  FileText, 
  ChevronRight, 
  ChevronDown,
  ChevronsRight
} from 'lucide-react';

export default function Sidebar({ isOpen, currentView, onNavigate }) {
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

  const navItems = [
    {
      id: 'home',
      label: 'Trang chủ',
      icon: Home,
      view: 'home'
    },
    {
      id: 'one-stop',
      label: 'Hệ thống một cửa',
      icon: ChevronsRight,
      action: () => alert("Chuyển đến Cổng dịch vụ một cửa sinh viên điện tử UTT")
    },
    {
      id: 'news',
      label: 'Tin tức',
      icon: Newspaper,
      view: 'home'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      hasSub: true,
      subItems: [
        { label: 'Lý lịch sinh viên', view: 'profile' },
        { label: 'Đổi mật khẩu', action: () => alert("Chức năng đổi mật khẩu") }
      ]
    },
    {
      id: 'learning',
      label: 'Góc học tập',
      icon: GraduationCap,
      hasSub: true,
      subItems: [
        { label: 'Kết quả học tập', view: 'profile' },
        { label: 'Chương trình đào tạo', action: () => alert("Xem khung chương trình đào tạo chuẩn") }
      ]
    },
    {
      id: 'registration',
      label: 'Đăng ký học',
      icon: BookMarked,
      hasSub: true,
      subItems: [
        { label: 'Đăng ký học phần', view: 'registration' },
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
        { label: 'Lịch thi học kỳ', action: () => alert("Lịch thi sẽ được công bố trước kỳ thi 2 tuần") }
      ]
    },
    {
      id: 'finance',
      label: 'Tài chính',
      icon: ArrowLeftRight,
      hasSub: true,
      subItems: [
        { label: 'Tra cứu công nợ & học phí', view: 'tuition' },
        { label: 'Lịch sử giao dịch', view: 'tuition' }
      ]
    },
    {
      id: 'docs',
      label: 'Văn bản',
      icon: FileText,
      hasSub: true,
      subItems: [
        { label: 'Quy chế & Quy định', view: 'home' },
        { label: 'Biểu mẫu sinh viên', action: () => alert("Tải xuống biểu mẫu sinh viên") }
      ]
    }
  ];

  return (
    <aside 
      className={`bg-[#142f56] text-slate-100 flex-shrink-0 transition-all duration-300 ease-in-out z-30 select-none ${
        isOpen ? 'w-64' : 'w-16'
      } border-r border-[#1e4175] min-h-[calc(100vh-4rem)] flex flex-col`}
    >
      <div className="py-3 flex-1 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.view && !item.hasSub;
            const isSubExpanded = expandedMenus[item.id];

            return (
              <li key={item.id}>
                <div
                  onClick={() => {
                    if (item.hasSub) {
                      toggleSubmenu(item.id);
                    } else if (item.action) {
                      item.action();
                    } else if (item.view) {
                      onNavigate(item.view);
                    }
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-xs font-medium transition ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow' 
                      : 'hover:bg-white/10 text-slate-200 hover:text-white'
                  }`}
                  title={!isOpen ? item.label : undefined}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 flex-shrink-0 text-slate-300" />
                    {isOpen && (
                      <span className="truncate">{item.label}</span>
                    )}
                  </div>

                  {isOpen && item.hasSub && (
                    <span className="text-slate-400">
                      {isSubExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </span>
                  )}
                </div>

                {/* Submenu */}
                {isOpen && item.hasSub && isSubExpanded && (
                  <ul className="pl-9 pr-2 py-1 space-y-1 bg-[#0f2340]/40 rounded-lg my-1">
                    {item.subItems.map((sub, sIdx) => (
                      <li key={sIdx}>
                        <button
                          onClick={() => {
                            if (sub.action) sub.action();
                            else if (sub.view) onNavigate(sub.view);
                          }}
                          className="w-full text-left py-1.5 px-2.5 rounded text-[11px] text-slate-300 hover:text-white hover:bg-white/10 transition truncate"
                        >
                          {sub.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {isOpen && (
        <div className="p-4 border-t border-[#1e4175] text-[10px] text-slate-400 text-center">
          <div>UTT Student Portal</div>
          <div className="text-slate-500">Phiên bản 2026.1</div>
        </div>
      )}
    </aside>
  );
}
