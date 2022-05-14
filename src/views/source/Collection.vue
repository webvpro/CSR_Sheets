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
          @click="open(col.id)"
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
    <CollectionForm />
  </div>
</template>

<script>
import {
  computed,
  ref,
  inject,
  reactive,
  toRefs,
  onMounted,
  provide,
} from "vue";
import { useRoute } from "vue-router";
import useSourceSubCollection from "@/modules/use-collection";
import CollectionForm from "@/components/slideoutforms/CollectionForm.vue";

export default {
  components: {
    CollectionForm,
  },
  setup() {
    const state = reactive({
      errors: {},
      source: {},
      collectionDocs: [],
      collectionDocId: "",
      collectionKey: "",
    });
    state.source = inject("source");
    const route = useRoute();
    const collectionName = ref("");
    const openForm = ref(false);
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
    state.collectionKey = route.params.name.toUpperCase();
    state.error = error;
    provide("openForm", openForm);
    provide("collectionKey", state.collectionKey);
    provide("collectionDocId", state.collectionDocId);
    const open = (id) => {
      state.collectionDocId = id;
      return (openForm.value = true);
    };
    onMounted(() => {
      getSubCollectionDocs();
    });
    return {
      collectionName,
      ...toRefs(state),
      CollectionForm,
      open,
    };
  },
};
</script>
