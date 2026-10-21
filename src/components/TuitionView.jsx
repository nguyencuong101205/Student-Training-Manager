import React, { useState } from 'react';
import { Wallet, CheckCircle2, Download, QrCode, CreditCard, ShieldCheck } from 'lucide-react';
import { mockTuition } from '../data/mockData';
import PaymentModal from './PaymentModal';

export default function TuitionView() {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const formatMoney = (val) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);

  return (
    <div className="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-6 sm:p-7 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
            <Wallet className="w-6 h-6 text-emerald-600" />
            Tra cứu công nợ & học phí sinh viên
          </h2>
          <p className="text-xs text-slate-500 mt-1">Thông tin chi tiết học phí theo từng học kỳ đào tạo</p>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Không nợ học phí
          </span>
          <button
            onClick={() => setPaymentOpen(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition active:scale-95"
          >
            <QrCode className="w-4 h-4" />
            <span>Nộp học phí VietQR</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Học phí kỳ hiện tại</span>
          <span className="text-lg font-black text-slate-900 mt-1 block">8.450.000 đ</span>
          <span className="text-[11px] text-emerald-600 font-semibold mt-0.5 block">Đã thanh toán 100%</span>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Tổng tích lũy đã nộp</span>
          <span className="text-lg font-black text-blue-700 mt-1 block">25.550.000 đ</span>
          <span className="text-[11px] text-slate-500 mt-0.5 block">Tổng 3 học kỳ tín chỉ</span>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Dư nợ / Công nợ</span>
          <span className="text-lg font-black text-emerald-600 mt-1 block">0 đ</span>
          <span className="text-[11px] text-slate-500 mt-0.5 block">Đủ điều kiện thi học kỳ</span>
        </div>
      </div>

      <div className="overflow-x-auto custom-light-scroll rounded-2xl border border-slate-200">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700 uppercase tracking-wider font-extrabold border-b text-[11px]">
              <th className="py-3.5 px-4">Mã giao dịch</th>
              <th className="py-3.5 px-4">Nội dung học phần / học phí</th>
              <th className="py-3.5 px-4 text-center">Số TC</th>
              <th className="py-3.5 px-4 text-right">Mức thu</th>
              <th className="py-3.5 px-4 text-right">Đã nộp</th>
              <th className="py-3.5 px-4 text-center">Trạng thái</th>
              <th className="py-3.5 px-4 text-center">Biên lai</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {mockTuition.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition">
                <td className="py-3.5 px-4 font-mono font-bold text-blue-700">{item.code}</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">{item.title}</td>
                <td className="py-3.5 px-4 text-center font-bold">{item.credits}</td>
                <td className="py-3.5 px-4 text-right font-bold text-slate-900">{formatMoney(item.amount)}</td>
                <td className="py-3.5 px-4 text-right font-bold text-emerald-600">{formatMoney(item.paid)}</td>
                <td className="py-3.5 px-4 text-center">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                    {item.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-center">
                  <button 
                    onClick={() => alert(`Tải xuống hóa đơn điện tử biên lai: ${item.code}`)}
                    className="p-1.5 rounded-lg hover:bg-slate-200 text-blue-600 transition"
                    title="Tải biên lai thu tiền"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PaymentModal isOpen={paymentOpen} onClose={() => setPaymentOpen(false)} />
    </div>
  );
}
