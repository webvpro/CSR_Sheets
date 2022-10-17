<script setup>
import { ref, reactive, watch, computed, provide } from "vue";
import MiniStatPool from "../sheets/MiniStatPool.vue";
const props = defineProps({
  poolData: { type: Object, default: () => {} },
  recoveryData: { type: Object, default: () => {} },
  poolKey: { type: String, default: " " },
  targetNum: { type: Number, default: 1 },
  targetMods: { type: Object, default: () => {} },
});
const mods = reactive();
const poolsData = ref(props.poolData);
const poolKey = ref(props.poolKey);
const currentPool = ref({});
currentPool.value = computed(
  () => poolsData.value[poolKey.value.toLowerCase()]
);
const modTotal = ref(0);
const pointCost = ref(0);
const targetNumber = ref(props.targetNum);
const targetMax = ref(20);
const targetMin = ref(0);
const targetStep = ref(1);
const targetPreview = ref(0);

targetPreview.value = computed(() => targetNumber.value * 3);
const switchPool = (pool) => {
  poolKey.value = pool;
};
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
  <div class="flex-1 w-full bg-neutral text-neutral-content">
    <mini-stat-pool :key="poolKey" :pool-data="currentPool" />
  </div>
  <div class="flex justify-center w-full py-2 gap-2">
    <a
      v-for="(pool, key) in poolData"
      :key="`l-${key}`"
      class="btn btn-xs"
      :class="[key == poolKey ? 'btn-primary' : 'btn-secondary']"
      @click.prevent="switchPool(key)"
      ><v-icon :name="pool.icon" scale="1" label="switch" />{{ pool.label }}</a
    >
  </div>
  <input
    v-model="targetNumber"
    type="range"
    :min="targetMin"
    :max="targetMax"
    class="range"
    :step="targetStep"
  />
  <div
    class="container flex flex-row justify-between w-full text-xs text-neutral-content"
  >
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

  <div class="container grid grid-cols-6 gap-2">
    <div class="col-span-6"></div>
    <div
      class="my-3 shadow w-full justify-center text-center stats stats-vertical col-span-2"
    >
      <div class="stat -pl-3 flex-1 flex-col">
        <div class="stat-title text-xs md:text-base">Target</div>
        <div class="stat-value">
          <div class="form-control">
            <label class="input-group input-group-xs">
              <input
                v-model="targetNumber"
                type="number"
                max="20"
                min="0"
                maxlength="2"
                class="w-16 md:w-20 text-sm md-text-2xl input input-ghost"
              /><span class="text-primary bg-transparent text-3xl -pl-10"
                >-</span
              >
            </label>
          </div>
        </div>
      </div>

      <div class="stat flex-1 flex-col justify-start">
        <div class="stat-title text-xs md:text-base">Modifiers</div>
        <div class="stat-value flex flex-row justify-center text-center">
          <div class="form-control">
            <label class="input-group input-group-xs">
              <input
                v-model="modTotal"
                type="number"
                max="20"
                min="0"
                maxlength="2"
                class="w-16 md:w-20 text-sm md-text-2xl input input-ghost"
              /><span class="text-primary bg-transparent text-3xl">=</span>
            </label>
          </div>
        </div>
      </div>

      <div class="stat flex-1 flex-col justify-start">
        <div class="stat-title text-xs md:text-base">
          1d20 > {{ parseInt(finalTarget.value) * 3 }}
        </div>
        <div class="stat-value flex flex-row justify-center text-center">
          <p class="text-sm md-text-3xl px-1">
            {{ finalTarget }}<span class="text-primary"> x </span>3<span
              class="text-primary"
            >
              = </span
            >{{ parseInt(finalTarget.value) * 3 }}
          </p>
        </div>
      </div>
    </div>
    <ul class="col-span-2">
      <li>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">1 Level of Effort</span>
            <input type="checkbox" class="toggle toggle-primary" />
          </label>
          <label class="label cursor-pointer">
            <span class="label-text">2nd Level of Effort</span>
            <input type="checkbox" class="toggle toggle-primary" />
          </label>
          <label class="label cursor-pointer">
            <span class="label-text">Apply Edge</span>
            <input type="checkbox" class="toggle toggle-primary" />
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>
