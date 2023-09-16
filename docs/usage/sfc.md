# Single File Component

You can use the `v3-tab` component in your Vue 3 Single File Components (SFCs) like this:

```vue
<script setup>
import v3Tab from "v3-tab";
</script>

<template>
  <v3-tab
    :tabHead="['Tab1 Heading', 'Tab2 Heading', 'Tab3 Heading']"
    :tabData="['Tab1 Content', 'Tab2 Content', 'Tab3 Content']"
  />
</template>
<style>
/* ... */
</style>
```

This will render a tabbed interface with three tabs. The first tab will be selected by default. As you can see, there is nothing too fancy here. The `v3-tab` component is just a wrapper around the `v3-tab-group` and `v3-tab-panel` components from [Headless UI](https://headlessui.dev/) in order to provide a simple API for creating tabbed interfaces.
