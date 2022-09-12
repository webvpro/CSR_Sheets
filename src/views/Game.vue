<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!-- 3 column wrapper -->
  <div class="w-full h=full">
    <!-- Left sidebar & main wrapper -->
    <div class="flex-1 min-w-0 bg-white xl:flex">
      <div class="h-full py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-3">
        <!-- Start left column area -->
        <div class="relative h-full" style="min-height: 12rem">
          {{ statBlocks }}
          <ul role="list" class="">
            <li
              v-for="item in statBlocks"
              :key="item.id"
              class="hover:bg-indigo-400"
            >
              <component :is="item.component" :block-data="item.data" />
            </li>
          </ul>
          <div class="container">
            <button
              type="button"
              class="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Roll Task
            </button>
          </div>
          <!-- End left column area -->
        </div>
      </div>

      <div class="bg-white lg:min-w-0 lg:flex-1">
        <div class="h-full px-4 py-6 sm:px-6 lg:px-8">
          <!-- Start main area-->
          <div class="relative h-full" style="min-height: 36rem">
            <div
              class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"
            />
            main
          </div>
          <!-- End main area -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, reactive, ref, provide, computed } from "vue";
import GameNameBlock from "@/components/blocks/game/GameNameBlock.vue";
import GamePoolBlock from "@/components/blocks/game/GamePoolBlock.vue";
import GameTierBlock from "@/components/blocks/game/GameTierBlock.vue";
const statBlocks = ref([
  {
    component: GameNameBlock,
    id: "12343",
    data: {
      NAME: { value: "A Name" },
      DESCRIPTOR: { value: "Descriptor" },
      FOCUS: { value: "Foci" },
      TYPE: { value: "Warrior" },
    },
  },
  {
    component: GameTierBlock,
    id: "12344",
    data: [
      {
        id: "1234",
        name: "Tier",
        value: 1,
      },
      {
        id: "2345",
        name: "Effort",
        value: 1,
      },
      {
        id: "3456",
        name: "XP",
        value: 1,
      },
    ],
  },
  {
    component: GamePoolBlock,
    id: "12345",
    data: [
      {
        id: "1243",
        name: "Might",
        value: 10,
        current: 10,
        edge: 1,
      },
      {
        id: "23451",
        name: "Speed",
        value: 10,
        current: 10,
        edge: 1,
      },
      {
        id: "13456",
        name: "Intellect",
        value: 10,
        current: 10,
        edge: 1,
      },
    ],
  },
]);
</script>
