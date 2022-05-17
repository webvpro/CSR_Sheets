/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/valid-v-else */
/* This was written to easier to port into resusable checkbox list */
<template>
  <fieldset>
    <legend class="text-lg font-medium text-gray-900">
      {{ fieldsetLegend }}
    </legend>
    <button type="button" @click.prevent="isShowing = !isShowing">Show Items</button>
    <p>
      <span
        v-for="(cat, idx) in selectedList"
        :key="idx"
        class="inline-flex items-center px-2 py-0.5 mr-1 rounded text-xs font-medium bg-indigo-100 text-indigo-800"
      >
        {{ cat.label }}
      </span>
    </p>
    <div class="mt-4 border-gray-200 divide-y divide-gray-200">
      <TransitionRoot
        :show="isShowing"
        enter="transform transition ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transform transition ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          v-for="(item, ck, idx) in itemList"
          :key="idx"
          class="relative flex items-start py-4"
        >
          <div class="flex-1 min-w-0 text-sm">
            <label
              :for="`${inputName}[${idx}]`"
              class="font-medium text-gray-700 select-none"
              >{{ item.label }}</label
            >
          </div>
          <div class="flex items-center h-5 ml-3">
            <Field
              :id="`${inputName}[${idx}]`"
              :v-model="`${inputName}`"
              :name="`${inputName}[${idx}]`"
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              :value="ck"
            />
          </div>
        </div>
      </TransitionRoot>
    </div>
  </fieldset>
</template>

<script>
import { computed, reactive, toRefs, ref } from "vue";
import { useField, Field } from "vee-validate";
import { TransitionRoot } from "@headlessui/vue";
/* Example required list format. This is currently
 * hard coded would like to make this injected or a prop
 * the values must be keys is just makes thing easier
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
    TransitionRoot,
  },
  props: {
    title: { type: String, default: "Items" },
    inputName: { type: String, default: "Item" },
  },
  setup(props) {
    const initState = {
      loading: false,
      error: "",
      form: {},
      formSettings: {},
      selectedList: [],
      itemList: categories,
      checkedItems: [],
      fieldsetLegend: "",
      inputName: "",
    };

    const state = reactive({ ...initState });
    state.fieldsetLegend = computed(() => props.title);
    state.inputName = computed(() => props.inputName);
    state.selectedList = computed(() =>
      value.value.reduce((result, item) => {
        if (item) {
          result.push({ key: item, label: state.itemList[item].label });
        }
        return result;
      }, [])
    );
    const { value } = useField(`${state.inputName}`);
    const isShowing = ref(true);
    return {
      ...toRefs(state),
      Field,
      TransitionRoot,
      value,
      isShowing,
    };
  },
};
</script>
