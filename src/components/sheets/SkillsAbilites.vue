<script setup>
import { ref, computed, watch } from "vue";
import SheetList from "@/components/SheetList.vue";
const props = defineProps({
  tabData: { type: Object, default: () => {} },
  selected: { type: String, default: "SKILLS" },
});

const active = ref(props.selected);
const list = ref({});
list.value = computed(() => props.tabData[active.value].items);
const selectTab = (key) => {
  active.value = key;
};
</script>

<template>
  <div class="col-span-12 shadow-xl xl:col-span-6 card bg-base-100">
    <div class="card-title tabs">
      <a
        class="tab tab-lifted"
        :class="[active === 'SKILLS' ? 'tab-active' : '']"
        @click.prevent="selectTab('SKILLS')"
        >Skills</a
      >
      <a
        class="tab tab-lifted"
        :class="[active === 'ABILITIES' ? 'tab-active' : '']"
        @click.prevent="selectTab('ABILITIES')"
        >Abilities</a
      >
      <a
        class="tab tab-lifted"
        :class="[active === 'POWERSHIFTS' ? 'tab-active' : '']"
        @click.prevent="selectTab('POWERSHIFTS')"
        >Shifts</a
      >
      <a
        class="tab tab-lifted"
        :class="[active === 'COMPANIONS' ? 'tab-active' : '']"
        @click.prevent="selectTab('COMPANIONS')"
        >Companions</a
      >
    </div>
    <div class="card-body">
      <sheet-list :key="active" :item-data="list" :item-type="active" />
    </div>
  </div>
</template>
