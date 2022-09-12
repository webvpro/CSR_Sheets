/* eslint-disable no-unused-vars */
<script setup>
const props = defineProps({
  itemData: { default: () => {}, type: Object },
  allowEdit: { type: Boolean, default: true },
  allowCopy: { type: Boolean, default: true },
});
</script>
<template>
  <div
    class="max-w-xs min-w-xs h-[26rem] mx-auto card bg-primary text-primary-content justify-center justify-self-center"
  >
    <div class="card-body">
      <h2 class="card-title">{{ itemData.name }}</h2>
      <p>{{ itemData.description }}</p>
      <div class="justify-end card-actions">
        <button class="btn">Edit</button>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  itemData: { default: () => {}, type: Object },
  allowEdit: { type: Boolean, default: true },
  allowCopy: { type: Boolean, default: true },
});
</script>
