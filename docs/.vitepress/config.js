import { defineConfig } from "vitepress";
// import { SitemapStream } from "sitemap";
// import { createWriteStream } from "fs";
// import { resolve } from "path";
// let links = [];
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "V3-Tab",
  description: "A Vue 3 Tab Component",
  markdown: {
    lineNumbers: true,
  },
  sitemap: {
    hostname: "https://v3-tab.vercel.app/",
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://raw.githubusercontent.com/atif0075/v3-tab/eba4043e51e372e966076e9ae400f0d4b74477de/docs/assets/v3-tabs.svg",
      },
    ],
    // <meta name="google-site-verification" content="ReoTTcKgUwVb6_Ls2uHpr7AnrGBZq_Gf8k7dvKm_Y3c" />

    [
      "meta",
      {
        name: "google-site-verification",
        content: "ReoTTcKgUwVb6_Ls2uHpr7AnrGBZq_Gf8k7dvKm_Y3c",
      },
    ],
    // SEO
    [
      "meta",
      {
        name: "keywords",
        content:
          "vue3, vue3 tab, vue3 tabs, vue3 tab component, vue3 tabs component, vue3 tab plugin, vue3 tabs plugin, vue3 tab library, vue3 tabs library, vue3 tab example, vue3 tabs example, vue3 tab demo, vue3 tabs demo, vue3 tab tutorial, vue3 tabs tutorial, vue3 tab documentation, vue3 tabs documentation, vue3 tab guide, vue3 tabs guide, vue3 tab how to, vue3 tabs how to, vue3 tab usage, vue3 tabs usage, vue3 tab install, vue3 tabs install, vue3 tab setup, vue3 tabs setup, vue3 tab getting started, vue3 tabs getting started, vue3 tab code, vue3 tabs code, vue3 tab syntax, vue3 tabs syntax, vue3 tab style, vue3 tabs style, vue3 tab css, vue3 tabs css, vue3 tab class, vue3 tabs class, vue3 tab props, vue3 tabs props, vue3 tab api, vue3 tabs api, vue3 tab component api, vue3 tabs component api, vue3 tab component props, vue3 tabs component props, vue3 tab component style, vue3 tabs component style, vue3 tab component css, vue3 tabs component css, vue3 tab component class, vue3 tabs component class",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "A Vue 3 Tab Component with multiple modes, props, slots, and more. A simple, easy to use, and customizable tab component for Vue 3.",
      },
    ],
    [
      "meta",
      {
        name: "og:title",
        content: "V3-Tab",
      },
    ],
    [
      "meta",
      {
        name: "og:description",
        content:
          "A Vue 3 Tab Component with multiple modes, props, slots, and more. A simple, easy to use, and customizable tab component for Vue 3.",
      },
    ],
    [
      "meta",
      {
        name: "og:url",
        content: "https://v3-tab.netlify.app/",
      },
    ],
    [
      "meta",
      {
        name: "og:image",
        content:
          "https://raw.githubusercontent.com/atif0075/v3-tab/eba4043e51e372e966076e9ae400f0d4b74477de/docs/assets/v3-tabs.svg",
      },
    ],
    [
      "meta",
      {
        name: "og:type",
        content: "website",
      },
    ],
    [
      "meta",
      {
        name: "og:locale",
        content: "en_US",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/examples/basic" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [{ text: "Installation", link: "/guide/installation" }],
      },
      {
        text: "Usage",
        collapsed: false,
        items: [
          { text: "Globall Component", link: "/usage/globall" },
          { text: "Single File Component", link: "/usage/sfc" },
          {
            text: "Style Guide",
            link: "/usage/styles",
          },
          {
            text: "Props",
            link: "/usage/props",
          },
        ],
      },
      {
        text: "Examples",
        collapsed: false,
        items: [
          { text: "Basic", link: "/examples/basic" },
          { text: "Remember Tab", link: "/examples/remember-tab" },
          { text: "Component Mode", link: "/examples/component-mode" },
          { text: "Slot Mode", link: "/examples/slot-mode" },
          { text: "Insert HTML", link: "/examples/insert-html" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/atif0075/v3-tab" },
    ],
  },

  // transformHtml: (_, id, { pageData }) => {
  //   if (!/[\\/]404\.html$/.test(id))
  //     links.push({
  //       // you might need to change this if not using clean urls mode
  //       url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2"),
  //       lastmod: pageData.lastUpdated,
  //     });
  // },
  // buildEnd: ({ outDir }) => {
  //   // you need to change hostname to your domain
  //   const sitemap = new SitemapStream({
  //     hostname: "https://v3-tab.vercel.app/",
  //   });
  //   const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
  //   sitemap.pipe(writeStream);
  //   links.forEach((link) => sitemap.write(link));
  //   sitemap.end();
  // },
});
