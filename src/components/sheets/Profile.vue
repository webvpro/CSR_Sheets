<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  profileData: { type: Object, default: () => {} },
});
const descriptorLabel = ref(
  props.profileData.descriptor.alias !== ""
    ? props.profileData.descriptor.alias + ", "
    : props.profileData.descriptor.label + ", "
);
const subLabels = ref(
  props.profileData.descriptor.subs.map((e) => e.label).join(", ") + ", "
);
const typeLabel = ref(
  props.profileData.type.alias !== ""
    ? props.profileData.type.alias + " "
    : props.profileData.type.label + " "
);
const advancementSteps = ref(props.profileData.advancement);
</script>

<template>
  <div
    class="col-span-12 shadow-xl xl:col-span-6 card md:card-side bg-base-100"
  >
    <figure>
      <img
        class="object-fill w-full h-full border border-primary"
        src="/assets/images/ProfPthePortrait.png"
        alt="Album"
      />
    </figure>
    <div class="container mx-auto card-body">
      <h2 class="w-full text-2xl text-center text-ellipsis card-title">
        {{ profileData.name }}
      </h2>
      <p class="text-lg">
        <span>Is a, </span><span class="descriptor">{{ descriptorLabel }}</span
        ><span class="sub-descriptor">{{ subLabels }}</span
        ><span class="type-alias">{{ typeLabel }}</span
        >who<span class="focus"> Makes Magical Objects</span>
      </p>
      <div class="justify-around card-actions">
        <div class="flex flex-col items-center justify-center">
          <span class="pb-1 text-base font-semibold">Tier</span>
          <div class="w-12 h-12 text-xl btn-sm md:btn-xl btn btn-circle">
            <span class="">{{ profileData.tier }}</span>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <span class="pb-1 text-base font-semibold">Effort</span>
          <div class="w-12 h-12 text-xl btn-sm md:btn-xl btn btn-circle">
            <span class="">{{ profileData.effort }}</span>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <span class="pb-1 text-base font-semibold">XP</span>
          <div class="w-12 h-12 text-xl btn-sm md:btn-xl btn btn-circle">
            <span class="">{{ profileData.xp }}</span>
          </div>
        </div>
      </div>
      <div class="justify-around card-actions"></div>
      <div class="m-auto card-actions">
        <label class="text-lg font-semibold">Advancement</label>
        <ul class="w-full steps">
          <li
            data-content="★"
            :class="['step', advancementSteps[0] ? 'step-primary' : '']"
          >
            {{ advancementSteps[0]?.label ? advancementSteps[0]?.label : "" }}
          </li>
          <li
            data-content="★"
            :class="['step', advancementSteps[1] ? 'step-primary' : '']"
          >
            {{ advancementSteps[1]?.label ? advancementSteps[1]?.label : "" }}
          </li>
          <li
            data-content="★"
            :class="['step', advancementSteps[2] ? 'step-primary' : '']"
          >
            {{ advancementSteps[2]?.label ? advancementSteps[2]?.label : "" }}
          </li>
          <li
            data-content="★"
            :class="['step', advancementSteps[3] ? 'step-primary' : '']"
          >
            {{ advancementSteps[3]?.label ? advancementSteps[3]?.label : "" }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
