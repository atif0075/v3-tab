# Props

The following props are available on the `<v3-tab>` component. If you don't provide any props (except `tabHead`/`tabData`), the component will render a tabbed interface with three tabs. The first tab will be selected by default.

## `tabHead` <Badge text="required" type="danger"/>

The `tabHead` prop is an array of strings that represent the headings of the tabs. The number of items in the array will determine the number of tabs that are rendered. The first item in the array will be the heading of the first tab, the second item will be the heading of the second tab, and so on.

```vue
<template>
  <v3-tab :tabHead="['Tab1 Heading', 'Tab2 Heading', 'Tab3 Heading']" />
</template>
```

## `tabData` <Badge text="required" type="danger"/>

The `tabData` prop is an array of strings that represent the content of the tabs. The number of items in the array will determine the number of tabs that are rendered. The first item in the array will be the content of the first tab, the second item will be the content of the second tab, and so on.

```vue
<template>
  <v3-tab
    :tabHead="['Tab1 Heading', 'Tab2 Heading', 'Tab3 Heading']"
    :tabData="['Tab1 Content', 'Tab2 Content', 'Tab3 Content']"
  />
</template>
```

## `insertHtml` <Badge text="optional" type="tip"/>

The `insertHtml` prop is a boolean that determines whether or not the content of the tabs should be rendered as HTML. If set to `true`, the content of the tabs will be rendered as HTML. If set to `false`, the content of the tabs will be rendered as plain text. The default value is `false`.

```vue
<template>
  <v3-tab
    :tabHead="['Tab1 Heading', 'Tab2 Heading', 'Tab3 Heading']"
    :tabData="[
      '<strong>Tab1 Content</strong>',
      '<strong>Tab2 Content</strong>',
      '<strong>Tab3 Content</strong>',
    ]"
    :insertHtml="true"
  />
</template>
```

## `componentMode` <Badge text="optional" type="tip"/>

The `componentMode` prop is a boolean that determines whether or not the content of the tabs should be rendered as Vue components. If set to `true`, you can pass in a Vue component as the content of the tabs. If set to `false`, the content of the tabs will be rendered as plain text. The default value is `false`.

```vue
<script>
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";
</script>
<template>
  <v3-tab
    :tabHead="['One', 'Two', 'Three']"
    :tabData="[Tab1, Tab2, Tab3]"
    :componentMode="true"
  />
</template>
```

## slotMode <Badge text="optional" type="tip"/>

The `slotMode` prop is a boolean that determines whether or not the content of the tabs should be rendered as Vue slots. If set to `true`, you can pass in a Vue slot as the content of the tabs. The default value is `false`.

```vue
<template>
  <v3-tab :tabHead="['Tab One', 'Tab2', 'Tab Three']" :slotMode="true">
    <template #Tab_One> This is tab one </template>
    <template #Tab2> This is tab two </template>
    <template #Tab_Three> This is tab three </template>
  </v3-tab>
</template>
```

## `rememberTab` <Badge text="optional" type="tip"/>

The `rememberTab` prop is a boolean that determines whether or not the selected tab should be remembered on page reload. If set to `true`, the selected tab will be remembered. If set to `false`, the selected tab will not be remembered. The default value is `false`.

```vue
<template>
  <v3-tab
    :tabHead="['Tab1 Heading', 'Tab2 Heading', 'Tab3 Heading']"
    :tabData="['Tab1 Content', 'Tab2 Content', 'Tab3 Content']"
    :rememberTab="true"
  />
</template>
```

## `selectedTab` <Badge text="optional" type="tip"/>

The `selectedTab` prop is a number that represents the selected tab. The value of this prop should be index of the tab that you want to select. If this prop is not provided, the first tab will be selected by default. The default value is `0`.

```vue
<template>
  <v3-tab
    :tabHead="['Tab1 Heading', 'Tab2 Heading', 'Tab3 Heading']"
    :tabData="['Tab1 Content', 'Tab2 Content', 'Tab3 Content']"
    :selectedTab="2"
  />
</template>
```
