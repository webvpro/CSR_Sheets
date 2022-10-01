<script setup>
import { computed } from "vue";
import abilities from "@/components/ListCards/details/abilities.vue";
import CollectionItemForm from "@/components/form/CollectionItemForm.vue";
const props = defineProps({
  itemData: { default: () => {}, type: Object },
  allowEdit: { type: Boolean, default: true },
  allowCopy: { type: Boolean, default: true },
  allowSelection: { type: Boolean, default: true },
  selectedItem: { type: Boolean, default: true },
  hiddenItem: { type: Boolean, default: true },
  editLock: { type: Boolean, default: false },
  itemType: { type: String, required: true },
  itemIcon: { type: String, required: true },
});
const emit = defineEmits([
  "openItem",
  "copyItem",
  "viewItem",
  "selectedItem",
  "hideItem",
]);
const cardType = computed(() => props.itemType.toLowerCase());
</script>

<template>
  <div
    class="bg-primary max-w-xs w-[18.66rem] h-[29rem] mx-auto card shadow-xl justify-center justify-self-center"
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
      <div
        class="justify-end flex-1 p-2 border-t-4 btn-group card-actions border-primary"
      >
        <div class="btn-group btn-group-horizontal">
          <button
            class="btn btn-xs btn-active"
            @click="emit('selectedItem', itemData.itemData)"
          >
            <v-icon name="fa-check-square" label="Edit" scale="1" />
          </button>
          <button
            class="btn btn-xs btn-active"
            @click="emit('hideItem', itemData.itemData)"
          >
            <v-icon name="hi-eye-off" label="Edit" scale="1" />
          </button>
          <button
            class="btn btn-xs"
            @click="emit('copyItem', itemData.itemData)"
          >
            <v-icon name="hi-solid-duplicate" label="Edit" scale="1" />
          </button>
          <button
            class="btn btn-xs"
            @click="emit('viewItem', itemData.itemData)"
          >
            <v-icon name="hi-solid-zoom-in" label="Edit" scale="1" />
          </button>
          <button
            v-if="allowEdit"
            class="btn btn-xs"
            @click="emit('openItem', itemData.itemData)"
          >
            <v-icon name="gi-gear-hammer" label="Edit" scale="1" />
          </button>
        </div>
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
