<template>
  <div class="h-full flex">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <SidebarNav />
      </div>
    </div>
    <div class="flex flex-col min-w-0 flex-1 overflow-hidden"></div>
    <SourceForm />
  </div>
</template>

<script>
import { ref } from "vue";

import { XIcon } from "@heroicons/vue/outline";

import SourceForm from "@/components/slideoutforms/SourceForm.vue";
import SidebarNav from "@/components/sources/sourceNav.vue";

export default {
  components: {
    XIcon,
    SidebarNav,
    SourceForm,
  },
  setup() {
    const sidebarOpen = ref(false);

    return {
      sidebarOpen,
      SidebarNav,
    };
  },
};
</script>
<style lang="postcss">
.active-item {
  @apply text-gray-400 group-hover:text-gray-500;
}
.exact-active-item {
  @apply bg-gray-200 text-gray-900;
}
.side-nav-item {
  @apply flex items-center px-2 py-2 text-base font-medium rounded-md;
}
</style>
