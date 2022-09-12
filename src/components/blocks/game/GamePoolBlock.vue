<template>
  <ul role="list" class="grid grid-cols-3 mx-auto gap-x-2 gap-y-8">
    <li v-for="pool in pools" :key="pool.id" class="hover:bg-indigo-400">
      <div
        class="flex flex-col p-2 space-y-4 border-2 border-indigo-700 rounded-md"
      >
        <div
          class="mx-auto text-lg text-center align-middle border-2 border-purple-900 rounded-full w-9 h-9"
        >
          {{ pool.current }}
        </div>
        <div class="space-y-2">
          <div class="text-xs font-medium lg:text-sm">
            <h3>{{ pool.name }}</h3>
            <p class="text-indigo-600">{{ pool.value }}</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import { defineComponent, inject, toRefs, toRef, computed } from "vue";
export default defineComponent({
  props: ["blockId", "blockData"],
  setup(props) {
    const formState = inject("formState");
    const editBlock = inject("editBlock");
    const pools = computed(() => {
      const { ...data } = props.blockData;
      return data;
    });
    //const blockData = toRef(props, 'block.data')
    //const blockId = toRef(props, 'blockId')
    return {
      ...toRefs(formState),
      editBlock,
      pools,
    };
  },
});
</script>
