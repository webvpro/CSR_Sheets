<script setup>
import { ref } from "vue";
const props = defineProps({
  loadingLabel: { default: "Thing", type: String },
  loadingIcon: { default: "gi-abstract-076", type: String },
});
const icon = ref(props.loadingIcon);
</script>
<template>
  <div class="flex items-center justify-center min-h-screen">
    <div
      class="flex flex-col items-center justify-center mx-auto mb-12 -mt-10 text-primary-content"
    >
      <figure
        class="mx-auto text-primary btn btn-circle btn-secondary w-fit h-fit"
      >
        <v-icon
          :name="`${icon}`"
          scale="10"
          label="Edit"
          animation="spin-pulse"
          speed="slow"
        />
      </figure>

      <h1
        class="p-6 mx-auto mt-3 text-xl font-semibold md:text-4xl text-secondry animate-pulse"
      >
        Wait for it, Finding <span class="capitalize">{{ loadingLabel }}</span>.
      </h1>
    </div>
  </div>
</template>
