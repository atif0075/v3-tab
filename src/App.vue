<script setup>
import V3Tab from "./components/v3-tab.vue";
</script>

<template>
  <div class="p-20">
    <V3Tab
      :tab-head="['Add New Admin', 'Existing Admins']"
      :tab-data="['This is Add New Admin', 'This is Existing Admins']"
      :rememberTab="false"
    >
    </V3Tab>
  </div>
</template>
<style></style>
