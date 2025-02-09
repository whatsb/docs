export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },

    primary: 'emerald',
    neutral: 'slate'
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-(--ui-border)',
        left: 'text-sm text-(--ui-text-muted)'
      }
    }
  },
  seo: {
    siteName: 'WhatsBox.io Documentation'
  },
  header: {
    title: 'WhatsBox Docs',
    to: '/',
    logo: {
      alt: 'WhatsBox',
      light: '/wb-icon-color-bg-transparent-256.png',
      dark: '/wb-icon-color-bg-transparent-256.png'
    },
    search: true,
    colorMode: true,
    links: []
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}, All rights reserved. A Tracious product.`,
    colorMode: false,
    links: [{
      label: 'WhatsBox.io',
      to: 'https://www.whatsbox.io',
      target: '_blank'
    }, {
      label: 'WebApp',
      to: 'https://app.whatsbox.io',
      target: '_blank'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {}
  }
})
