import React from 'react';
import { BookOpen, Calendar, Wallet, Newspaper } from 'lucide-react';

export default function QuickCards({ onNavigate }) {
  const cards = [
    {
      id: 'registration',
      category: 'HỌC TẬP',
      title: 'Đăng ký học',
      icon: BookOpen,
      iconBg: 'bg-blue-600',
      textColor: 'text-blue-600',
      view: 'registration'
    },
    {
      id: 'schedule',
      category: 'LỊCH',
      title: 'Thời khóa biểu',
      icon: Calendar,
      iconBg: 'bg-amber-500',
      textColor: 'text-amber-500',
      view: 'schedule'
    },
    {
      id: 'tuition',
      category: 'TÀI CHÍNH',
      title: 'Học phí',
      icon: Wallet,
      iconBg: 'bg-emerald-600',
      textColor: 'text-emerald-600',
      view: 'tuition'
    },
    {
      id: 'news',
      category: 'THÔNG TIN',
      title: 'Tin tức & thông báo',
      icon: Newspaper,
      iconBg: 'bg-rose-600',
      textColor: 'text-rose-600',
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
            className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex items-center gap-4 group"
          >
            <div className={`w-13 h-13 rounded-2xl ${card.iconBg} text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                {card.category}
              </span>
              <span className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {card.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
