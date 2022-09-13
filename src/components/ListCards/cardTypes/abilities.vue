<script setup>
import { computed } from "vue";
const props = defineProps({
  itemData: { default: () => {}, type: Object },
});
const emit = defineEmits(["editItem", "copyItem"]);
const cardType = computed(() => props.itemType.toLowerCase());
</script>

<template>
  <div class="content">xx
    <h3 class="inline-block">{{ itemData.abilityType }}</h3>
    <h3 class="inline-block">
      {{ itemData.statPool }} ({{ itemData.poolCost }})
    </h3>
  </div>
</template>
