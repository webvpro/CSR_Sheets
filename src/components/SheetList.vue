<template>
  <div class="h-full">
    <div class="flow-root mt-6 pt-4 overflow-y-auto h-full md:h-56 bg-neutral">
      <ul
        role="list"
        class="-my-5 divide-y divide-primary mx-1 bordered border-neutral"
      >
        <li v-for="(item, idx) in listData" :key="idx" class="py-4 px-3">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <v-icon
                class="btn btn-square btn-primary"
                :name="item.icon"
                alt=""
                @click.prevent="openDetail(item.id)"
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
                class="inline-flex btn btn-circle btn-primary"
                @click.prevent="openAction(item.pool)"
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
  itemType: { type: String, default: "SKILLS" },
});

const poolData = ref(inject("poolData"));
const listType = ref(props.itemType);
const listData = ref(props.itemData);
const { openFormDrawer, openAction, openRecovery, openPool, openDetail } =
  inject("itemActions");
const editItems = () => openFormDrawer(listType.value);
</script>
