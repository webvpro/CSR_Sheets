<template>
  <div
    class="flex flex-col col-span-3 p-6 bg-white divide-y divide-gray-200 rounded-lg shadow"
  >
    <button
      type="button"
      class="p-1 ml-auto bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click="editBlock(blockId)"
    >
      <CogIcon class="w-3 h-3 text-white rounded-full" aria-hidden="true" />
    </button>
    <div
      class="grid items-start w-full grid-cols-12 border-none gap-y-8 gap-x-6 lg:gap-x-8"
    >
      content
    </div>
  </div>
</template>
<script>
import { defineComponent, inject, toRefs, toRef, computed } from "vue";
import { CogIcon } from "@heroicons/vue/outline";
export default defineComponent({
  components: { CogIcon },
  props: ["blockData"],
  setup(props) {
    const formState = inject("formState");
    const editBlock = inject("editBlock");
    const characterSentence = computed(() => {
      const { name, descriptor, type, focus } = props.blockData;
      const sub =
        descriptor.sub && descriptor.sub.name
          ? `, ${descriptor.sub.name} `
          : "";
      return `${name} is a ${descriptor.name}${sub} ${type.name} who ${focus.value}`;
    });
    //const blockData = toRef(props, 'block.data')
    //const blockId = toRef(props, 'blockId')
    return {
      ...toRefs(formState),
      editBlock,
      characterSentence,
    };
  },
});
</script>
