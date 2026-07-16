# WebNova Leads Worker + D1 Database

نام دیتابیس: **webnova-db**
نام پیشنهادی ورکر: **webnova-leads**

## مراحل راه‌اندازی (خیلی ساده)

### 1. ایجاد دیتابیس D1

```bash
wrangler d1 create webnova-db
```

بعد از اجرا، چیزی شبیه این خروجی می‌گیری:
```
✅ Successfully created DB 'webnova-db' in region APAC
Created your new D1 database.

[[d1_databases]]
binding = "webnova_db"
database_name = "webnova-db"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

**database_id** رو کپی کن.

### 2. اجرای اسکیما (ساخت جدول)

```bash
wrangler d1 execute webnova-db --file=./workers/schema.sql
```

### 3. ایجاد ورکر

```bash
wrangler init --yes webnova-leads
cd webnova-leads
```

یا مستقیم از کد آماده استفاده کن (بهتره).

### 4. کپی کردن کد

فایل `workers/webnova-leads.js` رو در پروژه ورکرت کپی کن (یا محتوای آن را جایگزین `src/index.js` کن).

### 5. اتصال دیتابیس به ورکر (مهم‌ترین مرحله)

فایل `wrangler.toml` را این شکلی ویرایش کن:

```toml
name = "webnova-leads"
main = "src/index.js"
compatibility_date = "2024-10-01"

[[d1_databases]]
binding = "webnova_db"
database_name = "webnova-db"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"   # ← از مرحله ۱ کپی کن
```

### 6. دیپلوی کردن

```bash
wrangler deploy
```

بعد از دیپلوی، آدرس ورکر چیزی شبیه این خواهد بود:
```
https://webnova-leads.your-account.workers.dev
```

### 7. به‌روزرسانی فرانت‌اند

در فایل `src/components/ServiceLanding.astro` این خط را آپدیت کن:

```js
const WORKER_URL = 'https://webnova-leads.your-account.workers.dev';
```

### مشاهده لیدها

- **داشبورد زیبا (HTML)**:  
  `https://webnova-leads.your-account.workers.dev`

- **API خام (JSON)**:  
  `https://webnova-leads.your-account.workers.dev/leads`

- **فیلتر بر اساس سرویس**:  
  `https://webnova-leads.your-account.workers.dev/leads?service=ai-landing-page`

---

## نکات مهم

- همه لیدها به صورت کامل ذخیره می‌شوند (تفکیک شده با فیلد `service`).
- داشبورد ساده HTML برای دیدن سریع داده‌ها ساخته شده.
- می‌توانی بعداً authentication اضافه کنی.
- برای پاک کردن دیتابیس: `wrangler d1 execute webnova-db --command="DELETE FROM leads;"`

اگر خواستی Worker را با نام دیگری دیپلوی کنی، فقط `name` در `wrangler.toml` را تغییر بده.