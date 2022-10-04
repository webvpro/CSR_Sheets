<template>
  <div id="page-top" class="h-full drawer drawer-end scroll-mt-0">
    <input
      id="setting-form-drawer"
      v-model="toggleCollectionDrawer"
      type="checkbox"
      class="drawer-toggle"
    />
    <div class="overflow-hidden drawer-content">
      <div
        class="sticky top-0 z-40 px-2 mb-2 navbar bg-neutral text-neutral-content"
      >
        <div class="navbar-start">
          <a
            class="normal-case cursor-pointer md:text-xl btn btn-ghost"
            @click.prevent="goBack"
            ><v-icon name="fa-arrow-alt-circle-left" class="mr-2" scale="1" />{{
              sourceDoc.name
            }}</a
          >
        </div>
        <div class="hidden navbar-center lg:flex"></div>
        <div class="navbar-end">
          <select
            v-model="selectedCollection"
            :required="true"
            class="text-sm max-w-fit select select-bordered md:select-lg"
          >
            <option :selected="true">Select Collection</option>
            <option
              v-for="(collection, idx) in sourceCollections"
              :key="idx"
              class=""
              :value="collection.href"
            >
              {{ collection.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="container mx-auto">
        <collection-list
          :key="selectedCollection"
          :collection-icon="selectedIcon"
          @open-item="openForm"
          @view-detail="openForm"
        />
      </div>
      <label
        for="setting-form-drawer"
        :title="`Create ${selectedCollection}`"
        class="fixed z-[5] flex items-center justify-center text-4xl duration-300 rounded-full w-9 h-9 md:w-16 md:h-16 drawer-button text-secondary-content bg-secondary bottom-1.5 right-1.5 drop-shadow-lg hover:bg-primary-focus hover:drop-shadow-2xl hover:animate-bounce"
        @click.prevent="openForm('')"
      >
        <v-icon name="hi-solid-plus" label="View Source" scale="1.5" />
      </label>
    </div>
    <div class="drawer-side">
      <label
        for="setting-form-drawer"
        class="overflow-hidden drawer-overlay"
      ></label>
      <div class="h-full p-4 w-96 bg-base-100 text-base-content">
        {{ selectedItemId }}
      </div>
    </div>
  </div>
</template>

<script async setup>
import { provide, ref, onMounted, computed } from "vue";
import useSourceDoc from "@/modules/use-doc";
import CollectionList from "@/components/CollectionList.vue";
import { useRoute } from "vue-router";
import router from "../router";
const route = useRoute();
const sourceDoc = ref(computed(() => documentData.value));
const selectedItemId = ref("");
const selectedCollection = ref("types");
const selectedIcon = ref("gi-3d-meeple");
const toggleCollectionDrawer = ref(false);
const { getDocument, documentData, error } = useSourceDoc("sources", {
  documentId: route.params.id,
  onMounted: true,
});
const goBack = () => {
  router.go(-1);
};

const activeItem = (name) =>
  name.toLowerCase().replace(/\s/g, "") == selectedCollection.value
    ? "bordered"
    : "";
const openForm = (id = "") => {
  selectedItemId.value = id;
  toggleCollectionDrawer.value = true;
};
provide(
  "collection",
  computed(() => selectedCollection.value)
);
onMounted(() => {
  getDocument(route.params.id);
});
const sourceCollections = ref([
  {
    name: "Types",
    href: "types",
    icon: "gi-3d-meeple",
    bgColor: "bg-pink-600",
  },
  {
    name: "Flavors",
    href: "flavors",
    icon: "gi-3d-meeple",
    bgColor: "bg-pink-600",
  },
  {
    name: "Descriptors",
    href: "descriptors",
    icon: "gi-artificial-intelligence",
    bgColor: "bg-green-600",
  },
  {
    name: "Foci",
    href: "foci",
    icon: "gi-all-seeing-eye",
    bgColor: "bg-yellow-600",
  },
  {
    name: "Skills",
    href: "skills",
    icon: "gi-skills",
    bgColor: "bg-emerald-600",
  },
  {
    name: "Abilities",
    href: "abilities",
    icon: "gi-embrassed-energy",
    bgColor: "bg-red-600",
  },
  {
    name: "Power Shifts",
    href: "powershifts",
    icon: "gi-impact-point",
    bgColor: "bg-orange-600",
  },
  {
    name: "Cyphers",
    href: "cyphers",
    icon: "gi-abstract-077",
    bgColor: "bg-rose-600",
  },
  {
    name: "Artifacts",
    href: "artifacts",
    icon: "gi-glowing-artifact",
    bgColor: "bg-lime-600",
  },
  {
    name: "Equipment",
    href: "equipment",
    icon: "gi-light-backpack",
    bgColor: "bg-cyan-600",
  },
  {
    name: "Pools",
    href: "pools",
    icon: "gi-impact-point",
    bgColor: "bg-violet-600",
  },
  {
    name: "Trackers",
    href: "trackers",
    icon: "fa-chart-bar",
    bgColor: "bg-amber-600",
  },
]);
</script>
