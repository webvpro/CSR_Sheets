<script setup>
import { ref, computed } from "vue";
import { computeBbox } from "pdfjs-dist/build/pdf.worker";

const props = defineProps({
  poolTotal: { type: Number, default: 0 },
  poolEdge: { type: Number, default: 0 },
  poolCurrent: { type: Number, default: 0 },
  poolLabel: { type: String, default: "Might" },
  poolColor: { type: String, default: "red-800" },
  poolIcon: { type: String, default: "gi-mighty-force" },
});

const totalPool = ref(props.poolTotal);
const currentPool = ref(props.poolCurrent);
const icon = ref(props.poolIcon);
const baseText = ref(computed(() => `text-${props.poolColor}`));
const baseBg = ref(computed(() => `bg-${props.poolColor}`));
const baseBorder = ref(computed(() => `border-${props.poolColor}`));
const poolPercent = ref(
  computed(() =>
    currentPool.value !== totalPool.value
      ? (currentPool.value / totalPool.value) * 100
      : 100
  )
);
</script>
<template>
  <div class="flex flex-col justify-center flex-grow w-full text-center stat">
    <div class="stat-value">
      <!-- Pool Status Radial
      class="text-xs text-blue-700 radial-progress md:text-lg"
      :class="[
          'text-lg',
          'text-red-700',
          'radial-progress',
          'md:text-xl',
          'bg-white',
          'min-w-fit',
        ]"
       -->
      <div
        class="text-2xl text-primary-content radial-progress bg-primary"
        :style="`--value: ${poolPercent}`"
      >
        {{ currentPool }}
      </div>
    </div>
    <!-- 
      Pool Total
      -->
    <div
      class="flex flex-row flex-grow min-w-full mb-2 text-xs justify-evenly stat-actions md:text-sm"
    >
      <!-- pool stat -->
      <div class="pool-stat">
        <span class="pb-1">Pool</span>
        <div class="pool-number">
          <span :class="[baseText]">{{ poolTotal }}</span>
        </div>
      </div>
      <!-- edge stat -->
      <div :class="[baseText, 'pool-stat']">
        <span class="pb-1">Edge</span>
        <div class="pool-number">
          <span class="">{{ poolEdge }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-around mb-2 text-xs stat-actions md:text-sm">
      <!-- 
      pool action btn
    -->
      <button
        :class="[
          'gap-2',
          'w-11/12',
          'min-h-fit',
          'btn',
          'btn-xl',
          'btn-primary',
          'text-primary-content',
          'hover:text-focus-content',
          'text-xl',
          'md:text-lg',
          'font-semibold',
        ]"
      >
        <v-icon :name="icon" scale="1.66" class="" />
        {{ poolLabel }}
      </button>
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
