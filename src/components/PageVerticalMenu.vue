<template v-for="(item, idx) in navItems" :key="idx">
  <li :class="[item?.subs ? 'menu-title' : '']">
    <span v-if="item?.subs">{{ item.label }}</span>
    <a v-else href="item.href">{{ item.label }}</a>
  </li>
  <template v-if="item?.subs">
    <li v-for="(sub, i) in item.subs" :key="`${idx}-${i}`">
      <a href="sub.href">{{ sub.label }}</a>
    </li>
  </template>
</template>
<script setup>
const props = defineProps({
  navItems: {
    type: Array,
    default: new Array(),
  },
});
</script>
