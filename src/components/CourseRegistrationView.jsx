import React, { useState } from 'react';
import { BookOpen, Check, Plus, AlertCircle, Search, Info } from 'lucide-react';

export default function CourseRegistrationView() {
  const [courses, setCourses] = useState([
    { id: "INT301", name: "Lập trình Web nâng cao", credits: 3, teacher: "TS. Trần Văn Nam", slots: "45/50", schedule: "Thứ 2 (07:00 - 09:15)", registered: true },
    { id: "INT302", name: "Cơ sở dữ liệu phân tán", credits: 3, teacher: "ThS. Lê Thị Mai", slots: "48/50", schedule: "Thứ 2 (09:30 - 11:45)", registered: true },
    { id: "INT303", name: "Trí tuệ nhân tạo & Học máy", credits: 4, teacher: "PGS.TS. Nguyễn Hoàng", slots: "50/50", schedule: "Thứ 3 (13:00 - 16:15)", registered: true },
    { id: "INT304", name: "Kiến trúc hệ thống phần mềm", credits: 3, teacher: "ThS. Phạm Tuấn Anh", slots: "42/50", schedule: "Thứ 4 (07:00 - 10:15)", registered: false },
    { id: "INT305", name: "An toàn và bảo mật hệ thống", credits: 3, teacher: "TS. Đặng Minh Tuấn", slots: "35/50", schedule: "Thứ 5 (08:00 - 10:15)", registered: false },
    { id: "INT306", name: "Điện toán đám mây (Cloud Computing)", credits: 3, teacher: "ThS. Vũ Hải Đăng", slots: "40/50", schedule: "Thứ 6 (13:00 - 15:15)", registered: false }
  ]);

  const [courseSearch, setCourseSearch] = useState('');

  const toggleRegister = (id) => {
    setCourses(courses.map(c => c.id === id ? { ...c, registered: !c.registered } : c));
  };

  const totalRegisteredCredits = courses.filter(c => c.registered).reduce((acc, c) => acc + c.credits, 0);

  const filteredCourses = courses.filter(c => 
    c.name.toLowerCase().includes(courseSearch.toLowerCase()) ||
    c.id.toLowerCase().includes(courseSearch.toLowerCase())
  );

  return (
    <div className="bg-white rounded-3xl shadow-xs border border-slate-200/90 p-6 sm:p-7 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Đăng ký học phần - Học kỳ 1 (Năm học 2026 - 2027)
          </h2>
          <p className="text-xs text-slate-500 mt-1">Đợt đăng ký tín chỉ chuyên ngành Công nghệ thông tin • Giới hạn: 12 - 24 tín chỉ</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 px-4 py-2.5 rounded-2xl flex items-center gap-3">
          <div>
            <span className="text-[10px] text-slate-500 uppercase font-bold block leading-none">Đã đăng ký</span>
            <strong className="text-blue-700 text-base font-black">{totalRegisteredCredits} / 24 TC</strong>
          </div>
          <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-300 rounded-full" 
              style={{ width: `${(totalRegisteredCredits / 24) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-amber-50/70 border border-amber-200 p-3.5 px-4 rounded-2xl text-xs text-amber-900 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <p>
          Thời gian mở đăng ký tín chỉ đợt bổ sung: từ <strong>08:00 ngày 22/10</strong> đến <strong>17:00 ngày 25/10/2026</strong>. Sinh viên kiểm tra kỹ thời khóa biểu để tránh trùng lịch học.
        </p>
      </div>

      <div className="max-w-md">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={courseSearch}
            onChange={(e) => setCourseSearch(e.target.value)}
            placeholder="Tìm theo mã môn hoặc tên học phần..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      <div className="overflow-x-auto custom-light-scroll rounded-2xl border border-slate-200">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700 uppercase tracking-wider font-extrabold border-b text-[11px]">
              <th className="py-3.5 px-4">Mã môn</th>
              <th className="py-3.5 px-4">Tên học phần</th>
              <th className="py-3.5 px-4 text-center">Số TC</th>
              <th className="py-3.5 px-4">Lịch học dự kiến</th>
              <th className="py-3.5 px-4">Giảng viên phụ trách</th>
              <th className="py-3.5 px-4 text-center">Sĩ số</th>
              <th className="py-3.5 px-4 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {filteredCourses.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition">
                <td className="py-3.5 px-4 font-mono font-bold text-blue-700">{item.id}</td>
                <td className="py-3.5 px-4 font-bold text-slate-900">{item.name}</td>
                <td className="py-3.5 px-4 text-center font-bold">{item.credits}</td>
                <td className="py-3.5 px-4 text-slate-600">{item.schedule}</td>
                <td className="py-3.5 px-4 text-slate-600">{item.teacher}</td>
                <td className="py-3.5 px-4 text-center font-mono">{item.slots}</td>
                <td className="py-3.5 px-4 text-center">
                  <button
                    onClick={() => toggleRegister(item.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition active:scale-95 ${
                      item.registered
                        ? 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                        : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xs'
                    }`}
                  >
                    {item.registered ? 'Hủy đăng ký' : 'Đăng ký ngay'}
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
