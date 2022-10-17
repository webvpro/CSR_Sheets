<script setup>
import { ref, computed, inject } from "vue";

const props = defineProps({
  poolData: { type: Object, default: () => {} },
});

const pool = ref(props.poolData);
</script>
<template>
  <div class="flex flex-col justify-center text-center flex-grow">
    <div
      class="radial-progress bg-primary text-primary-content border-4 border-primary mx-auto"
      :style="`--value: ${
        pool?.current >= pool?.total ? 100 : (pool?.current / pool.total) * 100
      }`"
    >
      {{ pool.current }}
    </div>
    <div
      class="flex flex-row flex-grow min-w-full mb-2 text-xs justify-evenly md:text-sm"
    >
      <!-- pool stat -->
      <div class="pool-stat">
        <span class="pb-1">Pool</span>
        <div class="pool-number">
          <span>{{ pool.total }}</span>
        </div>
      </div>
      <!-- edge stat -->
      <div :class="['pool-stat']">
        <span class="pb-1">Edge</span>
        <div class="pool-number">
          <span class="">{{ pool.edge }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss">
.pool-stat {
  @apply flex flex-col justify-center text-lg font-semibold text-center;
}
.pool-number {
  @apply w-12 h-12 text-xl btn-sm md:btn-xl btn btn-circle;
}
</style>
