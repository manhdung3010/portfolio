# 📧 Hướng dẫn setup EmailJS cho Contact Form

## 🚀 Bước 1: Tạo tài khoản EmailJS
1. Truy cập [https://www.emailjs.com/](https://www.emailjs.com/)
2. Đăng ký tài khoản miễn phí (100 emails/tháng)
3. Xác nhận email

## 🔧 Bước 2: Cấu hình Email Service
1. Vào **Email Services** > **Add New Service**
2. Chọn **Gmail** (hoặc email provider bạn muốn)
3. Kết nối với Gmail account của bạn
4. Lưu lại **Service ID**

## 📝 Bước 3: Tạo Email Template
1. Vào **Email Templates** > **Create New Template**
2. Thiết lập template như sau:

### Template Settings:
- **Template Name**: `portfolio_contact_form`
- **Subject**: `New Contact from {{from_name}} - {{subject}}`

### Template Content:
```html
Bạn có tin nhắn mới từ portfolio website!

Từ: {{from_name}}
Email: {{from_email}}
Chủ đề: {{subject}}

Nội dung:
{{message}}

---
Gửi từ Portfolio Contact Form
```

3. Lưu lại **Template ID**

## 🔑 Bước 4: Lấy Public Key
1. Vào **Account** > **General**
2. Copy **Public Key**

## 🛠️ Bước 5: Cập nhật Environment Variables
1. Mở file `.env.local` (đã được tạo sẵn)
2. Thay đổi các giá trị:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

**Lưu ý:** Code đã được cập nhật để tự động đọc từ environment variables, bạn không cần sửa code nữa!

## ✅ Bước 6: Test thử
1. Chạy `npm run dev`
2. Điền form contact và gửi thử
3. Kiểm tra email của bạn

## 🔒 Bước 7: Bảo mật (Optional)
Để tăng bảo mật, bạn có thể:
1. Tạo file `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Cập nhật code:
```typescript
const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
```

## 🎯 Lưu ý
- EmailJS free plan: 200 emails/tháng
- Emails sẽ được gửi đến email bạn đã kết nối
- Template có thể customize theo ý muốn
- Có thể thêm auto-reply cho người gửi

---

## 🔄 Các tùy chọn khác nếu không muốn dùng EmailJS:

### 1. **Formspree** (Đơn giản)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

### 2. **Netlify Forms** (Nếu deploy trên Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

### 3. **Next.js API Route + Nodemailer**
Tạo file `src/app/api/contact/route.ts` để xử lý server-side.
