import React, { useState } from 'react';
import { Pin, Calendar, ExternalLink } from 'lucide-react';
import { mockTrainingNews, mockSchoolNews, mockStudentActivities } from '../data/mockData';

export default function NewsSection({ onSelectArticle, searchQuery = '' }) {
  const [showAllTraining, setShowAllTraining] = useState(false);
  const [showAllSchool, setShowAllSchool] = useState(false);

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 p-5 sm:p-6 flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-5 bg-[#1b5fc1] rounded-full"></div>
            <h3 className="font-extrabold text-[#11325c] tracking-wide text-sm sm:text-base uppercase">
              TIN ĐÀO TẠO
            </h3>
          </div>
          <button
            onClick={() => setShowAllTraining(!showAllTraining)}
            className="text-xs font-semibold px-3.5 py-1 rounded-full text-[#1b5fc1] hover:bg-blue-50 border border-blue-200 transition"
          >
            {showAllTraining ? "Thu gọn" : "Xem tất cả"}
          </button>
        </div>

        <div className="divide-y divide-slate-100 flex-1">
          {trainingNews.slice(0, showAllTraining ? undefined : 8).map((news) => (
            <div
              key={news.id}
              onClick={() => onSelectArticle(news)}
              className="py-3 px-1.5 hover:bg-slate-50/90 rounded-xl transition cursor-pointer group flex items-start gap-3"
            >
              <Pin className="w-4 h-4 text-blue-600 fill-blue-600 flex-shrink-0 mt-1 rotate-45 group-hover:scale-110 transition-transform" />
              <div className="flex-1 space-y-1">
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-blue-700 transition leading-snug line-clamp-2">
                  {news.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
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

      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 p-5 sm:p-6 flex flex-col">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-5 bg-[#1b5fc1] rounded-full"></div>
              <h3 className="font-extrabold text-[#11325c] tracking-wide text-sm sm:text-base uppercase">
                TIN NHÀ TRƯỜNG
              </h3>
            </div>
            <button
              onClick={() => setShowAllSchool(!showAllSchool)}
              className="text-xs font-semibold px-3.5 py-1 rounded-full text-[#1b5fc1] hover:bg-blue-50 border border-blue-200 transition"
            >
              {showAllSchool ? "Thu gọn" : "Xem tất cả"}
            </button>
          </div>

          <div className="divide-y divide-slate-100 flex-1">
            {schoolNews.slice(0, showAllSchool ? undefined : 5).map((news) => (
              <div
                key={news.id}
                onClick={() => onSelectArticle(news)}
                className="py-3 px-1.5 hover:bg-slate-50/90 rounded-xl transition cursor-pointer group flex items-start gap-3"
              >
                <Pin className="w-4 h-4 text-blue-600 fill-blue-600 flex-shrink-0 mt-1 rotate-45 group-hover:scale-110 transition-transform" />
                <div className="flex-1 space-y-1">
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-blue-700 transition leading-snug line-clamp-2">
                    {news.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
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

        <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 p-5 sm:p-6 flex flex-col">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-5 bg-[#1b5fc1] rounded-full"></div>
              <h3 className="font-extrabold text-[#11325c] tracking-wide text-sm sm:text-base uppercase">
                HOẠT ĐỘNG SINH VIÊN
              </h3>
            </div>
            <button
              onClick={() => alert("Xem toàn bộ danh sách hoạt động phong trào thanh niên")}
              className="text-xs font-semibold px-3.5 py-1 rounded-full text-[#1b5fc1] hover:bg-blue-50 border border-blue-200 transition"
            >
              Xem tất cả
            </button>
          </div>

          <div className="divide-y divide-slate-100 flex-1">
            {studentActivities.map((act) => (
              <div
                key={act.id}
                onClick={() => onSelectArticle(act)}
                className="py-3 px-1.5 hover:bg-slate-50/90 rounded-xl transition cursor-pointer group flex items-start gap-3"
              >
                <Pin className="w-4 h-4 text-blue-600 fill-blue-600 flex-shrink-0 mt-1 rotate-45 group-hover:scale-110 transition-transform" />
                <div className="flex-1 space-y-1">
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-blue-700 transition leading-snug line-clamp-2">
                    {act.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
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
