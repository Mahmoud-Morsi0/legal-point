import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const config = {
  // Other Next.js config options can go here
};

export default withNextIntl(config);
