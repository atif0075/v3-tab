<script setup>
import v3Tab from "../../src/components/v3-tab.vue";
// import v3Tab from "v3-tab";
</script>
<template>
  <v3-tab :tabHead="['Tab One', 'Tab2', 'Tab Three']" :slotMode="true">
    <template #Tab_One> This is tab one added by slot </template>
    <template #Tab2> This is tab two added by slot</template>
    <template #Tab_Three> This is tab three added by slot</template>
  </v3-tab>
</template>
<style>
/* reseting buttons */
button {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
}

:root {
  --dark-bg-zinc-900: #272a2f; /* Dark mode background color */
  --dark-border-zinc-700: #31313a; /* Dark mode border color */
  --dark-text-zinc-200: #ccc; /* Dark mode text color */
}

/* .tabList */
.tabList {
  padding: 0.75rem;
  display: flex;
  gap: 0.25rem;
  background-color: #f3f4f6;
  border-radius: 8px;
  overflow-x: auto;
}
.dark .tabList {
  background-color: var(--dark-bg-zinc-900);
}

/* .tabListButton */
.tabListButton {
  font-weight: normal;
  white-space: nowrap;
  outline: none;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 0.3125rem;
  line-height: 1.25rem;
  outline: none;
}
.dark .tabListButton {
  color: var(--dark-text-zinc-200);
}

/* .tabListButtonSelected */
.tabListButtonSelected {
  background-color: #aee4fd;
  color: #0b74dd;
  outline: none;
}
.dark .tabListButtonSelected {
  background-color: var(--dark-border-zinc-700);
  color: #aee4fd;
  outline: none;
}

/* .tabListButtonUnSelected */
.tabListButtonUnSelected {
  color: black;
}

/* .tabPanelContainer */
.tabPanelContainer {
  margin-top: 0.5rem;
  height: auto;
  width: 100%;
  overflow: auto;
}

/* .tabPanel */
.tabPanel {
  padding: 0.75rem;
  background: #f3f4f6;
  border-radius: 8px;
}
.dark .tabPanel {
  background: var(--dark-bg-zinc-900);
}
</style>
