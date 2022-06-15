/* eslint-disable no-unused-vars */

<template>
  <div class="flex flex-col flex-1 p-8">
    <h3 class="mt-6 text-sm font-medium text-gray-900">{{ itemData.name }}</h3>
    <dl class="flex flex-col justify-between flex-grow mt-1">
      <dt class="sr-only">
        {{
          itemData.abilityType.toLowerCase().charAt(0).toUpperCase() +
          itemData.abilityType.slice(1)
        }}
      </dt>
      <dd class="text-sm text-gray-500"></dd>
      <dt class="sr-only">Categories</dt>
      <dd class="mt-3">
        <span
          v-for="cat in itemData.categories"
          :key="cat"
          class="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full"
          >{{ cat.toLowerCase().charAt(0).toUpperCase() + cat.slice(1) }}</span
        >
      </dd>
    </dl>
  </div>
  <div>
    <div class="flex -mt-px divide-x divide-gray-200">
      <div class="flex flex-1 w-0">
        <a
          href=""
          class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500"
        >
          <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          <span class="ml-3">Email</span>
        </a>
      </div>
      <div class="flex flex-1 w-0 -ml-px">
        <a
          href=""
          class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500"
        >
          <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          <span class="ml-3">Call</span>
        </a>
      </div>
    </div>
    {{ itemData }}
  </div>
</template>
<script setup>
import { MailIcon, PhoneIcon } from "@heroicons/vue/solid";

const props = defineProps({
  itemData: {
    type: Object,
    default() {
      return {
        name: "",
        description: "",
        abilityType: "",
        categories: [],
      };
    },
  },
});
</script>
