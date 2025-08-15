# 🌐 Hệ thống Đa ngôn ngữ (i18n)

Hệ thống đa ngôn ngữ được thiết kế để hỗ trợ tiếng Anh (EN) và tiếng Việt (VI) cho portfolio.

## 📁 Cấu trúc thư mục

```
src/app/locales/
├── en.json          # Bản dịch tiếng Anh
├── vi.json          # Bản dịch tiếng Việt
└── README.md        # Hướng dẫn này
```

## 🚀 Cách sử dụng

### 1. Import hook useLanguage

```tsx
import { useLanguage } from '../../app/contexts/LanguageContext';

export default function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('sections.about.title')}</h1>
      <p>{t('profile.description')}</p>
    </div>
  );
}
```

### 2. Sử dụng function t() để dịch

```tsx
// Dịch đơn giản
t('nav.home')                    // "Home" / "Trang chủ"

// Dịch nested object
t('sections.about.title')        // "About Me" / "Về tôi"
t('sections.contact.subtitle')   // "Let's work together" / "Hãy làm việc cùng nhau"
```

### 3. Chuyển đổi ngôn ngữ

```tsx
const { setLanguage } = useLanguage();

// Chuyển sang tiếng Anh
setLanguage('en');

// Chuyển sang tiếng Việt
setLanguage('vi');
```

## 📝 Cấu trúc JSON

### Navigation
```json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "skills": "Skills",
    "experience": "Experience",
    "projects": "Projects",
    "education": "Education",
    "contact": "Contact"
  }
}
```

### Profile
```json
{
  "profile": {
    "name": "Nguyễn Mạnh Dũng",
    "username": "@manhdung",
    "location": "Based in Hanoi, Vietnam 🇻🇳",
    "available": "Available for work",
    "title": "Fullstack Developer",
    "description": "..."
  }
}
```

### Actions
```json
{
  "actions": {
    "smartTalk": "Smart Talk",
    "viewWork": "View My Work",
    "getInTouch": "Get In Touch",
    "downloadCV": "Download CV",
    "sendMessage": "Send Message"
  }
}
```

### Sections
```json
{
  "sections": {
    "about": {
      "title": "About Me",
      "subtitle": "Get to know me better",
      "description": "..."
    },
    "skills": {
      "title": "Skills & Technologies",
      "subtitle": "What I can do",
      "frontend": "Frontend",
      "backend": "Backend",
      "mobile": "Mobile",
      "tools": "Tools & Others"
    }
  }
}
```

## 🔧 Thêm ngôn ngữ mới

1. Tạo file JSON mới trong `src/app/locales/` (ví dụ: `fr.json`)
2. Cập nhật type `Language` trong `src/app/utils/i18n.ts`:
   ```tsx
   export type Language = 'en' | 'vi' | 'fr';
   ```
3. Import và thêm vào `translations`:
   ```tsx
   import frTranslations from '../locales/fr.json';
   
   export const translations: Record<Language, Translations> = {
     en: enTranslations,
     vi: viTranslations,
     fr: frTranslations,
   };
   ```

## 💡 Best Practices

1. **Sử dụng key có cấu trúc**: `sections.about.title` thay vì `aboutTitle`
2. **Tổ chức theo chức năng**: Nhóm các key liên quan vào cùng object
3. **Sử dụng TypeScript**: Đảm bảo type safety với interface `Translations`
4. **Test đa ngôn ngữ**: Kiểm tra hiển thị đúng với cả hai ngôn ngữ

## 🎯 Tính năng

- ✅ **Auto-detect browser language**
- ✅ **Persistent storage** (localStorage)
- ✅ **Type-safe translations**
- ✅ **Easy to extend**
- ✅ **JSON-based management**
- ✅ **Context-based state management**
