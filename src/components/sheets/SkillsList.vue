<template>
  <div class="h-full">
    <div class="flow-root bg-neutral text-neutral-content">
      <ul role="list" class="list">
        <li v-for="(item, idx) in listData" :key="idx" class="py-4 px-3">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <v-icon
                class="btn btn-square btn-primary"
                :name="item.icon"
                alt=""
                @click.prevent="openDetail(item.id, listType)"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="truncate">
                {{ item.alias ? item.alias : item.title }}
              </p>
              <p class="text-xs text-neutral-content truncate">
                {{ item.alias ? item.title : "" }}
              </p>
            </div>
            <div>
              <button
                v-if="item.pool"
                class="inline-flex btn btn-circle btn-primary"
                @click.prevent="openPoolAction(item.pool)"
              >
                <v-icon
                  :name="
                    item?.pool
                      ? poolData[item.pool.toLowerCase()].icon
                      : 'gi-beams-aura'
                  "
                  scale="1.33"
                />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-6">
      <button
        class="flex items-center justify-center w-full px-4 py-2 btn"
        @click.prevent="editItems"
      >
        Change
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from "vue";

const props = defineProps({
  itemData: { type: Object, default: () => {} },
  itemType: { type: String, default: "" },
});

const poolData = ref(inject("poolData"));
const listType = ref(props.itemType);
const listData = ref(props.itemData);
const { openFormDrawer, openAction, openRecovery, openPool, openDetail } =
  inject("itemActions");
const editItems = () => openFormDrawer(listType.value);
const openPoolAction = (key) => openAction(key);
</script>
<style lang="postcss" scoped>
.list {
  @apply my-1 divide-y divide-primary mx-1 bordered border-neutral;
}
</style>
