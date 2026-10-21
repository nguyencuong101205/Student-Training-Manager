import React, { useState } from 'react';
import { X, CreditCard, QrCode, Building, CheckCircle } from 'lucide-react';

export default function PaymentModal({ isOpen, onClose }) {
  const [method, setMethod] = useState('qr');
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            <h3 className="font-bold text-base">Cổng thanh toán học phí & lệ phí nhập học</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {step === 1 ? (
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-900 flex justify-between items-center">
                <div>
                  <span className="font-semibold block text-slate-800">Khoản thu: Tạm thu học phí & hồ sơ tân sinh viên</span>
                  <span className="text-slate-500">Mã đơn hàng: UTT-2026-9812</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500">Tổng tiền</span>
                  <div className="text-base font-bold text-orange-600">3.550.000 đ</div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase block mb-2">
                  Chọn phương thức thanh toán
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMethod('qr')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 transition ${
                      method === 'qr'
                        ? 'border-orange-500 bg-orange-50/50 text-orange-700 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <QrCode className="w-6 h-6" />
                    <span className="text-xs font-semibold">VietQR Chuyển khoản</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMethod('bank')}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 transition ${
                      method === 'bank'
                        ? 'border-orange-500 bg-orange-50/50 text-orange-700 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <Building className="w-6 h-6" />
                    <span className="text-xs font-semibold">Thẻ ATM / Internet Banking</span>
                  </button>
                </div>
              </div>

              {method === 'qr' && (
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 flex flex-col items-center text-center">
                  <div className="w-40 h-40 bg-white p-2 border rounded-lg shadow-inner flex items-center justify-center relative">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=2026-UTT-FEE-PAYMENT-3550000"
                      alt="QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-slate-600 mt-2">
                    Mở ứng dụng ngân hàng bất kỳ để quét mã VietQR tự động điền nội dung
                  </p>
                  <div className="text-xs text-slate-500 mt-1 font-mono">
                    Nội dung: <strong>UTT 26001892 NHAPHOC</strong>
                  </div>
                </div>
              )}

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-lg text-sm transition shadow"
                >
                  Xác nhận đã thanh toán
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-lg text-sm transition"
                >
                  Hủy
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">Giao dịch đã được ghi nhận</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Hệ thống đang đối soát dữ liệu ngân hàng tự động. Bạn sẽ nhận được thông báo tài khoản & mật khẩu qua email trong ít phút.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 bg-[#13498e] hover:bg-[#0f3b73] text-white font-bold rounded-lg text-sm transition shadow"
              >
                Hoàn tất
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
