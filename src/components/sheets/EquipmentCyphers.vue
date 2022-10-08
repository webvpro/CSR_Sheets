<script setup>
import { ref, inject } from "vue";

const props = defineProps({
  tabData: { type: Object, default: () => {} },
  selected: { type: String, default: "ATTACK" },
});

const activeTab = ref(props.selected);
const armorValue = ref("1");
const selectTab = (key) => {
  activeTab.value = key;
};
const listData = ref();
const { openFormDrawer, openAction, openRecovery, openPool } =
  inject("itemActions");
</script>

<template>
  <div
    class="col-span-12 shadow-xl xl:col-span-6 card md:card-side bg-base-100"
  >
    <div
      class="flex flex-row md:flex-col items-center justify-evenly w-full h-full p-6 text-center md:w-44 bg-neutral text-neutral-content"
    >
      <button
        class="btm-sm btn btn-primary"
        @click.prevent="openPool('DAMAGE')"
      >
        Apply Damage
      </button>
      <!-- armor preview-->
      <div class="indicator">
        <span
          class="indicator-item indicator-top indicator-center badge badge-primary"
          >Armor</span
        >
        <span
          class="indicator-item indicator-middle indicator-center badge badge-lg badge-secondary text-secondary-content"
          >3</span
        >
        <span
          class="indicator-item indicator-bottom indicator-center badge badge-warning"
          >Heavy</span
        >
        <span
          class="indicator-item indicator-middle indicator-end badge badge-warning"
          ><v-icon
            name="gi-running-ninja"
            class="text-warning-content"
            scale="1"
            label="Speed Hindered"
        /></span>
        <v-icon name="gi-heart-armor" class="text-primary" scale="6.66" />
      </div>
    </div>
    <div class="card-body">
      <div class="-ml-6 card-tile tabs">
        <a
          class="tab tab-lifted"
          :class="[activeTab === 'ATTACK' ? 'tab-active' : '']"
          @click.prevent="selectTab('ATTACK')"
          >Combat</a
        >
        <a
          class="tab tab-lifted"
          :class="[activeTab === 'EQUIPMENT' ? 'tab-active' : '']"
          @click.prevent="selectTab('EQUIPMENT')"
          >Equipment</a
        >
        <a
          class="tab tab-lifted"
          :class="[activeTab === 'CYPHERS' ? 'tab-active' : '']"
          @click.prevent="selectTab('CYPHERS')"
          >Cypher/Artifact</a
        >
      </div>
    </div>
  </div>
</template>
