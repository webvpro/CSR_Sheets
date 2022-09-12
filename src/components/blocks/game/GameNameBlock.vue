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
      <div
        class="overflow-hidden bg-gray-100 rounded-lg sm:col-span-4 lg:col-span-5"
      >
        <img src="#" class="object-cover object-center w-auto h-auto" />
      </div>
      <div class="sm:col-span-8 lg:col-span-7">
        <h2 class="mb-2 text-2xl font-extrabold text-gray-900 sm:pr-12">
          {{ blockData }}
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
  props: ["blockData"],
  setup(props) {
    const formState = inject("formState");
    const editBlock = inject("editBlock");
    //const blockData = toRef(props, 'block.data')
    //const blockId = toRef(props, 'blockId')
    return {
      ...toRefs(formState),
      editBlock,
    };
  },
});
</script>
