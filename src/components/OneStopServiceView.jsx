import React, { useState } from 'react';
import { Sparkles, FileText, Send, CheckCircle2, Clock, MapPin, Download, AlertCircle, Plus } from 'lucide-react';
import { mockOneStopRequests } from '../data/mockData';

export default function OneStopServiceView() {
  const [requests, setRequests] = useState(mockOneStopRequests);
  const [selectedService, setSelectedService] = useState('Giấy xác nhận sinh viên');
  const [purpose, setPurpose] = useState('');
  const [copies, setCopies] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    "Giấy xác nhận sinh viên (Làm vé xe buýt, hoãn NVQS)",
    "Giấy xác nhận sinh viên vay vốn Ngân hàng CSXH",
    "Bảng điểm học tập chính thức (Tiếng Việt)",
    "Bảng điểm học tập song ngữ Anh - Việt",
    "Giấy giới thiệu thực tập tốt nghiệp tại doanh nghiệp",
    "Cấp lại thẻ sinh viên bị mất"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!purpose.trim()) return;

    const newReq = {
      id: `MC-2026-0${requests.length + 82}`,
      title: selectedService,
      date: new Date().toLocaleDateString('vi-VN'),
      status: "Đang xử lý",
      readyToPick: false,
      location: "Bộ phận Một cửa - P.102 Nhà H1 (Dự kiến: 2 ngày làm việc)"
    };

    setRequests([newReq, ...requests]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPurpose('');
    }, 2500);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-6 sm:p-7 space-y-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 text-blue-600" />
            Hệ thống Dịch vụ Một cửa Sinh viên Điện tử
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Giải quyết các thủ tục hành chính, cấp giấy tờ xác nhận và văn bằng trực tuyến
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
            P.102 Nhà H1 (Triều Khúc)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
        <div className="lg:col-span-5 bg-slate-50/80 p-5 rounded-3xl border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm uppercase">
            <Plus className="w-4 h-4 text-blue-600" />
            Gửi yêu cầu dịch vụ mới
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Chọn loại thủ tục giấy tờ:
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full p-2.5 bg-white border border-slate-300 rounded-xl font-medium focus:ring-2 focus:ring-blue-500"
              >
                {availableServices.map((s, idx) => (
                  <option key={idx} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Số lượng bản in:
              </label>
              <input
                type="number"
                min={1}
                max={5}
                value={copies}
                onChange={(e) => setCopies(e.target.value)}
                className="w-full p-2 bg-white border border-slate-300 rounded-xl font-bold"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Mục đích sử dụng:
              </label>
              <textarea
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                rows={3}
                placeholder="Ví dụ: Nộp hồ sơ xin việc, vay vốn ngân hàng chính sách, làm thủ tục hoãn NVQS..."
                className="w-full p-2.5 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#13498e] hover:bg-[#0f3b73] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition shadow active:scale-95 text-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Gửi yêu cầu trực tuyến</span>
            </button>

            {submitted && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Yêu cầu đã được tiếp nhận thành công vào hệ thống Một cửa!
              </div>
            )}
          </form>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b">
            <h4 className="font-extrabold text-slate-900 text-sm uppercase">
              Tiến độ xử lý hồ sơ yêu cầu
            </h4>
            <span className="text-xs text-slate-500">Tổng cộng: {requests.length} hồ sơ</span>
          </div>

          <div className="space-y-3">
            {requests.map((item) => (
              <div key={item.id} className="p-4 bg-white border border-slate-200 rounded-2xl space-y-2 hover:shadow-xs transition">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded">
                      {item.id}
                    </span>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                      {item.title}
                    </h5>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    item.status === 'Đã hoàn thành' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : item.status === 'Đã duyệt' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-amber-100 text-amber-800'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100 gap-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> Ngày gửi: {item.date}
                  </span>
                  <span className="flex items-center gap-1 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" /> {item.location}
                  </span>
                  {item.readyToPick && (
                    <button 
                      onClick={() => alert("Tải xuống bản điện tử đã đóng dấu số")}
                      className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 flex items-center gap-1 transition"
                    >
                      <Download className="w-3 h-3" /> Tải bản số
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
