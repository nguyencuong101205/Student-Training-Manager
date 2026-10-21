import React, { useState } from 'react';
import { 
  GraduationCap, 
  CreditCard, 
  Mail, 
  ArrowRight, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Shield, 
  Headphones, 
  CheckCircle,
  HelpCircle,
  CheckCircle2,
  FileCheck2,
  ExternalLink,
  BookOpen,
  Briefcase
} from 'lucide-react';
import StudentLookupModal from '../components/StudentLookupModal';
import PaymentModal from '../components/PaymentModal';

export default function LoginPage({ onLoginSuccess }) {
  const [role, setRole] = useState('student'); // 'student' | 'teacher' | 'applicant'
  const [username, setUsername] = useState('74dcht21272');
  const [password, setPassword] = useState('123456');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Modals
  const [lookupOpen, setLookupOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Vui lòng nhập đầy đủ mã sinh viên và mật khẩu!');
      return;
    }
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onLoginSuccess({
        id: username,
        name: role === 'teacher' ? "TS. Trần Văn Nam" : "Nguyễn Bá Trung Cường"
      });
    }, 350);
  };

  const handleSSO = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess({
        id: "74dcht21272",
        name: "Nguyễn Bá Trung Cường"
      });
    }, 350);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#082a63] via-[#0d3f8f] to-[#061e47] text-slate-800 flex flex-col justify-between relative overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Background Architectural & Academic Watermarks */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] flex items-center justify-center overflow-hidden">
        <svg className="w-[1200px] h-[1200px] text-white" viewBox="0 0 500 500" fill="currentColor">
          <path d="M50 450 H450 V430 H50 Z M80 430 V220 H110 V430 Z M150 430 V220 H180 V430 Z M220 430 V220 H250 V430 Z M290 430 V220 H320 V430 Z M360 430 V220 H390 V430 Z M60 220 L250 120 L440 220 Z M200 120 A50 50 0 0 1 300 120 Z" />
        </svg>
      </div>

      {/* Floating Graduation Cap Watermarks */}
      <div className="absolute top-12 left-10 opacity-10 pointer-events-none hidden md:block">
        <GraduationCap className="w-36 h-36 text-white rotate-[-15deg]" />
      </div>
      <div className="absolute bottom-28 right-8 opacity-10 pointer-events-none hidden md:block">
        <GraduationCap className="w-48 h-48 text-white rotate-[20deg]" />
      </div>

      {/* Top Banner / Header (No Logo) */}
      <header className="relative z-10 pt-6 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 flex items-center gap-2.5 shadow-sm">
            <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase">
              CỔNG ĐÀO TẠO
            </span>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase tracking-wide">
              TRỰC TUYẾN
            </span>
          </div>

          <div className="text-center md:text-right">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase drop-shadow-md">
              CỔNG THÔNG TIN SINH VIÊN & NHẬP HỌC TRỰC TUYẾN
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 font-light mt-1">
              Tân sinh viên hoàn tất các bước nhập học và thanh toán trực tuyến dễ dàng, nhanh chóng
            </p>
          </div>
        </div>
      </header>

      {/* Main Center Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: DÀNH CHO TÂN SINH VIÊN NHẬP HỌC (Span 7) */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/50 relative overflow-hidden">
            {/* Header section with graphic */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#113a72] uppercase tracking-tight">
                    DÀNH CHO TÂN SINH VIÊN NHẬP HỌC
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                  Thí sinh thực hiện nhập học trực tuyến theo 3 bước đơn giản: <br />
                  <span className="font-semibold text-slate-800">
                    Nhập CCCD → Thanh toán phí nhập học → Khai báo thông tin sinh viên
                  </span> để tiếp tục hoàn tất hồ sơ và các bước tiếp theo.
                </p>
              </div>

              {/* Illustration graphic */}
              <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center shadow-inner">
                    <FileCheck2 className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-amber-500 text-white p-1 rounded-md shadow">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Step Pipeline Cards */}
            <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-3 relative">
              {/* Step 1 */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center text-center relative group hover:border-blue-400 hover:bg-blue-50/50 transition">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-2 shadow">
                  1
                </div>
                <div className="w-12 h-10 border border-slate-300 rounded-lg bg-white flex items-center justify-center mb-2 shadow-xs text-blue-600">
                  <User className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xs text-[#113a72] uppercase mb-1">
                  NHẬP CCCD
                </h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Nhập số C.C.C.D/CMND để tra cứu thông tin.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center text-center relative group hover:border-amber-400 hover:bg-amber-50/50 transition">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-2 shadow">
                  2
                </div>
                <div className="w-12 h-10 border border-slate-300 rounded-lg bg-white flex items-center justify-center mb-2 shadow-xs text-amber-500">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xs text-[#113a72] uppercase mb-1">
                  THANH TOÁN PHÍ
                </h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Thanh toán phí nhập học an toàn, nhanh chóng.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center text-center relative group hover:border-emerald-400 hover:bg-emerald-50/50 transition">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-2 shadow">
                  3
                </div>
                <div className="w-12 h-10 border border-slate-300 rounded-lg bg-white flex items-center justify-center mb-2 shadow-xs text-emerald-600">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xs text-[#113a72] uppercase mb-1">
                  NHẬN TÀI KHOẢN & HOÀN TẤT HỒ SƠ
                </h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Nhận tài khoản qua email để đăng nhập và hoàn tất hồ sơ.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => setLookupOpen(true)}
                className="bg-[#1a4f9c] hover:bg-[#143f7f] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-between text-xs tracking-wide shadow-md hover:shadow-lg transition group"
              >
                <div className="flex items-center gap-2 text-left">
                  <User className="w-4 h-4 flex-shrink-0" />
                  <span>THÍ SINH KIỂM TRA CHUYÊN NGÀNH NHẬP HỌC VÀ XÁC NHẬN</span>
                </div>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => setPaymentOpen(true)}
                className="bg-gradient-to-r from-[#f97316] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-between text-xs tracking-wide shadow-md hover:shadow-lg transition group"
              >
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 flex-shrink-0" />
                  <span>THANH TOÁN PHÍ NHẬP HỌC</span>
                </div>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </button>
            </div>
          </div>

          {/* Right Card: ĐĂNG NHẬP (Span 5) */}
          <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col justify-center border border-white/50">
            {/* Top Lock Icon Badge */}
            <div className="flex flex-col items-center mb-5">
              <div className="w-13 h-13 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-inner mb-2.5">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#113a72] uppercase tracking-wide">
                ĐĂNG NHẬP
              </h2>
            </div>

            {/* Role Switcher Tabs */}
            <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl mb-4 text-xs font-semibold text-slate-600">
              <button
                type="button"
                onClick={() => { setRole('student'); setUsername('74dcht21272'); }}
                className={`py-1.5 rounded-lg transition ${
                  role === 'student' ? 'bg-white text-blue-700 shadow-xs font-bold' : 'hover:text-slate-900'
                }`}
              >
                Sinh viên
              </button>
              <button
                type="button"
                onClick={() => { setRole('teacher'); setUsername('gv_tranvannam'); }}
                className={`py-1.5 rounded-lg transition ${
                  role === 'teacher' ? 'bg-white text-blue-700 shadow-xs font-bold' : 'hover:text-slate-900'
                }`}
              >
                Giảng viên
              </button>
              <button
                type="button"
                onClick={() => setLookupOpen(true)}
                className={`py-1.5 rounded-lg transition ${
                  role === 'applicant' ? 'bg-white text-blue-700 shadow-xs font-bold' : 'hover:text-slate-900'
                }`}
              >
                Tân sinh viên
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                {error}
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Mã sinh viên hoặc Tên đăng nhập"
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mật khẩu"
                  className="w-full pl-11 pr-11 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Helper Links & Remember Me */}
              <div className="flex items-center justify-between text-xs pt-1 pb-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600 select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <span>Ghi nhớ đăng nhập</span>
                </label>

                <button
                  type="button"
                  onClick={() => alert("Chức năng khôi phục mật khẩu qua email đã đăng ký.")}
                  className="text-blue-700 hover:text-blue-900 font-medium hover:underline"
                >
                  Quên mật khẩu?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#13498e] hover:bg-[#0e3b75] active:scale-[0.99] text-white font-extrabold uppercase rounded-xl tracking-wider shadow-lg hover:shadow-xl transition disabled:opacity-50 text-sm flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "ĐĂNG NHẬP HỆ THỐNG"
                )}
              </button>

              {/* SSO Button */}
              <button
                type="button"
                onClick={handleSSO}
                className="w-full py-3 bg-[#2563eb] hover:bg-[#1d4ed8] active:scale-[0.99] text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 shadow transition"
              >
                <div className="w-5 h-5 bg-white/20 rounded-md flex items-center justify-center font-bold text-[10px]">
                  SSO
                </div>
                <span>Đăng nhập bằng tài khoản SSO</span>
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Bottom Assurance Bar */}
      <footer className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-6">
        <div className="bg-[#0b2b5c]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 text-white grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-blue-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-xs text-white">Bảo mật tuyệt đối</h5>
              <p className="text-[11px] text-slate-300">Thông tin được bảo mật an toàn tuyệt đối</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-blue-300">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-xs text-white">Thanh toán an toàn</h5>
              <p className="text-[11px] text-slate-300">Hệ thống thanh toán được bảo mật 24/7</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-blue-300">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-xs text-white">Hỗ trợ 24/7</h5>
              <p className="text-[11px] text-slate-300">Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-blue-300">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-xs text-white">Xác nhận nhanh chóng</h5>
              <p className="text-[11px] text-slate-300">Xử lý và xác nhận thông tin nhanh chóng</p>
            </div>
          </div>
        </div>

        {/* Small footer reference link */}
        <div className="mt-2 text-center md:text-left text-[11px] text-blue-300/60 font-mono">
          Cổng thông tin Đào tạo & Tân sinh viên • Hệ thống bảo mật ISO 27001
        </div>
      </footer>

      {/* Interactive Modals */}
      <StudentLookupModal isOpen={lookupOpen} onClose={() => setLookupOpen(false)} />
      <PaymentModal isOpen={paymentOpen} onClose={() => setPaymentOpen(false)} />
    </div>
  );
}
