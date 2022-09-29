<template>
  <div
    class="container grid justify-center gap-4 pb-4 md:px-3 auto-cols-fr grid-flow-dense auto-rows-auto md:auto-rows-fr md:grid-cols-3 xl:grid-cols-4"
  >
    <div v-for="col in collectionDocs" :key="col.id">
      <item-card
        :item-data="col"
        :item-type="collection"
        :item-icon="collectionIcon"
        @open-item="open(col)"
      />
    </div>
  </div>
  <input
    id="item-modal"
    v-model="openForm"
    type="checkbox"
    class="modal-toggle"
  />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="border modal-box mockup-window bg-base-300">
      <div class="flex justify-end w-full">
        <label for="item-modal" class="btn btn-circle btn-primary">
          <span class="sr-only">Close panel</span>
          <v-icon name="hi-solid-x" scale="2" title="" />
        </label>
      </div>
      <h2 class="mb-2 text-lg font-bold capitalize">
        {{
          selectedCollectionId ? `Edit ${collection}` : `Create ${collection}`
        }}
      </h2>
      <collection-item-form
        :key="`${selectedCollectionId}-form`"
        :item-id="selectedCollectionId"
        :item-type="collection"
        :source-id="$route.params.id"
        @cancel-form="closeForm()"
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
import ItemCard from "@/components/ListCards/ItemCard.vue";
import CollectionItemForm from "@/components/form/CollectionItemForm.vue";

export default {
  components: {
    ItemCard,
    CollectionItemForm,
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
      openForm.value = true;
    };
    const closeForm = () => {
      selectedCollectionId.value = "" ;
      console.log("closeModal");
      openForm.value = false;
    };

    onMounted(async () => {
      await getSubCollectionDocs({ orderBy: ["name"] });
    });
    return {
      ...toRefs(state),
      open,
      ItemCard,
      collection,
      openForm,
      CollectionItemForm,
      selectedCollectionId,
      closeForm,
    };
  },
};
</script>
