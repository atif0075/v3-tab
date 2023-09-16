# Style Guide

`v3-tab` is completely unstyled. This means that you can create your own design for it. However, some example styles are provided to get you started. You can find them in the `Examples` section of the docs.

<!-- This guide will walk you through the process of creating your own design for `v3-tab`. -->

## Default Classes

The `v3-tab` component comes with some default classes that you can use to style it. These classes are applied to the root element of the component. They are as follows:

```css
/* reseting buttons */
button {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

:root {
  --dark-bg-zinc-900: #18181b; /* Dark mode background color */
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

/* .tabListButtonSelected */
.tabListButtonSelected {
  background-color: #aee4fd;
  color: #0b74dd;
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
```
