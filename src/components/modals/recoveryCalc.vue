<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  poolData: { type: Object, default: () => {} },
  recoveryData: { type: Object, default: () => {} },
  poolKey: { type: String, default: "" },
});
const recovery = ref(props.recoveryData);
</script>
<template>
  <h1>Recovery {{ `${recovery.dice}d6+${recovery.mod}` }}</h1>
</template>
