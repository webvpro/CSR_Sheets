<template>
  <div id="page-top" class="h-full my-3 drawer drawer-end scroll-mt-0">
    <input
      id="sheet-form-drawer"
      v-model="toggleSheetDrawer"
      type="checkbox"
      class="drawer-toggle"
    />
    <div class="drawer-content">
      <div class="container grid grid-cols-12 gap-6 mx-auto">
        <!-- profile -->
        <profile :profile-data="profile" />
        <!-- pools -->
        <div class="col-span-12 shadow-xl xl:col-span-6 card">
          <div
            class="text-center shadow stats stats-vertical md:stats-horizontal"
          >
            <stat-pool
              v-for="(stat, key) in statPools"
              :key="key"
              :pool-label="stat.label"
              :pool-key="stat.label.toUpperCase()"
              :pool-theme="stat.theme"
              :pool-edge="stat.edge"
              :pool-current="stat.current"
              :pool-total="stat.total"
              :pool-icon="stat.icon"
              @pool-select="openPool"
              @pool-action="openAction"
            />
          </div>
          <div class="bg-neutral text-neutral-content card-body">
            <div
              class="shadow bg-neutral text-neutral-content stats stats-vertical md:stats-horizontal"
            >
              <div class="recovery-stat">
                <div class="stat-title">Recovery</div>
                <div class="recovery-stat-val">
                  <button class="recovery-button" @click.prevent="openRecovery">
                    <v-icon name="gi-health-potion" scale="2.33" /><span
                      >2d6+2</span
                    >
                  </button>
                </div>
              </div>

              <div class="recovery-stat">
                <div class="stat-title">Rest</div>
                <div class="recovery-stat-val">
                  <div
                    class="grid grid-cols-2 grid-rows-2 gap-4 place-content-center w-fit"
                  >
                    <div class="form-control">
                      <label class="text-lg cursor-pointer label">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-primary"
                        />
                        <span class="ml-1 mr-auto text-lg label-text"
                          >Action</span
                        >
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="text-lg cursor-pointer label">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-primary"
                        />
                        <span class="px-1 text-lg label-text">1 hour</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="text-lg cursor-pointer label">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-primary"
                        />
                        <span class="px-1 text-lg label-text">10 Mins</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="text-lg cursor-pointer label">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-primary"
                        />
                        <span class="px-1 text-lg label-text">10 hrs</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recovery-stat">
                <div class="stat-title">Damage Track</div>
                <div class="recovery-stat-val">
                  <ul class="flex flex-col justify-start w-1/2">
                    <li class="w-fit formcontrol">
                      <label class="text-lg capitalize cursor-pointer label">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-primary"
                        />
                        <span class="px-2 text-lg capitalize label-text"
                          >impaired</span
                        >
                      </label>
                    </li>
                    <li class="w-fit formcontrol">
                      <label class="text-lg cursor-pointer label">
                        <input
                          type="checkbox"
                          class="checkbox checkbox-primary"
                        />
                        <span class="px-2 text-lg capitalize label-text"
                          >debilitated</span
                        >
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- skills -->
        <skills-abilites :tab-data="abilityGroups" />
        <!-- attacks equipment -->
        <attacks-equipment />
      </div>
    </div>
    <!-- left drawer -->
    <div class="drawer-side">
      <label for="sheet-form-drawer" class="drawer-overlay"></label>
      <ul class="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
    <label
      for="sheet-form-drawer"
      title="Create Source"
      class="fixed z-[5] flex items-center justify-center text-4xl duration-300 rounded-full w-9 h-9 md:w-16 md:h-16 drawer-button text-secondary-content bg-secondary bottom-1.5 right-1.5 drop-shadow-lg hover:bg-primary-focus hover:drop-shadow-2xl hover:animate-bounce"
    >
      <v-icon name="gi-gear-hammer" label="Change Character" scale="3.66" />
    </label>
  </div>

  <!-- Put this part before </body> tag -->
  <input
    id="action-modal"
    v-model="openModal"
    type="checkbox"
    class="modal-toggle"
  />

  <div class="modal modal-bottom sm:modal-middle">
    <div class="mockup-window modal-box lg:w-11/12 lg:max-w-3xl">
      <div class="modal-action">
        <div class="flex-1">
          <h1 class="capitalize">
            {{ modalAction }} {{ sheetModal.toLowerCase() }}
          </h1>
        </div>
        <label class="flex-none btn btn-circle" @click.prevent="closeModal">
          <v-icon name="hi-solid-x" scale="1.66" />
        </label>
      </div>
      <component
        :is="modalSwitch"
        :pool-data="statPools"
        :recovery-data="recovery"
        :pool-key="poolKey"
        :item-detail-data="itemDetailData"
        :item-doc-id="itemDocId"
        :item-type="itemType"
      />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, provide, watch, shallowRef } from "vue";
import { useAuthState } from "@/modules/firebase";
import StatPool from "@/components/sheets/StatPool.vue";
import ProfileCard from "@/components/sheets/Profile.vue";
import Profile from "@/components/sheets/Profile.vue";
import SkillAbility from "@/components/sheets/SkillsAbilites.vue";
import ActionCalc from "@/components/modals/actionCalc.vue";
import PoolCalc from "@/components/modals/poolCalc.vue";
import RecoveryCalc from "@/components/modals/recoveryCalc.vue";
import SkillsAbilites from "@/components/sheets/SkillsAbilites.vue";
import AttacksEquipment from "@/components/sheets/EquipmentCyphers.vue";
import ItemDetail from "@/components/modals/itemDetail.vue";

const openModal = ref(false);
const toggleSheetDrawer = ref(false);
const sheetDrawerForm = ref("profile");
const modalSwitch = shallowRef(null);
const modalAction = ref(null);
const itemDetailData = ref({});
const itemDocId = ref({});
const itemType = ref("");
const state = reactive({
  loading: false,
  game: { live: false, id: "1234XYZ" },
  statPools: {
    might: {
      current: 10,
      total: 15,
      edge: 1,
      label: "Might",
      theme: "red",
      icon: "gi-mighty-force",
    },
    speed: {
      current: 5,
      total: 12,
      edge: 1,
      label: "Speed",
      theme: "green",
      icon: "gi-running-ninja",
    },
    intellect: {
      current: 6,
      total: 10,
      edge: 2,
      label: "Intellect",
      theme: "blue",
      icon: "gi-smart",
    },
  },
  recovery: {
    rest: {
      ACTION: { label: "Action", used: false },
      ONEHOUR: { label: "1 hour", used: false },
      TENMINS: { label: "10 mins", used: false },
      TENHOURS: { label: "10 hrs", used: false },
    },
    dice: 2,
    mod: 2,
    mods: {
      enablers: [
        {
          docId: "xxx",
          label: "Healing Thing",
          add: 3,
          poolCost: {},
          temp: true,
        },
      ],
      actions: [
        {
          docId: "xxx",
          type: "ability",
          label: "Healing Touch",
          add: 1,
          poolCost: { pool: "intellect", cost: 3 },
        },
        {
          docId: "xxx",
          type: "skill",
          label: "First Aid",
          add: 1,
          poolCost: { pool: "intellect", cost: 3 },
        },
      ],
    },
  },
  profile: {
    name: "Professor Penelope Pilwicken",
    type: { docId: "xxx", label: "Adept", alias: "Arcane Engineer" },
    typeAlias: "Arcane Engineer",
    flavorsLabel: "Also Dabbles in",
    favors: [{ docId: "xxx", label: "Crafting" }],
    descriptor: {
      docId: "xxxx",
      label: "Inquisitive",
      alias: "",
      subs: [{ docId: "xxx", label: "Gnome" }],
    },
    focus: {
      docId: "xxx",
      label: "Crafts Unique Objects",
      alias: "Creates Magical Objects",
    },
    tier: 1,
    advancement: [{ label: "+4 Pool" }, { label: "+1 Edge" }],
    effort: 1,
    xp: 3,
  },
  targetMods: {
    enablers: [
      {
        docId: "xxx",
        label: "Healing Thing",
        add: 3,
        poolCost: {},
        temp: true,
      },
    ],
    actions: [
      {
        docId: "xxx",
        type: "ability",
        label: "Healing Touch",
        add: 1,
        poolCost: { pool: "intellect", cost: 3 },
      },
      {
        docId: "xxx",
        type: "skill",
        label: "First Aid",
        add: 1,
        poolCost: { pool: "intellect", cost: 3 },
      },
    ],
    assets: [],
    hindrances: [],
  },
  abilityGroups: {
    SKILLS: {
      label: "Skills",
      items: [
        {
          id: "X123",
          title: "Geography",
          alias: "Knows the Lands of Nee",
          description: "Knows the lands around Nee",
          pool: "Intellect",
          level: "TRAINED",
          icon: "gi-treasure-map",
        },
        {
          id: "X213",
          title: "Jeweler",
          alias: "Magic Shard Crafting",
          icon: "gi-gems",
          pool: "Intellect",
          level: "SPECIALIZED",
        },
        {
          id: "X223",
          title: "Social Interactions",
          alias: "",
          icon: "fa-regular-comments",
          pool: "Intellect",
          level: "HINDERED",
        },
        {
          id: "X224",
          name: "Woodworking",
          alias: "Craft Staffs and Wands",
          icon: "gi-toolbox",
          pool: "Intellect",
          level: "HINDERED",
        },
      ],
    },
    ABILITIES: {
      label: "abilities",
      items: [
        {
          docId: "XXX",
          title: "Onslaught",
          alias: "Arcane Bolts",
          mods: [
            { mod: "DAMAGE", pool: "MIGHT", amount: 4 },
            { mod: "DAMAGE", pool: "INTELLECT", amount: 2 },
          ],
          icon: "gi-magic-swirl",
          category: "SPECIALATTACK",
          level: "LOW",
          pool: "INTELLECT",
          cost: 1,
          type: "ACTION",
        },
        {
          title: "Critter Companion",
          alias: "Create Arcane Constructs",
          icon: "gi-three-friends",
          category: "COMPANION",
          level: "LOW",
          type: "ENABLER",
        },
        {
          title: "Entourage",
          icon: "gi-three-friends",
          category: "COMPANION",
          level: "LOW",
          type: "ENABLER",
        },
      ],
    },
    POWERSHIFTS: {
      label: "Power Shifts",
      items: [
        {
          title: "Accuracy",
          mods: [{ type: "attack", mod: "ease" }],
          icon: "gi-target-arrows",
          shifts: 1,
        },
        {
          title: "Healing",
          mods: [{ type: "rest", mod: "roll" }],
          icon: "gi-healing",
          shifts: 1,
        },
      ],
    },
    COMPANIONS: {
      label: "companions",
      items: [
        {
          title: "Robot Assistant",
          mods: [{ type: "attack", mod: "asset" }],
          icon: "gi-mono-wheel-robot",
          level: 2,
        },
      ],
    },
  },
  attackEquipmentGroups: {
    ATTACKS: [
      {
        type: "WEAPON",
      },
    ],
  },
});
const modalComponents = {
  POOL: PoolCalc,
  ACTION: ActionCalc,
  RECOVERY: RecoveryCalc,
  DETAIL: ItemDetail,
};
const { auth } = useAuthState();
const { statPools, recovery, profile, abilityGroups, attackEquipmentGroups } =
  state;
const sheetModal = ref("");
const poolKey = ref("");
const itemsType = ref("");
const selectedItemsType = ref("SKILLS");
const selectedEquipmentTab = ref("ATTACK");

const openRecovery = () => {
  modalAction.value = "";
  sheetModal.value = "RECOVERY";
  openModal.value = true;
};
const openAction = (key = null) => {
  modalAction.value = key;
  sheetModal.value = "ACTION";
  openModal.value = true;
};
const openPool = (key = null) => {
  modalAction.value = key;
  sheetModal.value = "POOL";
  openModal.value = true;
};

const openDetail = (id = "", itmType = "") => {
  sheetModal.value = "DETAIL";
  itemDocId.value = id;
  itemType.value = itmType;
  openModal.value = true;
};

const closeModal = () => {
  modalAction.value = "";
  sheetModal.value = "";
  openModal.value = false;
};

const openFormDrawer = (key) => {
  sheetDrawerForm.value = key;
  toggleSheetDrawer.value = true;
};

watch([sheetModal, modalAction], ([newModal, newPool]) => {
  modalSwitch.value = modalComponents[newModal];
  poolKey.value = newPool;
});
provide("poolData", statPools);
provide("abilityData", abilityGroups);
provide("equipmentData", attackEquipmentGroups);
provide("modalToggle", openModal);
provide("poolToggle", sheetModal);
provide("selectedPool", modalAction);
provide("itemActions", {
  openFormDrawer,
  openRecovery,
  openAction,
  openPool,
  openDetail,
});
provide(poolKey);
</script>
<style lang="postcss">
.recovery-stat {
  @apply text-2xl font-bold md:text-xl pb-2 justify-center text-center mb-2 w-full;
}
.recovery-button {
  @apply text-2xl md:text-xl btn-lg mx-auto w-10/12 gap-2 btn btn-primary text-primary-content mt-1;
}
.recovery-stat-val {
  @apply flex justify-center text-center stat-value text-neutral-content;
}
.label-text {
  @apply text-neutral-content;
}
</style>
