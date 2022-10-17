<template>
  <div class="h-full">
    <div class="flow-root bg-neutral">
      <ul role="list" class="list">
        <li class="list-header-item">Assets</li>
        <li v-for="(asset, idx) in assets" :key="idx" class="py-4 px-3">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <v-icon
                class="btn btn-square btn-primary"
                :name="asset.icon"
                alt=""
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="truncate text-neutral-content">
                {{ asset.title }}
              </p>
              <div class="text-xs capitalize text-neutral-content truncate">
                {{ asset?.pool ? asset.pool : "" }}({{
                  asset?.skill ? asset.skill : asset.skill
                }})
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul role="list" class="list">
        <li class="list-header-item">General</li>
        <li v-for="(item, idx) in normal" :key="idx" class="py-4 px-3">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <v-icon
                class="btn btn-square btn-primary"
                :name="item.icon"
                alt=""
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="truncate">
                {{ item.title }}
              </p>
              <div class="text-xs capitalize text-neutral-content truncate">
                Qty: {{ item.qty }}
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul role="list">
        <li class="list-header-item">Weapons</li>
        <li v-for="(weapon, idx) in weapons" :key="idx" class="py-4 px-3">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <v-icon
                class="btn btn-square btn-primary"
                :name="weapon.icon"
                alt=""
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="truncate">
                {{ weapon.title }}
              </p>
              <div class="text-xs capitalize text-neutral-content truncate">
                {{ weapon.weapon.toLowerCase() }}(<span class="capitalize">{{
                  weapon.task
                }}</span
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
const { EQUIPMENT } = inject("equipmentData");
const assets = ref(EQUIPMENT.ASSETS);
const normal = ref(EQUIPMENT.NORMAL);
const weapons = ref(EQUIPMENT.WEAPONS);
const armors = ref(EQUIPMENT.ARMOR);
</script>
<style lang="postcss" scoped>
.list-header-item {
  @apply py-4 px-3 bg-secondary text-secondary-content font-semibold;
}
.list {
  @apply my-1 divide-y divide-primary mx-1 bordered border-neutral;
}
</style>
