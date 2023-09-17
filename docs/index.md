---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: V3-Tab
  text: A Vue 3 Tab Component
  tagline: A Vue 3 Tab Component with a simple API and built on top of <span class='headless'>Headless UI</span>
  image: https://raw.githubusercontent.com/atif0075/v3-tab/eba4043e51e372e966076e9ae400f0d4b74477de/docs/assets/v3-tabs.svg
  actions:
    - theme: brand
      text: Get Started
      link: /guide/installation
    - theme: alt
      text: View on GitHub
      link: https://github.com/atif0075/v3-tab
      external: true

features:
  - title: Simple as 1, 2, 3
    details: The v3-tab component is so simple that you can create a tabbed interface with just three lines of code.
    link: /guide/installation#installation
    linkText: See Installation
  - title: Fully Unstyled
    details: The v3-tab component is fully unstyled so you can create your own design. However, some example styles are provided to get you started.
    link: /usage/styles
    linkText: See Style Guide
  - title: Reusable and Clean
    details: The v3-tab component is reusable and clean. You can achieve a lot with just a few lines of code.
    link: /guide/installation
    linkText: Get Started
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
.headless{
     background:  -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color:  transparent;

}
</style>
