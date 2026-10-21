import React, { useState } from 'react';
import { Pin, Calendar, ChevronRight, Clock, AlertCircle, Bookmark, Tag, CheckCircle2 } from 'lucide-react';
import { mockTrainingNews, mockSchoolNews, mockStudentActivities } from '../data/mockData';

export default function NewsSection({ onSelectArticle, searchQuery = '' }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllTraining, setShowAllTraining] = useState(false);
  const [showAllSchool, setShowAllSchool] = useState(false);

  const categories = [
    { id: 'all', label: 'Tất cả thông báo' },
    { id: 'Đào tạo', label: 'Đào tạo' },
    { id: 'Học bổng', label: 'Học bổng' },
    { id: 'Học vụ', label: 'Học vụ & Tín chỉ' },
    { id: 'Sự kiện', label: 'Sự kiện' }
  ];

  // Upcoming academic milestones
  const upcomingDeadlines = [
    {
      title: "Mở cổng đăng ký học kỳ phụ - Đợt 9.1",
      date: "22/10 - 25/10/2026",
      urgent: true,
      tag: "Tín chỉ"
    },
    {
      title: "Hạn chót nộp hồ sơ miễn giảm học phí HK1",
      date: "30/10/2026",
      urgent: false,
      tag: "Học phí"
    },
    {
      title: "Vòng chung kết Cuộc thi Tài năng trẻ Logistics",
      date: "28/10/2026",
      urgent: false,
      tag: "Cuộc thi"
    },
    {
      title: "Thi đánh giá năng lực học phần giữa kỳ 1",
      date: "15/11/2026",
      urgent: false,
      tag: "Kỳ thi"
    }
  ];

  // Filter based on search query & category
  const filterList = (list) => {
    let result = list;
    if (activeCategory !== 'all') {
      result = result.filter(item => item.category === activeCategory);
    }
    if (searchQuery) {
      result = result.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return result;
  };

  const trainingNews = filterList(mockTrainingNews);
  const schoolNews = filterList(mockSchoolNews);
  const studentActivities = filterList(mockStudentActivities);

  return (
    <div className="space-y-6">
      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition shadow-xs ${
              activeCategory === cat.id
                ? 'bg-[#102a4d] text-white shadow'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Column 1: TIN ĐÀO TẠO (Span 7) */}
        <div className="lg:col-span-7 bg-white rounded-3xl shadow-xs border border-slate-200/90 p-5 sm:p-6 flex flex-col">
          {/* Section Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-5 bg-blue-600 rounded-full"></div>
              <h3 className="font-extrabold text-slate-900 tracking-wide text-sm uppercase">
                TIN ĐÀO TẠO & HỌC BỔNG
              </h3>
            </div>
            <button
              onClick={() => setShowAllTraining(!showAllTraining)}
              className="text-xs font-semibold px-3 py-1 rounded-full text-blue-600 hover:bg-blue-50 border border-blue-200 transition"
            >
              {showAllTraining ? "Thu gọn" : "Xem tất cả"}
            </button>
          </div>

          {/* News Items List */}
          <div className="divide-y divide-slate-100 flex-1">
            {trainingNews.slice(0, showAllTraining ? undefined : 8).map((news) => (
              <div
                key={news.id}
                onClick={() => onSelectArticle(news)}
                className="py-3 px-2 hover:bg-slate-50 rounded-2xl transition cursor-pointer group flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Pin className="w-3.5 h-3.5 rotate-45" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">
                      {news.category || "Thông báo"}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                  <h4 className="text-xs md:text-[13px] font-bold text-slate-800 group-hover:text-blue-700 transition leading-snug line-clamp-2">
                    {news.title}
                  </h4>
                </div>
              </div>
            ))}

            {trainingNews.length === 0 && (
              <div className="py-10 text-center text-xs text-slate-400">
                Không tìm thấy thông báo phù hợp
              </div>
            )}
          </div>
        </div>

        {/* Column 2: TIN NHÀ TRƯỜNG & HẠN HỌC VỤ (Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          {/* SỰ KIỆN & HẠN HỌC VỤ SẮP TỚI */}
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xs border border-slate-200/90 p-5 sm:p-6">
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/80 mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500" />
                <h3 className="font-extrabold text-slate-900 tracking-wide text-xs uppercase">
                  SỰ KIỆN & HẠN HỌC VỤ SẮP TỚI
                </h3>
              </div>
              <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                Học kỳ 1
              </span>
            </div>

            <div className="space-y-2.5">
              {upcomingDeadlines.map((item, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-amber-400 transition flex items-start justify-between gap-3 shadow-2xs">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {item.tag}
                    </span>
                    <p className="text-xs font-bold text-slate-800 leading-snug">
                      {item.title}
                    </p>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  {item.urgent && (
                    <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                      Sắp hết hạn
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* TIN NHÀ TRƯỜNG */}
          <div className="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-5 sm:p-6 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-5 bg-amber-500 rounded-full"></div>
                <h3 className="font-extrabold text-slate-900 tracking-wide text-sm uppercase">
                  TIN NHÀ TRƯỜNG
                </h3>
              </div>
              <button
                onClick={() => setShowAllSchool(!showAllSchool)}
                className="text-xs font-semibold px-3 py-1 rounded-full text-blue-600 hover:bg-blue-50 border border-blue-200 transition"
              >
                {showAllSchool ? "Thu gọn" : "Xem tất cả"}
              </button>
            </div>

            <div className="divide-y divide-slate-100 flex-1">
              {schoolNews.slice(0, showAllSchool ? undefined : 4).map((news) => (
                <div
                  key={news.id}
                  onClick={() => onSelectArticle(news)}
                  className="py-3 px-2 hover:bg-slate-50 rounded-2xl transition cursor-pointer group flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:text-slate-950 transition">
                    <Pin className="w-3.5 h-3.5 rotate-45" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3" />
                      <span>{news.date}</span>
                    </div>
                    <h4 className="text-xs md:text-[13px] font-bold text-slate-800 group-hover:text-blue-700 transition leading-snug line-clamp-2">
                      {news.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HOẠT ĐỘNG SINH VIÊN */}
          <div className="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-5 sm:p-6 flex flex-col">
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-5 bg-emerald-600 rounded-full"></div>
                <h3 className="font-extrabold text-slate-900 tracking-wide text-xs uppercase">
                  HOẠT ĐỘNG PHONG TRÀO SINH VIÊN
                </h3>
              </div>
              <button
                onClick={() => alert("Xem tất cả phong trào thanh niên & tình nguyện")}
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Xem tất cả
              </button>
            </div>

            <div className="divide-y divide-slate-100 flex-1">
              {studentActivities.map((act) => (
                <div
                  key={act.id}
                  onClick={() => onSelectArticle(act)}
                  className="py-3 px-2 hover:bg-slate-50 rounded-2xl transition cursor-pointer group flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition">
                    <Pin className="w-3.5 h-3.5 rotate-45" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3" />
                      <span>{act.date}</span>
                    </div>
                    <h4 className="text-xs md:text-[13px] font-bold text-slate-800 group-hover:text-blue-700 transition leading-snug line-clamp-2">
                      {act.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
