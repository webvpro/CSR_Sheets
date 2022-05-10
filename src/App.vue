<template>
  <div class="h-full w-full flex flex-col flex-nowrap flex-grow overflow-auto">
    <header class="bg-indigo-900 shadow">
      <PageHeader />
    </header>
    <div class="h-full w-full">
      <Suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <SkeletonLoader />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import { useAuthState } from "@/modules/firebase";
import PageHeader from "@/components/PageHeader.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";
export default {
  components: { PageHeader, SkeletonLoader },
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
