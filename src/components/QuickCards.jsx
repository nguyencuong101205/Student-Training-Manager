import React from 'react';
import { BookOpen, Calendar, Wallet, Newspaper, ChevronRight } from 'lucide-react';

export default function QuickCards({ onNavigate }) {
  const cards = [
    {
      id: 'registration',
      category: 'HỌC TẬP',
      title: 'Đăng ký học',
      icon: BookOpen,
      iconBg: 'bg-[#2563eb]',
      view: 'registration'
    },
    {
      id: 'schedule',
      category: 'LỊCH',
      title: 'Thời khóa biểu',
      icon: Calendar,
      iconBg: 'bg-[#f59e0b]',
      view: 'schedule'
    },
    {
      id: 'tuition',
      category: 'TÀI CHÍNH',
      title: 'Học phí',
      icon: Wallet,
      iconBg: 'bg-[#10b981]',
      view: 'tuition'
    },
    {
      id: 'news',
      category: 'THÔNG TIN',
      title: 'Tin tức & thông báo',
      icon: Newspaper,
      iconBg: 'bg-[#ef4444]',
      view: 'home'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            onClick={() => onNavigate(card.view)}
            className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all duration-200 cursor-pointer flex items-center gap-4 group"
          >
            <div className={`w-13 h-13 rounded-2xl ${card.iconBg} text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
              <Icon className="w-6 h-6" />
            </div>

            <div className="flex flex-col flex-1">
              <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase leading-tight">
                {card.category}
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-800 group-hover:text-blue-700 transition-colors mt-0.5">
                {card.title}
              </span>
            </div>

            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
          </div>
        );
      })}
    </div>
  );
}
