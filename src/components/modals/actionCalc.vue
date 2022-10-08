<script setup>
import { ref, reactive, watch, computed } from "vue";
const props = defineProps({
  poolData: { type: Object, default: () => {} },
  recoveryData: { type: Object, default: () => {} },
  poolKey: { type: String, default: "" },
  targetNum: { type: Number, default: 1 },
  targetMods: { type: Object, default: () => {} },
});
const mods = reactive();
const pool = ref(props.poolData[props.poolKey]);
const modTotal = ref(0);
const pointCost = ref(0);
const targetNumber = ref(props.targetNum);
const targetMax = ref(20);
const targetMin = ref(0);
const targetStep = ref(1);
const targetPreview = ref(0);

targetPreview.value = computed(() => targetNumber.value * 3);

const rangeGoto = (num) => {
  targetNumber.value = num;
};

const finalTarget = ref(0);
finalTarget.value = computed(() =>
  modTotal.value < targetNumber.value > 0
    ? targetNumber.value - modTotal.value
    : 0
);
</script>
<template>
  <h1 class="my-3">Target Number</h1>
  <input
    v-model="targetNumber"
    type="range"
    :min="targetMin"
    :max="targetMax"
    class="range"
    :step="targetStep"
  />
  <div class="flex justify-between w-full px-2 text-xs md:text-lg">
    <span class="no-underline link" @click.prevent="rangeGoto(targetMin)">{{
      targetMin
    }}</span>
    <span class="px-2 no-underline link" @click.prevent="rangeGoto(2)">|</span>
    <span class="no-underline link" @click.prevent="rangeGoto(5)"
      >Challenging</span
    >
    <span class="px-2 no-underline link" @click.prevent="rangeGoto(7)">|</span>
    <span class="no-underline link" @click.prevent="rangeGoto(10)"
      >Impossible</span
    >
    <span class="px-2 no-underline link" @click.prevent="rangeGoto(12)">|</span>
    <span class="no-underline link" @click.prevent="rangeGoto(15)"
      >SuperNatural</span
    >
    <span class="px-2 no-underline link" @click.prevent="rangeGoto(18)">|</span>
    <span class="no-underline link" @click.prevent="rangeGoto(targetMax)">{{
      targetMax
    }}</span>
  </div>
  <div
    class="justify-center my-3 shadow md:flex stats stats-vertical lg:stats-horizontal"
  >
    <div class="stat">
      <div class="stat-figure">
        <v-icon name="fa-minus" class="text-4xl text-primary" scale="2.66" />
      </div>
      <div class="stat-title">Target</div>
      <div class="stat-value">
        <input
          v-model="targetNumber"
          type="number"
          max="20"
          min="0"
          maxlength="2"
          class="w-32 text-4xl input input-ghost"
        />
      </div>
      <div class="text-lg stat-desc">
        {{
          targetNumber == 0
            ? "Auto Success"
            : `Roll ${targetPreview.value} >= on d20`
        }}
      </div>
    </div>

    <div class="stat">
      <div class="stat-figure">
        <v-icon name="fa-equals" class="text-4xl text-primary" scale="2.66" />
      </div>
      <div class="stat-title">Modifactions</div>
      <div class="stat-value">
        <input
          v-model="modTotal"
          type="number"
          max="20"
          min="0"
          maxlength="2"
          class="w-32 text-4xl input input-ghost"
        />
      </div>
      <div tabindex="4" class="p-1 stat-desc">
        Mods Used:
        <div class="badge badge-info">
          <span>Assets(2)</span>
        </div>
      </div>
    </div>

    <div class="stat">
      <div class="stat-title">Roll >= 1d20</div>
      <div class="stat-value">{{ parseInt(finalTarget.value) * 3 }}</div>
      <div class="stat-desc">Target: {{ finalTarget }}</div>
    </div>
  </div>
  <div class="container flex justify-center w-full">
    <ul>
        <li></li>
    </ul>
  </div>
</template>
