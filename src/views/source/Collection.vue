<template>
  <div class="container p-5 mx-auto border-b border-gray-200 mb-52">
    <div
      class="grid justify-center gap-4 m-auto auto-cols-fr grid-flow-dense auto-rows-auto md:auto-rows-fr md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <div v-for="col in collectionDocs" :key="col.id">
        <item-card
          :item-data="col"
          :item-type="collectionKey"
          @edit-item="open(col.id)"
        />
      </div>
    </div>
  </div>
  <CollectionForm />
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
import ItemCard from "@/components/ListCards/ItemCard.vue";

export default {
  components: {
    CollectionForm,
    ItemCard,
  },
  async setup() {
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
      ItemCard,
    };
  },
};
</script>
