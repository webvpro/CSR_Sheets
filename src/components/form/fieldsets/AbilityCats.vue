/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/valid-v-else */
/* This was written to easier to port into resusable checkbox list */
<template>
  <fieldset>
    <legend class="text-lg font-medium text-gray-900">
      {{ fieldsetLegend }}
    </legend>
    <div
      class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
    >
      <div
        v-for="(item, ck, idx) in itemList"
        :key="idx"
        class="relative flex items-start py-4"
      >
        <div class="min-w-0 flex-1 text-sm">
          <label
            :for="`${inputName}[${idx}]`"
            class="font-medium text-gray-700 select-none"
            >{{ item.label }}</label
          >
        </div>
        <div class="ml-3 flex items-center h-5">
          <Field
            :id="`${inputName}[${idx}]`"
            :name="`${inputName}[${idx}]`"
            type="checkbox"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            :value="ck"
          />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { Field } from "vee-validate";
/* Example required list format. This is currently
 * hard coded would like to make this injected or a prop
 */
const categories = {
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
};
export default {
  components: {
    Field,
  },
  props: {
    title: String,
    inputName: String,
  },
  setup(props) {
    const initState = {
      loading: false,
      error: "",
      form: {},
      formSettings: {},
      selectedList: [],
      itemList: categories,
      fieldsetLegend: "",
      inputName: "",
    };

    const state = reactive({ ...initState });
    state.fieldsetLegend = computed(() => props.title);
    state.inputName = computed(() => props.inputName);
    return {
      ...toRefs(state),
      Field,
    };
  },
};
</script>
