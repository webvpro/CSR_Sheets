<!-- eslint-disable vue/no-unused-vars -->
<script setup>
import { reactive } from "vue";
import { useField, useForm, Field } from "vee-validate";
const formInputRefs = reactive({
  tierGroup: {
    LOW: { label: "Low", description: "Tier 1 or 2" },
    MID: { label: "Mid", description: "Tier 3 or 4" },
    HIGH: { label: "High", description: "Tier 5 or 6" },
  },
  pools: {
    MIGHT: { label: "Might" },
    SPEED: { label: "Speed" },
    INTELLECT: { label: "Intellect" },
  },
  abilityTypes: {
    ENABLER: { label: "Enabler" },
    ACTION: { label: "Action" },
  },
  categoryList: {
    ATTACKSKILL: { label: "Attack Skill" },
    COMPANION: { label: "Companion" },
    CONTROL: { label: "Control" },
    CRAFT: { label: "Craft" },
    CURE: { label: "Cure" },
    ENVIRONMENT: { label: "Environment" },
    INFORMATION: { label: "Information" },
    META: { label: "Meta" },
    MOVEMENT: { label: "Movement" },
    PROTECTION: { label: "Protection" },
    SENSES: { label: "Senses" },
    SPECIALATTACK: { label: "Special Attack" },
    SUPPORT: { label: "Support" },
    TASK: { label: "Task" },
    TRANSFORM: { label: "Transform" },
  },
});
</script>
<template>
  <div>
    <div class="w-full max-w-xs form-control">
      <label class="label">
        <span class="label-text">Tier</span>
      </label>
      <select class="select select-bordered">
        <option disabled selected>Pick one</option>
        <option
          v-for="(value, key) in formInputRefs.tierGroup"
          :key="key"
          :value="key"
        >
          {{ value.label }}
        </option>
      </select>
      <label class="label"></label>
    </div>
    <div class="max-w-xs form-control">
      <label class="label">
        <span class="label-text">Usage</span>
      </label>
      <select class="select select-bordered">
        <option disabled selected>Pick one</option>
        <option
          v-for="(value, key) in formInputRefs.abilityTypes"
          :key="key"
          :value="key"
        >
          {{ value.label }}
        </option>
      </select>
      <label class="label"></label>
    </div>
    <div class="flex flex-row">
      <div class="flex-1 form-control">
        <label class="label">
          <span class="label-text">Pool</span>
        </label>
        <select class="select select-bordered">
          <option disabled selected>Pick one</option>
          <option
            v-for="(value, key) in formInputRefs.pools"
            :key="key"
            :value="key"
          >
            {{ value.label }}
          </option>
        </select>
        <label class="label"></label>
      </div>
      <div class="w-1/4 ml-2 form-control">
        <label class="label">
          <span class="label-text">Cost</span>
        </label>
        <Field name="cost" type="number" min="0" class="input input-bordered" />
        <label class="label"></label>
      </div>
    </div>
  </div>
</template>
