import React from 'react';
import { Phone, Mail, MapPin, Globe, ShieldCheck, Heart } from 'lucide-react';

export default function PortalFooter() {
  return (
    <footer className="mt-12 border-t border-slate-200/80 bg-white/70 backdrop-blur-md pt-8 pb-10 text-xs text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-200">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-black text-sm text-slate-900 tracking-wider uppercase">
                CỔNG THÔNG TIN ĐÀO TẠO
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">
                v2026.1
              </span>
            </div>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              Hệ thống quản lý đào tạo, đăng ký tín chỉ và dịch vụ sinh viên trực tuyến một cửa điện tử.
            </p>
            <div className="flex items-center gap-2 text-emerald-700 text-[11px] font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Hệ thống vận hành an toàn 24/7</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              PHÒNG ĐÀO TẠO
            </h4>
            <div className="space-y-1.5 text-[11px] text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>Phòng 102 - Nhà H1, 54 Triều Khúc, Thanh Xuân, Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>(024) 3854 4264 • (024) 3552 6969</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>phongdaotao@utt.edu.vn</span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              DỊCH VỤ SINH VIÊN
            </h4>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• Bộ phận Một cửa - Hỗ trợ thủ tục hành chính</li>
              <li>• Hỗ trợ tài khoản sinh viên & email trường</li>
              <li>• Cố vấn học tập khoa Công nghệ thông tin</li>
              <li>• Tiếp nhận phản ánh & hỗ trợ kỹ thuật trực tuyến</li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              CÁC CƠ SỞ ĐÀO TẠO
            </h4>
            <div className="space-y-1.5 text-[11px] text-slate-500">
              <div><strong>Cơ sở 1:</strong> 54 Triều Khúc, Thanh Xuân, Hà Nội</div>
              <div><strong>Cơ sở 2:</strong> Phường Đồng Tâm, TP. Vĩnh Yên, Vĩnh Phúc</div>
              <div><strong>Cơ sở 3:</strong> Phường Tân Thịnh, TP. Thái Nguyên</div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            Bản quyền © 2026 Cổng thông tin đào tạo sinh viên. Tất cả các quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-blue-600 cursor-pointer">Quy chế đào tạo</span>
            <span className="hover:text-blue-600 cursor-pointer">Chính sách bảo mật</span>
            <span className="hover:text-blue-600 cursor-pointer">Hướng dẫn sử dụng</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
