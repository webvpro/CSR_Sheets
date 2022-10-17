<script setup>
import { ref, inject } from "vue";
const { closeFormDrawer } = inject("formDrawer");
const showDescriptorDetail = ref(false);
const showDescriptorSelect = ref(false);
const toggleDescriptorDetail = () => {
  showDescriptorDetail.value = !showDescriptorDetail.value;
};
</script>

<template>
  <div class="flex-1">
    <!-- Header -->
    <div class="px-4 py-6 bg-primary sm:px-6">
      <div class="flex items-start justify-between space-x-3">
        <div class="space-y-1">
          <DialogTitle class="text-lg font-medium text-primary-content">
            Edit Profile
          </DialogTitle>
        </div>

        <div class="flex items-center h-7">
          <button
            type="button"
            class="text-neutral-content hover:bg-neutral-focus btn btn-neutral btn-circle"
            @click.prevent="closeFormDrawer"
          >
            <span class="sr-only">Close panel</span>
            <v-icon name="hi-solid-x" scale="2" title="" />
          </button>
        </div>
      </div>
    </div>

    <!-- Divider container -->
    <div
      class="px-6 py-6 space-y-6 divide-y divide-gray-200 xs:py-0 xs:space-y-0"
    >
      <form class="flex-1" @submit="saveForm">
        <div class="flex-1 justify-center text-center w-full">
          <div class="avatar">
            <div
              class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            >
              <img src="/assets/images/ProfPthePortrait.png" />
            </div>
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs text-left">
            <label class="label">
              <span class="label-text">Is a,</span>
            </label>
            <div class="collapse">
              <input v-model="showDescriptorDetail" type="checkbox" />
              <div
                class="collapse-title font-medium"
                @click.prevent="toggleDescriptorDetail"
              >
                Inquisitive
                <span class="sr-only">Close Details</span>
                <v-icon
                  :name="
                    showDescriptorDetail
                      ? 'hi-arrow-circle-left'
                      : 'hi-arrow-circle-down'
                  "
                  scale="1"
                  title=""
                />
              </div>
              <div class="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <button class="btn btn-primary" @click.prevent="() => {}">
              Change
            </button>
          </div>
          <div v-if="showDescriptorSelect">
            <div>Pick One Descriptor</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
