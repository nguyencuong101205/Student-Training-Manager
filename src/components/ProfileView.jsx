import React from 'react';
import { User, Mail, Phone, BookOpen, Award, CheckCircle, Shield, FileText, Download, Calendar, MapPin } from 'lucide-react';
import { mockUser } from '../data/mockData';

export default function ProfileView() {
  return (
    <div className="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-6 sm:p-8 space-y-7">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#124282] to-[#2563eb] text-white flex items-center justify-center font-black text-3xl shadow-md border-4 border-white ring-2 ring-blue-100">
              {mockUser.name.charAt(0)}
            </div>
            <span className="w-5 h-5 rounded-full bg-emerald-500 border-2 border-white absolute bottom-0 right-0 shadow-xs"></span>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
              <h2 className="text-2xl font-black text-slate-900">{mockUser.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                🟢 {mockUser.status}
              </span>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Mã sinh viên: <strong className="font-mono text-blue-700 font-bold">{mockUser.id}</strong> • Lớp: <span className="text-slate-800 font-bold">{mockUser.className}</span>
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 justify-center sm:justify-start pt-1">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {mockUser.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {mockUser.phone}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => window.print()}
          className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 shadow-2xs transition active:scale-95"
        >
          <Download className="w-4 h-4 text-blue-600" />
          <span>Xuất hồ sơ & Bảng điểm</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            CHƯƠNG TRÌNH ĐÀO TẠO & KHOA
          </h3>
          <div className="bg-slate-50/80 rounded-2xl p-5 space-y-3.5 text-xs border border-slate-200/80">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Khoa phụ trách:</span>
              <span className="font-bold text-slate-800">{mockUser.faculty}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Chuyên ngành:</span>
              <span className="font-bold text-blue-700">{mockUser.major}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Bậc đào tạo:</span>
              <span className="font-bold text-slate-800">Đại học Chính quy (Kỹ sư 4.5 năm)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Khóa tuyển sinh:</span>
              <span className="font-bold text-slate-800">Khóa K74 (2023 - 2027)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Cố vấn học tập:</span>
              <span className="font-bold text-slate-800">TS. Hoàng Quốc Bảo</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            KẾT QUẢ HỌC TẬP TÍCH LŨY
          </h3>
          <div className="bg-slate-50/80 rounded-2xl p-5 space-y-3.5 text-xs border border-slate-200/80">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Điểm trung bình tích lũy (Hệ 4):</span>
              <span className="font-black text-blue-700 text-sm">{mockUser.gpa} / 4.0</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Tín chỉ tích lũy / Tổng số TC:</span>
              <span className="font-black text-slate-800 text-sm">{mockUser.creditsAccumulated} / 150 TC</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Xếp loại học lực hiện tại:</span>
              <span className="font-bold text-emerald-700">Giỏi</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Điểm rèn luyện học kỳ gần nhất:</span>
              <span className="font-bold text-purple-700">92 / 100 (Xuất sắc)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Học bổng khuyến khích:</span>
              <span className="font-bold text-amber-700">Đạt học bổng loại Khá HK2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
