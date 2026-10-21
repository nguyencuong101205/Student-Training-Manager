# Student Training Manager - Cổng Thông Tin Đào Tạo & Nhập Học Trực Tuyến

Dự án tái hiện và nâng cấp giao diện Cổng thông tin sinh viên & Nhập học trực tuyến của Trường Đại học Công nghệ Giao thông Vận tải (UTT), dựa trên giao diện tham khảo: `https://daotao.utt.edu.vn/congthongtin/login.aspx`.

Repository: [https://github.com/nguyencuong101205/Student-Training-Manager](https://github.com/nguyencuong101205/Student-Training-Manager)

---

## 🚀 Tính năng nổi bật

### 1. Trang Đăng nhập & Tân sinh viên (Login Page)
* **Khối Dành cho Tân sinh viên nhập học**:
  * Minh họa quy trình 3 bước chuẩn: Nhập CCCD → Thanh toán phí → Nhận tài khoản & hoàn tất hồ sơ.
  * **Tra cứu chuyên ngành & Xác nhận nhập học**: Tìm kiếm thông tin thí sinh trúng tuyển theo CCCD/CMND.
  * **Cổng thanh toán phí nhập học**: Tích hợp thanh toán quét mã VietQR tự động và chuyển khoản ngân hàng.
* **Khối Đăng nhập sinh viên**:
  * Đăng nhập với tài khoản sinh viên (mặc định: `74dcht21272` / `123456`).
  * Ẩn/hiện mật khẩu trực quan.
  * Tích hợp đăng nhập một chạm qua Single Sign-On (**SSO**).
  * Hỗ trợ chức năng Quên mật khẩu & Hướng dẫn trợ giúp.
* **Thanh cam kết & bảo mật chân trang**:
  * Bảo mật tuyệt đối, Thanh toán an toàn, Hỗ trợ 24/7, Xác nhận nhanh chóng.

### 2. Trang Tổng quan sinh viên (Home / Portal Page)
* **Thanh tiêu đề (Header)**:
  * Logo UTT chuẩn nhận diện thương hiệu.
  * Thanh tìm kiếm thông tin nhanh tức thì (tìm kiếm tin tức, thông báo).
  * Thông tin tài khoản sinh viên (*Nguyễn Bá Trung Cường*) và menu điều hướng nhanh.
* **Menu điều hướng bên trái (Sidebar)**:
  * Thu gọn / mở rộng linh hoạt.
  * Đầy đủ các phân hệ: Trang chủ, Hệ thống một cửa, Tin tức, Profile, Góc học tập, Đăng ký học, Thời khóa biểu, Tài chính, Văn bản.
* **Khối 4 thẻ truy cập nhanh (Quick Cards)**:
  * 📘 **Học tập**: Đăng ký học phần
  * 📅 **Lịch**: Thời khóa biểu tuần
  * 💳 **Tài chính**: Tra cứu công nợ & học phí
  * 📰 **Thông tin**: Tin tức & thông báo đào tạo
* **Khu vực Bảng tin & Thông báo**:
  * Phân chia 2 cột: **TIN ĐÀO TẠO** và **TIN NHÀ TRƯỜNG / HOẠT ĐỘNG SINH VIÊN**.
  * Biểu tượng ghim tin (Pin) và ngày đăng rõ ràng.
  * Bấm vào bất kỳ tin nào để mở cửa sổ xem chi tiết toàn văn thông báo.

---

## 🛠️ Công nghệ sử dụng
* **Frontend Core**: [React 19](https://react.dev/), [Vite 8](https://vitejs.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Icon System**: [Lucide React](https://lucide.dev/)

---

## 💻 Hướng dẫn cài đặt & Khởi chạy

```bash
# 1. Cài đặt các gói thư viện phụ thuộc
npm install

# 2. Khởi chạy môi trường phát triển (Development server)
npm run dev

# 3. Mở trình duyệt tại địa chỉ hiển thị (thường là http://localhost:5173)

# 4. Đóng gói cho production
npm run build
```

---

## 📌 Hướng dẫn đẩy mã nguồn lên GitHub

```bash
# Khởi tạo git và kết nối remote
git init
git add .
git commit -m "feat: init Student-Training-Manager with UTT Login and Home portal UI"
git branch -M main
git remote add origin https://github.com/nguyencuong101205/Student-Training-Manager.git

# Đẩy code lên GitHub
git push -u origin main
```
