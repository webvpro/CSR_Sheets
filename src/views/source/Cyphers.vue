<template>
  <div class="h-full flex">
    <!-- Static sidebar for desktop -->
    <div class="flex flex-shrink-0">
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
import SourceForm from "@/components/slideoutforms/SourceForm.vue";
import SidebarNav from "@/components/sources/sourceNav.vue";

export default {
  components: {
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
