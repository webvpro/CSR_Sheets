<template>
    <div class="col-span-4 md:col-span-1 flex flex-col text-left text-xs bg-white rounded-lg shadow divide-y divide-gray-200">
    <form class="space-y-2 " action="#" method="POST">
        <div>
            <label for="name" class="block text-xs font-medium text-gray-700">
                XP
            </label>
            <div class="mt-1">
            <input id="name" name="name" type="text" required="true" class="appearance-none block px-2 py-1 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs" />
            </div>
        </div>

        </form>
      <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="editBlock(blockId)">
                                    <span class="sr-only">Edit</span>
                                    <CogIcon class="h-6 w-6" aria-hidden="true" />
                                </button>

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