import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "V3-Tab",
  description: "A Vue 3 Tab Component",
  markdown: {
    lineNumbers: true,
  },
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
});
