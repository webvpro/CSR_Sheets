<template>
  <div>
    <h2 class="text-xs font-medium tracking-wide text-gray-500 uppercase">
      Source Items
    </h2>
    <ul
      role="list"
      class="grid grid-cols-1 gap-5 mt-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      <li
        v-for="collection in sourceCollections"
        :key="collection.href"
        class="flex col-span-1 rounded-md shadow-sm"
      >
        <div
          :class="[
            collection.bgColor,
            'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
          ]"
        >
          <v-icon :name="collection.icon" scale="2" />
        </div>
        <div
          class="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md"
        >
          <div class="flex-1 px-4 py-2 text-lg truncate">
            <router-link
              class="font-medium text-gray-900 hover:text-gray-600"
              :to="{ path: `${route.path}/collection/${collection.href}` }"
            >
              {{ collection.name }}
            </router-link>
          </div>
          <div class="flex-shrink-0 pr-2">
            <button
              type="button"
              class="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-transparent bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">Open options</span>
              <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { DotsVerticalIcon } from "@heroicons/vue/solid";
import { inject, ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import useCloudFunction from "@/modules/use-functions";
export default {
  components: {
    DotsVerticalIcon,
  },
  setup() {
    const route = useRoute();
    const source = ref(inject("source"), {});
    const { callFunction, functionData } = useCloudFunction("sourceCollectionsList");
    const collectionList = ref({});
    collectionList.value = computed(() => functionData);
    const sourceCollections = [
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
    ];
    onMounted(async () => {
      await callFunction({ docPath: `sources/${route.params.id}` });
    });
    return {
      source,
      sourceCollections,
      route,
      collectionList,
    };
  },
};
</script>
