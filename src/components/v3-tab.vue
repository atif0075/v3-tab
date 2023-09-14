<template>
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
        <TabPanel v-for="(tab, index) in tabData" :key="index" class="tabPanel">
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