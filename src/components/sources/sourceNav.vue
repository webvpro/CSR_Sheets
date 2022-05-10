<template>
  <div
    class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100"
  >
    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
      <router-link to="/sources">
        <div class="flex items-center flex-shrink-0 px-4">
          <v-icon
            name="gi-bookshelf"
            label="Sources"
            class="inline-block"
            scale="2"
          />
          <h2 class="font-bold text-gray-800">Sources</h2>
        </div>
      </router-link>
      <nav class="mt-5 flex-1" aria-label="Sidebar">
        <div
          v-for="item in collections"
          :key="item.name"
          class="px-2 space-y-1"
        >
          <router-link
            v-slot="{ isActive, isExactActive }"
            :to="item.href"
            custom
          >
            <a
              :href="item.href"
              :class="[
                isActive && 'active-item',
                isExactActive && 'exact-active-item',
                'active-item group side-nav-item',
              ]"
            >
              <v-icon
                :name="item.icon"
                :label="item.name"
                :class="[
                  isActive && 'text-gray-500',
                  isExactActive && 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 h-6 w-6',
                ]"
                :scale="2"
              />
              {{ item.name }}
            </a>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const navigation = [
  { name: "Types", href: "./types", icon: "gi-3d-meeple" },
  { name: "Abilites", href: "./ablilites", icon: "gi-embrassed-energy" },
  {
    name: "Power Shifts",
    href: "./powershifts",
    icon: "gi-impact-point",
  },
  {
    name: "Descriptors",
    href: "./descriptors",
    icon: "gi-artificial-intelligence",
  },
  { name: "Foci", href: "./foci", icon: "gi-all-seeing-eye" },
  { name: "Cyphers", href: "./cyphers", icon: "gi-sparkles" },
  {
    name: "Artifacts",
    href: "./artifacts",
    icon: "gi-glowing-artifact",
  },
  { name: "Equipment", href: "./equipment", icon: "gi-light-backpack" },
  { name: "Skills", href: "./skills", icon: "gi-skills" },
  { name: "Pools", href: "./skills", icon: "gi-impact-point" },
  { name: "Trackers", href: "./skills", icon: "fa-chart-bar" },
];

export default {
  setup() {
    const collections = ref(navigation);
    return {
      collections,
    };
  },
};
</script>
<style lang="postcss">
.active-item {
  @apply text-gray-400 group-hover:text-gray-500;
}
.exact-active-item {
  @apply bg-gray-200 text-gray-900;
}
.side-nav-item {
  @apply flex items-center px-2 py-2 text-base font-medium rounded-md;
}
</style>
