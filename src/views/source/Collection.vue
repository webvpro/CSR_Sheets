<template>
  <div class="flex h-full">
    <div
      class="container relative pt-5 pb-5 mx-auto border-b border-gray-200 sm:pb-0"
    >
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a
          v-for="col in collectionDocs"
          :key="col.id"
          href="#"
          class="relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
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
    });
    state.source = inject("source");
    const route = useRoute();
    const collectionName = ref("");
    const selectedCollectionId = ref("");
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
    state.collectionDocs = computed(() => collectionData);
    state.collectionKey = computed(() => route.params.name.toUpperCase());
    state.error = error;
    provide("openForm", openForm);
    provide(
      "collectionKey",
      computed(() => state.collectionKey)
    );
    provide("collectionDocId", selectedCollectionId);
    const open = (id) => {
      selectedCollectionId.value = id;
      console.log(selectedCollectionId.value);
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
