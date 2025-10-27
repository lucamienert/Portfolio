import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'ru'],
  defaultLocale: 'de',
  pathnames: {
    '/': '/',
    '/pathnames': {
      de: '/pfadnamen'
    }
  }
})