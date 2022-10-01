<template>
  <transition>
    <card-loader v-if="loading" :loading-label="collection" />
  </transition>
  <transition>
    <div
      v-if="!loading"
      class="container grid justify-center gap-4 pb-4 transition-opacity duration-1000 ease-in opacity-100 md:px-3 auto-cols-fr grid-flow-dense auto-rows-auto md:auto-rows-fr md:grid-cols-3 xl:grid-cols-4"
    >
      <div v-for="col in collectionDocs" :key="col.id">
        <item-card
          :item-data="col"
          :item-type="collection"
          :item-icon="collectionIcon"
          @open-item="open(col.id)"
        />
      </div>
    </div>
  </transition>
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
import CardLoader from "@/components/loaders/CardLoader.vue";
import { useAuthState, auth } from "@/modules/firebase";
export default {
  components: {
    ItemCard,
    CardLoader,
  },
  props: {
    collectionIcon: {
      type: String,
      default: "",
    },
  },
  emit: ["OpenItem", "copyItem", "viewItem", "selectedItem", "hideItem"],
  async setup(props, { emit }) {
    const state = reactive({
      errors: {},
      source: {},
      collectionDocs: [],
      loadingDocs: true,
    });
    state.source = inject("source");
    const route = useRoute();
    const selectedCollectionId = ref("");
    const openForm = ref(false);
    const collection = ref(inject("collection"));
    const {
      getSubCollectionDocs,
      getCollection,
      collectionData,
      error,
      loading,
    } = useSourceSubCollection(
      `sources,${route.params.id},${collection.value}`,
      {
        onMounted: true,
        where: ["owner", "==", "W3uJQB3GtRdd4FYxgTv9ryYY10A3"],
      }
    );
    state.collectionDocs = computed(() => collectionData);
    state.error = error;
    state.loadingDocs = computed(() => loading);
    const open = (id) => {
      selectedCollectionId.value = id;
      console.log(selectedCollectionId.value);
      emit("OpenItem", id);
    };
    const closeForm = () => {
      selectedCollectionId.value = "";
      console.log("closeModal");
      emit("openItem");
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
      selectedCollectionId,
      closeForm,
      loading,
      CardLoader,
    };
  },
};
</script>

<style lang="postcss" scoped></style>
