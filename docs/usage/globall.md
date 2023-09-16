# Globall Component

You can use the `v3-tab` component globally in your Vue 3 application like this:

```js
import { createApp } from "vue";
import App from "./App.vue";
import v3Tab from "v3-tab";

const app = createApp(App);

app.use(v3Tab);

app.mount("#app");
```

This will make the `v3-tab` component available globally in your application. You can then use it in your templates like this:

```vue
<template>
  <v3-tab
    :tabHead="['Tab1 Heading', 'Tab2 Heading', 'Tab3 Heading']"
    :tabData="['Tab1 Content', 'Tab2 Content', 'Tab3 Content']"
  />
</template>
```

This will render a tabbed interface with three tabs. The first tab will be selected by default. As you can see, the component is defined globally and can be used in any template without having to import it first.