<template>
  <div class="flex flex-col flex-grow w-full h-full overflow-auto flex-nowrap">
    <header class="sticky top-0 z-40 bg-indigo-900 shadow">
      <PageHeader />
    </header>
    <div class="relative w-full h-full">
      <Suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <SkeletonLoader />
        </template>
      </Suspense>
    </div>
    <page-footer />
  </div>
</template>

<script>
import { useAuthState } from "@/modules/firebase";
import PageHeader from "@/components/PageHeader.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";
import PageFooter from "@/components/PageFooter.vue";
export default {
  components: { PageHeader, SkeletonLoader, PageFooter },
  setup() {
    const { user, error, loading, isAuthenicated } = useAuthState();
    return {
      user,
      error,
      isAuthenicated,
      loading,
    };
  },
};
</script>
