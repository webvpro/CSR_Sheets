<template>
  <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col items-center pt-3 drawer-content">
      <!-- Page content here -->
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"
        >Open drawer</label
      >
      <CollectionList :key="selectedCollection" />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>

      <ul
        class="p-0 overflow-y-auto border-r-2 menu w-80 bg-secondary text-secondary-content border-primary"
      >
        <!-- Sidebar content here -->
        <li
          class="flex flex-row content-center w-full py-4 pl-4 text-3xl text-justify bg-primary text-primary-content"
        >
          <button
            class="items-center justify-center mr-2 text-3xl rounded-full w-7 h-7"
            @click.prevent="goBack"
          >
            <v-icon
              name="hi-arrow-circle-left"
              class="mt-2 w-9 h-9"
              scale="1.33"
            />
          </button>
          {{ sourceDoc.name }}
        </li>
        <li v-for="collection in sourceCollections" :key="collection.name">
          <button
            class="justify-start w-full h-full gap-2 py-4 text-2xl btn btn-secondary"
            @click.prevent="selectCollection(collection.href)"
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
import CollectionList from "@/views/source/Collection.vue";
import { useRoute } from "vue-router";
import router from "../router";
const route = useRoute();
const sourceDoc = ref(computed(() => documentData.value));
const selectedCollection = ref("foci");
const { getDocument, documentData, error } = useSourceDoc("sources", {
  documentId: route.params.id,
  onMounted: true,
});
const goBack = () => {
  router.go(-1);
};
const selectCollection = (collName) => {
  console.log(collName)
  selectedCollection.value = collName;
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
