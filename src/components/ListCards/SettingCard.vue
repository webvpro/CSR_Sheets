<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  settingData: { default: () => {}, type: Object },
  settingSelected: { type: Boolean, default: true },
  settingImg: { type: String, default: "https://placeimg.com/400/225/arch" },
});
const settingData = ref(props.settingData);
const emit = defineEmits([
  "openSetting",
  "copySetting",
  "viewSetting",
  "selectSetting",
]);
</script>
<template>
  <div class="max-w-sm shadow-xl card min-w-fit bordered">
    <figure class="px-10 pt-10">
      <img :src="props.settingImg" :alt="settingData.name" class="rounded-xl" />
    </figure>
    <div class="items-center text-center card-body">
      <h2 class="card-title">{{ settingData.name }}</h2>
      <p>{{ settingData.description }}</p>
      <div
        class="justify-end flex-1 p-2 border-t-4 btn-group card-actions border-primary"
      >
        <div class="btn-group btn-group-horizontal">
          <button
            class="btn btn-xs btn-active"
            @click="emit('selectSetting', settingData.id)"
          >
            <v-icon name="fa-check-square" label="Edit" scale="1" />
          </button>
          <button
            class="btn btn-xs"
            @click="emit('copySetting', settingData.id)"
          >
            <v-icon name="hi-solid-duplicate" label="Edit" scale="1" />
          </button>
          <button
            class="btn btn-xs"
            @click="emit('viewSetting', settingData.id)"
          >
            <v-icon name="hi-solid-zoom-in" label="Edit" scale="1" />
          </button>
          <button
            class="btn btn-xs"
            @click="emit('openSetting', settingData.id)"
          >
            <v-icon name="gi-gear-hammer" label="Edit" scale="1" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
