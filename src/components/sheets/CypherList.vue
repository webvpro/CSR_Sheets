<template>
  <div class="h-full">
    <div class="flow-root bg-neutral">
      <ul role="list" class="list">
        <li class="list-header-item">Cyphers limit ({{ cypherLimit }})</li>
        <li v-for="(cypher, idx) in cyphers" :key="idx" class="py-4 px-3">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <v-icon
                class="btn btn-square btn-primary"
                :name="cypher.icon"
                alt=""
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="truncate text-neutral-content">
                {{ cypher.title }}
              </p>
              <div class="text-xs capitalize text-neutral-content truncate">
                Level: {{ cypher.level }}
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul role="list" class="list">
        <li class="list-header-item">Artifacts</li>
        <li v-for="(artifact, idx) in artifacts" :key="idx" class="py-4 px-3">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <v-icon
                class="btn btn-square btn-primary"
                :name="artifact.icon"
                alt=""
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="truncate">
                {{ defense.title }}
              </p>
              <div class="text-xs capitalize text-neutral-content truncate">
                Depletion: 1in20
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
const { SPECIAL } = inject("equipmentData");
const cyphers = ref(SPECIAL.CYPHERS.list);
const cypherLimit = ref(SPECIAL.CYPHERS.limit);
const artifacts = ref(SPECIAL.ARTIFACTS);
</script>
<style lang="postcss" scoped>
.list-header-item {
  @apply py-4 px-3 bg-secondary text-secondary-content font-semibold;
}
.list {
  @apply my-1 divide-y divide-primary mx-1 bordered border-neutral;
}
</style>
