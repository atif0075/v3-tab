<script setup>
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
<template>
  <main class="tabList">
    <div v-for="(item, index) in tabHead" :key="index">
      <button
        @click="changeTab(index)"
        class="tabListButton"
        :class="
          selectedTab === index
            ? 'tabListButtonSelected'
            : 'tabListButtonUnSelected'
        "
      >
        {{ item }}
      </button>
    </div>
  </main>
  <div class="tabPanelContainer">
    <div class="tabPanel" v-if="!slotMode">
      <div
        v-for="(tab, index) in tabData"
        :key="index"
        v-show="index === selectedTab"
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
      </div>
    </div>
    <div v-else>
      <div v-if="slotMode && !insertHtml">
        <div class="tabPanel">
          <div
            v-for="(item, index) in tabHead"
            :key="index"
            v-show="index === selectedTab"
          >
            <slot :name="item.toString().replaceAll(' ', '_')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
