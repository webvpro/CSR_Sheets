<template>
  <div class="drawer drawer-mobile">
    <input
      id="collections-drawer"
      v-model="toggleNavDrawer"
      type="checkbox"
      class="drawer-toggle"
    />
    <div class="items-center flex-none h-auto pb-3 mb-12 drawer-content">
      <!-- Page content here -->
      <div class="sticky top-0 z-40 p-3 mb-3 navbar bg-neutral">
        <label
          for="collections-drawer"
          class="gap-2 text-lg capitalize btn btn-primary drawer-button lg:hidden"
        >
          <v-icon name="hi-arrow-circle-left" class="w-5 h-5" scale="1" />
          {{ selectedCollection }}
        </label>
      </div>

      <collection-list
        :key="selectedCollection"
        :collection-icon="selectedIcon"
      />
    </div>
    <div class="drawer-side">
      <label for="collections-drawer" class="drawer-overlay"></label>

      <ul
        class="w-56 p-0 mb-6 border-r-2 menu md:w-80 bg-secondary text-secondary-content border-primary"
      >
        <!-- Sidebar content here -->
        <li
          class="flex flex-row content-center w-full py-4 pl-4 text-2xl text-justify bg-primary text-primary-content"
        >
          <button
            class="items-center justify-center mr-2 text-xl"
            @click.prevent="goBack"
          >
            <v-icon
              name="hi-arrow-circle-left"
              class="rounded-full w-7 h-7"
              scale="1.33"
            />
            {{ sourceDoc.name }}
          </button>
        </li>
        <li v-for="collection in sourceCollections" :key="collection.name">
          <button
            class="justify-start w-full h-full gap-2 py-4 text-xl btn btn-secondary"
            @click.prevent="selectCollection(collection.href, collection.icon)"
          >
            <v-icon :name="collection.icon" class="w-6 h-6" scale="1.33" />
            {{ collection.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { provide, ref, onMounted, computed } from "vue";
import useSourceDoc from "@/modules/use-doc";
import CollectionList from "@/components/CollectionList.vue";
import { useRoute } from "vue-router";
import router from "../router";
const route = useRoute();
const sourceDoc = ref(computed(() => documentData.value));
const selectedCollection = ref("types");
const selectedIcon = ref("gi-3d-meeple");
const toggleNavDrawer = ref(false);
const { getDocument, documentData, error } = useSourceDoc("sources", {
  documentId: route.params.id,
  onMounted: true,
});
const goBack = () => {
  router.go(-1);
};
const activeItem = (name) =>
  name === selectCollection.value ? "bordered" : "";
const selectCollection = (name, icon) => {
  selectedCollection.value = name;
  selectedIcon.value = icon;
  toggleNavDrawer.value = false;
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
    name: "Skills",
    href: "skills",
    icon: "gi-skills",
    bgColor: "bg-emerald-600",
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
