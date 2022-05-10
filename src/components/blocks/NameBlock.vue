<template>
  <div
    class="col-span-4 md:col-span-3 bg-white rounded-lg shadow divide-y divide-gray-200 p-6 flex flex-col"
  >
    <button
      type="button"
      class="p-1 ml-auto border border-transparent rounded-full bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click="editBlock(blockId)"
    >
      <CogIcon class="h-3 w-3 rounded-full text-white" aria-hidden="true" />
    </button>
    <div
      class="w-full grid grid-cols-12 gap-y-8 gap-x-6 items-start lg:gap-x-8 border-none"
    >
      <div
        class="rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5"
      >
        <img
          :src="blockData.imageSrc"
          class="object-center object-cover h-auto w-auto"
        />
      </div>
      <div class="sm:col-span-8 lg:col-span-7">
        <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12 mb-2">
          {{ characterSentence }}
        </h2>
        <p>
          Nubus has done a lot of stuff and is soo cool you have to meet her
          Nubus has done a lot of stuff and is soo cool you have to meet her
          Nubus has done a lot of stuff and is soo cool you have to meet her
          Nubus has done a lot of stuff and is soo cool you have to meet her
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, inject, toRefs, toRef, computed } from "vue";
import { CogIcon } from "@heroicons/vue/outline";
export default defineComponent({
  components: { CogIcon },
  props: ["blockId", "blockData"],
  setup(props) {
    const formState = inject("formState");
    const editBlock = inject("editBlock");
    const characterSentence = computed(() => {
      const { name, descriptor, type, focus } = props.blockData;
      const sub =
        descriptor.sub && descriptor.sub.name
          ? `, ${descriptor.sub.name} `
          : "";
      return `${name} is a ${descriptor.name}${sub} ${type.name} who ${focus.name}`;
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
