<template>
  <div class="h-full flex">
    <!-- Static sidebar for desktop -->
    <div class="flex flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <SidebarNav />
      </div>
    </div>
    <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
      <button
        type="button"
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="open"
      >
        Create New Source
      </button>
    </div>
    <SourceForm />
  </div>
</template>

<script>
import { ref, provide } from "vue";
import SourceForm from "@/components/slideoutforms/SourceForm.vue";
import SidebarNav from "@/components/sources/sourceNav.vue";

export default {
  components: {
    SidebarNav,
    SourceForm,
  },
  setup() {
    const show = ref(false);
    const open = () => (show.value = true);

    provide("openForm", show);

    return {
      SidebarNav,
      open,
      SourceForm,
    };
  },
};
</script>
