const { withFrameworkConfig } = require('./framework/common/config');

module.exports = withFrameworkConfig({
  framework: {
    // name: 'bigcommerce',
    name: process.env.NEXT_PUBLIC_FRAMEWORK,
    // name: 'shopify',
  },
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
  reactStrictMode: true,
});

console.log('config', JSON.stringify(module.exports, null, 2));
