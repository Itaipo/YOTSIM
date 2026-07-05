# יוסתים

אפליקציית הכרויות וקהילה חברתית לחוזרים בשאלה. Web app בנוי עם Next.js, TypeScript, Tailwind CSS ו-Prisma.

## מבנה תיקיות

```
src/
  app/
    (auth)/         דפי התחברות והרשמה
      login/
      register/
    (main)/         דפי האפליקציה המרכזיים
      matches/      הכרויות
      community/    קהילה
      messages/     הודעות
      profile/      פרופיל אישי
    api/            API routes
    layout.tsx
    page.tsx        דף הבית
  components/
    layout/         רכיבי מבנה (Navbar וכו')
    ui/             רכיבי UI כלליים
  lib/              קוד עזר (חיבור DB וכו')
  types/            טיפוסי TypeScript משותפים
prisma/
  schema.prisma     סכימת מסד הנתונים
```

## התקנה והרצה

דורש Node.js מותקן.

```bash
npm install
npx prisma generate
npm run dev
```

יש להעתיק `.env.example` ל-`.env` ולהגדיר את `DATABASE_URL`.
