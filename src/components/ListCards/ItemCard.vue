<script setup>
const props = defineProps({
  itemData: { default: () => {}, type: Object },
  allowEdit: { type: Boolean, default: true },
  allowCopy: { type: Boolean, default: true },
  itemType: { type: String, required: true },
});
const emit = defineEmits(["editItem", "copyItem"]);
</script>

<template>
  <div
    data-theme="synthwave"
    class="max-w-xs min-w-xs h-[26rem] mx-auto card bg-base-100 shadow-xl justify-center justify-self-center"
  >
    <figure class="px-10 pt-3">
      <v-icon name="gi-aura" scale="4" label="Edit" />
    </figure>
    <div data-theme="bumblebee" class="m-3 rounded-md card-body">
      <h2 class="card-title">{{ itemData.name }}</h2>
      <p>{{ itemData.description }}</p>
      <div class="justify-end btn-group card-actions">
        <button
          v-if="allowCopy"
          class="btn-ghost"
          @click="$emit('copyItem', itemData.itemData)"
        >
          <v-icon name="hi-solid-clipboard-copy" label="Edit" />
        </button>
        <button
          v-if="allowEdit"
          class="btn-ghost"
          @click="$emit('editItem', itemData.itemData)"
        >
          <v-icon name="hi-solid-pencil-alt" label="Edit" />
        </button>
      </div>
    </div>
  </div>
</template>
