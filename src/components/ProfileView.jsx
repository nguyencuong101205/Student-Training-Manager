import React from 'react';
import { User, Mail, Phone, BookOpen, Award, CheckCircle, Shield } from 'lucide-react';
import { mockUser } from '../data/mockData';

export default function ProfileView() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-200">
        <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-blue-100 overflow-hidden flex items-center justify-center text-slate-500 shadow-md">
          <User className="w-14 h-14 text-slate-400" />
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <h2 className="text-2xl font-bold text-slate-900">{mockUser.name}</h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
              {mockUser.status}
            </span>
          </div>
          <p className="text-sm text-slate-600 font-medium">Mã sinh viên: <strong className="text-blue-700">{mockUser.id}</strong></p>
          <p className="text-xs text-slate-500">Lớp: {mockUser.className} • Khóa: {mockUser.academicYear}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Thông tin chương trình đào tạo
          </h3>
          <div className="bg-slate-50 rounded-xl p-4 space-y-3 text-xs border border-slate-200">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Khoa / Viện:</span>
              <span className="font-semibold text-slate-800">{mockUser.faculty}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Ngành đào tạo:</span>
              <span className="font-semibold text-slate-800">{mockUser.major}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Hệ đào tạo:</span>
              <span className="font-semibold text-slate-800">Chính quy (Kỹ sư 4.5 năm)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Cố vấn học tập:</span>
              <span className="font-semibold text-slate-800">TS. Hoàng Quốc Bảo</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            Kết quả học tập tích lũy
          </h3>
          <div className="bg-slate-50 rounded-xl p-4 space-y-3 text-xs border border-slate-200">
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Điểm trung bình tích lũy (Hệ 4):</span>
              <span className="font-bold text-blue-700 text-sm">{mockUser.gpa} / 4.0</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Tín chỉ đã tích lũy:</span>
              <span className="font-bold text-slate-800 text-sm">{mockUser.creditsAccumulated} / 150</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200">
              <span className="text-slate-500">Xếp loại học lực hiện tại:</span>
              <span className="font-semibold text-emerald-700">Giỏi</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Điểm rèn luyện kỳ gần nhất:</span>
              <span className="font-semibold text-slate-800">92 (Xuất sắc)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
