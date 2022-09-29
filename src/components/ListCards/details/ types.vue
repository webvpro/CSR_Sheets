<script setup>
import { computed } from "vue";
const props = defineProps({
  itemData: { default: () => {}, type: Object },
});
const emit = defineEmits(["editItem", "copyItem"]);
const cardType = computed(() => props.itemType);
</script>

<template>
  <div class="content">
    <h3 class="inline-block capitalize">{{ itemData.abilityType }}</h3>
    <h3 class="inline-block capitalize">
      {{ itemData.costPool }} ({{ itemData.poolPoints }})
    </h3>
    <h3 class="inline-block capitalize">{{ itemData.abilityType }}</h3>
    <h3 class="inline-block capitalize">
      Tier: {{ itemData.costPool }} ({{ itemData.poolPoints }})
    </h3>
  </div>
</template>
