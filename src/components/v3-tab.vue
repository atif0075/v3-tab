<template>
  <div class="w-auto h-auto px-2 sm:px-0">
    <TabGroup :selectedIndex="selectedTab" @change="changeTab">
      <TabList class="tabList">
        <div v-for="tab in tabHead">
          <Tab as="template" v-slot="{ selected }">
            <button
              :class="[
                'tabListButton',
                selected ? 'tabListButtonSelected' : 'tabListButtonUnSelected',
              ]"
            >
              {{ tab }}
            </button>
          </Tab>
        </div>
      </TabList>

      <TabPanels class="tabPanelContainer">
        <div v-if="!slotMode">
          <TabPanel
            v-for="(tab, index) in tabData"
            :key="index"
            class="tabPanel"
          >
            <KeepAlive v-if="componentMode && !insertHtml && !slotMode">
              <component :is="tab"></component>
            </KeepAlive>
            <div v-if="!componentMode && !insertHtml && !slotMode">
              {{ tab }}
            </div>
            <div v-if="insertHtml">
              <span v-html="tab"></span>
            </div>
          </TabPanel>
        </div>
        <div v-else>
          <div v-if="slotMode && !insertHtml">
            <TabPanel
              v-for="(item, index) in tabHead"
              :key="index"
              class="tabPanel"
            >
              <slot :name="item.toString().replaceAll(' ', '_')" />
            </TabPanel>
          </div>
        </div>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { onMounted, ref } from "vue";

const props = defineProps({
  tabHead: {
    type: Array,
    required: true,
  },
  tabData: {
    type: Array,
    required: true,
  },
  insertHtml: {
    type: Boolean,
    default: false,
  },
  componentMode: {
    type: Boolean,
    default: false,
  },
  slotMode: {
    type: Boolean,
    default: false,
  },
  rememberTab: {
    type: Boolean,
    default: false,
  },
  selectedTab: {
    type: Number,
    default: 0,
  },
});
const selectedTab = ref(props.selectedTab);
function changeTab(index) {
  selectedTab.value = index;
  // add query param to url to remember tab on refresh
  if (props.rememberTab) {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", index);
    window.history.replaceState({}, "", url);
  }
}
// remember tab on refresh
onMounted(() => {
  if (props.rememberTab) {
    const url = new URL(window.location.href);
    const tab = url.searchParams.get("tab");
    if (tab) {
      selectedTab.value = parseInt(tab);
    }
  }
});
</script>
<style>
.tabList {
  @apply w-full p-3 rounded border flex space-x-1 dark:bg-zinc-900 dark:border-zinc-700 overflow-x-auto;
}
.tabListButton {
  @apply font-normal whitespace-nowrap outline-0 outline-none transition-all duration-300 ease-in-out cursor-pointer p-3 text-base rounded leading-5;
}
.tabListButtonSelected {
  @apply bg-blue-50 dark:bg-blue-300 hover:bg-blue-100 text-blue-700;
}
.tabListButtonUnSelected {
  @apply text-zinc-900 dark:text-zinc-200;
}
.tabPanelContainer {
  @apply mt-2 border dark:border-zinc-700 h-auto rounded w-full overflow-auto;
}
.tabPanel {
  @apply rounded-xl p-3 bg-white dark:bg-zinc-900/20;
}
</style>
