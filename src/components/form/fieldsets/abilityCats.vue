/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/valid-v-else */
/* This was written to easier to port into resusable checkbox list */
<template>
  <fieldset>
    <legend class="text-lg font-medium text-gray-900">
      {{ fieldsetLegend }}
    </legend>
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

export default {
  components: {
    Field,
    TransitionRoot,
  },
  props: {
    title: { type: String, default: "Items" },
    inputName: { type: String, default: "Item" },
    itemList: { type: Object, default: null },
    selectedItems: { type: Array, default: null },
  },
  setup(props) {
    const initState = {
      loading: false,
      error: "",
      form: {},
      formSettings: {},
      selectedList: Array(0),
      itemList: {},
      checkedItems: [],
      fieldsetLegend: "",
      inputName: "",
    };

    const state = reactive({ ...initState });
    state.fieldsetLegend = computed(() => props.title);
    state.inputName = computed(() => props.inputName);
    state.itemList = computed(() => props.itemList);
    state.selectedList = computed(() =>
      props.selectedItems.reduce((result, item) => {
        if (item) {
          result.push({ key: item, label: state.itemList[item].label });
        }
        return result;
      }, [])
    );
    const isShowing = ref(true);
    return {
      ...toRefs(state),
      Field,
      TransitionRoot,
      isShowing,
    };
  },
};
</script>
