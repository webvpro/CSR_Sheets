<template>
  <div class="h-full">
    <div class="flow-root bg-neutral">
      <ul role="list" class="list">
        <li class="list-header-item">Attacks</li>
        <li v-for="(attack, idx) in attacks" :key="idx" class="py-4 px-3">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <v-icon
                class="btn btn-square btn-primary"
                :name="attack.icon"
                alt=""
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="truncate text-neutral-content">
                {{ attack.title }}
              </p>
              <div class="text-xs capitalize text-neutral-content truncate">
                {{ attack?.pool ? attack.pool : "" }}({{
                  attack?.cost ? attack.cost : attack.task
                }})
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul role="list" class="list">
        <li class="list-header-item">Defense</li>
        <li v-for="(defense, idx) in defenses" :key="idx" class="py-4 px-3">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <v-icon
                class="btn btn-square btn-primary"
                :name="defense.icon"
                alt=""
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="truncate">
                {{ defense.title }}
              </p>
              <div class="text-xs capitalize text-neutral-content truncate">
                {{ defense?.pool ? defense.pool : "" }}(<span
                  class="capitalize"
                  >{{ defense?.cost ? defense.cost : defense.task }}</span
                >)
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul role="list">
        <li class="list-header-item">Armor</li>
        <li v-for="(armor, idx) in armors" :key="idx" class="py-4 px-3">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <v-icon
                class="btn btn-square btn-primary"
                :name="armor.icon"
                alt=""
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="truncate">
                {{ armor.title }}
              </p>
              <div class="text-xs capitalize text-neutral-content truncate">
                {{ armor.armor.toLowerCase() }}(<span class="capitalize">{{
                  armor.task
                }}</span
                >)
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-6">
      <button class="flex items-center justify-center w-full px-4 py-2 btn">
        Change
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from "vue";

const { openFormDrawer, openAction, openRecovery, openPool, openDetail } =
  inject("itemActions");
const editItems = () => openFormDrawer("COMBAT");
const openPoolAction = (key) => openAction(key);
const { COMBAT } = inject("equipmentData");
const attacks = ref(COMBAT.ATTACKS);
const defenses = ref(COMBAT.DEFENSE);
const armors = ref(COMBAT.ARMOR);
const totalDamage = (attack = null) => {
  let dmg = 0;
  if (attack && attack.weapon === "LIGHT") {
    dmg += attack.damageMod ? attack.damageMod + 2 : 2;
  }
  if (attack && attack.weapon === "MEDIUM") {
    dmg += attack.damageMod ? attack.damageMod + 4 : 4;
  }
  if (attack && attack.weapon === "HEAVY") {
    dmg += attack.damageMod ? attack.damageMod + 6 : 6;
  }
  if (attack && attack.weapon === "ABILITY") {
    dmg += attack.damage ? attack.damage : 0;
  }
  return dmg;
};
</script>
<style lang="postcss" scoped>
.list-header-item {
  @apply py-4 px-3 bg-secondary text-secondary-content font-semibold;
}
.list {
  @apply my-1 divide-y divide-primary mx-1 bordered border-neutral;
}
</style>
