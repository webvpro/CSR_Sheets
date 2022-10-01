<template>
  <div class="flex flex-col h-screen">
    <PageHeader />
    <main id="main-body" class="flex-1 overflow-y-auto">
      <Suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <SkeletonLoader />
        </template>
      </Suspense>
    </main>
  </div>
</template>

<script>
import { useAuthState } from "@/modules/firebase";
import PageHeader from "@/components/PageHeader.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";
import PageFooter from "@/components/PageFooter.vue";
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
