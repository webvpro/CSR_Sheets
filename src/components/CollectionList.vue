<template>
  <div
    class="container grid justify-center gap-4 pb-4 md:px-3 auto-cols-fr grid-flow-dense auto-rows-auto md:auto-rows-fr md:grid-cols-3 xl:grid-cols-4"
  >
    <div v-for="col in collectionDocs" :key="col.id">
      <item-card
        :item-data="col"
        :item-type="collection"
        :item-icon="collectionIcon"
        @edit-item="open(col.id)"
      />
    </div>
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
  watch,
} from "vue";
import { useRoute } from "vue-router";
import useSourceSubCollection from "@/modules/use-collection";
import CollectionForm from "@/components/slideoutforms/CollectionForm.vue";
import ItemCard from "@/components/ListCards/ItemCard.vue";

export default {
  components: {
    ItemCard,
  },
  props: {
    collectionIcon: {
      type: String,
      default: "",
    },
  },
  async setup() {
    const state = reactive({
      errors: {},
      source: {},
      collectionDocs: [],
    });
    state.source = inject("source");
    const route = useRoute();
    const selectedCollectionId = ref("");
    const openForm = ref(false);
    const collection = ref(inject("collection"));
    const { getSubCollectionDocs, getCollection, collectionData, error } =
      useSourceSubCollection(`sources,${route.params.id},${collection.value}`, {
        onMounted: true,
      });
    state.collectionDocs = computed(() => collectionData);
    state.error = error;
    provide("openForm", openForm);
    provide("collectionKey", collection);
    const open = (id) => {
      selectedCollectionId.value = id;
      console.log(selectedCollectionId.value);
      return (openForm.value = true);
    };

    onMounted(() => {
      getSubCollectionDocs({ orderBy: ["name"] });
    });
    return {
      ...toRefs(state),
      open,
      ItemCard,
      collection,
    };
  },
};
</script>
