<template>
  <div id="page-top" class="h-full my-3 drawer drawer-end scroll-mt-0">
    <input id="sheet-form-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="container grid grid-cols-12 gap-6 mx-auto">
        <profile />
        <div class="col-span-12 shadow-xl xl:col-span-6 card bg-base-100">
          <div
            class="text-center shadow stats stats-vertical md:stats-horizontal"
          >
            <stat-pool
              v-for="(stat, key) in statPools"
              :key="key"
              :pool-label="stat.label"
              :pool-color="stat.color"
              :pool-edge="stat.edge"
              :pool-current="stat.current"
              :pool-total="stat.total"
              :pool-icon="stat.icon"
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
      </div>
    </div>
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
      <v-icon name="gi-gear-hammer" label="View Source" scale="3.66" />
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
    <div class="mockup-window modal-box">
      <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
      <p class="py-4">
        You've been selected for a chance to get one year of subscription to use
        Wikipedia for free!
      </p>
      <div class="modal-action">
        <label for="action-modal" class="btn">Yay!</label>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, provide, computed } from "vue";
import { useAuthState } from "@/modules/firebase";
import StatPool from "@/components/sheets/StatPool.vue";
import ProfileCard from "@/components/sheets/Profile.vue";
import Profile from "../components/sheets/Profile.vue";

const modalScope = ref("");
const openModal = ref(false);
const openForm = ref(false);
const openRecovery = () => {
  openModal.value = true;
  modalScope.value = "RecoveryCalc";
};

const state = reactive({
  openForm: false,
  loading: false,
  game: { live: false, id: "1234XYZ" },
  statPools: {
    might: {
      current: 10,
      total: 15,
      edge: 1,
      label: "Might",
      color: "red-700",
      icon: "gi-mighty-force",
    },
    speed: {
      current: 5,
      total: 12,
      edge: 1,
      label: "Speed",
      color: "green-700",
      icon: "gi-running-ninja",
    },
    intellect: {
      current: 6,
      total: 10,
      edge: 1,
      label: "Intellect",
      color: "blue-700",
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
  },
});

const { statPools } = state;
const { auth } = useAuthState();
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
