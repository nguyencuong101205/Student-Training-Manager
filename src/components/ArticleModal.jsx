import React from 'react';
import { X, Calendar, Tag, Share2, Printer, Bookmark } from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200">
        <div className="bg-[#102a4d] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              {article.category || 'Thông báo đào tạo'}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
            {article.title}
          </h2>

          <div className="flex items-center justify-between border-b pb-3 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Ngày đăng: {article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="hover:text-blue-600 flex items-center gap-1">
                <Bookmark className="w-3.5 h-3.5" /> Lưu tin
              </button>
              <button className="hover:text-blue-600 flex items-center gap-1" onClick={() => window.print()}>
                <Printer className="w-3.5 h-3.5" /> In
              </button>
            </div>
          </div>

          <div className="text-sm text-slate-700 leading-relaxed space-y-3">
            <p className="font-medium text-slate-800">
              {article.content}
            </p>
            <p>
              Nhà trường yêu cầu các đơn vị trực thuộc, Ban Chủ nhiệm các Khoa, Cố vấn học tập và toàn thể sinh viên có liên quan theo dõi sát sao tiến độ và thực hiện đúng các quy định hiện hành.
            </p>
            <p>
              Mọi thắc mắc vui lòng liên hệ trực tiếp Bộ phận Một cửa (Phòng 102 - Nhà H1, Cơ sở Hà Nội) hoặc gửi phản ánh qua email phongdaotao@utt.edu.vn.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 bg-slate-50 -mx-6 -mb-6 p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Phòng Đào tạo - Trường Đại học Công nghệ Giao thông Vận tải</span>
              <button 
                onClick={onClose}
                className="px-4 py-2 bg-[#102a4d] hover:bg-[#1a3f6f] text-white text-xs font-semibold rounded-lg transition"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
