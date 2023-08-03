const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true
});
module.exports = {
  ...withNextra({
    i18n: {
      locales: ['en', 'zh'],
      defaultLocale: 'en',
    },
    
  }),
  async rewrites() {
    return [
      {
        source: "/items/:path*",
        destination: `http://localhost:8055/items/:path*`,
      },
    ];
  },
};
