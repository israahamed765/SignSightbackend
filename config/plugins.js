module.exports = ({ env }) => ({
  // 1. إعدادات الرفع (لحل مشكلة الـ EPERM والـ 500 Error)
  upload: {
    config: {
      // path: config/plugins.js

      breakpoints: {
        large: 1000,
        medium: 750,
        small: 500,
      },
      // تعطيل توليد الأحجام الإضافية يمنع ويندوز من منع حذف الملفات المؤقتة
      responsiveDimensions: false,
    },
  },

  // 2. إعدادات الإيميل (التي كانت لديكِ سابقاً)
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: env("GMAIL_USER"),
          pass: env("GMAIL_PASS"),
        },
      },
      settings: {
        defaultFrom: "SignSight Team <120211325@std.up.edu.ps>",
        defaultReplyTo: "120211325@std.up.edu.ps",
      },
    },
  },
});
