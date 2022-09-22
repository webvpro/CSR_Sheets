<template>
  <div>
    <PageHeader />
    <div id="main-body" class="">
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
