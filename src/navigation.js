import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Us',
      href: getPermalink('/#about-us'),
    },

    {
      text: 'Schedule',
      href: 'https://acmatku.github.io/',
    },
    {
      text: 'Tutoring',
      href: getPermalink('/tutoring'),
    },
  ],
  actions: [{ text: 'Discord', href: 'https://.com/invite/yhRshEnJUB', target: '_blank' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Made with <3 by ACM · All rights reserved.
  `,
};
