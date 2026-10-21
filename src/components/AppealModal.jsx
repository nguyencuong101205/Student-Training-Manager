import React, { useState } from 'react';
import { X, Send, AlertCircle, CheckCircle2, FileText, Clock } from 'lucide-react';
import { mockAppeals } from '../data/mockData';

export default function AppealModal({ isOpen, onClose }) {
  const [appeals, setAppeals] = useState(mockAppeals);
  const [subject, setSubject] = useState('Mạng máy tính (INT204)');
  const [currentGrade, setCurrentGrade] = useState('7.9');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reason.trim()) return;

    const newAppeal = {
      id: `PCK-00${appeals.length + 1}`,
      subject,
      examDate: "15/10/2026",
      currentGrade,
      reason,
      status: "Đã tiếp nhận",
      date: new Date().toLocaleDateString('vi-VN')
    };

    setAppeals([newAppeal, ...appeals]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setReason('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="bg-[#12315a] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Đăng ký xin phúc khảo bài thi</h3>
              <p className="text-[10px] text-blue-200">Phòng Khảo thí & Đảm bảo chất lượng giáo dục</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-white/10 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form and list */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide">
              Gửi đơn phúc khảo mới
            </h4>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Chọn môn học cần phúc khảo:
              </label>
              <select 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="Mạng máy tính (INT204)">Mạng máy tính (INT204) - Điểm thi: 7.9</option>
                <option value="Lập trình hướng đối tượng (INT202)">Lập trình hướng đối tượng (INT202) - Điểm thi: 8.2</option>
                <option value="Xác suất thống kê (MAT102)">Xác suất thống kê (MAT102) - Điểm thi: 8.8</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Lý do đề nghị phúc khảo:
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
                placeholder="Nêu rõ câu hỏi, phần bài thi hoặc lý do bạn đề nghị chấm lại..."
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-slate-500">Lệ phí phúc khảo: <strong>50.000 đ / bài</strong></span>
              <button
                type="submit"
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl flex items-center gap-1.5 transition shadow-sm active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Gửi đơn phúc khảo</span>
              </button>
            </div>

            {submitted && (
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Đơn phúc khảo đã được gửi thành công đến Phòng Khảo thí!
              </div>
            )}
          </form>

          {/* History */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide">
              Lịch sử đơn phúc khảo đã gửi
            </h4>

            <div className="space-y-2">
              {appeals.map((item) => (
                <div key={item.id} className="p-3 bg-white border border-slate-200 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{item.subject}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px]">{item.reason}</p>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                    <span>Mã đơn: {item.id}</span>
                    <span>Ngày gửi: {item.date}</span>
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
