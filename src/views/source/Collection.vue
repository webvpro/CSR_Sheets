<template>
  <div class="h-full flex">
    <div
      class="relative container mx-auto pb-5 pt-5 border-b border-gray-200 sm:pb-0"
    >
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a
          v-for="col in collectionDocs"
          :key="col.id"
          href="#"
          class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <div class="flex-shrink-0">
            {{ col.name }}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900">More Here</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, inject, reactive, toRefs, onMounted } from "vue";
import { useRoute } from "vue-router";
import useSourceSubCollection from "@/modules/use-collection";
import { get } from "lodash";

export default {
  setup() {
    const state = reactive({
      errors: {},
      source: {},
      collectionDocs: [],
    });
    state.source = inject("source");
    const route = useRoute();
    const collectionName = ref("");
    collectionName.value = computed(
      () =>
        route.params.name.charAt(0).toUpperCase() + route.params.name.slice(1)
    );
    const { getSubCollectionDocs, collectionData, error } =
      useSourceSubCollection(
        `sources,${route.params.id},${route.params.name}`,
        {}
      );
    state.collectionDocs = collectionData;
    state.error = error;
    console.log(collectionData.value);
    onMounted(() => {
      getSubCollectionDocs();
    });
    return {
      collectionName,
      ...toRefs(state),
    };
  },
};
</script>
