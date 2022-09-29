<script setup>
import { computed } from "vue";
import abilities from "@/components/ListCards/details/abilities.vue";
import CollectionItemForm from "@/components/form/CollectionItemForm.vue";
const props = defineProps({
  itemData: { default: () => {}, type: Object },
  allowEdit: { type: Boolean, default: true },
  allowCopy: { type: Boolean, default: true },
  allowSelection: { type: Boolean, default: true },
  editLock: { type: Boolean, default: false },
  itemType: { type: String, required: true },
  itemIcon: { type: String, required: true },
});
const emit = defineEmits(["openItem", "copyItem"]);
const cardType = computed(() => props.itemType.toLowerCase());
</script>

<template>
  <div
    class="bg-primary max-w-xs min-w-0 h-[29rem] mx-auto card shadow-xl justify-center justify-self-center"
  >
    <figure class="px-10 pt-3 text-primary-content">
      <v-icon :name="itemIcon" scale="4" label="Edit" />
    </figure>
    <div class="p-6 m-2 rounded-md card-body bg-base-100 text-base-content">
      <h2
        class="block truncate border-b-4 card-title text-ellipsis border-primary"
      >
        {{ itemData.name }}
      </h2>
      <p
        class="flex-none h-32 p-2 mt-2 overflow-y-auto font-semibold"
        v-html="itemData.description"
      />
      <component :is="cardType" :item-data="itemData"></component>
      <div class="btm-nav">
        <button class="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>
        <button class="text-primary active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          v-if="allowEdit"
          class="text-primary"
          @click="emit('openItem', itemData.itemData)"
        >
          <v-icon name="gi-gear-hammer" label="Edit" scale="1.5" />
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
