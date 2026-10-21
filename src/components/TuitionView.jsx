import React from 'react';
import { Wallet, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { mockTuition } from '../data/mockData';

export default function TuitionView() {
  const formatMoney = (val) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Wallet className="w-6 h-6 text-emerald-600" />
            Tra cứu công nợ & học phí sinh viên
          </h2>
          <p className="text-xs text-slate-500 mt-1">Thông tin chi tiết học phí theo từng học kỳ</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-xs flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Không nợ học phí
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700 uppercase tracking-wider font-semibold border-b">
              <th className="py-3 px-4">Mã hóa đơn</th>
              <th className="py-3 px-4">Nội dung thu</th>
              <th className="py-3 px-4 text-center">Số tín chỉ</th>
              <th className="py-3 px-4 text-right">Số tiền phải nộp</th>
              <th className="py-3 px-4 text-right">Đã thanh toán</th>
              <th className="py-3 px-4 text-center">Trạng thái</th>
              <th className="py-3 px-4">Ngày giao dịch</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {mockTuition.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition">
                <td className="py-3.5 px-4 font-mono font-medium text-blue-700">{item.code}</td>
                <td className="py-3.5 px-4 font-medium text-slate-900">{item.title}</td>
                <td className="py-3.5 px-4 text-center">{item.credits}</td>
                <td className="py-3.5 px-4 text-right font-semibold text-slate-900">{formatMoney(item.amount)}</td>
                <td className="py-3.5 px-4 text-right font-semibold text-emerald-600">{formatMoney(item.paid)}</td>
                <td className="py-3.5 px-4 text-center">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-medium text-[11px]">
                    {item.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-slate-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
