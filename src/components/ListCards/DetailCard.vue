<script setup>
import { ref, computed } from "vue";
import abilities from "@/components/ListCards/details/abilities.vue";
import CollectionItemForm from "@/components/form/CollectionItemForm.vue";
const props = defineProps({
  itemData: { default: () => {}, type: Object },
  itemType: { default: "SKILLS", type: String },
});

const cardType = ref(props.itemType.toLowerCase());
const noButtons = ref(props.hideButtonGroup);
const getIcon = (icon = null) => icon ?? props.itemIcon;
</script>

<template>
  <div
    class="bg-primary max-w-xs w-[18.66rem] h-[29rem] mx-auto card shadow-xl justify-center justify-self-center"
  >
    <figure class="px-10 pt-3 text-primary-content">
      <v-icon :name="itemData.icon" scale="4" label="Edit" />
    </figure>
    <div class="p-6 m-2 rounded-md card-body bg-base-100 text-base-content">
      <h2
        class="block truncate border-b-4 card-title text-ellipsis border-primary"
      >
        {{ itemData.title }}
      </h2>
      <p class="flex-none h-32 p-2 mt-2 overflow-y-auto font-semibold">
        {{ itemData.description }} {{ itemType }}
      </p>
      <div
        class="justify-end flex-1 p-2 border-t-4 btn-group card-actions border-primary"
      > {{ itemType }}
        <div v-if="itemType === 'SKILLS'" class="">
          <span>Pool: {{ itemData.pool }}</span
          ><span class="capitalize">Expertise:{{ itemData.level }}</span>
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
