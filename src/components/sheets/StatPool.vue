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
const poolPercent = ref(
  computed(() => (currentPool.value / totalPool.value) * 100)
);
</script>
<template>
  <div class="justify-center max-w-xs text-center min-w-[2em] stat">
    <div class="mx-auto stat-value">
      <div
        class="radial-progress"
        :class="[`text-${poolColor}`, `text-xs md:text-lg`]"
        :style="`--value: ${poolPercent}`"
      >
        {{ poolCurrent }}
      </div>
    </div>
    <div class="flex justify-around mb-2 text-xs stat-actions md:text-sm">
      <div class="pool-stat" :class="[`text-${poolColor}`]">
        <span class="pb-1">Pool</span>
        <div
          class="bg-white border-2 btn-xs md:btn-sm btn btn-circle"
          :class="[`text-${poolColor}`, `border-${poolColor}`]"
        >
          <span class="">{{ poolTotal }}</span>
        </div>
      </div>
      <div class="pool-stat" :class="[`text-${poolColor}`]">
        <span class="pb-1">Edge</span>
        <div
          class="bg-white border-2 btn-xs md:btn-sm btn btn-circle"
          :class="[`text-${poolColor}`, `border-${poolColor}`]"
        >
          <span class="">{{ poolEdge }}</span>
        </div>
      </div>
    </div>
    <button
      class="max-w-xs gap-2 mx-3 text-white btn"
      :class="[`bg-${poolColor}`]"
    >
      <v-icon :name="poolIcon" scale="2" class="mr-1 text-white" />
      {{ poolLabel }}
    </button>
  </div>
</template>
<style lang="postcss" scoped>
.pool-stat {
  @apply flex flex-col text-sm font-semibold text-center;
}
</style>
