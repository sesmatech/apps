# QR Code Pro - منصة مولد الرمز الشريطي الاحترافية

منصة متكاملة لتوليد وتصميم الرموز الشريطية (QR Codes) مع واجهة احترافية وتصميم حديث.

---

## 🎯 ما الجديد؟

تم تحديث المشروع لاستخدام **Tailwind CSS CLI** بدلاً من Tailwind CDN:
- ✅ **أداء أفضل**: تقليل حجم ملف CSS من 80KB إلى 15-20KB فقط
- ✅ **أمان أعلى**: لا استخدام لـ CDN في الإنتاج
- ✅ **تطوير أسرع**: Purging غير مستخدمة
- ✅ **سهولة التخصيص**: تكامل كامل مع Tailwind

---

## 📋 المتطلبات

- **Node.js** (الإصدار 14 فما فوق)
- **npm** أو **yarn**

---

## 🚀 خطوات البدء

### 1️⃣ استنساخ المستودع
```bash
git clone https://github.com/sesmatech/apps.git
cd apps
```

### 2️⃣ تثبيت المكتبات
```bash
npm install
```

هذا سيثبت:
- `tailwindcss` - إطار عمل Tailwind CSS
- `postcss` - معالج CSS
- `autoprefixer` - إضافة بادئات المتصفحات تلقائياً

### 3️⃣ تشغيل وضع التطوير
```bash
npm run dev
```

هذا الأمر:
- يراقب ملف `src/input.css`
- ينشئ ملف `dist/output.css` تلقائياً مع كل تغيير
- يحتفظ بجميع أنماط Tailwind المستخدمة فقط

### 4️⃣ البناء للإنتاج
```bash
npm run build
```

هذا الأمر:
- ينشئ ملف CSS مصغر (minified)
- يزيل جميع الأنماط غير المستخدمة
- يقلل الحجم الكلي بشكل كبير

---

## 📁 هيكل المشروع

```
apps/
├── index.html              # الملف الرئيسي للتطبيق
├── src/
│   └── input.css          # ملف CSS المصدر مع Tailwind directives
├── dist/
│   └── output.css         # ملف CSS المُجمّع (ينشأ تلقائياً)
├── libs/                  # مكتبات محلية (QR Code library)
├── package.json           # تبعيات المشروع
├── tailwind.config.js     # إعدادات Tailwind
├── postcss.config.js      # إعدادات PostCSS
└── README.md              # هذا الملف
```

---

## 📝 التعديلات الرئيسية

### قبل (استخدام CDN):
```html
<script src="https://cdn.tailwindcss.com"></script>
```

### بعد (استخدام CLI):
```html
<link rel="stylesheet" href="./dist/output.css">
```

---

## ⚙️ إعدادات Tailwind

يتم التحكم في إعدادات Tailwind من خلال ملف `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#990000',      // الأحمر القاني
        secondary: '#808000',    // الزيتوني
        // ... المزيد من الألوان
      },
    },
  },
}
```

---

## 🛠️ المهام المتاحة

| الأمر | الوصف |
|-------|-------|
| `npm run dev` | تشغيل وضع التطوير مع المراقبة |
| `npm run build` | بناء الملف النهائي المصغر |

---

## 📚 موارد إضافية

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [PostCSS Documentation](https://postcss.org/)
- [QR Code Library](https://davidshimjs.github.io/qrcodejs/)

---

## 📄 الترخيص

هذا المشروع مرخص تحت الرخصة GPL-3.0. اطلع على ملف LICENSE لمزيد من التفاصيل.

---

## 👤 المؤلف

**sesmatech** - منصة QR Code Pro الاحترافية

---

## 💡 نصائح مهمة

### أثناء التطوير:
- اترك `npm run dev` قيد التشغيل في terminal منفصل
- سيتم تحديث `dist/output.css` تلقائياً عند تعديل أي ملف

### قبل النشر:
```bash
npm run build
```
- تأكد من تشغيل أمر البناء قبل رفع التغييرات للإنتاج
- ملف `dist/output.css` سيكون مصغراً وأصغر حجماً

### حول مكتبة QR Code:
- ضع ملف `qrcode.min.js` في مجلد `./libs/`
- يمكنك تنزيله من: https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js
- التطبيق سيحاول تحميله محلياً أولاً، ثم من CDN كبديل

---

## 🐛 استكشاف الأخطاء

### المشكلة: ملف CSS لم يتم إنشاؤه
**الحل**: تأكد من تشغيل `npm run dev` وأن `src/input.css` موجود

### المشكلة: Tailwind classes لا تعمل
**الحل**: 
1. تحقق من أن `index.html` يحتوي على: `<link rel="stylesheet" href="./dist/output.css">`
2. أعد تشغيل `npm run dev`

### المشكلة: QR Code library لم تحمل
**الحل**: 
1. انسخ `qrcode.min.js` إلى مجلد `libs/`
2. اضغط على زر "إعادة المحاولة" في رسالة الخطأ

---

**آخر تحديث**: 2026-09-04 ✨
