import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const config = {
  // Other Next.js config options can go here
};

export default withNextIntl(config);
