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
    links: [null]
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
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
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/v3/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui3.nuxt.dev/getting-started/installation/pro/nuxt',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank'
      }]
    }
  }
})