<script setup>
import { ref, inject } from "vue";
import CombatList from "@/components/sheets/CombatList.vue";
import EquipmentList from "@/components/sheets/EquipentList.vue";
import CyphersList from "@/components/sheets/CypherList.vue";

const props = defineProps({
  tabData: { type: Object, default: () => {} },
  selected: { type: String, default: "ATTACK" },
});
const eqData = ref(inject("equipmentData"));

const activeTab = ref(props.selected);
const armorValue = ref(0);
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
    <div class="card-body">
      <div class="card-tile tabs">
        <a
          class="tab tab-lifted"
          :class="[activeTab === 'background' ? 'tab-active' : '']"
          @click.prevent="selectTab('background')"
          >Background</a
        >
        <a
          class="tab tab-lifted"
          :class="[activeTab === 'secrets' ? 'tab-active' : '']"
          @click.prevent="selectTab('secrets')"
          >Secrets</a
        >
      </div>
      <textarea class="textarea textarea-primary" placeholder="Bio"></textarea>
    </div>
  </div>
</template>
