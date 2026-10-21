import React, { useState } from 'react';
import { X, Search, CheckCircle2, UserCheck, AlertCircle } from 'lucide-react';

export default function StudentLookupModal({ isOpen, onClose }) {
  const [cccd, setCccd] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!cccd.trim()) return;

    setSearched(true);
    // Mock candidate data
    setResult({
      cccd: cccd,
      fullName: "NGUYỄN VĂN AN",
      dob: "12/05/2008",
      candidateId: "26001892",
      major: "Công nghệ thông tin (Mã: 7480201)",
      campus: "Cơ sở Hà Nội - 54 Triều Khúc, Thanh Xuân, Hà Nội",
      status: "Đã trúng tuyển đợt 1",
      admissionFee: "3.550.000 VNĐ",
      paymentStatus: "Chưa thanh toán"
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
        <div className="bg-[#13498e] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base">Tra cứu thông tin & Xác nhận chuyên ngành</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                Nhập số CCCD / CMND hoặc Mã hồ sơ
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={cccd}
                  onChange={(e) => setCccd(e.target.value)}
                  placeholder="Ví dụ: 001205012345..."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[#13498e] hover:bg-[#0f3b73] text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition"
                >
                  <Search className="w-3.5 h-3.5" />
                  Tra cứu
                </button>
              </div>
            </div>
          </form>

          {searched && result && (
            <div className="mt-5 border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm border-b pb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Tìm thấy kết quả trúng tuyển</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div><span className="text-slate-500">Họ và tên:</span> <strong className="text-slate-900 block">{result.fullName}</strong></div>
                <div><span className="text-slate-500">Ngày sinh:</span> <strong className="text-slate-900 block">{result.dob}</strong></div>
                <div><span className="text-slate-500">Số CCCD:</span> <strong className="text-slate-900 block">{result.cccd}</strong></div>
                <div><span className="text-slate-500">Mã thí sinh:</span> <strong className="text-slate-900 block">{result.candidateId}</strong></div>
                <div className="col-span-2"><span className="text-slate-500">Ngành trúng tuyển:</span> <strong className="text-blue-700 block text-xs">{result.major}</strong></div>
                <div className="col-span-2"><span className="text-slate-500">Cơ sở học:</span> <div className="text-slate-800">{result.campus}</div></div>
                <div><span className="text-slate-500">Trạng thái:</span> <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">{result.status}</span></div>
                <div><span className="text-slate-500">Học phí tạm thu:</span> <strong className="text-orange-600 block">{result.admissionFee}</strong></div>
              </div>

              <div className="pt-3 border-t flex gap-2">
                <button
                  type="button"
                  onClick={() => alert("Đã ghi nhận xác nhận nhập học trực tuyến!")}
                  className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-center transition"
                >
                  Xác nhận nhập học
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-lg transition"
                >
                  Đóng
                </button>
              </div>
            </div>
          )}

          {!searched && (
            <div className="mt-4 p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p>
                Tân sinh viên tra cứu bằng số Căn cước công dân đã đăng ký trên cổng Bộ Giáo dục & Đào tạo để kiểm tra thông tin trúng tuyển và tiến hành xác nhận nhập học.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
