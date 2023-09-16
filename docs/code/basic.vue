<script setup>
import v3Tab from "../../src/components/v3-tab.vue";
</script>
<template>
  <v3Tab
    :tabHead="['Tab 1', 'Tab 2', 'Tab 3']"
    :tabData="['Tab 1', 'Tab 2', 'Tab 3']"
  />
</template>
<style>
/* reseting buttons */
button {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
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
}
.dark .tabListButton {
  color: var(--dark-text-zinc-200);
}

/* .tabListButtonSelected */
.tabListButtonSelected {
  background-color: #aee4fd;
  color: #0b74dd;
}
.dark .tabListButtonSelected {
  background-color: var(--dark-border-zinc-700);
  color: #aee4fd;
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
