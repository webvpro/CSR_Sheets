<script setup>
import { ref, reactive, watch, computed } from "vue";
import ItemCard from "@/components/ListCards/ItemCard.vue";
const props = defineProps({
  itemDetail: { type: Object, default: () => {} },
});
const detail = ref(props.itemDetail);
</script>
<template>
  <item-card />
</template>
