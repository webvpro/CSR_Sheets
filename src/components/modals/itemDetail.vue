<script setup>
import { ref, reactive, watch, computed } from "vue";
import ItemCard from "@/components/ListCards/DetailCard.vue";
const props = defineProps({
  itemDetail: { type: Object, default: () => {} },
  itemType: { type: String, default: "SKILLS" },
});
const detail = ref(props.itemDetail);
const type = ref("SKILLS");

detail.value = {
  id: "X123",
  title: "Geography",
  alias: "Knows the Lands of Nee",
  description: "Knows the lands around Nee",
  pool: "Intellect",
  level: "TRAINED",
  icon: "gi-treasure-map",
};
</script>
<template>
  <item-card :item-type="type" :item-data="detail" />
</template>
