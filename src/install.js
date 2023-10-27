import V3Tab from "./components/v3-tab.vue";
// export { V3Tab };
// export { default as VueToggle } from "./components/VueToggle";
export { default as V3Tab } from "./components/v3-tab.vue";
export default {
  install: (app, options) => {
    app.component("V3Tab", V3Tab);
  },
};
