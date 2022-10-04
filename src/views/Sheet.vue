<template>
  <div id="page-top" class="container justify-center h-full mx-auto">
    <div class="grid grid-cols-12 gap-6">
      <profile />
      <div
        class="col-span-12 shadow-xl md:col-span-6 card card-compact bg-base-100"
      >
        <div class="shadow stats stats-horizontal">
          <stat-pool
            :pool-label="might.label"
            pool-color="red-700"
            :pool-edge="might.edge"
            :pool-current="might.current"
            :pool-total="might.total"
            pool-icon="gi-mighty-force"
          />
          <stat-pool
            pool-label="Speed"
            pool-color="green-700"
            pool-edge="1"
            pool-current="10"
            pool-total="10"
            pool-icon="gi-running-ninja"
          />
          <stat-pool
            pool-label="Intellect"
            pool-color="blue-700"
            pool-edge="1"
            pool-current="10"
            pool-total="10"
            pool-icon="gi-smart"
          />
        </div>
        <div class="card-body">
          <div class="shadow stats">
            <div class="stat">
              <div class="text-red-500 stat-figure">
                <v-icon name="gi-healing-shield" scale="3" />
              </div>
              <div class="font-semibold stat-title">Recovery</div>
              <div class="stat-value">
                <div class="text-lg btn btn-accent">2d6+2</div>
              </div>
            </div>

            <div class="stat">
              <div class="font-semibold stat-title">Rest</div>
              <div class="stat-value">
                <div class="flex w-full">
                  <div class="w-1/2 form-control">
                    <label class="text-xs cursor-pointer label">
                      <input
                        type="checkbox"
                        class="checkbox checkbox-sm checkbox-primary"
                      />
                      <span class="ml-1 mr-auto text-sm label-text"
                        >Action</span
                      >
                    </label>
                  </div>
                  <div class="w-1/2 form-control">
                    <label class="text-xs cursor-pointer label">
                      <input
                        type="checkbox"
                        class="checkbox checkbox-sm checkbox-primary"
                      />
                      <span class="ml-1 mr-auto text-sm label-text"
                        >1 hour</span
                      >
                    </label>
                  </div>
                </div>
                <div class="flex w-full">
                  <div class="w-1/2 form-control">
                    <label class="text-xs cursor-pointer label">
                      <input
                        type="checkbox"
                        class="checkbox checkbox-sm checkbox-primary"
                      />
                      <span class="ml-1 mr-auto text-sm label-text"
                        >10 Mins</span
                      >
                    </label>
                  </div>
                  <div class="w-1/2 form-control">
                    <label class="text-xs cursor-pointer label">
                      <input
                        type="checkbox"
                        class="checkbox checkbox-sm checkbox-primary"
                      />
                      <span class="ml-1 mr-auto text-sm label-text"
                        >10 hrs</span
                      >
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="stat">
              <div class="stat-figure text-warning">
                <v-icon name="gi-broken-bone" scale="3" />
              </div>
              <div class="font-semibold stat-title">Damage Track</div>
              <div class="stat-value">
                <label class="text-xs capitalize cursor-pointer label">
                  <input
                    type="checkbox"
                    class="checkbox checkbox-sm checkbox-primary"
                  />
                  <span class="ml-1 mr-auto text-sm capitalize label-text">impaired</span>
                </label>
                <label class="text-xs cursor-pointer label">
                  <input
                    type="checkbox"
                    class="checkbox checkbox-sm checkbox-primary"
                  />
                  <span class="ml-1 mr-auto text-sm capitalize label-text"
                    >debilitated</span
                  >
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Put this part before </body> tag -->
  <input id="action-modal" type="checkbox" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
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

const open = ref(true);

const state = reactive({
  openForm: false,
  loading: false,
  game: { live: false, id: "1234XYZ" },
  schema: {},
  data: {},
  statPools: {
    might: { current: 10, total: 15, edge: 1, label: "Might" },
    speed: { current: 5, total: 15, edge: 1, label: "Speed" },
    intellect: { current: 10, total: 15, edge: 1, label: "Intellect" },
  },
});

const { might, speed, intellect } = state.statPools;
const { auth } = useAuthState();
</script>
<style lang="postcss">
.pool-stat {
  @apply flex flex-col text-sm font-semibold text-center;
}
</style>
