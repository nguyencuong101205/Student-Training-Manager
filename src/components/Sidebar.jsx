import React, { useEffect, useState } from 'react';
import { 
  Home, 
  Newspaper, 
  User, 
  Boxes, 
  CalendarDays, 
  Wallet, 
  FileText, 
  X, 
  Sparkles, 
  LogOut, 
  Search, 
  ChevronDown,
  ChevronsRight,
  Grid
} from 'lucide-react';
import { mockUser } from '../data/mockData';

export default function Sidebar({ isOpen, onClose, currentView, onNavigate, onLogout, onOpenAppeal }) {
  const [filterQuery, setFilterQuery] = useState('');
  
  // Track open state of submenus (Default open for Góc học tập & Đăng ký học to match screenshots)
  const [openSections, setOpenSections] = useState({
    profile: false,
    learning: true,
    registration: true,
    schedule: false,
    finance: false,
    docs: false
  });

  const toggleSection = (id) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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

  // Handle scroll lock safely without causing layout shift
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Exact menu categories matching user screenshots
  const menuList = [
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
      view: 'one-stop'
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
        { label: 'Đổi mật khẩu', action: () => alert("Chức năng đổi mật khẩu sinh viên") }
      ]
    },
    {
      id: 'learning',
      label: 'Góc học tập',
      icon: Boxes, // 3-cube blocks icon matching Image 1
      hasSub: true,
      subItems: [
        { label: 'Tra cứu điểm', view: 'grades' },
        { label: 'Chương trình học', view: 'profile' },
        { 
          label: 'Đăng ký xin phúc khảo', 
          highlight: true, // Orange text & dot as shown in screenshot 1
          action: () => {
            onClose();
            if (onOpenAppeal) onOpenAppeal();
          }
        },
        { label: 'Công nhận điểm', action: () => alert("Công nhận điểm tương đương / chuyển đổi tín chỉ") },
        { label: 'Xét tốt nghiệp', action: () => alert("Tra cứu tiến độ & điều kiện xét tốt nghiệp") }
      ]
    },
    {
      id: 'registration',
      label: 'Đăng ký học',
      isBadgeR: true, // Circle R badge matching Image 2
      hasSub: true,
      subItems: [
        { label: 'Đăng ký', view: 'registration' },
        { label: 'Nguyện vọng', action: () => alert("Đăng ký nguyện vọng mở lớp học phần") },
        { label: 'Tra cứu kết quả đăng ký', view: 'registration' },
        { label: 'Đăng ký định hướng ĐT', action: () => alert("Đăng ký chuyên ngành định hướng") },
        { label: 'Đăng ký thi lại', action: () => alert("Đăng ký thi lại học phần chưa đạt") }
      ]
    },
    {
      id: 'schedule',
      label: 'Thời khóa biểu',
      icon: CalendarDays,
      hasSub: true,
      subItems: [
        { label: 'Thời khóa biểu tuần', view: 'schedule' },
        { label: 'Lịch thi học kỳ', view: 'exam-schedule' }
      ]
    },
    {
      id: 'finance',
      label: 'Tài chính',
      icon: Wallet,
      hasSub: true,
      subItems: [
        { label: 'Tra cứu học phí & công nợ', view: 'tuition' },
        { label: 'Lịch sử giao dịch', view: 'tuition' }
      ]
    },
    {
      id: 'docs',
      label: 'Văn bản',
      icon: FileText,
      hasSub: true,
      subItems: [
        { label: 'Quy chế đào tạo', view: 'home' },
        { label: 'Biểu mẫu sinh viên', action: () => alert("Tải xuống biểu mẫu sinh viên UTT") }
      ]
    }
  ];

  const handleSubClick = (sub) => {
    if (sub.action) {
      sub.action();
    } else if (sub.view) {
      onNavigate(sub.view);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex animate-fadeIn">
      {/* Blurred Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#07152b]/60 backdrop-blur-md transition-all cursor-pointer"
        aria-hidden="true"
      />

      {/* Slide-out Menu Panel with UTT Navy Theme */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-[#162f59] text-slate-100 h-full shadow-2xl flex flex-col z-10 border-r border-[#20457e] animate-slideRight overflow-hidden">
        
        {/* Drawer Header */}
        <div className="px-6 py-4.5 bg-[#102344] text-white flex items-center justify-between shadow-md border-b border-[#20457e] flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Grid className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="font-extrabold text-sm text-white uppercase tracking-wider block">
                DANH MỤC HỆ THỐNG
              </span>
              <span className="text-[10px] text-blue-200">Cổng thông tin đào tạo sinh viên</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition active:scale-95"
            title="Đóng menu (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Search */}
        <div className="p-3.5 px-5 bg-[#12284c] border-b border-[#20457e] flex-shrink-0">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-blue-300 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Tìm nhanh mục chức năng..."
              className="w-full pl-9 pr-3 py-2 bg-[#1b3a6c] border border-blue-400/20 rounded-xl text-xs text-white placeholder-blue-300/60 focus:outline-none focus:ring-1 focus:ring-amber-400 shadow-inner"
            />
          </div>
        </div>

        {/* Menu Navigation Items with Tree Timeline Structure */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 select-none">
          {menuList.map((item) => {
            const Icon = item.icon;
            const isOpenSection = openSections[item.id];
            const isActive = currentView === item.view && !item.hasSub;

            return (
              <div key={item.id} className="space-y-0.5">
                {/* Parent Item */}
                <button
                  onClick={() => {
                    if (item.hasSub) {
                      toggleSection(item.id);
                    } else if (item.action) {
                      item.action();
                    } else if (item.view) {
                      onNavigate(item.view);
                      onClose();
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Icon or Circle R Badge */}
                    {item.isBadgeR ? (
                      <div className="w-6 h-6 rounded-full bg-white text-[#162f59] flex items-center justify-center font-black text-xs shadow-xs">
                        R
                      </div>
                    ) : (
                      <Icon className="w-5 h-5 text-blue-300" />
                    )}
                    <span className="text-xs sm:text-[13px] font-bold">{item.label}</span>
                  </div>

                  {item.hasSub && (
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isOpenSection ? 'rotate-180 text-amber-400' : ''
                    }`} />
                  )}
                </button>

                {/* Submenu with Tree Timeline Line & Circular Dots matching screenshots */}
                {item.hasSub && isOpenSection && (
                  <div className="relative pl-6 ml-4 my-1 border-l-2 border-blue-400/40 space-y-1 py-1">
                    {item.subItems.map((sub, sIdx) => {
                      const isSubActive = currentView === sub.view || sub.highlight;

                      return (
                        <div
                          key={sIdx}
                          onClick={() => handleSubClick(sub)}
                          className="group relative flex items-center gap-3 py-1.5 px-2 rounded-lg cursor-pointer transition"
                        >
                          {/* Circular Dot on the vertical line */}
                          <div className={`absolute -left-[31px] w-2.5 h-2.5 rounded-full transition-all border-2 border-[#162f59] ${
                            isSubActive 
                              ? 'bg-[#f97316] ring-2 ring-orange-500/30 scale-125' 
                              : 'bg-[#5b83ca] group-hover:bg-[#f97316]'
                          }`} />

                          {/* Subitem text */}
                          <span className={`text-xs font-medium transition ${
                            isSubActive 
                              ? 'text-[#f97316] font-bold' 
                              : 'text-slate-200 group-hover:text-amber-300'
                          }`}>
                            {sub.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom User Card */}
        <div className="p-4 bg-[#102344] border-t border-[#20457e] flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 font-black flex items-center justify-center text-xs shadow-sm">
              {mockUser.name.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate">
                {mockUser.name}
              </p>
              <p className="text-[10px] text-amber-300 font-mono">
                {mockUser.id} • {mockUser.className}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="px-3 py-1.5 rounded-xl text-rose-300 hover:text-white hover:bg-rose-500/20 border border-rose-400/30 text-xs font-bold flex items-center gap-1.5 transition active:scale-95"
            title="Đăng xuất"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Đăng xuất</span>
          </button>
        </div>

      </div>
    </div>
  );
}
