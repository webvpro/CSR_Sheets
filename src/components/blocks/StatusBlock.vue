<template>
    <div class="col-span-4 flex flex-col text-left text-xs bg-white rounded-lg shadow divide-y divide-gray-200">
    <form class="space-y-2 " action="#" method="POST">
        <div>
            <label for="name" class="block text-xs font-medium text-gray-700">
               Pools Status
            </label>
            <div class="mt-1">
            <input id="name" name="name" type="text" required="true" class="appearance-none block px-2 py-1 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs" />
            </div>
        </div>

      </form>

    </div>
</template>
<script>
import { defineComponent, inject, toRefs, ref } from 'vue';
import { CogIcon } from '@heroicons/vue/outline'
export default defineComponent({
  components : { CogIcon },
  props: {
        blockId: { type: String}
  },      
  setup() {
    const formState = inject('formState');

    const editBlock = inject('editBlock')
    return {
      ...toRefs(formState),
      editBlock,
    };
  },
});
</script>