<script setup>
import { ref, computed, } from "vue";
const props = defineProps({
  poolData: { type: Object, default: () => {} },
  recoveryData: { type: Object, default: () => {} },
  poolKey: { type: String, default: "" },
});
const pool = ref(props.poolData[props.poolKey.toLowerCase()]);
</script>
<template>
  <h1>{{ poolKey }} Pool</h1>
</template>
