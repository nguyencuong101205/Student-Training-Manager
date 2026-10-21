import React, { useState } from 'react';
import { Pin, Calendar, ChevronRight } from 'lucide-react';
import { mockTrainingNews, mockSchoolNews, mockStudentActivities } from '../data/mockData';

export default function NewsSection({ onSelectArticle, searchQuery = '' }) {
  const [showAllTraining, setShowAllTraining] = useState(false);
  const [showAllSchool, setShowAllSchool] = useState(false);

  // Filter based on search query
  const filterList = (list) => {
    if (!searchQuery) return list;
    return list.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const trainingNews = filterList(mockTrainingNews);
  const schoolNews = filterList(mockSchoolNews);
  const studentActivities = filterList(mockStudentActivities);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Column 1: TIN ĐÀO TẠO */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 flex flex-col">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-5 bg-blue-600 rounded-full"></div>
            <h3 className="font-bold text-slate-800 tracking-wide text-sm uppercase">
              TIN ĐÀO TẠO
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
              className="py-3 px-1.5 hover:bg-slate-50/80 rounded-xl transition cursor-pointer group flex items-start gap-3"
            >
              <Pin className="w-4 h-4 text-blue-500 fill-blue-500 flex-shrink-0 mt-1 rotate-45 group-hover:scale-110 transition-transform" />
              <div className="flex-1 space-y-1">
                <h4 className="text-xs md:text-[13px] font-semibold text-slate-800 group-hover:text-blue-700 transition leading-snug line-clamp-2">
                  {news.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{news.date}</span>
                </div>
              </div>
            </div>
          ))}

          {trainingNews.length === 0 && (
            <div className="py-8 text-center text-xs text-slate-400">
              Không tìm thấy tin đào tạo phù hợp với từ khóa "{searchQuery}"
            </div>
          )}
        </div>
      </div>

      {/* Column 2: TIN NHÀ TRƯỜNG & HOẠT ĐỘNG SINH VIÊN */}
      <div className="space-y-6">
        {/* TIN NHÀ TRƯỜNG */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 flex flex-col">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-5 bg-blue-600 rounded-full"></div>
              <h3 className="font-bold text-slate-800 tracking-wide text-sm uppercase">
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
            {schoolNews.slice(0, showAllSchool ? undefined : 5).map((news) => (
              <div
                key={news.id}
                onClick={() => onSelectArticle(news)}
                className="py-3 px-1.5 hover:bg-slate-50/80 rounded-xl transition cursor-pointer group flex items-start gap-3"
              >
                <Pin className="w-4 h-4 text-blue-500 fill-blue-500 flex-shrink-0 mt-1 rotate-45 group-hover:scale-110 transition-transform" />
                <div className="flex-1 space-y-1">
                  <h4 className="text-xs md:text-[13px] font-semibold text-slate-800 group-hover:text-blue-700 transition leading-snug line-clamp-2">
                    {news.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{news.date}</span>
                  </div>
                </div>
              </div>
            ))}

            {schoolNews.length === 0 && (
              <div className="py-8 text-center text-xs text-slate-400">
                Không tìm thấy tin nhà trường phù hợp với từ khóa "{searchQuery}"
              </div>
            )}
          </div>
        </div>

        {/* HOẠT ĐỘNG SINH VIÊN */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 flex flex-col">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-5 bg-blue-600 rounded-full"></div>
              <h3 className="font-bold text-slate-800 tracking-wide text-sm uppercase">
                HOẠT ĐỘNG SINH VIÊN
              </h3>
            </div>
            <button
              onClick={() => alert("Xem toàn bộ danh sách hoạt động phong trào thanh niên")}
              className="text-xs font-semibold px-3 py-1 rounded-full text-blue-600 hover:bg-blue-50 border border-blue-200 transition"
            >
              Xem tất cả
            </button>
          </div>

          <div className="divide-y divide-slate-100 flex-1">
            {studentActivities.map((act) => (
              <div
                key={act.id}
                onClick={() => onSelectArticle(act)}
                className="py-3 px-1.5 hover:bg-slate-50/80 rounded-xl transition cursor-pointer group flex items-start gap-3"
              >
                <Pin className="w-4 h-4 text-blue-500 fill-blue-500 flex-shrink-0 mt-1 rotate-45 group-hover:scale-110 transition-transform" />
                <div className="flex-1 space-y-1">
                  <h4 className="text-xs md:text-[13px] font-semibold text-slate-800 group-hover:text-blue-700 transition leading-snug line-clamp-2">
                    {act.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{act.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
