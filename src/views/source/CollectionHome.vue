<template>
  <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col items-center justify-center drawer-content">
      <!-- Page content here -->
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"
        >Open drawer</label
      >
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script stetup>
import { inject, ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const source = ref(inject("source"), {});
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
    return {
      source,
      sourceCollections,
      route,
    };
  },
};
</script>
