import React, { useState } from 'react';
import { BookOpen, Check, Plus, AlertCircle } from 'lucide-react';

export default function CourseRegistrationView() {
  const [courses, setCourses] = useState([
    { id: "INT301", name: "Lập trình Web nâng cao", credits: 3, teacher: "TS. Trần Văn Nam", slots: "45/50", registered: true },
    { id: "INT302", name: "Cơ sở dữ liệu phân tán", credits: 3, teacher: "ThS. Lê Thị Mai", slots: "48/50", registered: true },
    { id: "INT303", name: "Trí tuệ nhân tạo & Học máy", credits: 4, teacher: "PGS.TS. Nguyễn Hoàng", slots: "50/50", registered: true },
    { id: "INT304", name: "Kiến trúc hệ thống phần mềm", credits: 3, teacher: "ThS. Phạm Tuấn Anh", slots: "42/50", registered: false },
    { id: "INT305", name: "An toàn và bảo mật hệ thống", credits: 3, teacher: "TS. Đặng Minh Tuấn", slots: "35/50", registered: false },
    { id: "INT306", name: "Điện toán đám mây (Cloud Computing)", credits: 3, teacher: "ThS. Vũ Hải Đăng", slots: "40/50", registered: false }
  ]);

  const toggleRegister = (id) => {
    setCourses(courses.map(c => c.id === id ? { ...c, registered: !c.registered } : c));
  };

  const totalRegisteredCredits = courses.filter(c => c.registered).reduce((acc, c) => acc + c.credits, 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Đăng ký học phần - Học kỳ 1 (2026 - 2027)
          </h2>
          <p className="text-xs text-slate-500 mt-1">Đợt đăng ký tín chỉ chuyên ngành Công nghệ thông tin</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-xl text-xs flex items-center gap-2">
          <span className="text-slate-600">Đã đăng ký:</span>
          <strong className="text-blue-700 text-sm font-bold">{totalRegisteredCredits} tín chỉ</strong>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700 uppercase tracking-wider font-semibold border-b">
              <th className="py-3 px-4">Mã môn</th>
              <th className="py-3 px-4">Tên học phần</th>
              <th className="py-3 px-4 text-center">Số TC</th>
              <th className="py-3 px-4">Giảng viên</th>
              <th className="py-3 px-4 text-center">Sĩ số</th>
              <th className="py-3 px-4 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {courses.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition">
                <td className="py-3.5 px-4 font-mono font-medium text-blue-700">{item.id}</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">{item.name}</td>
                <td className="py-3.5 px-4 text-center">{item.credits}</td>
                <td className="py-3.5 px-4 text-slate-600">{item.teacher}</td>
                <td className="py-3.5 px-4 text-center">{item.slots}</td>
                <td className="py-3.5 px-4 text-center">
                  <button
                    onClick={() => toggleRegister(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 mx-auto transition ${
                      item.registered
                        ? 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                        : 'bg-[#13498e] text-white hover:bg-[#0f3b73]'
                    }`}
                  >
                    {item.registered ? 'Hủy môn' : 'Đăng ký'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
