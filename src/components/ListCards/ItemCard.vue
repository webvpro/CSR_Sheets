<script setup>
import { computed } from "vue";
import abilities from "@/components/ListCards/cardTypes/abilities.vue";
const props = defineProps({
  itemData: { default: () => {}, type: Object },
  allowEdit: { type: Boolean, default: true },
  allowCopy: { type: Boolean, default: true },
  allowSelection: { type: Boolean, default: true },
  editLock: { type: Boolean, default: false },
  itemType: { type: String, required: true },
  itemIcon: { type: String, required: true },
});
const emit = defineEmits(["editItem", "copyItem"]);
const cardType = computed(() => props.itemType.toLowerCase());
</script>

<template>
  <div
    class="bg-primary max-w-xs min-w-xs h-[26rem] mx-auto card shadow-xl justify-center justify-self-center"
  >
    <figure class="px-10 pt-3 text-primary-content">
      <v-icon :name="itemIcon" scale="4" label="Edit" />
    </figure>
    <div class="m-3 rounded-md card-body bg-base-100 text-base-content">
      <h2 class="card-title">{{ itemData.name }}</h2>
      <p>{{ itemData.description }}</p>
      <component :is="cardType" :item-data="itemData"></component>
      <div class="justify-end btn-group card-actions">
        <button
          v-if="allowCopy"
          class="btn-ghost"
          @click="emit('copyItem', itemData.id)"
        >
          <v-icon name="hi-solid-clipboard-copy" label="Edit" scale="1.5" />
        </button>
        <button
          v-if="allowEdit"
          class="btn-ghost"
          @click="emit('editItem', itemData.itemData)"
        >
          <v-icon name="hi-solid-pencil-alt" label="Edit" scale="1.5" />
        </button>
      </div>
    </div>
  </div>
</template>
